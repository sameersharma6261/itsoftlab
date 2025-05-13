# Stage 1: Build the application
FROM public.ecr.aws/docker/library/node:20-alpine  AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your source code
COPY . .


ARG REACT_APP_API_BASE_URL=http://itsoftlab.com/api
ENV REACT_APP_API_BASE_URL=http://itsoftlab.com/api

ARG REACT_APP_VERSION
ENV REACT_APP_VERSION=$REACT_APP_VERSION

# Build the project – output goes to the build folder
RUN npm run build

# Stage 2: Create the runtime image using a lightweight static server
FROM builder  AS runner
WORKDIR /app

# Install the static file server globally (serve)
RUN npm install -g serve

# Copy only the production build output from the builder stage
COPY --from=builder /app/build ./build

# Expose the port the app will run on (e.g., 3300)
EXPOSE 3300

# Serve the static files from the build folder on port 3300
CMD ["serve", "-s", "build", "-l", "3300"]

#  docker build --build-arg REACT_APP_API_BASE_URL=https://api.example.com   --build-arg REACT_APP_VERSION=1.0.0   --build-arg VITE_PERMISSION_ALLOCATION_URI=http://localhost:5010/Permission-Allocation-Microservice   --build-arg VITE_HOST=cylinder.ltd,www.cylinder.ltd   --build-arg VITE_FRONTEND_PORT=3000   -t my-reactite-app .