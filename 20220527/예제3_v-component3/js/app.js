'use strict'
/* 1.
이름: header-logo
내용: <h1><a href="http://naver.com">Home</a></h1>
전역 컴포넌트를 생성하여 index.html,company.html의 #app요소에 추가하시오
*/
Vue.component('header-logo', {
  template: '<h1><a href="http://naver.com">Home</a></h1>'
});
/* 2.
  이름 : footerHeader
  내용: <div class="footer-header">
          <h2><a href="index.html">Logo</a></h2>
        </div>
 전역 컴포넌트를 생성하여 index.html,company.html의 footer요소에 추가하시오
*/
Vue.component('footer-header', {
  template: '<div class="footer-header"><h2><a href="index.html">Logo</a></h2></div>'
});

/*
이름: footer-list
내용:
      <ul>
        <li><a href="#">list1</a></li>
        <li><a href="#">list2</a></li>
        <li><a href="#">list3</a></li>
      </ul>
app instance의 footer-list 지역 컴포넌트를 생성하여
index.html, company.html의 footer .inner 요소에 추가하시오.
*/

let app = new Vue({
  el: '#app',
  data: {
    msg: 'hi vue.js!!',
    listElem: [
      { list: 'company', aHref: 'company.html' },
      { list: 'product', aHref: 'product.html' },
      { list: 'gallery', aHref: 'gallery.html' },
      { list: 'notice', aHref: 'notice.html' }
    ]
  },
  components: {
    'footer-list': {
      template: '<ul><li><a href="#">list1</a></li><li><a href="#">list2</a></li><li><a href="#">list3</a></li></ul>'
    }
  }
});
