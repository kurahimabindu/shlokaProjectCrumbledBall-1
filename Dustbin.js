class Dustbin {
    constructor(x,y,width,height){
        var change = {
            'isStatic': true
        }
    
    this.right = Bodies.rectangle(x+120,y+30,width,height,change);
    this.rightWidth = width;         
    this.rightHeight = height;       
    World.add(world, this.right);
   
    this.bottom=Bodies.rectangle(x+35,y+60,width+130,height-80,change)
    this.bottomWidth = width+130;         
    this.bottomHeight = height-80;       
    World.add(world, this.bottom);
   
  
    this.left=Bodies.rectangle(x-50,y+30,width,height,change)
    this.leftWidth = width;         
    this.leftHeight = height;       
    World.add(world, this.left);
    
  }
    display(){
   
      rectMode(CENTER)
      rect(this.right.position.x,this.right.position.y,this.rightWidth,this.rightHeight)
      rect(this.bottom.position.x,this.bottom.position.y,this.bottomWidth,this.bottomHeight)
      rect(this.left.position.x,this.left.position.y,this.leftWidth,this.leftHeight)
                                  
    }
  }