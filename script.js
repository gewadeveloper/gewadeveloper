// =============================================================
// Data
// =============================================================
const SKILLS = [
  { name: 'HTML', icon: 'devicon-html5-plain colored', level: 90 },
  { name: 'CSS', icon: 'devicon-css3-plain colored', level: 85 },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored', level: 80 },
  { name: 'React', icon: 'devicon-react-original colored', level: 75 },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored', level: 70 },
  { name: 'Express', icon: 'devicon-express-original', level: 65 },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored', level: 70 },
  { name: 'Git', icon: 'devicon-git-plain colored', level: 85 },
  { name: 'GitHub', icon: 'devicon-github-original', level: 85 },
  { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored', level: 90 },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored', level: 85 },
  { name: 'REST API', icon: 'fa-solid fa-server', level: 75 },
  { name: 'AI Tools', icon: 'fa-solid fa-robot', level: 80 },
  { name: 'VS Code', icon: 'devicon-vscode-plain colored', level: 95 },
  { name: 'Responsive Design', icon: 'fa-solid fa-mobile-screen', level: 90 },
];

const SERVICES = [
  { title: 'Frontend Development', desc: 'Building responsive, interactive, and modern user interfaces using React, Tailwind CSS, and Framer Motion.', icon: 'fa-solid fa-laptop-code' },
  { title: 'Backend Development', desc: 'Creating robust APIs and server-side logic with Node.js, Express, and connecting to MongoDB databases.', icon: 'fa-solid fa-server' },
  { title: 'Full Stack Development', desc: 'End-to-end web application development, combining intuitive frontends with powerful backends.', icon: 'fa-solid fa-layer-group' },
  { title: 'Responsive Website', desc: 'Ensuring your website looks perfect and functions flawlessly across all devices and screen sizes.', icon: 'fa-solid fa-mobile-screen' },
  { title: 'Website Redesign', desc: 'Transforming outdated sites into modern, high-performance, and visually appealing web experiences.', icon: 'fa-solid fa-paintbrush' },
  { title: 'API Integration', desc: 'Connecting third-party services and APIs to add powerful functionality to your applications.', icon: 'fa-solid fa-plug' },
  { title: 'Portfolio Website', desc: 'Crafting personal brands with stunning portfolio sites to showcase your work and attract clients.', icon: 'fa-solid fa-globe' },
  { title: 'Landing Page', desc: 'Designing high-converting landing pages tailored for marketing campaigns and product launches.', icon: 'fa-solid fa-rocket' },
  { title: 'UI Implementation', desc: 'Pixel-perfect translation of Figma designs into clean, semantic, and maintainable HTML/CSS/JS.', icon: 'fa-solid fa-code' },
];

const PROJECTS = [
  { title: 'E-Commerce Platform', desc: 'A full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment gateway integration.', tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'], gradient: 'linear-gradient(135deg, rgba(37,99,235,0.2), rgba(147,51,234,0.2))' },
  { title: 'Task Manager App', desc: 'A productivity tool to manage daily tasks, projects, and deadlines. Features drag-and-drop boards and progress tracking.', tech: ['React', 'Express', 'REST API'], gradient: 'linear-gradient(135deg, rgba(8,145,178,0.2), rgba(37,99,235,0.2))' },
  { title: 'Developer Portfolio', desc: 'A premium, dark-themed personal portfolio website with complex animations, glassmorphism UI, and responsive design.', tech: ['React', 'Framer Motion', 'Tailwind'], gradient: 'linear-gradient(135deg, rgba(2,132,199,0.2), rgba(79,70,229,0.2))' },
  { title: 'Blog Application', desc: 'A content management system allowing users to write, publish, and comment on articles with rich text editing capabilities.', tech: ['Node.js', 'MongoDB', 'Bootstrap'], gradient: 'linear-gradient(135deg, rgba(79,70,229,0.2), rgba(147,51,234,0.2))' },
];

const EXPERIENCES = [
  { year: '2026', title: 'Started Full Stack Web Development', org: 'NexSkill', icon: 'fa-solid fa-graduation-cap', status: 'current', details: ['Learning HTML, CSS & JavaScript fundamentals', 'Building responsive web interfaces', 'Exploring modern frontend frameworks', 'Developing functional projects'] },
  { year: 'Future', title: 'Freelance Web Developer', org: 'Self Employed', icon: 'fa-solid fa-code', status: 'upcoming', details: ['Delivering custom web solutions to clients', 'Building full-stack applications', 'Creating responsive & performant UI/UX'] },
  { year: 'Future Goal', title: 'Software Engineer', org: 'Tech Industry', icon: 'fa-solid fa-briefcase', status: 'upcoming', details: ['Working on large-scale applications', 'Collaborating with professional teams', 'Solving complex technical challenges'] },
];

const CERTIFICATES = [
  { title: 'Web Development Fundamentals', issuer: 'NexSkill', date: '2026', status: 'In Progress' },
  { title: 'JavaScript Advanced Concepts', issuer: 'Online Academy', date: 'Pending', status: 'Upcoming' },
  { title: 'React Developer Certification', issuer: 'Tech Institute', date: 'Pending', status: 'Upcoming' },
];

const STATS = [
  { label: 'Projects Completed', value: 5 },
  { label: 'Technologies Learned', value: 15 },
  { label: 'Hours of Coding', value: 500 },
  { label: 'GitHub Repositories', value: 10 },
  { label: 'Happy Clients', value: 3 },
];

const TESTIMONIALS = [
  { name: 'Client One', role: 'Business Owner', quote: 'Muhammad built an incredible landing page for our new product. His attention to detail and modern design aesthetic really helped our brand stand out.', initials: 'C1', gradient: 'linear-gradient(135deg,#3b82f6,#06b6d4)' },
  { name: 'Project Manager', role: 'Tech Startup', quote: 'Working with Rafay was a great experience. He is a fast learner, communicates well, and delivers high-quality code. A promising full-stack developer.', initials: 'PM', gradient: 'linear-gradient(135deg,#a855f7,#ec4899)' },
  { name: 'Peer Developer', role: 'NexSkill Colleague', quote: "Rafay's problem-solving skills are top-notch. He's always ready to help debug complex issues and has a deep understanding of modern web technologies.", initials: 'PD', gradient: 'linear-gradient(135deg,#22c55e,#10b981)' },
];

const BLOG_POSTS = [
  { title: 'Mastering React Server Components', excerpt: 'An in-depth look at how React Server Components are changing the way we build web applications.', date: 'Oct 15, 2026', category: 'React', gradient: 'linear-gradient(135deg, rgba(37,99,235,0.2), rgba(8,145,178,0.2))' },
  { title: 'The Future of Web Animation', excerpt: 'Exploring Framer Motion and other modern tools to create seamless, performant web animations.', date: 'Sep 28, 2026', category: 'Design', gradient: 'linear-gradient(135deg, rgba(147,51,234,0.2), rgba(219,39,119,0.2))' },
  { title: 'Building Scalable APIs with Node.js', excerpt: 'Best practices and architectural patterns for developing enterprise-grade backends.', date: 'Sep 10, 2026', category: 'Backend', gradient: 'linear-gradient(135deg, rgba(5,150,105,0.2), rgba(13,148,136,0.2))' },
];

const CONTACT_INFO = [
  { icon: 'fa-solid fa-envelope', label: 'Email', value: 'gewadeveloper@gmail.com', href: 'mailto:gewadeveloper@gmail.com' },
  { icon: 'fa-solid fa-location-dot', label: 'Location', value: 'Lahore, Pakistan', href: '#' },
  { icon: 'fa-brands fa-linkedin', label: 'LinkedIn', value: 'Gewa Developer', href: '#' },
  { icon: 'fa-brands fa-github', label: 'GitHub', value: '@gewadeveloper', href: '#' },
  { icon: 'fa-brands fa-whatsapp', label: 'WhatsApp', value: '+92 313 4117775', href: 'https://wa.me/923134117775' },
];

const ROLES = ['Full Stack Web Developer', 'Freelancer', 'Problem Solver', 'Creative Developer', 'AI Enthusiast'];

// =============================================================
// Render dynamic sections
// =============================================================
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  grid.innerHTML = SKILLS.map(s => `
    <div class="skill-card">
      <div class="skill-icon"><i class="${s.icon}"></i></div>
      <h4 class="skill-name">${s.name}</h4>
      <div class="skill-bar-track"><div class="skill-bar-fill" data-level="${s.level}"></div></div>
    </div>
  `).join('');
}

function renderGithubGraph() {
  const wrap = document.getElementById('github-graph');
  let html = '';
  for (let w = 0; w < 52; w++) {
    html += '<div class="gh-week">';
    for (let d = 0; d < 7; d++) {
      const r = Math.random();
      let cls = 'gh-day';
      if (r > 0.8) cls += ' gh-3';
      else if (r > 0.5) cls += ' gh-2';
      else if (r > 0.3) cls += ' gh-1';
      html += `<div class="${cls}" title="Contribution placeholder"></div>`;
    }
    html += '</div>';
  }
  wrap.innerHTML = html;
}

function renderServices() {
  const grid = document.getElementById('services-grid');
  grid.innerHTML = SERVICES.map(s => `
    <div class="service-card fade-up">
      <div class="service-icon-wrap"><i class="${s.icon}"></i></div>
      <h4 class="service-title">${s.title}</h4>
      <p class="service-desc">${s.desc}</p>
      <div class="service-accent"></div>
    </div>
  `).join('');
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = PROJECTS.map(p => `
    <div class="project-card fade-up">
      <div class="project-visual" style="background:${p.gradient}">
        <div class="project-visual-dots">
          <span style="background:rgba(239,68,68,0.8)"></span>
          <span style="background:rgba(234,179,8,0.8)"></span>
          <span style="background:rgba(34,197,94,0.8)"></span>
        </div>
        <i class="fa-solid fa-folder folder-icon"></i>
      </div>
      <div class="project-body">
        <h4 class="project-title">${p.title}</h4>
        <p class="project-desc">${p.desc}</p>
        <div class="tech-tags">${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
        <div class="project-links">
          <a href="#"><i class="fa-brands fa-github"></i> Code</a>
          <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>
        </div>
      </div>
    </div>
  `).join('');
}

function renderTimeline() {
  const wrap = document.getElementById('timeline');
  wrap.innerHTML = EXPERIENCES.map((exp, i) => `
    <div class="timeline-item ${i % 2 === 0 ? 'reverse' : ''}">
      <div class="timeline-dot ${exp.status === 'current' ? 'current' : ''}"><div class="inner"></div></div>
      <div class="timeline-content fade-up">
        <div class="box">
          <div class="timeline-year-row">
            <span class="timeline-year ${exp.status === 'current' ? 'current' : ''}">${exp.year}</span>
            ${exp.status === 'upcoming' ? '<span class="timeline-progress">In Progress</span>' : ''}
          </div>
          <h4 class="timeline-title">${exp.title}</h4>
          <p class="timeline-org"><i class="${exp.icon}"></i> ${exp.org}</p>
          <ul class="timeline-details">
            ${exp.details.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `).join('');
}

function renderCertificates() {
  const grid = document.getElementById('certs-grid');
  grid.innerHTML = CERTIFICATES.map((c, i) => `
    <div class="cert-card fade-up">
      <div class="inner">
        <div class="cert-icon-wrap ${i === 0 ? 'gold' : 'plain'}">
          <i class="fa-solid ${i === 0 ? 'fa-award' : 'fa-certificate'}"></i>
        </div>
        <h4 class="cert-title">${c.title}</h4>
        <p class="cert-issuer">Issued by: <span>${c.issuer}</span></p>
        <div class="cert-footer">
          <span class="cert-date">${c.date}</span>
          <span class="cert-status ${c.status === 'In Progress' ? 'active' : ''}">${c.status}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderStats() {
  const grid = document.getElementById('stats-grid');
  grid.innerHTML = STATS.map(s => `
    <div class="fade-up">
      <span class="stat-value text-gradient glow-text" data-target="${s.value}">0+</span>
      <p class="stat-label">${s.label}</p>
    </div>
  `).join('');
}

function renderTestimonials() {
  const row = document.getElementById('testimonials-row');
  row.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card fade-up">
      <i class="fa-solid fa-quote-left quote-icon"></i>
      <div class="testimonial-head">
        <div class="testimonial-avatar" style="background:${t.gradient}">${t.initials}</div>
        <div>
          <h4 class="testimonial-name">${t.name}</h4>
          <p class="testimonial-role">${t.role}</p>
        </div>
      </div>
      <p class="testimonial-quote">"${t.quote}"</p>
    </div>
  `).join('');
}

function renderBlog() {
  const grid = document.getElementById('blog-grid');
  grid.innerHTML = BLOG_POSTS.map(p => `
    <article class="blog-card fade-up">
      <div class="blog-visual" style="background:${p.gradient}"><span>${p.category}</span></div>
      <div class="blog-body">
        <div class="blog-meta">
          <span class="cat">${p.category}</span>
          <span class="date"><i class="fa-solid fa-calendar-days"></i> ${p.date}</span>
        </div>
        <h4 class="blog-title">${p.title}</h4>
        <p class="blog-excerpt">${p.excerpt}</p>
      </div>
    </article>
  `).join('');
}

function renderContactInfo() {
  const wrap = document.getElementById('contact-info-list');
  wrap.innerHTML = CONTACT_INFO.map(c => `
    <a href="${c.href}" class="contact-info-item">
      <div class="contact-info-icon"><i class="${c.icon}"></i></div>
      <div>
        <h5 class="contact-info-label">${c.label}</h5>
        <p class="contact-info-value">${c.value}</p>
      </div>
    </a>
  `).join('');
}

// =============================================================
// Loading screen
// =============================================================
function runLoadingScreen() {
  const bar = document.getElementById('loading-bar');
  const percent = document.getElementById('loading-percent');
  const screen = document.getElementById('loading-screen');
  const app = document.getElementById('app');
  let progress = 0;

  const timer = setInterval(() => {
    progress += Math.floor(Math.random() * 10) + 5;
    if (progress >= 100) {
      progress = 100;
      clearInterval(timer);
      bar.style.width = '100%';
      percent.textContent = '100%';
      setTimeout(() => {
        screen.classList.add('loaded');
        app.classList.remove('app-hidden');
        app.classList.add('app-visible');
        initScrollAnimations();
      }, 500);
      return;
    }
    bar.style.width = progress + '%';
    percent.textContent = progress + '%';
  }, 150);
}

// =============================================================
// Hero typing effect
// =============================================================
function runTypingEffect() {
  const el = document.getElementById('typed-text');
  let roleIndex = 0;
  let text = '';
  let isDeleting = false;

  function tick() {
    const currentRole = ROLES[roleIndex];

    if (!isDeleting && text === currentRole) {
      setTimeout(() => { isDeleting = true; tick(); }, 2000);
      return;
    } else if (isDeleting && text === '') {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % ROLES.length;
    }

    text = currentRole.substring(0, text.length + (isDeleting ? -1 : 1));
    el.textContent = text;

    const speed = isDeleting ? 50 : 100;
    setTimeout(tick, speed);
  }

  tick();
}

// =============================================================
// Navbar: scroll style, scroll-spy, mobile menu
// =============================================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const desktopLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.nav-link-mobile');
  const toggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-nav-menu');
  const sections = ['home', 'about', 'skills', 'services', 'projects', 'experience', 'certificates', 'testimonials', 'contact'];

  toggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    toggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  function setActive(id) {
    desktopLinks.forEach(l => l.classList.toggle('active', l.dataset.section === id));
    mobileLinks.forEach(l => l.classList.toggle('active', l.dataset.section === id));
  }

  function scrollToSection(e, href) {
    e.preventDefault();
    mobileMenu.classList.remove('open');
    toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    toggle.setAttribute('aria-expanded', 'false');

    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  }

  [...desktopLinks, ...mobileLinks].forEach(link => {
    link.addEventListener('click', (e) => scrollToSection(e, link.getAttribute('href')));
  });

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);

    let current = 'home';
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 150) current = id;
    }
    if (window.scrollY < 100) current = 'home';
    setActive(current);
  });
}

// =============================================================
// Scroll progress bar
// =============================================================
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
  });
}

// =============================================================
// Back to top
// =============================================================
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// =============================================================
// Animated particle background
// =============================================================
function initAnimatedBackground() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  let particles = [];

  function buildParticles() {
    const count = Math.floor((width * height) / 15000);
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }
  }
  buildParticles();

  function render() {
    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = 'rgba(0, 191, 255, 0.03)';
    ctx.lineWidth = 1;
    const gridSize = 50;
    ctx.beginPath();
    for (let x = 0; x <= width; x += gridSize) { ctx.moveTo(x, 0); ctx.lineTo(x, height); }
    for (let y = 0; y <= height; y += gridSize) { ctx.moveTo(0, y); ctx.lineTo(width, y); }
    ctx.stroke();

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 191, 255, ${p.opacity})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(0, 191, 255, 0.8)';
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    requestAnimationFrame(render);
  }
  render();

  window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    buildParticles();
  });
}

// =============================================================
// Scroll-triggered fade-up animations + skill bars + counters
// =============================================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '-50px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Skill bars
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target.querySelector('.skill-bar-fill');
        if (fill) fill.style.width = fill.dataset.level + '%';
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.skill-card').forEach(el => skillObserver.observe(el));

  // Stat counters
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.stat-value').forEach(el => statObserver.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 2000;
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const pct = Math.min(progress / duration, 1);
    const easeOut = pct === 1 ? 1 : 1 - Math.pow(2, -10 * pct);
    const value = Math.floor(easeOut * target);
    el.textContent = value + '+';
    if (pct < 1) requestAnimationFrame(step);
    else el.textContent = target + '+';
  }
  requestAnimationFrame(step);
}

// =============================================================
// Contact form (static placeholder submit)
// =============================================================
function initContactForm() {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
    alert('Message sent successfully! (Placeholder action — connect this form to a backend or a service like Formspree to make it live.)');
  });
}

// =============================================================
// Init
// =============================================================
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderGithubGraph();
  renderServices();
  renderProjects();
  renderTimeline();
  renderCertificates();
  renderStats();
  renderTestimonials();
  renderBlog();
  renderContactInfo();

  runTypingEffect();
  initNavbar();
  initScrollProgress();
  initBackToTop();
  initAnimatedBackground();
  initContactForm();

  runLoadingScreen();
});
