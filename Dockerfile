FROM cypress/included:latest
RUN mkdir /cypress-docker
WORKDIR /cypress-docker
COPY package.json /cypress-docker/
COPY package-lock.json /cypress-docker/
COPY cypress.config.js /cypress-docker/
COPY cypress /cypress-docker/
RUN npm install
CMD [ "npm" "run"]

