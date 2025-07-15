draw.missions = async function () {
  // Xóa searchBox nếu tồn tại
  const searchBox = document.getElementById("searchBox");
  if (searchBox) searchBox.remove();

  // Xóa nút btnNotesAdd nếu tồn tại
  const btnNotesAdd = document.getElementById("btnNotesAdd");
  if (btnNotesAdd) btnNotesAdd.remove();

  // Xóa nút btnTrash nếu tồn tại
  const btnTrash = document.getElementById("btnTrash");
  if (btnTrash) btnTrash.remove();

  var ctx = draw.ctx;
  var w = draw.c.width;
  var h = draw.c.height;
  if (!ctx) return;
  ctx.clearRect(0, 0, w, h);

  // Tiêu đề missions
  ctx.font = "bold 28px Arial";
  ctx.fillStyle = common.MAIN_TEXT_COLOR;
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText("missions", w / 6, h / 15);

  // Thêm nút dấu cộng nếu chưa có
  if (!document.getElementById("btnMissionsAdd")) {
    const btnMissionsAdd = document.createElement("button");
    btnMissionsAdd.id = "btnMissionsAdd";
    btnMissionsAdd.className = "circleBtn";
    btnMissionsAdd.style.position = "absolute";
    btnMissionsAdd.style.left = "32px";
    btnMissionsAdd.style.bottom = "100px";
    btnMissionsAdd.style.background =
      "linear-gradient(90deg, #2af598 0%, #009efd 100%)";
    btnMissionsAdd.style.color = "#fff";
    btnMissionsAdd.style.width = "60px";
    btnMissionsAdd.style.height = "60px";
    btnMissionsAdd.style.borderRadius = "50%";
    btnMissionsAdd.style.fontSize = "28px";
    btnMissionsAdd.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    document.body.appendChild(btnMissionsAdd);
    action.clickMissions();
  }
};
