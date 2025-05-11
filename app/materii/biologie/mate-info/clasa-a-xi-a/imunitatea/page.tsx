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
import { ulClass, olClass } from '@/app/class/ul';
import { Inder } from 'next/font/google';

const page = () => {
  
  const { theme, setTheme } = useTheme();
  
    const [clickedLinkId, setClickedLinkId] = useState<string>("");
    
    useEffect(() => {
      document.documentElement.classList.toggle("dark-theme", theme === "dark");
      document.documentElement.classList.toggle("light-theme", theme === "light");
    }, [theme]);

    const h2s = [
      "Mecanisme de apărare ale organismului",
      "Tipuri de imunitate și importanța lor",
      "Importanța imunității"
    ]

    const h3s = [
      ["Apărarea nespecifică (înnăscută)", "Apărarea specifică (dobândită)"],
      ["Imunitate activă", "Imunitate pasivă"],
      [""]
    ]

    const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Imunitatea") + 1;
    

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
                  <h1>{`Capitolul ${indexLectie}: Imunitatea`}</h1>
                  <p>
                  Imunitatea reprezintă capacitatea organismului de a se apăra împotriva agenților patogeni (bacterii, virusuri, fungi, paraziți) și a substanțelor străine (toxine, corpuri străine). Sistemul imunitar identifică, distruge și elimină aceste amenințări, protejând astfel sănătatea organismului.
                  </p>
                  <H2 h2text="Mecanisme de apărare ale organismului" indexH2={indexH2("Mecanisme de apărare ale organismului")} indexLectie={indexLectie}></H2>
                  <p>
                  Organismul uman dispune de <strong>mecanisme de apărare</strong> complexe, organizate pe mai multe niveluri:
                  </p>
                  <H3 h3text="Apărarea nespecifică (înnăscută)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mecanisme de apărare ale organismului")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mecanisme de apărare ale organismului")].findIndex(h3 => h3 === "Apărarea nespecifică (înnăscută)") : -1 }></H3>
                  <p>
                  Este prima linie de apărare, prezentă din naștere, care reacționează rapid, dar fără a distinge tipul de agent patogen.
                  </p>
                  <p>
                    <strong>Componentele sale includ:</strong>
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Bariere fizice și chimice</strong>: pielea, mucoasele, saliva, lacrimile, secrețiile gastrice (acid clorhidric).</li>
                        <li><strong>Răspuns inflamator</strong>: apare la pătrunderea unui agent străin; include roșeață, căldură, umflare și durere în zona afectată.</li>
                        <li><strong>Celule fagocitare</strong>: (neutrofile, macrofage) – fagocitează (înglobează și distrug) agenții patogeni.</li>
                        <li><strong>Substanțe antimicrobiene</strong>: cum ar fi lizozimul, interferonii și proteinele sistemului complement.</li>
                  </ul>
                  <H3 h3text="Apărarea specifică (dobândită)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mecanisme de apărare ale organismului")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mecanisme de apărare ale organismului")].findIndex(h3 => h3 === "Apărarea specifică (dobândită)") : -1}></H3>
                  <p>
                  Este declanșată mai lent, dar este direcționată împotriva unor agenți patogeni specifici și <strong>are memorie imunologică</strong>, ceea ce permite un răspuns mai rapid la reinfectare.
                  </p>
                  <p>
                    <strong>Componentele sale sunt:</strong>
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Limfocitele B</strong>: produc <strong>anticorpi</strong> care se leagă de antigenii specifici ai agenților patogeni.</li>
                        <li><strong>Limfocitele T</strong>: distrug celulele infectate (T citotoxice) sau coordonează răspunsul imun (T helper).</li>
                        <li><strong>Anticorpii (imunoglobulinele)</strong>: proteine care recunosc și neutralizează antigenii.</li>
                  </ul>
                  <H2 h2text="Tipuri de imunitate și importanța lor" indexH2={indexH2("Tipuri de imunitate și importanța lor")} indexLectie={indexLectie}></H2>
                  <p>
                  Imunitatea poate fi clasificată în funcție de modul în care este obținută:
                  </p>
                  <H3 h3text="Imunitate activă" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tipuri de imunitate și importanța lor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Tipuri de imunitate și importanța lor")].findIndex(h3 => h3 === "Imunitate activă") : -1}></H3>
                  <p>
                  Organismul își produce singur anticorpii:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Naturală activă</strong>: dobândită în urma unei infecții (ex. varicela).</li>
                        <li><strong>Artificială activă</strong>: dobândită prin vaccinare – introducerea unui antigen atenuat care determină formarea de anticorpi și memorie imunologică.</li>
                  </ul>
                  <H3 h3text="Imunitate pasivă" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tipuri de imunitate și importanța lor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Tipuri de imunitate și importanța lor")].findIndex(h3 => h3 === "Imunitate pasivă") : -1}></H3>
                  <p>
                  Anticorpii sunt primiți dintr-o altă sursă:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Naturală pasivă</strong>: transmiterea anticorpilor de la mamă la făt prin placentă sau prin laptele matern.</li>
                        <li><strong>Artificială pasivă</strong>: administrarea de <strong>seruri</strong> sau <strong>imunoglobuline</strong> gata formate (ex. în cazul mușcăturii de șarpe sau tetanos).</li>
                  </ul>
                  <H2 h2text="Importanța imunității" indexH2={indexH2("Importanța imunității")} indexLectie={indexLectie}></H2>
                  <ul
                    className={ulClass}>
                        <li><strong>Prevenirea bolilor infecțioase</strong> și limitarea răspândirii agenților patogeni.</li>
                        <li><strong>Menținerea homeostaziei</strong> prin eliminarea celulelor anormale (ex. celule canceroase).</li>
                        <li><strong>Răspuns rapid la infecții repetate</strong>, datorită memoriei imunologice.</li>
                        <li><strong>Vaccinarea</strong> ca metodă eficientă de protecție la scară individuală și colectivă.</li>
                  </ul>
                  <p>
                  Imunitatea este esențială pentru supraviețuirea organismului într-un mediu plin de factori agresivi. Sistemul imunitar, prin componentele sale specifice și nespecifice, asigură o apărare continuă și adaptativă, reprezentând o barieră vitală împotriva bolilor. Înțelegerea acestui sistem permite dezvoltarea metodelor de prevenție (vaccinuri, seruri) și tratament (imunoterapie) din ce în ce mai eficiente.
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