Set WshShell = CreateObject("WScript.Shell")
WshShell.CurrentDirectory = "E:\桌面\novel-fate-test\dist"
WshShell.Run "C:\Users\kk\.workbuddy\binaries\python\versions\3.13.12\python.exe -m http.server 8080", 0, False
WScript.Sleep 2000
WshShell.Run "http://localhost:8080"
