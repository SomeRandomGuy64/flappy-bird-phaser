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
    update: update,
  },
};

function preload() {
  this.load.image("sky", "assets/sky.png");
  this.load.image("bird", "assets/bird.png");
}

function create() {
  // x, y, key
  this.add.image(0, 0, "sky").setOrigin(0, 0);

  let bird = this.physics.add.sprite(config.width / 10, config.height / 2, "bird").setOrigin(0, 0);

  bird.body.velocity.y = 200;
}

//60fps
function update(time, delta) {
  console.log(time/delta);
}

new Phaser.Game(config);
