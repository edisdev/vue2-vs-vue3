<template>
  <section class="GoalList">
    <div 
      v-for="goal in list"
      :key="goal.id"
      class="goalitem">
      {{ goal.text }}
    </div>
  </section>
</template>

<script>
export default {
  name: 'GloalList',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.GoalList {
  margin-bottom: 40px;
  width: 100%;
}

.GoalList {
  margin-top: 30px;
  margin-bottom: 40px;
  max-width: 100%;
}

.GoalList .goalitem {
  border-bottom: 1px solid var(--border-color);
  padding: 12px;
  white-space: normal;
  word-break: break-all;
}
</style>