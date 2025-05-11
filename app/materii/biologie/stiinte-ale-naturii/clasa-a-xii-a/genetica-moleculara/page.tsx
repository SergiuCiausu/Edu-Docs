"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-bio-stiinte-ale-naturii-12";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';
import { tableClass, trClass } from '@/app/class/table';
import { table } from 'console';

const page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Genetica moleculară"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Compoziția chimică", "Structura primară și secundară a ADN-ului", "Tipuri de ARN, structură și funcții", "Funcțiile autocatalitică și heterocatalitică"],
    ["La virusuri", "La procariote (bacterii)", "La eucariote"],
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
              clasa={12} 
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
                  <H2 h2text="Acizii nucleici" indexH2={indexH2("Acizii nucleici")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Compoziția chimică" indexH3={h3s[h2s.findIndex(h2 => h2 === "Acizii nucleici")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Acizii nucleici")].findIndex(h3 => h3 === "Compoziția chimică") : -1}></H3>
                  <p>
                  Acizii nucleici sunt biopolimeri naturali esențiali pentru stocarea și transmiterea informației genetice. Ei sunt formați din unități structurale numite nucleotide, fiecare având trei componente:
                  </p>
                  <ul className={ulClass}>
                    <li>o bază azotată (purinică: adenina – A, guanina – G sau pirimidinică: citozina – C, timina – T, uracil – U);</li>
                    <li>un zahăr (dezoxiriboză în ADN, riboză în ARN);</li>
                    <li>un grup fosfat.</li>
                  </ul>
                  <p>
                  Nucleotidele sunt unite între ele prin legături fosfodiesterice formând un lanț polinucleotidic.
                  </p>
                  <H3 h3text="Structura primară și secundară a ADN-ului" indexH3={h3s[h2s.findIndex(h2 => h2 === "Acizii nucleici")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Acizii nucleici")].findIndex(h3 => h3 === "Structura primară și secundară a ADN-ului") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Structura primară</strong> se referă la secvența de nucleotide dintr-un singur lanț de ADN.</li>
                    <li><strong>Structura secundară</strong> a ADN-ului este <strong>dublu helixul</strong> descris de Watson și Crick. Molecula este alcătuită din două catene antiparalele, unite prin legături de hidrogen între baze azotate complementare: A-T (2 legături H) și C-G (3 legături H).</li>
                  </ul>
                  <p>
                  Această structură asigură stabilitatea <strong>moleculei de ADN</strong> și <strong>posibilitatea copierii exacte</strong> a informației genetice în timpul replicării.
                  </p>
                  <H3 h3text="Tipuri de ARN, structură și funcții" indexH3={h3s[h2s.findIndex(h2 => h2 === "Acizii nucleici")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Acizii nucleici")].findIndex(h3 => h3 === "Tipuri de ARN, structură și funcții") : -1}></H3>
                  <p>
                  Spre deosebire de ADN, ARN-ul este format dintr-un singur lanț de nucleotide și conține <strong>riboză</strong> și baza <strong>uracil</strong> în loc de timină.
                  </p>
                  <p>
                  Tipuri de ARN:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>ARN mesager (ARNm)</strong> – transportă informația genetică de la ADN către ribozomi pentru sinteza proteinelor.</li>
                    <li><strong>ARN ribozomal (ARNr)</strong> – intră în componența ribozomilor și participă la sinteza proteinelor.</li>
                    <li><strong>ARN de transfer (ARNt)</strong> – transportă aminoacizi către ribozomi, asigurând traducerea codului genetic.</li>
                  </ul>
                  <H3 h3text="Funcțiile autocatalitică și heterocatalitică" indexH3={h3s[h2s.findIndex(h2 => h2 === "Acizii nucleici")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Acizii nucleici")].findIndex(h3 => h3 === "Funcțiile autocatalitică și heterocatalitică") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Funcția autocatalitică</strong> a ADN-ului se referă la <strong>capacitatea sa de a se replica</strong>, adică de a forma copii identice printr-un proces catalizat enzimatic (replicare semi-conservativă).</li>
                    <li><strong>Funcția heterocatalitică</strong> constă în <strong>codificarea sintezei proteinelor</strong>, prin transcrierea informației genetice în ARNm și traducerea ei în aminoacizi specifici.=</li>
                  </ul>
                  <H2 h2text="Organizarea materialului genetic" indexH2={indexH2("Organizarea materialului genetic")} indexLectie={indexLectie}></H2>
                  <H3 h3text="La virusuri" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organizarea materialului genetic")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Organizarea materialului genetic")].findIndex(h3 => h3 === "La virusuri") : -1}></H3>
                  <p>
                  Materialul genetic poate fi <strong>ADN</strong> sau <strong>ARN</strong>, monocatenar sau bicatenar, circular sau liniar. Nu sunt înconjurate de membrană celulară, iar materialul genetic este învelit într-o capsidă proteică. Reproducerea virusurilor depinde de celula gazdă.
                  </p>
                  <H3 h3text="La procariote (bacterii)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organizarea materialului genetic")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Organizarea materialului genetic")].findIndex(h3 => h3 === "La procariote (bacterii)") : -1}></H3>
                  <p>
                  Materialul genetic este reprezentat de un <strong>cromozom circular unic</strong> (nucleoid), fără înveliș nuclear. În plus, pot exista <strong>plasmide</strong> – molecule circulare de ADN extracromozomial care conțin gene suplimentare (de ex. pentru rezistență la antibiotice).
                  </p>
                  <H3 h3text="La eucariote" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organizarea materialului genetic")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Organizarea materialului genetic")].findIndex(h3 => h3 === "La eucariote") : -1}></H3>
                  <p>
                  Materialul genetic este organizat în <strong>cromozomi liniari</strong> localizați în nucleu. Fiecare cromozom conține molecule de ADN asociate cu proteine histonice, formând <strong>cromatina</strong>. În plus, ADN se găsește și în <strong>organite semiautonome</strong>, precum mitocondriile și cloroplastele, sugerând o origine endosimbiotică.
                  </p>
                  <p>
                  Cunoașterea structurii acizilor nucleici și organizarea materialului genetic este fundamentală pentru înțelegerea transmiterii informației ereditare, a mecanismelor de replicare, exprimare genică și a diversității genetice observabile la diferite forme de viață. Aceste cunoștințe stau la baza biotehnologiilor moderne și a medicinei personalizate.
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