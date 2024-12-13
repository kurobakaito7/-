console.log(null == '') // false
console.log(null == false) // false
console.log(null == 0) // false
console.log(null == undefined) // true
console.log(true == 1) // true
console.log(true == 2) // false
console.log(false == 2) // false
console.log(false == 0) // true
console.log(false == '') // true
console.log(false == []) // true
console.log(1 == '1') // true

if([]){
    console.log(1);
}