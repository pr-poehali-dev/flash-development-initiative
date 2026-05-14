const TEAM_IMG = "https://cdn.poehali.dev/projects/bc2ea024-cd6a-476d-8f99-5103c4963f2e/files/611dcba4-feb1-4531-a616-b7ffd62ab664.jpg"
const FORMWORK_IMG = "https://cdn.poehali.dev/projects/bc2ea024-cd6a-476d-8f99-5103c4963f2e/files/e12bc166-5c95-4ee0-b6ea-a23031eb6018.jpg"

export function Slide1() {
  return (
    <div className="slide slide-1">
      <div className="slide-1-left">
        <div>
          <div className="badge">
            <span>✦</span>
            Начинающий предприниматель · 15.05.2026
          </div>
          <h1 className="slide-title">
            Команда,<br />которая<br /><span className="accent">решает задачи</span>
          </h1>
          <p className="slide-desc">
            Мы — старшеклассники социально-экономического профиля. Нас объединила реальная бизнес-проблема: производитель строительных опалубок потерял 178% чистого дохода. Мы проанализировали ситуацию и разработали антикризисный план.
          </p>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: "60px 50px 60px 20px", flexShrink: 0 }}>
        <img src="https://nf-sch4.edumsko.ru/uploads/1500/1444/generalimage/Forostovich-Reznik/.thumbs/0x0_374x380__size__logo.png?1749196806168" alt="Герб школы" style={{ width: 160, height: 160, objectFit: "contain" }} />
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, fontWeight: 500, textAlign: "center", maxWidth: 180 }}>
          Наро-Фоминская СОШ № 4<br />
          им. В.В. Завадского
        </span>
      </div>
    </div>
  )
}

export function Slide2() {
  return (
    <div className="slide slide-2">
      <div className="slide-2-header">
        <img src={FORMWORK_IMG} alt="Опалубка" />
        <div className="slide-2-header-overlay">
          <div>
            <p className="slide-2-title">Заказчик проекта</p>
            <h2 className="company-name-big">ООО «Фирма ДАК-10»</h2>
            <p style={{ margin: "6px 0 0", fontSize: 14, color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>Производитель балок-опалубок</p>
          </div>
        </div>
      </div>
      <div className="slide-2-body">
        <div className="stats-grid">
          <div className="stat-card success">
            <span className="stat-icon">🏛️</span>
            <span className="stat-label">На рынке</span>
            <span className="stat-value green">23 года</span>
            <span className="stat-sub">Чистая репутация, собственный товарный знак</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon">💰</span>
            <span className="stat-label">Выручка 2025</span>
            <span className="stat-value">5,1 млн ₽</span>
            <span className="stat-sub">Уставный капитал 2,6 млн ₽</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🧾</span>
            <span className="stat-label">Налоги</span>
            <span className="stat-value">1,1 млн ₽</span>
            <span className="stat-sub">Исправная уплата за период</span>
          </div>
          <div className="stat-card danger" style={{ gridColumn: "1 / -1" }}>
            <span className="stat-icon">📉</span>
            <span className="stat-label">Главная проблема</span>
            <span className="stat-value red">−178% чистого дохода</span>
            <span className="stat-sub">Расходы превышают выручку — компания работает в глубокий минус</span>
          </div>
        </div>
        <div className="potential-box">
          <div className="potential-icon">🚀</div>
          <p className="potential-text">
            <strong>Потенциал компании высок:</strong> 23 года безупречной работы, нет в реестре недобросовестных поставщиков, нет дисквалифицированных руководителей. Кризис вызван падением заказов — это решаемо. Наш план: тендеры, выход на казахстанский рынок и оптимизация расходов.
          </p>
        </div>
      </div>
    </div>
  )
}

export function Slide3() {
  return (
    <div className="slide" style={{ background: "linear-gradient(135deg, #0d1b2a 0%, #1a0a0a 100%)", flexDirection: "column", maxWidth: 1100 }}>
      <div style={{ padding: "50px 60px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="badge" style={{ background: "rgba(239,68,68,0.12)", borderColor: "rgba(239,68,68,0.3)", color: "#fca5a5" }}>
          <span>⚠</span>
          Текущая ситуация и проблема
        </div>
        <h2 style={{ margin: "12px 0 0", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>
          Компания в <span style={{ background: "linear-gradient(135deg,#ef4444,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>глубоком минусе</span>
        </h2>
      </div>
      <div style={{ flex: 1, padding: "30px 60px 50px", display: "flex", gap: 30, alignItems: "stretch" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 20, padding: "24px 28px", display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ flexShrink: 0 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Выручка</div>
              <div style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, color: "#f87171", lineHeight: 1 }}>5,1 млн ₽</div>
              <div style={{ marginTop: 8, display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(239,68,68,0.15)", borderRadius: 100, padding: "4px 12px" }}>
                <span style={{ fontSize: 13, color: "#f87171", fontWeight: 700 }}>▼ −86%</span>
              </div>
            </div>
          </div>
          <div style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: 20, padding: "24px 28px", display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ flexShrink: 0 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Чистая прибыль</div>
              <div style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, color: "#f87171", lineHeight: 1 }}>−7,2 млн ₽</div>
              <div style={{ marginTop: 8, display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(239,68,68,0.15)", borderRadius: 100, padding: "4px 12px" }}>
                <span style={{ fontSize: 13, color: "#f87171", fontWeight: 700 }}>▼ −173%</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: 280, display: "flex", flexDirection: "column", gap: 16, flexShrink: 0 }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "20px", flex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Ключевые проблемы</div>
            {[
              { icon: "📦", text: "Заказов почти нет" },
              { icon: "💸", text: "Расходы превышают выручку" },
              { icon: "📉", text: "Потеря 86% выручки за год" },
              { icon: "🚫", text: "Нет новых каналов продаж" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                <span style={{ fontSize: 18 }}>{item.icon}</span>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.4 }}>{item.text}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(168,85,247,0.1))", border: "1px solid rgba(99,102,241,0.2)", borderRadius: 16, padding: "18px 20px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#a5b4fc", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Вывод</div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0 }}>
              Кризис решаем — репутация и опыт 23 лет позволяют выйти в плюс при правильной стратегии
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Slide4() {
  return (
    <div className="slide" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f0d 100%)", flexDirection: "column", maxWidth: 1100 }}>
      <div style={{ padding: "44px 60px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
        <div>
          <div className="badge" style={{ background: "rgba(34,197,94,0.1)", borderColor: "rgba(34,197,94,0.3)", color: "#86efac" }}>
            <span>🌍</span>
            Стратегия роста
          </div>
          <h2 style={{ margin: "10px 0 0", fontSize: "clamp(26px,3vw,40px)", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>
            Концепция <span style={{ background: "linear-gradient(135deg,#22c55e,#16a34a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>проекта</span>
          </h2>
        </div>
        <img src="https://cdn.poehali.dev/projects/bc2ea024-cd6a-476d-8f99-5103c4963f2e/bucket/7e4431bf-c840-4125-8092-6066bf91a167.png" alt="Концепция" style={{ height: 60, objectFit: "contain", opacity: 0.9 }} />
      </div>

      <div style={{ flex: 1, padding: "28px 60px 44px", display: "flex", flexDirection: "column", gap: 20 }}>
        <p style={{ margin: 0, fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
          Выход на рынок <strong style={{ color: "#fff" }}>Республики Казахстан</strong> или <strong style={{ color: "#fff" }}>Турции</strong> по двум направлениям:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(34,197,94,0.15)", borderRadius: 20, padding: "28px 30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg,#22c55e,#16a34a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>🤝</div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#86efac", textTransform: "uppercase", letterSpacing: 1 }}>Направление А</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>Дистрибуция через партнёра</div>
              </div>
            </div>
            <p style={{ margin: "0 0 16px", fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
              Сбыт через местного агента, который берёт на себя таможенные вопросы и сертификацию продукции.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ background: "rgba(34,197,94,0.08)", borderRadius: 12, padding: "12px 16px", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 16 }}>🇰🇿</span>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>Казахстан</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>Tekato.kz</div>
                </div>
              </div>
              <div style={{ background: "rgba(34,197,94,0.08)", borderRadius: 12, padding: "12px 16px", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 16 }}>🇹🇷</span>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>Турция</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>ТИМ-ЭКСПО</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: 20, padding: "28px 30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg,#6366f1,#a855f7)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>🏛️</div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#a5b4fc", textTransform: "uppercase", letterSpacing: 1 }}>Направление Б</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>Государственные тендеры</div>
              </div>
            </div>
            <p style={{ margin: "0 0 16px", fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
              Государство постоянно финансирует стройки — дороги, жилые зоны, здания, новые районы городов.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {["Жилищное строительство", "Дорожная инфраструктура", "Новые городские районы"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#6366f1", flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Slide5() {
  return (
    <div className="slide" style={{ background: "linear-gradient(135deg, #07101a 0%, #0a1a10 60%, #07101a 100%)", flexDirection: "column", maxWidth: 1100, minHeight: 600 }}>
      <div style={{ padding: "50px 60px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="badge" style={{ background: "rgba(250,204,21,0.1)", borderColor: "rgba(250,204,21,0.3)", color: "#fde68a" }}>
          <span>🎯</span>
          Цель проекта
        </div>
        <h2 style={{ margin: "12px 0 0", fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>
          Выручка до <span style={{ background: "linear-gradient(135deg,#facc15,#f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>30 млн ₽</span>
        </h2>
        <p style={{ margin: "10px 0 0", fontSize: 14, color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>2026 – 2028 год</p>
      </div>

      <div style={{ flex: 1, padding: "30px 60px 50px", display: "flex", gap: 24 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ background: "rgba(250,204,21,0.05)", border: "1px solid rgba(250,204,21,0.15)", borderRadius: 20, padding: "28px 30px", flex: 1 }}>
            <p style={{ margin: 0, fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.9 }}>
              Сформировать устойчивый <strong style={{ color: "#fff" }}>экспортный канал поставок балок</strong> в Центральную Азию — через пилотный запуск в <strong style={{ color: "#fde68a" }}>Казахстане</strong> с последующим масштабированием в <strong style={{ color: "#fde68a" }}>Турцию</strong>.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "18px 20px" }}>
              <div style={{ fontSize: 24, marginBottom: 6 }}>🚀</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Без капзатрат</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>Никаких вложений в локальную инфраструктуру</div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "18px 20px" }}>
              <div style={{ fontSize: 24, marginBottom: 6 }}>🤝</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Партнёрские продажи</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>Модель через дистрибьюторов на месте</div>
            </div>
          </div>
        </div>

        <div style={{ width: 270, flexShrink: 0, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: 1 }}>Дорожная карта</div>
          {[
            { year: "2026", color: "#facc15", text: "Пилотный запуск в Казахстане, первые поставки" },
            { year: "2027", color: "#f59e0b", text: "Масштабирование, выход на стабильный объём" },
            { year: "2028", color: "#22c55e", text: "Запуск турецкого направления, выручка 30 млн ₽" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${item.color}20`, border: `1px solid ${item.color}50`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: item.color, flexShrink: 0 }}>{item.year}</div>
                {i < 2 && <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.08)", margin: "4px 0" }} />}
              </div>
              <p style={{ margin: "8px 0 0", fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Slide6() {
  return (
    <div className="slide" style={{ background: "linear-gradient(135deg, #130a0a 0%, #1a0d0a 100%)", flexDirection: "column", maxWidth: 1100, minHeight: 600 }}>
      <div style={{ padding: "44px 60px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div className="badge" style={{ background: "rgba(239,68,68,0.1)", borderColor: "rgba(239,68,68,0.3)", color: "#fca5a5" }}>
            <span>⚡</span>
            Анализ рисков
          </div>
          <h2 style={{ margin: "10px 0 0", fontSize: "clamp(26px,3vw,42px)", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>
            Риски и <span style={{ background: "linear-gradient(135deg,#ef4444,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>допущения</span>
          </h2>
        </div>
        <img src="https://cdn.poehali.dev/projects/bc2ea024-cd6a-476d-8f99-5103c4963f2e/bucket/ad390079-62fb-4f7e-a923-16f888a542aa.png" alt="Риски" style={{ height: 56, objectFit: "contain", opacity: 0.85 }} />
      </div>

      <div style={{ flex: 1, padding: "30px 60px 50px", display: "flex", flexDirection: "column", gap: 16 }}>
        {[
          {
            num: "01",
            icon: "🚢",
            title: "Логистические сложности",
            text: "Проблемы с доставкой и таможенным оформлением могут задержать поставки и увеличить издержки.",
            color: "#ef4444",
            mitigation: "Работа через местного партнёра со знанием таможни",
          },
          {
            num: "02",
            icon: "📣",
            title: "Неправильное позиционирование",
            text: "Слабое продвижение или недооценка особенностей рынка — клиенты могут не узнать о продукте или не понять его ценность.",
            color: "#f97316",
            mitigation: "Привлечение локального дистрибьютора с готовой базой",
          },
          {
            num: "03",
            icon: "💰",
            title: "Высокие затраты на вход",
            text: "Новый рынок требует вложений в маркетинг, логистику, адаптацию продукта и обучение персонала.",
            color: "#eab308",
            mitigation: "Партнёрская модель без капзатрат на инфраструктуру",
          },
        ].map((risk, i) => (
          <div key={i} style={{ display: "flex", gap: 20, background: "rgba(255,255,255,0.02)", border: `1px solid ${risk.color}25`, borderLeft: `3px solid ${risk.color}`, borderRadius: 16, padding: "20px 24px", alignItems: "flex-start" }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: `${risk.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{risk.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: risk.color, letterSpacing: 1 }}>{risk.num}</span>
                <span style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>{risk.title}</span>
              </div>
              <p style={{ margin: "0 0 10px", fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{risk.text}</p>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 100, padding: "4px 12px" }}>
                <span style={{ fontSize: 11, color: "#86efac" }}>✓</span>
                <span style={{ fontSize: 12, color: "#86efac", fontWeight: 500 }}>{risk.mitigation}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
