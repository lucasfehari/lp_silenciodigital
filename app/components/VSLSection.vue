<template>
  <section class="py-20 md:py-32 px-6 md:px-8 relative overflow-hidden" id="vsl">


    <div class="max-w-6xl mx-auto relative z-10">
      <div class="text-center mb-16">
        <span class="font-mono text-[10px] tracking-[0.5em] text-on-surface/40 uppercase">O Próximo Passo</span>
        <h2 class="font-headline text-3xl md:text-4xl font-bold mt-4 tracking-tight">
          Assista ao vídeo abaixo e entenda o que está sabotando seu foco.
        </h2>
      </div>

      <div class="relative group bg-surface-variant p-2 md:p-3 rounded-2xl overflow-hidden border border-white/5 shadow-2xl max-w-4xl mx-auto">
        <div class="aspect-video relative overflow-hidden rounded-xl bg-black">

          <!-- O Iframe pesa ZERO no carregamento inicial. Ele só existirá na página AQUI após o clique. -->
          <ClientOnly>
            <iframe
              v-if="isPlaying"
              ref="iframeRef"
              id="vsl-vimeo-iframe"
              title="vimeo-player"
              :src="iframeSrc"
              width="640"
              height="360"
              frameborder="0"
              referrerpolicy="strict-origin-when-cross-origin"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              allowfullscreen
              class="w-full h-full absolute inset-0 z-10"
              @load="onIframeLoad"
            ></iframe>
          </ClientOnly>

          <!-- NOVA FACADE "HIGH-TICKET": Imagem + Ícone Retangular -->
          <!-- Some automaticamente e suavemente assim que clicado -->
          <Transition
            leave-active-class="transition duration-700 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div
              v-if="!isPlaying"
              @click="playVideo"
              class="absolute inset-0 z-20 flex items-center justify-center cursor-pointer group bg-surface-variant overflow-hidden"
              role="button"
              aria-label="Clique para assistir ao vídeo"
            >
              <!-- A Imagem de Fundo (Thumbnail) -->
              <!-- Nota: Buscando thumb.png (ou mude a ext se upload foi jpg) -->
              <img src="/images/thumb.png" alt="Video Thumbnail" class="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" loading="eager" />
              
              <!-- Película suave para dar contraste -->
              <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700"></div>

              <!-- Retângulo de play (opacidade baixa, branco) responsivo mobile -> desktop -->
              <div class="relative z-30 flex items-center justify-center w-[100px] h-[70px] md:w-[140px] md:h-[90px] bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300">
                 <!-- Play icon in white -->
                 <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 md:w-16 md:h-16 text-white fill-current translate-x-1" viewBox="0 0 24 24">
                   <path d="M8 5v14l11-7z"/>
                 </svg>
              </div>
            </div>
          </Transition>

        </div>
      </div>

      <div class="mt-12 text-center relative z-10 flex justify-center">
        <Button text="QUERO DESENVOLVER FOCO" href="https://pay.hotmart.com/S105322046I" className="w-full md:w-auto" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const isLoaded = ref(false)
const isPlaying = ref(false)
const iframeRef = ref<HTMLIFrameElement | null>(null)

const videoID = '1184109650'
const videoHash = '84b87b239e'

// Preconecta para adiantar DNS antes do usuário clicar
const preconnectVimeo = () => {
  const origins = ['https://player.vimeo.com', 'https://i.vimeocdn.com', 'https://f.vimeocdn.com']
  origins.forEach(origin => {
    const link = document.createElement('link')
    link.rel = 'preconnect'
    link.href = origin
    link.crossOrigin = 'anonymous'
    document.head.appendChild(link)
  })
}

const iframeSrc = computed(() => {
  // src é nulo até o disparo. Ao clicar, carrega o player na melhor resolução do Auto com áudio ativado
  if (isPlaying.value) {
    return `https://player.vimeo.com/video/${videoID}?h=${videoHash}&title=0&byline=0&portrait=0&controls=1&vimeo_logo=0&autopause=0&autoplay=1&muted=0&dnt=1`
  }
  return ''
})

const onIframeLoad = () => {
  isLoaded.value = true
}

const playVideo = () => {
  isPlaying.value = true
}

onMounted(() => {
  preconnectVimeo()
})
</script>