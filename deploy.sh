#!/bin/bash

# Configuration
EC2_HOST="ec2-user@your-ec2-instance-ip"
DEPLOY_PATH="/var/www/html"

# Build the applications
echo "Building applications..."
node build.js

# Upload files to EC2
echo "Uploading files to EC2..."
scp -r dist/* $EC2_HOST:$DEPLOY_PATH/

# Restart nginx
echo "Restarting nginx..."
ssh $EC2_HOST "sudo systemctl restart nginx"

echo "Deployment complete!"