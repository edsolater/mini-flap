# 文件（夹）分布

- 📁**src**
  - 📁**baseUI** 存放业务无关的底层组件, 如：` <Avatar>`、`<Tooltip>`、`<EditorTools> `
  - 📁**components** 存放业务相关的可复用组件
  - 📁**views** 存放业务相关的一般组件
    - 文件性质：
      1. popups 参照微信小程序文档，popup 类组件存在于额外的视图层，需要统一管理
      2. navigator 导航用
      3. 未注明就是普通业务组件
    - 文件简介：
      1. 📄[TopicList.tsx](./src/views/TopicList.tsx) 罗列一些可见的主题。比如：发现主题页面
      2. 📄[ArticelList.tsx](./src/views/ArticelList.tsx) 罗列某一主题下的所有文章
      3. 📄[ArticelDetail.tsx](./src/views/ArticelDetail.tsx) 展示整篇文章+所有评论
      4. 📄[TopNavbar.tsx](./src/views/TopNavbar.tsx) `navigator` 视窗顶部的传统常驻导航栏
      5. 📄[AsideMenu.tsx](./src/views/AsideMenu.tsx) `navigator` 视窗左侧的传统常驻菜单栏
  - 📁**template** 复制/粘贴用的代码片段
