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

const Page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Genetica umană"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Complementul cromozomial"],
    ["Anomalii cromozomiale asociate cancerului uman", "Agenți carcinogeni"],
    ["Consiliere genetică", "Diagnosticul prenatal", "Fertilizarea in vitro (FIV)", "Clonarea terapeutică", "Terapia genică"]
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
                  <p>
                  Genetica umană studiază moștenirea și variația caracteristicilor ereditare la om, oferind o bază științifică pentru înțelegerea bolilor genetice, dezvoltarea terapiilor moderne și luarea deciziilor bioetice informate.
                  </p>
                  <H2 h2text="Genomul uman" indexH2={indexH2("Genomul uman")} indexLectie={indexLectie}></H2>
                  <p>
                  <strong>Genomul</strong> reprezintă totalitatea informației genetice a unui organism. La om, genomul conține aproximativ <strong>3 miliarde de perechi de baze</strong> și aproximativ <strong>20.000 de gene codante</strong>.
                  </p>
                  <H3 h3text="Complementul cromozomial" indexH3={h3s[h2s.findIndex(h2 => h2 === "Genomul uman")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Genomul uman")].findIndex(h3 => h3 === "Complementul cromozomial") : -1}></H3>
                  <p>
                  Specia umană este <strong>diploidă</strong>, având 46 de cromozomi organizați în 23 de perechi:
                  </p>
                  <ul className={ulClass}>
                    <li>22 de perechi de <strong>autozomi</strong></li>
                    <li>1 pereche de <strong>cromozomi sexuali</strong> (XX la femei, XY la bărbați)</li>
                  </ul>
                  <p>
                  Fiecare gen are o locație fixă (locus) pe cromozom și poate exista în variante numite aleli. Anomaliile cromozomiale pot duce la malformații congenitale sau boli genetice.
                  </p>
                  <H2 h2text="Mutageneza și teratogeneza" indexH2={indexH2("Mutageneza și teratogeneza")} indexLectie={indexLectie}></H2>
                  <p>
                  <strong>Mutageneza</strong> este procesul prin care apar modificări (mutații) în structura sau numărul cromozomilor.
                  </p>
                  <p>
                  <strong>Teratogeneza</strong> se referă la afectarea dezvoltării embrionare, conducând la malformații congenitale.
                  </p>
                  <H3 h3text="Anomalii cromozomiale asociate cancerului uman" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mutageneza și teratogeneza")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mutageneza și teratogeneza")].findIndex(h3 => h3 === "Anomalii cromozomiale asociate cancerului uman") : -1}></H3>
                  <p>
                  Anumite mutații genetice și anomalii cromozomiale (translocații, deleții) pot activa <strong>oncogene</strong> sau inactiva <strong>gene supresoare tumorale</strong>, contribuind la apariția cancerelor:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Leucemia mieloidă cronică</strong> – translocația între cromozomii 9 și 22 (cromozomul Philadelphia)</li>
                    <li><strong>Retinoblastomul</strong> – deleție în cromozomul 13</li>
                    <li><strong>Cancerul de sân</strong> – mutații în genele BRCA1 și BRCA2</li>
                  </ul>
                  <H3 h3text="Agenți carcinogeni" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mutageneza și teratogeneza")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mutageneza și teratogeneza")].findIndex(h3 => h3 === "Agenți carcinogeni") : -1}></H3>
                  <p>
                  Substanțele sau factorii care pot cauza cancer includ:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Radiațiile ionizante</strong> (ex. razele X)</li>
                    <li><strong>Radiațiile UV</strong></li>
                    <li><strong>Substanțe chimice</strong> (ex. benzen, azbest)</li>
                    <li><strong>Viruși oncogeni</strong> (ex. HPV – papilomavirusul uman)</li>
                  </ul>
                  <H2 h2text="Domenii de aplicabilitate și considerații bioetice în genetica umană" indexH2={indexH2("Domenii de aplicabilitate și considerații bioetice în genetica umană")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Consiliere genetică" indexH3={h3s[h2s.findIndex(h2 => h2 === "Domenii de aplicabilitate și considerații bioetice în genetica umană")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Domenii de aplicabilitate și considerații bioetice în genetica umană")].findIndex(h3 => h3 === "Consiliere genetică") : -1}></H3>
                  <p>
                  Oferă sprijin informațional și emoțional familiilor afectate de boli genetice. Consilierea ajută părinții să înțeleagă riscurile ereditare și să ia decizii responsabile privind reproducerea.
                  </p>
                  <H3 h3text="Diagnosticul prenatal" indexH3={h3s[h2s.findIndex(h2 => h2 === "Domenii de aplicabilitate și considerații bioetice în genetica umană")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Domenii de aplicabilitate și considerații bioetice în genetica umană")].findIndex(h3 => h3 === "Diagnosticul prenatal") : -1}></H3>
                  <p>
                  Permite identificarea bolilor genetice sau a anomaliilor fetale în timpul sarcinii, prin metode precum:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Amniocenteza</strong></li>
                    <li><strong>Biopsia vilozităților coriale</strong></li>
                    <li><strong>Teste ADN non-invazive</strong></li>
                  </ul>
                  <H3 h3text="Fertilizarea in vitro (FIV)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Domenii de aplicabilitate și considerații bioetice în genetica umană")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Domenii de aplicabilitate și considerații bioetice în genetica umană")].findIndex(h3 => h3 === "Fertilizarea in vitro (FIV)") : -1}></H3>
                  <p>
                  Este o tehnică de reproducere asistată, în care fecundația are loc în afara organismului. Embriotransferul se face ulterior în uterul mamei.
                  </p>
                  <p>
                  Aspectele etice se referă la selecția embrionilor, utilizarea embrionilor excedentari și drepturile parentale.
                  </p>
                  <H3 h3text="Clonarea terapeutică" indexH3={h3s[h2s.findIndex(h2 => h2 === "Domenii de aplicabilitate și considerații bioetice în genetica umană")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Domenii de aplicabilitate și considerații bioetice în genetica umană")].findIndex(h3 => h3 === "Clonarea terapeutică") : -1}></H3>
                  <p>
                  Constă în crearea de celule stem embrionare pentru regenerarea țesuturilor sau tratarea bolilor degenerative. Nu implică dezvoltarea completă a embrionului.
                  </p>
                  <H3 h3text="Terapia genică" indexH3={h3s[h2s.findIndex(h2 => h2 === "Domenii de aplicabilitate și considerații bioetice în genetica umană")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Domenii de aplicabilitate și considerații bioetice în genetica umană")].findIndex(h3 => h3 === "Terapia genică") : -1}></H3>
                  <p>
                  Este un domeniu promițător al medicinei moleculare care presupune <strong>introducerea, eliminarea sau corectarea</strong> genelor defecte pentru a trata boli genetice (ex: fibroza chistică, distrofia musculară, hemofilia). Terapia genică ridică importante <strong>probleme etice</strong>, precum:
                  </p>
                  <ul className={ulClass}>
                    <li>siguranța procedurilor;</li>
                    <li>accesul echitabil la tratament;</li>
                    <li>modificările moștenibile ale genomului.</li>
                  </ul>
                  <p>
                  Genetica umană reprezintă o punte între știință, medicină și bioetică. Înțelegerea genomului, a mutațiilor și a metodelor de intervenție genetică deschide calea către tratamente personalizate, dar necesită în același timp un cadru moral și legal responsabil.
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