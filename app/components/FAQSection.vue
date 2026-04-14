<template>
  <section class="py-40 px-8">
    <div class="max-w-3xl mx-auto">
      <h2 class="font-headline text-3xl font-bold mb-20 text-center tracking-tight text-secondary uppercase tracking-[0.2em]">Perguntas Frequentes</h2>
      <div class="space-y-4">
        <div 
          v-for="(item, index) in faqItems" 
          :key="index"
          class="group border-b border-outline pb-8 transition-all duration-300"
          :class="{ 'pb-12': openIndex === index }"
        >
          <button 
            class="w-full text-left flex justify-between items-center group-hover:text-secondary transition-colors"
            @click="openIndex = openIndex === index ? null : index"
          >
            <h3 class="text-xl font-light tracking-tight">{{ item.question }}</h3>
            <span 
              class="material-symbols-outlined text-on-surface/20 group-hover:text-secondary transition-transform duration-300"
              :class="{ 'rotate-45 text-secondary': openIndex === index }"
            >
              add
            </span>
          </button>
          <div 
            class="mt-6 text-on-surface-variant font-light leading-relaxed max-w-2xl transition-all duration-300 overflow-hidden"
            :style="{ maxHeight: openIndex === index ? '200px' : '0', opacity: openIndex === index ? '1' : '0' }"
          >
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const openIndex = ref<number | null>(null)

const faqItems = [
  {
    question: 'Isso é só mais um curso de produtividade?',
    answer: 'Não. Produtividade é consequência. O foco do Silêncio Digital é domínio da atenção. Você vai aprender a lidar com impulsos internos, reduzir estímulos externos e estruturar sua rotina com critério. Não é sobre fazer mais. É sobre fazer melhor, e terminar o que começa. Se você busca estrutura real, não motivação passageira, esse método foi feito para você.'
  },
  {
    question: 'Eu sempre fui muito distraído. Isso realmente funciona para mim?',
    answer: 'Especialmente para você. O método não depende de força de vontade extrema. Ele ensina a criar espaço entre impulso e ação. Você não precisa “virar outra pessoa”. Precisa aprender a proteger sua atenção. E isso é treinável.'
  },
  {
    question: 'Preciso parar de usar celular?',
    answer: 'Não. O problema nunca foi o celular. O problema é usar sem critério. Você vai aprender a usar tecnologia como ferramenta, não como fuga. Isso torna o método sustentável na vida real.'
  },
  {
    question: 'Não tenho muito tempo. Vou conseguir aplicar?',
    answer: 'Sim. O curso é direto, objetivo e 100% aplicável. As técnicas foram pensadas para quem trabalha, tem rotina cheia e não pode parar a vida para “virar monge”. Você aplica no meio da sua rotina atual.'
  },
  {
    question: 'E se eu comprar e não gostar?',
    answer: 'Você tem 7 dias de garantia incondicional. Assista. Teste. Aplique. Se não fizer sentido para você, o valor é devolvido integralmente. Sem burocracia.'
  },
  {
    question: 'Isso funciona para quem é CLT?',
    answer: 'Sim. Na verdade, funciona especialmente para quem trabalha sob interrupções constantes. Você vai aprender a: proteger blocos de tempo, reduzir distrações externas e parar de trabalhar o dia inteiro e ainda assim não produzir. É um método aplicável à rotina real.'
  },
  {
    question: 'Eu já vi muitos vídeos sobre foco. Qual a diferença?',
    answer: 'Vídeos soltos dão informação. O Silêncio Digital entrega estrutura. Existe sequência lógica, aplicação prática e organização estratégica. Você não vai sair com mais conteúdo, vai sair com método.'
  },
  {
    question: 'Isso vai me deixar mais rígido ou radical?',
    answer: 'Não. O objetivo não é virar obsessivo. É desenvolver foco sustentável com paz mental. Você vai aprender a dizer “não” quando precisa, mas também a viver com equilíbrio.'
  },
  {
    question: 'Esse curso resolve ansiedade?',
    answer: 'Ele não substitui terapia. Mas reduz uma das principais fontes de ansiedade moderna: excesso de estímulo e falta de direção. Quando sua atenção deixa de ser puxada o tempo todo, a mente desacelera. Muitos alunos relatam justamente isso: mais clareza e menos sobrecarga mental.'
  },
  {
    question: 'Por que o preço está tão acessível?',
    answer: 'Porque o objetivo é tornar o método acessível e escalável. O valor não reflete o impacto potencial. Ele reflete uma decisão estratégica. O custo real está em continuar vivendo ocupado, irritado e improdutivo por mais um ano.'
  }
]
</script>
