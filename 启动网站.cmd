@echo off
cd /d "%~dp0"
echo 正在启动小说命运测试网站...
echo.
start http://127.0.0.1:8088
"C:\Users\kk\.workbuddy\binaries\python\versions\3.13.12\python.exe" -m http.server 8088 --directory "dist"
pause
