function isLeapYear(year){
    const remainder = year%4;
    if(remainder === 0){
       return true;
    }
    else{
       return false;
    }
}
const myyear = isLeapYear(1933)
console.log("myyear",myyear);
const herYear = isLeapYear(1952);
console.log("her year",herYear);
