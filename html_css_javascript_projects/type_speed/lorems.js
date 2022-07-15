let l1="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
let l2="Morbi luctus libero vitae erat pellentesque hendrerit.";
let l3="Nullam a lectus feugiat erat bibendum venenatis in fringilla lectus.";
let l4="Duis tincidunt orci sagittis lacus aliquet venenatis.";
let l5="strength, and the heaven and earth come to the mid and following the son of the LORD";
const items = [l1,l2,l3,l4,l5];
var random = new Date();
function loraa()
{
    var t1=random.getMilliseconds();
    if (t1>0 && t1<199.8){
    return items[0];   
    }
    else if(t1>199.9 && t1<399.6){
      return items[1];
    }
      else if(t1>399.6 && t1<599.4){
      return items[2];
    }
    else if(t1>599.4 && t1<799.2){
      return items[3];
    }
    else if(t1>799.2 && t1<999){
      return items[4];
    }
    
}

/*
//this code randomly gives a line of words
//i am glad you might ask why this moron not used random module
//answer is simple  logical machine like computer cannot be random there algorithm is biased
//because you are same as random geiger beeping due to natural radiation this thing exists
*/
