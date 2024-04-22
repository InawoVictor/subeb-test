import { toast } from "vue3-toastify";
import { AxiosResponse, AxiosError } from 'axios';

interface Gallery {
    id: string;
    admin: string,
    title: string;
    content: string;
    galleryCoverImage: string;
    dateCreated: string;
    datePublished: string;
    updatedAt: string;
}

export const useGalleryStore = defineStore('gallery', () => {
    const dialog = useDialogStore();
    const nuxtApp = useNuxtApp();

    function getGallery() {
        return new Promise<Gallery[]>((resolve, reject) => {
            dialog.showLoading("Loading Subjects...");
        
            nuxtApp.$api.gallery.getGallery().then((response: AxiosResponse) => {
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
        getGallery
    }
})