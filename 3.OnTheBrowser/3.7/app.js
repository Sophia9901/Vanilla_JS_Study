// 변수 h1 선언 = 문서.선택.div태그이면서 hello클래스인 요소의 첫번째 자식 선택자 h1
const h1 = document.querySelector("div.hello:first-child h1");

// 함수 선언
function handleTitleClick() {
  // 오류 발생을 줄이기 위해 clicked 사용자 지정 이름을 변수에 담는다.
  const clickedClass = "clicked";
  // 만약 h1의 className가 clickedClass라면
  if(h1.className === clickedClass) {
    // h1의 className 없애기
    h1.className = "";
  } else {
    // 아니라면 h1의 className은 clickedClass
    h1.className = clickedClass;
  }
}

// h1요소 이벤트는 클릭하면 handleTitleClick 함수 호출
h1.addEventListener("click", handleTitleClick);