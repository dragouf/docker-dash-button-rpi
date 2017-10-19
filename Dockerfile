FROM hypriot/rpi-node:7-slim

RUN apt-get update \
    && apt-get install -yq libpcap-dev vim git python make g++ \
    && npm install -g node-dash-button request mqtt \
    && apt-get clean \
    && apt-get autoclean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

VOLUME /app
WORKDIR /app

ADD app.js /app/app.js

CMD ["node", "app.js"]
