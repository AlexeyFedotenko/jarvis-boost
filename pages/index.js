import Link from "next/link";
import { useState } from "react";
import locales from "../locales";

export default function Home() {
  const [lang, setLang] = useState("ru");
  const t = locales[lang];

  return (
    <div style={{
      background: 'linear-gradient(120deg,#7e30ff,#00cfff 80%)',
      minHeight: "100vh", color: "white", fontFamily: "sans-serif",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"
    }}>
      <div style={{ marginBottom: 16 }}>
        <button onClick={() => setLang("ru")} style={{marginRight:8}}>🇷🇺</button>
        <button onClick={() => setLang("en")} style={{marginRight:8}}>🇺🇸</button>
        <button onClick={() => setLang("zh")}>🇨🇳</button>
      </div>
      <h1>{t.title}</h1>
      <Link href={`/catalog?lang=${lang}`} style={{
        padding: 12, background: "#fff2", borderRadius: 10, color: "#fff", textDecoration: "none", fontWeight: 600, margin: 10
      }}>{t.openCatalog}</Link>
    </div>
  );
}