# Use the official Node.js image as the base image
FROM node:18

ENV NODE_ENV=production
# Set the working directory in the container
WORKDIR /app
# Copy the application files into the working directory
COPY ["package.json", "package-lock.json*", "./"]
# Install the application dependencies
RUN npm install -g npm@10.5.1

EXPOSE 8000
# Define the entry point for the container
CMD ["node", "server.js"]