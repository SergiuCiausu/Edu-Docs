"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Navbar from '@/app/components/Navbar/Navbar';
import { H2 } from '@/app/components/PageContent/H2';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { useTheme } from '@/context/ThemeContext';
import React, { useEffect, useState } from 'react'
import { titluri } from "@/app/data/matematica/capitole-mate-mate-info-modelarea-matematica-a-unor-situatii-concrete-9";
import { useRouter } from 'next/navigation';

const page = () => {

  const { theme, setTheme } = useTheme();

  const router = useRouter();
  
    useEffect(() => {
      document.documentElement.classList.toggle("dark-theme", theme === "dark");
      document.documentElement.classList.toggle("light-theme", theme === "light");
    }, [theme]);

    const capitole = titluri.map((capitol, index) => {
            return {
                nume: capitol.h2[0].text,
                link: capitol.h2[0].link
            }
        })

  return (
    <div>
      <Navbar theme={theme} onThemeChange={setTheme}/>
        <section className="flex">
          <aside>
            <Sidebar 
              profil="științe sociale" 
              materie="matematică" 
              titluri={titluri} 
              clasa={9}
              capitol="modelarea matematică a unor situații concrete"
              isCapitolContent={true}
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
                    <h1>Matematică, Științe sociale, clasa a IX-a, Modelarea matematică a unor situații concrete</h1>
                    <p>
                    Matematica este știința care studiază cantitățile, formele, structurile și relațiile dintre ele, folosind limbajul simbolic și raționamentul logic. Ea oferă instrumente esențiale pentru rezolvarea problemelor, modelarea fenomenelor și dezvoltarea gândirii analitice.
                    </p>
                    <H2 h2text="Alege anul școlar"></H2>
                    <div
                        className={`grid grid-cols-2 gap-5 w-full`}>
                        {capitole.map((capitol, index) => (
                            <button key={index} className="px-16 py-8 flex items-center justify-center rounded-2xl capitol-btn cursor-pointer" onClick={() => router.push(`/materii/matematica/stiinte-sociale/clasa-a-ix-a/argumentarea-si-demonstrare-unor-afirmatii-matematice/${capitol.link}`)}>{capitol.nume}</button> 
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