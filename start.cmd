@echo off
cd /d "%~dp0dist"
start http://localhost:8080
"C:\Users\kk\.workbuddy\binaries\python\versions\3.13.12\python.exe" -m http.server 8080
pause
