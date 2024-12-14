# Use the official Bun image for lightweight and fast JS runtime
FROM oven/bun:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and bun.lockb first for dependency installation (better caching)
COPY package.json bun.lockb ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of the application code
COPY . .

# Generate the Prisma client using Bun instead of npx
RUN bunx prisma generate

# Expose the port your server will run on (adjust as necessary)
EXPOSE 3000

# Start the application using Bun
CMD ["bun", "start"]
