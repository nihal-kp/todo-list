<template>
    <div class="addItem">
        <input type="text" v-model="item.name" /> <i @click="addItem()" :class="[ item.name ? 'active' : 'inactive', 'fa fa-plus-square']"></i>
    </div>
</template>

<script>
    export default {
        name: 'AddItemForm',
        data() {
            return {
                item: {
                    name: ""
                }
            }
        },
        methods: {
            addItem() {
                if(this.item.name == '') {
                    return;
                }
                axios.post('api/item/store', {
                    item: this.item
                })
                .then(response => {
                    if(response.status == 201) {                //201 means successfully created for 'post' method
                        this.item.name = "";
                        this.$emit('reloadlist');
                    }
                })
                .catch( error => {
                    console.log( error );
                })
            }
        },
    }
</script>

<style scoped>
    .addItem {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    input {
        background: #f7f7f7;
        border: 0px;
        outline: none;
        padding: 5px;
        margin-right: 10px;
        width: 100%;
    }
    .plus {
        font-size: 20px;
    }
    .active {
        color: green;
    }
    .inactive {
        color: grey;
    }
</style>