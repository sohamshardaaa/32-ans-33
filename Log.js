class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("image/maker.jpg");
    Matter.Body.setAngle(this.body, angle);
  }
}