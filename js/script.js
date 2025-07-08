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
            labels: ['React项目', 'Vue项目', '3D可视化', '数据大屏', 'WebGIS', '移动端'],
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
        this.init();
    }

    init() {
        this.setupScrollEffects();
        this.setupSmoothScrolling();
        this.setupBackToTop();
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

// 主应用类
class ResumeApp {
    constructor() {
        this.animationController = null;
        this.chartController = null;
        this.navigationController = null;
        this.timelineController = null;
        this.init();
    }

    async init() {
        // 等待DOM加载完成
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeApp());
        } else {
            this.initializeApp();
        }
    }

    initializeApp() {
        try {
            // 初始化AOS动画库
            if (typeof AOS !== 'undefined') {
                AOS.init({
                    duration: 800,
                    easing: 'ease-in-out',
                    once: true,
                    offset: 100
                });
            }

            // 初始化各个控制器
            this.animationController = new AnimationController();
            this.navigationController = new NavigationController();
            this.timelineController = new TimelineController();

            // 延迟初始化图表，确保Chart.js加载完成
            setTimeout(() => {
                if (typeof Chart !== 'undefined') {
                    this.chartController = new ChartController();
                }
            }, 500);

            console.log('Resume app initialized successfully');
        } catch (error) {
            console.error('Error initializing resume app:', error);
        }
    }
}

// 启动应用
const app = new ResumeApp();

// 导出模块（如果需要）
export { ResumeApp, AnimationController, ChartController, NavigationController, TimelineController };