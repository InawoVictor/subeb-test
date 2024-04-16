export default (axios) => ({
    getGallery() {
        return axios.get("/gallery/get-all-gallery");
    },
});