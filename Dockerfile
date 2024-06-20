FROM node:current-alpine3.19

WORKDIR /
ADD data /data

WORKDIR /
ADD package.json /package.json
ADD server.js /server.js
ADD functions /functions


RUN npm i
RUN npm i -g nodemon

ADD run.sh /run.sh

EXPOSE 8000
EXPOSE 9000

WORKDIR /data

ENTRYPOINT ["/run.sh"]
CMD []
