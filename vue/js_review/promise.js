function wakeUp(callback) {
  setTimeout(() => {
    console.log("1. 일어났어요! ⏰");
    callback();
  }, 1000);
}

function washFace(callback) {
  setTimeout(() => {
    console.log("2. 세수했어요! 💦");
    callback()
  }, 1000);
}

function shower(callback) {
  setTimeout(() => {
    console.log("2. 샤워했어요! 💦");
    callback()
  }, 1000);
}

function eatBreakfast(callback) {
  setTimeout(() => {
    console.log("3. 아침 먹었어요! 🍞");
    callback()
  }, 1000);
}

//비동기 처리 => 동기식 처리
wakeUp(()=>{
  washFace(()=>{
    eatBreakfast(()=>{
      console.log("준비 완료!")
    });
  })});             // >>>>> callback 지옥. 다른 함수의 callback 함수를 매개변수로 받아... => promise로 바꿔야 함. (promise2.js)