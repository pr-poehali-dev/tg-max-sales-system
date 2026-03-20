import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/d8b6486a-d25a-4034-9a0c-f3c5509126b8/files/08ab66e2-dd59-46fc-ab76-fd6ad0cc2654.jpg";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`section-animate ${inView ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const painPoints = [
  { icon: "TrendingDown", text: "Ведёшь канал, но нет стабильных продаж" },
  { icon: "HelpCircle", text: "Не понимаешь, что делать в MAX" },
  { icon: "AlertTriangle", text: "Боишься потерять Telegram и клиентов" },
  { icon: "Zap", text: "Много действий → мало результата" },
  { icon: "Shuffle", text: "Нет системы, только хаос" },
];

const results = [
  { icon: "Smartphone", title: "Готовый канал в MAX", desc: "Полностью настроенный с нуля за 3 дня" },
  { icon: "Users", title: "Перенос аудитории из TG", desc: "Быстро и без потерь" },
  { icon: "Package", title: "Упакованный профиль под продажи", desc: "Работает на тебя 24/7" },
  { icon: "FileText", title: "Контент, который приводит заявки", desc: "Система постов без ежедневного напряжения" },
  { icon: "DollarSign", title: "Модель продаж под тебя", desc: "5 устойчивых моделей — выбираешь свою" },
];

const program = [
  {
    day: "1",
    date: "1 апреля",
    title: "Экспертный канал в TG и МАХ",
    items: [
      "Создадим канал в МАХ с нуля",
      "Подключим комментарии",
      "Настроим структуру",
      "Перенесём посты из TG в МАХ за 5 минут",
      "Упакуем твой канал под продажи",
    ],
    result: "Вкусно упакуешь свой канал в ТГ и МАХ, чтобы регулярно получать заявки",
  },
  {
    day: "2",
    date: "2 апреля",
    title: "Продажи через контент для TG и МАХ",
    items: [
      "Создадим пост-закреп, который будет приводить человека к заявке",
      "Система постов, которая прогревает к покупке без ежедневного контента",
      "Подготовим канал к продвижению",
    ],
    result: "Создашь понятную систему контента, которая будет приводить клиентов сразу с нескольких площадок",
  },
  {
    day: "3",
    date: "3 апреля",
    title: "Система продаж в TG и МАХ",
    items: [
      "Как привлекать аудиторию в МАХ",
      "Как сейчас работать в Telegram",
      "5 самых устойчивых моделей продаж, которые прямо сейчас приносят деньги в TG и МАХ",
    ],
    result: "Создашь устойчивую систему продаж, которая не зависит от площадок и блокировок",
  },
];

const tariffs = [
  {
    name: "Система TG и МАХ",
    price: "2 500",
    badge: null,
    subprice: null,
    btnText: "Выбрать тариф",
    btnUrl: "https://payform.ru/3saZSPl/",
    features: [
      { text: "3 дня практикума и доступа к живым эфирам", accent: false },
      { text: "Чат практикума", accent: false },
      { text: "Записи всех встреч", accent: false },
      { text: "Шаблоны, промты, инструкции и бонусные материалы", accent: false },
    ],
    highlight: false,
  },
  {
    name: "Тариф для друзей",
    price: "3 000",
    badge: "Скидка при оплате вдвоём",
    subprice: null,
    btnText: "Прийти с другом",
    btnUrl: "https://payform.ru/7maZSRn/",
    features: [
      { text: "Приходишь с другом — каждый платит вместо 2 500 ₽", accent: true },
      { text: "3 дня практикума и доступа к живым эфирам", accent: false },
      { text: "Чат практикума", accent: false },
      { text: "Записи всех встреч", accent: false },
      { text: "Шаблоны, промты, инструкции и бонусные материалы", accent: false },
    ],
    highlight: false,
  },
  {
    name: "Система TG и МАХ\n+ личная консультация",
    price: "7 500",
    badge: null,
    subprice: null,
    btnText: "Выбрать тариф",
    btnUrl: "https://payform.ru/cgaZSTW/",
    features: [
      { text: "Личная консультация: разбираем проект, позиционирование, продукт, деньги, контент, продвижение", accent: true },
      { text: "Подбираем эффективную модель продаж под ваши данные", accent: false },
      { text: "Пошаговый план действий в условиях неопределённости", accent: false },
      { text: "3 дня практикума и доступа к живым эфирам", accent: false },
      { text: "Чат практикума", accent: false },
      { text: "Записи всех встреч", accent: false },
      { text: "Шаблоны, промты, инструкции и бонусные материалы", accent: false },
    ],
    highlight: true,
  },
];

const faqs = [
  {
    q: "У меня нет времени",
    a: "Есть записи всех встреч. Смотришь в любое удобное время в любом темпе — ничего не пропустишь.",
  },
  {
    q: "Я не понимаю MAX",
    a: "Разберём с нуля. Первый день практикума полностью посвящён настройке канала в MAX — ты сделаешь всё вместе с нами.",
  },
  {
    q: "У меня маленький канал",
    a: "Система работает с любого уровня. Важна не размер аудитории, а правильная упаковка и модель продаж.",
  },
];

export default function Index() {
  const [activeDay, setActiveDay] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen font-montserrat" style={{ background: "#0a0612", color: "#f0eaff" }}>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden gradient-bg noise">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)" }} />
          <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)" }} />
        </div>

        <div className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium"
              style={{ color: "#c084fc" }}>
              <span className="w-2 h-2 rounded-full pulse-dot" style={{ background: "#a855f7" }} />
              Старт 1 апреля 2025
            </div>

            <h1 className="font-oswald font-bold leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}>
              <span className="gradient-text text-glow">СИСТЕМА ПРОДАЖ</span>
              <br />
              <span style={{ color: "#f0eaff" }}>В TG + MAX</span>
            </h1>

            <p className="text-lg" style={{ color: "#c4b5fd", lineHeight: 1.7 }}>
              которая даёт заявки даже в условиях нестабильности
            </p>

            <p style={{ color: "#a78bfa", lineHeight: 1.7 }}>
              3-дневный практикум для экспертов, которые хотят заменить хаос на понятную систему
              и начать получать клиентов уже сейчас
            </p>

            <div className="p-4 rounded-2xl gradient-border glass" style={{ borderRadius: "16px" }}>
              <p className="font-semibold" style={{ color: "#f0eaff" }}>
                👉 Даже если Telegram заблокируют —
              </p>
              <p style={{ color: "#c084fc" }}>
                у тебя уже будет готовая система продаж в MAX
              </p>
            </div>

            <a href="https://payform.ru/3saZSPl/" target="_blank" rel="noopener noreferrer" className="inline-block btn-gradient text-white font-bold text-lg px-10 py-4 rounded-2xl glow-violet-sm transition-transform hover:scale-105 active:scale-95">
              <span>Принять участие</span>
            </a>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative float-anim">
              <div className="absolute inset-[-20px] rounded-3xl"
                style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.3) 0%, transparent 70%)" }} />
              <img
                src={HERO_IMG}
                alt="Интерфейс MAX на телефоне"
                className="relative z-10 rounded-3xl glow-violet"
                style={{ maxWidth: "380px", width: "100%" }}
              />
              <div className="notif-1 absolute top-[10%] right-[-10%] glass rounded-2xl px-3 py-2 flex items-center gap-2 z-20"
                style={{ minWidth: "160px" }}>
                <span className="text-xl">💰</span>
                <div>
                  <p className="text-xs font-bold" style={{ color: "#f0eaff" }}>Новая заявка!</p>
                  <p className="text-xs" style={{ color: "#a78bfa" }}>+5 000 ₽</p>
                </div>
              </div>
              <div className="notif-2 absolute top-[40%] right-[-15%] glass rounded-2xl px-3 py-2 flex items-center gap-2 z-20"
                style={{ minWidth: "170px" }}>
                <span className="text-xl">✅</span>
                <div>
                  <p className="text-xs font-bold" style={{ color: "#f0eaff" }}>Оплата получена</p>
                  <p className="text-xs" style={{ color: "#86efac" }}>Клиент из MAX</p>
                </div>
              </div>
              <div className="notif-3 absolute bottom-[20%] left-[-10%] glass rounded-2xl px-3 py-2 flex items-center gap-2 z-20"
                style={{ minWidth: "155px" }}>
                <span className="text-xl">📩</span>
                <div>
                  <p className="text-xs font-bold" style={{ color: "#f0eaff" }}>Хочу на консультацию</p>
                  <p className="text-xs" style={{ color: "#a78bfa" }}>2 мин назад</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs" style={{ color: "#a78bfa" }}>Листай вниз</span>
          <div className="w-px h-8 animate-bounce" style={{ background: "linear-gradient(to bottom, #a855f7, transparent)" }} />
        </div>
      </section>

      {/* ─── БОЛЬ ─── */}
      <section className="py-24 relative" style={{ background: "#0d0918" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px]"
            style={{ background: "linear-gradient(to right, transparent, rgba(168,85,247,0.4), transparent)" }} />
        </div>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-oswald font-bold text-center mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#f0eaff" }}>
              Если сейчас у тебя так —
              <span className="gradient-text"> тебе сюда</span>
            </h2>
            <p className="text-center mb-16" style={{ color: "#7c6d9e" }}>Проверь себя — это ли мешает двигаться вперёд?</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {painPoints.map((p, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="glass rounded-2xl p-5 flex items-start gap-4 hover:scale-[1.02] transition-transform"
                  style={{ borderRadius: "16px" }}>
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(168,85,247,0.15)" }}>
                    <Icon name={p.icon} size={20} style={{ color: "#a855f7" }} />
                  </div>
                  <p className="font-medium leading-snug pt-1" style={{ color: "#e2d9f3" }}>{p.text}</p>
                </div>
              </AnimatedSection>
            ))}
            <AnimatedSection delay={500} className="sm:col-span-2 lg:col-span-3">
              <div className="text-center p-5 rounded-2xl"
                style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(236,72,153,0.1))", border: "1px solid rgba(168,85,247,0.3)" }}>
                <p className="font-bold text-lg" style={{ color: "#f0eaff" }}>
                  👉 Именно для таких экспертов создан этот практикум
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── СТРАХ ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(220,38,38,0.06) 0%, transparent 70%)" }} />
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-oswald font-bold text-center mb-12" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#f0eaff" }}>
                Что будет, если Telegram
                <span style={{ color: "#f87171" }}> ограничат?</span>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                {["Теряешь канал", "Теряешь аудиторию", "Теряешь заявки", "Начинаешь с нуля"].map((item, i) => (
                  <AnimatedSection key={i} delay={i * 120}>
                    <div className="text-center p-4 rounded-2xl"
                      style={{ background: "rgba(220,38,38,0.08)", border: "1px solid rgba(248,113,113,0.2)" }}>
                      <div className="text-2xl mb-2">😰</div>
                      <p className="text-sm font-semibold" style={{ color: "#fca5a5" }}>{item}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
              <AnimatedSection delay={480}>
                <div className="glass rounded-3xl p-8 text-center"
                  style={{ border: "1px solid rgba(168,85,247,0.3)" }}>
                  <p className="text-lg mb-2" style={{ color: "#c4b5fd" }}>
                    Большинство экспертов к этому не готовы
                  </p>
                  <p className="text-2xl font-bold gradient-text">
                    👉 А ты можешь подготовиться за 3 дня
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── РЕШЕНИЕ ─── */}
      <section className="py-24" style={{ background: "#0d0918" }}>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-oswald font-bold text-center mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#f0eaff" }}>
              Решение — <span className="gradient-text">система,</span> а не хаотичные действия
            </h2>
            <p className="text-center mb-16" style={{ color: "#7c6d9e" }}>На практикуме ты собираешь три ключевых блока</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "Radio", num: "01", title: "Система канала", desc: "Настроенная структура, которая работает на тебя в TG и MAX одновременно" },
              { icon: "FileEdit", num: "02", title: "Система контента", desc: "Посты, которые прогревают и приводят к покупке — без ежедневного стресса" },
              { icon: "TrendingUp", num: "03", title: "Система продаж", desc: "Модель, которая не зависит от площадок и блокировок" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="glass rounded-3xl p-6 h-full hover:scale-[1.03] transition-transform relative overflow-hidden"
                  style={{ borderRadius: "20px" }}>
                  <div className="absolute top-4 right-4 font-oswald font-bold text-4xl opacity-10"
                    style={{ color: "#a855f7" }}>{item.num}</div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.3), rgba(236,72,153,0.2))" }}>
                    <Icon name={item.icon} size={22} style={{ color: "#c084fc" }} />
                  </div>
                  <h3 className="font-bold text-xl mb-3" style={{ color: "#f0eaff" }}>{item.title}</h3>
                  <p style={{ color: "#9ca3af" }}>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={450}>
            <p className="text-center mt-10 text-lg font-semibold" style={{ color: "#c084fc" }}>
              👉 Это работает и в TG, и в MAX
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── РЕЗУЛЬТАТЫ ─── */}
      <section className="py-24 relative overflow-hidden gradient-bg-section">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-oswald font-bold text-center mb-16" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#f0eaff" }}>
              Результат после
              <span className="gradient-text"> практикума</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {results.map((r, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="glass rounded-2xl p-6 flex gap-4 items-start hover:scale-[1.02] transition-transform h-full">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center glow-violet-sm"
                    style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}>
                    <Icon name={r.icon} size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: "#f0eaff" }}>{r.title}</h3>
                    <p className="text-sm" style={{ color: "#9ca3af" }}>{r.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ПРОГРАММА ─── */}
      <section className="py-24" style={{ background: "#0a0612" }}>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-oswald font-bold text-center mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#f0eaff" }}>
              Программа
              <span className="gradient-text"> практикума</span>
            </h2>
            <p className="text-center mb-12" style={{ color: "#7c6d9e" }}>Три плотных дня — три готовых системы</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex justify-center gap-2 mb-10 flex-wrap">
              {program.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActiveDay(i)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${activeDay === i ? "btn-gradient text-white glow-violet-sm" : "glass hover:scale-105"}`}
                  style={activeDay !== i ? { color: "#a78bfa" } : {}}
                >
                  <span>День {p.day}</span>
                </button>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="max-w-3xl mx-auto glass rounded-3xl p-8" style={{ borderRadius: "24px" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-oswald font-bold text-xl text-white"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}>
                  {program[activeDay].day}
                </div>
                <div>
                  <p className="text-sm" style={{ color: "#7c6d9e" }}>{program[activeDay].date}</p>
                  <h3 className="font-bold text-lg" style={{ color: "#f0eaff" }}>{program[activeDay].title}</h3>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {program[activeDay].items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "rgba(168,85,247,0.2)" }}>
                      <Icon name="Check" size={12} style={{ color: "#a855f7" }} />
                    </span>
                    <span style={{ color: "#c4b5fd" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl p-4"
                style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(236,72,153,0.08))", border: "1px solid rgba(168,85,247,0.25)" }}>
                <p className="text-sm font-medium" style={{ color: "#a855f7" }}>Результат дня:</p>
                <p className="font-semibold mt-1" style={{ color: "#f0eaff" }}>{program[activeDay].result}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── КЛЮЧЕВОЙ СМЫСЛ ─── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, rgba(109,40,217,0.15) 0%, rgba(124,58,237,0.1) 50%, rgba(236,72,153,0.08) 100%), #0d0918" }}>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-oswald font-bold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#f0eaff" }}>
                Это не обучение.
                <span className="gradient-text"> Это сборка системы</span>
              </h2>
              <p className="text-lg mb-10" style={{ color: "#a78bfa" }}>
                Ты не просто "посмотришь уроки" — ты выйдешь с готовыми инструментами
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: "Radio", label: "Канал" },
                  { icon: "FileText", label: "Контент" },
                  { icon: "TrendingUp", label: "Модель продаж" },
                  { icon: "Map", label: "План действий" },
                ].map((item, i) => (
                  <AnimatedSection key={i} delay={i * 100}>
                    <div className="glass rounded-2xl p-5 text-center hover:scale-105 transition-transform">
                      <div className="text-2xl mb-2">✔</div>
                      <Icon name={item.icon} size={20} className="mx-auto mb-2" style={{ color: "#c084fc" }} />
                      <p className="font-bold text-sm" style={{ color: "#f0eaff" }}>{item.label}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── ТАРИФЫ ─── */}
      <section className="py-24" style={{ background: "#0a0612" }}>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-oswald font-bold text-center mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#f0eaff" }}>
              Выбери
              <span className="gradient-text"> свой формат</span>
            </h2>
            <p className="text-center mb-16" style={{ color: "#7c6d9e" }}>Три варианта участия — один результат</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
            {tariffs.map((t, i) => (
              <AnimatedSection key={i} delay={i * 120}>
                <div
                  className={`rounded-3xl p-6 h-full flex flex-col relative overflow-hidden transition-transform hover:scale-[1.02] ${t.highlight ? "glow-violet" : "glass"}`}
                  style={t.highlight ? {
                    background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15), rgba(236,72,153,0.1))",
                    border: "1px solid rgba(168,85,247,0.5)",
                    borderRadius: "24px"
                  } : { borderRadius: "24px" }}
                >
                  {t.badge && (
                    <div className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-bold self-start"
                      style={{
                        background: t.highlight ? "linear-gradient(135deg, #7c3aed, #ec4899)" : "rgba(168,85,247,0.2)",
                        color: t.highlight ? "white" : "#c084fc"
                      }}>
                      👉 {t.badge}
                    </div>
                  )}
                  <h3 className="font-bold text-lg mb-2" style={{ color: "#f0eaff" }}>{t.name}</h3>
                  <div className="mb-6">
                    <span className="font-oswald font-bold" style={{ fontSize: "2.5rem", color: t.highlight ? "#c084fc" : "#a855f7" }}>
                      {t.price} ₽
                    </span>
                    {t.subprice && <p className="text-sm mt-1" style={{ color: "#86efac" }}>{t.subprice}</p>}
                  </div>
                  <ul className="space-y-3 flex-1 mb-6">
                    {t.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2">
                        <Icon name="CheckCircle" size={16} className="flex-shrink-0 mt-0.5" style={{ color: f.accent ? "#86efac" : "#a855f7" }} />
                        <span className="text-sm font-medium" style={{ color: f.accent ? "#86efac" : "#c4b5fd" }}>{f.text}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={t.btnUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3 rounded-xl font-bold text-center transition-all hover:scale-105 active:scale-95 ${t.highlight ? "btn-gradient text-white" : "glass"}`}
                    style={!t.highlight ? { color: "#c084fc", border: "1px solid rgba(168,85,247,0.4)" } : {}}
                  >
                    <span>{t.btnText}</span>
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24" style={{ background: "#0d0918" }}>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-oswald font-bold text-center mb-16" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#f0eaff" }}>
              Частые
              <span className="gradient-text"> вопросы</span>
            </h2>
          </AnimatedSection>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="glass rounded-2xl overflow-hidden" style={{ borderRadius: "16px" }}>
                  <button
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-purple-900/10 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold text-lg" style={{ color: "#f0eaff" }}>{faq.q}</span>
                    <Icon
                      name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                      size={20}
                      style={{ color: "#a855f7", flexShrink: 0 }}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <p style={{ color: "#c4b5fd", lineHeight: 1.7 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ФИНАЛЬНЫЙ CTA ─── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(139,92,246,0.2) 0%, transparent 70%), #0a0612" }} />
        <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent, rgba(168,85,247,0.5), transparent)" }} />

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-oswald font-bold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#f0eaff" }}>
                Ты можешь продолжать хаос
                <br />
                <span className="gradient-text">или собрать систему за 3 дня</span>
              </h2>
              <p className="text-lg mb-4" style={{ color: "#a78bfa" }}>
                Рынок уже меняется. Вопрос — ты адаптируешься или потеряешь поток клиентов?
              </p>
              <div className="glass inline-block rounded-2xl px-6 py-3 mb-10">
                <p className="font-semibold" style={{ color: "#f0eaff" }}>
                  👉 Даже если Telegram заблокируют — у тебя уже будет готовая система
                </p>
              </div>
              <br />
              <button className="btn-gradient text-white font-bold text-xl px-14 py-5 rounded-2xl glow-violet transition-transform hover:scale-105 active:scale-95">
                <span>Войти в практикум</span>
              </button>
              <div className="mt-8 flex items-center justify-center gap-6 flex-wrap">
                <div className="flex items-center gap-2 text-sm" style={{ color: "#7c6d9e" }}>
                  <Icon name="Calendar" size={16} style={{ color: "#a855f7" }} />
                  Старт 1 апреля
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: "#7c6d9e" }}>
                  <Icon name="Video" size={16} style={{ color: "#a855f7" }} />
                  Есть записи встреч
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: "#7c6d9e" }}>
                  <Icon name="Users" size={16} style={{ color: "#a855f7" }} />
                  Чат практикума
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <footer className="py-8 text-center" style={{ borderTop: "1px solid rgba(168,85,247,0.1)", color: "#4c3d6b" }}>
        <p className="text-sm">© 2025 Система продаж в TG + MAX</p>
      </footer>
    </div>
  );
}