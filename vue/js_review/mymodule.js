/* 모듈화: 캡슐화, 접근범위 제어*/
export function myfunc(msg){// export 쓰면 외부(mymain.js)에서 접근 가능
  console.log(msg);
}

function myfunc2(msg){
  console.log(msg);
}

function myfunc3(msg){
  console.log(msg);
}


//이렇게도 export 가능
export {myfunc2};



//한번에 묶어서 export 가능!
// export {myfunc, myfunc2, myfunc3}



//??????????모르겠음
// function defFunction(msg){
//   console.log('default:',msg);
// }
// export default defFunction;