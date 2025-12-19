import { ref, reactive } from 'vue';

// --- Static Data (Unchanged) ---

export const AlbumData = [
  {
    id: 1,
    title: 'THE BEGINNING',
    description: 'Awal mula cerita, saat tatap muka pertama kali terasa begitu bermakna.',
    coverImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    photos: [
      { id: 101, url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80', meta: 'Sony a6400 | 35mm f/1.8' },
      { id: 102, url: 'https://images.unsplash.com/photo-1511894552044-cd7893666f7d?auto=format&fit=crop&w=800&q=80', meta: 'ISO 400 | 1/125s' },
      { id: 103, url: 'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?auto=format&fit=crop&w=800&q=80', meta: 'Lightroom Gold Punch' },
    ]
  },
  {
    id: 2,
    title: 'DIGITAL HARMONY',
    description: 'Di antara baris kode dan tawa, ada kamu yang selalu jadi penenang.',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    photos: [
      { id: 201, url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80', meta: 'VS Code Dark Mode' },
      { id: 202, url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80', meta: 'Developer Workflow' },
      { id: 203, url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80', meta: 'Late Night Sessions' },
    ]
  },
  {
    id: 3,
    title: 'ASSET & DREAMS',
    description: 'Bukan sekadar barang, tapi bukti perjuangan untuk masa depan kita.',
    coverImage: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80',
    photos: [
      { id: 301, url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80', meta: 'Suzuki XL7 | Checkpoint' },
      { id: 302, url: 'https://images.unsplash.com/photo-1444491741275-3747c53c99b4?auto=format&fit=crop&w=800&q=80', meta: 'CB150X | On Road' },
      { id: 303, url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80', meta: 'Dream Destination' },
    ]
  }
];

export const TimelineData = [
  { year: '2021', title: 'Debugging Life', desc: 'Awal mula karir IT, belajar dari nol, begadang demi logic.' },
  { year: '2022', title: 'Deployment Phase', desc: 'Mulai memetik hasil, stabil secara finansial, dan mengenalmu.' },
  { year: '2023', title: 'Scaling Up', desc: 'CB150X & XL7 terparkir. Bukti kerja keras babat alas.' },
  { year: '2024', title: 'Optimization', desc: 'Fokus pada masa depan. Menunggumu di checkpoint terakhir.' },
];


// --- Reactive State ---

// For the proposal status
export const proposalState = reactive({
  status: 'pending', // 'pending' or 'accepted'
});

// For modal popups
export const selectedAlbum = ref(null);
export const showNotification = ref(false);


// --- Functions ---

export function commitProposal() {
  proposalState.status = 'accepted';
  showNotification.value = true;
}

export function closeNotification() {
  showNotification.value = false;
}

export function selectAlbum(album) {
  selectedAlbum.value = album;
}

export function closeModal() {
  selectedAlbum.value = null;
}
