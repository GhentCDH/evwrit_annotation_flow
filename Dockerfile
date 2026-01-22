FROM node:23-alpine AS builder
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies (including dev dependencies)
RUN pnpm install

COPY . .
RUN pnpm run build

FROM caddy:alpine
COPY --from=builder /app/dist /usr/share/caddy

EXPOSE 80

CMD ["caddy", "file-server", "--root", "/usr/share/caddy", "--listen", ":80"]
