FROM node:18-alpine
# Set working directory
WORKDIR /app
# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production
# Copy app code
COPY . .
# Expose app port
EXPOSE 3000
# Start the app
CMD ["npm", "start"]
