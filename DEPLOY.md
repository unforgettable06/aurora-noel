# 发布到 GitHub Pages

这台机器上 `api.github.com` 和 OAuth token 接口被墙（403 / 连接被关闭），
所以不能用 `gh auth login` / `gh repo create`。这里改用 **SSH** 推送，不需要 token。

## 已准备好的东西

- 本地仓库：`aurora-noel-120`（`main` 分支，源码 + share + docs）
- 部署分支仓库：`../gh-pages-stage`（`gh-pages` 分支，`dist` 构建产物，含手势模型）
- SSH 私钥：`%USERPROFILE%\.ssh\id_ed25519_aurora`
- 公钥（已复制到桌面 `github-key.txt`）：

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAID0VnS06Gmn2iTkZg27iE3RH9HuVsQIAhayVuK2dsi+t aurora-noel
```

## 你需要做的两步

1. 添加公钥：<https://github.com/settings/ssh/new>，Title 随意，Key 粘贴上面的公钥，保存。
2. 新建空仓库：<https://github.com/new>，仓库名例如 `aurora-noel`，选 Public，
   **不要**勾选 README / .gitignore / license，点 Create。

## 然后二选一

### A. 让 DSH 帮你推

把「GitHub 用户名 + 仓库名」告诉我就行，我来执行推送。

### B. 自己推

```powershell
$git = 'C:\Program Files\Git\cmd\git.exe'
$env:GIT_SSH_COMMAND = "ssh -i `"$env:USERPROFILE\.ssh\id_ed25519_aurora`""

cd 'C:\Users\28999\OneDrive\文档\deepseek-harness\default-workspace\aurora-noel-120'
& $git remote add origin git@github.com:你的用户名/aurora-noel.git
& $git push -u origin main

cd 'C:\Users\28999\OneDrive\文档\deepseek-harness\default-workspace\gh-pages-stage'
& $git remote add origin git@github.com:你的用户名/aurora-noel.git
& $git push -u origin gh-pages
```

## 开启 Pages

推完后打开仓库 **Settings → Pages**：

- Source 选 **Deploy from a branch**
- Branch 选 **gh-pages**，目录选 **/ (root)**，点 Save

等 1–2 分钟，访问：

```
https://你的用户名.github.io/aurora-noel/
```

Pages 自带 HTTPS，所以摄像头手势可以正常用。

## 如果 22 端口连不上

`git@github.com:22` 不通就用 443：

```powershell
ssh -T -p 443 git@ssh.github.com
```

并在 `%USERPROFILE%\.ssh\config` 里加：

```
Host github.com
  HostName ssh.github.com
  Port 443
  IdentityFile ~/.ssh/id_ed25519_aurora
```

## 不想建站

直接把 `share/index.html` 发给别人双击打开即可（单文件约 9 MB，无摄像头手势）。
