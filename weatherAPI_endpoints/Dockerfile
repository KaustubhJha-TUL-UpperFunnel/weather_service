FROM node:12

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 4000

CMD [ "node", "app.js" ]

