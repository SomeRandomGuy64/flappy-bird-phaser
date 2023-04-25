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
  this.load.image('sky-bg', 'assets/sky.png');
}

function create() {
  // x, y, key
  this.add.image(config.width/2, config.height/2, 'sky-bg');
}

new Phaser.Game(config);
