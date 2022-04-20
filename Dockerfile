FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
# COPY yarn.lock ./ (if using yarn)

RUN npm install
# RUN yarn (if using yarn)

# Bundle app source
COPY . .

# Copy environment variables and rename to ".env"
COPY .env.production .env

RUN npm run build

ENV NODE_ENV production

EXPOSE 8080
CMD [ "node", "dist/index.js" ]
USER node