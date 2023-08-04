function getSum(numbers){
    let sum = 0;

   for(let i = 0; i < numbers.length; i++){
    const index = i;
    const element = numbers[index];
    sum = sum+element;
    // console.log(index,element,sum);
   

   }
   return sum;

}
function getoddnumber(mynumbers){
    const oddNumbers =[];
for(let i = 0;i < mynumbers.length; i++){
    const index = i;
    const element = mynumbers[index];
    if(element % 2 !==0){
        console.log(index,element);
        oddNumbers.push(element);
    }

}
return oddNumbers;
}

const myNumber = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getoddnumber(myNumber)
console.log(oddNumbers)
const oddNumberSu = getSum(oddNumbers);
console.log("odd number sum", oddNumberSu);