<template>
<div id="views">
<UberWaldView/>
<GOAPView/>
<NeuralChickensView/>
</div>
</template>

<script>
import UberWaldView from '@/components/UberWaldView.vue'
import GOAPView from '@/components/GOAPView.vue'
import NeuralChickensView from '@/components/NeuralChickensView.vue'

export default {
  name: 'UnrealView',
  components: {
    UberWaldView,
    GOAPView,
    NeuralChickensView
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#views {
    background-color: #805E73;
}
</style>