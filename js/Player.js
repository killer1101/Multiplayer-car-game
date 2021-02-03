class Player {
    constructor()
    {
      this.name = null,
       this.distance = 0, 
       this.index = null,
       this.rank = 0
     }
     
    getCount(){
      var playerCountRef = database.ref('PLAYERCOUNT');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        PLAYERCOUNT: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance : this.distance
      }
      );
    }
    static GetPlayerInfo(){
      var playerInforef = database.ref('players')
    playerInforef.on("value", (data)=>{
      allPlayers = data.val();
    })

   
    }
    GetCarsAtEnd(){
     
     database.ref('CARSATEND').on("value", (data)=>{
      this.rank = data.val();
      })

    }

    static updateCarsAtEnd(rankCount){
      database.ref('/').update({
        CARSATEND: rankCount
      });
    }
  }
  