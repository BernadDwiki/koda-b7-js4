const arr = ["Yanto", 16, true,["aku",1],{nilai :6000}, "Yono", ["uhuy"]];

const primitif = ["number", "string", "boolean"];
let j=0;
while(j < primitif.length){
    let i = 0;
    let a =0;
    while(i < arr.length ){
        if(typeof arr[i] === primitif[j]){
            a = a +1;
        }
        i = i +1;
        if (i === arr.length ){
            console.log("Data bertipe "+primitif[j]+" ada : "+a+"\n")
        }
    }
    j = j+1;
}

i = 0;
array =0;
object =0;
while(i < arr.length ){
    if(Array.isArray(arr[i])){
        array = array +1;
    } else if (arr[i] instanceof Object){
        object = object +1;
    }
    i = i +1;
    if (i === arr.length ){
        if(array){
            console.log("Data bertipe Array ada : "+array+"\n")
        } if (object){
            console.log("Data bertipe Object ada : "+object+"\n")
        }
    }
}

