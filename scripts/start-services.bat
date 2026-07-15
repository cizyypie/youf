@echo off
echo Starting all services with PM2...

cd /d "%~dp0.."
pm2 start ecosystem.config.js

echo.
pm2 status
