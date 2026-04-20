<template>
  <section class="py-20 md:py-32 px-6 md:px-8 bg-preto" id="pricing">
    <div class="max-w-4xl mx-auto">
      
      <!-- Ancoragem de Valor -->
      <div class="mb-24 md:mb-40 relative">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none"></div>
        <div class="text-center mb-16 relative z-10">
          <h2 class="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-white">Dois caminhos. <span class="text-on-surface/40">Uma escolha.</span></h2>
        </div>
        
        <div class="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto relative z-10">
          <div class="bg-surface/30 p-8 md:p-10 rounded-sm border border-white/5 opacity-70 hover:opacity-100 transition-opacity">
            <div class="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center mb-8">
              <span class="material-symbols-outlined text-on-surface/50">history</span>
            </div>
            <h3 class="text-xl font-bold mb-6 text-on-surface/70 tracking-tight">O caminho atual</h3>
            <ul class="space-y-4 text-on-surface font-light leading-relaxed">
               <li class="flex items-start gap-4"><span class="w-1 h-1 bg-white/20 rounded-full mt-2.5"></span> Continuar tentando na força de vontade.</li>
               <li class="flex items-start gap-4"><span class="w-1 h-1 bg-white/20 rounded-full mt-2.5"></span> Consumir vídeos soltos sobre foco.</li>
               <li class="flex items-start gap-4"><span class="w-1 h-1 bg-white/20 rounded-full mt-2.5"></span> Trabalhar mais horas e se cansar mais.</li>
            </ul>
          </div>
          
          <div class="bg-gradient-to-br from-primary via-primary/100 to-transparent p-[1px] rounded-sm">
            <div class="bg-grafite/40 backdrop-blur-md p-8 md:p-10 rounded-sm h-full relative overflow-hidden">
              <div class="absolute inset-0 bg-primary/5"></div>
              <div class="absolute -right-20 -top-20 w-60 h-60 bg-primary/20 blur-[60px]"></div>
              <div class="relative z-10">
                <div class="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(var(--primary),0.5)] border border-primary/30">
                  <span class="material-symbols-outlined text-primary">rocket_launch</span>
                </div>
                <h3 class="text-xl font-bold mb-6 text-white tracking-tight">O Silêncio Digital</h3>
                <p class="text-on-surface text-lg font-light leading-relaxed">
                  Investir menos que o valor de um jantar para aprender um método que você vai usar <span class="text-secondary font-medium tracking-wide">pelo resto da vida</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bonus -->
      <div class="mb-24 md:mb-40">
        <div class="text-center mb-16">
          <span class="font-mono text-[10px] tracking-[0.5em] text-secondary font-bold uppercase mb-4 block">Material Extra</span>
          <h2 class="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Bônus Inclusos</h2>
        </div>
        <div class="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div class="group relative bg-[#0f0f0f] border border-white/5 rounded-sm p-8 md:p-10 overflow-hidden hover:border-secondary/30 transition-colors">
            <div class="absolute -right-12 -top-12 w-48 h-48 bg-secondary/10 blur-[60px] group-hover:bg-secondary/20 transition-all"></div>
            <div class="relative z-10">
              <span class="text-secondary/70 font-mono text-xs tracking-widest mb-6 block border border-secondary/20 px-3 py-1 rounded-full inline-block">BÔNUS 01</span>
              <h3 class="text-2xl font-medium text-white mb-6 tracking-tight leading-snug">Como retomar a rotina após falhar</h3>
              <p class="text-sm font-light text-on-surface/50 font-mono flex items-center gap-3">
                <span class="material-symbols-outlined text-[1rem]">play_circle</span> AULA EXCLUSIVA
              </p>
            </div>
          </div>
          <div class="group relative bg-[#0f0f0f] border border-white/5 rounded-sm p-8 md:p-10 overflow-hidden hover:border-secondary/30 transition-colors">
            <div class="absolute -right-12 -top-12 w-48 h-48 bg-secondary/10 blur-[60px] group-hover:bg-secondary/20 transition-all"></div>
            <div class="relative z-10">
              <span class="text-secondary/70 font-mono text-xs tracking-widest mb-6 block border border-secondary/20 px-3 py-1 rounded-full inline-block">BÔNUS 02</span>
              <h3 class="text-2xl font-medium text-white mb-6 tracking-tight leading-snug">Rotina prática antes <br>de dormir</h3>
              <p class="text-sm font-light text-on-surface/50 font-mono flex items-center gap-3">
                <span class="material-symbols-outlined text-[1rem]">self_improvement</span> REDUÇÃO DE ANSIEDADE
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Pricing Card -->
      <div class="text-center mb-24 md:mb-40 relative z-10">
        <div class="inline-block px-6 py-2 border border-secondary/30 text-secondary font-mono text-[10px] tracking-[0.4em] mb-12 uppercase">
          Lote de Lançamento
        </div>
        
        <div class="flex flex-col items-center mb-16">
          <span class="text-on-surface/30 line-through text-lg mb-4 font-mono">De R$ 197</span>
          <div class="flex flex-col items-center md:flex-row md:items-baseline gap-2 md:gap-4">
            <span class="text-sm font-mono uppercase tracking-widest text-on-surface/60">Por apenas</span>
            <span class="text-[5rem] md:text-[7rem] font-bold text-secondary tracking-tighter leading-none">R$ 47</span>
          </div>
        </div>
        
        <div class="bg-surface border border-white/10 rounded-sm p-8 md:p-12 mb-12 relative overflow-hidden backdrop-blur-sm shadow-2xl">
          <div class="absolute top-0 left-0 w-2 h-full bg-primary"></div>
          <div class="flex flex-col md:flex-row gap-12 items-center text-left">
            <div class="flex-1 space-y-6">
              <div class="flex items-center gap-4">
                <span class="material-symbols-outlined text-primary text-xl">verified</span>
                <span class="text-on-surface font-light tracking-wide">Acesso por 180 dias</span>
              </div>
              <div class="flex items-center gap-4">
                <span class="material-symbols-outlined text-primary text-xl">shield</span>
                <span class="text-on-surface font-light tracking-wide">7 dias de garantia incondicional</span>
              </div>
            </div>
            <Button text="QUERO DESENVOLVER FOCO" href="https://pay.hotmart.com/S105322046I" className="w-full md:w-auto text-center" />
          </div>
        </div>

        <p class="text-on-surface-variant font-light text-sm max-w-lg mx-auto leading-relaxed">
          Se você assistir e perceber que não é para você, devolvemos 100%. Sem perguntas.
        </p>
      </div>

      <!-- Para quem é / não é -->
      <div class="max-w-5xl mx-auto border-t border-white/5 pt-20 md:pt-32">
        <div class="text-center mb-12 md:mb-20">
          <h2 class="font-headline text-4xl font-bold tracking-tighter">É para mim?</h2>
        </div>
        <div class="grid md:grid-cols-2 gap-6 lg:gap-12">
          <!-- Para Quem É -->
          <div class="p-8 lg:p-12 rounded-sm bg-gradient-to-b from-white/[0.02] to-transparent border border-white/5">
             <div class="w-16 h-16 bg-primary/10 rounded-sm flex items-center justify-center mb-10 border border-primary/20">
               <span class="material-symbols-outlined text-primary text-3xl">task_alt</span>
             </div>
             <h3 class="font-headline text-3xl font-bold tracking-tight mb-8">O perfil perfeito</h3>
             <ul class="space-y-6">
                <li class="flex items-start gap-4">
                  <div class="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0 opacity-80"></div>
                  <span class="font-light text-on-surface-variant text-lg leading-snug">Pessoas dispersas que começam e não terminam</span>
                </li>
                <li class="flex items-start gap-4">
                  <div class="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0 opacity-80"></div>
                  <span class="font-light text-on-surface-variant text-lg leading-snug">Quem busca menos ansiedade e mais constância</span>
                </li>
                <li class="flex items-start gap-4">
                  <div class="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0 opacity-80"></div>
                  <span class="font-light text-on-surface-variant text-lg leading-snug">Quem quer retomar controle da própria vida</span>
                </li>
                <li class="flex items-start gap-4">
                  <div class="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0 opacity-80"></div>
                  <span class="font-light text-on-surface-variant text-lg leading-snug">CLTs que desejam produzir melhor</span>
                </li>
                <li class="flex items-start gap-4">
                  <div class="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0 opacity-80"></div>
                  <span class="font-light text-on-surface-variant text-lg leading-snug">Autônomos com dias cheios que não evoluem</span>
                </li>
                <li class="flex items-start gap-4">
                  <div class="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0 opacity-80"></div>
                  <span class="font-light text-on-surface-variant text-lg leading-snug">Empresários com equipes dispersas</span>
                </li>
             </ul>
          </div>
          
          <!-- Para Quem Não É -->
          <div class="p-8 lg:p-12 rounded-sm bg-gradient-to-b from-[#0a0a0a] to-transparent border border-white/5 opacity-80 hover:opacity-100 transition-opacity duration-500">
             <div class="w-16 h-16 bg-white/5 rounded-sm flex items-center justify-center mb-10 border border-white/10">
               <span class="material-symbols-outlined text-white/50 text-3xl">cancel</span>
             </div>
             <h3 class="font-headline text-3xl font-bold tracking-tight mb-8">Não é para você se...</h3>
             <ul class="space-y-6">
                <li class="flex items-start gap-4">
                  <div class="mt-3 w-3 h-px bg-white/30 shrink-0"></div>
                  <span class="font-light text-on-surface-variant text-lg leading-snug">Você procura uma "fórmula mágica"</span>
                </li>
                <li class="flex items-start gap-4">
                  <div class="mt-3 w-3 h-px bg-white/30 shrink-0"></div>
                  <span class="font-light text-on-surface-variant text-lg leading-snug">Você apenas busca motivação passageira</span>
                </li>
                <li class="flex items-start gap-4">
                  <div class="mt-3 w-3 h-px bg-white/30 shrink-0"></div>
                  <span class="font-light text-on-surface-variant text-lg leading-snug">Não está realmente disposto a aplicar o método</span>
                </li>
             </ul>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>
