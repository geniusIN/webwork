function wakeUp(callback) {
  return new Promise(function(resolve, reject){
  setTimeout(() => {
    console.log("1. 일어났어요! ⏰");
    resolve();
  }, 1000);
})
}

function washFace(callback) {
  return new Promise(function(resolve, reject){
  setTimeout(() => {
    console.log("2. 세수했어요! 💦");
    resolve();
  }, 1000);
})
}

function eatBreakfast(callback) {
  return new Promise(function(resolve, reject){
  setTimeout(() => {
    console.log("3. 아침 먹었어요! 🍞");
    resolve();
  }, 1000);
})
}

// wakeUp()
// .then(washFace)
// .then(eatBreakfast)
// .then(()=>console.log("준비 완료!"))

// async, await로 바꾸기.(자바스크립트 책 p.200)
const morningRoutin = async function() {
  await wakeUp()
  await washFace()
  await eatBreakfast()
  console.log("준비 완료!")
}

morningRoutin();