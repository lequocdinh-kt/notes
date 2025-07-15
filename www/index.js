// Khởi tạo biến global
window.action = {};
window.common = {};
window.draw = {};
window.listener = {};
window.config = {};
window.res = {};

// Hàm load JS động
async function loadJsFiles(jsList) {
  for (let i = 0; i < jsList.length; i++) {
    console.log("Loading JS file:", jsList[i]);
    await new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = jsList[i];
      script.onload = () => {
        console.log("Loaded:", jsList[i]);
        resolve();
      };
      script.onerror = () => {
        console.error("Failed to load:", jsList[i]);
        reject();
      };
      document.body.appendChild(script);
    });
  }
}

// Hàm main khởi tạo app
var main = async function () {
  // Load config.js trước
  await loadJsFiles(["./config.js"]);
  // Load các file JS cần thiết từ config.jsList
  await loadJsFiles(window.config.jsList);

  // Khởi tạo canvas
  const canvas = document.getElementById("todolist");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  window.draw.c = canvas;
  window.draw.ctx = canvas.getContext("2d");
  window.action.todos = [];

  // Gọi các hàm init nếu có
  if (typeof window.draw.init === "function") {
    await window.draw.init();
  }
  if (typeof window.action.init === "function") {
    await window.action.init();
  }
  if (typeof window.listener.init === "function") {
    window.listener.init();
  }
};

main();
