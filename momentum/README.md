# 🖌 Momentum

## 크롬 익스텐션 Momentum
> Html, Css, JavaScript를 이용한 웹어플리케이션 구현

## 📄 구현 기능
1. 10개의 이미지를 접속 또는 새로고침시에 랜덤으로 화면에 출력
2. new Date()객체를 이용하여 현재 시간을 화면에 출력
3. User의 이름을 입력받아 시간에 맞는 인사문구 + 이름을 화면에 출력하며, User name은 LocalStorage에 저장
4. 화면 하단에 배열로 저장해둔 명언을 랜덤으로 화면에 출력
5. 구글 검색기능을 추가하여 Input창에 검색어를 입력 후 검색을 하면 구글에서 검색된 결과를 나타냄
6. 바로가기 기능을 위한 모달창 생성
7. 바로가기 버튼 클릭시 사이트명과 주소를 적을 수 있는 모달창이 나타나며 완료시 메인화면에 바로가기 아이콘(링크) 생성
8. 바로가기 아이콘들은 해당 URL에 있는 favicon을 가져와 아이콘으로 화면에 출력
9. 모든 바로가기 항목들은 LocalStorage에 저장되며 각 각의 ID에 맞게 생성되며, 해당 ID들은 uuid로 중복이 발생하지 않게 구현
10. Openweathermap API를 이용하여 현재 위치하고 있는 지역의 날씨를 실시간으로 받아옴

## 🛠 Built with
+ HTML
+ CSS
+ JavaScript
+ Openweathermap API
+ Google API for search, favicon

## 🖥 실행 화면
![스크린샷 2021-09-08 오후 4 11 51](https://user-images.githubusercontent.com/66353903/132480047-a92434da-a3b2-4b61-b2e4-41fba6d23b99.jpg)
![스크린샷 2021-09-08 오후 5 52 54](https://user-images.githubusercontent.com/66353903/132480129-5f985b20-1260-4adf-8ffd-de4e9ea1a25e.jpg)
![스크린샷 2021-09-08 오후 5 53 40](https://user-images.githubusercontent.com/66353903/132480141-c1f243d3-6093-497d-9c2c-40a54e225bde.jpg)
![스크린샷 2021-09-08 오후 5 55 05](https://user-images.githubusercontent.com/66353903/132480143-0e1916b8-e46a-4d3f-9c5f-112070c19819.jpg)

## 실행 방법
+ 코드 전체 다운로드 후 압축 풀기
+ index.html 실행

## TODO
+ 이미지 관련 API로 백그라운드 이미지 랜덤 출력 (현재 로컬에 저장된 파일에 한정됨)
