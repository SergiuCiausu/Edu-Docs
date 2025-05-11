"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Navbar from '@/app/components/Navbar/Navbar';
import { H2 } from '@/app/components/PageContent/H2';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { useTheme } from '@/context/ThemeContext';
import React, { useEffect, useState } from 'react'
import { titluri } from "@/app/data/capitole-stiinte-socio-umane";
import { useRouter } from 'next/navigation';

const page = () => {

  const { theme, setTheme } = useTheme();

  const router = useRouter();
  
    useEffect(() => {
      document.documentElement.classList.toggle("dark-theme", theme === "dark");
      document.documentElement.classList.toggle("light-theme", theme === "light");
    }, [theme]);

    const capitole = [
      {
          nume: "Clasa a IX-a",
          link: "clasa-a-ix-a"
      },
      {
          nume: "Clasa a X-a",
          link: "clasa-a-x-a"
      },
      {
          nume: "Clasa a XI-a",
          link: "clasa-a-xi-a"
      },
      {
          nume: "Clasa a XII-a",
          link: "clasa-a-xii-a"
      }
  ]

  return (
    <div>
      <Navbar theme={theme} onThemeChange={setTheme}/>
        <section className="flex">
          <aside>
            <Sidebar 
              profil="științe ale naturii" 
              materie="știinte socio-umane" 
              titluri={titluri} 
              isClasaContent={true}
            />
          </aside>
          <main
            className="flex-1">
            <div
              className="w-[1263px] mx-auto">
              <Breadcrumbs theme={theme}/>
              <div
                className="flex gap-5">
                <div
                  className="py-16 flex-1">
                    <h1>Științe socio-umane, Științe ale naturii</h1>
                    <p>
                    Științele socio-umane sunt un ansamblu de discipline care studiază comportamentul uman, societatea, cultura, valorile și relațiile dintre oameni. Acestea includ domenii precum psihologia, sociologia, filosofia, științele politice și etica.Muzica este arta de a exprima emoții, idei și stări sufletești prin sunete organizate – precum ritmul, melodia și armonia. Ea reflectă cultura, identitatea și sensibilitatea umană. Desenul este forma de exprimare artistică realizată prin linii, forme și culori, care redă idei, obiecte, emoții sau imaginație vizuală. Este una dintre cele mai vechi forme de comunicare vizuală ale omenirii.
                    </p>
                    <H2 h2text="Alege anul școlar"></H2>
                    <div
                        className={`grid grid-cols-2 gap-5 w-full`}>
                        {capitole.map((capitol, index) => (
                            <button key={index} className="px-16 py-8 flex items-center justify-center rounded-2xl capitol-btn cursor-pointer" onClick={() => router.push(`/materii/stiinte-socio-umane/stiinte-ale-naturii/${capitol.link}`)}>{capitol.nume}</button> 
                        ))}
                    </div>
                </div>
              </div>
            </div>
          </main>
        </section>
    </div>
  )
}

export default page