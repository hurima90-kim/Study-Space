## 프로젝트 소개

![ci](https://user-images.githubusercontent.com/66353903/129700725-98afe8db-bb0c-4d06-bc30-e75bda55eb52.png)

### 프리온보딩 코스 Solar Connect 기업 과제

> ❕ **예전에 만들어둔 Todo List 서비스의 기능 개선하기**❗

<br/>

<details>
    <summary><STRONG>
       📚 과제 요구사항 보기
        <STRONG></summary>
    <div markdown="1">
<h3>1. 완성하기</h3><br/>
1.1 Todo List 화면에 현재 시간을 표시합니다.<br/><br/>
1.2 Todo 항목에 완료 버튼을 누르면 Todo가 완료될 수 있도록 완성합니다.<br/><br/>
1.4 한국 표준시를 기준으로 나타냅니다.<br/><br/>
<h3>2. 기능 추가하기</h3>
2.1 Todo 항목에 완료 목표일을 기입합니다.<br/><br/>
2.2 입력 항목 근처에 목표일을 입력 받을 수 있게 UX를 구성합니다.<br/><br/>
2.3 Datepicker를 통해서 입력을 받습니다.<br/><br/>
2.4 완료 목표일은 Todo 항목에서 볼 수 있어야 합니다.<br/><br/>
2.5 날짜 표기법, 디자인의 요소는 작성자의 편의에 맞게 구현 가능합니다. <br/><br/>
<h3>3. 예외 추가하기</h3>
3.1 예외가 발생할 만한 부분에 Modal을 띄워 예외를 표시합니다.<br/><br/>
<h3>4. 버그 수정하기</h3>
4.1 버그를 발견하고, 이를 수정합니다.<br/><br/>
<h3>5. 기타 조건</h3>
5.1 개선될 수 있는 부분이 있다면 기술합니다.<br/><br/>
5.2 기술한 부분을 구현할 수 있다면 구현합니다.<br/><br/>
5.3 로그인 기능은 빠져 있습니다. 빠르고 안전하게 구현하기 위하여 고려해야할 사항이 있다면 기술합니다.<br/><br/>
</div>
</details>
<br/><br/>

## 🚀 배포

Demo Link: https://solar-connect-todolist.netlify.app/
<br/><br/>

## 🗂 구현 목록

`완성하기`

- Todo List 화면 상단에 현재 시간 표시
- Todo List내 완료 버튼 클릭 시 적용된 css와 함께 완료 상태로 변경

`기능 추가하기`

- Input 항목 옆에 dueDate설정을 위한 UX구현
- 설정한 dueDate는 Todo List내 item에 함께 보여짐

`예외 추가하기`

- 입력값 없이 Todo등록 시 알림발생
- Todo 삭제 버튼 클릭 시 Modal창으로 삭제 여부 확인
- 입력값의 앞뒤에 공백문자를 없애기 위해 trim() 함수 사용

`버그 수정하기`

- Todo item이 삭제되지 않는 버그 해결
- Todo item 추가 시 id 중복생성되는 문제 해결
- 초기 렌더링에 발생하는 JSON parsing 문제 해결
  <br/><br/>

## 💁🏻‍♂ 실행 방법

### 설치

`npm install`

### 실행

`npm start`
<br/><br/>
