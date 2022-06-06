## 의존성 패키지 설치

```bash
$ npm install
```

## 환경변수

### 개발 과정에서 기능을 위한 환경변수 정의를 추가할 때

`.env` 파일에 주입 가능한 필요한 환경변수를 정의하고, 필요하다면 기본값을 지정해둔다.

### 실행 환경을 위한 환경변수 override

`.env`의 환경변수를 override 하는 경우, `.env.local` 파일에 정의한다.

### 참조

`<root-dir>/libs/config/src/config.module.ts`

## 앱 실행

### 로컬 개발 환경

```sh
# development
$ yarn start:dev
```

### 빌드 및 운영 환경

```sh
# build
$ yarn build

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
