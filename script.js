function openModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = 'flex'; 

  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal(id);
    }
  });
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = 'none';
}