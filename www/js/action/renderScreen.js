action.renderScreen = async function () {
  var ctx = draw.ctx;
  var size = draw.c.width;
  ctx.clearRect(0, 0, size, size);

  switch (draw.screen) {
    case common.SCREEN_ID_HOME:
      await draw.home();
      await draw.notes();
      break;
    case common.SCREEN_ID_NOTES:
      await draw.home();
      await draw.notes();

      break;
    case common.SCREEN_ID_MISSIONS:
      await draw.home();
      await draw.missions();

      break;
    default:
      console.error("Unknown screen ID:", draw.screen);
      break;
  }
};
