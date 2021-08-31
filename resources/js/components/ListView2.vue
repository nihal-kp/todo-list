<template>
    <div>
        <div v-for="item in items" :key="item">
            <!-- <h2>{{item.name}}</h2> -->
            <ListItem :item="item" class="item" v-on:itemchanged="$emit('reloadlist')"/>
        </div>
    </div>
</template>

<script>
    import ListItem from './ListItem.vue'

    export default {
        // name: 'ListView',
        props: ['items'],
        components: { ListItem }
    }
</script>

<style scoped>
    .item {
        background: #e6e6e6;
        padding: 5px;
        margin-top: 5px;
    }
</style>