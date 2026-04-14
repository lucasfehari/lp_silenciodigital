<template>
  <div class="w-full sm:w-auto inline-block relative cursor-pointer">
    <a 
      :href="href"
      :class="[
        'group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-primary text-secondary px-12 py-5 font-bold tracking-[0.2em] uppercase transition-all duration-300',
        'hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(202,238,187,0.4)] active:scale-95',
        className
      ]"
    >
      <span class="relative z-10 font-mono text-[11px] mt-[2px]">{{ text }}</span>
      <span 
        v-if="icon" 
        class="relative z-10 material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1"
      >
        {{ icon }}
      </span>

      <!-- Efeito de Brilho Dinâmico -->
      <div 
        class="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-30deg] transition-all duration-1000 group-hover:translate-x-[150%]" 
      />
    </a>
  </div>
</template>

<script setup lang="ts">
/**
 * Componente universal de Botão de Ação.
 * Foco em alta conversão e estética premium (Micro-interações e Brilho).
 */
defineProps({
  text: {
    type: String,
    required: true
  },
  href: {
    type: String,
    default: '#'
  },
  icon: {
    type: String,
    default: ''
  },
  className: {
    type: String,
    default: ''
  }
})
</script>