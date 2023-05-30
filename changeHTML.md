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


//속성 추가하기
//원래 있었으면 수정되는 형태로 된다.
tomorrow.setAttribure('class', 'list')


//속성 제거하기
tomorrow.removeAttrivute('href')


//style 바꾸기
today.children[0].style.textDecoration = 'line-through'

today.children[0].style.backgroundColor = 'black'


// class 바꾸기
today.children[1].className = 'done'

//이게 편함
item.classList.add('asdf', 'qwer')
item.classList.remove('asdf', 'qwer')
item.classList.toggle('sadf') //있으면 제거하고 없으면 만들고. toggle은 하나만 할 수 아ㅣㅆ음

```