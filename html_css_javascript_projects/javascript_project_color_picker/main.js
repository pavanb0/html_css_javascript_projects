function task(i) {
    setTimeout(function() {
        // Add tasks to do
    }, 2000 * i);
  }

function start(){
    for(let i=0;i<600;i++){
    let color="rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")"; //random color
    document.querySelector(".main-color").style.backgroundColor=color;
    document.body.style.backgroundColor=color;
    let tex=document.getElementById("main-color")
    tex.querySelector(".colorpic").innerHTML="color";

}
}

