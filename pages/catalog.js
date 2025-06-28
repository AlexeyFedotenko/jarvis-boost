import { useState } from "react";
import { useRouter } from "next/router";
import services from "../utils/services";
import locales from "../locales";
import Link from "next/link";

export default function Catalog() {
  const router = useRouter();
  const lang = router.query.lang || "ru";
  const t = locales[lang];

  const [cart, setCart] = useState([]);
  function addToCart(service) {
    setCart([...cart, service]);
  }

  return (
    <div style={{
      background: 'linear-gradient(120deg,#7e30ff,#00cfff 80%)',
      minHeight: "100vh", color: "white", fontFamily: "sans-serif", padding: 24
    }}>
      <h1>{t.catalog}</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {services.map(s => (
          <li key={s.id} style={{ margin: "18px 0", background: "#fff1", borderRadius: 12, padding: 16 }}>
            <div style={{ fontWeight: 600 }}>{s.name[lang]}</div>
            <div>{s.price}₽ / {s.unit}</div>
            <button style={{
              marginTop: 8, padding: "7px 14px", background: "#fff2", border: "none", borderRadius: 8, color: "white"
            }} onClick={() => addToCart(s)}>
              {t.addToCart}
            </button>
          </li>
        ))}
      </ul>
      <Link href={`/cart?lang=${lang}`} style={{
        marginTop: 20, display: "inline-block", padding: 14, background: "#00cfff", borderRadius: 14, color: "#fff", fontWeight: 700, textDecoration: "none"
      }}>{t.cart} ({cart.length})</Link>
    </div>
  );
}