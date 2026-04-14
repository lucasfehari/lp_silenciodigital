<template>
  <section class="py-40 px-8 relative overflow-hidden">
   
    <div class="max-w-screen-2xl mx-auto">
      <div class="mb-32 relative">
        <div class="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span class="flex items-center gap-3 font-mono text-[10px] tracking-[0.5em] text-secondary font-bold uppercase mb-6">
              <span class="w-8 h-px bg-secondary"></span>
              Apresentação
            </span>
            <h2 class="font-headline text-5xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
              O que é o <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-primary pb-2 to-secondary">Silêncio Digital?</span>
            </h2>
          </div>
          <div class="border-l border-white/10 pl-8 lg:pl-12 space-y-6">
            <p class="text-2xl font-light text-on-surface-variant leading-relaxed">
              Um método estruturado, 100% gravado e <strong class="text-white font-medium">direto ao ponto</strong>.
            </p>
            <div class="flex flex-col gap-4 text-sm font-mono text-on-surface/50 tracking-widest uppercase">
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

      <div class="grid md:grid-cols-3 gap-16 relative">
        <!-- Pillar 1 -->
        <div class="relative group">
          <span class="absolute -top-20 -left-10 text-[180px] font-bold text-white/[0.03] pointer-events-none select-none">1</span>
          <div class="relative pt-12">
            <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-8 border border-primary/30">
              <span class="material-symbols-outlined text-secondary text-2xl">visibility</span>
            </div>
            <span class="text-xs font-mono text-primary tracking-widest uppercase mb-2 block">Módulo 1</span>
            <h3 class="text-2xl font-bold mb-4 text-secondary uppercase tracking-widest">A Raiz do Problema</h3>
            <p class="text-on-surface-variant leading-relaxed font-light">Você vai entender por que se distrai, e por que o problema não começa na tela.</p>
          </div>
        </div>
        <!-- Pillar 2 -->
        <div class="relative group">
          <span class="absolute -top-20 -left-10 text-[180px] font-bold text-white/[0.03] pointer-events-none select-none">2</span>
          <div class="relative pt-12">
            <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-8 border border-primary/30">
              <span class="material-symbols-outlined text-secondary text-2xl">psychology</span>
            </div>
            <span class="text-xs font-mono text-primary tracking-widest uppercase mb-2 block">Módulo 2</span>
            <h3 class="text-xl font-bold mb-4 text-secondary uppercase tracking-widest">Dominando Impulsos</h3>
            <p class="text-on-surface-variant leading-relaxed font-light mb-6">Técnicas práticas para lidar com impulsos internos e externos.</p>
          </div>
        </div>
        <!-- Pillar 3 -->
        <div class="relative group">
          <span class="absolute -top-20 -left-10 text-[180px] font-bold text-white/[0.03] pointer-events-none select-none">3</span>
          <div class="relative pt-12">
            <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-8 border border-primary/30">
              <span class="material-symbols-outlined text-secondary text-2xl">filter_center_focus</span>
            </div>
            <span class="text-xs font-mono text-primary tracking-widest uppercase mb-2 block">Módulo 3</span>
            <h3 class="text-2xl font-bold mb-4 text-secondary uppercase tracking-widest">Vida Intencional</h3>
            <p class="text-on-surface-variant leading-relaxed font-light">Filtro decisório para parar de agir no automático.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
