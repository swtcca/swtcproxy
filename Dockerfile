FROM node:dubnium-alpine

MAINTAINER Xinchun Liu <lospringliu@gmail.com>

ENV UPSTREAM
ENV PORT
ENV DEBUG

WORKDIR /apps

COPY start.js package.json ./

RUN npm install && chmod -R 777 /apps 

EXPOSE 5080

CMD ["node", "start.js"]
