FROM node:alpine

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY package.json package-lock.json .

RUN npm install --legacy-peer-deps

RUN npm install -g ts-node

COPY . .

EXPOSE 3000

CMD [ "npm", "start"]