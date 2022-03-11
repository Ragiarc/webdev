<template>
<div id ="views">
<CoggerView/>
</div>
</template>

<script>
import CoggerView from '@/components/CoggerView.vue'

export default {
  name: 'MRView',
  components: {
    CoggerView
  }
}
</script>

<style scoped>

#views {
    background-color: #420C14;
}
</style>
