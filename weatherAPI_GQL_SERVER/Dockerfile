FROM node:12

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 8080

CMD [ "node","server.js" ]

