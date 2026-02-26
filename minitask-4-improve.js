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
a =0;
while(i < arr.length ){
    if(arr[i] instanceof Object){
        a = a +1;
    }
    i = i +1;
    if (i === arr.length ){
        console.log("Data bertipe Object ada : "+a+"\n")
    }
}

i = 0;
a =0;
while(i < arr.length ){
    if(Array.isArray(arr[i])){
        a = a +1;
    }
    i = i +1;
    if (i === arr.length ){
        console.log("Data bertipe Array ada : "+a+"\n")
    }
}