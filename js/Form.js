class Form {
    constructor() {

        this.greeting = createElement('h3');
        this.title = createElement('h2')
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.reset = createButton('reset')
    }
    hide(){
      this.input.hide();
      this.button.hide();
      this.title.hide();
      this.greeting.hide();
    }
  
    display(){
      
      this.title.html("Car Racing Game");
      this.title.position(displayWidth/2-50, 0);
      
      
      this.input.position(displayWidth/2-50, 160);
      this.button.position(displayWidth/2-50, 200);
      this.reset.position(displayWidth-100, 200)
  
      this.button.mousePressed(()=>{

        this.input.hide();                                                                                   
        this.button.hide();
  
        player.name =  this.input.value();
        
        playerCount+=1;
        player.index = playerCount;
        player.update()
        player.updateCount(playerCount);
      

        this.greeting.html("Hello" + " " + player.name)
        this.greeting.position(displayWidth/2-50, 160)
     
    })
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      var puru = database.ref('players')
      puru.remove();
      Player.updateCarsAtEnd(0);
    })
    
  }
}