import { useRouter } from "next/router";
import locales from "../locales";

export default function Checkout() {
  const router = useRouter();
  const lang = router.query.lang || "ru";
  const t = locales[lang];

  return (
    <div style={{
      background: 'linear-gradient(120deg,#7e30ff,#00cfff 80%)',
      minHeight: "100vh", color: "white", fontFamily: "sans-serif", padding: 24, textAlign: "center"
    }}>
      <h1>{t.checkout}</h1>
      <p>Для оплаты переведите сумму на TON/USDT кошелёк:<br/><b>UQDPe8Y1Qs3JQgj4VIAkMHiRrdRZgKGJ4gFGroOF71BTFLmj</b></p>
      <button style={{
        marginTop: 20, padding: 14, background: "#00cfff", borderRadius: 14, color: "#fff", fontWeight: 700, border: "none"
      }}>{t.pay}</button>
    </div>
  );
}