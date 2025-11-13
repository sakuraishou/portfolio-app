# 1. ベースイメージ (Node.js 24)
FROM node:24-alpine
WORKDIR /app

# 2. 依存関係のインストール
COPY package*.json ./
RUN npm install

# 3. ソースコードをコピー
COPY . .

# 4. Nuxt.jsのデフォルトポート
EXPOSE 3000

# 5. 開発サーバーの起動
# ★ "--host", "0.0.0.0" がコンテナ外部からアクセスするために必須
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]