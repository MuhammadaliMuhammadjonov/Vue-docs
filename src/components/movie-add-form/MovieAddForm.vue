<template >
    <div class="container">
        <h1>Yangi kino qo'shish</h1>
        <form >
            <input type="text" class="form form-control" placeholder="Kino nomi" required>
            <input type="text" class="form form-control" placeholder="Ko'rishlar soni" required>
            <button class="btn btn-danger">Qo'shish</button>
        </form>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
    form{
        width: 95%;
        display: flex;
        justify-content: space-between;
    }
    input{
        width: 45%;
        height: 50px;
    }
</style>