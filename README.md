# 刘超个人简历网站

一个现代化的个人简历网站，采用响应式设计，集成了多种交互功能和视觉效果。

## 🌟 特性

- **响应式设计** - 完美适配桌面端、平板端和移动端
- **现代化UI** - 采用深色主题，渐变色彩，毛玻璃效果
- **丰富动画** - 滚动触发动画，数字计数，进度条动画
- **数据可视化** - 雷达图、环形图、柱状图展示技能
- **3D背景** - Three.js创建的动态3D背景效果
- **AI聊天** - 集成AI助手，提供智能交互
- **时间线展示** - 优雅的工作经历时间线
- **联系功能** - 二维码展示，多种联系方式

## 🚀 快速开始

### 运行项目

```bash
# 克隆项目
git clone <repository-url>
cd resume-website

# 使用Python简单服务器
python -m http.server 8000

# 或使用Node.js
npx http-server

# 访问网站
open http://localhost:8000
```

### 项目结构

```
resume-website/
├── index.html                    # 主页面
├── js/
│   └── script.js                # 主要JavaScript文件
├── css/
│   └── style.css                # 样式文件
├── images/                      # 图片资源
├── plugins/                     # 第三方插件
│   ├── tailwindCss/            # TailwindCSS
│   ├── threejs/                # Three.js
│   ├── aosJs/                  # AOS动画库
│   ├── chartJs/                # Chart.js
│   └── daisyui@4.4.19/        # DaisyUI
├── API_DOCUMENTATION.md         # API文档
├── COMPONENT_DOCUMENTATION.md   # 组件文档
├── USAGE_GUIDE.md              # 使用指南
└── README.md                   # 项目说明
```

## 📚 文档

- **[API文档](API_DOCUMENTATION.md)** - 详细的API参考和类方法说明
- **[组件文档](COMPONENT_DOCUMENTATION.md)** - HTML组件结构和样式指南
- **[使用指南](USAGE_GUIDE.md)** - 实用示例和配置说明

## 🛠️ 技术栈

- **前端框架**: 原生JavaScript (ES6+)
- **样式框架**: TailwindCSS, DaisyUI
- **3D图形**: Three.js
- **数据可视化**: Chart.js
- **动画库**: AOS (Animate On Scroll)
- **构建工具**: 原生HTML/CSS/JS

## 🎨 主要功能

### 1. 导航系统
- 响应式导航栏
- 平滑滚动
- 当前页面高亮
- 移动端汉堡菜单

### 2. 个人信息展示
- 头像和基本信息
- 统计数字动画
- 个人简介
- 联系按钮

### 3. 工作经历时间线
- 垂直时间线布局
- 交替左右布局
- 悬停交互效果
- 技能标签展示

### 4. 技能专长
- 分类技能展示
- 进度条动画
- 渐变填充效果
- 响应式网格布局

### 5. 数据可视化
- 雷达图（技能雷达）
- 环形图（技术栈分布）
- 柱状图（技能水平）
- 交互式图表

### 6. 联系功能
- 联系信息卡片
- 二维码展示
- 模态框交互
- 多种联系方式

### 7. AI聊天助手
- 实时聊天功能
- 拖拽窗口
- 打字指示器
- 消息历史记录

### 8. 3D背景效果
- Three.js动态背景
- 几何体动画
- 颜色渐变
- 性能优化

## 🎯 核心类

### AnimationController
负责处理页面动画效果和交互。

```javascript
const animationController = new AnimationController();
```

### ChartController
负责创建和管理各种数据可视化图表。

```javascript
const chartController = new ChartController();
chartController.createRadarChart();
chartController.createDoughnutChart();
chartController.createBarChart();
```

### NavigationController
负责处理导航栏和页面导航功能。

```javascript
const navigationController = new NavigationController();
```

### TimelineController
负责处理时间线交互功能。

```javascript
const timelineController = new TimelineController();
```

### AIChatController
负责处理AI聊天功能。

```javascript
const aiChatController = new AIChatController();
```

### ThreeJSBackgroundController
负责创建Three.js 3D背景效果。

```javascript
const threeJSController = new ThreeJSBackgroundController();
```

## 🎨 主题色彩

- **tech-blue**: #00d4ff (主蓝色)
- **tech-purple**: #8b5cf6 (紫色)
- **tech-green**: #10b981 (绿色)
- **tech-orange**: #f59e0b (橙色)
- **tech-pink**: #ec4899 (粉色)
- **dark-bg**: #0f172a (深色背景)
- **dark-card**: #1e293b (卡片背景)

## 📱 响应式设计

- **移动端**: < 768px
- **平板端**: 768px - 1024px
- **桌面端**: > 1024px

## 🌐 浏览器兼容性

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## ⚡ 性能优化

- 懒加载实现
- 防抖节流处理
- 资源管理优化
- 动画性能优化
- 内存管理

## 🔧 自定义配置

### 修改主题色彩
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'tech-blue': '#00d4ff',
                'tech-purple': '#8b5cf6',
                // ... 更多颜色
            }
        }
    }
}
```

### 修改数据内容
```javascript
const resumeData = {
    personal: {
        name: '你的姓名',
        title: '你的职位',
        experience: 5,
        currentCompany: '你的公司'
    },
    // ... 更多数据
};
```

## 🚀 部署

### 静态部署
```bash
# GitHub Pages
git add .
git commit -m "Update resume website"
git push origin main

# Netlify
netlify deploy --prod --dir=.
```

### 服务器部署
```bash
# Nginx配置
sudo apt-get install nginx
sudo cp -r resume-website /var/www/
sudo nano /etc/nginx/sites-available/resume
sudo ln -s /etc/nginx/sites-available/resume /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## 🐛 故障排除

### 常见问题

1. **图表不显示**
   - 检查Chart.js是否正确加载
   - 确认canvas元素存在

2. **动画不触发**
   - 检查Intersection Observer支持
   - 确认元素有正确的CSS类

3. **3D背景不显示**
   - 检查WebGL支持
   - 确认Three.js库加载

### 调试技巧

```javascript
// 控制台调试
console.log('Animation triggered:', element);
console.log('Chart data:', chartData);

// 性能监控
console.time('animation');
// 动画代码
console.timeEnd('animation');
```

## 📄 许可证

本项目采用 MIT 许可证。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系

- **姓名**: 刘超
- **电话**: 18682925071
- **邮箱**: 1292131741@qq.com
- **地址**: 海南

---

*最后更新: 2024年*
*版本: 1.0.0*