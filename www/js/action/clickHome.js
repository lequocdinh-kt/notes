action.clickHome = async function (x, y) {
  console.log("[clickHome.js] action.clickHome called with:", x, y);
  // Kiểm tra xem có click vào nút tìm kiếm không
  // Gắn sự kiện click cho nút searchButton
  const searchBtn = searchBox.querySelector(".searchButton");
  if (searchBtn) {
    searchBtn.addEventListener("click", function () {
      console.log("[home.js] Search button clicked");
      setTimeout(() => {
        searchBtn.blur();
      }, 150);
    });
  }
};
