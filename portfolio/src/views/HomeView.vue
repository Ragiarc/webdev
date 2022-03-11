<template>
  <div class="home">
    <HeroView/>
    <transition name="content"><router-view></router-view></transition>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroView from '@/components/HeroView.vue'

export default {
  name: 'HomeView',
  components: {
    HeroView
  }
}
</script>

<style scoped>
/* .content-enter-active {
  animation: bounce-in 0.5s;
}
.content-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
} */

/* we will explain what these classes do next! */
.content-enter-active,
.content-leave-active {
  transition: opacity 0.8s ease;
}

.content-enter-from,
.content-leave-to {
  opacity: 0;
}



</style>
