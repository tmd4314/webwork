let text = "Visit W3Schools test";
const exp = /Visit/i;
let n = text.search(exp);
console.log(n);


let bool = exp.test(text)
console.log(bool);

// 숫자 3자리만
let numExp = /[\S][\d]{2}$/
let numText = 'aa1'
bool = numExp.test(numText)
console.log('숫자표현', bool);