var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update:update });
var timer = 0;
var score = 0;
var pipes = [];
var vertPipes = [];
var i = 0;

function randy(min, max) {
  return Math.random() * (max - min) + min;
}

function collision() {
  alert('You lose! Score: ' + score);
  location.reload();
}

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
  player.body.bounce.y = 0.2;
  player.body.gravity.y = 200;
  player.body.collideWorldBounds = true;
  keyboard = game.input.keyboard;
  cursors = game.input.keyboard.createCursorKeys();
  scoreText = game.add.text(16, 16, 'score: 0', { font: '24px arial', fill: '#fff' });
}

function update() {
  timer++;
  bgtile.tilePosition.x -= 2;
  for (var i = 0; i < pipes.length; i++) {
    pipes[i].x -= 1;
    game.physics.collide(player, pipes[i], collision, null, this);
  }
  for (var i = 0; i < vertPipes.length; i++) {
    vertPipes[i].x -= 1;
    game.physics.collide(player, vertPipes[i], collision, null, this);
  }
  if (keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
    player.body.velocity.y = -100;
  } else if (cursors.left.isDown) {
    player.body.velocity.x = -120;
  } else if (cursors.right.isDown) {
    player.body.velocity.x = 120;
  }
  if (timer/100 % 1 == 0) {
    score += 1;
    scoreText.content = 'score: ' + score;
  }
  if (timer/400 % 1 == 0 && timer != 0) {
    randyX = randy(900, 1200);
    pipes[i] = game.add.sprite(randyX, randy(300, 300), 'pipe1');
    vertPipes[i] = game.add.sprite(randyX, randy(-75, 0), 'vertpipe');
  }
}
