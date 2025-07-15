draw.home = async function () {
  // ...existing code...

  // Thêm vùng nút dưới cùng nếu chưa có
  if (!document.getElementById("bottomBtnBar")) {
    const btnBar = document.createElement("div");
    btnBar.id = "bottomBtnBar";
    btnBar.className = "bottomBtnBar";
    btnBar.innerHTML = `
      <button class="circleBtn" id="btnNotes">
        <i class="fa-solid fa-note-sticky"></i>
      </button>
      <button class="circleBtn" id="btnMissions">
        <i class="fa-solid fa-list-check"></i>
      </button>
    `;
    btnBar.style.position = "absolute";
    btnBar.style.left = "50%";
    btnBar.style.bottom = "32px";
    btnBar.style.transform = "translateX(-50%)";
    document.body.appendChild(btnBar);
  }

  // Thêm nút setting (bánh răng) chỉ có icon
  if (!document.getElementById("btnSetting")) {
    const btnSetting = document.createElement("button");
    btnSetting.id = "btnSetting";
    btnSetting.style.position = "absolute";
    btnSetting.style.right = "15px";
    btnSetting.style.top = "20px";
    btnSetting.style.background = "transparent";
    btnSetting.style.border = "none";
    btnSetting.style.color = "#fff";
    btnSetting.style.fontSize = "20px";
    btnSetting.innerHTML = `<i class="fa-solid fa-gear"></i>`;
    document.body.appendChild(btnSetting);
  }

  // Gắn sự kiện cho nút ngay sau khi tạo
  action.clickHome();
};
