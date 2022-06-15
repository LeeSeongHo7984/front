"use strict"

// 중첩 for구문
// 다중 배열 or 다차원 배열

// let arrayNum = [1,2,3];
// let array = [["가", "나", "다"], "b", ["제주도", "강원도", "부산"]];
//
// console.log(array[2]);
// console.log(arrayNum[0]);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   for (let j = 0; j <5; j++) {
//     console.log(`중첩for ${j}`);
//   }
// }

let getItem = [["반바지", "슬랙스"], ["점퍼", "조끼"], ["슬립온", "워커", "스니커즈"], ["크로스백", "백팩", "클러치백"]];
let gTLeng = getItem.length;
// 다중 for구문을 활용하여 반바지, 스니커즈, 백팩을 출력하시오
// 같은 인덱스 행 열 나오게 하기

for(let i = 0; i < gTLeng; i++) {
  // console.log(getItem[i])
  if (i == 0) { // 바지 섹션
    // console.log(getItem[i])
    for (let j = 0; j < getItem[i].length; j++) {
      if (j == 0) {
        console.log(getItem[i][j]);
      }
    }
  } else if (i == 2) {  //신발 섹션
    for (let j = 0; j < getItem[i].length; j++) {
      if (j == 2) {
        console.log(getItem[i][j]);
      }
    }
  } else if (i == 3) {  //가방
      outputItems(i, 1);
  }
}

// item 가져오기 만들기

function outputItems(currentArray, checkIndex) {
  for (let j = 0; j < getItem[currentArray].length; j++) {
    if (j == checkIndex) {
      console.log(getItem[currentArray][checkIndex]);
    }
  }
}
