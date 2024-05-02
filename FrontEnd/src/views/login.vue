<script setup>

</script>

<template>
    <div class="w-[1800px] h-[940px] grid grid-flow-col  justify-between items-start">
        <div class="w-[900px] h-[940px] flex items-center justify-center">
            <img class="h-[640px] w-[640px]" src="../assets/image/Illustration.png" alt="">
        </div>
        <div class="w-[900px] flex justify-center">
            <div class="w-[768px] h-[940px] rounded-xl bg-white p-10 text-center">
                <h1 class="text-3xl">Welcom to</h1>
                <h2 class="text-[#6358DC] font-bold text-5xl mt-2">You nine school</h2>
                <button class="w-full h-[78px] shadow-[0_5px_15px_5px_rgba(0,0,0,0.2)] rounded-lg mt-12">
                    <span class="w-48 mx-auto flex justify-between items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48">
                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                    Login with Google
                    </span>
                </button>
                <button class="w-full h-[78px] shadow-[0_5px_15px_5px_rgba(0,0,0,0.2)] rounded-lg mt-8">
                    <span class="w-48 mx-auto flex justify-between items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="36" viewBox="0,0,256,256">
                            <g fill="#006eff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M32,11h5c0.552,0 1,-0.448 1,-1v-6.737c0,-0.524 -0.403,-0.96 -0.925,-0.997c-1.591,-0.113 -4.699,-0.266 -6.934,-0.266c-6.141,0 -10.141,3.68 -10.141,10.368v6.632h-7c-0.552,0 -1,0.448 -1,1v7c0,0.552 0.448,1 1,1h7v19c0,0.552 0.448,1 1,1h7c0.552,0 1,-0.448 1,-1v-19h7.222c0.51,0 0.938,-0.383 0.994,-0.89l0.778,-7c0.066,-0.592 -0.398,-1.11 -0.994,-1.11h-8v-5c0,-1.657 1.343,-3 3,-3z"></path></g></g>
                        </svg>
                    Login with Facebook
                    </span>
                </button>
                <div class="mt-8 h-6 w-full flex items-center justify-center">
                    <hr class="h-[2px] w-full border-none bg-[lightgrey]"/>
                    <div class="w-20 absolute bg-white text-center mx-atuo">OR</div>
                </div>
                <form action="" class="mt-12 flex flex-col justify-between h-[350px] ">
                    <input class="h-[77px] w-full rounded-xl bg-[#ECECEC] pl-6" type="text" name="" id="" placeholder="example@gmail.com">
                    <input class="h-[77px] w-full rounded-xl bg-[#ECECEC] pl-6" type="password" name="" id="" placeholder="********">
                    <div class="w-full my-4 flex justify-between">
                        <span class="text-xl flex items-center">
                            <input class="h-[20px] w-[20px] mr-3" type="checkbox" name="" id="">
                            Remember me
                        </span>
                        <a class="text-[#6358DC] font-semibold text-lg">Forgot Password?</a>
                    </div>
                    <button class="w-full h-[77px] rounded-xl bg-[#6358DC] text-[#ffffff] text-xl">Login</button>
                </form>
                <h2 class="mt-7 text-xl ">Don’t have an account? <a class="text-[#6358DC]">Register</a></h2>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>