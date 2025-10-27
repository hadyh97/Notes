// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Overlay logic
const overlay  = document.getElementById('notebookOverlay');
const frame    = document.getElementById('notebookFrame');
const closeBtn = document.getElementById('closeOverlay');
const fallback = document.getElementById('overlayFallback');

document.querySelectorAll('.open-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    fallback.hidden = true;
    frame.src = btn.dataset.notebook;
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
});

function closeOverlay() {
  overlay.style.display = 'none';
  frame.src = '';
  document.body.style.overflow = '';
}
closeBtn.addEventListener('click', closeOverlay);
overlay.addEventListener('click', (e) => { if (e.target === overlay) closeOverlay(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeOverlay(); });

// Fallback if iframe fails to load
frame.addEventListener('error', () => {
  fallback.hidden = false;
});