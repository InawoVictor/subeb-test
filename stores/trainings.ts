import { toast } from "vue3-toastify";
import { AxiosResponse, AxiosError } from 'axios';

interface Training {
    id: string;
    admin: string,
    title: string;
    content: string;
    blogCoverImage: string;
    trainingStatus: string;
    dateCreated: string;
    datePublished: string;
    updatedAt: string;
}

export const useTrainingsStore = defineStore('trainings', () => {
    const dialog = useDialogStore();
    const nuxtApp = useNuxtApp();

    function getTrainings() {
        return new Promise<Training[]>((resolve, reject) => {
            dialog.showLoading("Loading Projects...");
        
            nuxtApp.$api.trainings.getTrainings().then((response: AxiosResponse) => {
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
        getTrainings
    }
})