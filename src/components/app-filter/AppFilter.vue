<template >
    <DangerButton class="btn btn-danger mt-2 " v-for="button in Buttons">{{ button.name }}</DangerButton>
</template>
<script>


export default {
    data() {    
        return {
            Buttons: [
                {
                    name: 'Barcha kinolar'
                },
                {
                    name: 'Mashxur kinolar'
                },
                {
                    name: "Eng ko'p ko'rilgan"
                }
            ]
        }
    }
}

</script>
<style scoped>
.btn {
    margin-right: 5px;
}

.btn:active {
    transform: scale(0.9);
}
</style>