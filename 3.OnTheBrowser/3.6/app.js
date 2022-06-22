// 변수 h1 선언 = 문서.선택.div태그이면서 hello클래스인 요소의 첫번째 자식 선택자 h1
const h1 = document.querySelector("div.hello:first-child h1");

// 함수 선언
function handleTitleClick() {
  // 변수 currentColor 선언 = h1태그에 스타일 컬러
  const currentColor = h1.style.color;
  // 변수(let 재할당 가능) newColor 선언
  let newColor;

  // 만약 현재컬러가 blue라면 
  if(currentColor === "blue"){
    // newColor은 tomato
    newColor = "tomato";
  }else {
    // newColor 은 blue
    newColor = "blue";
  }
  // h1태그에 스타일 컬러 = newColor에 대한 요소 지정
  h1.style.color = newColor;
}

// h1요소 이벤트는 클릭하면 handleTitleClick 함수 호출
h1.addEventListener("click", handleTitleClick);