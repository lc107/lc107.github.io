# 刘超个人简历网站 - 使用指南

## 快速开始

### 1. 项目结构

```
resume-website/
├── index.html              # 主页面
├── js/
│   └── script.js           # 主要JavaScript文件
├── css/
│   └── style.css           # 样式文件
├── images/                 # 图片资源
├── plugins/                # 第三方插件
│   ├── tailwindCss/       # TailwindCSS
│   ├── threejs/           # Three.js
│   ├── aosJs/             # AOS动画库
│   ├── chartJs/           # Chart.js
│   └── daisyui@4.4.19/    # DaisyUI
├── API_DOCUMENTATION.md    # API文档
├── COMPONENT_DOCUMENTATION.md # 组件文档
└── USAGE_GUIDE.md         # 使用指南
```

### 2. 运行项目

1. **本地运行**
   ```bash
   # 使用Python简单服务器
   python -m http.server 8000
   
   # 或使用Node.js
   npx http-server
   
   # 或使用Live Server (VS Code扩展)
   ```

2. **访问网站**
   - 打开浏览器访问 `http://localhost:8000`
   - 确保所有资源文件路径正确

## 功能模块使用

### 1. 导航功能

#### 基本导航
```javascript
// 平滑滚动到指定部分
document.querySelector('a[href="#about"]').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector('#about');
    target.scrollIntoView({ behavior: 'smooth' });
});

// 导航高亮
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});
```

#### 响应式导航
```html
<!-- 桌面端导航 -->
<div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
        <li><a href="#about" class="nav-link">关于我</a></li>
        <li><a href="#timeline" class="nav-link">工作经历</a></li>
        <li><a href="#skills" class="nav-link">技能专长</a></li>
        <li><a href="#charts" class="nav-link">技术图表</a></li>
    </ul>
</div>

<!-- 移动端导航 -->
<div class="dropdown lg:hidden">
    <div tabindex="0" role="button" class="btn btn-ghost">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path>
        </svg>
    </div>
    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-dark-card rounded-box w-52">
        <li><a href="#about" class="nav-link">关于我</a></li>
        <li><a href="#timeline" class="nav-link">工作经历</a></li>
        <li><a href="#skills" class="nav-link">技能专长</a></li>
        <li><a href="#charts" class="nav-link">技术图表</a></li>
    </ul>
</div>
```

### 2. 动画效果

#### 滚动触发动画
```javascript
// 设置滚动观察器
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// 观察需要动画的元素
document.querySelectorAll('.timeline-item, .skill-category, .chart-container').forEach(el => {
    observer.observe(el);
});
```

#### 数字计数动画
```javascript
// 数字计数动画函数
async function countUpAnimation(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000; // 2秒
    const step = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// 使用示例
document.querySelectorAll('[data-count]').forEach(element => {
    countUpAnimation(element);
});
```

#### 进度条动画
```javascript
// 进度条填充动画
function animateProgressBar(progressBar) {
    const fill = progressBar.querySelector('.progress-fill');
    const width = fill.getAttribute('data-width');
    
    setTimeout(() => {
        fill.style.width = width;
    }, 500);
}

// 使用示例
document.querySelectorAll('.progress-bar').forEach(bar => {
    animateProgressBar(bar);
});
```

### 3. 图表功能

#### 创建雷达图
```javascript
// 雷达图配置
const radarConfig = {
    type: 'radar',
    data: {
        labels: ['React', 'Vue', 'JavaScript', 'HTML/CSS', 'Three.js', '数据可视化'],
        datasets: [{
            label: '技能水平',
            data: [95, 90, 98, 95, 88, 92],
            backgroundColor: 'rgba(0, 212, 255, 0.2)',
            borderColor: '#00d4ff',
            borderWidth: 2,
            pointBackgroundColor: '#00d4ff',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#00d4ff'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    stepSize: 20,
                    color: '#ffffff'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                pointLabels: {
                    color: '#ffffff'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#ffffff'
                }
            }
        }
    }
};

// 创建雷达图
const radarChart = new Chart(document.getElementById('radarChart'), radarConfig);
```

#### 创建环形图
```javascript
// 环形图配置
const doughnutConfig = {
    type: 'doughnut',
    data: {
        labels: ['前端框架', '3D开发', '数据可视化', 'WebGIS', '工程化', '移动端'],
        datasets: [{
            data: [95, 88, 92, 80, 85, 78],
            backgroundColor: [
                '#00d4ff', '#8b5cf6', '#10b981', 
                '#f59e0b', '#ec4899', '#06b6d4'
            ],
            borderWidth: 2,
            borderColor: '#1e293b'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#ffffff',
                    padding: 20,
                    usePointStyle: true
                }
            }
        }
    }
};

// 创建环形图
const doughnutChart = new Chart(document.getElementById('doughnutChart'), doughnutConfig);
```

### 4. 时间线功能

#### 时间线交互
```javascript
// 时间线项目交互
function setupTimelineInteractions() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            highlightTimelineItem(item);
        });
        
        item.addEventListener('mouseleave', () => {
            resetTimelineItem(item);
        });
        
        item.addEventListener('click', () => {
            const timelineData = {
                company: item.querySelector('.card-title').textContent,
                position: item.querySelector('h4').textContent,
                period: item.querySelector('p').textContent,
                description: item.querySelector('.text-gray-300').textContent
            };
            showTimelineDetails(timelineData);
        });
    });
}

// 高亮时间线项目
function highlightTimelineItem(item) {
    item.style.transform = 'scale(1.05)';
    item.style.transition = 'transform 0.3s ease';
}

// 重置时间线项目
function resetTimelineItem(item) {
    item.style.transform = 'scale(1)';
}
```

### 5. 模态框功能

#### 联系模态框
```javascript
// 显示联系模态框
function showContactModal() {
    const modal = document.getElementById('contact-modal');
    modal.showModal();
}

// 关闭模态框
function closeModal() {
    const modal = document.getElementById('contact-modal');
    modal.close();
}

// 二维码模态框
function showQRModal(imageSrc, title) {
    const modal = document.createElement('dialog');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-box bg-dark-card/95 backdrop-blur-sm border border-tech-blue/20">
            <h3 class="font-bold text-xl text-tech-blue mb-4">${title}</h3>
            <div class="text-center">
                <img src="${imageSrc}" alt="${title}" class="w-64 h-64 mx-auto rounded-lg border border-tech-blue/20">
            </div>
            <div class="modal-action">
                <form method="dialog">
                    <button class="btn btn-outline text-tech-blue border-tech-blue">关闭</button>
                </form>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.showModal();
    
    modal.addEventListener('close', () => {
        document.body.removeChild(modal);
    });
}
```

### 6. AI聊天功能

#### 聊天界面控制
```javascript
// 切换聊天窗口
function toggleChat() {
    const chatWindow = document.querySelector('.chat-window');
    const chatToggle = document.getElementById('chat-toggle');
    
    if (chatWindow.classList.contains('hidden')) {
        chatWindow.classList.remove('hidden');
        chatToggle.style.display = 'none';
    } else {
        chatWindow.classList.add('hidden');
        chatToggle.style.display = 'block';
    }
}

// 发送消息
async function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    // 添加用户消息
    addMessage(message, 'user');
    input.value = '';
    
    // 添加AI回复
    addTypingIndicator();
    
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });
        
        const data = await response.json();
        removeTypingIndicator();
        addMessage(data.reply, 'assistant');
    } catch (error) {
        removeTypingIndicator();
        addMessage('抱歉，发送失败，请稍后重试。', 'assistant', 'error');
    }
}

// 添加消息到聊天界面
function addMessage(text, sender, type = 'normal') {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    
    messageDiv.className = `chat-message ${sender}-message`;
    messageDiv.innerHTML = `
        <div class="bg-gray-700/50 rounded-lg p-3 max-w-xs ${sender === 'user' ? 'ml-auto' : 'mr-auto'}">
            <p class="text-white">${text}</p>
        </div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
```

### 7. 3D背景效果

#### Three.js背景控制
```javascript
// 初始化3D背景
function initThreeJSBackground() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('threejs-bg').appendChild(renderer.domElement);
    
    // 创建几何体
    const geometries = [];
    for (let i = 0; i < 50; i++) {
        const geometry = new THREE.SphereGeometry(0.1, 8, 8);
        const material = new THREE.MeshBasicMaterial({ 
            color: new THREE.Color().setHSL(Math.random(), 0.7, 0.5) 
        });
        const mesh = new THREE.Mesh(geometry, material);
        
        mesh.position.set(
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20
        );
        
        mesh.userData.pulsePhase = Math.random() * Math.PI * 2;
        mesh.userData.pulseSpeed = 0.02 + Math.random() * 0.03;
        
        scene.add(mesh);
        geometries.push(mesh);
    }
    
    camera.position.z = 5;
    
    // 动画循环
    function animate() {
        requestAnimationFrame(animate);
        
        geometries.forEach((mesh, index) => {
            mesh.rotation.x += 0.01;
            mesh.rotation.y += 0.01;
            
            // 脉冲效果
            mesh.userData.pulsePhase += mesh.userData.pulseSpeed;
            const scale = 1 + Math.sin(mesh.userData.pulsePhase) * 0.1;
            mesh.scale.set(scale, scale, scale);
            
            // 颜色渐变
            const time = Date.now() * 0.001;
            const hue = (time * 0.1 + index * 0.3) % 1;
            mesh.material.color.setHSL(hue, 0.7, 0.5);
        });
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // 窗口大小调整
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}
```

### 8. 响应式设计

#### 移动端适配
```css
/* 移动端样式 */
@media (max-width: 767px) {
    .hero-content .max-w-4xl {
        padding: 0 1rem;
    }
    
    .stats {
        flex-direction: column;
    }
    
    .skill-category {
        margin-bottom: 2rem;
    }
    
    .chart-wrapper {
        height: 250px;
    }
    
    .timeline-line {
        left: 1rem;
    }
    
    .timeline-marker {
        left: 1rem;
    }
    
    .timeline-content {
        width: calc(100% - 2rem);
        margin-left: 2rem;
    }
    
    .timeline-content::after {
        left: -0.5rem;
    }
}
```

#### 平板端适配
```css
/* 平板端样式 */
@media (min-width: 768px) and (max-width: 1023px) {
    .timeline-item {
        margin-bottom: 2rem;
    }
    
    .timeline-content {
        width: calc(50% - 1rem);
    }
    
    .skill-category {
        margin-bottom: 1.5rem;
    }
}
```

## 自定义配置

### 1. 修改主题色彩

```javascript
// 在index.html中修改Tailwind配置
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'tech-blue': '#00d4ff',      // 主蓝色
                'tech-purple': '#8b5cf6',    // 紫色
                'tech-green': '#10b981',     // 绿色
                'tech-orange': '#f59e0b',    // 橙色
                'tech-pink': '#ec4899',      // 粉色
                'dark-bg': '#0f172a',        // 深色背景
                'dark-card': '#1e293b'       // 卡片背景
            }
        }
    }
}
```

### 2. 修改数据内容

```javascript
// 在script.js中修改resumeData对象
const resumeData = {
    personal: {
        name: '你的姓名',
        title: '你的职位',
        experience: 5,
        currentCompany: '你的公司'
    },
    timeline: [
        {
            id: 'current',
            company: '公司名称',
            position: '职位名称',
            period: '2020 - 至今',
            description: '工作描述...',
            technologies: ['技术1', '技术2', '技术3']
        }
        // 添加更多工作经历...
    ],
    skills: [
        {
            name: '技能名称',
            level: 90,
            category: 'frontend',
            color: '#00d4ff'
        }
        // 添加更多技能...
    ]
};
```

### 3. 添加新的图表

```javascript
// 在ChartController中添加新方法
class ChartController {
    // ... 现有方法 ...
    
    createLineChart() {
        const ctx = document.getElementById('lineChart');
        return new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
                datasets: [{
                    label: '项目完成度',
                    data: [65, 70, 80, 85, 90, 95],
                    borderColor: '#00d4ff',
                    backgroundColor: 'rgba(0, 212, 255, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#ffffff'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#ffffff'
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: '#ffffff'
                        }
                    }
                }
            }
        });
    }
}
```

### 4. 添加新的动画效果

```css
/* 在style.css中添加新动画 */
@keyframes slideInFromLeft {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

.slide-in-left {
    animation: slideInFromLeft 0.8s ease-out;
}

@keyframes bounceIn {
    0% {
        transform: scale(0.3);
        opacity: 0;
    }
    50% {
        transform: scale(1.05);
    }
    70% {
        transform: scale(0.9);
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

.bounce-in {
    animation: bounceIn 0.8s ease-out;
}
```

## 性能优化建议

### 1. 图片优化
```html
<!-- 使用WebP格式和响应式图片 -->
<picture>
    <source srcset="avatar.webp" type="image/webp">
    <source srcset="avatar.jpg" type="image/jpeg">
    <img src="avatar.jpg" alt="头像" loading="lazy">
</picture>
```

### 2. JavaScript优化
```javascript
// 使用防抖处理滚动事件
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 使用节流处理频繁事件
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
```

### 3. CSS优化
```css
/* 使用CSS变量便于维护 */
:root {
    --primary-color: #00d4ff;
    --secondary-color: #8b5cf6;
    --background-color: #0f172a;
    --card-background: #1e293b;
}

/* 使用硬件加速 */
.animate-element {
    transform: translateZ(0);
    will-change: transform;
}
```

## 故障排除

### 1. 常见问题

#### 图表不显示
```javascript
// 检查Chart.js是否正确加载
if (typeof Chart === 'undefined') {
    console.error('Chart.js not loaded');
    return;
}

// 检查canvas元素是否存在
const canvas = document.getElementById('radarChart');
if (!canvas) {
    console.error('Canvas element not found');
    return;
}
```

#### 动画不触发
```javascript
// 检查Intersection Observer支持
if (!('IntersectionObserver' in window)) {
    // 降级处理
    document.querySelectorAll('.animate').forEach(el => {
        el.classList.add('animate');
    });
}
```

#### 3D背景不显示
```javascript
// 检查WebGL支持
function checkWebGLSupport() {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
        console.warn('WebGL not supported, falling back to 2D background');
        // 使用2D背景替代
        return false;
    }
    return true;
}
```

### 2. 调试技巧

#### 控制台调试
```javascript
// 添加调试信息
console.log('Animation triggered:', element);
console.log('Chart data:', chartData);
console.log('Scroll position:', window.scrollY);

// 性能监控
console.time('animation');
// 动画代码
console.timeEnd('animation');
```

#### 网络调试
```javascript
// 检查资源加载
window.addEventListener('load', () => {
    const resources = performance.getEntriesByType('resource');
    resources.forEach(resource => {
        if (resource.duration > 1000) {
            console.warn('Slow resource:', resource.name, resource.duration);
        }
    });
});
```

## 部署指南

### 1. 静态部署
```bash
# 使用GitHub Pages
git add .
git commit -m "Update resume website"
git push origin main

# 或使用Netlify
netlify deploy --prod --dir=.
```

### 2. 服务器部署
```bash
# 使用Nginx
sudo apt-get install nginx
sudo cp -r resume-website /var/www/
sudo nano /etc/nginx/sites-available/resume
# 配置Nginx
sudo ln -s /etc/nginx/sites-available/resume /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 3. CDN优化
```html
<!-- 使用CDN加速 -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.150.0/build/three.min.js"></script>
```

---

*最后更新: 2024年*
*版本: 1.0.0*