//100 nilai 1-50
const jarak = [...Array(10)].map(e=>~~(Math.random()*50+1));
console.log(jarak)


//ganji; genap
const evenArr = [], oddArr = [];
for (let i=0;i<jarak.length;i++){
    //(jarak[i]%2==0) valuenya
    if ((i+1)%2==0) {
        evenArr.push(jarak[i]);
    }
    else {
        oddArr.push(jarak[i]);
    }
}
// console.log("genap");
console.log(evenArr);
// console.log("ganjil");
console.log(oddArr);

//min max genap
let evenMin = evenArr[0], evenMax = evenArr[0]; 
       for (let i = 1; i < evenArr.length; i++) { 
          if (evenArr[i] > evenMax) 
             evenMax = evenArr[i]; 
          if (evenArr[i] < evenMin) 
             evenMin = evenArr[i]; 
        } 
    console.log("minimal genap = " +evenMin)
    console.log("maximal genap = " +evenMax)

//min max ganjil
let oddMin = oddArr[0], oddMax = oddArr[0]; 
       for (let i = 1; i < oddArr.length; i++) { 
          if (oddArr[i] > oddMax) 
             oddMax = oddArr[i]; 
          if (oddArr[i] < oddMin) 
             oddMin = oddArr[i]; 
        } 
console.log("minimal ganjil = " +oddMin)
console.log("maximal ganjil = " +oddMax)

// summary genap
function sumArray(evenArr) {
  let sum = 0;

  for (let i = 0; i < evenArr.length; i += 1) {
    sum += evenArr[i];
  }
  
  return sum;
}
const summaryEven = sumArray(evenArr)
console.log(summaryEven);

// summary ganjil
function sumArray(oddArr) {
    let sum = 0;
  
    for (let i = 0; i < oddArr.length; i += 1) {
      sum += oddArr[i];
    }
    
    return sum;
  }
  const summaryOdd = sumArray(oddArr)
  console.log(summaryOdd);
  

//average genap
function getAvgo(evenArr){
    const totalo = evenArr.reduce((acc, c) => acc + c, 0);
    return totalo / evenArr.length;
}
const averageEven = getAvgo(evenArr);
console.log(averageEven);
//average ganjil
function getAvge(oddArr){
    const totale = oddArr.reduce((acc, c) => acc + c, 0);
    return totale / oddArr.length;
}
const averageOdd = getAvge(oddArr);
console.log(averageOdd);


//comparation
if(averageEven === averageOdd){
    console.log("rata-rata sama")
}else if(averageEven < averageOdd){
    console.log(averageEven+" < "+averageOdd+ " rata-rata ganjil lebih besar dari rata-rata genap")
} else if(summaryOdd < summaryEven){
    console.log("total ganjil lebih kecil daripada total genap")
}

