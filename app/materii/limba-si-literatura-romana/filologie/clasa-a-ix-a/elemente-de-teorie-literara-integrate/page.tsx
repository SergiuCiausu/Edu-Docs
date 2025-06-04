"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-romana-mate-info-9";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';

const Page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);
  
  const h1 = "Elemente de teorie literară integrate"

  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    [""],
    [""],
    [""],
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
              profil="filologie" 
              materie="limba și literatura română" 
              clasa={9} 
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
                  <h1>{`${titluri.length > 1 ? `Capitolul ${indexLectie}: ` : ""}${h1}`}</h1>
                  <H2 h2text="Naratorul și perspectiva narativă" indexH2={indexH2("Naratorul și perspectiva narativă")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Naratorul</strong> este vocea care povestește acțiunea într-un text <strong>epic</strong>.
                  </p>
                  <p>
                    Poate fi:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>omniscient</strong> – știe tot despre personaje, acțiune, gânduri;</li>
                    <li><strong>subiectiv</strong> – implicat în povestire (ex: la persoana I);</li>
                    <li><strong>obiectiv</strong> – relatează faptele din afară, fără implicare.</li>
                  </ul>
                  <p>
                    <strong>Perspectiva narativă</strong> este unghiul din care este prezentată acțiunea:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>la persoana I</strong> – naratorul-personaj;</li>
                    <li><strong>la persoana a III-a</strong> – narator omniscient sau observator.</li>
                  </ul>
                  <p>
                    Exemplu: În <strong>„Amintiri din copilărie”</strong>, Creangă folosește perspectiva subiectivă (narator-personaj).
                  </p>
                  <H2 h2text="Personajele" indexH2={indexH2("Personajele")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Sunt entități fictive care participă la acțiune.
                  </p>
                  <p>
                    Se clasifică după:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>rol</strong>: principal, secundar, episodic;</li>
                    <li><strong>caracter</strong>: pozitiv/negativ, static/dinamic;</li>
                    <li>
                        <strong>mod de caracterizare:</strong>
                    </li>
                    <ul className={ulClass}>
                        <li><strong>directă</strong> (prin prezentare explicită de către narator sau alte personaje);</li>
                        <li><strong>indirectă</strong> (prin fapte, limbaj, atitudini, relații).</li>
                    </ul>
                  </ul>
                  <p>
                    Exemplu: <strong>Harap-Alb</strong> este un <strong>personaj principal pozitiv</strong>, caracterizat direct și indirect.
                  </p>
                  <H2 h2text="Timpul și spațiul" indexH2={indexH2("Timpul și spațiul")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Timpul</strong> – când are loc acțiunea:
                  </p>
                  <ul className={ulClass}>
                    <li>poate fi <strong>cronologic</strong> (succesiunea normală a evenimentelor);</li>
                    <li>sau <strong>subiectiv</strong>, nelinear (flashback-uri, anticipări).</li>
                  </ul>
                  <p>
                    <strong>Spațiul</strong> – unde are loc acțiunea:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>real</strong> (sat, oraș, cameră);</li>
                    <li>sau <strong>fantastic/aluziv</strong> (regatul lui Verde Împărat).</li>
                  </ul>
                  <p>
                    Exemplu: În basme, timpul este vag („a fost odată”), iar spațiul e adesea fantastic.
                  </p>
                  <H2 h2text="Tema și motivul literar" indexH2={indexH2("Tema și motivul literar")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Tema</strong> este ideea centrală a operei.
                  </p>
                  <p>
                    Exemple: iubirea, moartea, copilăria, lupta dintre bine și rău, natura, visul.
                  </p>
                  <p>
                    <strong>Motivul literar</strong> – un element recurent, simbolic (ex: luna, codrul, oglinda, visul, călătoria, scrisoarea etc.).
                  </p>
                  <p>
                    Exemplu: În poezia <strong>„Luceafărul”</strong>, tema este <strong>iubirea ideală</strong>, iar motivele sunt <strong>zborul, steaua, visul, aspirația</strong>.
                  </p>
                  <H2 h2text="Figuri de stil și imagini artistice" indexH2={indexH2("Figuri de stil și imagini artistice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Figurile de stil</strong> sunt mijloace de expresivitate artistică:
                  </p>
                  <p>
                    <strong>Epitet, metaforă, personificare, comparație, anafora, enumerare, interogație retorică etc.</strong>
                  </p>
                  <p>
                    <strong>Imaginile artistice</strong> – redau senzorial o scenă sau o stare:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>vizuale, auditive, tactile, olfactive, gustative;</strong></li>
                    <li>creează atmosfera și susțin expresivitatea.</li>
                  </ul>
                  <p>
                    Exemplu: „Lacul codrilor albastru” – imagine vizuală, epitet, sugestie de liniște și mister.
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

export default Page