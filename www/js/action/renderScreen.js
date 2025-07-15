action.renderScreen = async function () {
  var ctx = draw.ctx;
  var size = draw.c.width;
  // Xóa toàn bộ canvas trước khi vẽ màn hình mới
  ctx.clearRect(0, 0, size, size);

  switch (draw.screen) {
    case common.SCREEN_ID_HOME:
      await draw.home();
      break;
    default:
      console.error("Unknown screen ID:", draw.screen);
      break;
  }
};
