<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';

// Import state and functions from our composable
import {
  proposalState,
  showNotification,
  commitProposal,
  closeNotification,
  selectedAlbum,
  selectAlbum,
  closeModal,
  AlbumData,
  TimelineData,
} from '../composables/diniState.js';

// Import child components
import AlbumModal from '../components/AlbumModal.vue';
import ProposalNotification from '../components/ProposalNotification.vue';

// Import styles
import '../assets/css/main.css';

</script>

<template>
  <div class="app-container">
    <!-- Modals and Overlays -->
    <AlbumModal v-if="selectedAlbum" :album="selectedAlbum" @close="closeModal" />
    <ProposalNotification :show="showNotification" @close="closeNotification" />

    <!-- Hero Section -->
    <header class="hero">
      <h4 class="hero-label">PROPOSAL // UNTUK DINI</h4>
      <h1 
        class="hero-title"
        :class="{ 'gradient-text': proposalState.status === 'accepted' }"
      >
        CERITA KITA TAK JAUH BERBEDA
      </h1>
      <p class="hero-subtitle">“Everything You Are” — Hindia</p>
      <div class="divider"></div>
    </header>

    <!-- Action Bar (Replaces Music Bar) -->
    

    <!-- Gallery Section -->
    <section class="section">
      <h2 class="section-title">CAPTURED ALBUMS</h2>
      <div class="gallery-grid">
        <div v-for="album in AlbumData" :key="album.id" class="gallery-item" @click="selectAlbum(album)">
          <div class="apple-header">
            <div class="apple-dot red"></div>
            <div class="apple-dot yellow"></div>
            <div class="apple-dot green"></div>
            <span class="album-title-tag">{{ album.title }}</span>
          </div>
          <div class="image-container">
            <img :src="album.coverImage" :alt="album.title" class="album-image" />
            <div class="image-overlay">
              <h3 class="album-hover-title">{{ album.title }}</h3>
              <p class="image-caption-text">{{ album.description }}</p>
              <span class="image-meta">{{ album.photos.length }} Photos in Album</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="section">
      <h2 class="section-title">PROSES BABAT ALAS</h2>
      <div class="timeline">
        <div v-for="(item, idx) in TimelineData" :key="idx" class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-year">{{ item.year }}</span>
            <h3 class="timeline-title">{{ item.title }}</h3>
            <p class="timeline-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="action-bar">
        <button 
          @click="commitProposal" 
          class="commit-btn"
          :disabled="proposalState.status === 'accepted'"
        >
          {{ proposalState.status === 'pending' ? 'TERIMA PROPOSAL INI' : 'PROPOSAL DITERIMA' }}
        </button>
      </div>
      <div class="status-box">
        <span class="status-dot"></span>
        <p class="status-text">
          {{ proposalState.status === 'pending' ? 'Current Status: Waiting for your response...' : 'Current Status: Proposal Accepted! ❤️' }}
        </p>
      </div>
      <p class="copyright">&copy; 2024 DEV_LOG // BUILT FOR DINI</p>
    </footer>
  </div>
</template>
