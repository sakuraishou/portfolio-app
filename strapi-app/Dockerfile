# 1. ベースイメージの指定 (Strapiがサポートする Node 22)
FROM node:22-alpine

# 2. 作業ディレクトリの作成
WORKDIR /app

# 3. 依存関係のインストール
COPY package*.json ./
RUN npm install

# 4. アプリケーションのソースコードをコピー
COPY . .

# 5. Strapiの管理画面をビルド
# (これがないと管理画面にアクセスできません)
RUN npm run build

# 6. Strapiのデフォルトポートを開放
EXPOSE 1337

# 7. 開発サーバーの起動
CMD ["npm", "run", "develop"]