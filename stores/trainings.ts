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
                dialog.closeLoading();
                reject(error.message || "An error occurred. Please try again later.");
                toast.error(
                    error.message || "An error occurred. Please try again later."
                );
            })
        });
    }

    function getSingleTraining(id: string) {
        return new Promise((resolve, reject) => {
            dialog.showLoading("Loading Projects...");
        
            nuxtApp.$api.trainings.getSingleTraining(id).then((response: AxiosResponse) => {
                dialog.closeLoading();
                resolve(response.data);
            }).catch((error: AxiosError) => {
                dialog.closeLoading();
                reject(error.message || "An error occurred. Please try again later.");
                toast.error(
                    error.message || "An error occurred. Please try again later."
                );
            })
        });
    }
    function filterTrainingsStatus(status: string) {
        return new Promise((resolve, reject) => {
            dialog.showLoading("Loading Projects...");
        
            nuxtApp.$api.trainings.filterTrainingsStatus(status).then((response: AxiosResponse) => {
                dialog.closeLoading();
                resolve(response.data);
            }).catch((error: AxiosError) => {
                dialog.closeLoading();
                reject(error.message || "An error occurred. Please try again later.");
                toast.error(
                    error.message || "An error occurred. Please try again later."
                );
            })
        });
    }

    return {
        getTrainings,
        getSingleTraining,
        filterTrainingsStatus
    }
})