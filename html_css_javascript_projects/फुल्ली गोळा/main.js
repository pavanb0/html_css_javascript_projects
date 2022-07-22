function td1(){
    var x = document.querySelector("main")
    x.rows[0].cells;
    x[0].innerHTML = "NEW CONTENT";
}

function td2(){
    let c = document.getElementById("td1")
    c.innerHTML="O"
}

function td3(){
    let c = document.getElementById("td1")
    c.innerHTML="X"

}

class player_human_winning {
    constructer(human)
    {
        this.human = human;
     //   this.bot = bot;
    }
    call_player_1()
    {
        if(this.human[0][0]==1 && this.human[0][1]==1 && this.human[0][2]==1)
        {
            if(this.human[0][0]==2 && this.human[0][1]==2 && this.human[0][2]==2)
                {
                    return false;   
                }        
                return true;
           }
        else if(this.human[1][0]==1 && this.human[1][1]==1 && this.human[1][2]==1) {
            return true;
        }
        else if(this.human[2][0]==1 && this.human[2][1]==1 && this.human[2][2]==1) {
            return true;
        }
        else if(this.human[0][0]==1 && this.human[1][0]==1 && this.human[2][0]==1) {
            return true;
        }
        else if(this.human[0][1]==1 && this.human[1][1]==1 && this.human[2][1]==1) {
            return true;
        }
        else if(this.human[0][2]==1 && this.human[1][2]==1 && this.human[2][2]==1) {
            return true;
        }
        else if(this.human[0][0]==1 && this.human[1][1]==1 && this.human[2][2]==1) {
            return true;
        }
        else if(this.human[0][2]==1 && this.human[1][1]==1 && this.human[2][0]==1) {
            return true;
        }
    
    }  /*
    call_player_2()
    {
        if(this.bot[0][0]==2 && this.bot[0][1]==2 && this.bot[0][2]==2) {
            return true;
        }
        else if(this.bot[1][0]==2 && this.bot[1][1]==2 && this.bot[1][2]==2) {
            return true;
        }
        else if(this.bot[2][0]==2 && this.bot[2][1]==2 && this.bot[2][2]==2) {
            return true;
        }
        else if(this.bot[0][0]==2 && this.bot[1][0]==2 && this.bot[2][0]==2) {
            return true;
        }
        else if(this.bot[0][1]==2 && this.bot[1][1]==2 && this.bot[2][1]==2) {
            return true;
        }
        else if(this.bot[0][2]==2 && this.bot[1][2]==2 && this.bot[2][2]==2) {
            return true;
        }
        else if(this.bot[0][0]==2 && this.bot[1][1]==2 && this.bot[2][2]==2) {
            return true;
        }
        else if(this.bot[0][2]==2 && this.bot[1][1]==2 && this.bot[2][0]==2) {
            return true;
        }
                               
    } */
    
}
/*
class player_bot_winning{
    constructor(bot){
        this.bot = bot;
    }
    call_player_2()
    {
        if(this.bot[0][0]==2 && this.bot[0][1]==2 && this.bot[0][2]==2) {
            return true;
        }
        else if(this.bot[1][0]==2 && this.bot[1][1]==2 && this.bot[1][2]==2) {
            return true;
        }
        else if(this.bot[2][0]==2 && this.bot[2][1]==2 && this.bot[2][2]==2) {
            return true;
        }
        else if(this.bot[0][0]==2 && this.bot[1][0]==2 && this.bot[2][0]==2) {
            return true;
        }
        else if(this.bot[0][1]==2 && this.bot[1][1]==2 && this.bot[2][1]==2) {
            return true;
        }
        else if(this.bot[0][2]==2 && this.bot[1][2]==2 && this.bot[2][2]==2) {
            return true;
        }
        else if(this.bot[0][0]==2 && this.bot[1][1]==2 && this.bot[2][2]==2) {
            return true;
        }
        else if(this.bot[0][2]==2 && this.bot[1][1]==2 && this.bot[2][0]==2) {
            return true;
        }
                               
    }

}
/*
class bot{
    constructor(av){
        this.av = av;
    }
    
}
 */


let car1 = new player_human_winning([[2,2,1],[2,1,1],[2,1,2]]);
if (car1.call_player_1) 
{
    console.log("player 1 won"); 

}
if(car1.call_player_1())
{
    console.log("player 2 won");
}



/*
let car2 = new player_bot_winning([[1,2,2],[2,1,2],[2,1,2]]);

if (car2.call_player_2()==true)
{
    console.log("player 2 won");
}
/* 
[1,1,1],[false,false,false],[false,false,false]
[1,1,1],[false,false,false],[false,false,false]
[1,1,1],[false,false,false],[false,false,false]
*/

