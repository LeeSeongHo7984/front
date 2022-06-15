'use strict'

let num = prompt('숫자를 입력하세요.');
num = Number(num)

if(num < 0){
  alert(`숫자 ${num}은 음수입니다.`);
}else if(num > 0){
    alert(`숫자 ${num}은 양수입니다.`);
}else{
    alert(`입력하신 숫자 0입니다.`);
}
