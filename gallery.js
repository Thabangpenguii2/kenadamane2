window.onload = function () {

    // 🖼️ HOME slideshow
    const images = [
        "images/IMG-20260219-WA0072.jpg",
        "images/IMG-20260219-WA0073.jpg",
        "images/IMG-20260303-WA0029.jpg",
        "images/IMG-20260303-WA0033.jpg",
        "images/IMG-20260303-WA0035.jpg"
    ];

    const slide = document.getElementById("slide");

    if (slide) {
        let i = 0;
        setInterval(() => {
            i = (i + 1) % images.length;
            slide.src = images[i];
        }, 3000);
    }

    // 🖼️ GALLERY slideshow
    const slide2 = document.getElementById("slide2");

    if (slide2) {
        setInterval(() => {
            const imgs = [
                "images 2/IMG-20260220-WA0031.jpg",
                "images 2/IMG-20260224-WA0060.jpg"
            ];
            slide2.src = imgs[Math.floor(Math.random() * imgs.length)];
        }, 3000);
    }

    // 🎵 MUSIC (ONLY ONE SYSTEM)
    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicBtn");

    if (music && btn) {

        btn.addEventListener("click", () => {

            if (music.paused) {
                music.play();
                btn.innerHTML = "⏸ Pause Music";
            } else {
                music.pause();
                btn.innerHTML = "🎵 Play Music";
            }

        });

    }

};