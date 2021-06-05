FROM node:14.17.1

ENV NODE_ENV=development

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN npm install -g yarn
RUN yarn

COPY . /app

CMD [ "yarn", "start" ]
