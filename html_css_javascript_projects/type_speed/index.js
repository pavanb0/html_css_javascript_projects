var gg="";
const arr=[];
const lorems=loraa();
var lorems_split=lorems_split(lorems);
console.log(lorems_split);

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    var strings=strin(code,name);
    console.log(code)
    gg+=name;
    let dat=document.getElementById("main");
    dat.innerHTML=strings;
    let user_split = strings.split(" ");
    let result = evaluator(lorems_split,user_split);
    console.log(user_split);
    document.getElementById("lorem").innerHTML=lorems;
    document.getElementById("result").innerHTML=result;

  }, false);

/* my tribute to the gods programmer Terrence Andrew Davis (December 15, 1969 – August 11, 2018)
*/