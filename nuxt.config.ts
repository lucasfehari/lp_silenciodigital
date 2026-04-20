// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Silêncio Digital | Foco Sustentável',
      htmlAttrs: { lang: 'pt-BR', class: 'scroll-smooth dark' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Reduza distrações, desenvolva foco sustentável e retome o controle com o método Silêncio Digital.' }
      ],
      link: [
        // Preconnects primeiro — antes de qualquer stylesheet
        // FIX: crossorigin é obrigatório para recursos CORS (fontes, players)
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },

        // FIX vídeo: os 3 domínios do Vimeo + crossorigin em todos
        { rel: 'preconnect', href: 'https://player.vimeo.com', crossorigin: '' },
        { rel: 'preconnect', href: 'https://f.vimeocdn.com', crossorigin: '' },
        { rel: 'preconnect', href: 'https://i.vimeocdn.com', crossorigin: '' },

        // dns-prefetch como fallback para browsers que não suportam preconnect
        { rel: 'dns-prefetch', href: 'https://player.vimeo.com' },
        { rel: 'dns-prefetch', href: 'https://f.vimeocdn.com' },
        { rel: 'dns-prefetch', href: 'https://i.vimeocdn.com' },

        // Fontes
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;700;800&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,400..800;1,400..800&display=swap'
        },

        // FIX ícones: Material Symbols estava faltando completamente
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block'
        }
      ]
    }
  }
})