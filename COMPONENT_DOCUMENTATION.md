# 刘超个人简历网站 - 组件文档

## HTML 组件结构

### 1. 页面基础结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <!-- 元数据和样式 -->
</head>
<body class="bg-dark-bg text-white overflow-x-hidden">
    <!-- 背景层 -->
    <div id="threejs-bg" class="fixed inset-0 z-0 pointer-events-none"></div>
    <div id="particles-bg" class="fixed inset-0 z-0"></div>
    
    <!-- 导航栏 -->
    <nav class="navbar bg-dark-card/80 backdrop-blur-sm fixed top-0 z-50">
        <!-- 导航内容 -->
    </nav>
    
    <!-- 主要内容 -->
    <main class="relative z-10 pt-20">
        <!-- 各个页面部分 -->
    </main>
</body>
</html>
```

### 2. 导航栏组件 (Navigation Bar)

#### 结构
```html
<nav class="navbar bg-dark-card/80 backdrop-blur-sm fixed top-0 z-50 border-b border-tech-blue/20">
    <div class="navbar-start">
        <div class="dropdown">
            <!-- 移动端菜单按钮 -->
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h8m-8 6h16"></path>
                </svg>
            </div>
            <!-- 移动端下拉菜单 -->
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-dark-card rounded-box w-52">
                <li><a href="#about" class="nav-link text-tech-blue hover:text-white" data-section="about">关于我</a></li>
                <li><a href="#timeline" class="nav-link text-tech-blue hover:text-white" data-section="timeline">工作经历</a></li>
                <li><a href="#skills" class="nav-link text-tech-blue hover:text-white" data-section="skills">技能专长</a></li>
                <li><a href="#charts" class="nav-link text-tech-blue hover:text-white" data-section="charts">技术图表</a></li>
            </ul>
        </div>
        <!-- 品牌名称 -->
        <a class="btn btn-ghost text-xl font-bold text-tech-blue">刘超 | 软件开发</a>
    </div>
    
    <!-- 桌面端导航菜单 -->
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
            <li><a href="#about" class="nav-link text-tech-blue hover:text-white" data-section="about">关于我</a></li>
            <li><a href="#timeline" class="nav-link text-tech-blue hover:text-white" data-section="timeline">工作经历</a></li>
            <li><a href="#skills" class="nav-link text-tech-blue hover:text-white" data-section="skills">技能专长</a></li>
            <li><a href="#charts" class="nav-link text-tech-blue hover:text-white" data-section="charts">技术图表</a></li>
        </ul>
    </div>
    
    <!-- 右侧按钮 -->
    <div class="navbar-end">
        <button class="btn btn-outline btn-sm text-tech-blue border-tech-blue hover:bg-tech-blue hover:text-dark-bg"
            onclick="document.getElementById('contact-modal').showModal()">
            联系我
        </button>
    </div>
</nav>
```

#### 功能特性
- 响应式设计，支持移动端和桌面端
- 半透明背景，毛玻璃效果
- 平滑滚动导航
- 当前页面高亮显示
- 联系按钮触发模态框

### 3. 个人信息区域 (About Section)

#### 结构
```html
<section id="about" class="hero min-h-screen bg-gradient-to-br from-dark-bg/50 via-slate-900/50 to-dark-bg/50 backdrop-blur-sm">
    <div class="hero-content text-center">
        <div class="max-w-4xl">
            <!-- 头像区域 -->
            <div class="avatar mb-8">
                <div class="w-32 h-32 rounded-full ring ring-tech-blue ring-offset-base-100 ring-offset-2 mx-auto overflow-hidden">
                    <img src="./images/头像.png" alt="刘超头像" class="w-full h-full object-cover" />
                </div>
            </div>

            <!-- 姓名和标题 -->
            <h1 class="text-5xl font-bold mb-4 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-green bg-clip-text text-transparent">
                刘超
            </h1>
            <h2 class="text-2xl mb-6 text-tech-blue">前端开发工程师 · 大数据可视化专家 · Web 3D开发</h2>

            <!-- 统计信息 -->
            <div class="stats shadow bg-dark-card/50 backdrop-blur-sm">
                <div class="stat">
                    <div class="stat-title text-tech-blue">工作经验</div>
                    <div class="stat-value text-tech-blue" data-count="8">0</div>
                    <div class="stat-desc">年</div>
                </div>
                <div class="stat">
                    <div class="stat-title text-tech-green">技术栈</div>
                    <div class="stat-value text-tech-green" data-count="15">0</div>
                    <div class="stat-desc">种</div>
                </div>
                <div class="stat">
                    <div class="stat-title text-tech-purple">项目经验</div>
                    <div class="stat-value text-tech-purple" data-count="50">0</div>
                    <div class="stat-desc">个</div>
                </div>
            </div>

            <!-- 个人简介 -->
            <p class="text-lg mt-8 text-gray-300 leading-relaxed">
                专注于前端开发和大数据可视化领域，拥有丰富的React、Vue、Three.js等现代前端技术栈经验。
                擅长构建高性能的Web应用和3D可视化项目，对数据驱动的前端开发有深入理解。
            </p>

            <!-- 联系按钮 -->
            <div class="flex gap-4 justify-center mt-8">
                <button class="btn btn-primary bg-gradient-to-r from-tech-blue to-tech-purple border-0 hover:from-tech-purple hover:to-tech-blue"
                    onclick="document.getElementById('contact-modal').showModal()">
                    联系我
                </button>
                <button class="btn btn-outline text-tech-blue border-tech-blue hover:bg-tech-blue hover:text-dark-bg">
                    下载简历
                </button>
            </div>
        </div>
    </div>
</section>
```

#### 功能特性
- 渐变背景效果
- 头像环形装饰
- 渐变文字效果
- 数字计数动画
- 响应式统计卡片
- 毛玻璃效果

### 4. 工作经历时间线 (Timeline Section)

#### 结构
```html
<section id="timeline" class="py-20 bg-gradient-to-b from-dark-bg to-slate-900">
    <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
            工作经历
        </h2>
        
        <div class="timeline-container relative">
            <!-- 时间线中心线 -->
            <div class="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-tech-blue via-tech-purple to-tech-green h-full"></div>
            
            <!-- 时间线项目 -->
            <div class="timeline-item relative mb-16 animate" data-aos="fade-up">
                <div class="timeline-marker absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-tech-blue rounded-full border-4 border-dark-bg shadow-lg"></div>
                
                <div class="timeline-content left-content w-5/12 pr-8">
                    <div class="card bg-dark-card/80 backdrop-blur-sm border border-tech-blue/20 hover:border-tech-blue/40 transition-all duration-300">
                        <div class="card-body">
                            <h3 class="card-title text-tech-blue">前端开发工程师</h3>
                            <h4 class="text-tech-green">海南老城开发控股有限公司</h4>
                            <p class="text-sm text-gray-400">2020 - 至今</p>
                            <p class="text-gray-300 mt-4">
                                负责数字化产品的前端研发工作，专注于大数据可视化和三维开发领域，
                                参与多个智能化项目的前端架构设计和开发实施。
                            </p>
                            <div class="flex flex-wrap gap-2 mt-4">
                                <span class="badge badge-outline text-tech-blue border-tech-blue">React</span>
                                <span class="badge badge-outline text-tech-green border-tech-green">Three.js</span>
                                <span class="badge badge-outline text-tech-purple border-tech-purple">数据可视化</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 更多时间线项目... -->
        </div>
    </div>
</section>
```

#### 功能特性
- 垂直时间线布局
- 渐变中心线
- 交替左右布局
- 悬停效果
- 技能标签
- 滚动动画

### 5. 技能专长区域 (Skills Section)

#### 结构
```html
<section id="skills" class="py-20 bg-gradient-to-b from-slate-900 to-dark-bg">
    <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
            技能专长
        </h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- 技能分类 -->
            <div class="skill-category animate" data-category="frontend">
                <h3 class="text-2xl font-bold text-tech-blue mb-6">前端开发</h3>
                <div class="space-y-4">
                    <div class="skill-item">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-gray-300">React</span>
                            <span class="text-tech-blue">95%</span>
                        </div>
                        <div class="progress-bar bg-gray-700 rounded-full h-2">
                            <div class="progress-fill bg-gradient-to-r from-tech-blue to-tech-purple h-2 rounded-full transition-all duration-1000" 
                                 style="width: 0%" data-width="95%"></div>
                        </div>
                    </div>
                    <!-- 更多技能项... -->
                </div>
            </div>
            
            <!-- 更多技能分类... -->
        </div>
    </div>
</section>
```

#### 功能特性
- 分类展示技能
- 进度条动画
- 渐变填充效果
- 响应式网格布局
- 悬停交互效果

### 6. 技术图表区域 (Charts Section)

#### 结构
```html
<section id="charts" class="py-20 bg-gradient-to-b from-dark-bg to-slate-900">
    <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
            技术图表
        </h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- 雷达图 -->
            <div class="chart-container animate" data-aos="fade-up">
                <div class="card bg-dark-card/80 backdrop-blur-sm border border-tech-blue/20">
                    <div class="card-body">
                        <h3 class="card-title text-tech-blue">技能雷达图</h3>
                        <div class="chart-wrapper">
                            <canvas id="radarChart" width="300" height="300"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 环形图 -->
            <div class="chart-container animate" data-aos="fade-up" data-aos-delay="200">
                <div class="card bg-dark-card/80 backdrop-blur-sm border border-tech-green/20">
                    <div class="card-body">
                        <h3 class="card-title text-tech-green">技术栈分布</h3>
                        <div class="chart-wrapper">
                            <canvas id="doughnutChart" width="300" height="300"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 柱状图 -->
            <div class="chart-container animate" data-aos="fade-up" data-aos-delay="400">
                <div class="card bg-dark-card/80 backdrop-blur-sm border border-tech-purple/20">
                    <div class="card-body">
                        <h3 class="card-title text-tech-purple">技能水平</h3>
                        <div class="chart-wrapper">
                            <canvas id="barChart" width="300" height="300"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

#### 功能特性
- 三种不同类型的图表
- 响应式布局
- 动画延迟效果
- 卡片式设计
- 图表交互功能

### 7. 联系模态框 (Contact Modal)

#### 结构
```html
<dialog id="contact-modal" class="modal">
    <div class="modal-box bg-dark-card/95 backdrop-blur-sm border border-tech-blue/20 max-w-2xl">
        <h3 class="font-bold text-2xl text-tech-blue mb-6">联系我</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 联系信息 -->
            <div class="space-y-4">
                <div class="contact-item flex items-center space-x-3 p-3 rounded-lg bg-dark-bg/50 hover:bg-tech-blue/10 transition-colors">
                    <div class="w-10 h-10 bg-tech-blue/20 rounded-full flex items-center justify-center">
                        <svg class="w-5 h-5 text-tech-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                    </div>
                    <div>
                        <p class="text-sm text-gray-400">电话</p>
                        <p class="text-white">18682925071</p>
                    </div>
                </div>
                
                <div class="contact-item flex items-center space-x-3 p-3 rounded-lg bg-dark-bg/50 hover:bg-tech-green/10 transition-colors">
                    <div class="w-10 h-10 bg-tech-green/20 rounded-full flex items-center justify-center">
                        <svg class="w-5 h-5 text-tech-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <div>
                        <p class="text-sm text-gray-400">邮箱</p>
                        <p class="text-white">1292131741@qq.com</p>
                    </div>
                </div>
                
                <div class="contact-item flex items-center space-x-3 p-3 rounded-lg bg-dark-bg/50 hover:bg-tech-purple/10 transition-colors">
                    <div class="w-10 h-10 bg-tech-purple/20 rounded-full flex items-center justify-center">
                        <svg class="w-5 h-5 text-tech-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </div>
                    <div>
                        <p class="text-sm text-gray-400">地址</p>
                        <p class="text-white">海南</p>
                    </div>
                </div>
            </div>
            
            <!-- 二维码 -->
            <div class="space-y-4">
                <div class="qr-modal-content p-4 rounded-lg bg-dark-bg/50 hover:bg-tech-blue/10 transition-colors cursor-pointer"
                     onclick="showQRModal('./images/微信二维码.png', '微信二维码')">
                    <div class="text-center">
                        <img src="./images/微信二维码.png" alt="微信二维码" class="w-32 h-32 mx-auto mb-2 rounded-lg border border-tech-blue/20">
                        <p class="text-tech-blue text-sm">微信二维码</p>
                    </div>
                </div>
                
                <div class="qr-modal-content p-4 rounded-lg bg-dark-bg/50 hover:bg-tech-green/10 transition-colors cursor-pointer"
                     onclick="showQRModal('./images/QQ二维码.png', 'QQ二维码')">
                    <div class="text-center">
                        <img src="./images/QQ二维码.png" alt="QQ二维码" class="w-32 h-32 mx-auto mb-2 rounded-lg border border-tech-green/20">
                        <p class="text-tech-green text-sm">QQ二维码</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="modal-action">
            <form method="dialog">
                <button class="btn btn-outline text-tech-blue border-tech-blue hover:bg-tech-blue hover:text-dark-bg">关闭</button>
            </form>
        </div>
    </div>
</dialog>
```

#### 功能特性
- 响应式布局
- 联系信息卡片
- 二维码展示
- 悬停效果
- 毛玻璃背景

### 8. AI聊天助手 (AI Chat Assistant)

#### 结构
```html
<div id="ai-assistant" class="fixed bottom-4 right-4 z-50">
    <div class="chat-window bg-dark-card/95 backdrop-blur-sm border border-tech-blue/20 rounded-lg shadow-2xl w-80 h-96 hidden">
        <!-- 聊天头部 -->
        <div class="chat-header bg-gradient-to-r from-tech-blue to-tech-purple p-4 rounded-t-lg flex items-center justify-between">
            <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                </div>
                <div>
                    <h3 class="text-white font-semibold">AI助手</h3>
                    <p class="text-white/80 text-xs" id="assistant-status">在线</p>
                </div>
            </div>
            <button class="text-white hover:text-gray-300" onclick="toggleChat()">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
        
        <!-- 聊天消息区域 -->
        <div id="chat-messages" class="flex-1 p-4 overflow-y-auto space-y-4 max-h-64">
            <!-- 消息内容 -->
        </div>
        
        <!-- 输入区域 -->
        <div class="chat-input p-4 border-t border-gray-700">
            <div class="flex space-x-2">
                <input type="text" id="chat-input" placeholder="输入消息..." 
                       class="flex-1 bg-dark-bg/50 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-tech-blue">
                <button id="send-btn" class="bg-tech-blue hover:bg-tech-purple text-white px-4 py-2 rounded-lg transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    
    <!-- 聊天按钮 -->
    <button id="chat-toggle" class="bg-gradient-to-r from-tech-blue to-tech-purple text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            onclick="toggleChat()">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
    </button>
</div>
```

#### 功能特性
- 可拖拽窗口
- 实时聊天功能
- 打字指示器
- 消息历史记录
- 响应式设计
- 状态指示器

### 9. 返回顶部按钮 (Back to Top)

#### 结构
```html
<button id="backToTop" class="fixed bottom-4 left-4 z-40 bg-gradient-to-r from-tech-blue to-tech-purple text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 opacity-0 pointer-events-none">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
    </svg>
</button>
```

#### 功能特性
- 滚动时显示/隐藏
- 平滑滚动到顶部
- 悬停效果
- 渐变背景

## 响应式设计

### 断点设置
- **移动端**: < 768px
- **平板端**: 768px - 1024px
- **桌面端**: > 1024px

### 响应式特性
1. **导航栏**: 移动端显示汉堡菜单
2. **时间线**: 移动端单列布局
3. **技能网格**: 移动端单列，桌面端多列
4. **图表**: 响应式画布大小
5. **模态框**: 移动端全屏显示

## 主题色彩系统

### 主色调
- **tech-blue**: #00d4ff (主蓝色)
- **tech-purple**: #8b5cf6 (紫色)
- **tech-green**: #10b981 (绿色)
- **tech-orange**: #f59e0b (橙色)
- **tech-pink**: #ec4899 (粉色)

### 背景色
- **dark-bg**: #0f172a (深色背景)
- **dark-card**: #1e293b (卡片背景)

### 渐变组合
- 蓝色到紫色: `from-tech-blue to-tech-purple`
- 绿色到蓝色: `from-tech-green to-tech-blue`
- 橙色到粉色: `from-tech-orange to-tech-pink`

## 动画系统

### CSS动画类
- `.animate` - 触发动画
- `.fade-in-up` - 淡入上升
- `.pulse` - 脉冲效果
- `.rotate` - 旋转效果
- `.float` - 浮动效果

### JavaScript动画
- 数字计数动画
- 进度条填充动画
- 图表加载动画
- 滚动触发动画

## 无障碍设计

### 键盘导航
- 所有交互元素支持键盘访问
- Tab键导航顺序合理
- Enter/Space键激活按钮

### 屏幕阅读器
- 语义化HTML标签
- 适当的ARIA标签
- 替代文本描述

### 颜色对比度
- 符合WCAG 2.1 AA标准
- 足够的颜色对比度
- 不依赖颜色传达信息

## 性能优化

### 图片优化
- 使用WebP格式
- 响应式图片
- 懒加载实现

### CSS优化
- 使用CSS变量
- 避免重排重绘
- 硬件加速动画

### JavaScript优化
- 事件委托
- 防抖节流
- 内存管理

## 浏览器兼容性

### 支持的浏览器
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### 特性检测
- Intersection Observer API
- CSS Grid
- Flexbox
- CSS Variables

## 组件使用指南

### 添加新组件
1. 创建HTML结构
2. 添加CSS样式
3. 实现JavaScript功能
4. 更新文档

### 自定义主题
1. 修改CSS变量
2. 更新颜色方案
3. 调整动画效果
4. 测试兼容性

### 扩展功能
1. 添加新的控制器
2. 实现新的动画
3. 集成第三方库
4. 优化性能

---

*最后更新: 2024年*
*版本: 1.0.0*