tsconfig.json  
配置 baseUrl ，在项目中使用绝对路径就可以从处出开始搜索。

### 统一代码格式化：

[Prettier](https://prettier.io/) 官网  
安装： `yarn add --dev --exact prettier`  
新建配置文件 .prettierrc.json ： `echo {}> .prettierrc.json`  
新建配置文件 .prettierignore ：不需要格式化的文件  
手动格式化： `yarn prettier --write .`

#### 自动格式化

[Pre-commit Hook](https://prettier.io/docs/en/precommit.html) 文档  
在每次提交之前，自动执行代码格式化。  
安装：

```
// Option 1. lint-staged

npx mrm@2 lint-staged
```

安装之后，会在 package.json 里新增

```
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
}
```

在 commit 之前，执行`lint-staged`命令。  
添加 扩展名 '.ts .tsx'。

注：在 eslint 和 Prettier 一起生效时会冲突，因为 Prettier 自带 eslint，所以需要安装兼容模块和修改 eslintConfig。  
`yarn add eslint-config-prettier -D`

```
"eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest",
      "prettier" //新加，用此规则覆盖部分前面的规则
    ]
  },
```

ps: 如果格式是 UTF-16 会被他格挡下来
