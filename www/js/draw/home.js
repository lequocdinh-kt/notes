draw.home = async function () {
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

  // Thêm thanh tìm kiếm vào DOM nếu chưa có
  if (!document.getElementById("searchBox")) {
    const searchBox = document.createElement("div");
    searchBox.className = "searchBox";
    searchBox.id = "searchBox";
    searchBox.innerHTML = `
      <input class="searchInput" type="text" placeholder="Search something">
      <button class="searchButton">
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 29 29" fill="none">
          <!-- SVG nội dung -->
        </svg>
      </button>
    `;
    searchBox.style.position = "absolute";
    searchBox.style.top = h / 9 + "px";
    searchBox.style.left = "50%";
    searchBox.style.transform = "translateX(-50%)";
    document.body.appendChild(searchBox);
  }

  // Thêm vùng nút dưới cùng nếu chưa có
  if (!document.getElementById("bottomBtnBar")) {
    const btnBar = document.createElement("div");
    btnBar.id = "bottomBtnBar";
    btnBar.className = "bottomBtnBar";
    btnBar.innerHTML = `
      <button class="circleBtn" id="btnNotes">
        <i class="fa-solid fa-note-sticky"></i>
      </button>
      <button class="circleBtn" id="btnCheck">
        <i class="fa-solid fa-square-check"></i>
      </button>
    `;
    btnBar.style.position = "absolute";
    btnBar.style.left = "50%";
    btnBar.style.bottom = "32px";
    btnBar.style.transform = "translateX(-50%)";
    document.body.appendChild(btnBar);
  }
};
