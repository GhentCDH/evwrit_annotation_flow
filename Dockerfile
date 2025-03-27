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

CMD npx vite serve --port 9000 /app/dist --host