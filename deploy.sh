#!/bin/bash

# Deployment script for EC2 instance
# This script should be run on the EC2 instance

set -e

echo "Starting deployment..."

# Navigate to app directory
cd ~/app

# Stop existing containers
echo "Stopping existing containers..."
sudo docker-compose down

# Build and start new containers
echo "Building and starting new containers..."
sudo docker-compose up -d --build

# Clean up unused Docker resources
echo "Cleaning up Docker resources..."
sudo docker system prune -f

# Show running containers
echo "Deployment complete! Running containers:"
sudo docker-compose ps

echo "Application should be available at: http://localhost:3000"
