import axios from "axios";
import Contact from "./contact"; // Import the User API function

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const apiBaseUrl = config.public.baseURL;
  
  // Create a shared Axios instance with base URL and headers
  const api = axios.create({
    baseURL: apiBaseUrl,
    headers: {
      common: {}, // Add any common headers here
    },
  });

  // Extend the API object with custom API functions
  const init = {
    contact: Contact(api), // Pass the shared Axios instance to User API function
  };

  // Provide the extended API object for global access
  return {
    provide: {
      api: init,
    },
  };
});