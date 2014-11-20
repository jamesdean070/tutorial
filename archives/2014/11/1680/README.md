## 실습을 위한 준비
소스코드를 checkout 받은후 해당 루트폴더(archives/2014/11/1680)로 이동한후 커맨트 차에서 다음과 같이 입력한다. 

    $> npm init
    $> bower init
    $> node server/server.js

노드서버를 실행후 브라우저로 확인해보자.
[http://localhost:3001](http://localhost:3001)

## 실습 코드 작성 순서
실제 실습 코드는 아래와 같은 순서로 작성했다. 
 
 1. app.js 파일 추가
 2. route.js 파일 추가
 3. index.html 파일 추가 및 링크 연결 
 4. admin 폴더 생성후 컨트롤러 추가
 5. signin 폴더 생성후 컨트롤러 추가
 6. admin과 signin 컨트롤러 index에 링크 추가
 7. 실습을 위해 간단한 노드 서버 구현