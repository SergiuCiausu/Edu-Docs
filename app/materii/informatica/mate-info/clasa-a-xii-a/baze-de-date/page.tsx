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

  const h1 = "Baze de date"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    ["Cheia primară (Primary Key)", "Cheia externă (Foreign Key)", "Avantajele modelului relațional"],
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
                  <H2 h2text="Ce este modelul relațional?" indexH2={indexH2("Ce este modelul relațional?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Modelul relațional este cel mai utilizat model pentru organizarea datelor într-o bază de date. A fost propus de Edgar F. Codd în anul 1970 și presupune reprezentarea datelor sub formă de <strong>tabele (relații)</strong>.
                  </p>
                  <p>
                  O bază de date relațională conține mai multe tabele care sunt <strong>interconectate</strong> prin intermediul unor câmpuri comune.
                  </p>
                  <H2 h2text="Elemente de bază ale modelului relațional:" indexH2={indexH2("Elemente de bază ale modelului relațional")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ol className={olClass}>
                    <li><strong>Tabel (relație)</strong> – o colecție de date organizată în rânduri și coloane.</li>
                    <li><strong>Coloană (atribut, câmp)</strong> – definește o proprietate a fiecărei entități. <strong>Are un nume și un tip de date</strong>.</li>
                    <li><strong>Rând (tuplu, înregistrare)</strong> – o instanță a entității; conține o valoare pentru fiecare atribut.</li>
                  </ol>
                  <p>
                    <strong>
                    Exemplu:
                    </strong>
                  </p>
                  <p>
                  Tabelul <strong>Tabelul Elevi</strong>
                  </p>
                  <div
                    className="px-5">
                    <table className={tableClass}>
                        <thead className={trClass}>
                            <th className="flex-20">ID_Elev</th>
                            <th className="flex-20">Nume</th>
                            <th className="flex-20">Prenume</th>
                            <th className="flex-20">Clasa</th>
                            <th className="flex-20">Media</th>
                        </thead>
                        <tbody>
                            <tr className={trClass}>
                                <td className="flex-20">1</td>
                                <td className="flex-20">Ionescu</td>
                                <td className="flex-20">Andrei</td>
                                <td className="flex-20">12A</td>
                                <td className="flex-20">9.25</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-20">2</td>
                                <td className="flex-20">Popescu</td>
                                <td className="flex-20">Maria</td>
                                <td className="flex-20">12B</td>
                                <td className="flex-20">8.75</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    <strong>ID_Elev</strong> este un atribut care poate reprezenta cheia primară, adică identificatorul unic al fiecărui elev.
                </p>
                <H3 h3text="Cheia primară (Primary Key)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Elemente de bază ale modelului relațional")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Elemente de bază ale modelului relațional")].findIndex(h3 => h3 === "Cheia primară (Primary Key)") : -1}></H3>
                <ul className={ulClass}>
                    <li>Este un <strong>atribut</strong> (sau un grup de atribute) care <strong>identifică în mod unic</strong> fiecare rând dintr-o relație.</li>
                    <li>Nu poate conține valori duplicate sau NULL.</li>
                </ul>
                <H3 h3text="Cheia externă (Foreign Key)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Elemente de bază ale modelului relațional")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Elemente de bază ale modelului relațional")].findIndex(h3 => h3 === "Cheia externă (Foreign Key)") : -1}></H3>
                <ul className={ulClass}>
                    <li>Este <strong>un atribut dintr-un tabel</strong> care <strong>face referire la cheia primară din alt tabel</strong>.</li>
                    <li>Reprezintă relațiile dintre tabele.</li>
                </ul>
                <H3 h3text="Avantajele modelului relațional:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Elemente de bază ale modelului relațional")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Elemente de bază ale modelului relațional")].findIndex(h3 => h3 === "Avantajele modelului relațional") : -1}></H3>
                <ul className={ulClass}>
                    <li><strong>Claritate și simplitate</strong> – datele sunt ușor de înțeles și de gestionat;</li>
                    <li><strong>Flexibilitate</strong> – este ușor să adăugăm sau să modificăm structura tabelelor;</li>
                    <li><strong>Integritate</strong> – asigură consistența datelor prin chei primare și externe;</li>
                    <li><strong>Portabilitate</strong> – este utilizat în majoritatea SGBD-urilor (Sisteme de Gestiune a Bazelor de Date): MySQL, PostgreSQL, Oracle, SQL Server etc.</li>
                </ul>
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