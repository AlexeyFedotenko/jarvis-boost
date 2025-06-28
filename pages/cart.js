import { useRouter } from "next/router";
import locales from "../locales";
import Link from "next/link";

export default function Cart() {
  const router = useRouter();
  const lang = router.query.lang || "ru";
  const t = locales[lang];

  // В реальности товары хранятся в стейте/куки или глобальном сторе (упрощённо)
  const cart = []; // Здесь логика под реальный проект

  return (
    <div style={{
      background: 'linear-gradient(120deg,#7e30ff,#00cfff 80%)',
      minHeight: "100vh", color: "white", fontFamily: "sans-serif", padding: 24
    }}>
      <h1>{t.cart}</h1>
      <div>Тут будет список товаров и переход к оплате.</div>
      <Link href={`/checkout?lang=${lang}`} style={{
        marginTop: 20, display: "inline-block", padding: 14, background: "#7e30ff", borderRadius: 14, color: "#fff", fontWeight: 700, textDecoration: "none"
      }}>{t.checkout}</Link>
    </div>
  );
}