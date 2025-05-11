"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-info-11";
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

  const h1 = "Metoda Backtracking"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Schema generală a unui algoritm Backtracking"],
    ["Permutări ale mulțimii {1, 2, ..., n}", "Aranjamente de n luate câte k (ordonate, fără repetiție)", "Combinații de n luate câte k (neordonate, fără repetiție)"],
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
              clasa={11} 
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
                  <H2 h2text="Principiul metodei Backtracking" indexH2={indexH2("Principiul metodei Backtracking")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Backtracking</strong> este o metodă de <strong>explorare sistematică</strong> a tuturor soluțiilor posibile pentru o problemă, prin construirea pas cu pas a unei soluții și revenirea (backtrack) atunci când o alegere duce la un impas.
                  </p>
                  <p>
                    <strong>Ideea centrală:</strong>
                  </p>
                  <p>
                  Construim soluția pas cu pas. Dacă la un moment dat ne dăm seama că soluția parțială nu poate duce la una completă, revenim și încercăm altă variantă.
                  </p>
                  <H3 h3text="Schema generală a unui algoritm Backtracking:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Principiul metodei Backtracking")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Principiul metodei Backtracking")].findIndex(h3 => h3 === "Schema generală a unui algoritm Backtracking") : -1}></H3>
                  <div className="code-container mt-5">
                    <p
                        className="flex flex-col gap-1">
                        <code>
                            {`void back(int k) {`}
                        </code>
                        <code className="pl-8">
                            {`for(int i = 1; i <= n; i++) {`}
                        </code>
                        <code className="pl-16">
                            x[k] = i;
                        </code>
                        <code className="pl-16">
                            {`if(conditie_partial_valida(k)) {`}
                        </code>
                        <code className="pl-24">
                            {`if(solutie_completa(k)) {`}
                        </code>
                        <code className="pl-32">
                            {`afisare_solutie();`}
                        </code>
                        <code className="pl-24">
                            {`} else {`}
                        </code>
                        <code className="pl-32">
                            back(k + 1);
                        </code>
                        <code className="pl-24">
                            {`}`}
                        </code>
                        <code className="pl-16">{`}`}</code>
                        <code className="pl-8">{`}`}</code>
                        <code>{`}`}</code>
                    </p>
                  </div>
                  <H2 h2text="Aplicații: generarea permutărilor, aranjamentelor, combinărilor" indexH2={indexH2("Aplicații: generarea permutărilor, aranjamentelor, combinărilor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Permutări ale mulțimii {1, 2, ..., n}" indexH3={h3s[h2s.findIndex(h2 => h2 === "Aplicații: generarea permutărilor, aranjamentelor, combinărilor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Aplicații: generarea permutărilor, aranjamentelor, combinărilor")].findIndex(h3 => h3 === "Permutări ale mulțimii {1, 2, ..., n}") : -1}></H3>
                  <div className="code-container my-5">
                    <p>
                        <code>
                        int n, x[100], folosit[100];
                        </code>
                    </p>
                    <p
                        className="flex flex-col gap-1">
                        <code>
                            {`void permutari(int k) {`}
                        </code>
                        <code className="pl-8">
                            {`for(int i = 1; i <= n; i++) {`}
                        </code>
                        <code className="pl-16">
                            {`if(!folosit[i]) {`}
                        </code>
                        <code className="pl-24">
                            x[k] = i;
                        </code>
                        <code className="pl-24">
                            folosit[i] = 1;
                        </code>
                        <code className="pl-24">
                            if(k == n)
                        </code>
                        <code className="pl-32">
                            afisare();
                        </code>
                        <code className="pl-24">
                            else
                        </code>
                        <code className="pl-32">
                            permutari(k + 1);
                        </code>
                        <code className="pl-24">
                            folosit[i] = 0; // revenim
                        </code>
                        <code className="pl-16">
                            {`}`}
                        </code>
                        <code className="pl-8">
                            {`}`}
                        </code>
                        <code>
                            {`}`}
                        </code>
                    </p>
                  </div>
                  <H3 h3text="Aranjamente de n luate câte k (ordonate, fără repetiție)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Aplicații: generarea permutărilor, aranjamentelor, combinărilor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Aplicații: generarea permutărilor, aranjamentelor, combinărilor")].findIndex(h3 => h3 === "Aranjamente de n luate câte k (ordonate, fără repetiție)") : -1}></H3>
                  <div className="code-container my-5">
                    <p>
                        <code>
                        int n, k, x[100], folosit[100];
                        </code>
                    </p>
                    <p className="flex flex-col gap-1">
                        <code>
                            {`void aranjamente(int poz) {`}
                        </code>
                        <code className="pl-8">
                            {`for(int i = 1; i <= n; i++) {`}
                        </code>
                        <code className="pl-16">
                            {`if(!folosit[i]) {`}
                        </code>
                        <code className="pl-24">
                            x[poz] = i;
                        </code>
                        <code className="pl-24">
                            folosit[i] = 1;
                        </code>
                        <code className="pl-24">
                            if(poz == k)
                        </code>
                        <code className="pl-32">
                            afisare();
                        </code>
                        <code className="pl-24">
                            else
                        </code>
                        <code className="pl-32">
                            aranjamente(poz + 1);
                        </code>
                        <code className="pl-24">
                            folosit[i] = 0;
                        </code>
                        <code className="pl-16">
                            {`}`}
                        </code>
                        <code className="pl-8">
                            {`}`}
                        </code>
                        <code>
                            {`}`}
                        </code>
                    </p>
                  </div>
                  <H3 h3text="Combinații de n luate câte k (neordonate, fără repetiție)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Aplicații: generarea permutărilor, aranjamentelor, combinărilor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Aplicații: generarea permutărilor, aranjamentelor, combinărilor")].findIndex(h3 => h3 === "Combinații de n luate câte k (neordonate, fără repetiție)") : -1}></H3>
                  <div className="code-container my-5">
                    <p>
                        <code>
                        int n, k, x[100];
                        </code>
                    </p>
                    <p className="flex flex-col gap-1">
                        <code>
                            {`void combinari(int poz, int start) {`}
                        </code>
                        <code className="pl-8">
                            {`for(int i = start; i <= n; i++) {`}
                        </code>
                        <code className="pl-16">
                            x[poz] = i;
                        </code>
                        <code className="pl-16">
                            if(poz == k)
                        </code>
                        <code className="pl-24">
                            afisare();
                        </code>
                        <code className="pl-16">
                            else
                        </code>
                        <code className="pl-24">
                            combinari(poz + 1, i + 1);
                        </code>
                        <code className="pl-8">
                            {`}`}
                        </code>
                        <code>
                            {`}`}
                        </code>
                    </p>
                  </div>
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