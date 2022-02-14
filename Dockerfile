FROM node:14-slim

RUN apt-get update && apt-get install -y curl && mkdir -p /app && chown -R node:node /app

COPY docker-entrypoint.sh /usr/local/bin/entrypoint.sh

WORKDIR /app

EXPOSE 8888

CMD [ "entrypoint.sh" ]
