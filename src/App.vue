<script setup lang="ts">
import omeletteImg from '@/assets/images/image-omelette.jpeg'
const dMain: { title: string, description: string } = {
  title: "Simple Omelette Recipe",
  description: "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats."
}
const dPreparation: Array<{ title: string, time: string }> = [
  {
    title: "Total",
    time: "Approximately 10 minutes",
  },
  {
    title: "Preparation",
    time: "5 minutes",
  },
  {
    title: "Cooking",
    time: "5 minutes",
  },
]
const dIngredients: Array<string> = [
  "2-3 large eggs",
  "Salt, to taste",
  "Pepper, to taste",
  "1 tablespoon of butter or oil",
  "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
]
const dInstructions: Array<{ title: string, description: string }> = [
  {
    title: "Beat the eggs",
    description: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
  },
  {
    title: "Heat the pan",
    description: "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    title: "Cook the omelette",
    description: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
  },
  {
    title: "Add fillings (optional)",
    description: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    title: "Fold and serve",
    description: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    title: "Enjoy",
    description: "Serve hot, with additional salt and pepper if needed.",
  },
]
const dNutrition: Array<{ title: string, value: string }> = [
  {
    title: "Calories",
    value: "277kcal",
  },
  {
    title: "Carbs",
    value: "0g",
  },
  {
    title: "Protein",
    value: "20g",
  },
  {
    title: "Fat",
    value: "22g",
  },
]
</script>
<template>
  <body class=" flex flex-col justify-center items-center bg-neo-eggshell">
    <main class=" flex flex-col sDt:gap-10 w-full sDt:w-[60%] max-w-[425px] sDt:max-w-[736px] bg-neo-white sDt:my-32 sDt:p-10 text-neo-wenge-brown font-outfit sDt:rounded-3xl">
      <img :src="omeletteImg" alt="omelette">
      <section class=" flex flex-col gap-8 px-8 py-10 sDt:p-0">
        <article class=" flex flex-col gap-6">
          <h1 class=" text-neo-dark-charcoal text-3xl sDt:text-[2.5rem] leading-none font-young-serif"> {{ dMain.title }}</h1>
          <p>{{ dMain.description }}</p>
        </article>
        <article class=" flex flex-col gap-4 p-6 sDt:p-7 bg-neo-rose-white rounded-xl">
          <h3 class=" text-neo-dark-raspberry text-xl leading-none font-semibold">
            Preparation time</h3>
          <div class=" flex flex-col gap-2 pl-2">
            <div v-for="item in dPreparation" class=" flex items-center gap-6">
              <div class=" min-w-1 h-1 bg-neo-dark-raspberry rounded-full"></div>
              <h4><span class=" font-bold">{{ item.title }}:</span> {{ item.time }}</h4>
            </div>
          </div>
        </article>
        <article class=" flex flex-col gap-6">
          <h2 class=" font-young-serif text-neo-nutmeg text-[1.75rem] leading-none">
            Ingredients</h2>
          <div class=" flex flex-col gap-2 pl-2">
            <div v-for="item in dIngredients" class=" flex items-center gap-6">
              <div class=" min-w-1 h-1 bg-neo-nutmeg rounded-full"></div>
              <h4>{{ item }}</h4>
            </div>
          </div>
        </article>
        <div class=" w-full h-px bg-neo-light-grey"></div>
        <article class=" flex flex-col gap-6">
          <h2 class=" font-young-serif text-neo-nutmeg text-[1.75rem] leading-none">
            Intructions</h2>
          <div class=" flex flex-col gap-2 pl-2 font-bold">
            <div v-for="(item, index) in dInstructions" class=" flex gap-5">
              <h4 class=" text-neo-nutmeg">{{ index + 1 }}.</h4>
              <h4>{{ item.title }}: <span class=" font-normal">{{ item.description }}</span></h4>
            </div>
          </div>
        </article>
        <div class=" w-full h-px bg-neo-light-grey"></div>
        <article class=" flex flex-col gap-6">
          <h2 class=" font-young-serif text-neo-nutmeg text-[1.75rem] leading-none">
            Nutrition</h2>
          <p>
            The table below shows nutritional values per serving without the additional fillings.</p>
          <div>
            <div v-for="(item, index) in dNutrition" class=" flex flex-col">
              <div class=" flex px-8">
                <h4 class=" w-[52.5%]">{{ item.title }}</h4>
                <h4 class=" text-neo-nutmeg font-bold">{{ item.value }}</h4>
              </div>
              <div v-if="index + 1 < dNutrition.length" class=" w-full h-px bg-neo-light-grey my-3"></div>
            </div>
          </div>
        </article>
      </section>
    </main>
  </body>
</template>