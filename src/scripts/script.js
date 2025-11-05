//! Dark Mode

function darkmode() {
    document.body.classList.toggle("darkmode")
}

//! Modal
function openModal(dialogId) {
    const dialog = document.getElementById(dialogId);
    if (dialog && typeof dialog.showModal === 'function') {
        dialog.showModal();
    } else {
        console.error('Elemento não é um <dialog> ou showModal não disponível.', dialog);
    }
}

function closeModal() {
    const dialog = document.getElementById('dialog');
    if (dialog && typeof dialog.close === 'function') {
        dialog.close();
    }
}

window.addEventListener('click', function (event) {
    const openModals = document.querySelectorAll('dialog');

    openModals.forEach(modal => {
        if (event.target === modal) {
            modal.close();
        }
    });
});
