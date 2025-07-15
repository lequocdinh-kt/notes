action.clickNotes = async function (x, y) {
  console.log("[clickNotes.js] action.clickNotes called with:", x, y);
  // Kiểm tra xem có click vào nút tìm kiếm không
  // Gắn sự kiện click cho nút searchButton
  const searchBtn = searchBox.querySelector(".searchButton");
  if (searchBtn) {
    searchBtn.addEventListener("click", function () {
      console.log("[notes.js] Search button clicked");
      setTimeout(() => {
        searchBtn.blur();
      }, 150);
    });
  }
  const btnNotesAdd = document.getElementById("btnNotesAdd");
  if (btnNotesAdd) {
    btnNotesAdd.addEventListener("click", function () {
      console.log("[notes.js] Add button clicked");
    });
  }
};
