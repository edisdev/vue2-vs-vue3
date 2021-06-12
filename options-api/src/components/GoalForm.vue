<template>
  <form
    class="GoalForm"
    @submit.prevent="newGoal">
    <div>
      <label>Hedefiniz</label>
      <input type="text" v-model="goal" />
    </div>
    <button>Hedef Ekle</button>
    <p class="warning" v-if="invalidValue">Lütfen geçerli bir hedef giriniz. (Hedefi boş bıraktınız).</p>
  </form>
</template>

<script>
export default {
  name: 'GoalForm',
  data() {
    return {
      goal: "",
      invalidValue: false,
    };
  },
  methods: {
    newGoal() {
      this.invalidValue = false;
      if (this.goal === "") {
        this.invalidValue = true;
        return;
      }
      this.$emit("newGoal", this.goal);

      this.$nextTick(() => {
        this.goal = '';
      })
    },
  }
};
</script>

<style scoped>
.GoalForm {
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.GoalForm label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.GoalForm input {
  font: inherit;
  display: block;
  width: 100%;
  margin-bottom: 0.5rem;
  height: 32px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  text-indent: 6px;
}

.GoalForm button {
  height: 40px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
  background: #000;
  color: #fff;
  transition: all .4s ease-in;
}

.GoalForm button:hover {
  opacity: .8;
}

.GoalForm .warning {
  white-space: normal;
  word-break: break-all;
  margin-top: 10px;
}
</style>