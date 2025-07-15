action.clickMissions = async function (x, y) {
  const btnMissionsAdd = document.getElementById("btnMissionsAdd");
  if (btnMissionsAdd) {
    btnMissionsAdd.addEventListener("click", function () {
      console.log("[notes.js] Add missions button clicked");
    });
  }
};
