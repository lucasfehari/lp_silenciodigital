<template>
  <section class="py-20 md:py-32 px-6 md:px-8 relative overflow-hidden" id="vsl">
    <!-- Fundo com efeito de Ripple para profundidade visual -->
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
      <!-- Headline centralizada com tipografia premium -->
      <div class="text-center mb-16">
        <span class="font-mono text-[10px] tracking-[0.5em] text-on-surface/40 uppercase">O Próximo Passo</span>
        <h2 class="font-headline text-3xl md:text-4xl font-bold mt-4 tracking-tight">
          Assista ao vídeo abaixo e entenda o que está sabotando seu foco.
        </h2>
      </div>

      <!-- Container do Player com bordas Sharp (Design Minimalista) -->
      <div class="relative group bg-surface-variant p-2 md:p-3 rounded-2xl overflow-hidden border border-white/5 shadow-2xl max-w-4xl mx-auto">
        <div class="aspect-video relative overflow-hidden rounded-xl bg-black">

          <!-- Iframe do Vimeo com controles nativos ativados conforme solicitado -->
          <iframe
            id="vsl-vimeo-iframe"
            title="vimeo-player"
            src="https://player.vimeo.com/video/1184109650?h=84b87b239e&title=0&byline=0&portrait=0&controls=1&vimeo_logo=0&autopause=0&autoplay=1&muted=1"
            width="640"
            height="360"
            frameborder="0"
            referrerpolicy="strict-origin-when-cross-origin"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowfullscreen
            class="w-full h-full transition-opacity duration-1000"
            :class="{ 'opacity-0': !isLoaded, 'opacity-100': isLoaded }"
          ></iframe>

          <!-- Overlay de Som (Sound Splash) - Design Ultra Premium -->
          <Transition
            enter-active-class="transition duration-700 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-500 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-110"
          >
            <div
              v-if="isLoaded && isMuted"
              @click="unmuteVideo"
              class="absolute inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-[6px] cursor-pointer group pointer-events-auto"
            >
              <div class="relative flex flex-col items-center space-y-6 px-12 py-10 bg-surface-variant/40 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:scale-105 group-hover:bg-surface-variant/60">
                <!-- Ícone de som com animação de pulso e brilho -->
                <div class="relative w-20 h-20 rounded-full bg-primary flex items-center justify-center text-secondary shadow-[0_0_40px_rgba(var(--color-primary),0.4)]">
                  <!-- Ondas de Som Animadas -->
                  <div class="absolute inset-0 rounded-full animate-ping bg-primary opacity-20"></div>
                  <div class="absolute inset-0 rounded-full animate-pulse bg-primary opacity-40 scale-125"></div>
                  
                  <span class="material-symbols-outlined text-4xl relative z-10 translate-x-0.5">volume_up</span>
                </div>

                <div class="text-center space-y-2">
                  <p class="font-headline font-black text-2xl text-primary uppercase tracking-tighter">O Vídeo já começou!</p>
                  <div class="h-px w-12 bg-primary/20 mx-auto my-2"></div>
                  <p class="font-mono text-[11px] text-white/80 uppercase tracking-[0.3em] font-medium">Clique para ver o vídeo</p>
                </div>

                <!-- Pequeno indicador visual de que é um playback ativo -->
                <div class="flex space-x-1 items-end h-3">
                  <div class="w-1 bg-primary/40 animate-music-bar-1"></div>
                  <div class="w-1 bg-primary animate-music-bar-2"></div>
                  <div class="w-1 bg-primary/60 animate-music-bar-3"></div>
                </div>
              </div>
            </div>
          </Transition>

          <!-- Loader de fallback -->
          <div v-if="!isLoaded" class="absolute inset-0 flex items-center justify-center bg-surface-variant">
            <div class="flex flex-col items-center space-y-4">
              <div class="w-12 h-12 border-2 border-primary/20 border-t-primary rounded-full animate-spin"></div>
              <span class="font-mono text-[10px] uppercase tracking-[0.4em] text-on-surface/40">Carregando Experiência...</span>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Principal abaixo do vídeo -->
      <div class="mt-12 text-center relative z-10 flex justify-center">
        <Button text="QUERO DESENVOLVER FOCO" href="https://pay.hotmart.com/S105322046I" className="w-full md:w-auto" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * Agente Front-end: Gerenciamento do Player de VSL Vimeo
 * Foco em UX, performance e contornar restrições de autoplay de navegadores.
 */
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Player from '@vimeo/player'

const isLoaded = ref(false)
const isMuted = ref(true)

// Instância do Player mantida fora da reatividade para performance e estabilidade
let player: Player | null = null

/**
 * Função para desmutar o vídeo e garantir o play
 * Essencial para satisfazer a interação do usuário exigida pelos browsers.
 */
const unmuteVideo = async () => {
  if (!player) return
  
  try {
    // 1. Reinicia o vídeo do começo para o usuário não perder nada
    await player.setCurrentTime(0)
    
    // 2. Tenta desmutar
    await player.setVolume(1)
    await player.setMuted(false)
    
    // 3. Garante que está tocando
    await player.play()
    
    isMuted.value = false
    console.log('VSL: Vídeo reiniciado com áudio')
  } catch (err) {
    console.error('VSL: Erro ao interagir com o player:', err)
  }
}

onMounted(() => {
  const iframe = document.getElementById('vsl-vimeo-iframe') as HTMLIFrameElement
  if (!iframe) return

  // Inicializa SDK do Vimeo
  player = new Player(iframe)

  player.ready().then(() => {
    isLoaded.value = true
    
    // Sincroniza estado inicial do mute
    player!.getMuted().then(m => { isMuted.value = m })

    // Listener para o caso do usuário desmutar pelos controles nativos do Vimeo
    player!.on('volumechange', () => {
      player!.getMuted().then(m => { isMuted.value = m })
    })

    // Listener para garantir que o overlay suma se o usuário der play/unmute via controles nativos
    player!.on('play', () => {
      player!.getMuted().then(m => { isMuted.value = m })
    })
  }).catch(err => {
    console.error('VSL: Vimeo SDK falhou:', err)
  })
})

onBeforeUnmount(() => {
  player?.destroy()
  player = null
})
</script>

<style scoped>
/* Micro-animações para o indicador de áudio visual */
@keyframes music-bar {
  0%, 100% { height: 4px; }
  50% { height: 12px; }
}
.animate-music-bar-1 { animation: music-bar 0.8s ease-in-out infinite; }
.animate-music-bar-2 { animation: music-bar 0.6s ease-in-out infinite; animation-delay: 0.1s; }
.animate-music-bar-3 { animation: music-bar 1s ease-in-out infinite; animation-delay: 0.2s; }
</style>