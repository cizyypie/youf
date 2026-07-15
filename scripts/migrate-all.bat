@echo off
echo Running database migrations for all services...

echo.
echo [1/4] menu-service
cd /d "%~dp0..\services\menu-service"
call bun run db:push

echo.
echo [2/4] order-service
cd /d "%~dp0..\services\order-service"
call bun run db:push

echo.
echo [3/4] payment-service
cd /d "%~dp0..\services\payment-service"
call bun run db:push

echo.
echo [4/4] users-service
cd /d "%~dp0..\services\users-service"
call bun run db:push

echo.
echo All migrations complete.
