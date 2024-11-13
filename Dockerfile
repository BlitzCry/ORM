# Use the official Deno image as a base
FROM denoland/deno:alpine

# Set the working directory in the container
WORKDIR /app

# Copy all application files into the container
COPY . .

# Cache dependencies
RUN deno cache main.ts

# Expose the port your application runs on (e.g., 3000)
EXPOSE 3000

# Command to run the Deno application
CMD ["deno", "run", "--allow-env", "--allow-net", "--allow-read", "--allow-write", "main.ts"]
