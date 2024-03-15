import { toast } from "vue3-toastify";
import { AxiosResponse, AxiosError } from 'axios';


export const useContactStore = defineStore("contact", () => {
const nuxtApp = useNuxtApp();
const dialog = useDialogStore();
const router = useRouter();

interface ContactPayload {
    fullName: string;
    email: string;
    phone: {
        number: string;
        code: string;
        local: string;
    };
    message: string;
    accountType: string;
}

interface ContactResponse {
    fullName: string;
    email: string;
    phone: {
        number: string;
        code: string;
        local: string;
    };
    message: string;
    accountType: string;
}

function createContact(payload: ContactPayload): Promise<ContactResponse> {
return new Promise<ContactResponse>((resolve, reject) => {
    nuxtApp.$api.contact
    .contactUs(payload)
    .then((response: AxiosResponse<ContactResponse>) => {
        if (response.status === 201) {
        resolve(response.data);
        toast.success("Message sent successfully...");
        setTimeout(() => {
            router.push("/");
        }, 1500);
        } else {
        reject("Failed to send message. Please try again later.");
        toast.error("Failed to send message. Please try again later.");
        }
    })
    .catch((error: AxiosError) => {
        reject(error.message || "An error occurred. Please try again later.");
        toast.error(
        error.message || "An error occurred. Please try again later."
        );
    });
});
}
return {
    createContact,
};
});