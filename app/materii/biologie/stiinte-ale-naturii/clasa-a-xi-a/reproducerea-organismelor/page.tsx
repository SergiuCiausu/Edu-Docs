"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-bio-stiinte-ale-naturii-11";
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

  const h1 = "Reproducerea organismelor"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Reproducerea asexuată", "Reproducerea sexuată", "Gena și sporul"],
    ["Tipuri de reproducere", "Mecanisme de reproducere"],
    ["Gametogeneza", "Fecundația", "Dezvoltarea embrionară", "Nașterea"],
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
                className="flex gap-12">
                <div
                  className="py-16 flex-1">
                  <h1>{`Capitolul ${indexLectie}: ${h1}`}</h1>
                  <p>
                  <strong>Reproducerea</strong> este procesul prin care organismele își asigură continuitatea speciei, generând urmași. Ea poate fi <strong>asexuată</strong> sau <strong>sexuată</strong>, fiecare cu mecanisme și roluri specifice.
                  </p>
                  <H2 h2text="Reproducerea la plante" indexH2={indexH2("Reproducerea la plante")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Reproducerea asexuată" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reproducerea la plante")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reproducerea la plante")].findIndex(h3 => h3 === "Reproducerea asexuată") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Implică un singur organism părinte și nu necesită celule sexuale.</li>
                    <li>Noii indivizi sunt identici genetic cu planta-mamă.</li>
                    <li>
                        Exemple:
                        <ul className={ulClass}>
                            <li><strong>Butași, bulbi, tuberculi</strong> – reproducere vegetativă.</li>
                            <li><strong>Fragmentare</strong> – dintr-o parte a plantei se formează un nou individ (ex: mușchi, alge).</li>
                            <li><strong>Sporii</strong> – celule de reproducere asexuată care pot germina în condiții favorabile.</li>
                        </ul>
                    </li>
                  </ul>
                  <H3 h3text="Reproducerea sexuată" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reproducerea la plante")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reproducerea la plante")].findIndex(h3 => h3 === "Reproducerea sexuată") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Implică <strong>doi gameți</strong> (mascul și femel), rezultând un zigot cu un amestec genetic nou.</li>
                    <li>
                        La plantele superioare:
                        <ul className={ulClass}>
                            <li>Gametul masculin este transportat de polen.</li>
                            <li>Gametul femel se află în ovul.</li>
                            <li>Fecundația are loc în interiorul florii, rezultând <strong>semințe</strong>.</li>
                        </ul>
                    </li>
                  </ul>
                  <H3 h3text="Gena și sporul" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reproducerea la plante")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reproducerea la plante")].findIndex(h3 => h3 === "Gena și sporul") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Genele</strong> sunt unități ereditare situate în ADN, care controlează caracterele.</li>
                    <li><strong>Sporii</strong> sunt celule de reproducere, în general asexuată, rezistente și capabile să producă noi organisme fără fecundație.</li>
                  </ul>
                  <H2 h2text="Reproducerea la animale" indexH2={indexH2("Reproducerea la animale")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Tipuri de reproducere" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reproducerea la animale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reproducerea la animale")].findIndex(h3 => h3 === "Tipuri de reproducere") : -1}></H3>
                  <p>
                    <strong>Reproducerea asexuată</strong>
                  </p>
                  <p>
                  Mai rară la animale, dar întâlnită la:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Animale inferioare</strong> (hidre, planarii).</li>
                    <li>Tipuri: <strong>diviziune, înmugurire, regenerare</strong>.</li>
                  </ul>
                  <p>
                    <strong>Reproducerea sexuată</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Implică doi gameti (ovul și spermatozoid).</li>
                    <li>Asigură <strong>variabilitate genetică</strong>.</li>
                    <li>
                        Fecundația poate fi:
                        <ul className={ulClass}>
                            <li><strong>Internă</strong> (mamifere, păsări).</li>
                            <li><strong>Externă</strong> (pești, amfibieni).</li>
                        </ul>
                    </li>
                  </ul>
                  <H3 h3text="Mecanisme de reproducere" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reproducerea la animale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reproducerea la animale")].findIndex(h3 => h3 === "Mecanisme de reproducere") : -1}></H3>
                  <ul className={ulClass}>
                    <li>
                        Animalele pot fi:
                        <ul className={ulClass}>
                            <li><strong>Dioice</strong> – indivizi separați de sex masculin și feminin.</li>
                            <li><strong>Monoice (hermafrodite)</strong> – același individ are ambele tipuri de gameti (ex: râme, melci).</li>
                        </ul>
                    </li>
                    <li>
                        Dezvoltarea ulterioară poate fi:
                        <ul className={ulClass}>
                            <li><strong>Directă</strong> – fără stadii larvare (mamifere).</li>
                            <li><strong>Indirectă</strong> – cu metamorfoză (broaște, insecte).</li>
                        </ul>
                    </li>
                  </ul>
                  <H2 h2text="Reproducerea umană" indexH2={indexH2("Reproducerea umană")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Gametogeneza" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reproducerea umană")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reproducerea umană")].findIndex(h3 => h3 === "Gametogeneza") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Spermatogeneză</strong> – formarea spermatozoizilor în testicule.</li>
                    <li><strong>Ovogeneză</strong> – formarea ovulelor în ovare.</li>
                  </ul>
                  <H3 h3text="Fecundația" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reproducerea umană")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reproducerea umană")].findIndex(h3 => h3 === "Fecundația") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Un spermatozoid fecundează un ovul → rezultă <strong>zigotul</strong>.</li>
                    <li>Fecundația are loc în <strong>trompele uterine</strong>.</li>
                  </ul>
                  <H3 h3text="Dezvoltarea embrionară" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reproducerea umană")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reproducerea umană")].findIndex(h3 => h3 === "Dezvoltarea embrionară") : -1}></H3>
                  <ol className={olClass}>
                    <li><strong>Zigotul</strong> suferă diviziuni celulare rapide.</li>
                    <li>Se formează <strong>blastocistul</strong> → implantat în mucoasa uterină.</li>
                    <li>Se dezvoltă <strong>embrionul</strong>, apoi <strong>fătul</strong> în uterul mamei.</li>
                  </ol>
                  <H3 h3text="Nașterea" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reproducerea umană")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reproducerea umană")].findIndex(h3 => h3 === "Nașterea") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Se produce după aproximativ <strong>9 luni (40 săptămâni)</strong>.</li>
                    <li>Procesul constă în contracțiile uterine → dilatarea colului uterin → expulzarea fătului și a placentei.</li>
                  </ul>
                  <p>
                  Reproducerea este esențială pentru perpetuarea vieții. De la diviziuni simple până la procese complexe de gametogeneză și dezvoltare embrionară, fiecare formă de reproducere contribuie la diversitatea și continuitatea organismelor vii.
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