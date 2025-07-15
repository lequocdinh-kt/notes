draw.init = async function () {
  draw.c = document.getElementById("todolist");
  if (!draw.c) {
    console.error(
      "[draw/init.js] Canvas element with id 'todolist' not found."
    );
    return;
  }
  draw.ctx = draw.c.getContext("2d");
  if (!draw.ctx) {
    console.error("[draw/init.js] Failed to get canvas context.");
    return;
  }
  // Đặt kích thước canvas theo kích thước cửa sổ
  draw.c.width = window.innerWidth;
  draw.c.height = window.innerHeight;
  draw.screen = common.SCREEN_ID_NOTES;
};
