// 깊은 복사, 얕은 복사

// 얕은 복사 ---> 하나 바꾸면 둘다 바뀜
let arr = [1,2,3];
// let arrcp = arr;
// arrcp[0]=10;
// console.log(arr)
// console.log(arrcp)

// 깊은 복사 ---> 참조값이 바뀌어도 참조하는 애는 안 바뀜
// arrcp = [arr[0], arr[1], ...]    <=> [...arr]
function arrayDeepCopy(){
let arrDeepCp = [... arr]
arrDeepCp[0] = 100;
console.log(arr)
console.log(arrDeepCp)
}

arrayDeepCopy();

console.log("------- 객체 얕은 복사 -------")

//객체 얕은 복사
function objectShallowCopy(){
  let emp = {name:"홍길동", age:20}
  let empCp = emp;
  empCp.age = 30;
  console.log(emp);
  console.log(empCp);
}

objectShallowCopy();


console.log("------- 객체 깊은 복사 -------")
//객체 깊은 복사
function objectDeepCopy(){
  let emp = {name:"홍길동", age:20}
  let empCp = {...emp, name:'김유신'};// 변경 원할때
  empCp.age = 30;
  console.log(emp);
  console.log(empCp);
}

objectDeepCopy();

// --- 가변인수 ---
// function func(...arg) <- 이거도 가능.