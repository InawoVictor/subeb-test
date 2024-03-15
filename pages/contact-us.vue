<template>
    <ResourcesHero title1="Resources" title2="Contact" />
    <div class="w-full h-[120vh] flex lg:flex-row flex-col relative">
        <div class="bg-white flex-1 lg:h-full "></div>
        <div class="lg:w-[460px] w-full background lg:h-full h-[280px]"></div>
        <div class="absolute flex lg:flex-row flex-col gap-x-16 gap-y-8 lg:top-[100px] top-[0] container-2 stay-center">
            <div class="lg:w-[545px] w-full pt-8 ">
                <div class="w-full ">
                    <h1 class="font-dmSans lg:text-[54px] md:text-[34px] text-[23px] mb-4  md:mb-8 font-bold text-black">
                        Get in <span class="text-primary">Touch</span>
                    </h1>
                    <p class="text-[16px] md:text-sm  font-bold font-dmSans text-black">
                        CRSUBEB is the principal body charged with 
                        the responsibility of delivering
                        Basic education has its vision, mission, 
                        core values, and benchmarks.
                    </p>
                </div>
                <form @submit.prevent="handleSubmit" class="flex w-full mt-4 lg:mt-8 flex-col lg:gap-y-6 gap-y-3">
                    <div class="flex flex-col">
                        <InputText type="text" v-model="formData.fullName" placeholder="Name*" required class="input"/>
                        <small v-if="!isValidFullName" class="text-red-400">Name must be more than 8 characters</small>
                    </div>
                    <div class="flex flex-col">
                        <InputText type="email" v-model="formData.email" placeholder="Email*" required class="input"/>
                        <small v-if="!isValidEmail" class="text-red-400">Email is not valid</small>
                    </div>
                    <!-- <input type="text" v-model="phonenumber" placeholder="Phone number*" class="input"/> -->
                    <div class="flex flex-col">
                        <InputGroup>
                            <InputGroupAddon>
                                <Dropdown v-model="code" :options="codes" optionLabel="name" required placeholder="code" class="w-full input md:w-14rem" />
                            </InputGroupAddon>
                            <InputText type="tel" placeholder="Phone number*" v-model="formData.phone.number" class="input" required />
                        </InputGroup>
                        <small v-if="!isValidPhoneNumber" class="text-red-400">Phone number must be 10 characters</small>
                    </div>
                    <button type="submit" class="submit-btn" :disabled="isLoading">Send</button>
                </form>
                <div class="flex md:flex-row flex-col justify-between items-center mt-6 lg:mt-12">
                    <div class="flex items-center gap-3">
                        <img src="/svg/phone.svg" class="w-[22px] h-[22px]" alt="">
                        <div class="flex flex-col ">
                            <span class="font-dmSans font-bold md:text-[13px] text-[11px]">PHONE</span>
                            <span class="font-montserrat font-normal md:text-[13px] text-[11px]">0803 922 6542</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <img src="/svg/whatsapp.svg" class="w-[22px] h-[22px]" alt="">
                        <div class="flex flex-col ">
                            <span class="font-dmSans font-bold md:text-[13px] text-[11px]">WHATSAPP</span>
                            <span class="font-montserrat font-normal md:text-[13px] text-[11px]">0803 922 6542</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <img src="/svg/email.svg" class="w-[22px] h-[22px]" alt="">
                        <div class="flex flex-col ">
                            <span class="font-dmSans font-bold md:text-[13px] text-[11px]">EMAIL</span>
                            <span class="font-montserrat font-normal md:text-[13px] text-[11px]">info@crsubeb.com.ng</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:w-[545px] w-full lg:h-[650px] h-[244px]  lg:mt-[-60px]">
                <img src="/img/map.png" alt="" class="lg:object-contain object-cover h-full w-full">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface FormData {
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

const contact = useContactStore()

const code = ref({
    name: ""
})
const isLoading = ref(false)

const formData= reactive<FormData>({
    fullName: '',
    email: '',
    phone: {
        code: '',
        number: '',
        local: '0',
    },
    message: "message content",
    accountType: "SUBEB",
})

watch(code, (value) => {
    formData.phone.code = value.name
})

const countryCodes = ref(["+234", "+237", "+228", "+233", "+229", "+227"]);

const codes = computed(() => {
    return countryCodes.value.map((item: string) => {
        return {
            name: item,
        }
    })
})

const isValidFullName = computed(() => formData.fullName.length >= 8);
const isValidEmail = computed(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(formData.email);
});

const isValidPhoneNumber = computed(() => formData.phone.number.length === 10);

const isValidForm = computed(
    () =>
    isValidFullName.value &&
    isValidEmail.value &&
    isValidPhoneNumber.value
);

const handleSubmit = async () => {
    isLoading.value = true
    await contact.createContact(formData)
    isLoading.value = false
}



</script>

<style scoped>
.background {
  background: linear-gradient(to right, rgba(13, 153, 255, .8), rgba(13, 153, 255, .8)),
  url('/img/subeb-building.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
} 
.stay-center{
  left: 50%;
  transform: translateX(-50%);
}

</style>