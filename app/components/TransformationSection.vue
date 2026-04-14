<template>
  <section class="py-20 md:py-32 px-6 md:px-8 bg-preto relative overflow-hidden" id="transformacao">
    <div class="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent via-grafite/10 to-preto pointer-events-none"></div>
    <div class="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row gap-12 md:gap-16 items-center">
      
      <!-- Lado Esquerdo: Ensinamentos -->
      <div class="flex-1">
        <h2 class="font-headline text-4xl md:text-5xl font-bold mb-10 tracking-tighter text-white">
          O Silêncio Digital foi criado para te ensinar <span class="font-cursive italic font-medium text-secondary/90 tracking-normal leading-tight block mt-2 text-[1.1em]">exatamente isso:</span>
        </h2>
        
        <ul class="space-y-6">
          <li class="flex items-center gap-5">
            <div class="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
              <span class="w-2 h-2 rounded-full bg-primary"></span>
            </div>
            <span class="text-xl font-light text-on-surface-variant">Entender a raiz real da distração</span>
          </li>
          <li class="flex items-center gap-5">
            <div class="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
              <span class="w-2 h-2 rounded-full bg-primary"></span>
            </div>
            <span class="text-xl font-light text-on-surface-variant">Dominar impulsos emocionais</span>
          </li>
          <li class="flex items-center gap-5">
            <div class="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
              <span class="w-2 h-2 rounded-full bg-primary"></span>
            </div>
            <span class="text-xl font-light text-on-surface-variant">Criar ambiente favorável ao foco</span>
          </li>
          <li class="flex items-center gap-5">
            <div class="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
              <span class="w-2 h-2 rounded-full bg-primary"></span>
            </div>
            <span class="text-xl font-light text-on-surface-variant">Estruturar rotina sustentável</span>
          </li>
          <li class="flex items-center gap-5">
            <div class="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
              <span class="w-2 h-2 rounded-full bg-primary"></span>
            </div>
            <span class="text-xl font-light text-on-surface-variant">Terminar o que você começa</span>
          </li>
        </ul>
      </div>

      <!-- Lado Direito: Resultados -->
      <div class="flex-1 w-full relative">
        <div class="absolute inset-0 bg-preto rounded-full"></div>
        <div class="relative bg-surface/40 backdrop-blur-md rounded-sm border border-white/5 p-8 md:p-12 lg:p-16 text-center">
          <p class="font-mono text-sm tracking-widest text-secondary uppercase mb-8">O Resultado Final</p>
          <div class="flex flex-col gap-6">
            <h3 class="font-headline text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 hover:scale-105 transition-transform cursor-default">Mais foco.</h3>
            <div class="h-px w-12 bg-white/10 mx-auto"></div>
            <h3 class="font-headline text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 hover:scale-105 transition-transform cursor-default">Menos ansiedade.</h3>
            <div class="h-px w-12 bg-white/10 mx-auto"></div>
            <h3 class="font-headline text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 hover:scale-105 transition-transform cursor-default">Mais paz mental.</h3>
            <div class="h-px w-12 bg-white/10 mx-auto"></div>
            <h3 class="font-headline text-3xl font-bold text-secondary hover:scale-105 transition-transform cursor-default">Mais construção real.</h3>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>
