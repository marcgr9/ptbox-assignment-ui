FROM node:18-alpine

WORKDIR /app/

COPY public/ /app/public
COPY src/ /app/src
COPY package.json /app/
COPY package-lock.json /app/
COPY tsconfig.json /app/
COPY .env /app/

#COPY node_modules /app/node_modules
RUN npm install --verbose

ENTRYPOINT ["npm", "run", "start"]
