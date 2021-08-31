<template>
    <div class="todoListContainer">
        <div class="heading">
            <h2 id="title">Todo List</h2>
            <AddItemForm v-on:reloadlist="getList()" />
        </div>
        <ListView :items="items" v-on:reloadlist="getList()" />
    </div>
</template>

<script>
    import AddItemForm from "./AddItemForm.vue"
    import ListView from "./ListView2.vue"
    export default {
        name: 'Home',
        components: {
            AddItemForm,
            ListView,
        },
        data() {
            return {
                items: []
            }
        },
        methods: {
            getList(){
                axios.get('api/items')
                .then(response => {
                        this.items = response.data;
                        // console.log(response.data)
                })
                .catch( error => {
                    console.log( error );
                })
            }
        },
        created() {
            this.getList();
        }
    }
</script>

<style scoped>
    .todoListContainer {
        width: 350px;
        margin: auto;
    }

    .heading {
        background: #e6e6e6;
        padding: 10px;
    }

    #title {
        text-align: center;
    }
</style>