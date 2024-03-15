export default (axios) => ({
    contactUs(payload) {
      return axios.post("/news/contact/create", payload);
    },
});