FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

# Expose application port
EXPOSE 3000

# Start application
CMD [ "node", "dist/main.js" ]