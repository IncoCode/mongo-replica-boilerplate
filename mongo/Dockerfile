FROM mongo:4

RUN mkdir /config
WORKDIR /config

COPY mongodb.key .
COPY wait-for-it.sh .
COPY mongo-setup.js .
COPY mongo-run.sh .
COPY mongo-replica-setup.sh .

RUN chmod +x /config/wait-for-it.sh
RUN chmod +x /config/mongo-run.sh
RUN chmod +x /config/mongo-replica-setup.sh

CMD [ "bash", "-c", "/config/mongo-run.sh"]
