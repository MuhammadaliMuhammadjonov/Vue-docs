<template >
    <li>
        <p>Sherlock Holmes</p>
        <input type="number" class="form form-control" defaultValue='100'>

        <div class="buttons">
            <button class="btn">
                <i class="fa-regular fa-heart"></i>
                <!-- <i class="fa-solid fa-heart"></i> -->
            </button>
            <button class="btn">
                <i class="fa-solid fa-trash"></i>
            </button>

            <button class="btn">
                <i class="fa-solid fa-star "></i>
            </button>


        </div>


    </li>
</template>
<script>
export default {

}
</script>
<style scoped>
    
    li{
        width: 98%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
        border: 1px solid rgba(0, 0, 0, 0);
        
    }

    li:hover{
        border: 1px solid rgba(0, 0, 0, 0.378);
    }

    p{
        width: 60%;
        margin: 0;
        padding-left: 20px;
    }
    input{
        width: 100px;
    }

    .buttons{
        width: 150px;
        height: 50px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        overflow: hidden;
    }
    .fa-star{
        transform: translateX(50px);
    }

    .noTransform{
        transform: translateX(0px) !important;
    }   
</style>