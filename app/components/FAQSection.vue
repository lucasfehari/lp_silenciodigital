<template>
  <section class="py-40 px-8">
    <div class="max-w-3xl mx-auto">
      <h2 class="font-headline text-3xl font-bold mb-20 text-center tracking-tight text-secondary uppercase tracking-[0.2em]">Perguntas Frequentes</h2>
      <div class="space-y-4">
        <div 
          v-for="(item, index) in faqItems" 
          :key="index"
          class="group border-b border-outline pb-8 transition-all duration-300"
          :class="{ 'pb-12': openIndex === index }"
        >
          <button 
            class="w-full text-left flex justify-between items-center group-hover:text-secondary transition-colors"
            @click="openIndex = openIndex === index ? null : index"
          >
            <h3 class="text-xl font-light tracking-tight">{{ item.question }}</h3>
            <span 
              class="material-symbols-outlined text-on-surface/20 group-hover:text-secondary transition-transform duration-300"
              :class="{ 'rotate-45 text-secondary': openIndex === index }"
            >
              add
            </span>
          </button>
          <div 
            class="mt-6 text-on-surface-variant font-light leading-relaxed max-w-2xl transition-all duration-300 overflow-hidden"
            :style="{ maxHeight: openIndex === index ? '200px' : '0', opacity: openIndex === index ? '1' : '0' }"
          >
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const openIndex = ref<number | null>(null)

const faqItems = [
  {
    question: 'Eu preciso parar de usar o celular?',
    answer: 'Não. O Silêncio Digital não é sobre privação, mas sobre intenção. Você aprenderá a usar a tecnologia como ferramenta, não como uma coleira emocional.'
  },
  {
    question: 'Funciona para quem trabalha como CLT?',
    answer: 'Totalmente. O método é especialmente eficaz para quem tem rotinas estruturadas e precisa performar sob pressão sem se sentir drenado pelo ambiente.'
  },
  {
    question: 'Sempre fui distraído(a), isso vai me ajudar?',
    answer: 'A distração "crônica" muitas vezes é apenas um hábito neurológico reforçado. O método foca em reconfigurar suas respostas automáticas a estímulos externos.'
  }
]
</script>
