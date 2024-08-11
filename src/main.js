function playSound(e) {
    // Determine the key code: from a key press or a mouse click
    const keyCode = e.keyCode || e.target.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`div[data-key="${keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add("playing");
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if it's not a transform event
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => {
    key.addEventListener("transitionend", removeTransition);
    key.addEventListener("click", playSound); // Listen for mouse clicks
});

window.addEventListener("keydown", playSound); // Listen for keyboard presses
