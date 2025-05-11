"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-info-9";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';
import { tableClass, trClass } from '@/app/class/table';
import { table } from 'console';
import { fractie } from "@/app/class/fractie-container"
import Vector from '@/app/components/Ecuatii/Vectori/Vector';

const page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Introducere în informatică"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Exemple de domenii unde se aplică informatica"],
    [""],
    ["Hardware (componente fizice)", "Software (componente logice)"],
    [""],
    ["Etica în informatică presupune", "Securitatea informatică include"],
  ]
  
  const [clickedLinkId, setClickedLinkId] = useState<string>(h1);

  const updateClickedLinkId = (newClickedLinkId: string) => {
    setClickedLinkId(newClickedLinkId);
  }

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
              materie="informatică" 
              clasa={9} 
              titluri={titluri}
              isPageContent={true}
              clickedLink={clickedLinkId}
              onLinkClick={updateClickedLinkId}
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
                  <H2 h2text="Ce este informatica?" indexH2={indexH2("Ce este informatica?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Informatica</strong> este știința care se ocupă cu studiul metodelor de prelucrare automată a informației, cu ajutorul calculatoarelor. Scopul informaticii este de a crea algoritmi și programe care pot rezolva probleme din viața reală, știință, tehnică sau afaceri, folosind sisteme de calcul.
                  </p>
                  <p>
                  Este o știință interdisciplinară care se intersectează cu matematica, fizica, biologia, economia, medicina, etc.
                  </p>
                  <H3 h3text="Exemple de domenii unde se aplică informatica:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Ce este informatica?")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Ce este informatica?")].findIndex(h3 => h3 === "Exemple de domenii unde se aplică informatica") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Inteligență artificială</li>
                    <li>Grafică și jocuri pe calculator</li>
                    <li>Analiza datelor și Big Data</li>
                    <li>Robotică</li>
                    <li>Securitate cibernetică</li>
                    <li>Programare și dezvoltare de aplicații</li>
                  </ul>
                  <H2 h2text="Istoria și evoluția calculatoarelor" indexH2={indexH2("Istoria și evoluția calculatoarelor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Evoluția calculatoarelor</strong> poate fi împărțită în mai multe generații:
                  </p>
                  <ul className={ulClass}>
                    <li>Prima generație (1940-1956): calculatoare cu tuburi electronice (ex: ENIAC).</li>
                    <li>A doua generație (1956-1963): tranzistoare în locul tuburilor.</li>
                    <li>A treia generație (1964-1971): apar circuitele integrate.</li>
                    <li>A patra generație (1971-prezent): apariția microprocesoarelor și a computerelor personale.</li>
                    <li>A cincea generație (în curs de dezvoltare): inteligență artificială, învățare automată.</li>
                  </ul>
                  <p>
                    <strong>Personalități importante:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Charles Babbage</strong> – considerat părintele calculatorului.</li>
                    <li><strong>Alan Turing</strong> – fondatorul teoriei algoritmilor și al informaticii moderne.</li>
                    <li><strong>Ada Lovelace</strong> – primul programator din istorie.</li>
                  </ul>
                  <H2 h2text="Componentele hardware și software ale unui sistem de calcul" indexH2={indexH2("Componentele hardware și software ale unui sistem de calcul")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Un <strong>sistem de calcul</strong> este alcătuit din:
                  </p>
                  <H3 h3text="Hardware (componente fizice):" indexH3={h3s[h2s.findIndex(h2 => h2 === "Componentele hardware și software ale unui sistem de calcul")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Componentele hardware și software ale unui sistem de calcul")].findIndex(h3 => h3 === "Hardware (componente fizice)") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Unitatea centrală (CPU)</strong> – execută instrucțiunile.</li>
                    <li><strong>Memoria RAM</strong> – stochează datele temporar.</li>
                    <li><strong>Hard disk / SSD</strong> – stochează datele permanent.</li>
                    <li><strong>Placa de bază, placa video, sursa, monitor, tastatură, mouse etc.</strong></li>
                  </ul>
                  <H3 h3text="Software (componente logice):" indexH3={h3s[h2s.findIndex(h2 => h2 === "Componentele hardware și software ale unui sistem de calcul")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Componentele hardware și software ale unui sistem de calcul")].findIndex(h3 => h3 === "Software (componente logice)") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Sistemul de operare</strong> – interfața dintre utilizator și hardware (Windows, Linux, macOS).</li>
                    <li><strong>Aplicațiile</strong> – programe care realizează sarcini specifice (browsere, editoare, jocuri).</li>
                    <li><strong>Driverele</strong> – programe care controlează componentele hardware.</li>
                  </ul>
                  <H2 h2text="Sisteme de operare: funcții și tipuri" indexH2={indexH2("Sisteme de operare: funcții și tipuri")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Sistemul de operare (OS)</strong> este software-ul de bază care gestionează resursele unui calculator și oferă o interfață pentru utilizator.
                  </p>
                  <p>
                    <strong>Funcții principale:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Gestionarea memoriei și a procesorului</li>
                    <li>Administrarea fișierelor și folderelor</li>
                    <li>Controlul dispozitivelor periferice</li>
                    <li>Lansarea și oprirea programelor</li>
                  </ul>
                  <p>
                    <strong>Tipuri de sisteme de operare:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Pentru utilizatori individuali</strong>: Windows, macOS, Ubuntu</li>
                    <li><strong>Pentru servere</strong>: Linux Server, Windows Server</li>
                    <li><strong>Mobile</strong>: Android, iOS</li>
                    <li><strong>Embedded</strong>: în televizoare, mașini, frigidere inteligente etc.</li>
                  </ul>
                  <H2 h2text="Etica și securitatea în utilizarea tehnologiei informației" indexH2={indexH2("Etica și securitatea în utilizarea tehnologiei informației")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Etica în informatică presupune:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Etica și securitatea în utilizarea tehnologiei informației")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Etica și securitatea în utilizarea tehnologiei informației")].findIndex(h3 => h3 === "Etica în informatică presupune") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Crearea de parole puternice</li>
                    <li>Utilizarea antivirusului și firewall-ului</li>
                    <li>Evitarea accesării site-urilor nesigure</li>
                    <li>Protejarea datelor personale și confidențiale</li>
                  </ul>
                </div>
                <div
                  className="w-[237px] h-[85vh] pt-17 top-[176px] sticky overflow-y-auto">
                  <TableOfContents toc={toc} indexLectie={titluri.length > 1 ? indexLectie : -1} clickedLink={clickedLinkId} onLinkClick={updateClickedLinkId}/>
                </div>
              </div>
            </div>
          </main>
        </section>
    </div> 
  )
}

export default page