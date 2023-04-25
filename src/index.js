import Phaser from "phaser";

const config = {
  // WebGL is the renderer automatically used
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    //Arcade physics plugin
    default: "arcade",
  },
  scene: {
    preload: preload,
    create: create,
  },
};

function preload() {
  this.load.image("sky", "assets/sky.png");
}

function create() {
  // x, y, key
  this.add.image(0, 0, "sky").setOrigin(0, 0);
}

new Phaser.Game(config);
