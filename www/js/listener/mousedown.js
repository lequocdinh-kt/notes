listener.mousedown = async function() {
    draw.c.addEventListener("mousedown", function(e) {
        const rect = draw.c.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Convert click coordinates to board coordinates
        const boardX = Math.floor(x / (draw.c.width / 8));
        const boardY = Math.floor(y / (draw.c.height / 8));

        console.log(`Mouse down on board at: (${boardX}, ${boardY})`);
    });
}
