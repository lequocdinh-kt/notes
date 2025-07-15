listener.click = async function () {
  console.log("[listener/click.js] listener.click called");
  draw.c.addEventListener("click", function (e) {
    const rect = draw.c.getBoundingClientRect();
    // Tính tỷ lệ giữa kích thước canvas và kích thước hiển thị
    const scaleX = draw.c.width / rect.width;
    const scaleY = draw.c.height / rect.height;
    // Chuyển đổi tọa độ click về hệ tọa độ canvas
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    switch (draw.screen) {
      case common.SCREEN_ID_HOME:
        action.clickHome(x, y);
        break;
      case common.SCREEN_ID_MISSIONS:
        action.clickMissions(x, y);
        break;
      case common.SCREEN_ID_NOTES:
        action.clickNotes(x, y);
        break;
      default:
        console.log(
          `Unknown screen clicked at: (${x}, ${y})` + "-" + draw.screen
        );
    }
  });
};
