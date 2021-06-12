<template>
  <section class="Goals">
    <h1>Hedeflerim</h1>
    <goal-form @newGoal="newGoal"/>
    <goal-list :list="goalItems"/>
  </section>
</template>

<script>
import { ref } from 'vue';
import GoalForm from './GoalForm.vue'
import GoalList from './GoalList.vue'

export default {
  name: 'Gloals',
  components: { GoalList, GoalForm },
  setup() {
    const goals = ref([]);
    function newGoal(text) {
      const goal = {
        id:  Date().now,
        text: text,
      };
      goals.value.push(goal);
    }
    return {
      goalItems: goals.value,
      newGoal
    };
  }
}
</script>

<style scoped>
.Goals {
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
}

.Goals h1 {
  font-size: 2.7rem;
  margin-bottom: 30px;
}
</style>
