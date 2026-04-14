<template>
  <div class="bg-secondary text-marrom py-4 overflow-hidden relative flex items-center shadow-lg">
    <!-- Primeira fita -->
    <div class="whitespace-nowrap flex items-center shrink-0 animate-marquee">
      <div v-for="i in 15" :key="'a-' + i" class="flex items-center shrink-0">
        <span class="text-sm md:text-base font-bold uppercase tracking-[0.3em] px-8 font-mono">Desenvolva Foco</span>
        <span class="w-2 h-2 rounded-full bg-primary shrink-0 opacity-80"></span>
      </div>
    </div>
    <!-- Segunda fita (clonada para o loop infinito) -->
    <div class="whitespace-nowrap flex items-center shrink-0 animate-marquee" aria-hidden="true">
      <div v-for="i in 15" :key="'b-' + i" class="flex items-center shrink-0">
        <span class="text-sm md:text-base font-bold uppercase tracking-[0.3em] px-8 font-mono">Desenvolva Foco</span>
        <span class="w-2 h-2 rounded-full bg-primary shrink-0 opacity-80"></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Thin scrolling text component (Marquee)
</script>

<style scoped>
.animate-marquee {
  animation: marquee 30s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}
</style>
