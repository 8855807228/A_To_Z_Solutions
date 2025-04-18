#!/bin/bash

# Update system
sudo dnf update -y

# Install nginx
sudo dnf install nginx -y

# Install Node.js
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo dnf install nodejs -y

# Install certbot for SSL
sudo dnf install certbot python3-certbot-nginx -y

# Create web directory
sudo mkdir -p /var/www/html
sudo chown -R ec2-user:ec2-user /var/www/html

# Copy nginx configuration
sudo cp nginx.conf /etc/nginx/conf.d/default.conf

# Start nginx
sudo systemctl enable nginx
sudo systemctl start nginx

# Install PM2 for process management
sudo npm install -g pm2

# Set up SSL (Run this after setting up DNS)
# sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com