#!/bin/bash

# ==============================================================================
# Automated Deployment Script (Source Code Sync)
# ==============================================================================

# Configuration
SERVER_IP="188.241.222.157"
SERVER_USER="root" # Change this to your SSH username
REMOTE_DIR="/var/www/quiz-app-source" # Change this to the path on your Ubuntu server

echo "🚀 Syncing source code to $SERVER_USER@$SERVER_IP..."

# rsync will sync everything in the current directory EXCEPT node_modules and dist folders
rsync -avz --delete \
  --exclude 'node_modules' \
  --exclude 'dist' \
  --exclude '.git' \
  -e ssh ./ $SERVER_USER@$SERVER_IP:$REMOTE_DIR

if [ $? -eq 0 ]; then
  echo "✅ Source code uploaded successfully!"
  echo "🚀 Running build commands on remote server..."
  
  ssh $SERVER_USER@$SERVER_IP "cd $REMOTE_DIR && npm install && npm run build"
  
  echo "🎉 Deployment completed successfully!"
else
  echo "❌ Source code upload failed! Please check your SSH connection."
fi
