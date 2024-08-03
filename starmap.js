document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("star-map");
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Generate random stars
    const numStars = 100;
    const stars = [];

    for (let i = 0; i < numStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 2;
        stars.push({ x, y, radius });
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#fff"; // Set star color

        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    drawStars();

    // Redraw stars when the window is resized
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawStars();
    });
});