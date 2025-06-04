"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Navbar from '@/app/components/Navbar/Navbar';
import { H2 } from '@/app/components/PageContent/H2';
import H3 from '@/app/components/PageContent/H3';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { useTheme } from '@/context/ThemeContext';
import React, { useEffect, useState } from 'react'
import { titluri } from "@/app/data/capitole-bio-mate-info-9";
import { ulClass } from '@/app/class/ul';

const Page = () => {

  const { theme, setTheme } = useTheme();

  const [clickedLinkId, setClickedLinkId] = useState<string>("");
  
    useEffect(() => {
      document.documentElement.classList.toggle("dark-theme", theme === "dark");
      document.documentElement.classList.toggle("light-theme", theme === "light");
    }, [theme]);

    const h2s = [
      "Factorii de mediu și adaptările organismelor",
      "Relațiile dintre organisme și mediul lor",
      "Ecosisteme și biomi",
      "Impactul activităților umane asupra mediului și măsuri de protecție",
    ]

    const h3s = [
      [
        ""
      ],
      [
        ""
      ],
      [
        ""
      ],
      [
        ""
      ]
    ]

    const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Ecologie și protecția mediului") + 1;

    const toc = h2s.map((h2, index) => {
      return {h2: h2, h3: h3s[index]};
    });
    
    console.log(toc)

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
                className="flex gap-12 relative">
                <div
                  className="py-16 flex-1">
                  <h1>{`Capitolul ${indexLectie}: Ecologie și protecția mediului`}</h1>
                  <p>
                  Ecologia este ramura biologiei care studiază relațiile dintre organismele vii și mediul lor de viață. Într-un context global în care schimbările climatice, poluarea și pierderea biodiversității devin tot mai presante, înțelegerea acestor relații este esențială pentru protejarea naturii și a resurselor planetei. Această lecție își propune să prezinte conceptele fundamentale de ecologie și importanța protecției mediului
                  </p>
                  <H2 h2text="Factorii de mediu și adaptările organismelor" indexH2={indexH2("Factorii de mediu și adaptările organismelor")} indexLectie={indexLectie}></H2>
                  <p>
                  Mediul de viață al organismelor este influențat de o varietate de factori, care pot fi clasificați în:
                  </p>
                  <ul
                    className={ulClass}>
                      <li><strong>Factori abiotici</strong> – elemente neînsuflețite ale mediului: lumină, temperatură, apă, sol, aer.</li>
                      <li><strong>Factori biotici</strong> – reprezintă influențele altor organisme: competiția, prădarea, simbioza etc.</li>
                  </ul>
                  <p>
                  Organismele au dezvoltat adaptări specifice pentru a supraviețui în condițiile impuse de acești factori:
                  </p>
                  <ul
                    className={ulClass}>
                      <li><strong>Adaptări morfologice</strong>, cum ar fi ghearele, tepii sau frunzele groase (la plantele din zone aride);</li>
                      <li><strong>Adaptări fiziologice</strong>, cum ar fi reglarea temperaturii corpului sau capacitatea de a stoca apă;</li>
                      <li><strong>Adaptări comportamentale</strong>, precum migrația păsărilor sau hibernarea.</li>
                  </ul>
                  <H2 h2text="Relațiile dintre organisme și mediul lor" indexH2={indexH2("Relațiile dintre organisme și mediul lor")} indexLectie={indexLectie}></H2>
                  <p>
                  Organismele nu trăiesc izolat, ci formează rețele complexe de interacțiuni:
                  </p>
                  <ul
                    className={ulClass}>
                      <li><strong>Relații intra-specifice</strong> (între indivizi ai aceleiași specii), cum ar fi cooperarea sau competiția pentru resurse;</li>
                      <li>
                        <strong>Relații inter-specifice</strong>, precum:
                        <ul
                          className={ulClass}>
                            <li><strong>Simbiotice</strong> – mutualism (ambii parteneri beneficiază);</li>
                            <li><strong>Parazitism</strong> – unul beneficiază, celălalt este afectat;</li>
                            <li><strong>Prădare</strong> – un organism se hrănește cu altul;</li>
                            <li><strong>Comensalism</strong> – unul beneficiază, celălalt nu este afectat.</li>
                        </ul>
                      </li>
                  </ul>
                  <p>
                  Toate aceste relații contribuie la echilibrul ecosistemelor.
                  </p>
                  <H2 h2text="Ecosisteme și biomi" indexH2={indexH2("Ecosisteme și biomi")} indexLectie={indexLectie}></H2>
                  <p>
                  Un <strong>ecosistem</strong> este o unitate funcțională formată din comunitatea de organisme (biocenoza) și mediul lor abiotic (biotopul), care interacționează prin fluxuri de energie și cicluri ale substanțelor.
                  </p>
                  <p>
                  Exemple de ecosisteme:
                  </p>
                  <ul
                    className={ulClass}>
                      <li><strong>Pădurea, pajiștea, lacurile, râurile;</strong></li>
                      <li>Ecosisteme artificiale, cum ar fi <strong>culturile agricole</strong> sau <strong>orașele</strong>.</li>
                  </ul>
                  <p>
                  La scară mai largă, ecosistemele similare din diferite regiuni ale globului formează <strong>biomi</strong>:
                  </p>
                  <ul
                    className={ulClass}>
                      <li><strong>Tundra, pădurile tropicale, deșerturile, savanele</strong> etc.</li>
                  </ul>
                  <p>
                  Fiecare biom are caracteristici climatice și specii reprezentative specifice.
                  </p>
                  <H2 h2text="Impactul activităților umane asupra mediului și măsuri de protecție" indexH2={indexH2("Impactul activităților umane asupra mediului și măsuri de protecție")} indexLectie={indexLectie}></H2>
                  <p>
                  Activitatea umană a generat dezechilibre majore în ecosisteme prin:
                  </p>
                  <ul
                    className={ulClass}>
                      <li><strong>Poluarea</strong> aerului, apei și solului;</li>
                      <li><strong>Defrișarea excesivă</strong> și distrugerea habitatelor;</li>
                      <li><strong>Pescuitul și vânătoarea</strong> excesivă;</li>
                      <li><strong>Emisiile de gaze cu efect de seră</strong> – contribuind la încălzirea globală.</li>
                  </ul>
                  <p>
                  Pentru a reduce aceste efecte, este necesară adoptarea unor măsuri de protecție:
                  </p>
                  <ul
                    className={ulClass}>
                      <li>Conservarea biodiversității prin crearea de <strong>arii protejate</strong>;</li>
                      <li>Practici agricole sustenabile;</li>
                      <li>Reciclarea și reducerea consumului de resurse;</li>
                      <li>Educația ecologică și implicarea comunităților în acțiuni de mediu.</li>
                  </ul>
                  <p>
                  Ecologia ne ajută să înțelegem echilibrul delicat dintre toate formele de viață și mediul lor. Protecția mediului nu este doar o responsabilitate științifică, ci și una morală. Prin cunoaștere și acțiune, putem contribui la un viitor durabil pentru toate ființele vii de pe planetă.
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

export default Page