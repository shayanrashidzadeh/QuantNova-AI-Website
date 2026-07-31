import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";


type LocalePack = {
  hero: string[];
  nav: string[];
  language: string[];
  features: [string, string, string, ...[string, string][]];
  performance: string[];
  extension: string[];
  about: [
    string,
    string,
    string,
    string,
    [string, string],
    [string, string],
    [string, string],
    string,
    string,
    string,
  ];
  pricing: string[];
  plans: [string[], string[], string[]];
  faq: [string, string, string, ...[string, string][]];
  footer: string[];
  ready: string;
};

function createTranslation(pack: LocalePack) {
  const [starter, pro, elite] = pack.plans;
  return {
    hero: {
      status: pack.hero[0], creator: pack.hero[1], titlePrefix: pack.hero[2], titleHighlight: pack.hero[3],
      title: pack.hero[4], subtitle: pack.hero[5], button: pack.hero[6], performance: pack.hero[7],
      live: pack.hero[8], scroll: pack.hero[9], scrollDown: pack.hero[10],
      highlights: { ai: pack.hero[11], live: pack.hero[12], risk: pack.hero[13] },
    },
    system: { ready: pack.ready },
    navbar: {
      ariaLabel: pack.nav[0], homeAria: pack.nav[1], openMenu: pack.nav[2], closeMenu: pack.nav[3],
      features: pack.nav[4], ai: pack.nav[5], extension: pack.nav[6], about: pack.nav[7], pricing: pack.nav[8], launch: pack.nav[9],
    },
    languageSwitcher: { open: pack.language[0], menuLabel: pack.language[1], title: pack.language[2], description: pack.language[3] },
    features: {
      tag: pack.features[0], title: pack.features[1], description: pack.features[2],
      cards: (pack.features.slice(3) as [string, string][]).map(
        ([title, text]) => ({ title, text }),
      ),
    },
    performance: {
      tag: pack.performance[0], title: pack.performance[1], description: pack.performance[2], prediction: pack.performance[3],
      engine: pack.performance[4], live: pack.performance[5],
      stats: { monthly: pack.performance[6], win: pack.performance[7], trades: pack.performance[8], score: pack.performance[9] },
    },
    extension: {
      tag: pack.extension[0], title: pack.extension[1], description: pack.extension[2], connected: pack.extension[3],
      prediction: pack.extension[4], signal: pack.extension[5], button: pack.extension[6],
      cards: { chart: pack.extension[7], pattern: pack.extension[8], risk: pack.extension[9] },
    },
    about: {
      tag: pack.about[0], title: pack.about[1], description: pack.about[2], createdBy: pack.about[3],
      cards: (pack.about.slice(4, 7) as [string, string][]).map(
        ([title, text]) => ({ title, text }),
      ),
      stats: { analysis: pack.about[7], markets: pack.about[8], powered: pack.about[9] },
    },
    pricing: {
      tag: pack.pricing[0], title: pack.pricing[1], description: pack.pricing[2], monthly: pack.pricing[3],
      getStarted: pack.pricing[4], popular: pack.pricing[5],
      plans: {
        starter: { name: starter[0], description: starter[1], features: starter.slice(2) },
        pro: { name: pro[0], description: pro[1], features: pro.slice(2) },
        elite: { name: elite[0], description: elite[1], features: elite.slice(2) },
      },
      security: pack.pricing[6],
    },
    faq: {
      tag: pack.faq[0], title: pack.faq[1], description: pack.faq[2],
      items: (pack.faq.slice(3) as [string, string][]).map(
        ([question, answer]) => ({ question, answer }),
      ),
    },
    footer: { title: pack.footer[0], description: pack.footer[1], launch: pack.footer[2], brand: pack.footer[3], top: pack.footer[4] },
  };
}

const resources = {
  en: {
    translation: {
      hero: {
        status: "QuantNova AI System Online",
        creator: "BY SHAYAN",
        titlePrefix: "Trade Beyond",
        titleHighlight: "Human Intelligence",
        title: "Trade Smarter With AI",
        subtitle:
          "An advanced AI trading ecosystem that analyzes markets, manages risk, and transforms complex data into intelligent trading decisions.",
        button: "Launch QuantNova",
        performance: "View Performance",
        live: "Live",
        scroll: "Explore",
        scrollDown: "Scroll to the next section",
        highlights: {
          ai: "Advanced AI Engine",
          live: "Real-Time Analysis",
          risk: "Smart Risk Control",
        },
      },

      system: {
        ready: "SYSTEM READY",
      },

      navbar: {
        ariaLabel: "Primary navigation",
        homeAria: "Go to homepage",
        openMenu: "Open navigation menu",
        closeMenu: "Close navigation menu",
        features: "Features",
        ai: "AI Engine",
        extension: "Extension",
        about: "About",
        pricing: "Pricing",
        launch: "Launch AI",
      },

      languageSwitcher: {
        open: "Select language",
        menuLabel: "Available languages",
        title: "Language",
        description: "Choose your preferred language",
      },

      features: {
        tag: "AI TECHNOLOGY",
        title: "The Future of Intelligent Trading",
        description:
          "A powerful artificial intelligence infrastructure built for deeper market analysis, smarter decisions, and next-generation trading intelligence.",
        cards: [
          {
            title: "AI Decision Engine",
            text:
              "Advanced AI models analyze market structure, momentum, volatility, and emerging opportunities in real time.",
          },
          {
            title: "Adaptive Trading Engine",
            text:
              "Intelligent algorithms continuously adapt their analysis to changing market conditions and trading environments.",
          },
          {
            title: "Smart Risk Control",
            text:
              "Adaptive risk systems help protect capital through intelligent exposure, position sizing, and loss-control logic.",
          },
          {
            title: "24/7 Market Analysis",
            text:
              "QuantNova AI continuously monitors multiple financial markets for patterns, signals, and meaningful changes.",
          },
        ],
      },

      performance: {
        tag: "AI PERFORMANCE",
        title: "Intelligence You Can Measure",
        description:
          "Track AI-driven market analysis, signal accuracy, trading activity, and system confidence through real-time performance insights.",
        prediction: "Market Prediction",
        engine: "AI Growth Engine",
        live: "LIVE AI",
        stats: {
          monthly: "Monthly Return",
          win: "Win Rate",
          trades: "Total Trades",
          score: "AI Score",
        },
      },

      extension: {
        tag: "CHROME AI EXTENSION",
        title: "Your AI Trading Assistant, Everywhere",
        description:
          "Bring QuantNova AI directly into your browser and access intelligent market insights without leaving your trading workspace.",
        connected: "Connected",
        prediction: "AI Prediction",
        signal: "BUY SIGNAL",
        button: "Install Extension",
        cards: {
          chart: "Real-Time Market Scanner",
          pattern: "AI Pattern Recognition",
          risk: "Smart Risk Management",
        },
      },

      about: {
        tag: "ABOUT QUANTNOVA",
        title: "Built for the Future of Trading",
        description:
          "QuantNova AI combines software engineering, artificial intelligence, quantitative analysis, and financial intelligence to build a smarter trading ecosystem.",
        createdBy: "Created by",
        cards: [
          {
            title: "Built by a Developer",
            text:
              "Engineered with a strong focus on performance, scalability, security, and long-term product quality.",
          },
          {
            title: "Powered by Intelligence",
            text:
              "Combining artificial intelligence, market structure, quantitative logic, and adaptive analysis.",
          },
          {
            title: "Designed for Traders",
            text:
              "Every feature is created to help traders understand markets faster and make more informed decisions.",
          },
        ],
        stats: {
          analysis: "Continuous Analysis",
          markets: "Market Coverage",
          powered: "Intelligence Powered",
        },
      },

      pricing: {
        tag: "PRICING",
        title: "Choose Your Intelligence Level",
        description:
          "Unlock next-generation AI trading intelligence with a plan designed around your trading style.",
        monthly: "month",
        getStarted: "Get Started",
        popular: "Most Powerful",
        plans: {
          starter: {
            name: "Starter",
            description:
              "Essential AI market intelligence for traders getting started.",
            features: [
              "Basic AI Analysis",
              "Market Overview",
              "Limited Signals",
              "Essential Risk Tools",
              "Email Support",
            ],
          },
          pro: {
            name: "Pro AI",
            description:
              "Advanced intelligence, signals, and automation for active traders.",
            features: [
              "Advanced AI Engine",
              "Unlimited Analysis",
              "Smart Trading Signals",
              "Adaptive Risk Management",
              "Priority Updates",
              "Multi-Market Access",
            ],
          },
          elite: {
            name: "Elite Quant",
            description:
              "Institutional-grade analytics and premium automation capabilities.",
            features: [
              "Full AI Trading Assistant",
              "Premium Indicators",
              "Advanced Quant Analytics",
              "Custom Strategy Models",
              "Private Community",
              "24/7 Priority Support",
            ],
          },
        },
        security:
          "All plans include secure access, continuous platform updates, and encrypted account protection.",
      },

      faq: {
        tag: "FAQ",
        title: "Frequently Asked Questions",
        description:
          "Explore the most common questions about QuantNova AI and its intelligent trading technology.",
        items: [
          {
            question: "What is QuantNova AI?",
            answer:
              "QuantNova AI is an artificial intelligence trading platform designed to analyze markets, identify meaningful patterns, and deliver intelligent trading insights.",
          },
          {
            question: "Does QuantNova AI execute trades automatically?",
            answer:
              "QuantNova AI currently focuses on market analysis, intelligent signals, and decision support, with advanced automation planned for future releases.",
          },
          {
            question: "Which markets are supported?",
            answer:
              "QuantNova AI is being designed for multiple financial markets, including cryptocurrency, forex, stocks, indices, and other global markets.",
          },
          {
            question: "Is QuantNova AI available worldwide?",
            answer:
              "Yes. QuantNova AI is being developed as a global financial intelligence platform for traders around the world.",
          },
        ],
      },

      footer: {
        title: "Ready to Trade Smarter?",
        description:
          "Experience next-generation artificial intelligence built for modern traders.",
        launch: "Launch QuantNova",
        brand:
          "Next-generation AI trading intelligence designed for smarter market analysis and better decision-making.",
        top: "Back to Top",
      },
    },
  },

  fa: {
    translation: {
      hero: {
        status: "سامانه QuantNova AI آنلاین است",
        creator: "ساخته‌شده توسط شایان",
        titlePrefix: "فراتر از",
        titleHighlight: "هوش انسانی معامله کنید",
        title: "با هوش مصنوعی هوشمندتر معامله کنید",
        subtitle:
          "یک اکوسیستم پیشرفته معاملاتی مبتنی بر هوش مصنوعی که بازارها را تحلیل می‌کند، ریسک را مدیریت می‌کند و داده‌های پیچیده را به تصمیم‌های هوشمند تبدیل می‌کند.",
        button: "راه‌اندازی QuantNova",
        performance: "مشاهده عملکرد",
        live: "زنده",
        scroll: "کاوش",
        scrollDown: "رفتن به بخش بعدی",
        highlights: {
          ai: "موتور پیشرفته هوش مصنوعی",
          live: "تحلیل لحظه‌ای بازار",
          risk: "کنترل هوشمند ریسک",
        },
      },

      system: {
        ready: "سیستم آماده است",
      },

      navbar: {
        ariaLabel: "منوی اصلی",
        homeAria: "بازگشت به صفحه اصلی",
        openMenu: "باز کردن منوی ناوبری",
        closeMenu: "بستن منوی ناوبری",
        features: "ویژگی‌ها",
        ai: "موتور هوش مصنوعی",
        extension: "افزونه",
        about: "درباره ما",
        pricing: "تعرفه‌ها",
        launch: "راه‌اندازی هوش مصنوعی",
      },

      languageSwitcher: {
        open: "انتخاب زبان",
        menuLabel: "زبان‌های موجود",
        title: "زبان",
        description: "زبان موردنظر خود را انتخاب کنید",
      },

      features: {
        tag: "فناوری هوش مصنوعی",
        title: "آینده معاملات هوشمند",
        description:
          "زیرساختی قدرتمند مبتنی بر هوش مصنوعی برای تحلیل عمیق‌تر بازار، تصمیم‌گیری دقیق‌تر و ساخت نسل آینده معاملات هوشمند.",
        cards: [
          {
            title: "موتور تصمیم‌گیری هوشمند",
            text:
              "مدل‌های پیشرفته هوش مصنوعی ساختار بازار، مومنتوم، نوسان و فرصت‌های جدید را به‌صورت لحظه‌ای تحلیل می‌کنند.",
          },
          {
            title: "موتور معاملاتی تطبیقی",
            text:
              "الگوریتم‌های هوشمند، تحلیل خود را به‌طور پیوسته با شرایط متغیر بازار و محیط معاملاتی هماهنگ می‌کنند.",
          },
          {
            title: "کنترل هوشمند ریسک",
            text:
              "سیستم‌های تطبیقی ریسک با مدیریت میزان سرمایه، اندازه موقعیت و کنترل زیان به محافظت از سرمایه کمک می‌کنند.",
          },
          {
            title: "تحلیل شبانه‌روزی بازار",
            text:
              "QuantNova AI بازارهای مالی مختلف را به‌صورت ۲۴ ساعته برای شناسایی الگوها، سیگنال‌ها و تغییرات مهم بررسی می‌کند.",
          },
        ],
      },

      performance: {
        tag: "عملکرد هوش مصنوعی",
        title: "هوشی که می‌توان اندازه‌گیری کرد",
        description:
          "عملکرد تحلیل‌های هوشمند، دقت سیگنال‌ها، فعالیت‌های معاملاتی و میزان اطمینان سیستم را به‌صورت لحظه‌ای دنبال کنید.",
        prediction: "پیش‌بینی بازار",
        engine: "موتور رشد هوشمند",
        live: "هوش مصنوعی زنده",
        stats: {
          monthly: "بازده ماهانه",
          win: "نرخ موفقیت",
          trades: "مجموع معاملات",
          score: "امتیاز هوش مصنوعی",
        },
      },

      extension: {
        tag: "افزونه هوشمند کروم",
        title: "دستیار معاملاتی هوشمند شما، همه‌جا همراهتان",
        description:
          "QuantNova AI را مستقیماً به مرورگر خود اضافه کنید و بدون ترک محیط معاملاتی، به تحلیل‌ها و اطلاعات هوشمند بازار دسترسی داشته باشید.",
        connected: "متصل",
        prediction: "پیش‌بینی هوش مصنوعی",
        signal: "سیگنال خرید",
        button: "نصب افزونه",
        cards: {
          chart: "اسکن لحظه‌ای بازار",
          pattern: "تشخیص الگو با هوش مصنوعی",
          risk: "مدیریت هوشمند ریسک",
        },
      },

      about: {
        tag: "درباره QUANTNOVA",
        title: "ساخته‌شده برای آینده معاملات",
        description:
          "QuantNova AI با ترکیب مهندسی نرم‌افزار، هوش مصنوعی، تحلیل کمی و دانش مالی، یک اکوسیستم معاملاتی هوشمند و نسل جدید ایجاد می‌کند.",
        createdBy: "ساخته‌شده توسط",
        cards: [
          {
            title: "ساخته‌شده توسط یک توسعه‌دهنده",
            text:
              "طراحی‌شده با تمرکز جدی بر سرعت، مقیاس‌پذیری، امنیت و کیفیت بلندمدت محصول.",
          },
          {
            title: "قدرت‌گرفته از هوش",
            text:
              "ترکیبی از هوش مصنوعی، ساختار بازار، منطق کمی و تحلیل تطبیقی.",
          },
          {
            title: "طراحی‌شده برای معامله‌گران",
            text:
              "تمام قابلیت‌ها برای درک سریع‌تر بازار و تصمیم‌گیری آگاهانه‌تر معامله‌گران ساخته شده‌اند.",
          },
        ],
        stats: {
          analysis: "تحلیل مداوم",
          markets: "پوشش بازارها",
          powered: "قدرت‌گرفته از هوش مصنوعی",
        },
      },

      pricing: {
        tag: "تعرفه‌ها",
        title: "سطح هوشمندی مناسب خود را انتخاب کنید",
        description:
          "با انتخاب طرحی متناسب با سبک معاملاتی خود، به نسل جدید هوش مصنوعی مالی دسترسی پیدا کنید.",
        monthly: "ماه",
        getStarted: "شروع کنید",
        popular: "قدرتمندترین انتخاب",
        plans: {
          starter: {
            name: "Starter",
            description:
              "ابزارهای ضروری هوش مصنوعی برای معامله‌گرانی که تازه شروع کرده‌اند.",
            features: [
              "تحلیل پایه هوش مصنوعی",
              "نمای کلی بازار",
              "سیگنال‌های محدود",
              "ابزارهای ضروری مدیریت ریسک",
              "پشتیبانی ایمیلی",
            ],
          },
          pro: {
            name: "Pro AI",
            description:
              "تحلیل پیشرفته، سیگنال‌های هوشمند و قابلیت‌های حرفه‌ای برای معامله‌گران فعال.",
            features: [
              "موتور پیشرفته هوش مصنوعی",
              "تحلیل نامحدود",
              "سیگنال‌های معاملاتی هوشمند",
              "مدیریت تطبیقی ریسک",
              "دسترسی زودتر به به‌روزرسانی‌ها",
              "پشتیبانی از چند بازار",
            ],
          },
          elite: {
            name: "Elite Quant",
            description:
              "تحلیل‌های سطح سازمانی و قابلیت‌های پیشرفته خودکارسازی برای کاربران حرفه‌ای.",
            features: [
              "دستیار کامل معاملاتی هوشمند",
              "اندیکاتورهای حرفه‌ای",
              "تحلیل کمی پیشرفته",
              "مدل‌های سفارشی استراتژی",
              "جامعه خصوصی کاربران",
              "پشتیبانی اولویت‌دار ۲۴ ساعته",
            ],
          },
        },
        security:
          "تمام طرح‌ها شامل دسترسی امن، به‌روزرسانی‌های مداوم و محافظت رمزگذاری‌شده از حساب هستند.",
      },

      faq: {
        tag: "پرسش‌های متداول",
        title: "سؤالات متداول",
        description:
          "پاسخ رایج‌ترین پرسش‌ها درباره QuantNova AI و فناوری معاملاتی هوشمند آن را مشاهده کنید.",
        items: [
          {
            question: "QuantNova AI چیست؟",
            answer:
              "QuantNova AI یک پلتفرم معاملاتی مبتنی بر هوش مصنوعی است که برای تحلیل بازارها، شناسایی الگوهای مهم و ارائه بینش‌های هوشمند معاملاتی طراحی شده است.",
          },
          {
            question: "آیا QuantNova AI معاملات را خودکار انجام می‌دهد؟",
            answer:
              "تمرکز فعلی QuantNova AI بر تحلیل بازار، ارائه سیگنال‌های هوشمند و کمک به تصمیم‌گیری است و قابلیت‌های پیشرفته خودکارسازی در نسخه‌های آینده توسعه خواهند یافت.",
          },
          {
            question: "چه بازارهایی پشتیبانی می‌شوند؟",
            answer:
              "QuantNova AI برای پشتیبانی از بازارهای مالی مختلف، از جمله ارزهای دیجیتال، فارکس، سهام، شاخص‌ها و سایر بازارهای جهانی طراحی می‌شود.",
          },
          {
            question: "آیا QuantNova AI در سراسر جهان قابل استفاده است؟",
            answer:
              "بله. QuantNova AI به‌عنوان یک پلتفرم جهانی هوش مالی برای معامله‌گران سراسر جهان توسعه داده می‌شود.",
          },
        ],
      },

      footer: {
        title: "برای معامله هوشمندتر آماده‌اید؟",
        description:
          "نسل جدید هوش مصنوعی را که برای معامله‌گران مدرن ساخته شده تجربه کنید.",
        launch: "راه‌اندازی QuantNova",
        brand:
          "هوش معاملاتی نسل جدید برای تحلیل دقیق‌تر بازار و تصمیم‌گیری بهتر.",
        top: "بازگشت به بالا",
      },
    },
  },

  tr: {
    translation: {
      hero: {
        status: "QuantNova AI Sistemi Çevrimiçi",
        creator: "SHAYAN TARAFINDAN",
        titlePrefix: "İnsan Zekâsının",
        titleHighlight: "Ötesinde İşlem Yapın",
        title: "Yapay Zekâ ile Daha Akıllı İşlem Yapın",
        subtitle:
          "Piyasaları analiz eden, riski yöneten ve karmaşık verileri akıllı işlem kararlarına dönüştüren gelişmiş bir yapay zekâ işlem ekosistemi.",
        button: "QuantNova'yı Başlat",
        performance: "Performansı Görüntüle",
        live: "Canlı",
        scroll: "Keşfet",
        scrollDown: "Sonraki bölüme git",
        highlights: {
          ai: "Gelişmiş Yapay Zekâ Motoru",
          live: "Gerçek Zamanlı Analiz",
          risk: "Akıllı Risk Kontrolü",
        },
      },

      system: {
        ready: "SİSTEM HAZIR",
      },

      navbar: {
        ariaLabel: "Ana gezinme",
        homeAria: "Ana sayfaya git",
        openMenu: "Gezinme menüsünü aç",
        closeMenu: "Gezinme menüsünü kapat",
        features: "Özellikler",
        ai: "Yapay Zekâ Motoru",
        extension: "Eklenti",
        about: "Hakkımızda",
        pricing: "Fiyatlandırma",
        launch: "Yapay Zekâyı Başlat",
      },

      languageSwitcher: {
        open: "Dil seç",
        menuLabel: "Kullanılabilir diller",
        title: "Dil",
        description: "Tercih ettiğiniz dili seçin",
      },

      features: {
        tag: "YAPAY ZEKÂ TEKNOLOJİSİ",
        title: "Akıllı İşlemlerin Geleceği",
        description:
          "Daha derin piyasa analizi, daha akıllı kararlar ve yeni nesil işlem zekâsı için geliştirilmiş güçlü bir yapay zekâ altyapısı.",
        cards: [
          {
            title: "Yapay Zekâ Karar Motoru",
            text:
              "Gelişmiş yapay zekâ modelleri piyasa yapısını, momentumu, volatiliteyi ve yeni fırsatları gerçek zamanlı analiz eder.",
          },
          {
            title: "Uyarlanabilir İşlem Motoru",
            text:
              "Akıllı algoritmalar analizlerini değişen piyasa koşullarına ve işlem ortamlarına sürekli olarak uyarlar.",
          },
          {
            title: "Akıllı Risk Kontrolü",
            text:
              "Uyarlanabilir risk sistemleri; maruziyet, pozisyon büyüklüğü ve zarar kontrolü mantığıyla sermayenin korunmasına yardımcı olur.",
          },
          {
            title: "7/24 Piyasa Analizi",
            text:
              "QuantNova AI, örüntüleri, sinyalleri ve önemli değişimleri belirlemek için birçok finansal piyasayı kesintisiz izler.",
          },
        ],
      },

      performance: {
        tag: "YAPAY ZEKÂ PERFORMANSI",
        title: "Ölçülebilir Zekâ",
        description:
          "Yapay zekâ destekli piyasa analizlerini, sinyal doğruluğunu, işlem faaliyetlerini ve sistem güvenini gerçek zamanlı performans verileriyle takip edin.",
        prediction: "Piyasa Tahmini",
        engine: "Yapay Zekâ Büyüme Motoru",
        live: "CANLI YAPAY ZEKÂ",
        stats: {
          monthly: "Aylık Getiri",
          win: "Başarı Oranı",
          trades: "Toplam İşlem",
          score: "Yapay Zekâ Puanı",
        },
      },

      extension: {
        tag: "CHROME YAPAY ZEKÂ EKLENTİSİ",
        title: "Yapay Zekâ İşlem Asistanınız Her Yerde",
        description:
          "QuantNova AI'ı doğrudan tarayıcınıza taşıyın ve işlem çalışma alanınızdan ayrılmadan akıllı piyasa içgörülerine erişin.",
        connected: "Bağlandı",
        prediction: "Yapay Zekâ Tahmini",
        signal: "AL SİNYALİ",
        button: "Eklentiyi Yükle",
        cards: {
          chart: "Gerçek Zamanlı Piyasa Tarayıcısı",
          pattern: "Yapay Zekâ Örüntü Tanıma",
          risk: "Akıllı Risk Yönetimi",
        },
      },

      about: {
        tag: "QUANTNOVA HAKKINDA",
        title: "İşlemlerin Geleceği İçin Geliştirildi",
        description:
          "QuantNova AI; yazılım mühendisliği, yapay zekâ, nicel analiz ve finansal zekâyı bir araya getirerek daha akıllı bir işlem ekosistemi oluşturur.",
        createdBy: "Geliştiren",
        cards: [
          {
            title: "Bir Geliştirici Tarafından İnşa Edildi",
            text:
              "Performans, ölçeklenebilirlik, güvenlik ve uzun vadeli ürün kalitesine güçlü bir odakla geliştirildi.",
          },
          {
            title: "Zekâ ile Güçlendirildi",
            text:
              "Yapay zekâ, piyasa yapısı, nicel mantık ve uyarlanabilir analizi bir araya getirir.",
          },
          {
            title: "Yatırımcılar İçin Tasarlandı",
            text:
              "Her özellik, yatırımcıların piyasaları daha hızlı anlamasına ve daha bilinçli kararlar vermesine yardımcı olmak için geliştirildi.",
          },
        ],
        stats: {
          analysis: "Kesintisiz Analiz",
          markets: "Piyasa Kapsamı",
          powered: "Yapay Zekâ Destekli",
        },
      },

      pricing: {
        tag: "FİYATLANDIRMA",
        title: "Zekâ Seviyenizi Seçin",
        description:
          "İşlem tarzınıza göre tasarlanmış bir planla yeni nesil yapay zekâ işlem zekâsının kilidini açın.",
        monthly: "ay",
        getStarted: "Başlayın",
        popular: "En Güçlü Seçim",
        plans: {
          starter: {
            name: "Starter",
            description:
              "İşleme yeni başlayanlar için temel yapay zekâ piyasa zekâsı.",
            features: [
              "Temel Yapay Zekâ Analizi",
              "Piyasa Genel Görünümü",
              "Sınırlı Sinyaller",
              "Temel Risk Araçları",
              "E-posta Desteği",
            ],
          },
          pro: {
            name: "Pro AI",
            description:
              "Aktif yatırımcılar için gelişmiş zekâ, sinyaller ve otomasyon.",
            features: [
              "Gelişmiş Yapay Zekâ Motoru",
              "Sınırsız Analiz",
              "Akıllı İşlem Sinyalleri",
              "Uyarlanabilir Risk Yönetimi",
              "Öncelikli Güncellemeler",
              "Çoklu Piyasa Erişimi",
            ],
          },
          elite: {
            name: "Elite Quant",
            description:
              "Kurumsal düzeyde analiz ve premium otomasyon yetenekleri.",
            features: [
              "Tam Yapay Zekâ İşlem Asistanı",
              "Premium Göstergeler",
              "Gelişmiş Nicel Analiz",
              "Özel Strateji Modelleri",
              "Özel Topluluk",
              "7/24 Öncelikli Destek",
            ],
          },
        },
        security:
          "Tüm planlar güvenli erişim, sürekli platform güncellemeleri ve şifrelenmiş hesap koruması içerir.",
      },

      faq: {
        tag: "SSS",
        title: "Sıkça Sorulan Sorular",
        description:
          "QuantNova AI ve akıllı işlem teknolojisi hakkındaki en yaygın soruların yanıtlarını keşfedin.",
        items: [
          {
            question: "QuantNova AI nedir?",
            answer:
              "QuantNova AI; piyasaları analiz etmek, anlamlı örüntüleri belirlemek ve akıllı işlem içgörüleri sunmak için tasarlanmış yapay zekâ tabanlı bir işlem platformudur.",
          },
          {
            question: "QuantNova AI işlemleri otomatik olarak gerçekleştirir mi?",
            answer:
              "QuantNova AI şu anda piyasa analizi, akıllı sinyaller ve karar desteğine odaklanmaktadır. Gelişmiş otomasyon özellikleri gelecek sürümler için planlanmaktadır.",
          },
          {
            question: "Hangi piyasalar destekleniyor?",
            answer:
              "QuantNova AI; kripto para, forex, hisse senetleri, endeksler ve diğer küresel piyasalar dâhil olmak üzere birçok finansal piyasa için geliştirilmektedir.",
          },
          {
            question: "QuantNova AI dünya çapında kullanılabilir mi?",
            answer:
              "Evet. QuantNova AI, dünyanın dört bir yanındaki yatırımcılar için küresel bir finansal zekâ platformu olarak geliştirilmektedir.",
          },
        ],
      },

      footer: {
        title: "Daha Akıllı İşlem Yapmaya Hazır mısınız?",
        description:
          "Modern yatırımcılar için geliştirilen yeni nesil yapay zekâyı deneyimleyin.",
        launch: "QuantNova'yı Başlat",
        brand:
          "Daha akıllı piyasa analizi ve daha iyi kararlar için tasarlanmış yeni nesil yapay zekâ işlem zekâsı.",
        top: "Başa Dön",
      },
    },
  },
  de: { translation: createTranslation({"hero": ["QuantNova AI-System online", "VON SHAYAN", "Handeln Sie über", "menschliche Intelligenz hinaus", "Intelligenter handeln mit KI", "Ein fortschrittliches KI-Handelsökosystem, das Märkte analysiert, Risiken steuert und komplexe Daten in intelligente Handelsentscheidungen verwandelt.", "QuantNova starten", "Performance ansehen", "Live", "Entdecken", "Zum nächsten Abschnitt", "Fortschrittliche KI-Engine", "Echtzeitanalyse", "Intelligente Risikokontrolle"], "nav": ["Hauptnavigation", "Zur Startseite", "Navigationsmenü öffnen", "Navigationsmenü schließen", "Funktionen", "KI-Engine", "Erweiterung", "Über uns", "Preise", "KI starten"], "language": ["Sprache auswählen", "Verfügbare Sprachen", "Sprache", "Wählen Sie Ihre bevorzugte Sprache"], "features": ["KI-TECHNOLOGIE", "Die Zukunft des intelligenten Tradings", "Eine leistungsstarke KI-Infrastruktur für tiefere Marktanalysen, klügere Entscheidungen und Trading-Intelligenz der nächsten Generation.", ["KI-Entscheidungsengine", "Fortschrittliche KI-Modelle analysieren Marktstruktur, Momentum, Volatilität und neue Chancen in Echtzeit."], ["Adaptive Trading-Engine", "Intelligente Algorithmen passen ihre Analyse laufend an veränderte Marktbedingungen an."], ["Intelligente Risikokontrolle", "Adaptive Risikosysteme schützen Kapital durch intelligente Positionsgrößen- und Verlustkontrolle."], ["24/7-Marktanalyse", "QuantNova AI überwacht Finanzmärkte rund um die Uhr auf Muster, Signale und wichtige Veränderungen."]], "performance": ["KI-PERFORMANCE", "Messbare Intelligenz", "Verfolgen Sie KI-gestützte Marktanalysen, Signalgenauigkeit, Handelsaktivität und Systemvertrauen in Echtzeit.", "Marktprognose", "KI-Wachstumsengine", "LIVE-KI", "Monatliche Rendite", "Trefferquote", "Gesamte Trades", "KI-Score"], "extension": ["CHROME-KI-ERWEITERUNG", "Ihr KI-Trading-Assistent – überall", "Nutzen Sie QuantNova AI direkt im Browser und erhalten Sie intelligente Markteinblicke, ohne Ihren Arbeitsbereich zu verlassen.", "Verbunden", "KI-Prognose", "KAUFSIGNAL", "Erweiterung installieren", "Echtzeit-Marktscanner", "KI-Mustererkennung", "Intelligentes Risikomanagement"], "about": ["ÜBER QUANTNOVA", "Für die Zukunft des Tradings entwickelt", "QuantNova AI verbindet Softwareentwicklung, künstliche Intelligenz, quantitative Analyse und Finanzwissen.", "Erstellt von", ["Von einem Entwickler gebaut", "Mit Fokus auf Performance, Skalierbarkeit, Sicherheit und langfristige Produktqualität entwickelt."], ["Von Intelligenz angetrieben", "Verbindet KI, Marktstruktur, quantitative Logik und adaptive Analyse."], ["Für Trader entwickelt", "Jede Funktion hilft Tradern, Märkte schneller zu verstehen und fundiertere Entscheidungen zu treffen."], "Kontinuierliche Analyse", "Marktabdeckung", "KI-gestützt"], "pricing": ["PREISE", "Wählen Sie Ihr Intelligenzniveau", "Aktivieren Sie KI-Trading-Intelligenz der nächsten Generation mit einem Plan für Ihren Trading-Stil.", "Monat", "Jetzt starten", "Leistungsstärkste Wahl", "Alle Pläne enthalten sicheren Zugang, laufende Updates und verschlüsselten Kontoschutz."], "plans": [["Starter", "Grundlegende KI-Marktintelligenz für Einsteiger.", "Grundlegende KI-Analyse", "Marktübersicht", "Begrenzte Signale", "Wichtige Risikowerkzeuge", "E-Mail-Support"], ["Pro AI", "Fortschrittliche Intelligenz, Signale und Automatisierung für aktive Trader.", "Fortschrittliche KI-Engine", "Unbegrenzte Analyse", "Intelligente Handelssignale", "Adaptives Risikomanagement", "Priorisierte Updates", "Zugang zu mehreren Märkten"], ["Elite Quant", "Institutionelle Analysen und Premium-Automatisierung.", "Vollständiger KI-Trading-Assistent", "Premium-Indikatoren", "Fortgeschrittene Quant-Analyse", "Individuelle Strategiemodelle", "Private Community", "24/7-Prioritätssupport"]], "faq": ["FAQ", "Häufig gestellte Fragen", "Antworten auf die häufigsten Fragen zu QuantNova AI und seiner intelligenten Trading-Technologie.", ["Was ist QuantNova AI?", "QuantNova AI ist eine KI-gestützte Trading-Plattform zur Marktanalyse, Mustererkennung und Bereitstellung intelligenter Einblicke."], ["Führt QuantNova AI Trades automatisch aus?", "Derzeit liegt der Schwerpunkt auf Analyse, intelligenten Signalen und Entscheidungsunterstützung; erweiterte Automatisierung ist geplant."], ["Welche Märkte werden unterstützt?", "Die Plattform wird für Krypto, Forex, Aktien, Indizes und weitere globale Finanzmärkte entwickelt."], ["Ist QuantNova AI weltweit verfügbar?", "Ja. QuantNova AI wird als globale Finanzintelligenz-Plattform für Trader weltweit entwickelt."]], "footer": ["Bereit, intelligenter zu handeln?", "Erleben Sie künstliche Intelligenz der nächsten Generation für moderne Trader.", "QuantNova starten", "KI-Trading-Intelligenz der nächsten Generation für intelligentere Marktanalysen und bessere Entscheidungen.", "Nach oben"], "ready": "SYSTEM BEREIT"}) },
  fr: { translation: createTranslation({"hero": ["Système QuantNova AI en ligne", "PAR SHAYAN", "Tradez au-delà de", "l’intelligence humaine", "Tradez plus intelligemment avec l’IA", "Un écosystème de trading avancé basé sur l’IA qui analyse les marchés, gère les risques et transforme les données complexes en décisions intelligentes.", "Lancer QuantNova", "Voir les performances", "En direct", "Explorer", "Aller à la section suivante", "Moteur IA avancé", "Analyse en temps réel", "Contrôle intelligent du risque"], "nav": ["Navigation principale", "Aller à l’accueil", "Ouvrir le menu", "Fermer le menu", "Fonctionnalités", "Moteur IA", "Extension", "À propos", "Tarifs", "Lancer l’IA"], "language": ["Choisir la langue", "Langues disponibles", "Langue", "Choisissez votre langue préférée"], "features": ["TECHNOLOGIE IA", "L’avenir du trading intelligent", "Une infrastructure IA puissante conçue pour des analyses plus profondes, des décisions plus intelligentes et une nouvelle génération de trading.", ["Moteur de décision IA", "Des modèles avancés analysent en temps réel la structure du marché, le momentum, la volatilité et les opportunités."], ["Moteur de trading adaptatif", "Des algorithmes intelligents adaptent continuellement leur analyse aux conditions changeantes."], ["Contrôle intelligent du risque", "Des systèmes adaptatifs protègent le capital grâce à une gestion intelligente de l’exposition et des positions."], ["Analyse des marchés 24/7", "QuantNova AI surveille en continu plusieurs marchés pour détecter tendances, signaux et changements importants."]], "performance": ["PERFORMANCE IA", "Une intelligence mesurable", "Suivez l’analyse des marchés, la précision des signaux, l’activité de trading et la confiance du système en temps réel.", "Prévision du marché", "Moteur de croissance IA", "IA EN DIRECT", "Rendement mensuel", "Taux de réussite", "Total des trades", "Score IA"], "extension": ["EXTENSION CHROME IA", "Votre assistant de trading IA, partout", "Intégrez QuantNova AI à votre navigateur et accédez à des analyses intelligentes sans quitter votre espace de trading.", "Connecté", "Prévision IA", "SIGNAL D’ACHAT", "Installer l’extension", "Scanner de marché en temps réel", "Reconnaissance de patterns par IA", "Gestion intelligente du risque"], "about": ["À PROPOS DE QUANTNOVA", "Conçu pour l’avenir du trading", "QuantNova AI associe ingénierie logicielle, intelligence artificielle, analyse quantitative et intelligence financière.", "Créé par", ["Conçu par un développeur", "Développé avec un fort accent sur la performance, l’évolutivité, la sécurité et la qualité durable."], ["Propulsé par l’intelligence", "Combine IA, structure de marché, logique quantitative et analyse adaptative."], ["Pensé pour les traders", "Chaque fonctionnalité aide les traders à comprendre plus vite les marchés et à mieux décider."], "Analyse continue", "Couverture des marchés", "Propulsé par l’IA"], "pricing": ["TARIFS", "Choisissez votre niveau d’intelligence", "Accédez à l’intelligence de trading IA nouvelle génération avec une offre adaptée à votre style.", "mois", "Commencer", "Le plus puissant", "Tous les plans incluent un accès sécurisé, des mises à jour continues et une protection chiffrée du compte."], "plans": [["Starter", "L’essentiel de l’intelligence de marché IA pour débuter.", "Analyse IA de base", "Vue d’ensemble du marché", "Signaux limités", "Outils de risque essentiels", "Support par e-mail"], ["Pro AI", "Intelligence avancée, signaux et automatisation pour traders actifs.", "Moteur IA avancé", "Analyse illimitée", "Signaux de trading intelligents", "Gestion adaptative du risque", "Mises à jour prioritaires", "Accès multi-marchés"], ["Elite Quant", "Analyses institutionnelles et automatisation premium.", "Assistant de trading IA complet", "Indicateurs premium", "Analyse quantitative avancée", "Modèles de stratégie personnalisés", "Communauté privée", "Support prioritaire 24/7"]], "faq": ["FAQ", "Questions fréquentes", "Découvrez les réponses aux questions les plus courantes sur QuantNova AI et sa technologie de trading intelligent.", ["Qu’est-ce que QuantNova AI ?", "QuantNova AI est une plateforme de trading basée sur l’IA conçue pour analyser les marchés, détecter les tendances et fournir des informations intelligentes."], ["QuantNova AI exécute-t-il automatiquement les trades ?", "La plateforme se concentre actuellement sur l’analyse, les signaux intelligents et l’aide à la décision, avec une automatisation avancée prévue."], ["Quels marchés sont pris en charge ?", "QuantNova AI est conçu pour les cryptomonnaies, le forex, les actions, les indices et d’autres marchés mondiaux."], ["QuantNova AI est-il disponible dans le monde entier ?", "Oui. QuantNova AI est développé comme une plateforme mondiale d’intelligence financière."]], "footer": ["Prêt à trader plus intelligemment ?", "Découvrez une intelligence artificielle nouvelle génération conçue pour les traders modernes.", "Lancer QuantNova", "Une intelligence de trading IA nouvelle génération pour des analyses plus intelligentes et de meilleures décisions.", "Retour en haut"], "ready": "SYSTÈME PRÊT"}) },
  es: { translation: createTranslation({"hero": ["Sistema QuantNova AI en línea", "POR SHAYAN", "Opera más allá de", "la inteligencia humana", "Opera de forma más inteligente con IA", "Un ecosistema avanzado de trading con IA que analiza mercados, gestiona riesgos y transforma datos complejos en decisiones inteligentes.", "Iniciar QuantNova", "Ver rendimiento", "En vivo", "Explorar", "Ir a la siguiente sección", "Motor de IA avanzado", "Análisis en tiempo real", "Control inteligente del riesgo"], "nav": ["Navegación principal", "Ir al inicio", "Abrir menú", "Cerrar menú", "Funciones", "Motor de IA", "Extensión", "Acerca de", "Precios", "Iniciar IA"], "language": ["Seleccionar idioma", "Idiomas disponibles", "Idioma", "Elige tu idioma preferido"], "features": ["TECNOLOGÍA DE IA", "El futuro del trading inteligente", "Una potente infraestructura de IA para análisis más profundos, decisiones más inteligentes y trading de nueva generación.", ["Motor de decisiones con IA", "Modelos avanzados analizan en tiempo real la estructura del mercado, el impulso, la volatilidad y nuevas oportunidades."], ["Motor de trading adaptativo", "Algoritmos inteligentes ajustan continuamente su análisis a las condiciones cambiantes."], ["Control inteligente del riesgo", "Sistemas adaptativos protegen el capital mediante una gestión inteligente de exposición y posiciones."], ["Análisis de mercado 24/7", "QuantNova AI supervisa continuamente múltiples mercados para detectar patrones, señales y cambios importantes."]], "performance": ["RENDIMIENTO DE IA", "Inteligencia que puedes medir", "Sigue análisis de mercado con IA, precisión de señales, actividad de trading y confianza del sistema en tiempo real.", "Predicción de mercado", "Motor de crecimiento IA", "IA EN VIVO", "Rendimiento mensual", "Tasa de éxito", "Operaciones totales", "Puntuación IA"], "extension": ["EXTENSIÓN DE IA PARA CHROME", "Tu asistente de trading con IA, en todas partes", "Lleva QuantNova AI directamente a tu navegador y accede a información inteligente sin salir de tu espacio de trading.", "Conectado", "Predicción IA", "SEÑAL DE COMPRA", "Instalar extensión", "Escáner de mercado en tiempo real", "Reconocimiento de patrones con IA", "Gestión inteligente del riesgo"], "about": ["SOBRE QUANTNOVA", "Creado para el futuro del trading", "QuantNova AI combina ingeniería de software, inteligencia artificial, análisis cuantitativo e inteligencia financiera.", "Creado por", ["Creado por un desarrollador", "Diseñado con un fuerte enfoque en rendimiento, escalabilidad, seguridad y calidad a largo plazo."], ["Impulsado por inteligencia", "Combina IA, estructura de mercado, lógica cuantitativa y análisis adaptativo."], ["Diseñado para traders", "Cada función ayuda a comprender los mercados más rápido y tomar mejores decisiones."], "Análisis continuo", "Cobertura de mercados", "Impulsado por IA"], "pricing": ["PRECIOS", "Elige tu nivel de inteligencia", "Accede a inteligencia de trading con IA de nueva generación mediante un plan adaptado a tu estilo.", "mes", "Comenzar", "Más potente", "Todos los planes incluyen acceso seguro, actualizaciones continuas y protección cifrada de la cuenta."], "plans": [["Starter", "Inteligencia de mercado esencial para empezar.", "Análisis básico con IA", "Resumen del mercado", "Señales limitadas", "Herramientas esenciales de riesgo", "Soporte por correo"], ["Pro AI", "Inteligencia avanzada, señales y automatización para traders activos.", "Motor de IA avanzado", "Análisis ilimitado", "Señales inteligentes", "Gestión adaptativa del riesgo", "Actualizaciones prioritarias", "Acceso a múltiples mercados"], ["Elite Quant", "Análisis institucional y automatización premium.", "Asistente de trading IA completo", "Indicadores premium", "Análisis cuantitativo avanzado", "Modelos de estrategia personalizados", "Comunidad privada", "Soporte prioritario 24/7"]], "faq": ["PREGUNTAS FRECUENTES", "Preguntas frecuentes", "Descubre respuestas a las preguntas más comunes sobre QuantNova AI y su tecnología de trading inteligente.", ["¿Qué es QuantNova AI?", "QuantNova AI es una plataforma de trading con IA diseñada para analizar mercados, detectar patrones y ofrecer información inteligente."], ["¿QuantNova AI ejecuta operaciones automáticamente?", "Actualmente se centra en análisis, señales inteligentes y apoyo a decisiones; la automatización avanzada está prevista para futuras versiones."], ["¿Qué mercados son compatibles?", "Está diseñada para criptomonedas, forex, acciones, índices y otros mercados financieros globales."], ["¿Está disponible en todo el mundo?", "Sí. QuantNova AI se desarrolla como una plataforma global de inteligencia financiera."]], "footer": ["¿Listo para operar de forma más inteligente?", "Experimenta inteligencia artificial de nueva generación creada para traders modernos.", "Iniciar QuantNova", "Inteligencia de trading con IA para análisis más inteligentes y mejores decisiones.", "Volver arriba"], "ready": "SISTEMA LISTO"}) },
  it: { translation: createTranslation({"hero": ["Sistema QuantNova AI online", "DI SHAYAN", "Fai trading oltre", "l’intelligenza umana", "Fai trading in modo più intelligente con l’IA", "An advanced AI trading ecosystem that analyzes markets, manages risk, and transforms complex data into intelligent trading decisions.", "Avvia QuantNova", "Visualizza performance", "Live", "Explore", "Scroll to the next section", "Advanced AI Engine", "Real-Time Analysis", "Smart Risk Control"], "nav": ["Primary navigation", "Go to homepage", "Open navigation menu", "Close navigation menu", "Funzionalità", "Motore IA", "Estensione", "Chi siamo", "Prezzi", "Launch AI"], "language": ["Select language", "Available languages", "Language", "Choose your preferred language"], "features": ["TECNOLOGIA IA", "Il futuro del trading intelligente", "A powerful artificial intelligence infrastructure built for deeper market analysis, smarter decisions, and next-generation trading intelligence.", ["AI Decision Engine", "Advanced AI models analyze market structure, momentum, volatility, and emerging opportunities in real time."], ["Adaptive Trading Engine", "Intelligent algorithms continuously adapt their analysis to changing market conditions."], ["Smart Risk Control", "Adaptive risk systems help protect capital through intelligent risk management."], ["24/7 Market Analysis", "QuantNova AI continuously monitors multiple financial markets for patterns, signals, and meaningful changes."]], "performance": ["PERFORMANCE IA", "Intelligenza misurabile", "Track AI-driven market analysis, signal accuracy, trading activity, and system confidence in real time.", "Market Prediction", "AI Growth Engine", "LIVE AI", "Monthly Return", "Win Rate", "Total Trades", "AI Score"], "extension": ["CHROME AI EXTENSION", "Your AI Trading Assistant, Everywhere", "Bring QuantNova AI directly into your browser and access intelligent market insights without leaving your workspace.", "Connected", "AI Prediction", "BUY SIGNAL", "Install Extension", "Real-Time Market Scanner", "AI Pattern Recognition", "Smart Risk Management"], "about": ["ABOUT QUANTNOVA", "Built for the Future of Trading", "QuantNova AI combines software engineering, artificial intelligence, quantitative analysis, and financial intelligence.", "Created by", ["Built by a Developer", "Engineered with a focus on performance, scalability, security, and long-term quality."], ["Powered by Intelligence", "Combining AI, market structure, quantitative logic, and adaptive analysis."], ["Designed for Traders", "Every feature helps traders understand markets faster and make better decisions."], "Continuous Analysis", "Market Coverage", "Intelligence Powered"], "pricing": ["PREZZI", "Scegli il tuo livello di intelligenza", "Unlock next-generation AI trading intelligence with a plan designed around your trading style.", "month", "Get Started", "Most Powerful", "All plans include secure access, continuous updates, and encrypted account protection."], "plans": [["Starter", "Essential AI market intelligence for traders getting started.", "Basic AI Analysis", "Market Overview", "Limited Signals", "Essential Risk Tools", "Email Support"], ["Pro AI", "Advanced intelligence, signals, and automation for active traders.", "Advanced AI Engine", "Unlimited Analysis", "Smart Trading Signals", "Adaptive Risk Management", "Priority Updates", "Multi-Market Access"], ["Elite Quant", "Institutional-grade analytics and premium automation capabilities.", "Full AI Trading Assistant", "Premium Indicators", "Advanced Quant Analytics", "Custom Strategy Models", "Private Community", "24/7 Priority Support"]], "faq": ["FAQ", "Domande frequenti", "Explore the most common questions about QuantNova AI and its intelligent trading technology.", ["What is QuantNova AI?", "QuantNova AI is an AI trading platform designed to analyze markets and deliver intelligent insights."], ["Does QuantNova AI execute trades automatically?", "It currently focuses on analysis, intelligent signals, and decision support, with advanced automation planned."], ["Which markets are supported?", "It is being designed for crypto, forex, stocks, indices, and other global markets."], ["Is QuantNova AI available worldwide?", "Yes. It is being developed as a global financial intelligence platform."]], "footer": ["Pronto a fare trading in modo più intelligente?", "Experience next-generation artificial intelligence built for modern traders.", "Avvia QuantNova", "Next-generation AI trading intelligence designed for smarter market analysis and better decisions.", "Torna in alto"], "ready": "SISTEMA PRONTO"}) },
  pt: { translation: createTranslation({"hero": ["Sistema QuantNova AI online", "POR SHAYAN", "Negocie além da", "inteligência humana", "Negocie de forma mais inteligente com IA", "An advanced AI trading ecosystem that analyzes markets, manages risk, and transforms complex data into intelligent trading decisions.", "Iniciar QuantNova", "Ver desempenho", "Live", "Explore", "Scroll to the next section", "Advanced AI Engine", "Real-Time Analysis", "Smart Risk Control"], "nav": ["Primary navigation", "Go to homepage", "Open navigation menu", "Close navigation menu", "Funcionalidades", "Motor de IA", "Extensão", "Sobre", "Preços", "Launch AI"], "language": ["Select language", "Available languages", "Language", "Choose your preferred language"], "features": ["TECNOLOGIA DE IA", "O futuro do trading inteligente", "A powerful artificial intelligence infrastructure built for deeper market analysis, smarter decisions, and next-generation trading intelligence.", ["AI Decision Engine", "Advanced AI models analyze market structure, momentum, volatility, and emerging opportunities in real time."], ["Adaptive Trading Engine", "Intelligent algorithms continuously adapt their analysis to changing market conditions."], ["Smart Risk Control", "Adaptive risk systems help protect capital through intelligent risk management."], ["24/7 Market Analysis", "QuantNova AI continuously monitors multiple financial markets for patterns, signals, and meaningful changes."]], "performance": ["DESEMPENHO DA IA", "Inteligência que pode medir", "Track AI-driven market analysis, signal accuracy, trading activity, and system confidence in real time.", "Market Prediction", "AI Growth Engine", "LIVE AI", "Monthly Return", "Win Rate", "Total Trades", "AI Score"], "extension": ["CHROME AI EXTENSION", "Your AI Trading Assistant, Everywhere", "Bring QuantNova AI directly into your browser and access intelligent market insights without leaving your workspace.", "Connected", "AI Prediction", "BUY SIGNAL", "Install Extension", "Real-Time Market Scanner", "AI Pattern Recognition", "Smart Risk Management"], "about": ["ABOUT QUANTNOVA", "Built for the Future of Trading", "QuantNova AI combines software engineering, artificial intelligence, quantitative analysis, and financial intelligence.", "Created by", ["Built by a Developer", "Engineered with a focus on performance, scalability, security, and long-term quality."], ["Powered by Intelligence", "Combining AI, market structure, quantitative logic, and adaptive analysis."], ["Designed for Traders", "Every feature helps traders understand markets faster and make better decisions."], "Continuous Analysis", "Market Coverage", "Intelligence Powered"], "pricing": ["PREÇOS", "Escolha o seu nível de inteligência", "Unlock next-generation AI trading intelligence with a plan designed around your trading style.", "month", "Get Started", "Most Powerful", "All plans include secure access, continuous updates, and encrypted account protection."], "plans": [["Starter", "Essential AI market intelligence for traders getting started.", "Basic AI Analysis", "Market Overview", "Limited Signals", "Essential Risk Tools", "Email Support"], ["Pro AI", "Advanced intelligence, signals, and automation for active traders.", "Advanced AI Engine", "Unlimited Analysis", "Smart Trading Signals", "Adaptive Risk Management", "Priority Updates", "Multi-Market Access"], ["Elite Quant", "Institutional-grade analytics and premium automation capabilities.", "Full AI Trading Assistant", "Premium Indicators", "Advanced Quant Analytics", "Custom Strategy Models", "Private Community", "24/7 Priority Support"]], "faq": ["FAQ", "Perguntas frequentes", "Explore the most common questions about QuantNova AI and its intelligent trading technology.", ["What is QuantNova AI?", "QuantNova AI is an AI trading platform designed to analyze markets and deliver intelligent insights."], ["Does QuantNova AI execute trades automatically?", "It currently focuses on analysis, intelligent signals, and decision support, with advanced automation planned."], ["Which markets are supported?", "It is being designed for crypto, forex, stocks, indices, and other global markets."], ["Is QuantNova AI available worldwide?", "Yes. It is being developed as a global financial intelligence platform."]], "footer": ["Pronto para negociar de forma mais inteligente?", "Experience next-generation artificial intelligence built for modern traders.", "Iniciar QuantNova", "Next-generation AI trading intelligence designed for smarter market analysis and better decisions.", "Voltar ao topo"], "ready": "SISTEMA PRONTO"}) },
  ru: { translation: createTranslation({"hero": ["Система QuantNova AI онлайн", "ОТ SHAYAN", "Торгуйте за пределами", "человеческого интеллекта", "Торгуйте умнее с ИИ", "An advanced AI trading ecosystem that analyzes markets, manages risk, and transforms complex data into intelligent trading decisions.", "Запустить QuantNova", "Посмотреть результаты", "Live", "Explore", "Scroll to the next section", "Advanced AI Engine", "Real-Time Analysis", "Smart Risk Control"], "nav": ["Primary navigation", "Go to homepage", "Open navigation menu", "Close navigation menu", "Возможности", "ИИ-движок", "Расширение", "О нас", "Тарифы", "Launch AI"], "language": ["Select language", "Available languages", "Language", "Choose your preferred language"], "features": ["ТЕХНОЛОГИЯ ИИ", "Будущее интеллектуальной торговли", "A powerful artificial intelligence infrastructure built for deeper market analysis, smarter decisions, and next-generation trading intelligence.", ["AI Decision Engine", "Advanced AI models analyze market structure, momentum, volatility, and emerging opportunities in real time."], ["Adaptive Trading Engine", "Intelligent algorithms continuously adapt their analysis to changing market conditions."], ["Smart Risk Control", "Adaptive risk systems help protect capital through intelligent risk management."], ["24/7 Market Analysis", "QuantNova AI continuously monitors multiple financial markets for patterns, signals, and meaningful changes."]], "performance": ["ЭФФЕКТИВНОСТЬ ИИ", "Интеллект, который можно измерить", "Track AI-driven market analysis, signal accuracy, trading activity, and system confidence in real time.", "Market Prediction", "AI Growth Engine", "LIVE AI", "Monthly Return", "Win Rate", "Total Trades", "AI Score"], "extension": ["CHROME AI EXTENSION", "Your AI Trading Assistant, Everywhere", "Bring QuantNova AI directly into your browser and access intelligent market insights without leaving your workspace.", "Connected", "AI Prediction", "BUY SIGNAL", "Install Extension", "Real-Time Market Scanner", "AI Pattern Recognition", "Smart Risk Management"], "about": ["ABOUT QUANTNOVA", "Built for the Future of Trading", "QuantNova AI combines software engineering, artificial intelligence, quantitative analysis, and financial intelligence.", "Created by", ["Built by a Developer", "Engineered with a focus on performance, scalability, security, and long-term quality."], ["Powered by Intelligence", "Combining AI, market structure, quantitative logic, and adaptive analysis."], ["Designed for Traders", "Every feature helps traders understand markets faster and make better decisions."], "Continuous Analysis", "Market Coverage", "Intelligence Powered"], "pricing": ["ТАРИФЫ", "Выберите уровень интеллекта", "Unlock next-generation AI trading intelligence with a plan designed around your trading style.", "month", "Get Started", "Most Powerful", "All plans include secure access, continuous updates, and encrypted account protection."], "plans": [["Starter", "Essential AI market intelligence for traders getting started.", "Basic AI Analysis", "Market Overview", "Limited Signals", "Essential Risk Tools", "Email Support"], ["Pro AI", "Advanced intelligence, signals, and automation for active traders.", "Advanced AI Engine", "Unlimited Analysis", "Smart Trading Signals", "Adaptive Risk Management", "Priority Updates", "Multi-Market Access"], ["Elite Quant", "Institutional-grade analytics and premium automation capabilities.", "Full AI Trading Assistant", "Premium Indicators", "Advanced Quant Analytics", "Custom Strategy Models", "Private Community", "24/7 Priority Support"]], "faq": ["ВОПРОСЫ", "Часто задаваемые вопросы", "Explore the most common questions about QuantNova AI and its intelligent trading technology.", ["What is QuantNova AI?", "QuantNova AI is an AI trading platform designed to analyze markets and deliver intelligent insights."], ["Does QuantNova AI execute trades automatically?", "It currently focuses on analysis, intelligent signals, and decision support, with advanced automation planned."], ["Which markets are supported?", "It is being designed for crypto, forex, stocks, indices, and other global markets."], ["Is QuantNova AI available worldwide?", "Yes. It is being developed as a global financial intelligence platform."]], "footer": ["Готовы торговать умнее?", "Experience next-generation artificial intelligence built for modern traders.", "Запустить QuantNova", "Next-generation AI trading intelligence designed for smarter market analysis and better decisions.", "Наверх"], "ready": "СИСТЕМА ГОТОВА"}) },
  ar: { translation: createTranslation({"hero": ["نظام QuantNova AI متصل", "بواسطة شايان", "تداول أبعد من", "حدود الذكاء البشري", "تداول بذكاء أكبر مع الذكاء الاصطناعي", "An advanced AI trading ecosystem that analyzes markets, manages risk, and transforms complex data into intelligent trading decisions.", "تشغيل QuantNova", "عرض الأداء", "Live", "Explore", "Scroll to the next section", "Advanced AI Engine", "Real-Time Analysis", "Smart Risk Control"], "nav": ["Primary navigation", "Go to homepage", "Open navigation menu", "Close navigation menu", "الميزات", "محرك الذكاء الاصطناعي", "الإضافة", "من نحن", "الأسعار", "Launch AI"], "language": ["Select language", "Available languages", "Language", "Choose your preferred language"], "features": ["تقنية الذكاء الاصطناعي", "مستقبل التداول الذكي", "A powerful artificial intelligence infrastructure built for deeper market analysis, smarter decisions, and next-generation trading intelligence.", ["AI Decision Engine", "Advanced AI models analyze market structure, momentum, volatility, and emerging opportunities in real time."], ["Adaptive Trading Engine", "Intelligent algorithms continuously adapt their analysis to changing market conditions."], ["Smart Risk Control", "Adaptive risk systems help protect capital through intelligent risk management."], ["24/7 Market Analysis", "QuantNova AI continuously monitors multiple financial markets for patterns, signals, and meaningful changes."]], "performance": ["أداء الذكاء الاصطناعي", "ذكاء يمكنك قياسه", "Track AI-driven market analysis, signal accuracy, trading activity, and system confidence in real time.", "Market Prediction", "AI Growth Engine", "LIVE AI", "Monthly Return", "Win Rate", "Total Trades", "AI Score"], "extension": ["CHROME AI EXTENSION", "Your AI Trading Assistant, Everywhere", "Bring QuantNova AI directly into your browser and access intelligent market insights without leaving your workspace.", "Connected", "AI Prediction", "BUY SIGNAL", "Install Extension", "Real-Time Market Scanner", "AI Pattern Recognition", "Smart Risk Management"], "about": ["ABOUT QUANTNOVA", "Built for the Future of Trading", "QuantNova AI combines software engineering, artificial intelligence, quantitative analysis, and financial intelligence.", "Created by", ["Built by a Developer", "Engineered with a focus on performance, scalability, security, and long-term quality."], ["Powered by Intelligence", "Combining AI, market structure, quantitative logic, and adaptive analysis."], ["Designed for Traders", "Every feature helps traders understand markets faster and make better decisions."], "Continuous Analysis", "Market Coverage", "Intelligence Powered"], "pricing": ["الأسعار", "اختر مستوى الذكاء المناسب لك", "Unlock next-generation AI trading intelligence with a plan designed around your trading style.", "month", "Get Started", "Most Powerful", "All plans include secure access, continuous updates, and encrypted account protection."], "plans": [["Starter", "Essential AI market intelligence for traders getting started.", "Basic AI Analysis", "Market Overview", "Limited Signals", "Essential Risk Tools", "Email Support"], ["Pro AI", "Advanced intelligence, signals, and automation for active traders.", "Advanced AI Engine", "Unlimited Analysis", "Smart Trading Signals", "Adaptive Risk Management", "Priority Updates", "Multi-Market Access"], ["Elite Quant", "Institutional-grade analytics and premium automation capabilities.", "Full AI Trading Assistant", "Premium Indicators", "Advanced Quant Analytics", "Custom Strategy Models", "Private Community", "24/7 Priority Support"]], "faq": ["الأسئلة الشائعة", "الأسئلة المتكررة", "Explore the most common questions about QuantNova AI and its intelligent trading technology.", ["What is QuantNova AI?", "QuantNova AI is an AI trading platform designed to analyze markets and deliver intelligent insights."], ["Does QuantNova AI execute trades automatically?", "It currently focuses on analysis, intelligent signals, and decision support, with advanced automation planned."], ["Which markets are supported?", "It is being designed for crypto, forex, stocks, indices, and other global markets."], ["Is QuantNova AI available worldwide?", "Yes. It is being developed as a global financial intelligence platform."]], "footer": ["هل أنت مستعد لتداول أذكى؟", "Experience next-generation artificial intelligence built for modern traders.", "تشغيل QuantNova", "Next-generation AI trading intelligence designed for smarter market analysis and better decisions.", "العودة للأعلى"], "ready": "النظام جاهز"}) },
  zh: { translation: createTranslation({"hero": ["QuantNova AI 系统在线", "SHAYAN 打造", "超越", "人类智能进行交易", "用 AI 更聪明地交易", "An advanced AI trading ecosystem that analyzes markets, manages risk, and transforms complex data into intelligent trading decisions.", "启动 QuantNova", "查看表现", "Live", "Explore", "Scroll to the next section", "Advanced AI Engine", "Real-Time Analysis", "Smart Risk Control"], "nav": ["Primary navigation", "Go to homepage", "Open navigation menu", "Close navigation menu", "功能", "AI 引擎", "扩展程序", "关于我们", "价格", "Launch AI"], "language": ["Select language", "Available languages", "Language", "Choose your preferred language"], "features": ["AI 技术", "智能交易的未来", "A powerful artificial intelligence infrastructure built for deeper market analysis, smarter decisions, and next-generation trading intelligence.", ["AI Decision Engine", "Advanced AI models analyze market structure, momentum, volatility, and emerging opportunities in real time."], ["Adaptive Trading Engine", "Intelligent algorithms continuously adapt their analysis to changing market conditions."], ["Smart Risk Control", "Adaptive risk systems help protect capital through intelligent risk management."], ["24/7 Market Analysis", "QuantNova AI continuously monitors multiple financial markets for patterns, signals, and meaningful changes."]], "performance": ["AI 表现", "可衡量的智能", "Track AI-driven market analysis, signal accuracy, trading activity, and system confidence in real time.", "Market Prediction", "AI Growth Engine", "LIVE AI", "Monthly Return", "Win Rate", "Total Trades", "AI Score"], "extension": ["CHROME AI EXTENSION", "Your AI Trading Assistant, Everywhere", "Bring QuantNova AI directly into your browser and access intelligent market insights without leaving your workspace.", "Connected", "AI Prediction", "BUY SIGNAL", "Install Extension", "Real-Time Market Scanner", "AI Pattern Recognition", "Smart Risk Management"], "about": ["ABOUT QUANTNOVA", "Built for the Future of Trading", "QuantNova AI combines software engineering, artificial intelligence, quantitative analysis, and financial intelligence.", "Created by", ["Built by a Developer", "Engineered with a focus on performance, scalability, security, and long-term quality."], ["Powered by Intelligence", "Combining AI, market structure, quantitative logic, and adaptive analysis."], ["Designed for Traders", "Every feature helps traders understand markets faster and make better decisions."], "Continuous Analysis", "Market Coverage", "Intelligence Powered"], "pricing": ["价格", "选择您的智能等级", "Unlock next-generation AI trading intelligence with a plan designed around your trading style.", "month", "Get Started", "Most Powerful", "All plans include secure access, continuous updates, and encrypted account protection."], "plans": [["Starter", "Essential AI market intelligence for traders getting started.", "Basic AI Analysis", "Market Overview", "Limited Signals", "Essential Risk Tools", "Email Support"], ["Pro AI", "Advanced intelligence, signals, and automation for active traders.", "Advanced AI Engine", "Unlimited Analysis", "Smart Trading Signals", "Adaptive Risk Management", "Priority Updates", "Multi-Market Access"], ["Elite Quant", "Institutional-grade analytics and premium automation capabilities.", "Full AI Trading Assistant", "Premium Indicators", "Advanced Quant Analytics", "Custom Strategy Models", "Private Community", "24/7 Priority Support"]], "faq": ["常见问题", "常见问题解答", "Explore the most common questions about QuantNova AI and its intelligent trading technology.", ["What is QuantNova AI?", "QuantNova AI is an AI trading platform designed to analyze markets and deliver intelligent insights."], ["Does QuantNova AI execute trades automatically?", "It currently focuses on analysis, intelligent signals, and decision support, with advanced automation planned."], ["Which markets are supported?", "It is being designed for crypto, forex, stocks, indices, and other global markets."], ["Is QuantNova AI available worldwide?", "Yes. It is being developed as a global financial intelligence platform."]], "footer": ["准备好更聪明地交易了吗？", "Experience next-generation artificial intelligence built for modern traders.", "启动 QuantNova", "Next-generation AI trading intelligence designed for smarter market analysis and better decisions.", "返回顶部"], "ready": "系统就绪"}) },
  ja: { translation: createTranslation({"hero": ["QuantNova AI システム稼働中", "SHAYAN 制作", "人間の知性を", "超えて取引する", "AIでより賢く取引する", "An advanced AI trading ecosystem that analyzes markets, manages risk, and transforms complex data into intelligent trading decisions.", "QuantNovaを起動", "パフォーマンスを見る", "Live", "Explore", "Scroll to the next section", "Advanced AI Engine", "Real-Time Analysis", "Smart Risk Control"], "nav": ["Primary navigation", "Go to homepage", "Open navigation menu", "Close navigation menu", "機能", "AIエンジン", "拡張機能", "概要", "料金", "Launch AI"], "language": ["Select language", "Available languages", "Language", "Choose your preferred language"], "features": ["AIテクノロジー", "インテリジェント取引の未来", "A powerful artificial intelligence infrastructure built for deeper market analysis, smarter decisions, and next-generation trading intelligence.", ["AI Decision Engine", "Advanced AI models analyze market structure, momentum, volatility, and emerging opportunities in real time."], ["Adaptive Trading Engine", "Intelligent algorithms continuously adapt their analysis to changing market conditions."], ["Smart Risk Control", "Adaptive risk systems help protect capital through intelligent risk management."], ["24/7 Market Analysis", "QuantNova AI continuously monitors multiple financial markets for patterns, signals, and meaningful changes."]], "performance": ["AIパフォーマンス", "測定できるインテリジェンス", "Track AI-driven market analysis, signal accuracy, trading activity, and system confidence in real time.", "Market Prediction", "AI Growth Engine", "LIVE AI", "Monthly Return", "Win Rate", "Total Trades", "AI Score"], "extension": ["CHROME AI EXTENSION", "Your AI Trading Assistant, Everywhere", "Bring QuantNova AI directly into your browser and access intelligent market insights without leaving your workspace.", "Connected", "AI Prediction", "BUY SIGNAL", "Install Extension", "Real-Time Market Scanner", "AI Pattern Recognition", "Smart Risk Management"], "about": ["ABOUT QUANTNOVA", "Built for the Future of Trading", "QuantNova AI combines software engineering, artificial intelligence, quantitative analysis, and financial intelligence.", "Created by", ["Built by a Developer", "Engineered with a focus on performance, scalability, security, and long-term quality."], ["Powered by Intelligence", "Combining AI, market structure, quantitative logic, and adaptive analysis."], ["Designed for Traders", "Every feature helps traders understand markets faster and make better decisions."], "Continuous Analysis", "Market Coverage", "Intelligence Powered"], "pricing": ["料金", "インテリジェンスレベルを選択", "Unlock next-generation AI trading intelligence with a plan designed around your trading style.", "month", "Get Started", "Most Powerful", "All plans include secure access, continuous updates, and encrypted account protection."], "plans": [["Starter", "Essential AI market intelligence for traders getting started.", "Basic AI Analysis", "Market Overview", "Limited Signals", "Essential Risk Tools", "Email Support"], ["Pro AI", "Advanced intelligence, signals, and automation for active traders.", "Advanced AI Engine", "Unlimited Analysis", "Smart Trading Signals", "Adaptive Risk Management", "Priority Updates", "Multi-Market Access"], ["Elite Quant", "Institutional-grade analytics and premium automation capabilities.", "Full AI Trading Assistant", "Premium Indicators", "Advanced Quant Analytics", "Custom Strategy Models", "Private Community", "24/7 Priority Support"]], "faq": ["FAQ", "よくある質問", "Explore the most common questions about QuantNova AI and its intelligent trading technology.", ["What is QuantNova AI?", "QuantNova AI is an AI trading platform designed to analyze markets and deliver intelligent insights."], ["Does QuantNova AI execute trades automatically?", "It currently focuses on analysis, intelligent signals, and decision support, with advanced automation planned."], ["Which markets are supported?", "It is being designed for crypto, forex, stocks, indices, and other global markets."], ["Is QuantNova AI available worldwide?", "Yes. It is being developed as a global financial intelligence platform."]], "footer": ["より賢い取引を始める準備はできましたか？", "Experience next-generation artificial intelligence built for modern traders.", "QuantNovaを起動", "Next-generation AI trading intelligence designed for smarter market analysis and better decisions.", "トップへ戻る"], "ready": "システム準備完了"}) },
  ko: { translation: createTranslation({"hero": ["QuantNova AI 시스템 온라인", "SHAYAN 제작", "인간 지능을", "넘어 거래하세요", "AI로 더 스마트하게 거래하세요", "An advanced AI trading ecosystem that analyzes markets, manages risk, and transforms complex data into intelligent trading decisions.", "QuantNova 실행", "성과 보기", "Live", "Explore", "Scroll to the next section", "Advanced AI Engine", "Real-Time Analysis", "Smart Risk Control"], "nav": ["Primary navigation", "Go to homepage", "Open navigation menu", "Close navigation menu", "기능", "AI 엔진", "확장 프로그램", "소개", "요금", "Launch AI"], "language": ["Select language", "Available languages", "Language", "Choose your preferred language"], "features": ["AI 기술", "지능형 거래의 미래", "A powerful artificial intelligence infrastructure built for deeper market analysis, smarter decisions, and next-generation trading intelligence.", ["AI Decision Engine", "Advanced AI models analyze market structure, momentum, volatility, and emerging opportunities in real time."], ["Adaptive Trading Engine", "Intelligent algorithms continuously adapt their analysis to changing market conditions."], ["Smart Risk Control", "Adaptive risk systems help protect capital through intelligent risk management."], ["24/7 Market Analysis", "QuantNova AI continuously monitors multiple financial markets for patterns, signals, and meaningful changes."]], "performance": ["AI 성과", "측정 가능한 인텔리전스", "Track AI-driven market analysis, signal accuracy, trading activity, and system confidence in real time.", "Market Prediction", "AI Growth Engine", "LIVE AI", "Monthly Return", "Win Rate", "Total Trades", "AI Score"], "extension": ["CHROME AI EXTENSION", "Your AI Trading Assistant, Everywhere", "Bring QuantNova AI directly into your browser and access intelligent market insights without leaving your workspace.", "Connected", "AI Prediction", "BUY SIGNAL", "Install Extension", "Real-Time Market Scanner", "AI Pattern Recognition", "Smart Risk Management"], "about": ["ABOUT QUANTNOVA", "Built for the Future of Trading", "QuantNova AI combines software engineering, artificial intelligence, quantitative analysis, and financial intelligence.", "Created by", ["Built by a Developer", "Engineered with a focus on performance, scalability, security, and long-term quality."], ["Powered by Intelligence", "Combining AI, market structure, quantitative logic, and adaptive analysis."], ["Designed for Traders", "Every feature helps traders understand markets faster and make better decisions."], "Continuous Analysis", "Market Coverage", "Intelligence Powered"], "pricing": ["요금", "인텔리전스 수준 선택", "Unlock next-generation AI trading intelligence with a plan designed around your trading style.", "month", "Get Started", "Most Powerful", "All plans include secure access, continuous updates, and encrypted account protection."], "plans": [["Starter", "Essential AI market intelligence for traders getting started.", "Basic AI Analysis", "Market Overview", "Limited Signals", "Essential Risk Tools", "Email Support"], ["Pro AI", "Advanced intelligence, signals, and automation for active traders.", "Advanced AI Engine", "Unlimited Analysis", "Smart Trading Signals", "Adaptive Risk Management", "Priority Updates", "Multi-Market Access"], ["Elite Quant", "Institutional-grade analytics and premium automation capabilities.", "Full AI Trading Assistant", "Premium Indicators", "Advanced Quant Analytics", "Custom Strategy Models", "Private Community", "24/7 Priority Support"]], "faq": ["FAQ", "자주 묻는 질문", "Explore the most common questions about QuantNova AI and its intelligent trading technology.", ["What is QuantNova AI?", "QuantNova AI is an AI trading platform designed to analyze markets and deliver intelligent insights."], ["Does QuantNova AI execute trades automatically?", "It currently focuses on analysis, intelligent signals, and decision support, with advanced automation planned."], ["Which markets are supported?", "It is being designed for crypto, forex, stocks, indices, and other global markets."], ["Is QuantNova AI available worldwide?", "Yes. It is being developed as a global financial intelligence platform."]], "footer": ["더 스마트하게 거래할 준비가 되셨나요?", "Experience next-generation artificial intelligence built for modern traders.", "QuantNova 실행", "Next-generation AI trading intelligence designed for smarter market analysis and better decisions.", "맨 위로"], "ready": "시스템 준비 완료"}) },
} as const;

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: [
      "en",
      "fa",
      "tr",
      "de",
      "fr",
      "es",
      "it",
      "pt",
      "ru",
      "ar",
      "zh",
      "ja",
      "ko",
    ],
    load: "languageOnly",
    cleanCode: true,
    nonExplicitSupportedLngs: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    detection: {
      order: [
        "localStorage",
        "navigator",
        "htmlTag",
      ],
      caches: ["localStorage"],
      lookupLocalStorage: "quantnova-language",
      convertDetectedLanguage: (language) =>
        language.toLowerCase().split("-")[0],
    },
    returnNull: false,
  });

export default i18n;