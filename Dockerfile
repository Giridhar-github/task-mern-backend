# Use the official Node.js image as the base image
FROM node:18

# Set NODE_ENV to production
ENV NODE_ENV=production

# Set the working directory in the container
WORKDIR /

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Expose port 8000
EXPOSE 8000

# Copy the rest of the application files to the working directory
COPY . .

# Define the entry point for the container
CMD ["node", "server.js"]
