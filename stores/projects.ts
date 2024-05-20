import { toast } from "vue3-toastify";
import { AxiosResponse, AxiosError } from 'axios';

interface Project {
    id: string;
    title: string;
    content: string;
    blogCoverImage: string
}

export const useProjectsStore = defineStore('projects', () => {
    const dialog = useDialogStore();
    const nuxtApp = useNuxtApp();

    function getProjects() {
        return new Promise<Project[]>((resolve, reject) => {
            dialog.showLoading("Loading Projects...");
        
            nuxtApp.$api.projects.getProjects().then((response: AxiosResponse) => {
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

    function getSingleProject(id: string) {
        return new Promise<Project[]>((resolve, reject) => {
            dialog.showLoading("Loading Projects...");
        
            nuxtApp.$api.projects.getSingleProject(id).then((response: AxiosResponse) => {
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

    function filterProjectsYear(year: string) {
        return new Promise<Project[]>((resolve, reject) => {
            dialog.showLoading("Loading Projects...");        
            nuxtApp.$api.projects.filterProjectYear(year).then((response: AxiosResponse) => {
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
        getProjects,
        getSingleProject,
        filterProjectsYear,
    }
})