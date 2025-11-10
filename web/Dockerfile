FROM node:24-alpine
WORKDIR /app

COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN if [ -f pnpm-lock.yaml ]; then \
    corepack enable && corepack prepare pnpm@latest --activate && pnpm install; \
    elif [ -f yarn.lock ]; then \
    yarn install; \
    else \
    npm install; \
    fi

COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
