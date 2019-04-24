<template>
    <div>
      <button @click="increment">+</button>
      <span>{{number}}</span>
      <button @click="decrement">-</button>
    </div>
</template>

<script>
    export default {
        name: "counter",
        props:['number'],
        data(){
            return {
              // number:0
            }
        },
      methods:{
          increment(){
            this.$emit('incre')
          },
          decrement(){
            this.$emit('decre');
          }
      }
    }
</script>

<style scoped>

</style>
