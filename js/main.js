/**
 * 澄迈老城周末咖啡摊网站脚本
 * 实现导航、菜单切换、动画效果等交互功能
 */

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', () => {
    console.log('咖啡网站脚本已加载');
    
    // 初始化所有功能
    initNavigation();
    initMobileMenu();
    initMenuTabs();
    initScrollAnimations();
    initContactForm();
    initBackToTop();
    
    // 首页banner加载后触发动画
    window.addEventListener('load', () => {
        animateBanner();
    });
});

/**
 * 导航相关功能
 */
function initNavigation() {
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav-list a');
    
    // 滚动时改变导航栏样式
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            header.style.padding = '10px 0';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
            header.style.padding = '15px 0';
        }
    });
    
    // 平滑滚动到锚点
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // 获取目标节点
            const targetId = link.getAttribute('href');
            const targetPosition = document.querySelector(targetId).offsetTop;
            
            // 关闭移动端菜单
            const mobileBtn = document.querySelector('.mobile-menu-btn');
            const navList = document.querySelector('.nav-list');
            if (mobileBtn.classList.contains('active')) {
                mobileBtn.classList.remove('active');
                navList.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
            
            // 平滑滚动
            window.scrollTo({
                top: targetPosition - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // 滚动时更新当前导航项
    updateActiveNavOnScroll();
}

/**
 * 监听滚动更新当前导航项
 */
function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-list a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = '#' + section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * 移动端菜单功能
 */
function initMobileMenu() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');
    
    mobileBtn.addEventListener('click', () => {
        mobileBtn.classList.toggle('active');
        navList.classList.toggle('active');
        
        // 菜单开启时禁止滚动
        if (navList.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
}

/**
 * 菜单标签切换功能
 */
function initMenuTabs() {
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuCategories = document.querySelectorAll('.menu-category');
    
    menuTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 移除所有active类
            menuTabs.forEach(t => t.classList.remove('active'));
            menuCategories.forEach(c => c.classList.remove('active'));
            
            // 添加active类到当前项
            tab.classList.add('active');
            const category = tab.getAttribute('data-category');
            document.getElementById(`${category}-coffee`).classList.add('active');
        });
    });
}

/**
 * 滚动动画效果
 */
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }
    
    // 初始检查
    checkReveal();
    
    // 滚动时检查
    window.addEventListener('scroll', checkReveal);
}

/**
 * Banner动画
 */
function animateBanner() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        element.style.opacity = 1;
    });
}

/**
 * 联系表单处理
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // 获取表单数据
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            };
            
            // 这里可以添加表单验证
            if (!formData.name || !formData.phone || !formData.message) {
                alert('请填写完整的表单信息');
                return;
            }
            
            // 表单提交模拟
            console.log('表单提交数据:', formData);
            
            // 显示提交成功消息
            alert('感谢您的留言，我们会尽快联系您！');
            
            // 重置表单
            contactForm.reset();
        });
    }
}

/**
 * 回到顶部按钮
 */
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Syntax self-check
try {
    console.assert(typeof initNavigation === 'function', 'initNavigation function is defined');
    console.assert(typeof initScrollAnimations === 'function', 'initScrollAnimations function is defined');
    console.log("Syntax check passed");
}
catch (error) {
    console.error("Syntax error:", error.message);
}