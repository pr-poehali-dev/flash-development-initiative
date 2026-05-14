import { useState } from "react"
import Icon from "@/components/ui/icon"

const TEAM_IMG = "https://cdn.poehali.dev/projects/bc2ea024-cd6a-476d-8f99-5103c4963f2e/files/611dcba4-feb1-4531-a616-b7ffd62ab664.jpg"
const FORMWORK_IMG = "https://cdn.poehali.dev/projects/bc2ea024-cd6a-476d-8f99-5103c4963f2e/files/e12bc166-5c95-4ee0-b6ea-a23031eb6018.jpg"

const slides = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
]

export default function Presentation() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1))

  return (
    <div style={{ background: "#0a0a1a", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 20px", fontFamily: "'Montserrat', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800&display=swap');

        .slide {
          width: 100%;
          max-width: 1100px;
          min-height: 600px;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          display: flex;
          box-shadow: 0 40px 120px rgba(0,0,0,0.6);
        }

        /* SLIDE 1 */
        .slide-1 {
          background: linear-gradient(135deg, #0d1b2a 0%, #1a1a2e 50%, #16213e 100%);
          flex-direction: row;
        }

        .slide-1-left {
          flex: 1;
          padding: 60px 60px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(99, 102, 241, 0.15);
          border: 1px solid rgba(99, 102, 241, 0.4);
          color: #a5b4fc;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          width: fit-content;
          margin-bottom: 24px;
        }

        .slide-title {
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          margin: 0 0 20px;
        }

        .slide-title .accent {
          background: linear-gradient(135deg, #6366f1, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-desc {
          font-size: 15px;
          color: rgba(255,255,255,0.65);
          line-height: 1.8;
          max-width: 480px;
          margin: 0 0 40px;
          font-weight: 400;
        }

        .team-members {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .member-row {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .member-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14px;
          color: #fff;
          flex-shrink: 0;
        }

        .member-info {
          display: flex;
          flex-direction: column;
        }

        .member-name {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
        }

        .member-role {
          font-size: 12px;
          color: rgba(255,255,255,0.45);
        }

        /* SLIDE 2 */
        .slide-2 {
          background: linear-gradient(135deg, #0f0f1e 0%, #1a0a2e 100%);
          flex-direction: column;
        }

        .slide-2-header {
          position: relative;
          height: 220px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .slide-2-header img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.4;
        }

        .slide-2-header-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(15,15,30,0.3), #0f0f1e);
          display: flex;
          align-items: flex-end;
          padding: 30px 50px;
        }

        .slide-2-body {
          flex: 1;
          padding: 30px 50px 50px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .slide-2-title {
          font-size: 14px;
          font-weight: 700;
          color: #a855f7;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin: 0;
        }

        .company-name-big {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 800;
          color: #fff;
          margin: 0;
          line-height: 1.1;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 4px;
        }

        .stat-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 20px 22px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: border-color 0.2s;
        }

        .stat-card.danger {
          border-color: rgba(239,68,68,0.25);
          background: rgba(239,68,68,0.05);
        }

        .stat-card.success {
          border-color: rgba(34,197,94,0.25);
          background: rgba(34,197,94,0.05);
        }

        .stat-icon {
          font-size: 18px;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 11px;
          font-weight: 600;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .stat-value {
          font-size: clamp(20px, 2.5vw, 28px);
          font-weight: 800;
          color: #fff;
          line-height: 1;
        }

        .stat-value.red { color: #f87171; }
        .stat-value.green { color: #4ade80; }

        .stat-sub {
          font-size: 12px;
          color: rgba(255,255,255,0.4);
          line-height: 1.4;
        }

        .potential-box {
          background: linear-gradient(135deg, rgba(99,102,241,0.1), rgba(168,85,247,0.1));
          border: 1px solid rgba(99,102,241,0.25);
          border-radius: 16px;
          padding: 20px 24px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .potential-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 18px;
        }

        .potential-text {
          font-size: 14px;
          color: rgba(255,255,255,0.7);
          line-height: 1.7;
        }

        .potential-text strong {
          color: #fff;
        }

        /* NAV */
        .pres-nav {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 32px;
        }

        .nav-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .nav-btn:hover:not(:disabled) {
          background: rgba(99,102,241,0.3);
          border-color: rgba(99,102,241,0.5);
        }

        .nav-btn:disabled {
          opacity: 0.3;
          cursor: default;
        }

        .nav-dots {
          display: flex;
          gap: 8px;
        }

        .nav-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          transition: all 0.3s;
          cursor: pointer;
          border: none;
        }

        .nav-dot.active {
          background: #6366f1;
          width: 24px;
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .slide-1 { flex-direction: column; }
          .slide-1-right { width: 100%; height: 200px; }
          .slide-1-left { padding: 36px 24px; }
          .slide-2-body { padding: 20px 24px 36px; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .slide-2-header-overlay { padding: 20px 24px; }
        }
      `}</style>

      {current === 0 && (
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
      )}

      {current === 1 && (
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
      )}

      {current === 2 && (
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
      )}

      {current === 3 && (
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
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <span style={{ fontSize: 15, color: "rgba(255,255,255,0.55)" }}>Выход на рынок</span>
              <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 100, padding: "5px 14px" }}>
                <img src="https://flagcdn.com/w40/kz.png" alt="Казахстан" style={{ width: 22, height: 15, objectFit: "cover", borderRadius: 3 }} />
                <span style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>Казахстана</span>
              </div>
              <span style={{ fontSize: 15, color: "rgba(255,255,255,0.4)" }}>или</span>
              <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 100, padding: "5px 14px" }}>
                <img src="https://flagcdn.com/w40/tr.png" alt="Турция" style={{ width: 22, height: 15, objectFit: "cover", borderRadius: 3 }} />
                <span style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>Турции</span>
              </div>
              <span style={{ fontSize: 15, color: "rgba(255,255,255,0.55)" }}>по двум направлениям:</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {/* Карточка А */}
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

              {/* Карточка Б */}
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
      )}

      <div className="pres-nav">
        <button className="nav-btn" onClick={prev} disabled={current === 0}>
          <Icon name="ChevronLeft" size={20} />
        </button>
        <div className="nav-dots">
          {slides.map((_, i) => (
            <button key={i} className={`nav-dot ${i === current ? "active" : ""}`} onClick={() => setCurrent(i)} />
          ))}
        </div>
        <button className="nav-btn" onClick={next} disabled={current === slides.length - 1}>
          <Icon name="ChevronRight" size={20} />
        </button>
      </div>

      <div style={{ marginTop: 16, fontSize: 13, color: "rgba(255,255,255,0.25)" }}>
        {current + 1} / {slides.length}
      </div>
    </div>
  )
}