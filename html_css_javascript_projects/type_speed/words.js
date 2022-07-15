let outcome=[];
let state=false;
var possible_outcomes =[
    "q","a","z","w","s","x","e",
    "d","c","r","f","v","t","g",
    "b","y","h","n","u","j","m",
    "i","k",",","o","l","p",
    "Q","A","Z","W","S","X","E",
    "D","C","R","F","V","T","G",
    "B","Y","H","N","U","J","M",
    "I","K","O","L","P"
]


function if_init(word){
    for(let i=0;i<possible_outcomes.length;i++){
        if(possible_outcomes[i]==word){
            state=true; 
        }
    }
    if(state==true){
        return true;
    }else{
        return false;
    }
}


function strin(code,name){
    if(code=="Space"){
        outcome.push(" ");
    }
    else if(code=="Backspace"){
        outcome.pop();
    }
    else if(name=="Shift" || name=="Tab" || name=="CapsLock" || name=="Delete" ||name=="End" ||name=="PageDown" ){
        console.log("user pressed shift");
    }
    else if(name=="Control" || name=="Alt" || name=="Meta"|| name=="Insert" ||name=="Home" ||name=="PageUp" ){
        console.log("user pressed shift")
    }
    else if(name=="ContextMenu"||name=="Enter"||name=="ArrowLeft"||name=="ArrowRight"||name=="ArrowUp"||name=="ArrowDown"){
        console.log("user pressed somethong{$}")
    }
    else if(if_init(name)==true){
        outcome.push(name);
    }
    let x = final_outcome(outcome);
    return x; 
    //return outcome; 
}
function lorems_split(lorem){
    return lorem.trim().split(/\s+/);
}

function evaluator(spli,user){
    let right_match=0;
    for(let j=0;j<user.length;j++){
        for(let i=0;i<spli.length;i++){
            if(user[j]==spli[i]){
                right_match+=1;
            }
        }
    }
    return right_match;
}

function final_outcome(outcome){
    let flag=0;
    let output="";
    if (flag==0 && outcome[0]==" "){
        outcome.shift();
    }
    for(let i=0;i<outcome.length;i++){
        if(outcome[i]==" "){
            output+=" ";
        }
        else if(outcome[i]==" " && outcome[i-1]==" "){
            console.log("dual space");
        }else{
            output+=outcome[i];
        }
    }
    flag++;
    return output;
}
