#!/bin/bash

# Build the Docker image
docker build -t bb-holidays .

# Stop and remove any existing container
docker stop bb-holidays-container || true
docker rm bb-holidays-container || true

# Run the new container
docker run -d \
  --name bb-holidays-container \
  -p 80:80 \
  --restart unless-stopped \
  bb-holidays