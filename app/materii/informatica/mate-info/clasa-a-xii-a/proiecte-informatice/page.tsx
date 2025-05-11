"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-info-12";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';
import { tableClass, trClass } from '@/app/class/table';
import { table } from 'console';
import { fractie } from "@/app/class/fractie-container"
import Vector from '@/app/components/Ecuatii/Vectori/Vector';
import { titluriCapitole } from '@/app/data/capitole-fizica-mate-info-capitole-10';

const page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Proiecte informatice"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    ["Formarea echipei", "Comunicare și colaborare"],
    [""],
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
              clasa={12} 
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
                  <H2 h2text="De ce este importantă munca în echipă în informatică?" indexH2={indexH2("De ce este importantă munca în echipă în informatică?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Dezvoltarea unui proiect informatic presupune mai mult decât programare. Este nevoie de:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Planificare, analiză, design, testare și prezentare;</strong></li>
                    <li>Diversitate de <strong>competențe</strong> (tehnice, de comunicare, organizare);</li>
                    <li>O abordare colaborativă pentru a respecta termenele și a livra un produs coerent.</li>
                  </ul>
                  <p>
                  În realitate, aplicațiile software sunt dezvoltate în echipe formate din programatori, designeri, testeri, manageri de proiect, analiști și utilizatori finali.
                  </p>
                  <H2 h2text="Componentele muncii în echipă" indexH2={indexH2("Componentele muncii în echipă")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Formarea echipei" indexH3={h3s[h2s.findIndex(h2 => h2 === "Componentele muncii în echipă")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Componentele muncii în echipă")].findIndex(h3 => h3 === "Formarea echipei") : -1}></H3>
                  <p>
                  O echipă eficientă include membri cu roluri clare:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Manager de proiect</strong>: coordonează sarcinile, stabilește termene, monitorizează progresul;</li>
                    <li><strong>Programator(i)</strong>: scrie codul sursă al aplicației;</li>
                    <li><strong>Designer UI/UX</strong>: creează interfața utilizatorului și experiența de navigare;</li>
                    <li><strong>Tester</strong>: identifică erori și propune soluții de îmbunătățire;</li>
                    <li><strong>Documentarist / Prezentator</strong>: redactează manuale, documentație și prezintă proiectul.</li>
                  </ul>
                  <p>
                  Fiecare elev poate juca mai multe roluri, în funcție de mărimea echipei.
                  </p>
                  <H3 h3text="Comunicare și colaborare" indexH3={h3s[h2s.findIndex(h2 => h2 === "Componentele muncii în echipă")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Componentele muncii în echipă")].findIndex(h3 => h3 === "Comunicare și colaborare") : -1}></H3>
                  <p>
                  Comunicarea clară este esențială pentru succesul proiectului:
                  </p>
                  <ul className={ulClass}>
                    <li>Se stabilesc canale de comunicare: întâlniri regulate, grupuri online, mesagerie;</li>
                    <li>Se încurajează feedbackul constructiv;</li>
                    <li>Se respectă opiniile celorlalți;</li>
                    <li>Se adoptă o cultură a responsabilității.</li>
                  </ul>
                  <p>
                  Instrumente recomandate pentru colaborare:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Google Drive / Docs</strong> – pentru partajarea de fișiere;</li>
                    <li><strong>Trello / Notion</strong> – pentru urmărirea sarcinilor;</li>
                    <li><strong>GitHub / GitLab</strong> – pentru controlul versiunilor și colaborare la cod;</li>
                    <li><strong>Discord / Slack</strong> – pentru comunicare în timp real.</li>
                  </ul>
                  <H2 h2text="Etapele de lucru în echipă" indexH2={indexH2("Etapele de lucru în echipă")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ol className={olClass}>
                    <li>
                        <strong>Stabilirea ideii de proiect</strong>
                        <p>
                        Alegerea unei teme potrivite intereselor și nivelului de cunoștințe;
                        </p>
                    </li>
                    <li>
                        <strong>
                        Distribuirea responsabilităților
                        </strong>
                        <p>
                        Fiecare membru primește un set clar de sarcini;
                        </p>
                    </li>
                    <li>
                        <strong>Stabilirea termenelor (deadline-uri)</strong>
                        <p>
                        Se planifică activitățile în mod realist și echilibrat;
                        </p>
                    </li>
                    <li>
                        <strong>Colaborare și implementare</strong>
                        <p>Se lucrează individual, dar cu sincronizare continuă între membri;</p>
                    </li>
                    <li>
                        <strong>Testare, documentare și prezentare</strong>
                        <p>Se testează produsul, se corectează erorile, se redactează ghiduri;</p>
                    </li>
                    <li>
                        <strong>Evaluare finală și feedback</strong>
                        <p>Se face autoevaluarea și se propun îmbunătățiri.</p>
                    </li>
                  </ol>
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