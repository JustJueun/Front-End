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


// 요소 노드 만들기!!!
const first = document.getElementById('id')
first.textContent = '처음'
tomorrow.append(first) // tomorrow에 첫번째 노드로 생성된다.
first, last, before, after, "문자열"도 가능


//node 삭제
tomorrow.remove()
tomorrow.children[2].remove()


//node 이동하기
tomorrow.append(today.children[1])

```