#!/bin/bash

# Make the script executable
chmod +x "${BASH_SOURCE[0]}"

case "$1" in
  "dev")
    echo "Starting development environment..."
    docker-compose up web-dev
    ;;
  "prod")
    echo "Starting production environment..."
    docker-compose up web-prod
    ;;
  "build")
    echo "Building Docker images..."
    docker-compose build
    ;;
  "down")
    echo "Stopping all containers..."
    docker-compose down
    ;;
  *)
    echo "Usage: $0 {dev|prod|build|down}"
    echo "  dev   - Start development environment"
    echo "  prod  - Start production environment"
    echo "  build - Build Docker images"
    echo "  down  - Stop all containers"
    exit 1
    ;;
esac 