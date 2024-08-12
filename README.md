## Full Stack

### Frontend

vite + react + shadcn/ui + tailwind css

### Backend

nest

### monorepo

pnpm workspace

## 操作备注

### install local package

`pnpm add '@react/data-type' `

`@react/data-type`即是`packages`文件下的公共包`package.json`里面的`name`属性

### install shadcn-ui component

`pnpm dlx shadcn-ui@latest add 'component name' `

## 微前端相关

### 生成基座配置应用

运行`npx create-single-spa --moduleType root-config`命令，根据需要选择配置

其中，single-spa-layout适用于服务端渲染，组织名称相当于命名空间

安装依赖之后，执行`pnpm run start`，打开`http://localhost:9000/`

### 生成微前端基座能加载的普通应用

运行`npx create-single-spa --moduleType app-parcel`命令，根据需要选择配置
