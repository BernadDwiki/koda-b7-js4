const arr = ["Yanto", 16, true,["aku",1],{nilai :6000}, "Yono", ["uhuy"]];

let i = 0;
let a =0;
while(i < arr.length ){
    if(typeof arr[i] === "number"){
        a = a +1;
    }
    i = i +1;
    if (i === arr.length ){
        console.log("Data bertipe Number ada : "+a+"\n")
    }
}

i = 0;
a =0;
while(i < arr.length ){
    if(typeof arr[i] === "string"){
        a = a +1;
    }
    i = i +1;
    if (i === arr.length ){
        console.log("Data bertipe String ada : "+a+"\n")
    }
}

i = 0;
a =0;
while(i < arr.length ){
    if(typeof arr[i] === "boolean"){
        a = a +1;
    }
    i = i +1;
    if (i === arr.length ){
        console.log("Data bertipe Boolean ada : "+a+"\n")
    }
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