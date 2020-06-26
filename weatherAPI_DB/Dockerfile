FROM node:12

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3030

CMD [ "node", "app.js" ]

