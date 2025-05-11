"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Navbar from '@/app/components/Navbar/Navbar';
import { H2 } from '@/app/components/PageContent/H2';
import H3 from '@/app/components/PageContent/H3';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { titluri } from '@/app/data/capitole-bio-mate-info-11';
import { useTheme } from '@/context/ThemeContext';
import React, { useEffect, useState } from 'react'
import { ulClass } from '@/app/class/ul';

const page = () => {
  
  const { theme, setTheme } = useTheme();
  
    const [clickedLinkId, setClickedLinkId] = useState<string>("");
    
    useEffect(() => {
      document.documentElement.classList.toggle("dark-theme", theme === "dark");
      document.documentElement.classList.toggle("light-theme", theme === "light");
    }, [theme]);

    const h2s = [
      "Niveluri de organizare a corpului uman",
      "Homeostazia și mecanismele de reglare",
    ]

    const h3s = [
      ["Nivelul chimic", "Nivelul celular", "Nivelul tisular", "Nivelul organelor", "Nivelul sistemelor de organe", "Nivelul organismului"],
      ["Ce este homeostazia?", "Mecanisme de reglare", "Rolul sistemelor de reglare"],
    ]

    const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Organismul uman – caracteristici generale") + 1;

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
              profil="mate info" 
              materie="biologie" 
              clasa={11} 
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
                className="flex gap-12 relative">
                <div
                  className="py-16 flex-1">
                  <h1>{`Capitolul ${indexLectie}: Organismul uman – caracteristici generale`}</h1>
                  <p>
                  Corpul uman este o structură biologică complexă, alcătuită din miliarde de celule, organizate în țesuturi, organe și sisteme, care colaborează pentru a menține viața. Studiul organismului uman implică înțelegerea modului în care acesta este organizat, cum funcționează și cum își menține echilibrul intern în fața schimbărilor mediului înconjurător.
                  </p>
                  <H2 h2text="Niveluri de organizare a corpului uman" indexH2={indexH2("Niveluri de organizare a corpului uman")} indexLectie={indexLectie}></H2>
                  <p>
                  Organismul uman este alcătuit din mai multe niveluri de organizare structurală, fiecare contribuind la buna funcționare a întregului:
                  </p>
                  <H3 h3text="Nivelul chimic" indexH3={h3s[h2s.findIndex(h2 => h2 === "Niveluri de organizare a corpului uman")].findIndex(h3 => h3 === "Nivelul chimic")}></H3>
                  <p>
                  Este cel mai simplu nivel și include <strong>atomi</strong> (precum oxigen, carbon, hidrogen, azot) și <strong>molecule</strong> (apă, proteine, glucide, lipide, acizi nucleici). Acestea formează baza pentru toate procesele biologice.
                  </p>
                  <H3 h3text="Nivelul celular" indexH3={h3s[h2s.findIndex(h2 => h2 === "Niveluri de organizare a corpului uman")].findIndex(h3 => h3 === "Nivelul celular")}></H3>
                  <p>
                  Celula este <strong>unitatea structurală și funcțională</strong> a organismului. Există multe tipuri de celule, cum ar fi celulele nervoase, musculare, epiteliale, fiecare specializată pentru o anumită funcție.
                  </p>
                  <H3 h3text="Nivelul tisular" indexH3={h3s[h2s.findIndex(h2 => h2 === "Niveluri de organizare a corpului uman")].findIndex(h3 => h3 === "Nivelul tisular")}></H3>
                  <p>
                  Celulele similare care îndeplinesc aceeași funcție se organizează în țesuturi. Există patru tipuri principale:
                  </p>
                  <ul
                    className={ulClass}>
                      <li>Țesut epitelial (acoperă suprafețele și căptușește cavitățile),</li>
                      <li>Țesut conjunctiv (de susținere și legătură),</li>
                      <li>Țesut muscular (contracție și mișcare),</li>
                      <li>Țesut nervos (conducerea impulsurilor nervoase).</li>
                  </ul>
                  <H3 h3text="Nivelul organelor" indexH3={h3s[h2s.findIndex(h2 => h2 === "Niveluri de organizare a corpului uman")].findIndex(h3 => h3 === "Nivelul organelor")}></H3>
                  <p>
                  Organele sunt structuri formate din <strong>două sau mai multe tipuri de țesuturi</strong> care îndeplinesc funcții specifice. De exemplu, inima (țesut muscular, conjunctiv, nervos și epitelial) pompează sângele.
                  </p>
                  <H3 h3text="Nivelul sistemelor de organe" indexH3={h3s[h2s.findIndex(h2 => h2 === "Niveluri de organizare a corpului uman")].findIndex(h3 => h3 === "Nivelul sistemelor de organe")}></H3>
                  <p>
                  Sistemele sunt grupuri de organe care colaborează pentru a realiza funcții complexe: sistemul digestiv, respirator, nervos, circulator etc.
                  </p>
                  <H3 h3text="Nivelul organismului" indexH3={h3s[h2s.findIndex(h2 => h2 === "Niveluri de organizare a corpului uman")].findIndex(h3 => h3 === "Nivelul organismului")}></H3>
                  <p>
                  Toate sistemele de organe interacționează și formează <strong>organismul viu unitar</strong>, capabil să trăiască, să se reproducă și să se adapteze mediului.
                  </p>
                  <H2 h2text="Homeostazia și mecanismele de reglare" indexH2={indexH2("Homeostazia și mecanismele de reglare")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Ce este homeostazia?" indexH3={h3s[h2s.findIndex(h2 => h2 === "Homeostazia și mecanismele de reglare")].findIndex(h3 => h3 === "Ce este homeostazia?")}></H3>
                  <p>
                  <strong>Homeostazia</strong> este capacitatea organismului de a menține un mediu intern stabil, în ciuda variațiilor din mediul extern. Acest echilibru este esențial pentru funcționarea normală a celulelor și a organelor.
                  </p>
                  <p>
                  Exemple de factori homeostatici:
                  </p>
                  <ul
                    className={ulClass}>
                      <li>Temperatura corpului (~37°C)</li>
                      <li>pH-ul sângelui (~7,4)</li>
                      <li>Nivelul glucozei în sânge</li>
                      <li>Presiunea sângelui</li>
                      <li>Concentrația ionilor (Na⁺, K⁺, Ca²⁺)</li>
                  </ul>
                  <H3 h3text="Mecanisme de reglare" indexH3={h3s[h2s.findIndex(h2 => h2 === "Homeostazia și mecanismele de reglare")].findIndex(h3 => h3 === "Mecanisme de reglare")}></H3>
                  <p>
                  Homeostazia este menținută prin <strong>mecanisme de reglare</strong>, care funcționează prin <strong>feedback (retroacțiune)</strong>:
                  </p>
                  <p><strong>1. Feedback negativ (cel mai frecvent)</strong></p>
                  <p>
                  Acțiunea este inversată pentru a readuce echilibrul.
                  </p>
                  <p>
                  Exemplu: Dacă temperatura corpului crește, mecanismele de transpirație și vasodilatație ajută la răcirea corpului.
                  </p>
                  <p>
                    <strong>2. Feedback pozitiv</strong>
                  </p>
                  <p>
                  Amplifică un proces până la finalizarea lui.
                  </p>
                  <p>
                  Exemplu: contracțiile uterine din timpul nașterii sunt stimulate continuu de oxitocină până la expulzarea fătului.
                  </p>
                  <H3 h3text="Rolul sistemelor de reglare" indexH3={h3s[h2s.findIndex(h2 => h2 === "Homeostazia și mecanismele de reglare")].findIndex(h3 => h3 === "Rolul sistemelor de reglare")}></H3>
                  <ul
                    className={ulClass}>
                      <li><strong>Sistemul nervos</strong> – acțiuni rapide, pe termen scurt (reflexe, răspunsuri senzoriale).</li>
                      <li><strong>Sistemul endocrin</strong> – reglări lente, dar durabile (prin hormoni).</li>
                  </ul>
                  <p>
                  Aceste două sisteme lucrează împreună pentru a menține <strong>homeostazia</strong> și a răspunde eficient la stimuli interni și externi.
                  </p>
                  <p>
                  Organismul uman este un ansamblu bine organizat, cu structuri ierarhizate și funcții interdependente. Menținerea homeostaziei este esențială pentru sănătate, iar înțelegerea mecanismelor de reglare biologică reprezintă o bază importantă în biologie, medicină și științele vieții.
                  </p>
                </div>
                <div
                  className="w-[237px] h-[85vh] pt-17 top-[155px] sticky overflow-y-auto">
                  <TableOfContents toc={toc} indexLectie={indexLectie} clickedLink={clickedLinkId}/>
                </div>
              </div>
            </div>
          </main>
        </section>
    </div>
  )
}

export default page