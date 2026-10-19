const hamburgerBtn = document.getElementById('hamburgerBtn');
        const mobileDrawer = document.getElementById('mobileDrawer');

        hamburgerBtn.addEventListener('click', () => {
            mobileDrawer.classList.toggle('open');
        });
        
        document.querySelectorAll('.mobile-nav-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                mobileDrawer.classList.remove('open');
            });
        });
function openModal(modalId) {
    document.getElementById(modalId).classList.add("active");
    document.body.classList.add("modal-open");
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove("active");
    document.body.classList.remove("modal-open");
}


window.addEventListener("click", function(event) {

    if (event.target.classList.contains("competition-modal")) {
        event.target.classList.remove("active");
        document.body.classList.remove("modal-open");
    }

});


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        document.querySelectorAll(".competition-modal.active")
            .forEach(function(modal) {
                modal.classList.remove("active");
            });

        document.body.classList.remove("modal-open");
    }

});