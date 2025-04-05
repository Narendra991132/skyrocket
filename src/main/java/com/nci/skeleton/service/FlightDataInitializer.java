package com.nci.skeleton.service;

import com.nci.skeleton.entity.Flight;
import com.nci.skeleton.repository.FlightRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.*;

@Component
public class FlightDataInitializer implements CommandLineRunner {

    private final FlightRepository flightRepository;

    public FlightDataInitializer(FlightRepository flightRepository) {
        this.flightRepository = flightRepository;
    }

    private final List<String> airlines = List.of("Lufthansa", "Air India", "Vistara",
            "Aer Lingus", "Etihad", "British Airways", "SWISS",
            "Qatar Airways", "IndiGo Airlines", "Ryanair");

    private final List<BigDecimal> prices = List.of(
            BigDecimal.valueOf(1200), BigDecimal.valueOf(600), BigDecimal.valueOf(300),
            BigDecimal.valueOf(1800), BigDecimal.valueOf(950), BigDecimal.valueOf(450),
            BigDecimal.valueOf(1650), BigDecimal.valueOf(1450), BigDecimal.valueOf(1100),
            BigDecimal.valueOf(700), BigDecimal.valueOf(800));

    private final List<String> allFeatures = List.of("Premium", "Free Cancellation", "Meals Included", "Extra Legroom", "In-flight Entertainment", "WiFi");

    private final List<String> allImages = List.of(
            "https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.jpg?s=612x612&w=0&k=20&c=LJWadbs3B-jSGJBVy9s0f8gZMHi2NvWFXa3VJ2lFcL0=",
            "https://img.freepik.com/free-photo/airplane_74190-463.jpg",
            "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/10/Getty-1-1.jpg",
            "https://media.npr.org/assets/img/2021/10/06/gettyimages-1302813215_wide-a248aa0418c5154e72d6a555f556bf5d99e7cac7.jpg",
            "https://www.nzherald.co.nz/resizer/v2/OV7CZFDEV62GCVBNB2T3CN4FMU.jpg?auth=44e4956b15ff6b4242ef2808804d97ac0f03b135278b136f50c09a79831447f9&width=992&height=558&quality=70&smart=true",
            "https://www.netflights.com/blog/wp-content/uploads/2025/01/SingaporeAirlinesPremiumEconomy.png",
            "https://www.tripbeam.com/blog/wp-content/uploads/2018/08/QFL-1024x724.jpg",
            "https://tripbeam.com/blog/wp-content/uploads/2018/08/Upgrade_912x444.jpg",
            "https://www.businessclass.com/_next/image?url=https%3A%2F%2Fmedia.businessclass.com%2F2023%2F05%2F1683712749444-Singapore-Airlines-business-class-2.jpg&w=1920&q=75",
            "https://samchui.com/wp-content/uploads/2024/07/Qatar_Airways_QSuite_NextGen_-07.jpg"
    );

    private int randomRange(int start, int end) {
        return new Random().nextInt((end - start) + 1) + start;
    }

    @Override
    public void run(String... args) throws Exception {
        if (flightRepository.count() >= 1000) {
            System.out.println("Flight repository already seeded.");
            return;
        }

        List<Flight> flights = new ArrayList<>();
        for (int i = 0; i < 1000; i++) {
            Flight flight = new Flight();
            flight.setId(UUID.randomUUID());
            flight.setAirline(airlines.get(randomRange(0, airlines.size() - 1)));
            flight.setDuration(randomRange(1, 18) + " Hours");
            flight.setPrice(prices.get(randomRange(0, prices.size() - 1)));
            flight.setFromAirport(String.valueOf(randomRange(1, 38)));
            flight.setToAirport(String.valueOf(randomRange(1, 38)));
            flight.setFlyDate(LocalDate.now().plusDays(randomRange(1, 90)).toString());
            flight.setStatus("AVAILABLE");

            flight.setFeatures(new ArrayList<>(allFeatures.subList(0, randomRange(1, 4))));
            int fromIndex = new Random().nextInt(allImages.size()); // 0 to 9
            int maxImages = randomRange(1, 4);
            int toIndex = Math.min(fromIndex + maxImages, allImages.size()); // cap at 10

            flight.setImages(new ArrayList<>(allImages.subList(fromIndex, toIndex)));

            flights.add(flight);
        }

        // flightRepository.saveAll(flights);
        System.out.println("✅ 1000 Flights inserted.");
    }
}
