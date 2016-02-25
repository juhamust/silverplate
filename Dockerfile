FROM node:5-slim
ENV PORT 8080
EXPOSE $PORT
RUN npm install http-server
ADD ./dist/ /app
CMD ./node_modules/http-server/bin/http-server /app -p $PORT
