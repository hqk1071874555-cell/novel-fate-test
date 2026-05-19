# novel-fate-test 一键部署脚本
# 用法: PowerShell 里运行 .\deploy.ps1

$project = "E:\桌面\novel-fate-test"
$git = "C:\Program Files\Git\bin\git.exe"

Set-Location $project

$currentBranch = & $git rev-parse --abbrev-ref HEAD

if ($currentBranch -ne "main") {
  Write-Host "🔀 暂存当前分支改动，切到 main..." -ForegroundColor Yellow
  & $git stash
  & $git checkout main
}

Write-Host "🔨 构建中..." -ForegroundColor Cyan
$env:NODE_OPTIONS = ""
C:/Users/kk/.workbuddy/binaries/node/versions/22.12.0/node.exe node_modules/vite/bin/vite.js build

Write-Host "📦 复制构建产物..." -ForegroundColor Cyan
Copy-Item dist/index.html index.html -Force
Copy-Item dist/assets/* assets/ -Force

# 清理旧 assets
Get-ChildItem assets/ | Where-Object { $_.Name -notin (Get-ChildItem dist/assets/ | Select-Object -ExpandProperty Name) } | Remove-Item -Force

Write-Host "🚀 部署到 GitHub Pages..." -ForegroundColor Green
& $git add -A
& $git commit -m "deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
& $git push origin main --force

# 切回 deploy 分支
if ($currentBranch -ne "main") {
  & $git checkout $currentBranch
  & $git stash pop
}

Write-Host "✅ 部署完成！" -ForegroundColor Green
Write-Host "🌐 https://hqk1071874555-cell.github.io/novel-fate-test/"
