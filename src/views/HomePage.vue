<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router";
const route = useRoute()
const nbQuestions = ref(0)
const score = ref(0)

if(route.params.score > score.value) {
  score.value = route.params.score
}
  

</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen space-y-8 px-4">
    <div class="grid grid-cols-2 gap-6 items-center w-full max-w-4xl">
      <div class="text-right text-lg font-semibold">How many questions would you like in the quiz?</div>
      <input
        type="number"
        placeholder="Type here"
        v-model="nbQuestions"
        class="input input-bordered w-full"
      />
    </div>

    <RouterLink :to="`/game/${nbQuestions}`" :class="['btn btn-block', nbQuestions == 0 ? 'btn-disabled' : '']"class="w-full max-w-3xl text-lg">Play</RouterLink>
    <div class="text-center text-lg font-medium">
      <div>High Score: {{ score }}</div>
    </div>
  </div>
</template>