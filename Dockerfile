# Stage 1
# copying app code in the “app” folder ,installing app
# dependencies from package.json file and creating production build using Node image#
FROM node:10-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod 

# Stage 2
# build web server that project above will run on it
FROM nginx:1.18.0-alpine

COPY --from=build-step /app/dist/angular-jwt-authentication-example /usr/share/nginx/html