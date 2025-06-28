export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(120deg,#7e30ff,#00cfff 80%)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif",
    }}>
      <h1 style={{fontSize: "2.2rem", marginBottom: "1rem"}}>Jarvis Boost 🚀</h1>
      <p style={{maxWidth: "400px"}}>Тестовый стартовый экран твоего будущего мини-приложения! Всё работает. Можешь смело деплоить на Vercel.</p>
    </div>
  );
}
