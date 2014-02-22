var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update:update });

function preload() {
  game.load.image('bird', 'img/bird.png');
  game.load.image('title', 'img/title.png');
  game.load.image('bgtile', 'img/tilebg.png');
  game.load.image('pipe1', 'img/pipe1.png');
  game.load.image('vertpipe', 'img/vertpipe.png');
  game.load.audio('flap', ['audio/flap.mp3', 'audio/flap.ogg']);
  game.load.audio('birdFX1', ['audio/birds1.mp3', 'audio/birds1.ogg']);
  game.load.audio('squakFX1', ['audio/squak.mp3', 'audio/squak.ogg']);
}

function create() {
  game.stage.backgroundColor = '#7cdce5';
  game.add.sprite(200, 175, 'title');
  bgtile = game.add.tileSprite(0, 350, game.stage.bounds.width, game.cache.getImage('bgtile').height, 'bgtile');
  player = game.add.sprite(350, game.world.height - 250, 'bird');
}

function update() {
}
