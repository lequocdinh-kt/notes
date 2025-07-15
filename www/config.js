config = {
  env: "local",
  resList: {
    // Nếu có ảnh cho todo, thêm ở đây
  },
  jsList: [
    //common
    "./js/common/const.js",
    "./js/common/init.js",
    "./js/common/param.js",
    //action
    "./js/action/renderScreen.js",
    "./js/action/switchScreen.js",
    "./js/action/updateScreen.js",
    "./js/action/init.js",
    "./js/action/clickHome.js",
    "./js/action/clickNotes.js",
    "./js/action/clickMissions.js",
    //draw
    "./js/draw/home.js",
    "./js/draw/init.js",
    "./js/draw/missions.js",
    "./js/draw/notes.js",
    //listener
    "./js/listener/click.js",
    "./js/listener/init.js",
    "./js/listener/keydown.js",
    "./js/listener/loops.js",
    "./js/listener/mousedown.js",
    "./js/listener/mousemove.js",
    "./js/listener/resize.js",
  ],
};
