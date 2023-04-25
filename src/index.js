import Phaser from "phaser";

const config = {
  // WebGL is the renderer automatically used
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    //Arcade physics plugin
    default: "arcade",
    arcade: {
      gravity: {
        y: 400,
      },
      debug: true,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

function preload() {
  this.load.image("sky", "assets/sky.png");
  this.load.image("bird", "assets/bird.png");
}

let flapVelocity = 250;
let bird = null;

function create() {
  // x, y, key
  this.add.image(0, 0, "sky").setOrigin(0, 0);

  bird = this.physics.add
    .sprite(config.width / 10, config.height / 2, "bird")
    .setOrigin(0, 0);

  this.input.keyboard.on("keydown-SPACE", flap);
}

//60fps
function update(time, delta) {}

function flap() {
  bird.body.velocity.y = -flapVelocity;
}

new Phaser.Game(config);
