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
        y: 200,
      },
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

let bird = null;
function create() {
  // x, y, key
  this.add.image(0, 0, "sky").setOrigin(0, 0);

  bird = this.physics.add
    .sprite(config.width / 10, config.height / 2, "bird")
    .setOrigin(0, 0);

  // bird.body.gravity.y = 200;
}

//60fps
let totalDelta = 0;
function update(time, delta) {
  totalDelta += delta;

  if (totalDelta >= 1000) {
    console.log(bird.body.velocity.y);
    totalDelta = 0;
  }
}

new Phaser.Game(config);
