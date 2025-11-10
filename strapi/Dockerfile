FROM node:22-alpine
WORKDIR /srv/app

# 依存インストール
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN if [ -f pnpm-lock.yaml ]; then \
    corepack enable && corepack prepare pnpm@latest --activate && pnpm install; \
    elif [ -f yarn.lock ]; then \
    yarn install; \
    else \
    npm install; \
    fi

# アプリ本体
COPY . .
EXPOSE 1337
CMD ["npm", "run", "develop"]
