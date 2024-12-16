<script setup>
import { ref } from 'vue';
import diverseQuestions from "../assets/diverse_questions.json";
const choix = ref(1)
const timer = ref(0)
diverseQuestions.length = choix.value
function countDown() {
    console.log(timer.value)
    timer.value++
    if (timer.value > 10) {
        clearInterval(answerTimeOut)
    }
}
const answerTimeOut = setInterval(countDown, 1000)

</script>

<template>
    <div>
        <div v-for="question in diverseQuestions" :key="question.id" class="hero bg-base-200 min-h-screen">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">{{ question.title }}</h1>
                    <p class="py-6">
                        {{ question.question.prompt }}
                    </p>
                    <div class="card-actions justify-end">
                        <input type="radio" name="options" class="btn btn-block" :aria-label="question.question.options[0]" />
                        <input type="radio" name="options" class="btn btn-block" :aria-label="question.question.options[1]" />
                        <input type="radio" name="options" class="btn btn-block" :aria-label="question.question.options[2]" />
                        <input type="radio" name="options" class="btn btn-block" :aria-label="question.question.options[3]" />
                        <RouterLink to="/" class="btn btn-block mt-6">Back to home</RouterLink>
                        <progress class="progress" :value="timer" max="10"
                            style="width: 500px; height: 20px; background-color: lightgray;"></progress>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
