const _ = require("lodash");
const arr = ['a','b',1];
const arr2 = [].concat(arr);
const arr3 = [...arr];
const arr4 = [];
const bool = 'false';
const bool2 = JSON.parse(bool)
console.log(bool2);
let a ={
    age :1,
    
    sCallback : function callback(data){
       
   }
}
let b ;
// let d= _.cloneDeep(a);
// console.log(d);
const arr5 = [1,5,87,45,8,88];
let res = arr5.reduce((pre,cur)=>{
    return pre+cur;
},0);
console.log(res);