# 이벤트핸들러

```js
myBtn.onclick = function(){
    console.log(`니얼굴`)
}
//평소엔 이렇게 썻으면 이젠
myBtn.addEventListener('click', event1)
//제거하려면
myBtn.removeEventListener('click', event1)
//이렇게
```

## 이벤트핸들러모음
|이벤트타입|설명|
|:-----:|:-----:|
|mousedown|마우스 버튼을 누르는 순간|
|mouseup|마우스 버튼을 눌렀다 떼는 순간|
|click|왼쪽 버튼을 클릭한 순간|
|dbclick|왼쪽 버튼을 빠르게 두 번 클릭한 순간|
|contextmenu|오른쪽 버튼을 클릭한 순간|
|mousemove|마우스를 움직인 순간|
|mouseover|마우스 포인터가 요소 위로 올라온 순간|
|mouseout|마우스 포인터가 요소에서 벗어나는 순간|
|mouseenter|마우스 포인터가 요소 위로 올라온 순간|
|mouseleave|마우스 포인터가 요소에서 벗어나는 순간|
|keydown|키보드의 버튼을 누르는 순간|
|keypress|키보드의 버튼을 누르는 순간(esc같은거 반응 ㄴㄴ)|
|keyup|키보드의 버튼을 눌렀다 떼는 순간|
|focusin|포커스인|
|focusout|포커스아웃|
|focus|포커스되는순간|
|blur|포커스 나가는 순간|
|change|입력값이 바뀌는 순간|
|input|값이 입력되는 순간|
|select|입력 양식 하나가 선택되는 순간|
|submit|폼을 전송하는 순간|
|scroll|스크롤바가 움직일때|
|resize|윈도우 사이즈 움직일때|
