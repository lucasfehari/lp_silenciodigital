<template>
  <section class="py-40 px-8 bg-[#111]" id="pricing">
    <div class="max-w-4xl mx-auto text-center">
      <div class="inline-block px-6 py-2 border border-secondary/30 text-secondary font-mono text-[10px] tracking-[0.4em] mb-12 uppercase">
        Lote de Lançamento
      </div>
      <h2 class="font-headline text-6xl md:text-8xl font-extrabold mb-16 tracking-tighter">Retome sua atenção hoje.</h2>
      <div class="flex flex-col items-center mb-20">
        <span class="text-on-surface/30 line-through text-lg mb-4 font-mono">De R$ 197</span>
        <div class="flex items-baseline gap-4">
          <span class="text-sm font-mono uppercase tracking-widest text-on-surface/60">Por</span>
          <span class="text-8xl font-bold text-secondary tracking-tighter">R$ 47</span>
        </div>
      </div>
      <div class="bg-surface border border-white/5 rounded-3xl p-8 md:p-16 mb-16 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-2 h-full bg-primary"></div>
        <div class="flex flex-col md:flex-row gap-12 items-center text-left">
          <div class="flex-1 space-y-6">
            <div class="flex items-center gap-4">
              <span class="material-symbols-outlined text-primary text-xl">verified</span>
              <span class="text-on-surface font-light tracking-wide">Acesso completo por 1 ano</span>
            </div>
            <div class="flex items-center gap-4">
              <span class="material-symbols-outlined text-primary text-xl">shield</span>
              <span class="text-on-surface font-light tracking-wide">Garantia incondicional de 7 dias</span>
            </div>
          </div>
          <div class="w-full md:w-auto">
            <a class="block text-center bg-primary text-secondary px-12 py-7 text-[11px] font-bold tracking-[0.3em] uppercase transition-all hover:brightness-110 active:scale-95 shadow-[0_20px_50px_rgba(60,76,59,0.3)]" href="#">
              QUERO DESENVOLVER FOCO SUSTENTÁVEL
            </a>
          </div>
        </div>
      </div>
      <p class="text-on-surface/40 text-xs font-mono max-w-lg mx-auto leading-loose">
        Risco zero. Se em 7 dias você sentir que o método não é para você, devolvemos 100% do seu investimento. Sem perguntas.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
