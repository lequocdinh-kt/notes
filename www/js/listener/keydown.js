listener.keydown = async function() {
    window.addEventListener("keydown", function(e) {
        // Prevent default action for certain keys
        if (e.key === "Enter" || e.key === "Escape") {
            e.preventDefault();
        }

        // Log the key pressed
        console.log(`Key pressed: ${e.key}`);

        // Handle specific key actions
        switch (e.key) {
            case "Enter":
                console.log("Enter key pressed - perform action");
                break;
            case "Escape":
                console.log("Escape key pressed - perform action");
                break;
            // Add more cases as needed
            default:
                console.log(`Unhandled key: ${e.key}`);
        }
    });
}
