'use strict'

  function autoType( elementClass, typingSpeed ) {
    // console.log(elementClass+','+typingSpeed);
    let thisElem = $(elementClass);
    console.log(thisElem);
    thisElem.prepend('<div class="cursor" style="left: 0; right: initial;"></div>');
    thisElem = thisElem.find(".text");  // thisElem 재정의
    let text = thisElem.text().trim().split("");
    console.log(text);
    thisElem.text("");
    let amntOfChars = text.length;
    console.log(amntOfChars);
    let newString = "";

    setTimeout(function(){  // 여기 setTimeout 는 시작을 언제할거냐
      thisElem.css("opacity", 1);
      thisElem.prev().removeAttr("style");
      // console.log(thisElem.prev());
      for ( let i = 0; i < amntOfChars; i++ ) {
        (function(count, char){
          setTimeout(function() { // 여기 setTimeout은 언제 뿌릴거냐
            newString += char;
            thisElem.text(newString);
          },count*typingSpeed)
        })(i + 1, text[i])
      }
    },1500);

  }

  $(function(){
    autoType(".typing",200);
});
