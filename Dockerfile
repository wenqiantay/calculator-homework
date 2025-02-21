FROM node:23 AS builder

WORKDIR /calculator

RUN npm i -g @angular/cli

COPY angular.json .
COPY package.json .
COPY package-lock.json .
COPY tsconfig.app.json .
COPY tsconfig.spec.json .
COPY tsconfig.json .
COPY public public
COPY src src

RUN npm ci

RUN ng build

# Start Angular's dev server on port 4200 (the default port)
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]