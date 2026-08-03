# Stage 1 — build the static assets
FROM node:24-alpine AS builder
WORKDIR /app

RUN npm i -g pnpm@11

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

# Stage 2 — serve with nginx
FROM nginx:1.25-alpine
ARG BUILD_DIR=out

# Remove default config and add a simple SPA-friendly config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files from the builder stage
COPY --from=builder /app/${BUILD_DIR} /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
