# 刘超个人简历网站 - API 文档

## 项目概述

这是一个现代化的个人简历网站，采用响应式设计，集成了多种交互功能和视觉效果。项目使用原生JavaScript构建，包含多个功能模块和控制器类。

## 技术栈

- **前端框架**: 原生JavaScript (ES6+)
- **样式框架**: TailwindCSS, DaisyUI
- **3D图形**: Three.js
- **数据可视化**: Chart.js
- **动画库**: AOS (Animate On Scroll)
- **构建工具**: 原生HTML/CSS/JS

## 核心数据结构

### resumeData 对象

```javascript
const resumeData = {
    personal: {
        name: '刘超',
        title: '前端开发工程师 · 大数据可视化专家',
        experience: 8,
        currentCompany: '海南老城开发控股有限公司'
    },
    timeline: [...], // 工作经历时间线
    skills: [...],   // 技能数据
    techStack: {...} // 技术栈数据
}
```

## 主要类和方法

### 1. AnimationController 类

负责处理页面动画效果和交互。

#### 构造函数
```javascript
constructor()
```
初始化动画控制器，设置观察器选项。

#### 公共方法

##### `init()`
初始化所有动画功能。

##### `setupScrollObserver()`
设置滚动观察器，监听元素进入视口时触发动画。

**参数**: 无
**返回值**: 无

##### `setupCountUpAnimations()`
设置数字计数动画效果。

**参数**: 无
**返回值**: 无

##### `async countUpAnimation(element)`
执行数字计数动画。

**参数**:
- `element` (HTMLElement): 要执行动画的元素

**返回值**: Promise<void>

##### `animateTimelineItem(item)`
为时间线项目添加动画效果。

**参数**:
- `item` (HTMLElement): 时间线项目元素

**返回值**: 无

##### `setupProgressBars()`
设置进度条动画。

**参数**: 无
**返回值**: 无

##### `animateSkillBars(category)`
为技能条添加动画效果。

**参数**:
- `category` (HTMLElement): 技能分类元素

**返回值**: 无

##### `animateChart(container)`
为图表容器添加动画效果。

**参数**:
- `container` (HTMLElement): 图表容器元素

**返回值**: 无

##### `setupParticleBackground()`
设置粒子背景效果。

**参数**: 无
**返回值**: 无

### 2. ChartController 类

负责创建和管理各种数据可视化图表。

#### 构造函数
```javascript
constructor()
```
初始化图表控制器。

#### 公共方法

##### `init()`
初始化所有图表。

**参数**: 无
**返回值**: 无

##### `createRadarChart()`
创建雷达图（技能雷达图）。

**参数**: 无
**返回值**: Chart对象

**示例**:
```javascript
const chartController = new ChartController();
chartController.createRadarChart();
```

##### `createDoughnutChart()`
创建环形图（技术栈分布）。

**参数**: 无
**返回值**: Chart对象

##### `createBarChart()`
创建柱状图（技能水平）。

**参数**: 无
**返回值**: Chart对象

##### `groupSkillsByCategory()`
按类别分组技能数据。

**参数**: 无
**返回值**: Object - 分组后的技能数据

### 3. NavigationController 类

负责处理导航栏和页面导航功能。

#### 构造函数
```javascript
constructor()
```
初始化导航控制器。

#### 公共方法

##### `init()`
初始化导航功能。

**参数**: 无
**返回值**: 无

##### `setupScrollEffects()`
设置滚动效果。

**参数**: 无
**返回值**: 无

##### `setupSmoothScrolling()`
设置平滑滚动。

**参数**: 无
**返回值**: 无

##### `setupBackToTop()`
设置返回顶部按钮。

**参数**: 无
**返回值**: 无

##### `setupNavigationHighlight()`
设置导航高亮效果。

**参数**: 无
**返回值**: 无

##### `updateNavigationHighlight()`
更新导航高亮状态。

**参数**: 无
**返回值**: 无

### 4. TimelineController 类

负责处理时间线交互功能。

#### 构造函数
```javascript
constructor()
```
初始化时间线控制器。

#### 公共方法

##### `init()`
初始化时间线功能。

**参数**: 无
**返回值**: 无

##### `setupTimelineInteractions()`
设置时间线交互。

**参数**: 无
**返回值**: 无

##### `highlightTimelineItem(item)`
高亮时间线项目。

**参数**:
- `item` (HTMLElement): 时间线项目元素

**返回值**: 无

##### `resetTimelineItem(item)`
重置时间线项目状态。

**参数**:
- `item` (HTMLElement): 时间线项目元素

**返回值**: 无

##### `showTimelineDetails(timelineData)`
显示时间线详细信息。

**参数**:
- `timelineData` (Object): 时间线数据

**返回值**: 无

### 5. ModalController 类

负责处理模态框功能。

#### 构造函数
```javascript
constructor()
```
初始化模态框控制器。

#### 公共方法

##### `init()`
初始化模态框功能。

**参数**: 无
**返回值**: 无

### 6. DreamBackgroundController 类

负责创建梦幻光影背景效果。

#### 构造函数
```javascript
constructor()
```
初始化梦幻背景控制器。

#### 公共方法

##### `init()`
初始化背景效果。

**参数**: 无
**返回值**: 无

##### `resizeCanvas()`
调整画布大小。

**参数**: 无
**返回值**: 无

##### `createLights()`
创建光影效果。

**参数**: 无
**返回值**: 无

##### `createCurves()`
创建曲线效果。

**参数**: 无
**返回值**: 无

##### `generateCurvePoints()`
生成曲线点。

**参数**: 无
**返回值**: Array - 曲线点数组

##### `animate()`
执行动画循环。

**参数**: 无
**返回值**: 无

##### `drawLights()`
绘制光影。

**参数**: 无
**返回值**: 无

##### `drawCurves()`
绘制曲线。

**参数**: 无
**返回值**: 无

### 7. QRCodeController 类

负责处理二维码相关功能。

#### 构造函数
```javascript
constructor()
```
初始化二维码控制器。

#### 公共方法

##### `init()`
初始化二维码功能。

**参数**: 无
**返回值**: 无

##### `setupQRCodeListeners()`
设置二维码监听器。

**参数**: 无
**返回值**: 无

##### `showQRModal(imageSrc, title)`
显示二维码模态框。

**参数**:
- `imageSrc` (String): 二维码图片路径
- `title` (String): 模态框标题

**返回值**: 无

### 8. AIChatController 类

负责处理AI聊天功能。

#### 构造函数
```javascript
constructor()
```
初始化AI聊天控制器。

#### 公共方法

##### `getApiBaseUrl()`
获取API基础URL。

**参数**: 无
**返回值**: String - API基础URL

##### `init()`
初始化AI聊天功能。

**参数**: 无
**返回值**: 无

##### `async checkServiceHealth()`
检查服务健康状态。

**参数**: 无
**返回值**: Promise<boolean> - 服务是否可用

##### `updateAssistantStatus(isOnline)`
更新助手状态。

**参数**:
- `isOnline` (Boolean): 是否在线

**返回值**: 无

##### `setupEventListeners()`
设置事件监听器。

**参数**: 无
**返回值**: 无

##### `setupDraggable()`
设置拖拽功能。

**参数**: 无
**返回值**: 无

##### `async sendMessage()`
发送消息。

**参数**: 无
**返回值**: Promise<void>

##### `addMessage(text, sender, type)`
添加消息到聊天界面。

**参数**:
- `text` (String): 消息文本
- `sender` (String): 发送者 ('user' | 'assistant')
- `type` (String): 消息类型，默认 'normal'

**返回值**: 无

##### `addTypingIndicator()`
添加打字指示器。

**参数**: 无
**返回值**: 无

##### `removeTypingIndicator()`
移除打字指示器。

**参数**: 无
**返回值**: 无

##### `async sendMessageStream(message)`
发送流式消息。

**参数**:
- `message` (String): 消息内容

**返回值**: Promise<void>

### 9. ThreeJSBackgroundController 类

负责创建Three.js 3D背景效果。

#### 构造函数
```javascript
constructor()
```
初始化Three.js背景控制器。

#### 公共方法

##### `init()`
初始化Three.js背景。

**参数**: 无
**返回值**: 无

##### `createGeometries()`
创建几何体。

**参数**: 无
**返回值**: 无

##### `animate()`
执行3D动画循环。

**参数**: 无
**返回值**: 无

##### `onWindowResize()`
处理窗口大小变化。

**参数**: 无
**返回值**: 无

##### `destroy()`
销毁Three.js资源。

**参数**: 无
**返回值**: 无

### 10. ResumeApp 类

主应用类，负责协调所有控制器。

#### 构造函数
```javascript
constructor()
```
初始化主应用。

#### 公共方法

##### `async init()`
异步初始化应用。

**参数**: 无
**返回值**: Promise<void>

##### `initializeApp()`
初始化应用组件。

**参数**: 无
**返回值**: 无

## CSS 类和样式

### 主要CSS类

#### 导航相关
- `.navbar` - 导航栏样式
- `.nav-link` - 导航链接样式
- `.nav-link.active` - 激活状态导航链接

#### 动画相关
- `.animate` - 动画触发类
- `.fade-in-up` - 淡入上升动画
- `.pulse` - 脉冲动画
- `.rotate` - 旋转动画
- `.float` - 浮动动画

#### 时间线相关
- `.timeline-container` - 时间线容器
- `.timeline-item` - 时间线项目
- `.timeline-marker` - 时间线标记
- `.timeline-content` - 时间线内容

#### 技能相关
- `.skill-category` - 技能分类
- `.skill-item` - 技能项目
- `.progress-bar` - 进度条
- `.progress-fill` - 进度条填充

#### 图表相关
- `.chart-container` - 图表容器
- `.chart-wrapper` - 图表包装器

#### 模态框相关
- `.modal` - 模态框
- `.modal-box` - 模态框内容

#### 聊天相关
- `.chat-message` - 聊天消息
- `.ai-message` - AI消息
- `.user-message` - 用户消息
- `.typing-indicator` - 打字指示器

### 关键动画

#### @keyframes 动画
- `gradientShift` - 渐变背景动画
- `particleFloat` - 粒子浮动动画
- `navGlow` - 导航发光动画
- `shimmer` - 闪烁动画
- `fadeInUp` - 淡入上升动画
- `pulse` - 脉冲动画
- `rotate` - 旋转动画
- `float` - 浮动动画
- `typing` - 打字动画
- `blink-caret` - 光标闪烁动画
- `gradientText` - 渐变文字动画
- `borderGlow` - 边框发光动画
- `modalFadeIn` - 模态框淡入动画
- `modalSlideIn` - 模态框滑入动画
- `dreamLight` - 梦幻光影动画
- `dreamCurve` - 梦幻曲线动画
- `yellowGlow` - 黄色发光动画

## 使用示例

### 基本初始化

```javascript
// 创建主应用实例
const app = new ResumeApp();

// 或者单独使用某个控制器
const animationController = new AnimationController();
const chartController = new ChartController();
const navigationController = new NavigationController();
```

### 创建图表

```javascript
const chartController = new ChartController();
chartController.init();

// 创建雷达图
const radarChart = chartController.createRadarChart();

// 创建环形图
const doughnutChart = chartController.createDoughnutChart();

// 创建柱状图
const barChart = chartController.createBarChart();
```

### 添加动画效果

```javascript
const animationController = new AnimationController();

// 为元素添加动画
const element = document.querySelector('.skill-item');
animationController.animateSkillBars(element);
```

### 处理导航

```javascript
const navigationController = new NavigationController();

// 设置平滑滚动
navigationController.setupSmoothScrolling();

// 更新导航高亮
navigationController.updateNavigationHighlight();
```

### AI聊天功能

```javascript
const aiChatController = new AIChatController();

// 检查服务状态
const isHealthy = await aiChatController.checkServiceHealth();

// 发送消息
await aiChatController.sendMessage();

// 添加消息
aiChatController.addMessage('Hello!', 'user');
aiChatController.addMessage('Hi there!', 'assistant');
```

### 3D背景效果

```javascript
const threeJSController = new ThreeJSBackgroundController();

// 初始化3D背景
threeJSController.init();

// 销毁资源（页面卸载时）
threeJSController.destroy();
```

## 数据格式

### 技能数据格式

```javascript
{
    name: 'React',
    level: 95,
    category: 'frontend',
    color: '#00d4ff'
}
```

### 时间线数据格式

```javascript
{
    id: 'current',
    company: '海南老城开发控股有限公司',
    position: '前端开发工程师',
    period: '2020 - 至今',
    description: '负责数字化产品的前端研发工作...',
    technologies: ['React', 'Three.js', '数据可视化']
}
```

### 技术栈数据格式

```javascript
{
    labels: ['前端框架', '3D开发', '数据可视化', 'WebGIS', '工程化', '移动端'],
    values: [95, 88, 92, 80, 85, 78],
    colors: ['#00d4ff', '#8b5cf6', '#10b981', '#f59e0b', '#ec4899', '#06b6d4']
}
```

## 浏览器兼容性

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 性能优化

1. **懒加载**: 使用Intersection Observer API实现元素懒加载
2. **防抖节流**: 滚动事件使用节流处理
3. **资源管理**: Three.js资源在页面卸载时正确销毁
4. **动画优化**: 使用CSS transform和opacity进行动画
5. **内存管理**: 及时清理事件监听器和定时器

## 错误处理

所有异步操作都包含try-catch错误处理：

```javascript
try {
    await this.sendMessage();
} catch (error) {
    console.error('发送消息失败:', error);
    this.addMessage('抱歉，发送失败，请稍后重试。', 'assistant', 'error');
}
```

## 扩展指南

### 添加新的控制器

1. 创建新的控制器类
2. 在ResumeApp中初始化
3. 添加相应的CSS样式
4. 更新文档

### 添加新的图表类型

1. 在ChartController中添加新方法
2. 定义图表配置
3. 添加相应的HTML容器
4. 更新数据格式

### 添加新的动画效果

1. 定义CSS动画
2. 在AnimationController中添加触发逻辑
3. 添加相应的CSS类
4. 更新文档

## 维护说明

- 定期更新依赖库版本
- 监控性能指标
- 保持代码注释的完整性
- 定期测试浏览器兼容性
- 备份重要数据和配置

---

*最后更新: 2024年*
*版本: 1.0.0*