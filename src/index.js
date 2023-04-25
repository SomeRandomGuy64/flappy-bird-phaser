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
      // gravity: {
      //   y: 200,
      // },
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

const VELOCITY = 200;
let bird = null;

function create() {
  // x, y, key
  this.add.image(0, 0, "sky").setOrigin(0, 0);

  bird = this.physics.add
    .sprite(config.width / 10, config.height / 2, "bird")
    .setOrigin(0, 0);

  bird.body.velocity.x = VELOCITY;
  // bird.body.gravity.y = 200;
}

//60fps
let totalDelta = 0;
function update(time, delta) {
  if (bird.body.x >= config.width - bird.width) {
    bird.body.velocity.x = -VELOCITY;
  } else if (bird.body.x <= 0) {
    bird.body.velocity.x = VELOCITY;
  }
}

new Phaser.Game(config);
