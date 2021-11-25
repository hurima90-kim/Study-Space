<p align='middle'>
<a href='https://github.com/hurima90-kim/dreamys'><img src='https://user-images.githubusercontent.com/66353903/143431132-89557689-3484-4312-82c2-173a4fc1c8a8.png' width="300px;" alt="LiveMD" /></a></p>

<h1 align='middle'><a href=#>배포후 주소변경 예정</a></h1>


<br/>

## 📌 프로젝트 소개

###  꿈많은청년들 개발 과제

<br/>

<details>
    <summary><STRONG>
       📚 과제 요구사항 보기
        <STRONG></summary>
    <div markdown="1">
<h3>디자인과 소스를 바탕으로 리스트 구현</h3>
- 함수형 컴포넌트 사용<br/>
- 데이터는 data.js의 ListData 사용<br/>
- 그룹, 그룹에 속하지 않는 아이템순으로 정렬<br/>
- 그룹 안에 아이템이 있는 경우, 그룹 toggle 기능 구현<br/>
- 디자인은 피그마와 동일하게 구현<br/><br/>
</div>
</details>
<br/>

## 📑 구현 목록
![image](https://user-images.githubusercontent.com/66353903/143433232-215234cf-6f42-435d-b8bf-e571877cfe6a.png)


`List 컴포넌트`

- Item컴포넌틑 map함수를 이용하여 렌더링
- 전체를 감싸주는 className="list_wrap" div생성

`Item 컴포넌트`

- 주어진 svg아이콘들을 컴포넌트화하여 사용
- subMenu에 토글버튼의 상태를 저장
- showSubMenu() 함수를 생성하여 토글기능 구현
- 반복되는 사용 Listdata.items의 값을 map함수로 'mapData' 변수에 저장하여 재사용
- 각 아이콘은 조건에 맞는 렌더링을 위해 삼항연산자를 사용하여 출력


<br/>

## 👨‍💻 실행 방법

### 설치

`npm install`

### 실행

`npm start`

<br/>

## 📂프로젝트 구조


| 폴더 / 파일 | 설명                               |
| ----------- | ---------------------------------- |
| assets      | 꿈많은청년들 로고 및 아이콘.            |
| components  | List와 Item Component로 구성 |
| styles      | 기본 Style.                   |
| data        | 주어진 data.js 파일 배치    |
| App.js      | List Component를 Import하여 렌더링        |

<br/>
