import Phaser from "phaser";

const config = {
  // WebGL is the renderer automatically used
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    //Arcade physics plugin
    default: 'arcade'
  },
  scene: {
    preload: preload,
    create: create,
  }
}

function preload() {
  debugger;
}

function create() {
  debugger;
}

new Phaser.Game(config);