# WebNav Hub - 精选网站导航

一个现代化的网站导航页面，提供精选的AI搜索、社交媒体、实用工具、科技资讯、云存储和电子邮箱等优质网站链接。

## ✨ 特性

- 🎨 **现代化设计** - 深色主题，橙色主色调，简洁美观
- 📱 **响应式布局** - 完美适配桌面、平板和手机设备
- 🔍 **实时搜索** - 支持网站名称、URL和分类的实时搜索
- 🚀 **性能优化** - 预加载关键资源，优化加载速度
- ♿ **无障碍支持** - 完整的ARIA标签和键盘导航支持
- 🔒 **安全增强** - 内容安全策略(CSP)和XSS防护
- 📊 **SEO优化** - 完整的meta标签和结构化数据
- ⬆️ **返回顶部** - 智能显示的平滑滚动按钮

## 🗂️ 网站分类

### 🤖 AI搜索 (44个网站)
包含各类AI搜索引擎和AI工具：
- Google、ChatGPT、Claude、Gemini
- 国内AI：豆包、通义千问、Kimi、文心一言
- 专业AI：OpenRouter、WebSim、DeepSeek
- AI绘图：Leonardo.ai、Hugging Face

### 📱 社交媒体 (18个网站)
社交平台和相关工具：
- 主流平台：Facebook、Twitter、Instagram、Reddit
- 开发部署：Vercel、Netlify、Railway、Render
- 视频工具：YouTube下载、Suno音乐

### 🛠️ 实用工具 (76个网站)
丰富的在线工具集合：
- **翻译工具**：Google翻译
- **网络工具**：网速测试、IP查询、DNS工具
- **域名服务**：免费域名、DNS托管
- **开发工具**：Cursor、GitHub加速、代码编辑器
- **图片处理**：背景移除、图床服务、图片素材
- **文档工具**：PDF处理、Markdown编辑器
- **服务器托管**：免费主机、容器服务
- **音视频工具**：视频下载、字幕工具、AI音频

### 📰 科技资讯 (9个网站)
权威科技媒体：
- 国外媒体：TechCrunch、Wired、The Verge
- 技术博客：Ars Technica、Engadget
- 中文资讯：cnbeta、科技博客

### ☁️ 云存储 (7个网站)
主流云存储服务：
- Google Drive、OneDrive、Dropbox
- MEGA、PikPak、MediaFire、Box

### 📧 电子邮箱 (8个网站)
邮箱服务提供商：
- 主流邮箱：Gmail、Outlook、QQ邮箱
- 隐私邮箱：ProtonMail、Disroot
- 临时邮箱：临时谷歌邮箱

## 🚀 快速开始

### 本地运行

1. **克隆项目**
```bash
git clone <repository-url>
cd navs
```

2. **启动本地服务器**
```bash
# 使用Python
python -m http.server 8000

# 或使用Node.js
npx serve .

# 或使用PHP
php -S localhost:8000
```

3. **访问网站**
打开浏览器访问 `http://localhost:8000`

### 部署到生产环境

项目是纯静态网站，可以部署到任何静态托管服务：

- **Vercel**: 连接GitHub仓库自动部署
- **Netlify**: 拖拽文件夹或连接Git
- **GitHub Pages**: 启用Pages功能
- **Cloudflare Pages**: 连接仓库部署

## 📁 项目结构

```
navs/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript功能
├── data.js             # 网站数据
└── README.md           # 项目文档
```

## 🔧 自定义配置

### 添加新网站

编辑 `data.js` 文件，在相应分类中添加新链接：

```javascript
{
  name: "网站名称",
  url: "https://example.com",
  icon: "fa-solid fa-icon-name"  // Font Awesome图标
}
```

### 修改主题颜色

编辑 `styles.css` 中的CSS变量：

```css
:root {
  --primary-color: #ff9000;      /* 主色调 */
  --bg-color: #0d0d0d;           /* 背景色 */
  --card-bg-color: #1a1a1a;      /* 卡片背景 */
  --text-color: #fff;            /* 文字颜色 */
}
```

### 添加新分类

1. 在 `data.js` 中添加新分类对象
2. 图标使用 [Font Awesome 6.7.2](https://fontawesome.com/icons)

## 🛡️ 安全特性

- **内容安全策略(CSP)** - 防止XSS攻击
- **安全头部** - X-Frame-Options、X-Content-Type-Options
- **外部链接安全** - 所有外部链接使用 `rel="noopener noreferrer"`

## 📊 SEO优化

- 完整的meta标签配置
- Open Graph和Twitter Cards支持
- 结构化数据(JSON-LD)
- 语义化HTML标签
- 优化的页面标题和描述

## 🌐 浏览器支持

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献

欢迎提交Issue和Pull Request来改进项目！

### 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 🔄 更新日志

### v2.0.0 (2024-07-30)
- ✨ 重构为模块化架构
- 🔍 添加实时搜索功能
- ⬆️ 新增返回顶部按钮
- 📱 优化移动端体验
- 🛡️ 增强安全性配置
- 📊 完善SEO优化
- ♿ 改进无障碍支持
- 🎨 更新UI设计

### v1.0.0
- 🎉 初始版本发布
- 📝 基础网站导航功能

## 🎯 路线图

- [ ] 添加网站收藏功能
- [ ] 支持多主题切换
- [ ] 添加网站分类管理
- [ ] 支持自定义网站排序
- [ ] 添加网站状态监控
- [ ] 支持导入/导出书签

## 📈 统计信息

- **总链接数**: 162个精选网站
- **分类数**: 6个主要分类
- **代码行数**: ~1,500行
- **文件大小**: < 100KB
- **加载时间**: < 2秒

## 🔧 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **图标**: Font Awesome 6.7.2
- **架构**: 模块化设计
- **构建**: 无需构建工具，纯静态
- **部署**: 任何静态托管服务

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 提交 [Issue](../../issues)
- 发送邮件至项目维护者

---

⭐ 如果这个项目对你有帮助，请给它一个星标！
