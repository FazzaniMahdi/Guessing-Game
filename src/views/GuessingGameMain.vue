<script setup>
import { onMounted, ref } from 'vue';
import diverseQuestions from "../assets/diverse_questions.json";
import { useRoute } from 'vue-router';
const timer = ref(0)
const route = useRoute()
const currentQuestionIndex = ref(0)
const score = ref(0)
const selectedOption = ref(null)
const quizFinished = ref(false)

const nbQuestions = route.params.nbQuestions
diverseQuestions.length = nbQuestions

onMounted(() => {
    function nextQuestion() {
        timer.value = 0;
        if (currentQuestionIndex.value < nbQuestions - 1) {
            currentQuestionIndex.value++;
            countDown();
        } else {
            quizFinished.value = !quizFinished.value
            console.log("Quiz completed!");
            clearTimeout(answerTimeOut);
        }
    }
    function countDown() {
        timer.value++;
        if (timer.value > 10 || selectedOption.value) {
            if (selectedOption.value === diverseQuestions[currentQuestionIndex.value].question.correctAnswer) {
                score.value += 50;
            } else {
                score.value -= 25;
            }
            selectedOption.value = null;
            nextQuestion();
        }
    }
    const answerTimeOut = setInterval(countDown, 1000)
})
</script>

<template>
    {{ quizFinished }}
    <div>
        <div class="hero bg-base-200 min-h-screen">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">{{ diverseQuestions[currentQuestionIndex].title }}</h1>

                    <p class="py-6">
                        {{ diverseQuestions[currentQuestionIndex].question.prompt }}
                    </p>
                    <div class="card-actions justify-end">
                        <input type="radio" class="btn btn-block" name="options"
                            v-for="(option, index) in diverseQuestions[currentQuestionIndex].question.options"
                            :key="index" :aria-label="option" :value="option" v-model="selectedOption">
                        <p class="text-3xl text-center mt-6 w-full">Score : {{ score }}</p>
                        <RouterLink to="/" class="btn btn-block">Back to home</RouterLink>
                        <progress class="progress" :value="timer" max="10"
                            style="width: 500px; height: 20px; background-color: lightgray;"></progress>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
