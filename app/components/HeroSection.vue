<template>
  <section class="relative min-h-screen flex items-center overflow-hidden border-b border-white/5">
  

    <!-- Content -->
    <div class="relative z-10 w-full max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 py-40 lg:py-32">
      <div class="grid md:grid-cols-5 gap-12 lg:gap-16 items-start">

        <!-- Left — Heading -->
        <div class="md:col-span-3">
          <span class="font-mono text-[8px] tracking-[0.4em] text-secondary uppercase block mb-8 opacity-80">Arquitetura da Atenção</span>
          <h1 class="font-headline text-5xl sm:text-6xl md:text-5xl lg:text-[4.5rem] font-extrabold leading-[0.9] tracking-tighter">
            Reduza distrações, desenvolva
            <span class="text-primary">foco sustentável</span>
            e retome o controle da sua atenção — mesmo que você se distraia com facilidade.
          </h1>
          

          <p class="text-lg lg:text-xl text-on-surface-variant font-light leading-relaxed mt-10">
            Um método prático para parar de começar e não terminar… e finalmente construir constância com paz mental.
          </p>
           <!-- CTA -->
          <Button 
            text="QUERO DESENVOLVER FOCO" 
            href="#pricing" 
            className="mt-10 lg:mt-12 w-full sm:w-auto"
            icon="arrow_forward"
          />
        </div>

        <!-- Right — Expert Image -->
        <div class="md:col-span-2 flex justify-center md:justify-end items-end mt-12 md:mt-0 relative">
          <!-- 
            TUTORIAL APLICADO: 
            Em vez de forçar width/height engessado, usamos esse combo para a imagem ficar maior e responsiva:
            1. 'origin-bottom': fixa o ponto de ancoragem nos pés do expert.
            2. 'scale-xxx': amplia a imagem visualmente sem estressar as restrições de largura do pai.
            3. 'object-contain object-bottom': Garante a proporção sem cortar cabeças.
            4. 'max-h-[85vh]': Segurança para monitores pequenos/ultrawide não ficarem com a imagem gigante na tela vertical.
          -->
          <img 
            src="~/assets/images/expert.png" 
            class="relative z-10 object-contain object-bottom origin-bottom drop-shadow-2xl transition-transform duration-500 will-change-transform w-full max-w-[520px] md:max-w-none h-auto max-h-[70vh] md:max-h-[100vh] scale-105 md:scale-[1.9] lg:scale-[1.9] xl:scale-[1.9] md:translate-x-10 lg:translate-x-12 md:translate-y-60 lg:translate-y-60"
            alt="Expert" 
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
