<template>
  <section class="py-20 md:py-32 px-6 md:px-8 relative overflow-hidden bg-surface">
   
    <div class="max-w-screen-2xl mx-auto">
      <div class="mb-20 md:mb-32 relative">
        <div class="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div class="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span class="flex items-center gap-3 font-mono text-[10px] tracking-[0.5em] text-secondary font-bold uppercase mb-6">
              <span class="w-8 h-px bg-secondary"></span>
              Apresentação
            </span>
            <h2 class="font-headline text-5xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
              O que é o <br><span class="text-secondary  pb-2 to-secondary">Silêncio Digital?</span>
            </h2>
          </div>
          <div class="border-l border-white/10 pl-8 lg:pl-12 space-y-6">
            <p class="text-2xl font-light text-on-surface-variant leading-relaxed">
              Um método estruturado, 100% gravado e <strong class="text-white font-medium">direto ao ponto</strong>.
            </p>
            <div class="flex flex-col gap-4 text-sm font-mono text-on-surface tracking-widest uppercase">
              <span class="flex items-center gap-3"><span class="w-1.5 h-1.5 rounded-full bg-secondary"></span> Sem motivação vazia</span>
              <span class="flex items-center gap-3"><span class="w-1.5 h-1.5 rounded-full bg-secondary"></span> Sem frases bonitas</span>
              <span class="flex items-center gap-3"><span class="w-1.5 h-1.5 rounded-full bg-secondary"></span> Sem promessas irreais</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mb-12">
        <h2 class="font-headline text-3xl font-bold tracking-tighter">O que você vai receber</h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8 relative mt-16">
        <!-- Pillar 1 -->
        <div class="relative group bg-preto border border-white/5 p-8 md:p-10 rounded-2xl flex flex-col transition-colors hover:border-secondary/20 hover:bg-grafite/20">
          <span class="absolute -top-10 -right-4 text-[120px] font-bold text-white/[0.02] pointer-events-none select-none transition-all group-hover:scale-110">1</span>
          <div class="relative z-10">
            <div class="w-12 h-12 flex items-center justify-center mb-6 bg-white/5 rounded-xl border border-white/10 group-hover:bg-secondary/10 group-hover:border-secondary/20 transition-colors">
              <span class="material-symbols-outlined text-secondary text-2xl">visibility</span>
            </div>
            <span class="text-xs font-mono text-primary tracking-widest uppercase mb-2 block">Módulo 1</span>
            <h3 class="text-2xl font-bold mb-4 text-white tracking-tight">A Raiz do Problema</h3>
            <p class="text-on-surface-variant leading-relaxed font-light">Você vai entender por que se distrai, e por que o problema não começa na tela.</p>
          </div>
        </div>
        <!-- Pillar 2 -->
        <div class="relative group bg-preto border border-white/5 p-8 md:p-10 rounded-2xl flex flex-col transition-colors hover:border-secondary/20 hover:bg-grafite/20">
           <span class="absolute -top-10 -right-4 text-[120px] font-bold text-white/[0.02] pointer-events-none select-none transition-all group-hover:scale-110">2</span>
          <div class="relative z-10">
            <div class="w-12 h-12 flex items-center justify-center mb-6 bg-white/5 rounded-xl border border-white/10 group-hover:bg-secondary/10 group-hover:border-secondary/20 transition-colors">
              <span class="material-symbols-outlined text-secondary text-2xl">psychology</span>
            </div>
            <span class="text-xs font-mono text-primary tracking-widest uppercase mb-2 block">Módulo 2</span>
            <h3 class="text-xl font-bold mb-4 text-white tracking-tight">Dominando Impulsos</h3>
            <p class="text-on-surface-variant leading-relaxed font-light mb-auto">Técnicas práticas para lidar com impulsos internos e externos.</p>
          </div>
        </div>
        <!-- Pillar 3 -->
        <div class="relative group bg-preto border border-white/5 p-8 md:p-10 rounded-2xl flex flex-col transition-colors hover:border-secondary/20 hover:bg-grafite/20">
           <span class="absolute -top-10 -right-4 text-[120px] font-bold text-white/[0.02] pointer-events-none select-none transition-all group-hover:scale-110">3</span>
          <div class="relative z-10">
            <div class="w-12 h-12 flex items-center justify-center mb-6 bg-white/5 rounded-xl border border-white/10 group-hover:bg-secondary/10 group-hover:border-secondary/20 transition-colors">
              <span class="material-symbols-outlined text-secondary text-2xl">filter_center_focus</span>
            </div>
            <span class="text-xs font-mono text-primary tracking-widest uppercase mb-2 block">Módulo 3</span>
            <h3 class="text-2xl font-bold mb-4 text-white tracking-tight">Vida Intencional</h3>
            <p class="text-on-surface-variant leading-relaxed font-light">Filtro decisório para parar de agir no automático.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
