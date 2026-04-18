<template>
  <section class="py-20 md:py-32 px-6 md:px-8 relative overflow-hidden" id="vsl">

    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-full h-full z-0 opacity-10">
      <RippleGrid
        :enableRainbow="false"
        gridColor="#3C4C3B"
        :rippleIntensity="0.05"
        :gridSize="14"
        :gridThickness="15"
        :fadeDistance="0.5"
        :vignetteStrength="0.5"
        :glowIntensity="0.1"
        :opacity="1"
        :gridRotation="45"
        :mouseInteraction="true"
        :mouseInteractionRadius="0.9"
      />
    </div>

    <div class="max-w-6xl mx-auto relative z-10">
      <div class="text-center mb-16">
        <span class="font-mono text-[10px] tracking-[0.5em] text-on-surface/40 uppercase">O Próximo Passo</span>
        <h2 class="font-headline text-3xl md:text-4xl font-bold mt-4 tracking-tight">
          Assista ao vídeo abaixo e entenda o que está sabotando seu foco.
        </h2>
      </div>

      <div class="relative group bg-surface-variant p-2 md:p-3 rounded-2xl overflow-hidden border border-white/5 shadow-2xl max-w-4xl mx-auto">
        <div class="aspect-video relative overflow-hidden rounded-xl bg-black">

          <iframe
            id="vsl-vimeo-iframe"
            title="vimeo-player"
            src="https://player.vimeo.com/video/1184109650?h=84b87b239e&title=0&byline=0&portrait=0&controls=0&autopause=0&autoplay=1&muted=1"
            width="640"
            height="360"
            frameborder="0"
            referrerpolicy="strict-origin-when-cross-origin"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowfullscreen
            class="w-full h-full transition-opacity duration-1000"
            :class="{ 'opacity-0': !isLoaded, 'opacity-100': isLoaded }"
          ></iframe>

          <!-- Barra de Progresso -->
          <div
            v-if="isLoaded"
            class="absolute bottom-0 left-0 w-full h-1.5 bg-white/10 z-20 overflow-hidden"
          >
            <div
              class="h-full bg-secondary transition-all duration-300 ease-out"
              :style="{ width: `${progressPercent}%` }"
            ></div>
          </div>

          <!-- Overlay de som -->
          <Transition
            enter-active-class="transition duration-500 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-300 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div
              v-if="isLoaded && isMuted"
              @click="unmuteVideo"
              class="absolute inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer group pointer-events-auto"
            >
              <div class="flex flex-col items-center space-y-4 px-10 py-8 bg-surface-variant/80 backdrop-blur-2xl border border-white/5 rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105">
                <div class="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-secondary animate-pulse shadow-[0_0_30px_rgba(var(--color-primary),0.3)]">
                  <span class="material-symbols-outlined text-3xl">volume_up</span>
                </div>
                <div class="text-center">
                  <p class="font-headline font-bold text-lg text-primary uppercase tracking-tight">O vídeo já começou!</p>
                  <p class="font-mono text-[10px] text-primary/60 uppercase tracking-widest mt-1">Clique para ativar o áudio</p>
                </div>
              </div>
            </div>
          </Transition>

          <div v-if="!isLoaded" class="absolute inset-0 flex items-center justify-center bg-surface-variant animate-pulse">
            <span class="font-mono text-[10px] uppercase tracking-widest text-on-surface/30">Carregando VSL...</span>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center relative z-10 flex justify-center">
        <Button text="QUERO DESENVOLVER FOCO" href="https://pay.hotmart.com/S105322046I" className="w-full md:w-auto" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Player from '@vimeo/player'

const isLoaded = ref(false)
const isMuted = ref(true)
const progressPercent = ref(0)

// Guardado FORA do sistema reativo do Vue para evitar que o Proxy
// do Vue quebre a referência interna do SDK do Vimeo.
let player: Player | null = null

const unmuteVideo = async () => {
  if (!player) {
    console.warn('Player não está pronto')
    return
  }
  try {
    await player.setVolume(1)
    await player.setMuted(false)
    isMuted.value = false
  } catch (err) {
    console.error('Erro ao desmutar:', err)
  }
}

onMounted(() => {
  // Usamos getElementById para garantir que o SDK sempre encontra o
  // mesmo elemento DOM, independente de re-renders do Vue.
  const iframe = document.getElementById('vsl-vimeo-iframe') as HTMLIFrameElement
  if (!iframe) return

  player = new Player(iframe)

  player.ready().then(() => {
    isLoaded.value = true

    player!.on('timeupdate', (data: { percent: number }) => {
      progressPercent.value = data.percent * 100
    })

    player!.on('volumechange', () => {
      player!.getMuted().then(m => { isMuted.value = m })
    })
  }).catch(err => {
    console.error('Vimeo player não inicializou:', err)
  })
})

onBeforeUnmount(() => {
  // Limpeza para evitar memory leaks ao navegar entre páginas
  player?.destroy()
  player = null
})
</script>