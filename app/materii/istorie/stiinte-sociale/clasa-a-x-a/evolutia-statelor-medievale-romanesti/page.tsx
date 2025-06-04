"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-istorie-10";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';
import { tableClass, trClass } from '@/app/class/table';
import { table } from 'console';
import { fractie } from "@/app/class/fractie-container"
import Vector from '@/app/components/Ecuatii/Vectori/Vector';
import { titluriCapitole } from '@/app/data/capitole-fizica-mate-info-capitole-10';

const Page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Evoluția statelor medievale românești"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    [""],
    [""],
    [""],
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
              profil="științe sociale" 
              materie="istorie" 
              clasa={10} 
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
                  <H2 h2text="Contextul european și regional" indexH2={indexH2("Contextul european și regional")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  La sfârșitul secolului al XVI-lea, Europa Centrală și de Sud-Est era puternic influențată de rivalitatea dintre:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Imperiul Otoman</strong> – aflat la apogeul puterii în Balcani;</li>
                    <li><strong>Imperiul Habsburgic</strong> – care dorea extinderea influenței în Transilvania și Țările Române;</li>
                    <li><strong>Regatul Poloniei și Imperiul Rus</strong> – cu interese proprii în regiune.</li>
                  </ul>
                  <p>
                  În acest context, <strong>Țările Române</strong> reprezentau o zonă tampon și strategică.
                  </p>
                  <H2 h2text="Ascensiunea lui Mihai Viteazul" indexH2={indexH2("Ascensiunea lui Mihai Viteazul")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li>Mihai Viteazul devine domn al <strong>Țării Românești în anul 1593</strong>, cu sprijinul boierimii și al <strong>Ligii Sfinte</strong> (alianță antiotomană formată sub egida Papei).</li>
                    <li>Declanșează o politică antiotomană fermă, rupând relațiile cu Poarta și inițiind o <strong>alianță cu Habsburgii</strong>.</li>
                  </ul>
                  <H2 h2text="Campania antiotomană (1594–1595)" indexH2={indexH2("Campania antiotomană (1594–1595)")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Mihai Viteazul organizează o serie de acțiuni militare împotriva turcilor:
                  </p>
                  <ul className={ulClass}>
                    <li>Eliberează cetățile Giurgiu, Brăila, Hârșova și Târgoviște;</li>
                    <li>Se remarcă în <strong>bătălia de la Călugăreni</strong> (23 august 1595), unde obține o victorie tactică împotriva unei armate otomane superioare numeric.</li>
                  </ul>
                  <p>
                  Cu sprijinul lui <strong>Sigismund Báthory</strong> și al generalului austriac <strong>Giorgio Basta</strong>, Mihai recucerește Bucureștiul și Târgoviștea.
                  </p>
                  <H2 h2text="Planurile de unificare" indexH2={indexH2("Planurile de unificare")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li>În 1599, Mihai îl învinge pe <strong>Andrei Báthory și ocupă Transilvania</strong>, intrând în Alba Iulia la 1 noiembrie;</li>
                    <li>În 1600, îl învinge pe <strong>Jeremi Wiśniowiecki </strong>și intră în <strong>Moldova</strong>, unde îl înlătură pe Ieremia Movilă;</li>
                    <li>Astfel, pentru prima dată, <strong>cele trei țări românești</strong> – Țara Românească, Transilvania și Moldova – se aflau <strong>sub o singură conducere românească</strong>.</li>
                  </ul>
                  <H2 h2text="Căderea lui Mihai Viteazul" indexH2={indexH2("Căderea lui Mihai Viteazul")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Unificarea a fost de scurtă durată, din cauza opoziției interne și externe:
                  </p>
                  <ul className={ulClass}>
                    <li>Nemulțumirile nobilimii maghiare din Transilvania;</li>
                    <li>Intervenția habsburgică (generalul Basta);</li>
                    <li>Reacția Poloniei și a Imperiului Otoman.</li>
                  </ul>
                  <p>
                  Mihai este <strong>înfrânt la Mirăslău</strong> (septembrie 1600), pierde Moldova și Transilvania, iar în august 1601 este asasinat din ordinul lui Basta la Câmpia Turzii.
                  </p>
                  <H2 h2text="Semnificația domniei lui Mihai Viteazul" indexH2={indexH2("Semnificația domniei lui Mihai Viteazul")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li>Prima <strong>unificare politică a românilor</strong> din cele trei provincii istorice;</li>
                    <li>A fost un simbol al luptei pentru <strong>independență și unitate</strong>;</li>
                    <li>Figura lui Mihai Viteazul a fost recuperată și valorificată în secolul al XIX-lea, în contextul <strong>formării statului național român</strong>.</li>
                  </ul>
                  <p>
                  Domnia lui Mihai Viteazul reprezintă un moment de glorie și ambiție politică românească în contextul medieval. Deși unificarea a fost temporară, ea a rămas în conștiința națională drept un precedent istoric important pentru realizarea idealului unității naționale.
                  </p>
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

export default Page