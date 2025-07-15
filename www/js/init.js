let init = async function() {
    // 1: init params
    await common.init();

    // 2: init functions
    await draw.init();
    await listener.init();
    await action.init();
}