<template>
  <footer class="bg-surface-variant/30 py-24 border-t border-outline">
    <div class="max-w-screen-2xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
      <div class="mb-12 md:mb-0 flex flex-col items-center md:items-start">
         <img src="~/assets/logo.svg" alt="" srcset="" class="w-40">
        <p class="text-xs font-mono text-on-surface/30 mt-4 tracking-widest uppercase">High Performance Mental Brand</p>
      </div>
      <div class="flex flex-col md:flex-row gap-12 items-center text-center md:text-left">
        <div class="flex gap-8">
          <a class="text-[10px] font-mono uppercase tracking-[0.2em] text-on-surface/40 hover:text-secondary transition-colors" href="#">Termos</a>
          <a class="text-[10px] font-mono uppercase tracking-[0.2em] text-on-surface/40 hover:text-secondary transition-colors" href="#">Privacidade</a>
        </div>
        <div class="vertical-line h-8 hidden md:block"></div>
        <p class="text-[10px] font-mono uppercase tracking-[0.2em] text-on-surface/20">
          {{ new Date().getFullYear() }} Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>
