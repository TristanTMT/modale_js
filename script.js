let open = document.getElementById('open');
let container_modal = document.getElementById('container-modal');
let close = document.getElementById('close');

open.addEventListener('click', () => {
    container_modal.classList.add('show');
});

close.addEventListener('click', () => {
    container_modal.classList.remove('show');
});