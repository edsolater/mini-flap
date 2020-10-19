# 文件（夹）分布

- 📁**src**
  - 📁**styles** emotion 样式（对象形式）
    - 📄[basic-style.ts](./src/baseUI/basic-styles.ts) 底层组件的缺省版本，供快速开发使用。 如：`<Avatar>`、`<Flexiable>`、`<EditorTools>`
  - 📁**baseUI** 业务无关的底层组件, 如：`<Avatar>`、`<Tooltip>`、`<EditorTools>`
    - `layout` 排版级组件
    - `element` 元素级组件
    - `props: placeholder` 表明该组件有用于草稿的缺省版本 （开启缺省版本的元素，在界面中只显示一个灰色块）
  - 📁**components** 业务相关的可复用组件
  - 📁**views** 业务相关的一般组件
    - popups 参照微信小程序文档，popup 类组件存在于额外的视图层，需要统一管理
    - nav 组件均能发生导航行为
    - 未注明就是普通业务组件
    * 📄[TopicList.tsx](./src/views/TopicList.tsx) 罗列一些可见的主题。比如：发现主题页面
    * 📄[ArticelList.tsx](./src/views/ArticelList.tsx) 罗列某一主题下的所有文章
    * 📄[ArticelDetail.tsx](./src/views/ArticelDetail.tsx) 展示整篇文章+所有评论
    * 📄[TopNavbar.tsx](./src/views/TopNavbar.tsx) `nav` 视窗顶部的传统常驻导航栏
    * 📄[AsideMenu.tsx](./src/views/AsideMenu.tsx) `nav` 视窗左侧的传统常驻菜单栏
  - 📁**template** 复制/粘贴用的代码片段
