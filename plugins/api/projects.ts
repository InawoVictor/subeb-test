export default (axios) => ({
    getProjects() {
        return axios.get("/project/get-all-project");
    },
    getSingleProject(id: string) {
        return axios.get("/project/get-project-by-id/" + id);
    },
    filterProjectYear(year: string) {
        return axios.get("/project/search?year=" + year);
    },
});