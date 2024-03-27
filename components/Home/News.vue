<template>
    <div class="bg-[#F2FDFF] mb-40">
        <div class="news-container py-16 ">
            <h6 class="text-primary">Latest News</h6>
            <div class="mt-8 border-solid border-[3px] flex items-center justify-center w-full h-[463px] rounded-[19px] border-primary">
                <div class="flex flex-col gap-y-3 items-center news-after">
                    <img src="/svg/no-news.svg" alt="No news">
                    <p class="text-primary text-[40px] font-semibold leading-11 font-arimo ">No News Yet</p>
                </div>
            </div>  
        </div>
    </div>
</template>

<style>
.news-after::after{
    content: "";
    height: 2px;
    /* position: absolute; */
    width: 120px;
    left: 0;
    background: #020066;
}
</style>