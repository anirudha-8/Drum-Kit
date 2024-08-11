window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    console.log(key);

    // if audio is not, then return
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    setTimeout(() => {
        key.classList.remove("playing");
    }, 70); // 70ms => 0.07S
})