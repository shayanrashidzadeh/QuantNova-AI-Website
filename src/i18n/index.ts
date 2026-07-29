import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";






const resources = {

en: {

translation: {


hero: {

title:"Trade Smarter With AI",

creator:"BY SHAYAN",

subtitle:
"Advanced artificial intelligence designed for next-generation trading decisions.",

button:"Launch QuantNova",

performance:"View Performance"

},



system: {

ready:"SYSTEM READY"

},




navbar: {

features:"Features",

ai:"AI Engine",

extension:"Extension",

about:"About",

pricing:"Pricing",

launch:"Launch AI"

},





features:{


tag:"AI TECHNOLOGY",

title:"The Future Of AI Trading",

description:
"Powerful artificial intelligence infrastructure designed for smarter analysis, safer decisions and next-generation trading.",


cards:[

{
title:"AI Market Intelligence",
text:"Advanced AI models analyze markets and detect opportunities in real time."
},

{
title:"Adaptive Trading Engine",
text:"Smart algorithms adjust strategies according to market conditions."
},

{
title:"AI Risk Protection",
text:"Intelligent systems protect capital with advanced risk control."
},

{
title:"Real-Time Signal Network",
text:"AI-powered insights across multiple financial markets."
}

]


},






performance:{


tag:"AI PERFORMANCE",

title:"AI Performance Analytics",

description:
"Track intelligent trading decisions with real-time AI performance analysis.",


prediction:"Market Prediction",

engine:"AI Growth Engine",

live:"LIVE AI",


stats:{


monthly:"Monthly Return",

win:"Win Rate",

trades:"Total Trades",

score:"AI Score"

}


},








extension:{


tag:"CHROME AI EXTENSION",

title:"Your AI Trading Assistant Everywhere",

description:
"Connect QuantNova AI directly with your browser and receive intelligent market insights instantly.",


connected:"Connected",

prediction:"AI Prediction",

signal:"BUY SIGNAL",


button:"Install Extension",



cards:{


chart:"Real-Time Market Scanner",

pattern:"AI Pattern Recognition",

risk:"Smart Risk Management"


}


},







about:{


tag:"ABOUT QUANTNOVA",

title:"Building The Future Of AI Trading",

description:
"QuantNova AI combines software engineering, artificial intelligence and financial intelligence to create next generation autonomous trading technology.",


cards:[

{
title:"Software Engineering",
text:"Building advanced AI infrastructure with modern scalable technologies."
},

{
title:"Artificial Intelligence",
text:"Creating intelligent systems that understand complex market behavior."
},

{
title:"Smart Trading",
text:"Combining financial intelligence with adaptive automated strategies."
}

],


stats:{

analysis:"AI Analysis",

markets:"Markets",

powered:"Powered"

}


},








faq:{


tag:"FAQ",

title:"Frequently Asked Questions",

description:"Find answers about QuantNova AI and our trading technology.",


items:[

{
question:"What is QuantNova AI?",
answer:"QuantNova AI is an artificial intelligence trading platform designed to analyze markets and provide intelligent insights."
},

{
question:"Does QuantNova AI execute trades automatically?",
answer:"QuantNova AI focuses on analysis, signals and intelligent assistance with future automation capabilities."
},

{
question:"Which markets are supported?",
answer:"QuantNova AI is designed for multiple financial markets including crypto and traditional markets."
},

{
question:"Is QuantNova AI available worldwide?",
answer:"Yes, the platform is designed as a global AI trading solution."
}

]


},







footer:{


title:"Ready To Trade Smarter?",

description:
"Experience next-generation AI intelligence built for modern traders.",

launch:"Launch QuantNova",

brand:
"Next generation AI trading intelligence platform designed for smarter market decisions.",

top:"Back To Top"


}



}



},







fa:{


translation:{


hero:{


title:"با هوش مصنوعی هوشمندتر معامله کنید",

creator:"ساخته شده توسط شایان",

subtitle:
"هوش مصنوعی پیشرفته برای تصمیم‌گیری‌های نسل جدید در معاملات.",

button:"شروع QuantNova",

performance:"مشاهده عملکرد"


},



system:{

ready:"سیستم آماده است"

},




navbar:{


features:"ویژگی‌ها",

ai:"موتور هوش مصنوعی",

extension:"افزونه",

about:"درباره ما",

pricing:"قیمت‌ها",

launch:"شروع AI"

},







features:{


tag:"تکنولوژی AI",

title:"آینده معاملات با هوش مصنوعی",

description:
"زیرساخت قدرتمند هوش مصنوعی برای تحلیل بهتر، تصمیم‌های امن‌تر و معاملات نسل آینده.",



cards:[


{
title:"هوش بازار AI",
text:"مدل‌های پیشرفته بازارها را تحلیل و فرصت‌ها را لحظه‌ای شناسایی می‌کنند."
},


{
title:"موتور معاملاتی تطبیقی",
text:"الگوریتم‌های هوشمند با شرایط بازار هماهنگ می‌شوند."
},


{
title:"محافظت ریسک AI",
text:"سیستم‌های هوشمند سرمایه را با مدیریت ریسک محافظت می‌کنند."
},


{
title:"شبکه سیگنال لحظه‌ای",
text:"تحلیل‌ها و فرصت‌های بازار توسط هوش مصنوعی."
}


]


},








performance:{


tag:"عملکرد AI",

title:"تحلیل عملکرد هوشمند",

description:
"تصمیمات معاملاتی هوشمند را با تحلیل لحظه‌ای دنبال کنید.",


prediction:"پیش‌بینی بازار",

engine:"موتور رشد AI",

live:"زنده",


stats:{


monthly:"بازده ماهانه",

win:"نرخ موفقیت",

trades:"تعداد معاملات",

score:"امتیاز AI"


}


},







extension:{


tag:"افزونه هوشمند AI",

title:"دستیار معاملاتی هوشمند شما",

description:
"QuantNova AI را مستقیماً به مرورگر خود متصل کنید و تحلیل‌های هوشمند دریافت کنید.",


connected:"متصل",

prediction:"پیش‌بینی AI",

signal:"سیگنال خرید",


button:"نصب افزونه",


cards:{


chart:"اسکن لحظه‌ای بازار",

pattern:"تشخیص الگو با AI",

risk:"مدیریت ریسک هوشمند"


}


},








about:{


tag:"درباره QUANTNOVA",

title:"ساخت آینده معاملات هوشمند",

description:
"QuantNova ترکیبی از مهندسی نرم‌افزار، هوش مصنوعی و دانش مالی برای ساخت تکنولوژی معاملاتی نسل جدید است.",


cards:[


{
title:"مهندسی نرم‌افزار",
text:"ساخت زیرساخت‌های پیشرفته AI با تکنولوژی‌های مدرن."
},


{
title:"هوش مصنوعی",
text:"ساخت سیستم‌هایی که رفتار پیچیده بازار را درک می‌کنند."
},


{
title:"معاملات هوشمند",
text:"ترکیب هوش مالی با استراتژی‌های تطبیقی."
}


],


stats:{


analysis:"تحلیل AI",

markets:"بازارها",

powered:"قدرت گرفته از AI"


}


},







faq:{


tag:"سوالات متداول",

title:"سوالات متداول QuantNova",

description:"پاسخ سوالات درباره تکنولوژی و سیستم معاملاتی QuantNova AI.",


items:[

{
question:"QuantNova AI چیست؟",
answer:"QuantNova AI یک پلتفرم هوش مصنوعی برای تحلیل بازار و ارائه بینش‌های هوشمند معاملاتی است."
},

{
question:"آیا معاملات را خودکار انجام می‌دهد؟",
answer:"تمرکز اصلی QuantNova AI روی تحلیل، سیگنال و کمک هوشمند به معامله‌گران است."
},

{
question:"چه بازارهایی پشتیبانی می‌شوند؟",
answer:"این سیستم برای بازارهای مالی مختلف از جمله کریپتو طراحی شده است."
},

{
question:"آیا در سراسر جهان قابل استفاده است؟",
answer:"بله، هدف QuantNova AI ارائه یک راهکار جهانی است."
}

]


},








footer:{


title:"آماده معامله هوشمندتر هستید؟",

description:
"نسل جدید هوش مصنوعی برای معامله‌گران مدرن.",

launch:"شروع QuantNova",

brand:
"پلتفرم هوش مصنوعی معاملاتی نسل جدید برای تصمیم‌های بهتر.",

top:"بازگشت به بالا"


}



}



}



};







i18n

.use(LanguageDetector)

.use(initReactI18next)

.init({


resources,

fallbackLng:"en",


interpolation:{

escapeValue:false

},


detection:{


order:[

"localStorage",

"navigator"

],


caches:[

"localStorage"

],


lookupLocalStorage:"quantnova-language"


}


});







export default i18n;