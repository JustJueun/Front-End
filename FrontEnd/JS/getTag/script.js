const titleTag = document.getElementById("title")
//html에서 id title을 가져오려면 이걸 쓴다.
const nameTag = document.getElementsByClassName("name")
//html에서 div name을 가져오려면 이걸 쓴다.


//class는 유사 배열의 형태로 index나 반복문이 사용 가능하다.
const index1 = nameTag[1]
const index2 = nameTag.length

for (let i in nameTag){
console.log(i)
}
// in은 배열의 index를 전달받는다.

for (let i of nameTag){
console.log(i)
}
// of는 배열을 순환한다.




// html의 모든 태그 선택하기
const btn = document.getElementsByTagName('button');

// 모든태그 선택하기
const allTag = document.getElementsByTagName("*");
// 사실 자주쓰진 않음.


//CSS태그로 태그 선택하기
document.querySelector("#MyNumber")