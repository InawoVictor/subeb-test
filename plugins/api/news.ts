export default (axios) => ({
    getNews() {
        return axios.get("/news/get-all-news");
    },
});