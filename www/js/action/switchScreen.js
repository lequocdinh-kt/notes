action.switchScreen = async function (screenId) {
  draw.screen = screenId;
  if (typeof action.renderScreen === "function") {
    await action.renderScreen();
  } else {
    console.error("[switchScreen.js] action.renderScreen is not defined");
  }
};
