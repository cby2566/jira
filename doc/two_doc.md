### 第二次补充

### JSON SERVER

用于假数据请求的开发辅助。  
`npm i json-server -D`  
用 yarn 更快。手动建`__json_server_mock__`文件夹

```
// package.json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "prepare": "husky install",
    "serve": "json-server __json_server_mock__/db.json --watch"
  },
```
