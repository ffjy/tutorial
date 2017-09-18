``` shell
# 本地Gitbook

1. npm i gitbook-cli -g
2. mkdir my-note && cd my-note
3. gitbook init

# 推送到github

在content中新增markdown文档
然后在`summary.md`中引入导航
运行`npm run publish`
git add . && git commit -m ""
git push origin master

# ok
```