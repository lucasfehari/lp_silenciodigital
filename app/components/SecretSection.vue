<template>
  <section class="py-20 md:py-32 px-6 md:px-8 bg-preto border-b border-t border-marrom/20">
    <div class="max-w-4xl mx-auto">
      <div class="bg-gradient-to-b from-marrom/40 to-preto p-[1px] rounded-2xl relative shadow-2xl">
        <div class="absolute inset-0 bg-secondary/10 blur-2xl opacity-40 rounded-2xl"></div>
        <div class="relative bg-preto rounded-2xl p-8 md:p-12 flex flex-col">
          <div class="flex items-center space-x-5 mb-10">
            <div class="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
              <span class="material-symbols-outlined text-preto text-xl">vpn_key</span>
            </div>
            <h3 class="text-3xl font-headline font-bold text-white tracking-tight">O que não te falam</h3>
          </div>
          
          <p class="text-xl text-on-surface-variant font-light mb-12 leading-relaxed">
            O problema não é o celular. Não é a internet. Não é a sua rotina. O real problema é que você <span class="text-white font-medium">nunca aprendeu a:</span>
          </p>
          
          <div class="grid gap-4 mb-auto">
            <div class="bg-grafite/40 border border-white/5 p-5 md:p-6 rounded-xl flex items-center gap-6 hover:bg-grafite/60 transition-colors">
              <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-secondary opacity-80 text-xl">self_improvement</span>
              </div>
              <span class="font-light text-lg tracking-wide text-white">Dominar impulsos internos</span>
            </div>
            <div class="bg-grafite/40 border border-white/5 p-5 md:p-6 rounded-xl flex items-center gap-6 hover:bg-grafite/60 transition-colors">
              <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-secondary opacity-80 text-xl">volume_off</span>
              </div>
              <span class="font-light text-lg tracking-wide text-white">Reduzir estímulos externos</span>
            </div>
            <div class="bg-grafite/40 border border-white/5 p-5 md:p-6 rounded-xl flex items-center gap-6 hover:bg-grafite/60 transition-colors">
              <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-secondary opacity-80 text-xl">gpp_good</span>
              </div>
              <span class="font-light text-lg tracking-wide text-white">Criar travas anti-distração</span>
            </div>
            <div class="bg-grafite/40 border border-white/5 p-5 md:p-6 rounded-xl flex items-center gap-6 hover:bg-grafite/60 transition-colors">
              <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-secondary opacity-80 text-xl">hourglass_bottom</span>
              </div>
              <span class="font-light text-lg tracking-wide text-white">Sustentar foco contínuo</span>
            </div>
          </div>
          
          <div class="mt-12 pt-8 border-t border-white/5 text-center">
            <p class="text-on-surface font-bold text-2xl tracking-tight">E sem foco contínuo… nada cresce.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
