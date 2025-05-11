"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-bio-stiinte-ale-naturii-10";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';

const page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Sistemul endocrin"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    ["Hipofiza (glanda pituitară)", "Tiroida", "Glandele suprarenale"],
    [""],
    [""],
    ["Feedback negativ", "Feedback pozitiv"],
  ]

  const toc = h2s.map((h2, index) => {
    return {h2: h2, h3: h3s[index]};
  });

  const indexH2 = ( h2text: string ) => {
    return h2s.findIndex(h2 => h2 === h2text);
  }

  return (
    <div>
        <Navbar theme={theme} onThemeChange={setTheme}/>
        <section className="flex">
          <aside>
            <Sidebar 
              profil="științe ale naturii" 
              materie="biologie" 
              clasa={10} 
              titluri={titluri}
              isPageContent={true}
            />
          </aside>
          <main
            className="flex-1">
            <div
              className="w-[1263px] mx-auto">
              <Breadcrumbs theme={theme}/>
              <div
                className="flex gap-12">
                <div
                  className="py-16 flex-1">
                  <h1>{`Capitolul ${indexLectie}: ${h1}`}</h1>
                  <p>
                  <strong>Sistemul endocrin</strong> este unul dintre cele două mari sisteme de reglare ale organismului, alături de sistemul nervos. El coordonează procesele biologice prin intermediul hormonilor, substanțe chimice produse de glandele endocrine, care acționează la distanță asupra diverselor organe-țintă.
                  </p>
                  <H2 h2text="Glandele endocrine și hormonii" indexH2={indexH2("Glandele endocrine și hormonii")} indexLectie={indexLectie}></H2>
                  <p>
                  <strong>Glandele endocrine</strong> sunt organe specializate care produc <strong>hormoni</strong> și îi eliberează direct în sânge. Acești hormoni acționează asupra anumitor celule sau organe, regând funcțiile metabolice, de creștere, dezvoltare și reproducere.
                  </p>
                  <p>
                  Spre deosebire de glandele exocrine, care elimină secreții prin canale (ex: glandele sudoripare), glandele endocrine nu au canale excretoare.
                  </p>
                  <H2 h2text="Glandele cu secreție internă" indexH2={indexH2("Glandele cu secreție internă")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Hipofiza (glanda pituitară)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Glandele cu secreție internă")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Glandele cu secreție internă")].findIndex(h3 => h3 === "Hipofiza (glanda pituitară)") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Situată la baza creierului.</li>
                        <li>Este denumită „glanda conducătoare” deoarece controlează alte glande endocrine.</li>
                        <li>
                            Produce:
                            <ul
                                className={ulClass}>
                                    <li><strong>STH</strong> – hormonul de creștere;</li>
                                    <li><strong>TSH</strong> – stimulează tiroida;</li>
                                    <li><strong>ACTH</strong> – stimulează glandele suprarenale;</li>
                                    <li><strong>LH, FSH</strong> – reglează funcțiile sexuale;</li>
                                    <li><strong>Prolactina</strong> – stimulează lactația;</li>
                                    <li><strong>ADH și oxitocina</strong> – stocate în hipofiza posterioară.</li>
                            </ul>
                        </li>
                  </ul>
                  <H3 h3text="Tiroida" indexH3={h3s[h2s.findIndex(h2 => h2 === "Glandele cu secreție internă")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Glandele cu secreție internă")].findIndex(h3 => h3 === "Tiroida") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Localizată în partea anterioară a gâtului.</li>
                        <li>
                            Produce:
                            <ul
                                className={ulClass}>
                                    <li><strong>Tiroxină (T4) și Triiodotironină (T3)</strong> – reglează metabolismul;</li>
                                    <li><strong>Calcitonina</strong> – reduce nivelul calciului din sânge.</li>
                            </ul>
                        </li>
                  </ul>
                  <H3 h3text="Glandele suprarenale" indexH3={h3s[h2s.findIndex(h2 => h2 === "Glandele cu secreție internă")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Glandele cu secreție internă")].findIndex(h3 => h3 === "Glandele suprarenale") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Situate deasupra rinichilor.</li>
                        <li>
                            Alcătuite din:
                            <ul
                                className={ulClass}>
                                    <li><strong>Cortexul suprarenal</strong> – produce cortizol (antiinflamator), aldosteron (reglează echilibrul hidric și ionic) și hormoni sexuali.</li>
                                    <li><strong>Măduva suprarenală</strong> – produce adrenalină și noradrenalină, implicate în reacțiile la stres.</li>
                            </ul>
                        </li>
                  </ul>
                  <H2 h2text="Hormonii și efectele acestora asupra organismului" indexH2={indexH2("Hormonii și efectele acestora asupra organismului")} indexLectie={indexLectie}></H2>
                  <p>
                  Hormonii acționează la nivelul celulelor-țintă care au receptori specifici. Efectele lor pot fi:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Metabolice</strong> – ex: tiroxina crește rata metabolică.</li>
                        <li><strong>De creștere</strong> – ex: hormonul de creștere stimulează dezvoltarea țesuturilor.</li>
                        <li><strong>Reproducătoare</strong> – ex: LH și FSH controlează ciclul menstrual și spermatogeneza.</li>
                        <li><strong>Emoționale și comportamentale</strong> – ex: adrenalina crește starea de alertă.</li>
                        <li><strong>Imunitare</strong> – ex: cortizolul suprimă inflamația.</li>
                  </ul>
                  <p>
                  Dezechilibrele hormonale pot duce la:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Hiposecreție</strong> (ex: nanism hipofizar),</li>
                        <li><strong>Hipersecreție</strong> (ex: gigantism, hipertiroidism),</li>
                        <li>Tulburări metabolice (ex: diabet zaharat – insulină insuficientă).</li>
                  </ul>
                  <H2 h2text="Mecanismele de reglare hormonală" indexH2={indexH2("Mecanismele de reglare hormonală")} indexLectie={indexLectie}></H2>
                  <p>
                  Producția hormonală este reglată prin <strong>mecanisme fine de control</strong>, în care sunt implicate hipotalamusul, hipofiza și glandele endocrine.
                  </p>
                  <p>
                  Reglarea poate fi:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Urmare a stimulilor interni</strong> (ex: nivel scăzut de glucoză → eliberare de glucagon),</li>
                        <li><strong>Pe cale nervoasă</strong> (ex: stres → eliberare de adrenalină),</li>
                        <li><strong>Prin retroacțiune (feedback)</strong></li>
                  </ul>
                  <H2 h2text="Feedback-ul negativ și pozitiv în reglarea hormonală" indexH2={indexH2("Feedback-ul negativ și pozitiv în reglarea hormonală")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Feedback negativ" indexH3={h3s[h2s.findIndex(h2 => h2 === "Feedback-ul negativ și pozitiv în reglarea hormonală")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Feedback-ul negativ și pozitiv în reglarea hormonală")].findIndex(h3 => h3 === "Feedback negativ") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Este cel mai frecvent mecanism de reglare hormonală.</li>
                        <li>Când nivelul unui hormon din sânge este prea mare, glandele care îl produc sunt inhibate.</li>
                  </ul>
                  <p>
                    <strong>Exemplu:</strong>
                  </p>
                  <ul
                    className={ulClass}>
                        <li>TSH stimulează tiroida să producă T3/T4;</li>
                        <li>Când nivelul T3/T4 crește, TSH este redus → producția este oprită.</li>
                  </ul>
                  <H3 h3text="Feedback pozitiv" indexH3={h3s[h2s.findIndex(h2 => h2 === "Feedback-ul negativ și pozitiv în reglarea hormonală")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Feedback-ul negativ și pozitiv în reglarea hormonală")].findIndex(h3 => h3 === "Feedback pozitiv") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Mecanism rar, în care un hormon stimulează și mai mult producția sa.</li>
                        <li>
                            Apare în situații speciale (ex: naștere):
                            <ul
                                className={ulClass}>
                                    <li>Oxitocina stimulează contracțiile uterine → contracțiile stimulează și mai mult eliberarea oxitocinei.</li>
                            </ul>
                        </li>
                  </ul>
                  <p>
                  Sistemul endocrin reglează procesele vitale prin hormoni produși de glande endocrine. Principalele glande sunt hipofiza, tiroida, glandele suprarenale. Hormonii influențează metabolismul, creșterea, reproducerea și starea emoțională. Reglarea hormonală se face prin mecanisme de feedback negativ și pozitiv.
                  </p>
                </div>
                <div
                  className="w-[237px] h-[85vh] pt-17 top-[155px] sticky overflow-y-auto">
                  <TableOfContents toc={toc} indexLectie={indexLectie}/>
                </div>
              </div>
            </div>
          </main>
        </section>
    </div>
  )
}

export default page