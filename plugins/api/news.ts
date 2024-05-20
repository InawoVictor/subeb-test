export default (axios) => ({
    getNews() {
        return axios.get("/news/get-all-news");
    },
    getSingleNews(id: string) {
        return axios.get("/news/get-news-by-id/" + id);
    },
});