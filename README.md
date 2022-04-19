### 前期准备
1. 代码规范(commit | eslint | prettier)

2. 使用TypeScript [参考文献](https://mp.weixin.qq.com/s/PhBZa3cDcLk2_eMhfE7tJg)

3. 使用learn进行多包管理

### 组件发布脚手架需求

1. 根据config.jsonc的name渲染名称选项(可以搜索)

2. 检查node_moudle是否存在 (不存在自动安装)

3. 修改config.jsonc为ejs语法 （旧 | 新 保留双份数据）

4. 修改var目录下的数据源的环境变量  (有个默认值)

5. 提供数据源/组件key的输入提示  (有个默认值)

6. 选择环境：正式环境 | 测试环境

7. 检查lowcode是否为最新版本或者是否存在本地，不存在自行安装

8. 自动执行lowcode login --env=环境  进行登录

9. 自动执行npm run fix

10. 执行npm run deploy:环境进行发布

11. 一些配置信息应该服务化，使用MongoDB存储