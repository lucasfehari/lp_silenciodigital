<template>
  <nav class="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
    <div class="bg-surface-variant/40 backdrop-blur-2xl border border-white/5 rounded-sm px-6 md:px-8 py-3 md:py-4 flex justify-between items-center shadow-2xl">
      <img src="~/assets/logo.svg" alt="" srcset="" class="w-32 md:w-40">
      <div class="hidden md:flex items-center space-x-10">
        <a class="text-xs font-mono uppercase tracking-widest text-on-surface/60 hover:text-secondary transition-colors" href="#vsl">O Método</a>
        <a class="px-6 py-2.5 bg-primary text-secondary text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm hover:bg-primary/80 transition-all active:scale-95" href="https://pay.hotmart.com/S105322046I">Garantir Acesso</a>
      </div>
      
      <!-- Mobile Menu Button -->
      <button class="md:hidden text-secondary" @click="isMenuOpen = !isMenuOpen">
        <span class="material-symbols-outlined">{{ isMenuOpen ? 'close' : 'menu' }}</span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
    >
      <div v-if="isMenuOpen" class="absolute top-16 left-0 w-full bg-surface-variant/95 backdrop-blur-2xl border border-white/5 rounded-sm p-6 shadow-2xl md:hidden">
        <div class="flex flex-col space-y-6">
          <a class="text-sm font-mono uppercase tracking-widest text-on-surface/60 hover:text-secondary transition-colors" href="#vsl" @click="isMenuOpen = false">O Método</a>
          <a class="w-full text-center px-6 py-4 bg-primary text-secondary text-xs font-bold tracking-[0.2em] uppercase rounded-sm" href="#pricing" @click="isMenuOpen = false">Garantir Acesso</a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)
</script>

