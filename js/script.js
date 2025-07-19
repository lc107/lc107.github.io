// 主要JavaScript模块
/* global Chart, AOS */

// 数据定义
const resumeData = {
    personal: {
        name: '刘超',
        title: '前端开发工程师 · 大数据可视化专家',
        experience: 8,
        currentCompany: '海南老城开发控股有限公司'
    },
    timeline: [
        {
            id: 'current',
            company: '海南老城开发控股有限公司',
            position: '前端开发工程师',
            period: '2020 - 至今',
            description: '负责数字化产品的前端研发工作，专注于大数据可视化和三维开发领域，参与多个智能化项目的前端架构设计和开发实施。',
            technologies: ['React', 'Three.js', '数据可视化']
        },
        {
            id: 'previous1',
            company: '北京远舢智能科技',
            position: '前端开发工程师',
            period: '2018 - 2020',
            description: '参与物联网平台和智能建筑集成系统的前端开发，负责可视化大屏和数据展示界面的设计与实现。',
            technologies: ['Vue', 'WebGIS', '物联网']
        },
        {
            id: 'previous2',
            company: '太极计算机',
            position: '前端开发工程师',
            period: '2016 - 2018',
            description: '参与企业级应用系统的前端开发，积累了丰富的大型项目开发经验，熟悉前端工程化和团队协作开发流程。',
            technologies: ['JavaScript', 'HTML5', 'CSS3']
        }
    ],
    skills: [
        { name: 'React', level: 95, category: 'frontend', color: '#00d4ff' },
        { name: 'Vue', level: 90, category: 'frontend', color: '#10b981' },
        { name: 'JavaScript (ES6+)', level: 98, category: 'frontend', color: '#f59e0b' },
        { name: 'HTML5 / CSS3', level: 95, category: 'frontend', color: '#8b5cf6' },
        { name: 'Three.js', level: 88, category: '3d', color: '#00d4ff' },
        { name: '数据可视化', level: 92, category: 'visualization', color: '#10b981' },
        { name: 'Babylon.js', level: 85, category: '3d', color: '#8b5cf6' },
        { name: 'WebGIS', level: 80, category: 'other', color: '#f59e0b' }
    ],
    techStack: {
        labels: ['前端框架', '3D开发', '数据可视化', 'WebGIS', '工程化', '移动端'],
        values: [95, 88, 92, 80, 85, 78],
        colors: ['#00d4ff', '#8b5cf6', '#10b981', '#f59e0b', '#ec4899', '#06b6d4']
    }
};

// 动画控制器类
class AnimationController {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        this.setupScrollObserver();
        this.setupCountUpAnimations();
        this.setupProgressBars();
        this.setupParticleBackground();
    }

    // 滚动观察器
    setupScrollObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    
                    // 触发特定动画
                    if (entry.target.classList.contains('timeline-item')) {
                        this.animateTimelineItem(entry.target);
                    } else if (entry.target.classList.contains('skill-category')) {
                        this.animateSkillBars(entry.target);
                    } else if (entry.target.classList.contains('chart-container')) {
                        this.animateChart(entry.target);
                    }
                }
            });
        }, this.observerOptions);

        // 观察所有需要动画的元素
        document.querySelectorAll('.timeline-item, .skill-category, .chart-container').forEach(el => {
            observer.observe(el);
        });
    }

    // 数字计数动画
    setupCountUpAnimations() {
        const countElements = document.querySelectorAll('[data-count]');
        
        const countObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.countUpAnimation(entry.target);
                    countObserver.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        countElements.forEach(el => countObserver.observe(el));
    }

    async countUpAnimation(element) {
        const target = parseInt(element.dataset.count);
        const duration = 2000;
        const step = target / (duration / 16);
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

    // 时间轴动画
    animateTimelineItem(item) {
        const delay = Array.from(item.parentNode.children).indexOf(item) * 200;
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, delay);
    }

    // 技能进度条动画
    setupProgressBars() {
        const progressBars = document.querySelectorAll('.progress-fill');
        
        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.dataset.width;
                    setTimeout(() => {
                        entry.target.style.width = width + '%';
                    }, 300);
                    progressObserver.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        progressBars.forEach(bar => progressObserver.observe(bar));
    }

    animateSkillBars(category) {
        const progressBars = category.querySelectorAll('.progress-fill');
        progressBars.forEach((bar, index) => {
            setTimeout(() => {
                const width = bar.dataset.width;
                bar.style.width = width + '%';
            }, index * 200);
        });
    }

    // 图表动画
    animateChart(container) {
        container.style.opacity = '1';
        container.style.transform = 'scale(1)';
    }

    // 粒子背景
    setupParticleBackground() {
        const particlesContainer = document.getElementById('particles-bg');
        
        // 创建浮动粒子
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 1}px;
                height: ${Math.random() * 4 + 1}px;
                background: rgba(0, 212, 255, ${Math.random() * 0.5 + 0.2});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: particleFloat ${Math.random() * 20 + 10}s linear infinite;
                animation-delay: ${Math.random() * 20}s;
            `;
            particlesContainer.appendChild(particle);
        }
    }
}

// 图表控制器类
class ChartController {
    constructor() {
        this.charts = {};
        this.init();
    }

    init() {
        this.createRadarChart();
        this.createDoughnutChart();
        this.createBarChart();
    }

    // 雷达图
    createRadarChart() {
        const ctx = document.getElementById('radarChart');
        if (!ctx) return;

        this.charts.radar = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: resumeData.techStack.labels,
                datasets: [{
                    label: '技术能力',
                    data: resumeData.techStack.values,
                    backgroundColor: 'rgba(0, 212, 255, 0.2)',
                    borderColor: '#00d4ff',
                    borderWidth: 2,
                    pointBackgroundColor: '#00d4ff',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#ffffff'
                        }
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            color: '#94a3b8',
                            stepSize: 20
                        },
                        grid: {
                            color: 'rgba(148, 163, 184, 0.3)'
                        },
                        pointLabels: {
                            color: '#ffffff',
                            font: {
                                size: 12
                            }
                        }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeInOutQuart'
                }
            }
        });
    }

    // 环形图
    createDoughnutChart() {
        const ctx = document.getElementById('doughnutChart');
        if (!ctx) return;

        const skillCategories = this.groupSkillsByCategory();

        this.charts.doughnut = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(skillCategories),
                datasets: [{
                    data: Object.values(skillCategories).map(skills => 
                        skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length
                    ),
                    backgroundColor: [
                        '#00d4ff',
                        '#8b5cf6',
                        '#10b981',
                        '#f59e0b'
                    ],
                    borderColor: '#1e293b',
                    borderWidth: 3,
                    hoverBorderWidth: 5
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
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + Math.round(context.parsed) + '%';
                            }
                        }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeInOutQuart'
                }
            }
        });
    }

    // 柱状图
    createBarChart() {
        const ctx = document.getElementById('barChart');
        if (!ctx) return;

        const projectData = {
            labels: ['Vue项目', 'React项目', '3D可视化', '数据大屏', 'WebGIS', '移动端'],
            values: [12, 8, 6, 10, 4, 5]
        };

        this.charts.bar = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: projectData.labels,
                datasets: [{
                    label: '项目数量',
                    data: projectData.values,
                    backgroundColor: [
                        'rgba(0, 212, 255, 0.8)',
                        'rgba(139, 92, 246, 0.8)',
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(245, 158, 11, 0.8)',
                        'rgba(236, 72, 153, 0.8)',
                        'rgba(6, 182, 212, 0.8)'
                    ],
                    borderColor: [
                        '#00d4ff',
                        '#8b5cf6',
                        '#10b981',
                        '#f59e0b',
                        '#ec4899',
                        '#06b6d4'
                    ],
                    borderWidth: 2,
                    borderRadius: 8,
                    borderSkipped: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#ffffff'
                        },
                        grid: {
                            color: 'rgba(148, 163, 184, 0.3)'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: '#94a3b8',
                            stepSize: 2
                        },
                        grid: {
                            color: 'rgba(148, 163, 184, 0.3)'
                        }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeInOutQuart'
                }
            }
        });
    }

    groupSkillsByCategory() {
        const categories = {
            '前端框架': [],
            '3D开发': [],
            '数据可视化': [],
            '其他技术': []
        };

        resumeData.skills.forEach(skill => {
            switch (skill.category) {
                case 'frontend':
                    categories['前端框架'].push(skill);
                    break;
                case '3d':
                    categories['3D开发'].push(skill);
                    break;
                case 'visualization':
                    categories['数据可视化'].push(skill);
                    break;
                default:
                    categories['其他技术'].push(skill);
            }
        });

        return categories;
    }
}

// 导航控制器类
class NavigationController {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.backToTopBtn = document.getElementById('backToTop');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = ['about', 'timeline', 'skills', 'charts'];
        this.init();
    }

    init() {
        this.setupScrollEffects();
        this.setupSmoothScrolling();
        this.setupBackToTop();
        this.setupNavigationHighlight();
    }

    setupScrollEffects() {
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;

            // 导航栏背景变化
            if (currentScrollY > 100) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }

            // 返回顶部按钮显示/隐藏
            if (currentScrollY > 300) {
                this.backToTopBtn.classList.add('show');
                this.backToTopBtn.style.opacity = '1';
            } else {
                this.backToTopBtn.classList.remove('show');
                this.backToTopBtn.style.opacity = '0';
            }

            lastScrollY = currentScrollY;
        });
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    
                    // 立即设置目标区域的导航为active状态
                    const section = anchor.getAttribute('data-section');
                    if (section) {
                        // 移除所有导航链接的active类
                        this.navLinks.forEach(navLink => navLink.classList.remove('active'));
                        
                        // 立即为当前点击的链接和所有相同data-section的链接添加active类
                        const allSectionLinks = document.querySelectorAll(`[data-section="${section}"]`);
                        allSectionLinks.forEach(navLink => navLink.classList.add('active'));
                    }
                    
                    // 平滑滚动到目标位置
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupBackToTop() {
        this.backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    setupNavigationHighlight() {
        // 添加一个标志来跟踪是否是通过点击触发的导航
        this.isClickNavigation = false;
        this.scrollTimeout = null;
        
        // 使用节流函数来优化滚动事件
        const throttledScrollHandler = () => {
            if (this.scrollTimeout) {
                clearTimeout(this.scrollTimeout);
            }
            
            this.scrollTimeout = setTimeout(() => {
                // 如果是通过点击触发的导航，延迟更新滚动高亮
                if (this.isClickNavigation) {
                    setTimeout(() => {
                        this.isClickNavigation = false;
                        this.updateNavigationHighlight();
                    }, 800); // 给足够时间让滚动完成
                } else {
                    this.updateNavigationHighlight();
                }
            }, 50); // 50ms的节流延迟
        };
        
        // 监听滚动事件，更新导航高亮
        window.addEventListener('scroll', throttledScrollHandler);

        // 监听导航链接点击事件
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // 防止重复点击
                if (link.classList.contains('active')) {
                    return;
                }
                
                // 设置点击导航标志
                this.isClickNavigation = true;
                
                // 立即设置目标区域的导航为active状态
                const section = link.getAttribute('data-section');
                if (section) {
                    // 移除所有导航链接的active类
                    this.navLinks.forEach(navLink => navLink.classList.remove('active'));
                    
                    // 立即为当前点击的链接和所有相同data-section的链接添加active类
                    const allSectionLinks = document.querySelectorAll(`[data-section="${section}"]`);
                    allSectionLinks.forEach(navLink => navLink.classList.add('active'));
                }
                
                console.log('Navigation clicked:', link.textContent); // 调试信息
            });
        });

        // 初始化时设置默认高亮
        this.updateNavigationHighlight();
    }

    updateNavigationHighlight() {
        const scrollPosition = window.scrollY + 80; // 减少偏移量，让检测更精确

        // 检查当前滚动位置对应的区域
        let currentSection = '';
        let maxOverlap = 0;
        
        this.sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                const sectionHeight = section.offsetHeight;
                
                // 计算当前滚动位置与区域的交叉程度
                const overlap = Math.min(scrollPosition + 100, sectionBottom) - Math.max(scrollPosition, sectionTop);
                
                if (overlap > 0 && overlap > maxOverlap) {
                    maxOverlap = overlap;
                    currentSection = sectionId;
                }
            }
        });

        // 如果找到了当前区域，设置对应的导航链接为active
        if (currentSection) {
            // 检查是否已经有正确的active状态
            const currentActiveLinks = document.querySelectorAll('.nav-link.active');
            const shouldBeActiveLinks = document.querySelectorAll(`[data-section="${currentSection}"]`);
            
            // 只有当active状态需要改变时才更新
            let needsUpdate = false;
            
            if (currentActiveLinks.length !== shouldBeActiveLinks.length) {
                needsUpdate = true;
            } else {
                // 检查当前active的链接是否是正确的
                const currentActiveSections = Array.from(currentActiveLinks).map(link => link.getAttribute('data-section'));
                if (!currentActiveSections.every(section => section === currentSection)) {
                    needsUpdate = true;
                }
            }
            
            if (needsUpdate) {
                // 移除所有导航链接的active类
                this.navLinks.forEach(link => link.classList.remove('active'));
                
                // 设置新的active状态
                shouldBeActiveLinks.forEach(link => {
                    link.classList.add('active');
                });
                console.log(`Active section: ${currentSection}`); // 调试信息
            }
        } else {
            // 如果没有找到当前区域，清除所有active状态
            this.navLinks.forEach(link => link.classList.remove('active'));
        }
    }
}

// 时间轴控制器类
class TimelineController {
    constructor() {
        this.timelineItems = document.querySelectorAll('.timeline-item');
        this.init();
    }

    init() {
        this.setupTimelineInteractions();
    }

    setupTimelineInteractions() {
        this.timelineItems.forEach((item, index) => {
            const marker = item.querySelector('.timeline-marker');
            const card = item.querySelector('.card');

            if (marker && card) {
                marker.addEventListener('mouseenter', () => {
                    this.highlightTimelineItem(item);
                });

                marker.addEventListener('mouseleave', () => {
                    this.resetTimelineItem(item);
                });

                card.addEventListener('click', () => {
                    this.showTimelineDetails(resumeData.timeline[index]);
                });
            }
        });
    }

    highlightTimelineItem(item) {
        item.style.transform = 'scale(1.02)';
        item.style.zIndex = '10';
    }

    resetTimelineItem(item) {
        item.style.transform = 'scale(1)';
        item.style.zIndex = '1';
    }

    showTimelineDetails(timelineData) {
        // 可以在这里添加模态框或详细信息展示
        console.log('Timeline details:', timelineData);
    }
}

// 模态框控制器
class ModalController {
    constructor() {
        this.init();
    }

    init() {
        // 确保模态框在页面加载完成后正确初始化
        const contactModal = document.getElementById('contact-modal');
        if (contactModal) {
            // 防止初始闪烁
            contactModal.addEventListener('click', (e) => {
                if (e.target === contactModal) {
                    contactModal.close();
                }
            });
        }

        // 初始化模态框打开按钮 - 使用ID选择器
        const contactBtn = document.getElementById('contact-btn');
        const navContactBtn = document.getElementById('nav-contact-btn');
        
        if (contactBtn) {
            contactBtn.addEventListener('click', () => {
                if (contactModal) {
                    contactModal.showModal();
                }
            });
        }
        
        if (navContactBtn) {
            navContactBtn.addEventListener('click', () => {
                if (contactModal) {
                    contactModal.showModal();
                }
            });
        }
    }
}

// 梦幻光影背景控制器
class DreamBackgroundController {
    constructor() {
        this.canvas = document.getElementById('dream-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.lights = [];
        this.curves = [];
        this.init();
    }

    init() {
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        this.createLights();
        this.createCurves();
        this.animate();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createLights() {
        for (let i = 0; i < 5; i++) {
            this.lights.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                radius: Math.random() * 50 + 20,
                color: `hsl(${Math.random() * 60 + 180}, 70%, 60%)`,
                speed: Math.random() * 2 + 1,
                angle: Math.random() * Math.PI * 2
            });
        }
    }

    createCurves() {
        for (let i = 0; i < 3; i++) {
            this.curves.push({
                points: this.generateCurvePoints(),
                color: `hsla(${Math.random() * 60 + 180}, 70%, 60%, 0.3)`,
                speed: Math.random() * 0.5 + 0.2
            });
        }
    }

    generateCurvePoints() {
        const points = [];
        for (let i = 0; i < 100; i++) {
            points.push({
                x: (i / 100) * window.innerWidth,
                y: Math.sin(i * 0.1) * 100 + window.innerHeight / 2
            });
        }
        return points;
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // 绘制光影
        this.drawLights();
        this.drawCurves();
        
        requestAnimationFrame(() => this.animate());
    }

    drawLights() {
        this.lights.forEach(light => {
            light.angle += light.speed * 0.02;
            light.x += Math.cos(light.angle) * light.speed;
            light.y += Math.sin(light.angle) * light.speed;

            if (light.x < -100) light.x = window.innerWidth + 100;
            if (light.x > window.innerWidth + 100) light.x = -100;
            if (light.y < -100) light.y = window.innerHeight + 100;
            if (light.y > window.innerHeight + 100) light.y = -100;

            const gradient = this.ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, light.radius);
            gradient.addColorStop(0, light.color);
            gradient.addColorStop(1, 'transparent');

            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(light.x, light.y, light.radius, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }

    drawCurves() {
        this.curves.forEach(curve => {
            this.ctx.strokeStyle = curve.color;
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            
            curve.points.forEach((point, index) => {
                const y = point.y + Math.sin(Date.now() * 0.001 + index * 0.1) * 20;
                if (index === 0) {
                    this.ctx.moveTo(point.x, y);
                } else {
                    this.ctx.lineTo(point.x, y);
                }
            });
            
            this.ctx.stroke();
        });
    }
}

// 二维码控制器
class QRCodeController {
    constructor() {
        this.init();
    }

    init() {
        this.setupQRCodeListeners();
    }

    setupQRCodeListeners() {
        // 为抖音和小红书二维码添加点击事件
        const qrCodes = document.querySelectorAll('.qr-code');
        qrCodes.forEach(qr => {
            qr.addEventListener('click', (e) => {
                e.preventDefault();
                this.showQRModal(qr.querySelector('img').src, qr.dataset.title);
            });
        });
    }

    showQRModal(imageSrc, title) {
        const modal = document.getElementById('qr-modal');
        const content = document.getElementById('qr-content');
        
        content.innerHTML = `
            <div class="qr-modal-content">
                <img src="${imageSrc}" alt="${title}" class="w-64 h-64 object-contain rounded-lg shadow-lg">
                <p class="text-center mt-2 text-gray-300">${title}</p>
            </div>
        `;
        
        modal.showModal();
        
        // 添加点击外部关闭功能
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.close();
            }
        });

        // 添加关闭按钮事件监听器
        const closeBtn = document.getElementById('close-qr-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.close();
            });
        }
    }
}

// AI聊天控制器
class AIChatController {
    constructor() {
        this.messages = [];
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupDraggable();
    }

    setupEventListeners() {
        const assistant = document.getElementById('ai-assistant');
        const modal = document.getElementById('ai-chat-modal');
        const sendBtn = document.getElementById('send-btn');
        const chatInput = document.getElementById('chat-input');

        // 点击助手打开聊天框
        assistant.addEventListener('click', () => {
            modal.showModal();
            chatInput.focus();
        });

        // 发送消息
        sendBtn.addEventListener('click', () => this.sendMessage());
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });

        // 点击模态框外部关闭
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.close();
            }
        });

        // 添加关闭按钮事件（如果有的话）
        const closeButtons = modal.querySelectorAll('[onclick*="close"], .btn-close');
        closeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.close();
            });
        });
    }

    setupDraggable() {
        const assistant = document.getElementById('ai-assistant');
        let isDragging = false;
        let startX, startY, startLeft, startTop;

        assistant.addEventListener('mousedown', (e) => {
            isDragging = true;
            assistant.classList.add('dragging');
            startX = e.clientX;
            startY = e.clientY;
            startLeft = parseInt(assistant.style.left) || 16;
            startTop = parseInt(assistant.style.top) || window.innerHeight - 80;
            e.preventDefault();
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            
            let newLeft = startLeft + deltaX;
            let newTop = startTop + deltaY;
            
            // 边界检查
            newLeft = Math.max(0, Math.min(window.innerWidth - 64, newLeft));
            newTop = Math.max(0, Math.min(window.innerHeight - 64, newTop));
            
            assistant.style.left = newLeft + 'px';
            assistant.style.top = newTop + 'px';
        });

        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                assistant.classList.remove('dragging');
            }
        });
    }

    sendMessage() {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();
        
        if (!message) return;
        
        this.addMessage(message, 'user');
        input.value = '';
        
        // 显示打字机效果
        const typingIndicator = this.addTypingIndicator();
        
        // 模拟AI回复
        setTimeout(() => {
            this.removeTypingIndicator();
            this.addMessage('这是一个模拟的AI回复。您可以在这里集成真实的AI接口。', 'ai');
        }, 1500);
    }

    addMessage(text, sender) {
        const messagesContainer = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}-message`;
        
        if (sender === 'ai') {
            // AI消息（左侧）
            messageDiv.innerHTML = `
                <div class="flex items-start gap-3">
                    <div class="w-8 h-8 rounded-full bg-gradient-to-br from-tech-blue to-tech-purple p-0.5 flex-shrink-0">
                        <img src="./images/头像.png" alt="AI助手" class="w-full h-full rounded-full object-cover">
                    </div>
                    <div class="flex-1">
                        <div class="bg-gray-700/50 rounded-lg p-3 text-white">
                            <p class="text-sm">${text}</p>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // 用户消息（右侧）
            messageDiv.innerHTML = `
                <div class="flex items-start gap-3 justify-end">
                    <div class="flex-1 max-w-xs">
                        <div class="bg-gradient-to-r from-tech-blue to-tech-purple rounded-lg p-3 text-white">
                            <p class="text-sm">${text}</p>
                        </div>
                    </div>
                    <div class="w-8 h-8 rounded-full user-avatar flex-shrink-0">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
            `;
        }
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // 添加打字机效果
    addTypingIndicator() {
        const messagesContainer = document.getElementById('chat-messages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-message ai-message typing-indicator-container';
        typingDiv.innerHTML = `
            <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-tech-blue to-tech-purple p-0.5 flex-shrink-0">
                    <img src="./images/头像.png" alt="AI助手" class="w-full h-full rounded-full object-cover">
                </div>
                <div class="flex-1">
                    <div class="bg-gray-700/50 rounded-lg p-3">
                        <div class="typing-indicator">
                            <div class="typing-dot"></div>
                            <div class="typing-dot"></div>
                            <div class="typing-dot"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return typingDiv;
    }

    removeTypingIndicator() {
        const typingIndicator = document.querySelector('.typing-indicator-container');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
}

// Three.js几何体背景控制器
class ThreeJSBackgroundController {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.geometries = [];
        this.animationId = null;
        this.isInitialized = false;
        this.init();
    }

    init() {
        if (this.isInitialized) return;
        
        // 创建场景
        this.scene = new THREE.Scene();
        
        // 创建相机
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 5;
        
        // 创建渲染器
        this.renderer = new THREE.WebGLRenderer({ 
            alpha: true, 
            antialias: true 
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x000000, 0);
        
        // 添加到页面
        const container = document.getElementById('threejs-bg');
        if (container) {
            container.appendChild(this.renderer.domElement);
        }
        
        // 创建几何体
        this.createGeometries();
        
        // 开始动画
        this.animate();
        
        // 监听窗口大小变化
        window.addEventListener('resize', () => this.onWindowResize());
        
        this.isInitialized = true;
    }

    createGeometries() {
        // 创建多种几何体
        const geometries = [
            { type: 'box', color: 0x00d4ff, position: [-3, 0, 0], rotation: [0.01, 0.01, 0.01] },
            { type: 'sphere', color: 0x8b5cf6, position: [3, 0, 0], rotation: [0.01, 0.01, 0.01] },
            { type: 'torus', color: 0x10b981, position: [0, -2, 0], rotation: [0.01, 0.01, 0.01] },
            { type: 'octahedron', color: 0xf59e0b, position: [0, 2, 0], rotation: [0.01, 0.01, 0.01] },
            { type: 'icosahedron', color: 0xec4899, position: [-2, -1, 0], rotation: [0.01, 0.01, 0.01] },
            { type: 'tetrahedron', color: 0x06b6d4, position: [2, 1, 0], rotation: [0.01, 0.01, 0.01] }
        ];

        geometries.forEach((geo, index) => {
            let geometry, material, mesh;
            
            switch (geo.type) {
                case 'box':
                    geometry = new THREE.BoxGeometry(1, 1, 1);
                    break;
                case 'sphere':
                    geometry = new THREE.SphereGeometry(0.7, 32, 32);
                    break;
                case 'torus':
                    geometry = new THREE.TorusGeometry(0.5, 0.2, 16, 100);
                    break;
                case 'octahedron':
                    geometry = new THREE.OctahedronGeometry(0.6);
                    break;
                case 'icosahedron':
                    geometry = new THREE.IcosahedronGeometry(0.5);
                    break;
                case 'tetrahedron':
                    geometry = new THREE.TetrahedronGeometry(0.6);
                    break;
            }
            
            // 创建材质
            material = new THREE.MeshPhongMaterial({
                color: geo.color,
                transparent: true,
                opacity: 0.6,
                wireframe: true,
                wireframeLinewidth: 2
            });
            
            // 创建网格
            mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(...geo.position);
            mesh.userData = {
                originalRotation: [...geo.rotation],
                rotationSpeed: {
                    x: (Math.random() - 0.5) * 0.02,
                    y: (Math.random() - 0.5) * 0.02,
                    z: (Math.random() - 0.5) * 0.02
                },
                pulseSpeed: Math.random() * 0.02 + 0.01,
                pulsePhase: Math.random() * Math.PI * 2
            };
            
            this.geometries.push(mesh);
            this.scene.add(mesh);
        });
        
        // 添加环境光
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        this.scene.add(ambientLight);
        
        // 添加点光源
        const pointLight = new THREE.PointLight(0x00d4ff, 1, 100);
        pointLight.position.set(0, 0, 5);
        this.scene.add(pointLight);
        
        // 添加第二个点光源
        const pointLight2 = new THREE.PointLight(0x8b5cf6, 1, 100);
        pointLight2.position.set(5, 5, 5);
        this.scene.add(pointLight2);
    }

    animate() {
        this.animationId = requestAnimationFrame(() => this.animate());
        
        // 更新几何体动画
        this.geometries.forEach((mesh, index) => {
            // 旋转
            mesh.rotation.x += mesh.userData.rotationSpeed.x;
            mesh.rotation.y += mesh.userData.rotationSpeed.y;
            mesh.rotation.z += mesh.userData.rotationSpeed.z;
            
            // 脉冲效果
            mesh.userData.pulsePhase += mesh.userData.pulseSpeed;
            const scale = 1 + Math.sin(mesh.userData.pulsePhase) * 0.1;
            mesh.scale.set(scale, scale, scale);
            
            // 材质颜色渐变
            const time = Date.now() * 0.001;
            const hue = (time * 0.1 + index * 0.3) % 1;
            mesh.material.color.setHSL(hue, 0.7, 0.5);
        });
        
        // 相机轻微移动
        const time = Date.now() * 0.0005;
        this.camera.position.x = Math.sin(time) * 0.5;
        this.camera.position.y = Math.cos(time * 0.7) * 0.3;
        this.camera.lookAt(0, 0, 0);
        
        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.renderer) {
            this.renderer.dispose();
        }
    }
}

// 主应用类
class ResumeApp {
    constructor() {
        this.animationController = null;
        this.chartController = null;
        this.navigationController = null;
        this.timelineController = null;
        this.modalController = null;
        this.dreamBackgroundController = null;
        this.qrCodeController = null;
        this.aiChatController = null;
        this.threeJSBackgroundController = null; // 新增Three.js背景控制器
        this.init();
    }

    async init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeApp());
        } else {
            this.initializeApp();
        }
    }

    initializeApp() {
        try {
            // 初始化梦幻光影背景
            this.dreamBackgroundController = new DreamBackgroundController();
            
            // 初始化二维码控制器
            this.qrCodeController = new QRCodeController();
            
            // 初始化AI聊天控制器
            this.aiChatController = new AIChatController();

            // 初始化模态框控制器
            this.modalController = new ModalController();

            // 初始化Three.js背景控制器
            this.threeJSBackgroundController = new ThreeJSBackgroundController();

            // 初始化AOS动画库
            if (typeof AOS !== 'undefined') {
                AOS.init({
                    duration: 800,
                    easing: 'ease-in-out',
                    once: true,
                    offset: 100
                });
            }

            // 初始化其他控制器
            this.animationController = new AnimationController();
            this.chartController = new ChartController();
            this.navigationController = new NavigationController();
            this.timelineController = new TimelineController();

            console.log('简历应用初始化完成');
        } catch (error) {
            console.error('应用初始化失败:', error);
        }
    }
}

// 启动应用
const app = new ResumeApp();

// 导出模块（如果需要）
export { AnimationController, ChartController, NavigationController, ResumeApp, TimelineController };

