FROM node:22-alpine AS node_modules
WORKDIR /app
COPY package-lock.json package.json ./
RUN npm ci
COPY . .

FROM node_modules AS prod_builder
RUN npm run build

FROM nginx:1-alpine AS prod
COPY --from=prod_builder /app/build /usr/share/nginx/html
# Default HTTP port of Nginx.
EXPOSE 80

FROM node_modules AS dev
EXPOSE 3000
CMD npm run start
