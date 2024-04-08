# 1. 기본 이미지 선택
FROM node:16

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. 애플리케이션 파일 복사
COPY . .

# 4. 의존성 설치 (Yarn이 이미 설치되어 있다고 가정)
RUN yarn install

# 5. PM2 설치
RUN npm install pm2 -g

# 6. 애플리케이션 실행 (예: app.js가 메인 파일인 경우)
CMD ["pm2-runtime", "start", "app.js"]
