FROM node:latest

WORKDIR /src
RUN npm install redis

COPY server.js .
EXPOSE 8080
CMD node server.js
