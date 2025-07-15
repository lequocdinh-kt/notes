listener.resize = async function() {
    window.addEventListener("resize", function() {
        // Get the current dimensions of the canvas
        const canvas = draw.c;
        const rect = canvas.getBoundingClientRect();

        // Calculate new dimensions based on the window size
        const newWidth = window.innerWidth; // 100% of window width
        const newHeight = window.innerHeight; // 100% of window height

        // Set the new dimensions to the canvas
        canvas.width = newWidth;
        canvas.height = newHeight;
    });
}