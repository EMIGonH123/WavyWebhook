FROM node:10-alpine
MAINTAINER emighino emighino123@gmail.com
#ENV HOME=/home/node/app
ENV HOME=/app
# USER node
WORKDIR $HOME
# RUN mkdir -p $HOME && chown -R node:node $HOME
#RUN mkdir -p $HOME
COPY ./app-node/package*.json $HOME/
RUN npm install
# COPY --chown=node:node . .
COPY ./app-node .
EXPOSE 5000
CMD [ "npm", "start" ] 