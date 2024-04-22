export default (axios) => ({
    getProjects() {
        return axios.get("/project/get-all-project");
    },
});