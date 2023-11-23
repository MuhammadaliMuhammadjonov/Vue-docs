<template >
    <div class="container">
        <ul>
            <ListItems />
            <ListItems />
            <ListItems />
        </ul>
    </div>
</template>
<script>

    import ListItems from '@/components/list-items/ListItems.vue'

    export default {
        components:{
            ListItems,
        }
        
    }
</script>
<style scoped>
    ul{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>
