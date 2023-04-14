FROM node:16-alpine

RUN git clone -q https://github.com/Josue9876/lab04-nube

WORKDIR lab04-nube

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9000

CMD ["node", "index.js"]
