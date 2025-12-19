<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <div class="apple-header">
          <div @click="close" class="apple-dot red" style="cursor: pointer;"></div>
          <div class="apple-dot yellow"></div>
          <div class="apple-dot green"></div>
          <span class="album-title-tag">{{ album.title }}</span>
        </div>
      </div>
      <div class="modal-body">
        <div class="modal-info">
          <h2 class="modal-title">{{ album.title }}</h2>
          <p class="modal-desc">{{ album.description }}</p>
        </div>
        <div class="photo-grid">
          <div v-for="photo in album.photos" :key="photo.id" class="photo-item">
            <img :src="photo.url" class="photo-img" />
            <span class="photo-meta">{{ photo.meta }}</span>
          </div>
        </div>
        <button class="close-btn" @click="close">KEMBALI KE BERANDA</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  album: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['close']);

const close = () => {
  emit('close');
};
</script>

<!-- Styles for this component will be in the global main.css to match the React example -->
