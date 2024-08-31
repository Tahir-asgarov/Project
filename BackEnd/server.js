
// ALQORITM 1 

const num1 = parseInt(prompt("1 ci ededi daxil et:"))
const num2 = parseInt(prompt("2 ci ededi daxil et:"))
const num3 =parseInt(prompt("3 ci ededi daxil et:"))
const edediorta = ((num1+num2+num3)/3)

console.log(edediorta)





// ALQORITM 2

const semestrErzinde = Number(prompt("Semestr erzinde yigilan bali daxil et:"))
const imtahanErzinde = Number(prompt("Imtahan erzinde yigilan bali daxil et:"))
const yekunBal = semestrErzinde*0.4 + imtahanErzinde*0.6


yekunBal < 51 ? alert("kesildin") : alert("kectin")



// ALQORITM 3

// let ve const block scope elementlerdir

for(let i=0; i<5; i++) {
    console.log("MEN JAVASCRIPTDE MASTER OLACAM")
}


let i=1

while(i<6){
    console.log("MEN JAVASCRIPTDE MASTER OLACAM")
    i++
}

k=0

do {
    console.log("MEN JAVASCRIPTDE MASTER OLACAM")
    k++
}

while(k<5)




// ALQORITM 4


let cem = 0 

for(let i=1; i<101; i++){
    cem = cem + i
    
}
console.log(cem)



// ALQORITM 5


let ededler = ""

for(let i=1; i<11; i++){
    if(i<10){
        ededler = ededler + i + ","
    }
    else{
        ededler = ededler + i
    }
}
console.log(ededler)


// ALQORITM 6
// ededin faktorialini hesablayan program yazin


function faktoriyal(f){
    if(f===0){
        return 1;
    }
    else{
        return f * faktoriyal(f-1);
    }
}
console.log(faktoriyal(5))



// ALQORITM 7

const x = parseInt(prompt("X-i daxil et"))
const y = parseInt(prompt("Y-i daxil et"))

let z;

if(x>0 && y<0){
    z = (4*x)+(2*y)+4;
}else if(x>0 && y===0){
    z = (2*x)-y+3;
}else if (x<0 && y>0){
    z = (3*x)+(4*y)+3;
} else {
    z = "X və Y verilmiş şərtlərə uyğun deyil.";
}


console.log(z)




























// ededin faktorialini hesablayan program yazin






