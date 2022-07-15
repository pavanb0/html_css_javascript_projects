let box=document.querySelector('.main input')

let a_to_z=['a','b','c','d','e','f','g','h','i',
            'j','k','l','m','n','o','p','q','r',
            's','t','u','v','w','x','y','z','-',
            '0','1','2','3','4','5','6','7','8','9'];


let phoneticalpha=['Alpha','Bravo','Charlie','Delta','Echo',
                    'Foxtrot','Golf','Hotel','India','Juliett',
                    'Kilo','Lima','Mike','November','Oscar','Papa',
                    'Quebec','Romeo','Sierra','Tango','Uniform',
                    'Victor','Whiskey','X-ray','Yankee','Zulu','Dash',
                    'Zero','One','Two','Three','Four','Five','Six',
                    'Seven','Eight','Nine'];            


box.addEventListener('input', updateValue);
function updateValue(e) {
    console.log(box.value,"box.value");
    let key=e.key; 
    console.log(key,"key"); 
    let val=e.target.value;
    console.log(val,"val");
    val=val.toLowerCase();
    let output=outputcalc(val);
    document.getElementById('outputwindow').innerHTML=output;
       
}
/*
box.addEventListener('mouseover', updateValue);
function updateValue(e) {

}
*/
function outputcalc(val){
    let returnval="";
    for(let i =0;i<val.length;i++){
        let char=val.charAt(i);
        for(let p=0;p<a_to_z.length;p++){
            if(char==a_to_z[p]){
                returnval+=phoneticalpha[p]+" ";
            }
        }
    }
    return returnval;
}
/*
document.addEventListener('keydown', function(e){
    let key=e.key;
    
    if(key =="Backspace"){
        output.pop();
        console.log(key);
    }
})*/
