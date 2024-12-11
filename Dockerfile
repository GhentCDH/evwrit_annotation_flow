ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-slim AS builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Install dependencies
WORKDIR /app

COPY package*.json ./
COPY pnpm*.json ./

RUN rm -rf app/dist
RUN corepack enable
RUN corepack prepare pnpm --activate
RUN pnpm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

RUN pnpm run build

# ====== RUN CADDY =======
FROM caddy:2.8.4-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=builder /app/dist /srv
EXPOSE 80 443 8080
