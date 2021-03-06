//a scene where it's like a danmaku game and shit, yo
//7/7/2015


$include Tilemap.js$
$include CanvasScene.js$
$include assets.js$


const DANMAKU_SCENE_WIDTH = 800;
const DANMAKU_SCENE_HEIGHT = 480;


//a bullet that Wizzes around the scene at astounding speed!
//owner is the firer of this bullet
//physics is it's physics component
//renderer is it's renderer component
//mover is it's mover component
//damage is how much damage it does
var Bullet = function(owner,physics,renderer,mover,damage)
{
  this.owner = owner;
  this.physics = physics;
  this.renderer = renderer;
  this.mover = mover;
  this.damage = damage;
};


//DanmakuScene constructor
//tilemap is the tilemap it displays underneath
//bgmSrc is the src of the background music
var DanmakuScene = function(tilemap,bgmSrc)
{
  //create the canvas
  CanvasScene.call(this,DANMAKU_SCENE_WIDTH,DANMAKU_SCENE_HEIGHT);

  //put in all of this thing's things
  this.tilemap = tilemap;

  this.bgm = new Audio(BGM_DIRECTORY + bgmSrc);
  this.bgm.loop = true;
  this.bgm.play();

  this.bullets = [];
  this.characters = [];
};


//deletes the danmaku scene
DanmakuScene.prototype.delete = function()
{
  //delete the canvas
  CanvasScene.delete.call(this);

  //TODO: delete stuff I guess
};


//updates the DanmakuScene
//deltaTime is the time since last time
DanmakuScene.prototype.update = function(deltaTime)
{
  this.tilemap.render(this.ctx,DANMAKU_SCENE_WIDTH,DANMAKU_SCENE_HEIGHT);

  return this;
};


//a factory that makes DanmakuScenes
var danmakuSceneFactory = new Factory("DanmakuScene");


//makes a DanmakuScene
//dataReader is a StringReader containing the data
danmakuSceneFactory.make = function(dataReader)
{
  dataReader.readNext();//TODO: i'll actually need this data one day
  var tilemap = tilemapFactory.make(dataReader);
  var bgmSrc = dataReader.readNext();
  return new DanmakuScene(tilemap,bgmSrc);
};
