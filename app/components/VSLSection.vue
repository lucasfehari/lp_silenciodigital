<template>
  <section class="py-32 px-8" id="vsl">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <span class="font-mono text-[10px] tracking-[0.5em] text-on-surface/40 uppercase">O Próximo Passo</span>
        <h2 class="font-headline text-3xl md:text-4xl font-bold mt-4 tracking-tight">Assista ao vídeo abaixo e entenda o que está sabotando seu foco.</h2>
      </div>
      <div class="relative group bg-surface-variant p-2 md:p-4 rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
        <div class="aspect-video relative overflow-hidden rounded-2xl">
          <img class="w-full h-full object-cover opacity-60 grayscale transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKKcAOEkGT1MkxTQCgbbx_FCWGVW5g8oqA9C91_dvcJNUlxzF2SKGZzDLuA7hIbmWaA6R3aoc5vMR54ITw2vYBXOQ2fMPW76Aa28aMPucPnOQ20CXrZtmzuiunRcV30Bv1z2qoQ9MAzDS0NnatdlqXebK4IT4loORsqL38bKwKxnAzWT0WPa7RbQa71WHfp79EeaQMjLrLA1iQQz2U3kInCGAKUm10qQg-ojRjm-_SVoYTGzib4dqJ5yAMMSDtivzAuExGVWuiBQ" alt="VSL Thumbnail"/>
          <div class="absolute inset-0 flex items-center justify-center bg-black/20">
            <button class="w-24 h-24 bg-secondary text-primary rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 group-hover:bg-white">
              <span class="material-symbols-outlined text-4xl" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
