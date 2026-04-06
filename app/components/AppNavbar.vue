<template>
  <nav class="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
    <div class="bg-surface-variant/40 backdrop-blur-2xl border border-white/5 rounded-full px-8 py-4 flex justify-between items-center shadow-2xl">
      <span class="text-lg font-bold tracking-tighter text-secondary uppercase">Silêncio Digital</span>
      <div class="hidden md:flex items-center space-x-10">
        <a class="text-xs font-mono uppercase tracking-widest text-on-surface/60 hover:text-secondary transition-colors" href="#vsl">O Método</a>
        <a class="px-6 py-2.5 bg-primary text-secondary text-[10px] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-primary/80 transition-all active:scale-95" href="#pricing">Garantir Acesso</a>
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
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMenuOpen" class="absolute top-20 left-0 w-full bg-surface-variant/95 backdrop-blur-2xl border border-white/5 rounded-3xl p-8 shadow-2xl md:hidden">
        <div class="flex flex-col space-y-6">
          <a class="text-sm font-mono uppercase tracking-widest text-on-surface/60 hover:text-secondary transition-colors" href="#vsl" @click="isMenuOpen = false">O Método</a>
          <a class="w-full text-center px-6 py-4 bg-primary text-secondary text-xs font-bold tracking-[0.2em] uppercase rounded-full" href="#pricing" @click="isMenuOpen = false">Garantir Acesso</a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)
</script>

