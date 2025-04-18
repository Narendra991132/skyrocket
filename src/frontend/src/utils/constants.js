const API_URL = "http://23429615-skyrocket-lb-2007696089.eu-central-1.elb.amazonaws.com";
// const API_URL = "http://localhost:8080";
const API_VERSION = "/api/v1";
const API_BASE_URL = `${API_URL}${API_VERSION}`;
const API_MASTER_DATA_URL = `${API_BASE_URL}/master`;
const API_FLIGHT_URL = `${API_BASE_URL}/flight`;
const API_REGISTER_URL = `${API_BASE_URL}/auth/register`;
const API_LOGIN_URL = `${API_BASE_URL}/auth/login`;
const API_BOOKING_URL = `${API_BASE_URL}/booking`;

const PROJECT_NAME = "Skyrocket";

export {
  PROJECT_NAME,
  API_URL,
  API_VERSION,
  API_LOGIN_URL,
  API_BASE_URL,
  API_MASTER_DATA_URL,
  API_FLIGHT_URL,
  API_REGISTER_URL,
  API_BOOKING_URL,
};
