FROM node:16
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source code in docker image
COPY . .

# Our app binds to port 9092 so we will expose this port and map with host
EXPOSE 9092

# Define the command to run our app using CMD which defines your runtime
CMD [ "node", "app.js" ]
