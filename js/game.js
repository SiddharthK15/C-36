class Game{
    constructor(){

    }
    getState(){
        var gamestateref = database.ref("Gamestate");
        gamestateref.on("value",function(data){
           gamestate = data.val()
        })
    }
    update(state){
        database.ref("/").update({
            Gamestate: state
        })
    }
    async start(){
        if(gamestate === 0){
            player = new Player();
            var playercntref = await database.ref("PlayerCount").once("value");
            if(playercntref.exists()){
                playercount = playercntref.val();
                player.getCount();

            }
            form = new Form();
           
            form.display(); 
        }
    }

    play(){
        form.hide();
        textSize(25);
        text("Game has begun! All the Best!!",200,150)
        Player.getplayerdata();
        if(playerdata !== undefined){
            var pos = 200;
            for(var plyr in playerdata){
            if(plyr === "Player" + player.index){
                fill("green"); 
            }
            else{
                fill("black");
            }
            pos = pos+40;
            textSize(20);
            text(playerdata[plyr].Name + "=" + playerdata[plyr].distance,120,pos);
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 50;
            player.updatename();
        }
        
    }
    
}