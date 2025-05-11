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

const page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Genetica"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Structura ADN-ului", "Structura ARN-ului"],
    [""],
    [""],
    [""],
    [""],
    ["Tipuri de mutații", "Efectele mutațiilor"],
    ["Biotehnologia", "Clonarea", "Transgenia"]
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
                  Genetica este ramura biologiei care studiază <strong>moștenirea caracterelor ereditare</strong> și <strong>variabilitatea organismelor</strong>. Ea oferă informații esențiale despre modul în care trăsăturile se transmit din generație în generație și despre mecanismele care influențează structura și funcționarea organismului la nivel molecular.
                  </p>
                  <H2 h2text="Structura și funcțiile materialului genetic" indexH2={indexH2("Structura și funcțiile materialului genetic")} indexLectie={indexLectie}></H2>
                  <p>
                  Materialul genetic este responsabil pentru <strong>codificarea informației ereditare</strong>, transmiterea acesteia și controlul sintezei proteinelor. El este format din <strong>ADN (acid dezoxiribonucleic)</strong> și <strong>ARN (acid ribonucleic)</strong>.
                  </p>
                  <H3 h3text="Structura ADN-ului:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile materialului genetic")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile materialului genetic")].findIndex(h3 => h3 === "Structura ADN-ului") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Moleculă dublu catenară (dublu helix), descoperită de Watson și Crick.</li>
                    <li>Constituită din nucleotide: o bază azotată (A, T, G, C), un zahăr (dezoxiriboză) și o grupare fosfat.</li>
                    <li>Bazele azotate formează <strong>punți de hidrogen</strong>: A-T și G-C.</li>
                  </ul>
                  <H3 h3text="Structura ARN-ului:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile materialului genetic")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile materialului genetic")].findIndex(h3 => h3 === "Structura ARN-ului") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Moleculă monocatenară.</li>
                    <li>Zahărul este riboză, iar baza timină (T) este înlocuită cu <strong>uracil (U)</strong>.</li>
                    <li>Tipuri de ARN: <strong>ARN mesager (ARNm), ARN de transfer (ARNt), ARN ribozomal (ARNr)</strong>.</li>
                  </ul>
                  <H2 h2text="Genomul și genele" indexH2={indexH2("Genomul și genele")} indexLectie={indexLectie}></H2>
                  <ul className={ulClass}>
                    <li><strong>Genomul</strong>: totalitatea materialului genetic dintr-o celulă (ADN nuclear + ADN mitocondrial).</li>
                    <li><strong>Genele</strong>: unități funcționale ale eredității – secvențe de ADN care codifică proteine sau ARN-uri funcționale.</li>
                    <li>Fiecare gen determină un caracter ereditar (ex: culoarea ochilor, grupa sangvină).</li>
                  </ul>
                  <H2 h2text="Mecanismele eredității" indexH2={indexH2("Mecanismele eredității")} indexLectie={indexLectie}></H2>
                  <p>
                  Transmisia trăsăturilor se bazează pe comportamentul cromozomilor în timpul <strong>diviziunilor celulare (mitoză și meioză)</strong>.
                  </p>
                  <ul className={ulClass}>
                    <li>În meioză, celulele reproducătoare devin haploide (n), asigurând diversitate genetică.</li>
                    <li>Fertilizarea reface starea diploidă (2n), combinând genele părinților.</li>
                  </ul>
                  <H2 h2text="Legile eredității (Mendel)" indexH2={indexH2("Legile eredității (Mendel)")} indexLectie={indexLectie}></H2>
                  <p>
                  <strong>Gregor Mendel</strong> este considerat părintele geneticii. El a formulat legi fundamentale ale eredității studiind <strong>mazărea</strong>:
                  </p>
                  <ol className={olClass}>
                    <li><strong>Legea uniformității</strong>: urmașii din prima generație (F1) sunt identici dacă părinții sunt puri pentru trăsături opuse.</li>
                    <li><strong>Legea segregării</strong>: în a doua generație (F2), trăsăturile se separă în proporții predictibile.</li>
                    <li><strong>Legea asortării independente</strong>: genele pentru trăsături diferite se transmit independent.</li>
                  </ol>
                  <H2 h2text="Moștenirea legată de sex" indexH2={indexH2("Moștenirea legată de sex")} indexLectie={indexLectie}></H2>
                  <ul className={ulClass}>
                    <li>Caracteristicile moștenite prin gene aflate pe <strong>cromozomii sexuali (X și Y)</strong>.</li>
                    <li>Exemple: <strong>daltonismul și hemofilia</strong>, boli recesive legate de cromozomul X.</li>
                    <li>Bărbații sunt mai afectați, deoarece au un singur cromozom X.</li>
                  </ul>
                  <H2 h2text="Mutațiile genetice" indexH2={indexH2("Mutațiile genetice")} indexLectie={indexLectie}></H2>
                  <p>
                  Mutațiile sunt <strong>modificări ale materialului genetic</strong>, ce pot apărea spontan sau indus (prin radiații, substanțe chimice etc.).
                  </p>
                  <H3 h3text="Tipuri de mutații:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mutațiile genetice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mutațiile genetice")].findIndex(h3 => h3 === "Tipuri de mutații") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Genetice (punctiforme)</strong> – afectează o singură genă (ex: substituția unei baze).</li>
                    <li><strong>Cromozomiale</strong> – modificări ale structurii sau numărului de cromozomi (ex: sindromul Down – trizomie 21).</li>
                  </ul>
                  <H3 h3text="Efectele mutațiilor:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mutațiile genetice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mutațiile genetice")].findIndex(h3 => h3 === "Efectele mutațiilor") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Pot fi <strong>neutre, benefice</strong> (produc variații utile) sau <strong>dăunătoare</strong> (cauzează boli genetice).</li>
                  </ul>
                  <H2 h2text="Tehnici moderne în genetică" indexH2={indexH2("Tehnici moderne în genetică")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Biotehnologia:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tehnici moderne în genetică")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Tehnici moderne în genetică")].findIndex(h3 => h3 === "Biotehnologia") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Utilizează metode biologice pentru a crea produse utile (ex: insulină umană produsă de bacterii modificate genetic).</li>
                    <li>Permite <strong>diagnosticarea bolilor genetice, terapia genică și culturi vegetale îmbunătățite</strong>.</li>
                  </ul>
                  <H3 h3text="Clonarea:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tehnici moderne în genetică")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Tehnici moderne în genetică")].findIndex(h3 => h3 === "Clonarea") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Proces prin care se creează copii identice genetic ale unui organism (ex: oaia Dolly).</li>
                    <li>Poate fi folosită în <strong>medicină și agricultură</strong>, dar ridică întrebări etice.</li>
                  </ul>
                  <H3 h3text="Transgenia:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tehnici moderne în genetică")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Tehnici moderne în genetică")].findIndex(h3 => h3 === "Transgenia") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Introducerea unei gene străine în genomul unui organism.</li>
                    <li>Exemple: <strong>plante rezistente la dăunători</strong> sau <strong>animale care produc proteine umane</strong>.</li>
                  </ul>
                  <p>
                  ADN-ul conține informația genetică, iar genele determină trăsăturile moștenite. Mendel a formulat legile fundamentale ale eredității. Mutațiile pot modifica trăsăturile și pot duce la boli genetice. Biotehnologia oferă aplicații revoluționare în medicină, agricultură și industrie.
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