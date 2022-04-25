### 前期准备

1. 代码规范(eslint | prettier)

2. 使用 TypeScript [TSC CI 编译](https://juejin.cn/post/6844904093568221191)

3. 使用 learn 进行多包管理

4. 提交工程化 (commitlint | husky | lint-stage)

5. ts-node 执行 ts 脚本

6. 使用 tsconfig 下 references

7. yarn2 管理 - 强制 yarn [参考文献](https://yarnpkg.com/configuration/yarnrc#npmRegistries)

### 组件发布脚手架需求

1. 根据 config.jsonc 的 name 渲染名称选项(可以搜索)

2. 检查 node_moudle 是否存在 (不存在自动安装)

3. 修改 config.jsonc 为 ejs 语法 （旧 | 新 保留双份数据）

4. 修改 var 目录下的数据源的环境变量 (有个默认值)

5. 提供数据源/组件 key 的输入提示 (有个默认值)

6. 选择环境：正式环境 | 测试环境

7. 检查 lowcode 是否为最新版本或者是否存在本地，不存在自行安装

8. 自动执行 lowcode login --env=环境 进行登录

9. 自动执行 npm run fix

10. 执行 npm run deploy:环境进行发布

11. 一些配置信息应该服务化，使用 MongoDB 存储
