<template>
  <section class="py-32 px-8 bg-surface-variant/30">
    <div class="max-w-7xl mx-auto">
      
      <div class="grid lg:grid-cols-2 gap-20">
        
        <!-- Bloco 1: A Dor -->
        <div class="relative">
          <span class="flex items-center gap-4 font-mono text-[10px] tracking-[0.5em] text-primary font-bold uppercase mb-8">
            <span class="w-8 h-px bg-primary"></span>
            Diagnóstico
          </span>
          <h2 class="font-headline text-5xl md:text-6xl font-bold mb-12 tracking-tighter">Identificação da Dor</h2>
          
          <div class="prose prose-invert prose-lg font-light leading-relaxed text-on-surface-variant">
            <p class="mb-4">Você começa tarefas. <span class="text-white">Interrompe no meio.</span></p>
            <p class="mb-4">Abre o WhatsApp "rapidinho". Olha uma notificação.</p>
            <p class="mb-4">Vai para outra aba. Responde algo que nem era urgente.</p>
            
            <div class="my-10 p-8 bg-white/[0.02] border-l-2 border-primary/50 relative overflow-hidden rounded-r-2xl">
               <div class="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-20"></div>
               <p class="relative z-10 text-xl font-normal text-white leading-snug">
                 No fim do dia você esteve ocupado o tempo todo… <br>
                 <span class="text-on-surface-variant font-light text-lg">mas não avançou no que realmente importa.</span>
               </p>
            </div>
            
            <p class="mb-4 text-xl">E o pior: você sabe que poderia render mais.</p>
            <p class="mb-10 text-xl">Isso não é falta de inteligência. Não é preguiça.</p>
            
            <div class="inline-block relative">
              <span class="relative z-10 text-primary font-bold tracking-wide text-2xl">É falta de estrutura para proteger sua atenção.</span>
              <span class="absolute bottom-1 left-0 w-full h-3 bg-primary/20 -z-10 -rotate-1"></span>
            </div>
          </div>
        </div>

        <!-- Bloco 2: O que não falam -->
        <div class="lg:mt-32">
          <div class="bg-gradient-to-b from-surface to-[#0a0a0a] p-[1px] rounded-[2.5rem] relative h-full">
            <div class="absolute inset-0 bg-secondary/10 blur-2xl opacity-40 rounded-[2.5rem]"></div>
            <div class="relative bg-surface rounded-[2.5rem] border border-white/5 p-10 md:p-14 h-full flex flex-col">
              <div class="flex items-center space-x-5 mb-10">
                <div class="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span class="material-symbols-outlined text-secondary text-xl">vpn_key</span>
                </div>
                <h3 class="text-3xl font-headline font-bold text-white tracking-tight">O que não te falam</h3>
              </div>
              
              <p class="text-xl text-on-surface-variant font-light mb-12 leading-relaxed">
                O problema não é o celular. Não é a internet. Não é a sua rotina. O real problema é que você <span class="text-white font-medium">nunca aprendeu a:</span>
              </p>
              
              <div class="grid gap-4 mb-auto">
                <div class="bg-[#0a0a0a]/50 border border-white/5 p-6 rounded-2xl flex items-center gap-6 hover:bg-[#0a0a0a]/80 transition-colors">
                  <div class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <span class="material-symbols-outlined text-secondary opacity-80 text-xl">self_improvement</span>
                  </div>
                  <span class="font-light text-lg tracking-wide text-white">Dominar impulsos internos</span>
                </div>
                <div class="bg-[#0a0a0a]/50 border border-white/5 p-6 rounded-2xl flex items-center gap-6 hover:bg-[#0a0a0a]/80 transition-colors">
                   <div class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <span class="material-symbols-outlined text-secondary opacity-80 text-xl">volume_off</span>
                  </div>
                  <span class="font-light text-lg tracking-wide text-white">Reduzir estímulos externos</span>
                </div>
                <div class="bg-[#0a0a0a]/50 border border-white/5 p-6 rounded-2xl flex items-center gap-6 hover:bg-[#0a0a0a]/80 transition-colors">
                   <div class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <span class="material-symbols-outlined text-secondary opacity-80 text-xl">gpp_good</span>
                  </div>
                  <span class="font-light text-lg tracking-wide text-white">Criar travas anti-distração</span>
                </div>
                <div class="bg-[#0a0a0a]/50 border border-white/5 p-6 rounded-2xl flex items-center gap-6 hover:bg-[#0a0a0a]/80 transition-colors">
                   <div class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <span class="material-symbols-outlined text-secondary opacity-80 text-xl">hourglass_bottom</span>
                  </div>
                  <span class="font-light text-lg tracking-wide text-white">Sustentar foco contínuo</span>
                </div>
              </div>
              
              <div class="mt-12 pt-8 border-t border-white/5 text-center">
                <p class="text-secondary font-bold text-2xl tracking-tight">E sem foco contínuo… nada cresce.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
