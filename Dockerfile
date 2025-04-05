FROM node:23
WORKDIR /src/app
COPY package*.json ./
RUN npm install -g npm@11.2.0
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]