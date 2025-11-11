# 1. ベースイメージの指定 (Node.js 24 LTS)
FROM node:24-alpine

# 2. 作業ディレクトリの作成
WORKDIR /app

# 3. 依存関係のインストール (キャッシュを活用するため先にコピー)
COPY package*.json ./
RUN npm install

# 4. アプリケーションのソースコードをコピー
COPY . .

# 5. Next.jsのデフォルトポートを開放
EXPOSE 3000

# 6. 開発サーバーの起動
CMD ["npm", "run", "dev"]