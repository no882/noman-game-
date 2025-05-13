document.addEventListener("DOMContentLoaded", function () {
  const character = document.getElementById("character");
  const obstacle = document.getElementById("obstacle");

  function jump() {
    if (!character.classList.contains("jump")) {
      character.classList.add("jump");
      setTimeout(() => {
        character.classList.remove("jump");
      }, 500);
    }
  }

  document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
      jump();
    }
  });

  setInterval(function () {
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    if (obstacleLeft < 50 && obstacleLeft > 0 && characterTop >= 150) {
      alert("Game Over!");
    }
  }, 10);
});
