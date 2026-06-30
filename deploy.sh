#!/bin/bash

# ==============================================================================
# Automated Deployment Script
# ==============================================================================

# Configuration
SERVER_IP="188.241.222.157"
SERVER_USER="root" # Change this to your SSH username (e.g., ubuntu, root)
REMOTE_DIR="/var/www/quiz-app" # Change this to the path on your Ubuntu server

# Step 1: Build the Vite React App locally
echo "🚀 Building the application locally..."
npm run build

# Check if build succeeded
if [ $? -ne 0 ]; then
  echo "❌ Build failed! Aborting deployment."
  exit 1
fi

echo "✅ Build successful!"

# Step 2: Sync the built files to the remote server using rsync
# We upload the 'dist' folder because it contains the compiled static site.
# This is much faster and cleaner than uploading the source code and node_modules.
echo "🚀 Deploying files to $SERVER_USER@$SERVER_IP..."

rsync -avz --delete -e ssh ./dist/ $SERVER_USER@$SERVER_IP:$REMOTE_DIR

if [ $? -eq 0 ]; then
  echo "🎉 Deployment to $SERVER_IP completed successfully!"
else
  echo "❌ Deployment failed! Please check your SSH connection and permissions."
fi
