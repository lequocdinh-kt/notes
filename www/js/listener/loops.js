listener.loops = async function() {

    // draw game
    function renderScreen() {
        action.renderScreen();
        requestAnimationFrame(renderScreen);
    }
    requestAnimationFrame(renderScreen);

    // logic game
    setInterval(function() {
        action.updateScreen();
    }, 33);
}