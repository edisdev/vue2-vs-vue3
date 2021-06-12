
<template>
  <div id="GoalApp">
    <goals/>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup () {
    const colors = ref({
      border: '#323638',
      text: '#fff',
      bg: '#1a2531'
    })
    return {
      colors
    }
  }
}
</script>

<style>
#GoalApp {
  --border-color: v-bind('colors.border');
  --text-color: v-bind('colors.text');
  --background-color: v-bind('colors.bg');

  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--background-color);
  color: var(--text-color);
  font-weight: normal;
}

</style>

