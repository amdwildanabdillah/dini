<template>
  <div v-if="show" class="notification-overlay" @click.self="close">
    <div class="notification-modal">
      <div class="confetti-container">
        <div v-for="n in 100" :key="n" class="confetti"></div>
      </div>
      <div class="modal-content">
        <h3>Commit Success!</h3>
        <p>Cerita kita resmi dimulai. Status: Fully Committed ❤️</p>
        <button @click="close">Continue</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['close']);

const close = () => {
  emit('close');
};
</script>

<style scoped>
:root {
  --accent1: #ff00ff;
  --accent2: #00fff6;
}

.notification-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
  animation: fadeIn 0.3s ease;
}

.notification-modal {
  background-color: #1a1a1a;
  border: 1px solid var(--accent1);
  border-radius: 12px;
  padding: 2.5rem;
  text-align: center;
  color: #fff;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 40px rgba(255, 0, 255, 0.5), 0 0 40px rgba(0, 255, 246, 0.5);
  animation: slideIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.modal-content h3 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  background-image: linear-gradient(90deg, var(--accent1), var(--accent2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.modal-content p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.modal-content button {
  background: linear-gradient(90deg, var(--accent1), var(--accent2));
  color: #0a0a0a;
  font-weight: 700;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.modal-content button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.5);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  0% {
    transform: translateY(50px) scale(0.9);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

/* Confetti CSS Animation */
.confetti-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.confetti {
  position: absolute;
  width: 8px;
  height: 16px;
  top: -20px;
  opacity: 0;
  animation: fall 5s linear infinite;
}

@keyframes fall {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(110vh) rotate(720deg);
    opacity: 0;
  }
}

.confetti:nth-child(2n) { background: var(--accent1); }
.confetti:nth-child(2n + 1) { background: var(--accent2); }

.confetti:nth-child(1) { left: 10%; animation-delay: 0s; }
.confetti:nth-child(2) { left: 20%; animation-delay: -3s; }
.confetti:nth-child(3) { left: 30%; animation-delay: -1.5s; }
.confetti:nth-child(4) { left: 40%; animation-delay: -4s; }
.confetti:nth-child(5) { left: 50%; animation-delay: -2.5s; }
.confetti:nth-child(6) { left: 60%; animation-delay: -1s; }
.confetti:nth-child(7) { left: 70%; animation-delay: -3.5s; }
.confetti:nth-child(8) { left: 80%; animation-delay: -2s; }
.confetti:nth-child(9) { left: 90%; animation-delay: -0.5s; }
.confetti:nth-child(10) { left: 100%; animation-delay: -4.5s; }
</style>
