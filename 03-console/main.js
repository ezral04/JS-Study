
//1. Variable -> 변수
//let -> keyword

let userName = 'miku';
console.log(UserName);
userName = 'hello';
console.log(userName);
//변수 안에 값 저장

//var -> 사용X
//선언 전에 값을 정할 수 있음 = 오류 발생
//var hoisting = 선언 위치 상관 없어 맨위로 올려줌

//2. contants -> 값을 한번 선언하면 바뀌지 않음
// a. security - 보안
// b. thread safety - 동시 값 변경 방지
// c. reduce human mistake - 코드 변경 시 실수 방지

//3. Variable type
//a. primitive(single item): number, string, boolean, null, undefiedn, symbol
//b. object, box container
//c. function, first-class function

let count2 = 17; //integer
let size2 = 17.1; // decimal number
console.log(`value: ${count2}, type: ${typeof count2}`);
console.log(`value: ${size2}, ${typeof size2}`);
