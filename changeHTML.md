# HTML 코드 바꾸기

```js
// innerHTML 이러면 바뀌지
const myTag = document.getElementById('id')
myTag.innerHTML = '<li>Exotic</li>';

// 걍 태그도 바꾸려면
const myTag = document.getElementById('id')
myTag.outerHTML = '<ul id="new-list"><li>Exotic</li></ul>';

// 글자만 가져와서 바꾸려면
const myTag = document.getElementById('id')
myTag.textContent = 'new text!';
```