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

## 데이터 베이스 환경 구성

1. 서버 구동 전 DB는 생성되어 있어야한다.
2. `.env`에 db 접속 정보를 저장한다. (DATABASE_HOST, DATABASE_PORT, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME)
   2-1. database.service에 synchronize 옵션을 true로 변경하면 entity에 따라 테이블이 생성된다.
3. 서버 실행

## 마이그레이션

```sh
# migration
$ yarn migration

# migration file create
$ yarn migration:create [file name]

# migration revert
$ yarn migration:revert
```

## seed 추가

db및 테이블 생성된 상태에서 진행해야한다.

```sh
$ yarn seed:run
```
