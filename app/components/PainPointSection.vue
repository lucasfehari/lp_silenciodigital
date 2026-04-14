<template>
  <section class="py-20 md:py-32 px-6 md:px-8 bg-secondary border-b border-t border-marrom/10">
    <div class="max-w-7xl mx-auto">
      
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <!-- Bloco 1: A Dor -->
        <div class="relative">
          <div class="prose prose-invert prose-lg font-light leading-relaxed text-preto">
            <p class="mb-4">Você começa tarefas. <span class="text-preto font-medium">Interrompe no meio.</span></p>
            <p class="mb-4">Abre o WhatsApp "rapidinho". Olha uma notificação.</p>
            <p class="mb-4">Vai para outra aba. Responde algo que nem era urgente.</p>
            
            <div class="my-10 p-6 md:p-8 border-l-2 border-primary/80 relative overflow-hidden rounded-r-sm shadow-sm bg-white/40">
               <div class="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-100"></div>
               <p class="relative z-10 text-xl font-normal text-preto leading-snug">
                 No fim do dia você esteve ocupado o tempo todo… <br>
                 <span class="text-preto font-light text-lg opacity-80">mas não avançou no que realmente importa.</span>
               </p>
            </div>
            
            <p class="mb-4 text-xl">E o pior: você sabe que poderia render mais.</p>
            <p class="mb-10 text-xl">Isso não é falta de inteligência. Não é preguiça.</p>
            
            <div class="inline-block relative">
              <span class="relative z-10 text-preto font-bold tracking-wide text-2xl">É falta de estrutura para proteger sua atenção.</span>
              <span class="absolute bottom-1 left-0 w-full h-3 bg-primary/30 -z-10 -rotate-1"></span>
            </div>
          </div>
        </div>

        <!-- Bloco Imagem -->
        <div class="w-full flex justify-center items-center relative">
          <div class="absolute inset-0 bg-primary/5 blur-3xl rounded-full"></div>
          <img src="/images/relogio.png" class="relative z-10 w-full max-w-[500px] h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700" alt="Tempo">
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
