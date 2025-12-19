<template>
  <div v-if="show" class="notification-overlay" @click.self="close">
    <div class="notification-modal">
      <div class="confetti-container">
        <div v-for="n in 100" :key="n" class="confetti"></div>
      </div>
      <div class="modal-content">
        <h3>Success!</h3>
        <p>Merge Conflict Resolved. Status: Fully Committed ❤️</p>
        <button @click="close">Close</button>
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
.notification-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.notification-modal {
  background-color: #2b2d31;
  border: 1px solid #424549;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  color: #dcddde;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  animation: slideIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.modal-content h3 {
  color: #43b581; /* Discord Green */
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.modal-content p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.modal-content button {
  background-color: #5865F2; /* Discord Blurple */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

.modal-content button:hover {
  background-color: #4752c4;
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
  background: #f00;
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

.confetti:nth-child(10n) { background: #5865F2; } /* Blurple */
.confetti:nth-child(10n + 1) { background: #43b581; } /* Green */
.confetti:nth-child(10n + 2) { background: #faa61a; } /* Yellow */
.confetti:nth-child(10n + 3) { background: #f04747; } /* Red */
.confetti:nth-child(10n + 4) { background: #ffffff; } /* White */
.confetti:nth-child(10n + 5) { background: #ed4245; }
.confetti:nth-child(10n + 6) { background: #3ba55d; }
.confetti:nth-child(10n + 7) { background: #5865f2; }
.confetti:nth-child(10n + 8) { background: #f9a839; }
.confetti:nth-child(10n + 9) { background: #fff; }

.confetti:nth-child(1) { left: 10%; animation-delay: 0s; }
.confetti:nth-child(2) { left: 20%; animation-delay: -3s; }
.confetti:nth-child(3) { left: 30%; animation-delay: -1.5s; }
.confetti:nth-child(4) { left: 40%; animation-delay: -4s; }
.confetti:n-child(5) { left: 50%; animation-delay: -2.5s; }
.confetti:nth-child(6) { left: 60%; animation-delay: -1s; }
.confetti:nth-child(7) { left: 70%; animation-delay: -3.5s; }
.confetti:nth-child(8) { left: 80%; animation-delay: -2s; }
.confetti:nth-child(9) { left: 90%; animation-delay: -0.5s; }
.confetti:nth-child(10) { left: 100%; animation-delay: -4.5s; }
.confetti:nth-child(11) { left: 15%; animation-delay: -1.2s; }
/* ... add more for density if needed */

</style>
