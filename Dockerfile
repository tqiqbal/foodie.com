# Built Vuejs before this
# Use the official image as a parent image
FROM node:lts-slim

# Set the working directory
WORKDIR /usr/app

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Run the command inside your image filesystem
RUN npm install

#Set env variable for node
ENV MONGO_CONNECTION_STRING=mongodb://mongo-db:27017


# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 3000

# Run the specified command within the container.
CMD [ "npm", "start" ]
