let container=document.querySelector(".container");
let btn =document.getElementById("spin");
let number=360;
let numb =Math.ceil(Math.random() * 1000);
number+=numb;
console.log(number+"starting");
let newint=0;
let out=0;
let results=["mobile","pc","speaker","watch","fridge","oven","tv","ac"]
btn.onclick=function(){
    let random_rsults = results[Math.floor(Math.random()*results.length)]
    if(number<360){
        alert("it wont happen")

    }else{
        let division = number/360;
        let y=Math.floor(division);
        let newint = division-y;
        if(random_rsults=="mobile"){alert(1);
        document.getElementById("result").innerHTML="mobile"; out+=(00+720)
        }
        else if(random_rsults=="pc"){alert(2);
            document.getElementById("result").innerHTML="pc";out+=(35+720);
        }
        else if(random_rsults== "speaker"){alert(3);
            document.getElementById("result").innerHTML="speaker";out+=(85+720);
        }
        else if(random_rsults=="fidge"){alert(4);
            document.getElementById("result").innerHTML="watch";out+=(130+720);
        }
        else if(random_rsults=="oven"){alert(5);
            document.getElementById("result").innerHTML="fridge";out+=(180+720);
        }
        else if(random_rsults=="oven"){alert(6);
            document.getElementById("result").innerHTML="oven";out+=(222+720);
        }
        else if(random_rsults=="tv"){alert(7);
            document.getElementById("result").innerHTML="tv";out+=(268+720);
        }
        else if(random_rsults=="ac"){alert(8);
            document.getElementById("result").innerHTML="ac";out+=(312+720);
        }

    }

    container.style.transform="rotate(" + (out+360) +"deg)";
    number +=Math.ceil(Math.random() * 1000);
    out=1800;
    //document.getElementById("result").innerHTML=1;
    console.log(number+"starting"+result);
    
}