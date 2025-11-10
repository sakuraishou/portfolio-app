# Node 24 LTS を使用
FROM node:24-alpine

# 作業ディレクトリを設定
WORKDIR /app

# package.json と lock ファイルをコピーして依存関係をインストール
COPY package*.json ./
RUN npm install

# プロジェクト全体をコピー
COPY . .

# Next.js 開発サーバーを起動
CMD ["npm", "run", "dev"]

# ポート公開
EXPOSE 3000
