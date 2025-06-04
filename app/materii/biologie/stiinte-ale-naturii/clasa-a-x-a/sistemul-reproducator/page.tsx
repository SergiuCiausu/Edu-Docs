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
import { tableClass, trClass } from '@/app/class/table';
import { table } from 'console';

const Page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Sistemul reproducător"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Organele reproducătoare masculine", "Organele reproducătoare feminine"],
    ["Gametogeneza"],
    ["Fecundația", "Dezvoltarea embrionară"],
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
                  Reproducerea este o funcție esențială a organismelor vii, prin care se asigură continuitatea speciilor. La om, reproducerea este de tip sexuat, implicând formarea și unirea celulelor sexuale – gametii – produse de sistemul reproducător.
                  </p>
                  <H2 h2text="Structura și funcțiile organelor reproducătoare" indexH2={indexH2("Structura și funcțiile organelor reproducătoare")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Organele reproducătoare masculine" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile organelor reproducătoare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile organelor reproducătoare")].findIndex(h3 => h3 === "Organele reproducătoare masculine") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Testiculele</strong> – glande pereche care produc spermatozoizi și hormonul testosteron. Sunt localizate în scrot, în afara cavității abdominale, pentru a menține o temperatură optimă pentru spermatogeneză.</li>
                    <li><strong>Epididimul</strong> – canal răsucit situat deasupra testiculului, unde spermatozoizii se maturează.</li>
                    <li><strong>Canalul deferent</strong> – transportă spermatozoizii spre uretră.</li>
                    <li><strong>Veziculele seminale și prostata</strong> – contribuie la formarea lichidului seminal.</li>
                    <li><strong>Uretra</strong> – canal comun pentru urină și spermă, traversează penisul.</li>
                  </ul>
                  <H3 h3text="Organele reproducătoare feminine" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile organelor reproducătoare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile organelor reproducătoare")].findIndex(h3 => h3 === "Organele reproducătoare feminine") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Ovarele</strong> – produc ovule și hormonii estrogen și progesteron.</li>
                    <li><strong>Trompele uterine (oviductele)</strong> – locul unde are loc fecundația; transportă ovulul către uter.</li>
                    <li><strong>Uterul</strong> – cavitate musculară unde are loc implantarea embrionului și dezvoltarea fătului.</li>
                    <li><strong>Vaginul</strong> – canal muscular prin care se realizează contactul sexual și expulzarea fătului la naștere.</li>
                  </ul>
                  <H2 h2text="Fiziologia reproducției" indexH2={indexH2("Fiziologia reproducției")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Gametogeneza" indexH3={h3s[h2s.findIndex(h2 => h2 === "Fiziologia reproducției")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Fiziologia reproducției")].findIndex(h3 => h3 === "Gametogeneza") : -1}></H3>
                  <p>
                  <strong>Gametogeneza</strong> este procesul de formare a celulelor sexuale.
                  </p>
                  <p>
                  <strong>a) Spermatogeneza</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Are loc în testicule.</li>
                    <li>Produce spermatozoizi, celule haploide (n) cu o coadă flagelată.</li>
                    <li>Este un proces continuu care începe în pubertate și durează toată viața.</li>
                  </ul>
                  <p>
                    <strong>b) Ovogeneza</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Are loc în ovare.</li>
                    <li>Produce ovule – celule mari, haploide (n), stocate în stare latentă din viața fetală.</li>
                    <li>Se reia ciclic, la pubertate, și se oprește la menopauză.</li>
                  </ul>
                  <H2 h2text="Fecundația și dezvoltarea embrionară" indexH2={indexH2("Fecundația și dezvoltarea embrionară")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Fecundația" indexH3={h3s[h2s.findIndex(h2 => h2 === "Fecundația și dezvoltarea embrionară")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Fecundația și dezvoltarea embrionară")].findIndex(h3 => h3 === "Fecundația") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Reprezintă unirea spermatozoidului cu ovulul, formând <strong>zigotul</strong> (celulă diploidă – 2n).</li>
                    <li>Are loc în trompa uterină.</li>
                  </ul>
                  <H3 h3text="Dezvoltarea embrionară" indexH3={h3s[h2s.findIndex(h2 => h2 === "Fecundația și dezvoltarea embrionară")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Fecundația și dezvoltarea embrionară")].findIndex(h3 => h3 === "Dezvoltarea embrionară") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Zigotul se divide prin mitoză, formând o structură numită <strong>blastocist</strong>.</li>
                    <li>Blastocistul se implantează în mucoasa uterină – proces numit <strong>nidare</strong>.</li>
                    <li>Din acest moment, începe <strong>sarcina</strong> – perioada de dezvoltare intrauterină a fătului.</li>
                    <li>Sarcina durează aproximativ 9 luni (40 săptămâni) și se încheie prin <strong>naștere</strong>.</li>
                  </ul>
                  <p>
                  Sistemul reproducător este diferit la bărbați și femei, dar funcționează complementar pentru a permite reproducerea sexuată. <strong>Gametogeneza</strong> produce celule sexuale: <strong>spermatozoizi</strong> la bărbați, <strong>ovule</strong> la femei. Fecundația are loc în trompa uterină, urmată de dezvoltarea embrionară în uter.
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