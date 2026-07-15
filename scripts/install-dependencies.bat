@echo off
echo Installing dependencies for all services...

echo.
echo [1/6] api-gateway
cd /d "%~dp0..\services\api-gateway"
call bun install

echo.
echo [2/6] menu-service
cd /d "%~dp0..\services\menu-service"
call bun install

echo.
echo [3/6] order-service
cd /d "%~dp0..\services\order-service"
call bun install

echo.
echo [4/6] payment-service
cd /d "%~dp0..\services\payment-service"
call bun install

echo.
echo [5/6] notification-service
cd /d "%~dp0..\services\notification-service"
call bun install

echo.
echo [6/6] users-service
cd /d "%~dp0..\services\users-service"
call bun install

echo.
echo All dependencies installed.
