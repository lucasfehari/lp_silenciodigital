<template>
  <div 
    ref="wrapperRef" 
    class="absolute inset-0 overflow-hidden pointer-events-auto"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <canvas ref="canvasRef" class="block w-full h-full opacity-80" />
    <div 
      class="absolute inset-0 pointer-events-none" 
      :style="{ boxShadow: `inset 0 0 ${vignetteStrength * 200}px rgba(0,0,0,1)` }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';

const props = defineProps({
  enableRainbow: { type: Boolean, default: false },
  gridColor: { type: String, default: '#ffffff' },
  rippleIntensity: { type: Number, default: 0.05 },
  gridSize: { type: Number, default: 14 },
  gridThickness: { type: Number, default: 15 },
  fadeDistance: { type: Number, default: 0.5 },
  vignetteStrength: { type: Number, default: 0.5 },
  glowIntensity: { type: Number, default: 0.1 },
  opacity: { type: Number, default: 1 },
  gridRotation: { type: Number, default: 45 },
  mouseInteraction: { type: Boolean, default: true },
  mouseInteractionRadius: { type: Number, default: 0.9 }
});

const wrapperRef = ref<HTMLElement | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);

let ctx: CanvasRenderingContext2D | null = null;
let animationId = 0;
let width = 0;
let height = 0;
let mouseX = -1000;
let mouseY = -1000;
let time = 0;

const onMouseMove = (e: MouseEvent) => {
  if (!props.mouseInteraction || !wrapperRef.value) return;
  const rect = wrapperRef.value.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
};

const onMouseLeave = () => {
  mouseX = -1000;
  mouseY = -1000;
};

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1] as string, 16),
    g: parseInt(result[2] as string, 16),
    b: parseInt(result[3] as string, 16)
  } : { r: 255, g: 255, b: 255 };
};

const startCanvas = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  ctx = canvas.getContext('2d');
  if (!ctx) return;

  const resize = () => {
    if (!wrapperRef.value) return;
    width = wrapperRef.value.clientWidth;
    height = wrapperRef.value.clientHeight;
    // Handle High DPI
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx?.scale(dpr, dpr);
  };
  
  window.addEventListener('resize', resize);
  resize();

  const color = hexToRgb(props.gridColor);

  const draw = () => {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);
    time += 0.05;

    ctx.save();
    // Center origin to apply rotation
    ctx.translate(width / 2, height / 2);
    ctx.rotate((props.gridRotation * Math.PI) / 180);
    
    // Configurações do grid baseado nos props
    const spacing = Math.max(10, props.gridSize * 2);
    const thickness = Math.max(1, props.gridThickness / 5);
    
    // Queremos desenhar linhas saindo do centro além dos limites da tela
    const maxDimension = Math.max(width, height) * 1.5;
    
    ctx.lineWidth = thickness;
    
    // Desenhando a Grade com Distorção por Mouse (Ripple Mechanics)
    for (let x = -maxDimension; x <= maxDimension; x += spacing) {
      for (let y = -maxDimension; y <= maxDimension; y += spacing) {
        
        // Un-rotate as coordenadas point-by-point para testar a colisão do mouse real
        const cos = Math.cos((props.gridRotation * Math.PI) / 180);
        const sin = Math.sin((props.gridRotation * Math.PI) / 180);
        const realX = (x * cos - y * sin) + width/2;
        const realY = (x * sin + y * cos) + height/2;

        const dx = realX - mouseX;
        const dy = realY - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        const interactionZone = props.mouseInteractionRadius * 400; // Radius range
        let rippleEffect = 0;
        
        if (props.mouseInteraction && dist < interactionZone) {
            // Ripple wave function
            rippleEffect = Math.sin(dist * 0.05 - time) * (interactionZone - dist) * props.rippleIntensity;
        }

        const opacityBase = props.opacity;
        // Fade-out towards edges 
        const edgeDist = Math.max(Math.abs(realX - width/2) / (width/2), Math.abs(realY - height/2) / (height/2));
        const finalOpacity = Math.max(0, opacityBase - (edgeDist * props.fadeDistance));

        if (finalOpacity <= 0) continue;

        // Efeito Neon e cores
        ctx.globalAlpha = finalOpacity;
        if (props.enableRainbow) {
          ctx.strokeStyle = `hsl(${(dist + time * 50) % 360}, 100%, 70%)`;
        } else {
          ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${finalOpacity})`;
        }
        
        // Padrão do Ripple Grid "Crosses"
        ctx.beginPath();
        ctx.moveTo(x - rippleEffect, y);
        ctx.lineTo(x + spacing/2 + rippleEffect, y);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x, y - rippleEffect);
        ctx.lineTo(x, y + spacing/2 + rippleEffect);
        ctx.stroke();
      }
    }
    ctx.restore();

    animationId = requestAnimationFrame(draw);
  };
  
  draw();

  return () => {
    window.removeEventListener('resize', resize);
    cancelAnimationFrame(animationId);
  };
};

let cleanup: any;
onMounted(() => {
  cleanup = startCanvas();
});

onUnmounted(() => {
  if (cleanup) cleanup();
});
</script>
