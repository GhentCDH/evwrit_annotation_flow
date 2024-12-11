ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-slim
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Install dependencies
WORKDIR /app

COPY package*.json ./
COPY pnpm*.json ./

RUN corepack enable
RUN corepack prepare pnpm --activate
RUN pnpm install

RUN pnm run build

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# ====== RUN CADDY =======
FROM caddy:2.8.4-alpine
COPY Caddyfile /etc/caddy/Caddyfile
#COPY --from=builder /app/dist /srv
EXPOSE 80 443 8080

#CMD ["caddy run --config /app/Caddyfile"]
