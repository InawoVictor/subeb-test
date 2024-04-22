import { toast } from "vue3-toastify";
import { AxiosResponse, AxiosError } from 'axios';

interface News {
    id: string;
    title: string;
    content: string;
    blogCoverImage: string;
    dateCreated: string;
    datePublished: string;
    updatedAt: string;
}

export const useNewsStore = defineStore('news', () => {
    const dialog = useDialogStore();
    const nuxtApp = useNuxtApp();

    function getNews() {
        return new Promise<News[]>((resolve, reject) => {
            dialog.showLoading("Loading Projects...");
        
            nuxtApp.$api.news.getNews().then((response: AxiosResponse) => {
                dialog.closeLoading();
                resolve(response.data);
            }).catch((error: AxiosError) => {
                reject(error.message || "An error occurred. Please try again later.");
                    toast.error(
                    error.message || "An error occurred. Please try again later."
                );
            })
        });
    }

    return {
        getNews
    }
})