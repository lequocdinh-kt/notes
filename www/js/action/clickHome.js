action.clickHome = async function (x, y) {
  const btnNotes = document.getElementById("btnNotes");
  const btnMissions = document.getElementById("btnMissions");
  const btnAdd = document.getElementById("btnAdd");
  const mainScreen = document.getElementById("mainScreen");

  function animateAndRender(screenId, direction) {
    if (mainScreen) {
      // Xác định class animation theo hướng
      let outClass =
        direction === "left" ? "slide-out-left" : "slide-out-right";
      let inClass = direction === "left" ? "slide-in-right" : "slide-in-left";

      mainScreen.classList.remove(
        "slide-in-right",
        "slide-in-left",
        "slide-out-left",
        "slide-out-right"
      );
      mainScreen.classList.add(outClass);
      setTimeout(() => {
        mainScreen.classList.remove(outClass);
        mainScreen.classList.add(inClass);
        draw.screen = screenId;
        action.renderScreen();

        // Đợi DOM cập nhật xong mới lấy nút add
        setTimeout(() => {
          let btnAdd = document.getElementById(
            screenId === common.SCREEN_ID_NOTES
              ? "btnNotesAdd"
              : "btnMissionsAdd"
          );
          console.log("btnAdd:", btnAdd);
          if (btnAdd) {
            btnAdd.classList.remove("add-in-left", "add-in-right");
            btnAdd.classList.add(
              direction === "left" ? "add-in-left" : "add-in-right"
            );
          }
        }, 0); // timeout 0ms để đợi DOM cập nhật
      }, 500);
    }
  }

  if (btnNotes) {
    btnNotes.onclick = function () {
      // Nếu đã ở notes thì không làm gì cả
      if (draw.screen === common.SCREEN_ID_NOTES) return;
      const direction =
        draw.screen === common.SCREEN_ID_MISSIONS ? "right" : "left";
      animateAndRender(common.SCREEN_ID_NOTES, direction);
    };
  }
  if (btnMissions) {
    btnMissions.onclick = function () {
      // Nếu đã ở missions thì không làm gì cả
      if (draw.screen === common.SCREEN_ID_MISSIONS) return;
      const direction =
        draw.screen === common.SCREEN_ID_NOTES ? "left" : "right";
      animateAndRender(common.SCREEN_ID_MISSIONS, direction);
    };
  }
};
