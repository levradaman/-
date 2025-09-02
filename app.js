// Максимально расширенные данные приложения
const appData = {
  "platforms": [
    // Российские платформы
    {
      "name": "Яндекс Дзен",
      "region": "RU",
      "type": "Текстовая платформа",
      "max_posts_per_day": 96,
      "posting_interval": "Каждые 15 минут",
      "monthly_audience_russia": "74%",
      "monthly_audience_global": "75 млн",
      "engagement_rate": "5.2%",
      "traffic_potential": "9.5",
      "difficulty": "Средний",
      "monetization": "Партнерская программа, реклама",
      "character_limit": "3500-6000 знаков",
      "blocked_in_rf": false,
      "content_length": "long",
      "best_for_ru": true,
      "best_for_usa": false,
      "automation_risk": "Низкий",
      "api_available": true,
      "cost_per_click": 0.15
    },
    {
      "name": "ВКонтакте",
      "region": "RU", 
      "type": "Социальная сеть",
      "max_posts_per_day": "Без лимитов",
      "posting_interval": "2-4 часа",
      "monthly_audience_russia": "75%",
      "monthly_audience_global": "100 млн",
      "engagement_rate": "3.8%",
      "traffic_potential": "8.2",
      "difficulty": "Средний",
      "monetization": "Реклама, донаты, VK Pay",
      "character_limit": "15000 символов",
      "blocked_in_rf": false,
      "content_length": "long",
      "best_for_ru": true,
      "best_for_usa": false,
      "automation_risk": "Средний",
      "api_available": true,
      "cost_per_click": 0.08
    },
    {
      "name": "Telegram",
      "region": "Global",
      "type": "Мессенджер",
      "max_posts_per_day": "Без лимитов",
      "posting_interval": "Без ограничений",
      "monthly_audience_russia": "74%",
      "monthly_audience_global": "900 млн",
      "engagement_rate": "6.8%",
      "traffic_potential": "9.8",
      "difficulty": "Высокий",
      "monetization": "Реклама, подписки",
      "character_limit": "4096 символов",
      "blocked_in_rf": false,
      "content_length": "long",
      "best_for_ru": true,
      "best_for_usa": true,
      "automation_risk": "Высокий",
      "api_available": true,
      "cost_per_click": 0.12
    },
    {
      "name": "TikTok",
      "region": "Global",
      "type": "Короткие видео",
      "max_posts_per_day": 4,
      "posting_interval": "1-4 видео в день",
      "monthly_audience_russia": "25%",
      "monthly_audience_global": "1 млрд",
      "engagement_rate": "5.96%",
      "traffic_potential": "9.3",
      "difficulty": "Средний",
      "monetization": "Creator Fund, бренды",
      "character_limit": "2200 символов",
      "blocked_in_rf": false,
      "content_length": "short",
      "best_for_ru": true,
      "best_for_usa": true,
      "automation_risk": "Очень высокий",
      "api_available": false,
      "cost_per_click": 0.25
    },
    {
      "name": "YouTube",
      "region": "Global", 
      "type": "Видеоплатформа",
      "max_posts_per_day": 3,
      "posting_interval": "1-3 видео в день",
      "monthly_audience_russia": "85%",
      "monthly_audience_global": "2.7 млрд",
      "engagement_rate": "4.2%",
      "traffic_potential": "9.8",
      "difficulty": "Высокий",
      "monetization": "AdSense, спонсорство",
      "character_limit": "Видео до 12 часов",
      "blocked_in_rf": false,
      "content_length": "long",
      "best_for_ru": true,
      "best_for_usa": true,
      "automation_risk": "Средний",
      "api_available": true,
      "cost_per_click": 0.30
    },
    {
      "name": "Instagram",
      "region": "Global",
      "type": "Визуальная соцсеть",
      "max_posts_per_day": 10,
      "posting_interval": "1-2 поста в день",
      "monthly_audience_russia": "35%",
      "monthly_audience_global": "2 млрд",
      "engagement_rate": "1.22%",
      "traffic_potential": "8.8",
      "difficulty": "Высокий",
      "monetization": "Creator Fund, Shopping",
      "character_limit": "2200 символов",
      "blocked_in_rf": "Заблокирован",
      "content_length": "short",
      "best_for_ru": false,
      "best_for_usa": true,
      "automation_risk": "Очень высокий",
      "api_available": true,
      "cost_per_click": 0.45
    },
    {
      "name": "LinkedIn",
      "region": "Global",
      "type": "Профессиональная сеть",
      "max_posts_per_day": 2,
      "posting_interval": "1-2 поста в день",
      "monthly_audience_russia": "8%",
      "monthly_audience_global": "900 млн",
      "engagement_rate": "2.4%",
      "traffic_potential": "7.8",
      "difficulty": "Средний",
      "monetization": "Спонсорство, Lead Gen",
      "character_limit": "3000 символов",
      "blocked_in_rf": false,
      "content_length": "long",
      "best_for_ru": false,
      "best_for_usa": true,
      "automation_risk": "Средний",
      "api_available": true,
      "cost_per_click": 1.20
    },
    {
      "name": "Reddit",
      "region": "Global",
      "type": "Форум",
      "max_posts_per_day": "По карме",
      "posting_interval": "1-5 постов в день",
      "monthly_audience_russia": "2%",
      "monthly_audience_global": "1.1 млрд",
      "engagement_rate": "4.5%",
      "traffic_potential": "8.9",
      "difficulty": "Высокий",
      "monetization": "Реклама, Awards",
      "character_limit": "40000 символов",
      "blocked_in_rf": false,
      "content_length": "long",
      "best_for_ru": false,
      "best_for_usa": true,
      "automation_risk": "Очень высокий",
      "api_available": true,
      "cost_per_click": 0.35
    },
    {
      "name": "Medium",
      "region": "Global",
      "type": "Блог платформа",
      "max_posts_per_day": 5,
      "posting_interval": "1-2 статьи в день",
      "monthly_audience_russia": "5%",
      "monthly_audience_global": "100 млн",
      "engagement_rate": "3.9%",
      "traffic_potential": "8.1",
      "difficulty": "Средний",
      "monetization": "Partner Program",
      "character_limit": "Без лимитов",
      "blocked_in_rf": false,
      "content_length": "long",
      "best_for_ru": false,
      "best_for_usa": true,
      "automation_risk": "Низкий",
      "api_available": true,
      "cost_per_click": 0.40
    },
    {
      "name": "Twitter/X",
      "region": "Global",
      "type": "Микроблог",
      "max_posts_per_day": 50,
      "posting_interval": "Каждые 30 минут",
      "monthly_audience_russia": "12%",
      "monthly_audience_global": "550 млн",
      "engagement_rate": "0.9%",
      "traffic_potential": "7.5",
      "difficulty": "Высокий",
      "monetization": "X Premium, реклама",
      "character_limit": "280 символов",
      "blocked_in_rf": false,
      "content_length": "short",
      "best_for_ru": false,
      "best_for_usa": true,
      "automation_risk": "Очень высокий",
      "api_available": true,
      "cost_per_click": 0.55
    }
  ],
  
  "niches": {
    "popular": {
      "Психология и саморазвитие": {
        "audience": "Женщины и мужчины 25-45 лет",
        "traffic_potential": "9.2",
        "competition": "Очень высокая",
        "ru_platforms": ["Яндекс Дзен", "ВКонтакте", "Telegram"],
        "usa_platforms": ["Medium", "LinkedIn", "Instagram", "TikTok"],
        "monetization": "Курсы, коучинг, книги, консультации",
        "examples_ru": ["Как избавиться от тревожности", "Техники управления стрессом", "Повышение самооценки"],
        "examples_usa": ["Mindfulness for professionals", "Building resilience", "Emotional intelligence"],
        "difficulty": "Высокая",
        "avg_income_ru": "$2000-5000/месяц",
        "avg_income_usa": "$5000-15000/месяц"
      },
      "Юридические услуги": {
        "audience": "Предприниматели и физлица с правовыми вопросами",
        "traffic_potential": "8.2",
        "competition": "Высокая",
        "ru_platforms": ["LinkedIn", "Яндекс Дзен", "ВКонтакте"],
        "usa_platforms": ["LinkedIn", "Medium", "Twitter"],
        "monetization": "Юридические услуги, консультации, курсы",
        "examples_ru": ["Регистрация ООО", "Трудовые споры", "Защита прав потребителей"],
        "examples_usa": ["Business law basics", "Employment rights", "Contract review"],
        "difficulty": "Высокая",
        "avg_income_ru": "$3000-8000/месяц",
        "avg_income_usa": "$8000-25000/месяц"
      },
      "IT и программирование": {
        "audience": "Разработчики, студенты IT",
        "traffic_potential": "8.9",
        "competition": "Очень высокая",
        "ru_platforms": ["Telegram", "YouTube", "ВКонтакте"],
        "usa_platforms": ["LinkedIn", "Medium", "Reddit", "YouTube"],
        "monetization": "Курсы, фриланс, консультации",
        "examples_ru": ["Изучение Python с нуля", "React практические проекты", "DevOps инструменты"],
        "examples_usa": ["JavaScript best practices", "Machine learning tutorials", "System design"],
        "difficulty": "Высокая",
        "avg_income_ru": "$2500-7000/месяц",
        "avg_income_usa": "$6000-20000/месяц"
      },
      "Финансы и инвестиции": {
        "audience": "Люди 25-55 лет с доходом",
        "traffic_potential": "8.7",
        "competition": "Очень высокая",
        "ru_platforms": ["Яндекс Дзен", "Telegram", "YouTube"],
        "usa_platforms": ["LinkedIn", "Medium", "YouTube", "Twitter"],
        "monetization": "Инвестиционные курсы, управление капиталом",
        "examples_ru": ["Инвестиции для начинающих", "Налоговые льготы", "Криптовалюты"],
        "examples_usa": ["Stock market analysis", "Real estate investing", "Retirement planning"],
        "difficulty": "Очень высокая",
        "avg_income_ru": "$3000-10000/месяц",
        "avg_income_usa": "$8000-30000/месяц"
      },
      "Здоровье и фитнес": {
        "audience": "Люди 20-50 лет, активный образ жизни",
        "traffic_potential": "8.5",
        "competition": "Очень высокая",
        "ru_platforms": ["Instagram", "TikTok", "YouTube"],
        "usa_platforms": ["Instagram", "TikTok", "YouTube", "Pinterest"],
        "monetization": "Тренировки, питание, добавки",
        "examples_ru": ["Домашние тренировки", "Правильное питание", "Здоровый сон"],
        "examples_usa": ["Home workouts", "Nutrition tips", "Mental health"],
        "difficulty": "Высокая",
        "avg_income_ru": "$1500-4000/месяц",
        "avg_income_usa": "$4000-12000/месяц"
      }
    },
    "soft": {
      "Астрология и эзотерика": {
        "audience": "Женщины 20-50 лет",
        "traffic_potential": "8.3",
        "competition": "Высокая",
        "ru_platforms": ["ВКонтакте", "Instagram", "Telegram"],
        "usa_platforms": ["Instagram", "TikTok", "Pinterest"],
        "monetization": "Консультации, курсы, товары",
        "examples_ru": ["Гороскоп на 2025", "Натальная карта", "Таро расклады"],
        "examples_usa": ["Mercury retrograde guide", "Tarot reading basics", "Astrology charts"],
        "difficulty": "Средняя",
        "avg_income_ru": "$1000-3000/месяц",
        "avg_income_usa": "$2000-8000/месяц",
        "legal_risks": "Требования раскрытия развлекательного характера"
      },
      "Кулинария и рецепты": {
        "audience": "Домохозяйки, любители готовить 25-55 лет",
        "traffic_potential": "7.8",
        "competition": "Высокая",
        "ru_platforms": ["YouTube", "ВКонтакте", "Яндекс Дзен"],
        "usa_platforms": ["Instagram", "Pinterest", "YouTube", "TikTok"],
        "monetization": "Курсы кулинарии, товары, реклама",
        "examples_ru": ["Быстрые завтраки", "Праздничные блюда", "Выпечка дома"],
        "examples_usa": ["Quick dinner recipes", "Healthy meal prep", "Baking tips"],
        "difficulty": "Средняя",
        "avg_income_ru": "$800-2500/месяц",
        "avg_income_usa": "$2000-6000/месяц"
      },
      "Путешествия": {
        "audience": "Люди 25-45 лет со средним доходом",
        "traffic_potential": "7.5",
        "competition": "Очень высокая",
        "ru_platforms": ["Instagram", "YouTube", "Telegram"],
        "usa_platforms": ["Instagram", "YouTube", "Pinterest", "TikTok"],
        "monetization": "Туры, партнерство с отелями, гиды",
        "examples_ru": ["Бюджетные путешествия", "Россия изнутри", "Лайфхаки туристам"],
        "examples_usa": ["Budget travel tips", "Hidden gems", "Travel planning"],
        "difficulty": "Высокая",
        "avg_income_ru": "$1500-4000/месяц",
        "avg_income_usa": "$3000-10000/месяц"
      }
    },
    "hard": {
      "Кибербезопасность": {
        "audience": "IT-специалисты, CIO, малый бизнес",
        "traffic_potential": "9.4",
        "competition": "Средняя",
        "ru_platforms": ["Telegram", "LinkedIn", "YouTube"],
        "usa_platforms": ["Reddit", "LinkedIn", "Medium"],
        "monetization": "Обучение, аудит, ПО",
        "examples_ru": ["Защита от фишинга", "SIEM системы", "Кибератаки 2025"],
        "examples_usa": ["Zero trust architecture", "Ransomware protection", "SOC operations"],
        "difficulty": "Очень высокая",
        "avg_income_ru": "$5000-15000/месяц",
        "avg_income_usa": "$10000-50000/месяц",
        "required_skills": "Сертификации CISSP, CEH, практический опыт"
      },
      "Блокчейн и криптовалюты": {
        "audience": "Инвесторы, IT-специалисты, трейдеры",
        "traffic_potential": "8.9",
        "competition": "Очень высокая",
        "ru_platforms": ["Telegram", "YouTube", "Twitter"],
        "usa_platforms": ["Twitter", "Reddit", "LinkedIn", "Medium"],
        "monetization": "Трейдинг курсы, консультации, DeFi проекты",
        "examples_ru": ["DeFi для начинающих", "Анализ альткоинов", "NFT маркетплейсы"],
        "examples_usa": ["Smart contract development", "Yield farming strategies", "Blockchain analysis"],
        "difficulty": "Крайне высокая",
        "avg_income_ru": "$3000-20000/месяц",
        "avg_income_usa": "$8000-50000/месяц",
        "legal_risks": "Строгое регулирование, лицензии в некоторых странах"
      }
    }
  }
};

// Данные о контенте
const contentData = {
  "short": {
    "platforms": ["TikTok", "X (Twitter)", "Instagram Stories", "Snapchat", "Pinterest", "Одноклассники"],
    "optimal_length": "15-60 секунд видео, 50-280 символов текст",
    "frequency": "5-15 постов в день",
    "engagement_boost": "Высокая виральность, быстрое распространение",
    "templates": [
      {
        "platform": "TikTok",
        "template": "Хук (3 сек) → Проблема → Решение → CTA",
        "example": "Не можешь заснуть? Этот трюк работает за 2 минуты...",
        "tips": ["Используй тренды", "Добавляй субтитры", "Первые 3 секунды критичны"]
      },
      {
        "platform": "Instagram Stories",
        "template": "Вопрос → Интрига → Ответ → Опрос/Стикер",
        "example": "Угадай, сколько я трачу на кофе в месяц? 🤔",
        "tips": ["Используй интерактивные стикеры", "Делай опросы", "Сохраняй в актуальные"]
      }
    ]
  },
  "long": {
    "platforms": ["Medium", "Яндекс Дзен", "Substack", "LinkedIn Articles", "ВКонтакте", "YouTube"],
    "optimal_length": "1000-3000 слов, 3-10 минут видео", 
    "frequency": "1-3 публикации в неделю",
    "engagement_boost": "Экспертность, доверие, глубокое вовлечение",
    "templates": [
      {
        "platform": "Medium",
        "template": "Заголовок → Хук → Структура → Детали → Выводы → CTA",
        "example": "How I Built a $10K/Month Business Using Only AI Tools",
        "tips": ["SEO-оптимизация", "Подзаголовки каждые 200 слов", "Личная история"]
      },
      {
        "platform": "Яндекс Дзен",
        "template": "Проблема → Анализ → Решения → Примеры → Заключение",
        "example": "Почему 90% стартапов умирают и как попасть в 10% успешных",
        "tips": ["Локальные примеры", "Детальный анализ", "Практические советы"]
      }
    ]
  }
};

// Данные об автоматизации
const automationData = {
  "multiaccount": {
    "safe_practices": [
      {
        "practice": "Уникальные IP адреса",
        "description": "Резидентские прокси для каждого аккаунта",
        "tools": ["Smartproxy", "Bright Data", "IPRoyal"],
        "cost": "$50-200/месяц",
        "risk_level": "Критично важно"
      },
      {
        "practice": "Антидетект браузеры", 
        "description": "Изоляция fingerprint для каждого аккаунта",
        "tools": ["AdsPower", "Multilogin", "GoLogin"],
        "cost": "$30-100/месяц",
        "risk_level": "Обязательно"
      }
    ],
    "detection_methods": [
      "Behavioral fingerprinting - анализ паттернов поведения",
      "Device fingerprinting - уникальные характеристики устройства", 
      "IP геолокация и временные зоны",
      "Cross-account interactions - связи между аккаунтами"
    ],
    "ban_prevention": [
      "Имитация человеческого поведения",
      "Разные временные зоны активности",
      "Уникальные интересы и подписки",
      "Постепенное наращивание активности"
    ]
  },
  "tools": [
    {
      "name": "Buffer",
      "category": "Планирование постов",
      "platforms": ["Instagram", "LinkedIn", "Twitter", "Facebook"],
      "price": "$15-99/месяц",
      "automation_level": "Средний",
      "ban_risk": "Низкий",
      "features": ["Аналитика", "Команды", "Брендинг"]
    },
    {
      "name": "Hootsuite", 
      "category": "Управление соцсетями",
      "platforms": ["Instagram", "LinkedIn", "Twitter", "Facebook", "YouTube"],
      "price": "$49-739/месяц",
      "automation_level": "Высокий",
      "ban_risk": "Средний",
      "features": ["Мониторинг", "Команды", "Аналитика", "Реклама"]
    }
  ]
};

// Данные о нейроаватарах
const avatarData = {
  "creation_tools": [
    {
      "name": "Synthesia",
      "rating": "9.2/10",
      "price": "$30/месяц",
      "features": [
        "100+ готовых аватаров",
        "Поддержка 120+ языков",
        "Кастомные аватары",
        "API интеграция"
      ],
      "best_for": "Корпоративные презентации, обучение",
      "limitations": "Не подходит для развлекательного контента"
    },
    {
      "name": "D-ID",
      "rating": "8.8/10", 
      "price": "$15/месяц",
      "features": [
        "Анимация фото",
        "Real-time генерация",
        "Мобильное приложение"
      ],
      "best_for": "Персональные аватары, социальные сети",
      "limitations": "Ограниченная кастомизация"
    },
    {
      "name": "HeyGen",
      "rating": "9.0/10",
      "price": "$24/месяц",
      "features": [
        "Реалистичные аватары",
        "Многоязычность",
        "Быстрая генерация",
        "Интеграция с презентациями"
      ],
      "best_for": "Маркетинг, обучение, презентации",
      "limitations": "Высокая цена за качественные аватары"
    }
  ],
  "legal_considerations": [
    "Раскрытие использования AI обязательно",
    "Согласие на использование подобия",
    "Deepfake законы в некоторых штатах США",
    "Авторские права на созданный контент"
  ],
  "ethical_guidelines": [
    "Честность с аудиторией",
    "Избегание обмана",
    "Уважение к реальным людям",
    "Прозрачность процесса"
  ]
};

// Состояние приложения
let currentSortColumn = '';
let currentSortDirection = 'asc';
let filteredPlatforms = [...appData.platforms];
let currentNicheCategory = 'popular';
let currentMarket = 'ru';
let currentCountry = 'russia';
let trafficChart = null;
let contentChart = null;

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    console.log('Application initializing...');
    
    initNavigation();
    initPlatformsTable();
    initFilters();
    initNiches();
    initContentStrategies();
    initAutomation();
    initRestrictions();
    initMarkets();
    initAvatars();
    initCalculator();
    initModals();
    
    // Показываем главную страницу по умолчанию
    showSection('overview');
    
    console.log('Application initialized successfully');
});

// Навигация
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const overviewCards = document.querySelectorAll('.overview-card');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetSection = this.dataset.section;
            
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            showSection(targetSection);
        });
    });
    
    overviewCards.forEach(card => {
        card.addEventListener('click', function() {
            const targetSection = this.dataset.section;
            if (targetSection) {
                navButtons.forEach(btn => btn.classList.remove('active'));
                const targetButton = document.querySelector(`[data-section="${targetSection}"]`);
                if (targetButton) targetButton.classList.add('active');
                
                showSection(targetSection);
            }
        });
    });
}

function showSection(sectionName) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(`${sectionName}-section`);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        targetSection.classList.add('active');
        
        // Инициализируем специфичные для секции функции
        if (sectionName === 'content') {
            setTimeout(() => initContentComparison(), 100);
        } else if (sectionName === 'calculator') {
            updatePlatformStats();
        }
    }
}

// Таблица платформ
function initPlatformsTable() {
    renderPlatformsTable();
    initTableSorting();
    updatePlatformStats();
}

function updatePlatformStats() {
    const totalPlatforms = appData.platforms.length;
    const availablePlatforms = appData.platforms.filter(p => !p.blocked_in_rf || p.blocked_in_rf === false).length;
    const highPotential = appData.platforms.filter(p => parseFloat(p.traffic_potential) >= 9).length;
    
    const totalEl = document.getElementById('total-platforms');
    const availableEl = document.getElementById('available-platforms');
    const highPotentialEl = document.getElementById('high-potential');
    
    if (totalEl) totalEl.textContent = totalPlatforms;
    if (availableEl) availableEl.textContent = availablePlatforms;
    if (highPotentialEl) highPotentialEl.textContent = highPotential;
}

function renderPlatformsTable() {
    const tbody = document.getElementById('platforms-tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    filteredPlatforms.forEach(platform => {
        const row = document.createElement('tr');
        
        let blockStatus = 'Не заблокирован';
        let blockClass = 'blocked-no';
        if (platform.blocked_in_rf === 'Заблокирован') {
            blockStatus = 'Заблокирован';
            blockClass = 'blocked-yes';
        } else if (typeof platform.blocked_in_rf === 'string' && platform.blocked_in_rf.includes('Частично')) {
            blockStatus = 'Частично';
            blockClass = 'blocked-partial';
        }
        
        row.innerHTML = `
            <td>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <div class="platform-icon">${platform.name.charAt(0)}</div>
                    <div>
                        <strong>${platform.name}</strong>
                        <div style="font-size: 11px; color: var(--color-text-secondary);">${platform.type}</div>
                    </div>
                </div>
            </td>
            <td><span class="status ${platform.region === 'RU' ? 'status--success' : 'status--info'}">${platform.region}</span></td>
            <td><strong>${platform.max_posts_per_day}</strong></td>
            <td>${platform.monthly_audience_russia}</td>
            <td>
                <div class="traffic-indicator ${getTrafficClass(platform.traffic_potential)}">
                    ${platform.traffic_potential}/10
                </div>
            </td>
            <td><span class="difficulty-${getDifficultyClass(platform.difficulty)}">${platform.difficulty}</span></td>
            <td>${platform.engagement_rate}</td>
            <td><span class="blocked-indicator ${blockClass}">${blockStatus}</span></td>
            <td>
                <button class="btn action-btn btn--primary" onclick="showPlatformDetails('${platform.name}')">
                    Подробнее
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function getTrafficClass(potential) {
    const value = parseFloat(potential);
    if (value >= 9) return 'traffic-high';
    if (value >= 7) return 'traffic-medium';
    return 'traffic-low';
}

function getDifficultyClass(difficulty) {
    switch(difficulty) {
        case 'Средний': return 'medium';
        case 'Высокий': return 'hard';
        default: return 'easy';
    }
}

// Инициализация фильтров
function initFilters() {
    const regionFilter = document.getElementById('region-filter');
    const contentTypeFilter = document.getElementById('content-type-filter');
    const difficultyFilter = document.getElementById('difficulty-filter');
    const blockedFilter = document.getElementById('blocked-filter');
    const searchFilter = document.getElementById('search-filter');
    const exportBtn = document.getElementById('export-csv');
    
    if (regionFilter) regionFilter.addEventListener('change', applyFilters);
    if (contentTypeFilter) contentTypeFilter.addEventListener('change', applyFilters);
    if (difficultyFilter) difficultyFilter.addEventListener('change', applyFilters);
    if (blockedFilter) blockedFilter.addEventListener('change', applyFilters);
    if (searchFilter) searchFilter.addEventListener('input', applyFilters);
    if (exportBtn) exportBtn.addEventListener('click', exportToCSV);
}

function applyFilters() {
    const regionValue = document.getElementById('region-filter')?.value || '';
    const contentTypeValue = document.getElementById('content-type-filter')?.value || '';
    const difficultyValue = document.getElementById('difficulty-filter')?.value || '';
    const blockedValue = document.getElementById('blocked-filter')?.value || '';
    const searchValue = document.getElementById('search-filter')?.value.toLowerCase() || '';
    
    filteredPlatforms = appData.platforms.filter(platform => {
        const matchesRegion = !regionValue || platform.region === regionValue;
        const matchesContentType = !contentTypeValue || platform.content_length === contentTypeValue;
        const matchesDifficulty = !difficultyValue || platform.difficulty === difficultyValue;
        const matchesBlocked = !blockedValue || 
            (blockedValue === 'false' && (!platform.blocked_in_rf || platform.blocked_in_rf === false)) ||
            (blockedValue === 'blocked' && platform.blocked_in_rf === 'Заблокирован');
        const matchesSearch = !searchValue || platform.name.toLowerCase().includes(searchValue);
        
        return matchesRegion && matchesContentType && matchesDifficulty && matchesBlocked && matchesSearch;
    });
    
    renderPlatformsTable();
    updatePlatformStats();
}

// Ниши
function initNiches() {
    const nicheTabs = document.querySelectorAll('.niche-tab');
    nicheTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.dataset.category;
            switchNicheCategory(category);
        });
    });
    
    const marketButtons = document.querySelectorAll('.market-btn');
    marketButtons.forEach(button => {
        button.addEventListener('click', function() {
            const market = this.dataset.market;
            switchMarket(market);
        });
    });
    
    // Фильтры ниш
    const nicheSort = document.getElementById('niche-sort');
    const nicheSearch = document.getElementById('niche-search');
    
    if (nicheSort) nicheSort.addEventListener('change', renderNiches);
    if (nicheSearch) nicheSearch.addEventListener('input', renderNiches);
    
    renderNiches();
}

function switchNicheCategory(category) {
    currentNicheCategory = category;
    
    const nicheTabs = document.querySelectorAll('.niche-tab');
    nicheTabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.category === category) {
            tab.classList.add('active');
        }
    });
    
    const categories = document.querySelectorAll('.niche-category');
    categories.forEach(cat => {
        cat.classList.add('hidden');
        cat.classList.remove('active');
    });
    
    const targetCategory = document.getElementById(`${category}-niches`);
    if (targetCategory) {
        targetCategory.classList.remove('hidden');
        targetCategory.classList.add('active');
    }
}

function switchMarket(market) {
    currentMarket = market;
    
    const marketButtons = document.querySelectorAll('.market-btn');
    marketButtons.forEach(button => {
        button.classList.remove('active', 'btn--primary');
        button.classList.add('btn--outline');
        
        if (button.dataset.market === market) {
            button.classList.add('active', 'btn--primary');
            button.classList.remove('btn--outline');
        }
    });
    
    renderNiches();
}

function renderNiches() {
    const searchValue = document.getElementById('niche-search')?.value.toLowerCase() || '';
    const sortValue = document.getElementById('niche-sort')?.value || 'traffic_potential';
    
    Object.keys(appData.niches).forEach(category => {
        const gridId = `${category}-niches-grid`;
        const grid = document.getElementById(gridId);
        if (!grid) return;
        
        grid.innerHTML = '';
        
        let niches = Object.entries(appData.niches[category]);
        
        // Фильтрация по поиску
        if (searchValue) {
            niches = niches.filter(([name]) => name.toLowerCase().includes(searchValue));
        }
        
        // Сортировка
        niches.sort(([,a], [,b]) => {
            if (sortValue === 'traffic_potential') {
                return parseFloat(b.traffic_potential) - parseFloat(a.traffic_potential);
            } else if (sortValue === 'competition') {
                const competitionOrder = {'Низкая': 1, 'Средняя': 2, 'Высокая': 3, 'Очень высокая': 4, 'Крайне высокая': 5};
                return competitionOrder[a.competition] - competitionOrder[b.competition];
            }
            return 0;
        });
        
        niches.forEach(([nicheName, nicheData]) => {
            const nicheCard = document.createElement('div');
            nicheCard.className = 'niche-card';
            nicheCard.onclick = () => showNicheDetails(nicheName, nicheData, category);
            
            const platforms = currentMarket === 'ru' ? nicheData.ru_platforms : nicheData.usa_platforms;
            const examples = currentMarket === 'ru' ? nicheData.examples_ru : nicheData.examples_usa;
            
            let difficultyClass = 'status--success';
            if (nicheData.difficulty === 'Высокая' || nicheData.difficulty === 'Очень высокая') {
                difficultyClass = 'status--warning';
            }
            if (nicheData.difficulty === 'Крайне высокая') {
                difficultyClass = 'status--error';
            }
            
            nicheCard.innerHTML = `
                <h3>
                    ${nicheName}
                    <span class="niche-difficulty status ${difficultyClass}">${nicheData.difficulty}</span>
                </h3>
                <div class="niche-stats">
                    <div class="niche-stat">
                        <span class="niche-stat-value">${nicheData.traffic_potential}/10</span>
                        <span class="niche-stat-label">Потенциал трафика</span>
                    </div>
                    <div class="niche-stat">
                        <span class="niche-stat-value">${nicheData.competition}</span>
                        <span class="niche-stat-label">Конкуренция</span>
                    </div>
                </div>
                <div class="niche-platforms">
                    <h4>Лучшие платформы для ${currentMarket === 'ru' ? '🇷🇺' : '🇺🇸'}:</h4>
                    <div class="platform-tags">
                        ${platforms.map(platform => `<span class="platform-tag">${platform}</span>`).join('')}
                    </div>
                </div>
                <div class="niche-examples">
                    <h4>Примеры контента:</h4>
                    <ul>
                        ${examples.slice(0, 3).map(example => `<li>${example}</li>`).join('')}
                    </ul>
                </div>
            `;
            grid.appendChild(nicheCard);
        });
    });
}

// Стратегии контента
function initContentStrategies() {
    const shortPlatformsContainer = document.getElementById('short-platforms');
    if (shortPlatformsContainer) {
        contentData.short.platforms.forEach(platform => {
            const tag = document.createElement('span');
            tag.className = 'platform-tag';
            tag.textContent = platform;
            shortPlatformsContainer.appendChild(tag);
        });
    }
    
    const longPlatformsContainer = document.getElementById('long-platforms');
    if (longPlatformsContainer) {
        contentData.long.platforms.forEach(platform => {
            const tag = document.createElement('span');
            tag.className = 'platform-tag';
            tag.textContent = platform;
            longPlatformsContainer.appendChild(tag);
        });
    }
    
    renderContentTemplates();
}

function initContentComparison() {
    const canvas = document.getElementById('content-comparison-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    if (contentChart) {
        contentChart.destroy();
    }
    
    contentChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Виральность', 'Доверие', 'Конверсия', 'Время создания', 'Охват', 'Вовлеченность'],
            datasets: [{
                label: 'Короткий контент',
                data: [9, 4, 6, 9, 8, 7],
                backgroundColor: 'rgba(31, 184, 205, 0.2)',
                borderColor: '#1FB8CD',
                borderWidth: 2
            }, {
                label: 'Длинный контент',
                data: [4, 9, 8, 3, 6, 8],
                backgroundColor: 'rgba(255, 193, 133, 0.2)',
                borderColor: '#FFC185',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 10
                }
            }
        }
    });
}

function renderContentTemplates() {
    const templatesGrid = document.getElementById('content-templates-grid');
    if (!templatesGrid) return;
    
    const allTemplates = [...contentData.short.templates, ...contentData.long.templates];
    
    allTemplates.forEach(template => {
        const templateCard = document.createElement('div');
        templateCard.className = 'template-card';
        templateCard.onclick = () => showContentTemplateDetails(template);
        
        templateCard.innerHTML = `
            <h4>${template.platform} - Шаблон</h4>
            <div class="template-platform">${template.platform}</div>
            <div class="template-example">${template.example}</div>
            <div class="template-tips">
                <strong>Формула:</strong> ${template.template}
                <ul>
                    ${template.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        `;
        
        templatesGrid.appendChild(templateCard);
    });
}

// Автоматизация
function initAutomation() {
    // Функции для модальных окон определены глобально
}

// Ограничения и законы
function initRestrictions() {
    const countryTabs = document.querySelectorAll('.country-tab');
    countryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const country = this.dataset.country;
            switchCountry(country);
        });
    });
    
    // Показываем Россию по умолчанию
    switchCountry('russia');
}

function switchCountry(country) {
    currentCountry = country;
    
    const countryTabs = document.querySelectorAll('.country-tab');
    countryTabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.country === country) {
            tab.classList.add('active');
        }
    });
    
    const countryLaws = document.querySelectorAll('.country-laws');
    countryLaws.forEach(laws => {
        laws.classList.add('hidden');
        laws.classList.remove('active');
    });
    
    const targetLaws = document.getElementById(`${country}-laws`);
    if (targetLaws) {
        targetLaws.classList.remove('hidden');
        targetLaws.classList.add('active');
    }
}

// Рынки
function initMarkets() {
    renderMarketDetails();
}

function renderMarketDetails() {
    const russiaMarket = document.getElementById('russia-market');
    const usaMarket = document.getElementById('usa-market');
    
    if (russiaMarket) {
        russiaMarket.innerHTML = `
            <div class="market-section">
                <h4>Топ платформы</h4>
                <div class="market-platforms">
                    <div class="market-platform">Яндекс Дзен (9.5/10)</div>
                    <div class="market-platform">Telegram (9.8/10)</div>
                    <div class="market-platform">ВКонтакте (8.2/10)</div>
                    <div class="market-platform">YouTube (9.8/10)</div>
                    <div class="market-platform">TikTok (9.3/10)</div>
                </div>
            </div>
            <div class="market-section">
                <h4>Особенности аудитории</h4>
                <div class="market-features">
                    <div class="market-feature">Высокое доверие к экспертам</div>
                    <div class="market-feature">Предпочтение детального разбора</div>
                    <div class="market-feature">Важность социальных доказательств</div>
                    <div class="market-feature">Склонность к длинным текстам</div>
                </div>
            </div>
        `;
    }
    
    if (usaMarket) {
        usaMarket.innerHTML = `
            <div class="market-section">
                <h4>Топ платформы</h4>
                <div class="market-platforms">
                    <div class="market-platform">Instagram (8.8/10) - ЗАБЛОКИРОВАН</div>
                    <div class="market-platform">LinkedIn (7.8/10)</div>
                    <div class="market-platform">TikTok (9.3/10)</div>
                    <div class="market-platform">Reddit (8.9/10)</div>
                    <div class="market-platform">Medium (8.1/10)</div>
                </div>
            </div>
            <div class="market-section">
                <h4>Особенности аудитории</h4>
                <div class="market-features">
                    <div class="market-feature">Высокая скорость потребления</div>
                    <div class="market-feature">Важность персонального бренда</div>
                    <div class="market-feature">Предпочтение визуального контента</div>
                    <div class="market-feature">Фокус на практическую ценность</div>
                </div>
            </div>
        `;
    }
}

// Нейроаватары
function initAvatars() {
    // Инициализация уже выполнена в HTML через onclick
}

// Калькулятор трафика
function initCalculator() {
    const checkboxContainer = document.getElementById('platform-checkboxes');
    const nicheSelect = document.getElementById('niche-select');
    const calculateBtn = document.getElementById('calculate-traffic');
    const exportPlanBtn = document.getElementById('export-plan');
    const saveScenarioBtn = document.getElementById('save-scenario');
    
    // Заполняем чекбоксы платформ
    if (checkboxContainer) {
        appData.platforms.forEach(platform => {
            const checkboxItem = document.createElement('div');
            checkboxItem.className = 'checkbox-item';
            checkboxItem.innerHTML = `
                <input type="checkbox" id="platform-${platform.name}" value="${platform.name}">
                <label for="platform-${platform.name}">${platform.name} (${platform.traffic_potential}/10)</label>
            `;
            checkboxContainer.appendChild(checkboxItem);
        });
    }
    
    // Заполняем селект ниш
    if (nicheSelect) {
        Object.keys(appData.niches).forEach(category => {
            const optgroup = document.createElement('optgroup');
            optgroup.label = category === 'popular' ? 'Популярные ниши' : 
                           category === 'soft' ? 'Мягкие ниши' : 'Твердые ниши';
            
            Object.keys(appData.niches[category]).forEach(nicheName => {
                const option = document.createElement('option');
                option.value = nicheName;
                option.textContent = nicheName;
                optgroup.appendChild(option);
            });
            
            nicheSelect.appendChild(optgroup);
        });
    }
    
    // Табы результатов
    const resultsTabs = document.querySelectorAll('.results-tab');
    resultsTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            switchResultsTab(tabName);
        });
    });
    
    if (calculateBtn) calculateBtn.addEventListener('click', calculateTraffic);
    if (exportPlanBtn) exportPlanBtn.addEventListener('click', exportPlan);
    if (saveScenarioBtn) saveScenarioBtn.addEventListener('click', saveScenario);
}

function switchResultsTab(tabName) {
    const resultsTabs = document.querySelectorAll('.results-tab');
    resultsTabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.tab === tabName) {
            tab.classList.add('active');
        }
    });
    
    const resultsPanels = document.querySelectorAll('.results-panel');
    resultsPanels.forEach(panel => {
        panel.classList.add('hidden');
        panel.classList.remove('active');
    });
    
    const targetPanel = document.getElementById(`${tabName}-tab`);
    if (targetPanel) {
        targetPanel.classList.remove('hidden');
        targetPanel.classList.add('active');
    }
}

function calculateTraffic() {
    const selectedPlatforms = [];
    const checkboxes = document.querySelectorAll('#platform-checkboxes input[type="checkbox"]:checked');
    
    checkboxes.forEach(checkbox => {
        const platform = appData.platforms.find(p => p.name === checkbox.value);
        if (platform) selectedPlatforms.push(platform);
    });
    
    if (selectedPlatforms.length === 0) {
        alert('Выберите хотя бы одну платформу');
        return;
    }
    
    const postsPerDay = parseInt(document.getElementById('posts-per-day').value) || 10;
    const periodDays = parseInt(document.getElementById('period-days').value) || 30;
    const experienceLevel = document.getElementById('experience-level').value;
    const adBudget = parseInt(document.getElementById('ad-budget').value) || 0;
    const selectedNiche = document.getElementById('niche-select').value;
    
    // Множители опыта
    const experienceMultipliers = {
        'beginner': 0.5,
        'intermediate': 1.0,
        'expert': 1.5
    };
    
    const experienceMultiplier = experienceMultipliers[experienceLevel];
    
    // Множитель ниши
    let nicheMultiplier = 1.0;
    if (selectedNiche) {
        for (const category in appData.niches) {
            if (appData.niches[category][selectedNiche]) {
                const nicheData = appData.niches[category][selectedNiche];
                const potential = parseFloat(nicheData.traffic_potential);
                nicheMultiplier = potential / 8.0;
                break;
            }
        }
    }
    
    const results = selectedPlatforms.map(platform => {
        const engagementRate = parseFloat(platform.engagement_rate.replace('%', '')) / 100;
        const trafficPotential = parseFloat(platform.traffic_potential);
        const costPerClick = platform.cost_per_click || 0.20;
        
        // Органический трафик
        const dailyOrganicViews = postsPerDay * trafficPotential * 50 * nicheMultiplier * experienceMultiplier;
        const dailyOrganicTraffic = dailyOrganicViews * engagementRate;
        
        // Платный трафик
        const dailyPaidTraffic = adBudget > 0 ? (adBudget / costPerClick) : 0;
        
        const totalDailyTraffic = dailyOrganicTraffic + dailyPaidTraffic;
        const totalTraffic = totalDailyTraffic * periodDays;
        
        return {
            name: platform.name,
            dailyOrganicTraffic: Math.round(dailyOrganicTraffic),
            dailyPaidTraffic: Math.round(dailyPaidTraffic),
            dailyTraffic: Math.round(totalDailyTraffic),
            totalTraffic: Math.round(totalTraffic),
            trafficPotential,
            costPerClick
        };
    });
    
    renderTrafficChart(results);
    renderTrafficBreakdown(results, periodDays);
    renderTrafficRecommendations(results, selectedNiche);
    renderTrafficSummary(results, periodDays, selectedNiche);
}

function renderTrafficChart(results) {
    const canvas = document.getElementById('traffic-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    if (trafficChart) {
        trafficChart.destroy();
    }
    
    trafficChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: results.map(r => r.name),
            datasets: [{
                label: 'Органический трафик',
                data: results.map(r => r.dailyOrganicTraffic * 30),
                backgroundColor: '#1FB8CD'
            }, {
                label: 'Платный трафик',
                data: results.map(r => r.dailyPaidTraffic * 30),
                backgroundColor: '#FFC185'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true
                }
            },
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

function renderTrafficBreakdown(results, periodDays) {
    const breakdownDiv = document.getElementById('traffic-breakdown');
    if (!breakdownDiv) return;
    
    breakdownDiv.innerHTML = '';
    
    results.forEach(result => {
        const breakdownItem = document.createElement('div');
        breakdownItem.className = 'breakdown-item fade-in';
        
        breakdownItem.innerHTML = `
            <h4>${result.name}</h4>
            <div class="breakdown-metrics">
                <div class="breakdown-metric">
                    <span class="breakdown-value">${result.dailyTraffic.toLocaleString()}</span>
                    <span class="breakdown-label">В день</span>
                </div>
                <div class="breakdown-metric">
                    <span class="breakdown-value">${result.totalTraffic.toLocaleString()}</span>
                    <span class="breakdown-label">За период</span>
                </div>
                <div class="breakdown-metric">
                    <span class="breakdown-value">${result.trafficPotential}/10</span>
                    <span class="breakdown-label">Потенциал</span>
                </div>
                <div class="breakdown-metric">
                    <span class="breakdown-value">$${result.costPerClick}</span>
                    <span class="breakdown-label">CPC</span>
                </div>
            </div>
        `;
        
        breakdownDiv.appendChild(breakdownItem);
    });
}

function renderTrafficRecommendations(results, selectedNiche) {
    const recommendationsDiv = document.getElementById('traffic-recommendations');
    if (!recommendationsDiv) return;
    
    recommendationsDiv.innerHTML = '';
    
    // Анализируем результаты и даем рекомендации
    const bestPlatform = results.sort((a, b) => b.totalTraffic - a.totalTraffic)[0];
    const lowPerformers = results.filter(r => r.totalTraffic < 1000);
    
    const recommendations = [
        {
            title: "Фокус на лучшую платформу",
            priority: "high",
            text: `${bestPlatform.name} показывает лучшие результаты. Увеличьте активность на этой платформе в 2 раза.`
        }
    ];
    
    if (lowPerformers.length > 0) {
        recommendations.push({
            title: "Пересмотрите стратегию",
            priority: "medium",
            text: `Платформы ${lowPerformers.map(p => p.name).join(', ')} показывают низкие результаты. Возможно, стоит сменить формат контента.`
        });
    }
    
    if (selectedNiche) {
        recommendations.push({
            title: "Оптимизация под нишу",
            priority: "low",
            text: `Для ниши "${selectedNiche}" рекомендуется создавать экспертный контент с практическими советами.`
        });
    }
    
    recommendations.forEach(rec => {
        const recCard = document.createElement('div');
        recCard.className = 'recommendation-card fade-in';
        
        recCard.innerHTML = `
            <h4>
                <span class="recommendation-priority ${rec.priority}">${rec.priority === 'high' ? 'КРИТИЧНО' : rec.priority === 'medium' ? 'ВАЖНО' : 'СОВЕТ'}</span>
                ${rec.title}
            </h4>
            <p>${rec.text}</p>
        `;
        
        recommendationsDiv.appendChild(recCard);
    });
}

function renderTrafficSummary(results, periodDays, selectedNiche) {
    const summaryDiv = document.getElementById('traffic-summary');
    if (!summaryDiv) return;
    
    const totalTraffic = results.reduce((sum, r) => sum + r.totalTraffic, 0);
    const avgDailyTraffic = Math.round(totalTraffic / periodDays);
    const bestPlatform = results.sort((a, b) => b.totalTraffic - a.totalTraffic)[0];
    const totalOrganic = results.reduce((sum, r) => sum + (r.dailyOrganicTraffic * periodDays), 0);
    const totalPaid = results.reduce((sum, r) => sum + (r.dailyPaidTraffic * periodDays), 0);
    
    summaryDiv.innerHTML = `
        <h4>Сводка по трафику ${selectedNiche ? `для ниши "${selectedNiche}"` : ''}</h4>
        <div class="summary-stat">
            <span>Общий трафик за период:</span>
            <span class="summary-value">${totalTraffic.toLocaleString()}</span>
        </div>
        <div class="summary-stat">
            <span>Средний дневной трафик:</span>
            <span class="summary-value">${avgDailyTraffic.toLocaleString()}</span>
        </div>
        <div class="summary-stat">
            <span>Органический трафик:</span>
            <span class="summary-value">${totalOrganic.toLocaleString()}</span>
        </div>
        <div class="summary-stat">
            <span>Платный трафик:</span>
            <span class="summary-value">${totalPaid.toLocaleString()}</span>
        </div>
        <div class="summary-stat">
            <span>Лучшая платформа:</span>
            <span class="summary-value">${bestPlatform?.name || 'Н/Д'}</span>
        </div>
        <div class="summary-stat">
            <span>Количество платформ:</span>
            <span class="summary-value">${results.length}</span>
        </div>
    `;
}

// Экспорт и сохранение
function exportPlan() {
    const selectedPlatforms = [];
    const checkboxes = document.querySelectorAll('#platform-checkboxes input[type="checkbox"]:checked');
    
    checkboxes.forEach(checkbox => {
        const platform = appData.platforms.find(p => p.name === checkbox.value);
        if (platform) selectedPlatforms.push(platform);
    });
    
    if (selectedPlatforms.length === 0) {
        alert('Сначала рассчитайте трафик');
        return;
    }
    
    // Создаем детальный план
    const planData = [
        ['СТРАТЕГИЧЕСКИЙ ПЛАН МАКСИМАЛЬНОГО ТРАФИКА 2025'],
        [''],
        ['Дата создания:', new Date().toLocaleDateString('ru-RU')],
        [''],
        ['ПАРАМЕТРЫ:'],
        [`Ниша: ${document.getElementById('niche-select').value || 'Не выбрана'}`],
        [`Постов в день: ${document.getElementById('posts-per-day').value}`],
        [`Период: ${document.getElementById('period-days').value} дней`],
        [`Уровень опыта: ${document.getElementById('experience-level').value}`],
        [`Бюджет на рекламу: $${document.getElementById('ad-budget').value}/день`],
        [''],
        ['ВЫБРАННЫЕ ПЛАТФОРМЫ:'],
        ['Название', 'Регион', 'Потенциал', 'Сложность', 'Engagement', 'CPC', 'Статус РФ']
    ];
    
    selectedPlatforms.forEach(p => {
        planData.push([
            p.name,
            p.region,
            `${p.traffic_potential}/10`,
            p.difficulty,
            p.engagement_rate,
            `$${p.cost_per_click || 'Н/Д'}`,
            p.blocked_in_rf === false ? 'Доступна' : p.blocked_in_rf
        ]);
    });
    
    const csvContent = planData
        .map(row => Array.isArray(row) ? row.map(cell => `"${cell}"`).join(',') : `"${row}"`)
        .join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `план_максимального_трафика_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
}

function saveScenario() {
    alert('Функция сохранения сценариев будет доступна в следующей версии');
}

function exportToCSV() {
    const headers = ['Название', 'Регион', 'Тип', 'Постов/день', 'Аудитория РФ', 'Потенциал трафика', 'Сложность', 'Engagement Rate', 'Блокировка РФ', 'CPC'];
    const rows = filteredPlatforms.map(platform => [
        platform.name,
        platform.region,
        platform.type,
        platform.max_posts_per_day,
        platform.monthly_audience_russia,
        platform.traffic_potential,
        platform.difficulty,
        platform.engagement_rate,
        platform.blocked_in_rf === false ? 'Не заблокирован' : platform.blocked_in_rf,
        `$${platform.cost_per_click || 'Н/Д'}`
    ]);
    
    const csvContent = [headers, ...rows]
        .map(row => row.map(cell => `"${cell}"`).join(','))
        .join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'платформы_для_максимального_трафика_2025.csv';
    link.click();
}

// Модальные окна
function initModals() {
    // Общие обработчики для всех модальных окон
    const modals = ['platform-modal', 'niche-modal', 'content-modal', 'automation-modal', 'laws-modal', 'market-modal', 'avatar-modal'];
    
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        const closeBtn = modal?.querySelector('.modal-close');
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.classList.add('hidden');
            });
        }
        
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.add('hidden');
                }
            });
        }
    });
}

// Глобальные функции для модальных окон
window.showPlatformDetails = function(platformName) {
    const platform = appData.platforms.find(p => p.name === platformName);
    if (!platform) return;
    
    const modal = document.getElementById('platform-modal');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');
    
    title.textContent = platform.name;
    
    let blockStatus = platform.blocked_in_rf === false ? '✅ Не заблокирован' : 
                     platform.blocked_in_rf === 'Заблокирован' ? '🚫 Заблокирован в РФ' :
                     `⚠️ ${platform.blocked_in_rf}`;
    
    body.innerHTML = `
        <div class="modal-info-grid">
            <div class="modal-info-item">
                <div class="modal-info-label">Регион</div>
                <div class="modal-info-value">${platform.region}</div>
            </div>
            <div class="modal-info-item">
                <div class="modal-info-label">Тип платформы</div>
                <div class="modal-info-value">${platform.type}</div>
            </div>
            <div class="modal-info-item">
                <div class="modal-info-label">Максимум постов/день</div>
                <div class="modal-info-value">${platform.max_posts_per_day}</div>
            </div>
            <div class="modal-info-item">
                <div class="modal-info-label">Аудитория в РФ</div>
                <div class="modal-info-value">${platform.monthly_audience_russia}</div>
            </div>
            <div class="modal-info-item">
                <div class="modal-info-label">Потенциал трафика</div>
                <div class="modal-info-value">${platform.traffic_potential}/10</div>
            </div>
            <div class="modal-info-item">
                <div class="modal-info-label">Статус в РФ</div>
                <div class="modal-info-value">${blockStatus}</div>
            </div>
        </div>
        
        <h4>Монетизация</h4>
        <p>${platform.monetization}</p>
        <div class="modal-info-item">
            <div class="modal-info-label">Стоимость клика (примерная)</div>
            <div class="modal-info-value">$${platform.cost_per_click || 'Данных нет'}</div>
        </div>
        
        <h4>Автоматизация</h4>
        <div class="modal-info-item">
            <div class="modal-info-label">Уровень риска</div>
            <div class="modal-info-value">${platform.automation_risk || 'Неизвестно'}</div>
        </div>
    `;
    
    modal.classList.remove('hidden');
};

window.showNicheDetails = function(nicheName, nicheData, category) {
    const modal = document.getElementById('niche-modal');
    const title = document.getElementById('niche-modal-title');
    const body = document.getElementById('niche-modal-body');
    
    title.textContent = nicheName;
    
    const categoryName = category === 'popular' ? 'Популярная ниша' : 
                        category === 'soft' ? 'Мягкая ниша' : 'Твердая ниша';
    
    body.innerHTML = `
        <div class="modal-info-grid">
            <div class="modal-info-item">
                <div class="modal-info-label">Категория</div>
                <div class="modal-info-value">${categoryName}</div>
            </div>
            <div class="modal-info-item">
                <div class="modal-info-label">Целевая аудитория</div>
                <div class="modal-info-value">${nicheData.audience}</div>
            </div>
            <div class="modal-info-item">
                <div class="modal-info-label">Потенциал трафика</div>
                <div class="modal-info-value">${nicheData.traffic_potential}/10</div>
            </div>
            <div class="modal-info-item">
                <div class="modal-info-label">Уровень конкуренции</div>
                <div class="modal-info-value">${nicheData.competition}</div>
            </div>
            ${nicheData.avg_income_ru ? `
            <div class="modal-info-item">
                <div class="modal-info-label">Доход в РФ</div>
                <div class="modal-info-value">${nicheData.avg_income_ru}</div>
            </div>
            ` : ''}
            ${nicheData.avg_income_usa ? `
            <div class="modal-info-item">
                <div class="modal-info-label">Доход в США</div>
                <div class="modal-info-value">${nicheData.avg_income_usa}</div>
            </div>
            ` : ''}
        </div>
        
        <h4>Платформы для России 🇷🇺</h4>
        <div class="platform-tags">
            ${nicheData.ru_platforms.map(platform => `<span class="platform-tag">${platform}</span>`).join('')}
        </div>
        <h4>Платформы для США 🇺🇸</h4>
        <div class="platform-tags">
            ${nicheData.usa_platforms.map(platform => `<span class="platform-tag">${platform}</span>`).join('')}
        </div>
        
        <h4>Способы монетизации</h4>
        <p>${nicheData.monetization}</p>
        
        <h4>Примеры контента для России</h4>
        <div class="modal-examples">
            ${nicheData.examples_ru.map(example => `
            <div class="example-item">
                <div class="example-text">${example}</div>
            </div>
            `).join('')}
        </div>
        <h4>Примеры контента для США</h4>
        <div class="modal-examples">
            ${nicheData.examples_usa.map(example => `
            <div class="example-item">
                <div class="example-text">${example}</div>
            </div>
            `).join('')}
        </div>
    `;
    
    modal.classList.remove('hidden');
};

window.showContentDetails = function(contentType) {
    const modal = document.getElementById('content-modal');
    const title = document.getElementById('content-modal-title');
    const body = document.getElementById('content-modal-body');
    
    const data = contentData[contentType];
    
    title.textContent = contentType === 'short' ? 'Короткий контент' : 'Длинный контент';
    
    body.innerHTML = `
        <h4>Характеристики</h4>
        <div class="modal-info-grid">
            <div class="modal-info-item">
                <div class="modal-info-label">Оптимальная длина</div>
                <div class="modal-info-value">${data.optimal_length}</div>
            </div>
            <div class="modal-info-item">
                <div class="modal-info-label">Частота публикаций</div>
                <div class="modal-info-value">${data.frequency}</div>
            </div>
            <div class="modal-info-item">
                <div class="modal-info-label">Преимущества</div>
                <div class="modal-info-value">${data.engagement_boost}</div>
            </div>
        </div>
        
        <h4>Шаблоны для платформ</h4>
        ${data.templates.map(template => `
        <div class="example-item">
            <h5>${template.platform}</h5>
            <div class="example-text"><strong>Формула:</strong> ${template.template}</div>
            <div class="example-text"><strong>Пример:</strong> ${template.example}</div>
            <div class="modal-tips">
                <h5>Советы:</h5>
                <ul>
                    ${template.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        </div>
        `).join('')}
    `;
    
    modal.classList.remove('hidden');
};

window.showMultiaccountDetails = function() {
    const modal = document.getElementById('automation-modal');
    const title = document.getElementById('automation-modal-title');
    const body = document.getElementById('automation-modal-body');
    
    title.textContent = 'Безопасные стратегии мультиаккаунта';
    
    body.innerHTML = `
        <div class="modal-warning">
            <h5>⚠️ КРИТИЧЕСКИ ВАЖНО</h5>
            <ul>
                <li>Один бан может уничтожить месяцы работы</li>
                <li>Платформы становятся все умнее в обнаружении</li>
                <li>Соблюдение правил - это инвестиция в будущее</li>
            </ul>
        </div>
        
        <h4>Обязательные требования</h4>
        ${automationData.multiaccount.safe_practices.map(practice => `
        <div class="modal-section">
            <h5>${practice.practice}</h5>
            <p><strong>Описание:</strong> ${practice.description}</p>
            <p><strong>Инструменты:</strong> ${practice.tools.join(', ')}</p>
            <p><strong>Стоимость:</strong> ${practice.cost}</p>
        </div>
        `).join('')}
    `;
    
    modal.classList.remove('hidden');
};

window.showAutomationTools = function() {
    const modal = document.getElementById('automation-modal');
    const title = document.getElementById('automation-modal-title');
    const body = document.getElementById('automation-modal-body');
    
    title.textContent = 'Инструменты автоматизации';
    
    body.innerHTML = `
        <h4>Рекомендуемые инструменты</h4>
        ${automationData.tools.map(tool => `
        <div class="modal-section">
            <h5>${tool.name}</h5>
            <div class="modal-info-grid">
                <div class="modal-info-item">
                    <div class="modal-info-label">Категория</div>
                    <div class="modal-info-value">${tool.category}</div>
                </div>
                <div class="modal-info-item">
                    <div class="modal-info-label">Цена</div>
                    <div class="modal-info-value">${tool.price}</div>
                </div>
                <div class="modal-info-item">
                    <div class="modal-info-label">Риск бана</div>
                    <div class="modal-info-value">${tool.ban_risk}</div>
                </div>
            </div>
        </div>
        `).join('')}
    `;
    
    modal.classList.remove('hidden');
};

window.showBanPrevention = function() {
    const modal = document.getElementById('automation-modal');
    const title = document.getElementById('automation-modal-title');
    const body = document.getElementById('automation-modal-body');
    
    title.textContent = 'Защита от банов';
    
    body.innerHTML = `
        <h4>🛡️ Превентивные меры</h4>
        <div class="modal-tips">
            <ul>
                ${automationData.multiaccount.ban_prevention.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
        </div>
    `;
    
    modal.classList.remove('hidden');
};

window.showROICalculator = function() {
    const modal = document.getElementById('automation-modal');
    const title = document.getElementById('automation-modal-title');
    const body = document.getElementById('automation-modal-body');
    
    title.textContent = 'ROI калькулятор автоматизации';
    
    body.innerHTML = `
        <h4>💰 Анализ затрат и выгод</h4>
        <p>Типичные затраты в месяц: $115-500</p>
        <p>Экономия времени: 2-4 часа в день</p>
        <p>ROI: 300-500% при правильной настройке</p>
    `;
    
    modal.classList.remove('hidden');
};

window.showRussianPenalties = function() {
    const modal = document.getElementById('laws-modal');
    const title = document.getElementById('laws-modal-title');
    const body = document.getElementById('laws-modal-body');
    
    title.textContent = 'Новые штрафы в России с 01.09.2025';
    
    body.innerHTML = `
        <div class="modal-warning">
            <h5>🚨 КРИТИЧЕСКИ ВАЖНО</h5>
            <p>Новые законы вступили в силу и уже применяются!</p>
        </div>
        
        <h4>Штрафы за рекламу в заблокированных соцсетях</h4>
        <div class="modal-info-grid">
            <div class="modal-info-item">
                <div class="modal-info-label">Физические лица</div>
                <div class="modal-info-value">2,000-2,500 руб за нарушение</div>
            </div>
            <div class="modal-info-item">
                <div class="modal-info-label">ИП</div>
                <div class="modal-info-value">4,000-20,000 руб</div>
            </div>
            <div class="modal-info-item">
                <div class="modal-info-label">Юридические лица</div>
                <div class="modal-info-value">100,000-500,000 руб</div>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
};

window.showFTCGuidelines = function() {
    const modal = document.getElementById('laws-modal');
    const title = document.getElementById('laws-modal-title');
    const body = document.getElementById('laws-modal-body');
    
    title.textContent = 'FTC Guidelines 2025 (США)';
    
    body.innerHTML = `
        <h4>Новые требования FTC</h4>
        <p>Штраф: $51,744 за каждое нарушение</p>
        <h4>Требования</h4>
        <ul>
            <li>Четкое раскрытие спонсорства (#ad, #sponsored)</li>
            <li>Словесное раскрытие в видео</li>
            <li>Раскрытие в начале поста</li>
        </ul>
    `;
    
    modal.classList.remove('hidden');
};

window.showAvatarTool = function(toolName) {
    const tool = avatarData.creation_tools.find(t => t.name.toLowerCase().includes(toolName));
    if (!tool) return;
    
    const modal = document.getElementById('avatar-modal');
    const title = document.getElementById('avatar-modal-title');
    const body = document.getElementById('avatar-modal-body');
    
    title.textContent = tool.name;
    
    body.innerHTML = `
        <div class="modal-info-grid">
            <div class="modal-info-item">
                <div class="modal-info-label">Рейтинг</div>
                <div class="modal-info-value">${tool.rating}</div>
            </div>
            <div class="modal-info-item">
                <div class="modal-info-label">Цена</div>
                <div class="modal-info-value">${tool.price}</div>
            </div>
            <div class="modal-info-item">
                <div class="modal-info-label">Лучше всего для</div>
                <div class="modal-info-value">${tool.best_for}</div>
            </div>
        </div>
        
        <h4>Возможности</h4>
        <ul>
            ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        
        <div class="modal-warning">
            <h5>⚠️ Правовые аспекты</h5>
            <ul>
                ${avatarData.legal_considerations.map(consideration => `<li>${consideration}</li>`).join('')}
            </ul>
        </div>
    `;
    
    modal.classList.remove('hidden');
};

window.showRussianMarketDetails = function() {
    const modal = document.getElementById('market-modal');
    const title = document.getElementById('market-modal-title');
    const body = document.getElementById('market-modal-body');
    
    title.textContent = 'Российский рынок - подробный анализ';
    
    body.innerHTML = `
        <h4>🎯 Особенности аудитории</h4>
        <ul>
            <li><strong>Высокое доверие к экспертам</strong></li>
            <li><strong>Предпочтение детального разбора</strong></li>
            <li><strong>Важность социальных доказательств</strong></li>
        </ul>
        
        <h4>💡 Советы для российского рынка</h4>
        <ul>
            <li>Используйте локальные примеры и кейсы</li>
            <li>Учитывайте российские праздники и события</li>
            <li>Пишите на простом русском языке</li>
        </ul>
    `;
    
    modal.classList.remove('hidden');
};

window.showAmericanMarketDetails = function() {
    const modal = document.getElementById('market-modal');
    const title = document.getElementById('market-modal-title');
    const body = document.getElementById('market-modal-body');
    
    title.textContent = 'Американский рынок - подробный анализ';
    
    body.innerHTML = `
        <h4>🎯 Особенности аудитории</h4>
        <ul>
            <li><strong>Высокая скорость потребления</strong></li>
            <li><strong>Важность персонального бренда</strong></li>
            <li><strong>Предпочтение визуального контента</strong></li>
        </ul>
        
        <h4>💡 Советы для американского рынка</h4>
        <ul>
            <li>Идеальный английский обязателен</li>
            <li>Используйте актуальные мемы и тренды</li>
            <li>Будьте краткими и по делу</li>
        </ul>
    `;
    
    modal.classList.remove('hidden');
};

// Инициализация сортировки таблицы
function initTableSorting() {
    const headers = document.querySelectorAll('.platforms-table th[data-sort]');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const column = header.dataset.sort;
            
            if (currentSortColumn === column) {
                currentSortDirection = currentSortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                currentSortColumn = column;
                currentSortDirection = 'asc';
            }
            
            sortPlatforms(column, currentSortDirection);
            renderPlatformsTable();
        });
    });
}

function sortPlatforms(column, direction) {
    filteredPlatforms.sort((a, b) => {
        let aVal = a[column];
        let bVal = b[column];
        
        if (column === 'traffic_potential') {
            aVal = parseFloat(aVal) || 0;
            bVal = parseFloat(bVal) || 0;
        }
        
        if (aVal < bVal) return direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return direction === 'asc' ? 1 : -1;
        return 0;
    });
}

// Дополнительные функции-заглушки для кнопок, которых может не быть
window.showBloggerRegistration = function() { alert('Информация о регистрации блогеров будет добавлена'); };
window.showCOPPADetails = function() { alert('Информация о COPPA будет добавлена'); };
window.showDSADetails = function() { alert('Информация о DSA будет добавлена'); };
window.showGDPRDetails = function() { alert('Информация о GDPR будет добавлена'); };
window.showAITextTools = function() { alert('Информация об AI инструментах для текста будет добавлена'); };
window.showAIImageTools = function() { alert('Информация об AI инструментах для изображений будет добавлена'); };
window.showAIVideoTools = function() { alert('Информация об AI инструментах для видео будет добавлена'); };
window.showContentTemplateDetails = function() { alert('Детали шаблона контента будут добавлены'); };