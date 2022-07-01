let p = 10;
let r = 20;
let t = 15;
function interest (p,r,t){
    let x = (p*(1+r+t))
    return x;
}
let result = interest(p,r,t);
console.log(result);