"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-bio-stiinte-ale-naturii-9";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';

const Page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Celula – unitatea de viață") + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === "Celula – unitatea de viață")].h3.map(header => header.text)

  const h3s = [
    [""],
    ["Membrana celulară", "Citoplasma", "Nucleul", "Mitocondriile", "Ribozomii", "Reticulul endoplasmatic (RE)", "Aparatul Golgi", "Lizozomii (mai ales în celulele animale", "Cloroplastele (doar în celulele vegetale)", "Peroxizomii, vacuolele și centriolii",],
    [""],
    ["Mitoza", "Meioza"],
    ["Difuzia", "Osmoza", "Transportul activ", "Recapitulare"]
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
              profil="filologie" 
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
                className="flex gap-12">
                <div
                  className="py-16 flex-1">
                  <h1>{`Capitolul ${indexLectie}: Celula – unitatea de viață`}</h1>
                  <p>
                  Celula este unitatea structurală, funcțională și genetică a tuturor organismelor vii. Toate organismele sunt alcătuite din celule – fie una singură (organisme unicelulare), fie dintr-un număr mare de celule organizate în țesuturi și organe (organisme multicelulare).
                  </p>
                  <H2 h2text="Structura generală a celulei" indexH2={indexH2("Structura generală a celulei")} indexLectie={indexLectie}></H2>
                  <p>
                  Celulele sunt împărțite în două tipuri principale:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Procariote</strong> – celule simple, fără nucleu delimitat (ex: bacteriile).</li>
                        <li><strong>Eucariote</strong> – celule complexe, cu nucleu și organite delimitate de membrane (ex: celule animale, vegetale, fungice).</li>
                  </ul>
                  <p>
                  Toate celulele au trei componente de bază:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Membrana celulară</strong> – învelește celula, reglează schimburile cu mediul.</li>
                        <li><strong>Citoplasma</strong> – conține organite celulare și substanțe dizolvate.</li>
                        <li><strong>Material genetic (ADN)</strong> – conține informația ereditară.</li>
                  </ul>
                  <H2 h2text="Organitele celulare și funcțiile lor" indexH2={indexH2("Organitele celulare și funcțiile lor")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Membrana celulară" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organitele celulare și funcțiile lor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Organitele celulare și funcțiile lor")].findIndex(h3 => h3 === "Membrana celulară") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Structură formată din fosfolipide și proteine.</li>
                        <li>Funcție: reglează trecerea substanțelor în și din celulă, comunică cu mediul extern.</li>
                  </ul>
                  <H3 h3text="Citoplasma" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organitele celulare și funcțiile lor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Organitele celulare și funcțiile lor")].findIndex(h3 => h3 === "Citoplasma") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Substanță semilichidă (citosol) care conține organite celulare.</li>
                        <li>Locul în care au loc numeroase reacții metabolice.</li>
                  </ul>
                  <H3 h3text="Nucleul" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organitele celulare și funcțiile lor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Organitele celulare și funcțiile lor")].findIndex(h3 => h3 === "Nucleul") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Conține materialul genetic (ADN).</li>
                        <li>Coordonează activitățile celulare, inclusiv diviziunea și sinteza proteinelor.</li>
                  </ul>
                  <H3 h3text="Mitocondriile" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organitele celulare și funcțiile lor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Organitele celulare și funcțiile lor")].findIndex(h3 => h3 === "Mitocondriile") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Numite „uzinele energetice” ale celulei.</li>
                        <li>Rol: produc energie prin procesul de respirație celulară.</li>
                  </ul>
                  <H3 h3text="Ribozomii" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organitele celulare și funcțiile lor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Organitele celulare și funcțiile lor")].findIndex(h3 => h3 === "Ribozomii") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Nu sunt înveliți de membrane.</li>
                        <li>Rol: sinteza proteinelor.</li>
                  </ul>
                  <H3 h3text="Reticulul endoplasmatic (RE)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organitele celulare și funcțiile lor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Organitele celulare și funcțiile lor")].findIndex(h3 => h3 === "Reticulul endoplasmatic (RE)") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>RE rugos – are ribozomi; produce proteine.</li>
                        <li>RE neted – sintetizează lipide și detoxifică substanțe.</li>
                  </ul>
                  <H3 h3text="Aparatul Golgi" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organitele celulare și funcțiile lor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Organitele celulare și funcțiile lor")].findIndex(h3 => h3 === "Aparatul Golgi") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Modifică, sortează și ambalează produsele celulare (ex: proteine).</li>
                  </ul>
                  <H3 h3text="Lizozomii (mai ales în celulele animale)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organitele celulare și funcțiile lor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Organitele celulare și funcțiile lor")].findIndex(h3 => h3 === "Lizozomii (mai ales în celulele animale)") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Conțin enzime digestive care descompun substanțe.</li>
                  </ul>
                  <H3 h3text="Cloroplastele (doar în celulele vegetale)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organitele celulare și funcțiile lor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Organitele celulare și funcțiile lor")].findIndex(h3 => h3 === "Cloroplastele (doar în celulele vegetale)") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Conțin clorofilă.</li>
                        <li>Rol: realizează fotosinteza.</li>
                  </ul>
                  <H3 h3text="Peroxizomii, vacuolele și centriolii" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organitele celulare și funcțiile lor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Organitele celulare și funcțiile lor")].findIndex(h3 => h3 === "Peroxizomii, vacuolele și centriolii") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Alte organite implicate în detoxifiere, depozitare și organizarea diviziunii celulare.</li>
                  </ul>
                  <H2 h2text="Procese celulare esențiale" indexH2={indexH2("Procese celulare esențiale")} indexLectie={indexLectie}></H2>
                  <p>
                  Celula este un mediu în care au loc numeroase procese fundamentale:
                  </p>
                  <ul
                    className={ulClass}>
                    <li><strong>Metabolismul</strong> – totalitatea reacțiilor chimice din celulă.</li>
                    <li><strong>Sinergia</strong> dintre sinteză (construcție) și degradare (descompunere).</li>
                    <li><strong>Comunicarea celulară</strong> – prin semnale chimice sau electrice.</li>
                  </ul>
                  <H2 h2text="Diviziunea celulară: mitoză și meioză" indexH2={indexH2("Diviziunea celulară: mitoză și meioză")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Mitoza" indexH3={h3s[h2s.findIndex(h2 => h2 === "Diviziunea celulară: mitoză și meioză")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Diviziunea celulară: mitoză și meioză")].findIndex(h3 => h3 === "Mitoza") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Proces prin care o celulă se divide în două celule fiice identice.</li>
                        <li>Rol: creștere, regenerare, înlocuirea celulelor moarte.</li>
                        <li>Etape: profază, metafază, anafază, telofază + citokineza.</li>
                  </ul>
                  <H3 h3text="Meioza" indexH3={h3s[h2s.findIndex(h2 => h2 === "Diviziunea celulară: mitoză și meioză")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Diviziunea celulară: mitoză și meioză")].findIndex(h3 => h3 === "Meioza") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Are loc în celulele reproducătoare.</li>
                        <li>Produce 4 celule fiice cu jumătate din numărul de cromozomi.</li>
                        <li>Asigură diversitatea genetică.</li>
                  </ul>
                  <H2 h2text="Procesele de transport celular" indexH2={indexH2("Procesele de transport celular")} indexLectie={indexLectie}></H2>
                  <p>
                  Pentru a funcționa corect, celula trebuie să facă schimb de substanțe cu mediul extern. Acest lucru se face prin:
                  </p>
                  <H3 h3text="Difuzia" indexH3={h3s[h2s.findIndex(h2 => h2 === "Procesele de transport celular")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Procesele de transport celular")].findIndex(h3 => h3 === "Difuzia") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Trecerea substanțelor dintr-o zonă cu concentrație mare într-una cu concentrație mică.</li>
                        <li>Exemplu: oxigenul pătrunde în celule prin difuzie.</li>
                  </ul>
                  <H3 h3text="Osmoza" indexH3={h3s[h2s.findIndex(h2 => h2 === "Procesele de transport celular")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Procesele de transport celular")].findIndex(h3 => h3 === "Osmoza") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Difuzia apei printr-o membrană semipermeabilă.</li>
                        <li>Importantă pentru menținerea echilibrului hidric.</li>
                  </ul>
                  <H3 h3text="Transportul activ" indexH3={h3s[h2s.findIndex(h2 => h2 === "Procesele de transport celular")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Procesele de transport celular")].findIndex(h3 => h3 === "Transportul activ") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Trecerea substanțelor împotriva gradientului de concentrație, cu consum de energie (ATP).</li>
                        <li>Exemplu: pompa de sodiu și potasiu.</li>
                  </ul>
                  <H3 h3text="Recapitulare" indexH3={h3s[h2s.findIndex(h2 => h2 === "Procesele de transport celular")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Procesele de transport celular")].findIndex(h3 => h3 === "Transportul activ") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Celula este unitatea de bază a vieții.</li>
                        <li>Toate celulele au membrană, citoplasmă și ADN.</li>
                        <li>Organitele celulare îndeplinesc funcții specifice.</li>
                        <li>Mitoza și meioza sunt procese esențiale pentru reproducere și diversitate.</li>
                        <li>Transportul celular este esențial pentru echilibrul intern.</li>
                  </ul>
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