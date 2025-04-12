// Popup megnyitása
document.getElementById('open-btn').addEventListener('click', function() {
  const overlay = document.getElementById('overlay');
  overlay.classList.remove('hidden');
  overlay.classList.add('show');
});

// Popup bezárása
document.getElementById('close-btn').addEventListener('click', function() {
  const overlay = document.getElementById('overlay');
  overlay.classList.remove('show');
  overlay.classList.add('hidden');
});

