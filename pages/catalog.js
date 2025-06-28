export default function Catalog() {
  return (
    <div style={{ background: 'linear-gradient(to right,#7e30ff,#00cfff)', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif', padding: 24 }}>
      <h1>Каталог услуг 🚀</h1>
      <ul>
        <li>Накрутка подписчиков Instagram — 10₽/1000</li>
        <li>Просмотры Telegram — 2₽/1000</li>
        <li>Лайки VK — 5₽/1000</li>
        {/* Здесь позже будет реальный API и автоматическое обновление */}
      </ul>
    </div>
  );
}