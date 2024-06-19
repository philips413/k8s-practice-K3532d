## 🐳 K8S환경 구축 및 테스트
Node서버를 구축하여, 쿠버네티스 환경에 띄워놓는다.

이후에 도커파일을 만들고 이미지를 생성하여 컨테이너에 올리도록 한다. 

그 후에 수정이 되면 kubectl을 통해서 번거로이 버전관리를 하는 것이 아닌

skaffold를 통해서 자동으로 배포되고 서버에 반영 되며 CI/CD환경을 구축하도록 했다.

* 참고
  * https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
  * https://peterica.tistory.com/276
  * https://www.youtube.com/watch?v=ZUI-I5kiQRM
