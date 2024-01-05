// 6. "Write a function that mimics (without the use of >>) the right shift operator and
// returns the result from the two given integers.
// Ex. 80 >> 3 = floor(80/2^3) = floor(80/8) = 10
// -24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6"

function RightShift(num,shift){
    if(shift>=0 || num>=0){
        return Math.floor(num/(Math.pow(2,shift)));
    }
}
console.log(RightShift(80,0));
console.log(RightShift(0,2));
console.log(RightShift(80,3));
console.log(RightShift(-24,2));