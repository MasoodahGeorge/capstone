<template]>
    <div>
        <div v-if="product()">
            {{$store.state.product}}
        </div>
        <!-- <div v-else>

        </div> -->
    </div>
</template>
<script>
export default {
    methods: {
        fetchProduct(){
            this.$store.dispatch('fetchProduct',this.$route.params.id)
        },
        product(){
            return this.$store.state.product
        }
    },
    mounted() {
        this.fetchProduct()
    },
}
</script>
<style scoped>
    
</style>