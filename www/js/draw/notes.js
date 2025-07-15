draw.notes = async function () {
  // Xóa nút btnMissionsAdd nếu tồn tại
  const btnMissionsAdd = document.getElementById("btnMissionsAdd");
  if (btnMissionsAdd) btnMissionsAdd.remove();
  var ctx = draw.ctx;
  var w = draw.c.width;
  var h = draw.c.height;
  if (!ctx) return;
  ctx.clearRect(0, 0, w, h);

  // Tiêu đề notes
  ctx.font = "bold 28px Arial";
  ctx.fillStyle = common.MAIN_TEXT_COLOR;
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText("Notes", w / 6, h / 15);

  // Thêm thanh tìm kiếm vào mainScreen nếu chưa có
  const mainScreen = document.getElementById("mainScreen");
  if (mainScreen && !document.getElementById("searchBox")) {
    const searchBox = document.createElement("div");
    searchBox.className = "searchBox";
    searchBox.id = "searchBox";
    searchBox.innerHTML = `
      <input class="searchInput" type="text" placeholder="Search something">
      <button class="searchButton">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" stroke-width="2"/>
        </svg>
      </button>
    `;
    searchBox.style.position = "absolute";
    searchBox.style.top = h / 9 + "px";
    searchBox.style.left = "50%";
    searchBox.style.transform = "translateX(-50%)";
    mainScreen.appendChild(searchBox); // Thêm vào mainScreen
  }

  // Thêm nút dấu cộng nếu chưa có
  if (!document.getElementById("btnNotesAdd")) {
    const btnNotesAdd = document.createElement("button");
    btnNotesAdd.id = "btnNotesAdd";
    btnNotesAdd.className = "circleBtn";
    btnNotesAdd.style.position = "absolute";
    btnNotesAdd.style.right = "32px";
    btnNotesAdd.style.bottom = "100px";
    btnNotesAdd.style.background =
      "linear-gradient(90deg, #2af598 0%, #009efd 100%)";
    btnNotesAdd.style.color = "#fff";
    btnNotesAdd.style.width = "60px";
    btnNotesAdd.style.height = "60px";
    btnNotesAdd.style.borderRadius = "50%";
    btnNotesAdd.style.fontSize = "28px";
    btnNotesAdd.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    document.body.appendChild(btnNotesAdd);
    action.clickNotes();
  }

  // Thêm nút thùng rác chỉ có icon
  if (!document.getElementById("btnTrash")) {
    const btnTrash = document.createElement("button");
    btnTrash.id = "btnTrash";
    btnTrash.style.position = "absolute";
    btnTrash.style.right = "75px";
    btnTrash.style.top = "20px";
    btnTrash.style.background = "transparent";
    btnTrash.style.border = "none";
    btnTrash.style.color = "#fff";
    btnTrash.style.fontSize = "20px";
    btnTrash.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    document.body.appendChild(btnTrash);
  }
};
