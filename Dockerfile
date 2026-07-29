# Stage 1 — build the static assets
FROM node:24-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci  --legacy-peer-deps

COPY . .
# adjust the build command if your project uses a different script
RUN npm run build

# Stage 2 — serve with nginx
FROM nginx:1.25-alpine
ARG BUILD_DIR=guide/.vuepress/dist

# Remove default config and add a simple SPA-friendly config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files from the builder stage
COPY --from=builder /app/${BUILD_DIR} /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]