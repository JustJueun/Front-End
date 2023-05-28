# JS tag select
```js
//HTML id로 태그 선택하기
document.getElementById('id')

//HTML class속성으로 태그 선택하기.
document.getElementsByClassName('class')

//HTML 태그 이름으로 선택하기
document.getElementsByTagName('tag')

//css로 태그 선택하기

    //css에 선택된 태그중 가장 첫번째 태그 선택됨
    document.querySelector('css')

    //node.list로 나옴. 유사배열
    document.querySelectorAll('css')
```

# 유사배열
배열과 비슷한 객체를 유사배열 이라고 한다.
실제 배열처럼 여러가지 기능을 할 수 있다.

* 숫자 형태의 indexing이 가능하다.
* lenght 프로퍼티가 있다.
* 배열의 매소드를 사용하지 못한다.        
수정이나 삭제가 까다롭다.
* array.isArray는 false이다.

# 이벤트, 이벤트 핸들링, 이벤트 핸들러
* 이벤트 : 웹 페이지에서 발생하는 이벤트
* 자바스크립트를 통해 이벤트를 다루는 일
* 이벤트 발생시 일어나야 하는 동작을 표현한 코드

# 이벤트 핸들러 만들기
```js
const btn = document.getElementById('id')

btn.onclick = function() {
  console.log('Hello Codeit!');
};
```