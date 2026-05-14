FROM node:20-bullseye-slim AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-bullseye-slim AS runtime
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/server ./server
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "server/index.js"]