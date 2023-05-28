# DOM TREE
요소 노드를 이동시킬때 쓰는거

# 자식 요소
```js
// 자식 요소 모음
element.children

// 첫번째 자식
element.firstElementChild

// 마지막 자식
element.lastElementChild
```

# 부모 요소
```js
// 부모 요소 하나
element.parentElement
```

# 형제 요소
```js 
// 이전 or 좌측에 있는 요소 하나
element.previousElementSibling

// 다음 or 우측에 있는 요소 하나
element.nextElementSibling
```

뭐 element 빼고 node.~~~ 해도 쓸 수 있는데 거의 안씀. 뭐 이상한거 선택할 수 도 있어서 그런다고 함.