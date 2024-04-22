export default (axios) => ({
    getTrainings() {
        return axios.get("/training/get-all-training");
    },
});