<template>
  <section class="py-24 bg-surface relative overflow-hidden">
    <!-- Cabeçalho da Seção -->
    <div class="container mx-auto px-6 mb-12 text-center">
      <h2 class="font-headline text-3xl font-bold tracking-tighter mb-4">
        Conteúdo do Programa
      </h2>
      <p class="text-on-surface/70 max-w-2xl mx-auto">
        Conheça os módulos desenhados para acabar com a procrastinação e blindar sua mente contra as distrações digitais.
      </p>
    </div>

    <!-- Container do Carrossel Infinito -->
    <!-- 'group' permite pausar a animação no hover -->
    <div class="flex overflow-hidden relative group py-8">
      <!-- Gradient Masks (Fade nas bordas para dar sensação de infinidade) -->
      <div class="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
      <div class="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>

      <!-- Primeira Fita de Imagens -->
      <!-- 'shrink-0' garante que o flex não esprema a div, 'animate-marquee' executa o scroll -->
      <div class="flex shrink-0 animate-marquee items-center gap-6 px-3">
        <img 
          v-for="(img, index) in modules" 
          :key="'a-' + index" 
          :src="'/images/moduloscurso/' + img" 
          alt="Módulo do Curso" 
          class="w-[280px] md:w-[340px] rounded-sm object-cover shadow-md border border-black/5 hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
      
      <!-- Segunda Fita de Imagens (Clone Obrigatório para o Efeito de Loop Infinito Completo) -->
      <div class="flex shrink-0 animate-marquee items-center gap-6 px-3" aria-hidden="true">
        <img 
          v-for="(img, index) in modules" 
          :key="'b-' + index" 
          :src="'/images/moduloscurso/' + img" 
          alt="Módulo do Curso" 
          class="w-[280px] md:w-[340px] rounded-sm object-cover shadow-md border border-black/5 hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * Componente: ModulesSection
 * Descrição: Exibe as imagens dos módulos do curso em um carrossel infinito e contínuo.
 * Responsividade: Mobile-First, com tamanhos de imagens ajustados no desktop e efeito fade nas laterais.
 */

// Array contendo os nomes das imagens dos módulos (pasta public/images/moduloscurso)
const modules = [
  'SILENCIO-DIGITAL01.png',
  'SILENCIO-DIGITAL02.png',
  'SILENCIO-DIGITAL03.png',
  'SILENCIO-DIGITAL04.png',
  'SILENCIO-DIGITAL05.png'
];
</script>

<style scoped>
/* 
  Animação do carrossel para transladar continuamente de 0% a -100% (movimento para esquerda).
  O tempo (25s) determina a velocidade do "ticker".
*/
.animate-marquee {
  animation: marquee 25s linear infinite;
}

/* Pausa a animação quando o usuário passa o cursor por cima dos módulos (Acessibilidade) */
.group:hover .animate-marquee {
  animation-play-state: paused;
}

@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}
</style>
