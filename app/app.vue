<template>
  <div class="bg-surface text-on-surface min-h-screen">
    <!-- Grain Overlay -->
    <div class="fixed inset-0 grain z-[100] pointer-events-none"></div>
    
    <AppNavbar />
    
    <main>
      <NuxtPage />
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// Layout structure for the entire application
</script>

