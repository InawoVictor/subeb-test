export default (axios) => ({
    getTrainings() {
        return axios.get("/training/get-all-training");
    },
    getSingleTraining(id: string) {
        return axios.get("/training/get-training-by-id/" + id);
    },
    filterTrainingsStatus(status: string) {
        return axios.get("/training/search?trainingStatus[0]=" + status);
    },
});