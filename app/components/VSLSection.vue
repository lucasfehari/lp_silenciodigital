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

          <!--
            FIX #3 - Carregamento Instantâneo (Video Top-of-page):
            - Iframe renderiza imediatamente sem condition
            - src dinâmico: inicia mutado, troca para unmuted no clique (fix Safari)
          -->
          <iframe
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
            class="w-full h-full"
            @load="onIframeLoad"
          ></iframe>

          <!--
            FIX #1 - Safari iOS: overlay dispara troca de src do iframe
            FIX #2 - Overlay compacto no mobile
          -->
          <Transition
            enter-active-class="transition duration-500 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-400 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div
              v-if="isMuted"
              @click="unmuteVideo"
              class="absolute inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-[4px] cursor-pointer"
              role="button"
              aria-label="Clique para assistir com áudio"
            >
              <!-- Card compacto, funciona bem em 320px+ -->
              <div class="flex flex-col items-center gap-3 px-5 py-5 bg-surface-variant/50 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-xl mx-4 max-w-[260px] w-full">

                <!-- Ícone de play (SVG Inline para carregamento instantâneo 0ms) -->
                <div class="relative w-12 h-12 rounded-full bg-primary flex items-center justify-center text-secondary shrink-0">
                  <div class="absolute inset-0 rounded-full animate-ping bg-primary opacity-20"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 relative z-10 translate-x-0.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>

                <div class="text-center">
                  <p class="font-headline font-black text-base text-primary uppercase tracking-tight leading-tight">O Vídeo já começou!</p>
                  <p class="font-mono text-[9px] text-white/70 uppercase tracking-[0.25em] mt-1">Toque para ver com áudio</p>
                </div>

                <!-- Barrinhas de áudio animadas -->
                <div class="flex space-x-1 items-end h-3">
                  <div class="w-1 bg-primary/40 animate-music-bar-1 rounded-sm"></div>
                  <div class="w-1 bg-primary animate-music-bar-2 rounded-sm"></div>
                  <div class="w-1 bg-primary/60 animate-music-bar-3 rounded-sm"></div>
                </div>
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
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const isLoaded = ref(false)
const isMuted = ref(true)
const iframeRef = ref<HTMLIFrameElement | null>(null)

const videoID = '1184109650'
const videoHash = '84b87b239e'

/**
 * FIX #3 - Preconecta ao Vimeo assim que o componente monta,
 * sem carregar o iframe ainda — reduz latência de DNS + TLS
 */
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

/**
 * FIX #1 - Safari iOS:
 * Estado controla se o src usa muted=1 (autoplay silencioso) ou muted=0 (após clique).
 * Trocar o src força o browser a recarregar o iframe como resultado de uma gesture,
 * o que satisfaz a política de autoplay do Safari e permite áudio.
 */
const isUnmuted = ref(false)

const iframeSrc = computed(() => {
  if (isUnmuted.value) {
    // Src sem muted — carregado APÓS clique do usuário (gesture válido para Safari)
    return `https://player.vimeo.com/video/${videoID}?h=${videoHash}&title=0&byline=0&portrait=0&controls=1&vimeo_logo=0&autopause=0&autoplay=1&muted=0`
  }
  // Src inicial — mutado para satisfazer política de autoplay sem interação
  return `https://player.vimeo.com/video/${videoID}?h=${videoHash}&title=0&byline=0&portrait=0&controls=1&vimeo_logo=0&autopause=0&autoplay=1&muted=1`
})

const onIframeLoad = () => {
  // Pequeno delay para o player interno do Vimeo inicializar
  setTimeout(() => {
    isLoaded.value = true
  }, 300)

  // Se já estava unmuted (segundo load após clique), esconde overlay
  if (isUnmuted.value) {
    isMuted.value = false
  }
}

/**
 * FIX #1 - Lógica de unmute para Safari iOS:
 * Em vez de chamar APIs do SDK (bloqueadas pelo Safari sem gesture no elemento),
 * recriamos o iframe com muted=0 — o clique no overlay É a gesture necessária.
 */
const unmuteVideo = () => {
  // Guarda o tempo atual para retomar do mesmo ponto após reload do iframe
  // Nota: não temos acesso ao currentTime via SDK aqui intencionalmente,
  // pois o iframe será recriado. Reinicia do início para não perder conteúdo.
  isLoaded.value = false
  isUnmuted.value = true
  // Vue vai recriar o iframe com o novo src graças ao :src="iframeSrc"
  // O @load vai setar isLoaded=true e isMuted=false
}

onMounted(() => {
  // Preconecta imediatamente domínios do Vimeo para acelerar downloads futuros (handshake SSL)
  preconnectVimeo()
})

onBeforeUnmount(() => {
  // Limpeza caso necessário no futuro
})
</script>

<style scoped>
@keyframes music-bar {
  0%, 100% { height: 4px; }
  50% { height: 12px; }
}
.animate-music-bar-1 { animation: music-bar 0.8s ease-in-out infinite; }
.animate-music-bar-2 { animation: music-bar 0.6s ease-in-out infinite; animation-delay: 0.1s; }
.animate-music-bar-3 { animation: music-bar 1s ease-in-out infinite; animation-delay: 0.2s; }
</style>