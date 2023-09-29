FROM node:18-alpine

WORKDIR /app/

COPY package.json /app/
COPY package-lock.json /app/
COPY pnpm-lock.yaml /app/

RUN npm install

COPY public/ /app/public
COPY src/ /app/src

EXPOSE 3000

CMD ["npm", "start"]



