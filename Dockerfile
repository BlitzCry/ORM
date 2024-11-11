# Use the official Node.js image as a base
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy only the package files first for efficient caching
COPY ./package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Ensure SQLite database file has correct permissions (if it exists already)
RUN [ -f /app/database.sqlite ] && chmod 644 /app/database.sqlite || true

# Expose the application port (if you have one)
EXPOSE 3000

# Command to run the application
CMD ["node", "src/app.js"]  # Adjust this path if app.js is elsewhere
