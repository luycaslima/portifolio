<template>
    <button id= "go-up-button" v-on:click="GoUp()" ><img src="../assets/GoUp_button.svg" alt="go up image"> </button>
</template>


<script>

export default{
    name: 'GoUpButton',
    methods:{
        GoUp(){
            window.scrollTo(0,0);
        }
    }
}
//https://medium.com/@Taha_Shashtari/hide-navbar-on-scroll-down-in-vue-fb85acbdddfe
</script>

<style scoped></style>