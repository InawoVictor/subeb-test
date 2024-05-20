import axios from "axios";
import Contact from "./contact";
import Gallery from "./gallery";
import News from "./news";
import Projects from "./projects";
import Trainings from "./trainings";

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
  // Pass the shared Axios instance to User API function
  const init = {
    contact: Contact(api), 
    gallery: Gallery(api), 
    news: News(api), 
    projects: Projects(api), 
    trainings: Trainings(api), 
  };

  // Provide the extended API object for global access
  return {
    provide: {
      api: init,
    },
  };
});