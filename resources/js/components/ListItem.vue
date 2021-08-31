<template>
    <div class="item">
        <input type="checkbox" v-model="item.completed" @change="updateCheck()" />
        <span :class="[item.completed ? 'completed' : '', 'itemText']">{{ item.name }}</span>
        <button @click="removeItem()" class="trashcan"><i class="fa fa-trash"></i></button>
    </div>
</template>

<script>
    export default {
        name: 'ListItem',
        props: ['item'],
        // data() {
        //     return {
        //         item: {
        //             completed: this.item.completed
        //         }
        //     }
        // },
        methods: {
            updateCheck() {
                axios.put('api/item/' + this.item.id, {
                    item: this.item
                })
                .then(response => {
                    if(response.status == 200) {                //200 means successfully OK for 'put' method
                        this.$emit('itemchanged');               //tell to parent component(ListView) itemchanged
                    }
                })
                .catch( error => {
                    console.log( error );
                })
            },
            removeItem() {
                axios.delete('api/item/' + this.item.id, {
                    item: this.item
                })
                .then(response => {
                    if(response.status == 200) {                //200 means successfully OK for 'put' method
                        this.$emit('itemchanged');               //tell to parent component(ListView) itemchanged
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
    .completed {
        text-decoration: line-through;
        color: #999999;
    }
    .itemText {
        width: 100%;
        margin-left: 20px;
    }
    .item {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .trashcan {
        background: #e6e6e6;
        border: none;
        color: red;
        outline: none;
    }
</style>