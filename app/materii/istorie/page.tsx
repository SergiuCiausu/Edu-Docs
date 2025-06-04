"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Navbar from '@/app/components/Navbar/Navbar';
import { H2 } from '@/app/components/PageContent/H2';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { useTheme } from '@/context/ThemeContext';
import React, { useEffect, useState } from 'react'
import { titluri } from "@/app/data/capitole-chimie";
import { useRouter } from 'next/navigation';

const Page = () => {

  const { theme, setTheme } = useTheme();

  const router = useRouter();
  
    useEffect(() => {
      document.documentElement.classList.toggle("dark-theme", theme === "dark");
      document.documentElement.classList.toggle("light-theme", theme === "light");
    }, [theme]);

    const capitole = [
      {
          nume: "Filologie",
          link: "filologie"
      },
      {
          nume: "Științe sociale",
          link: "stiinte-sociale"
      },
        {
            nume: "Mate-info",
            link: "mate-info"
        },
        {
            nume: "Științe ale naturii",
            link: "stiinte-ale-naturii"
        },        
    ]

  return (
    <div>
      <Navbar theme={theme} onThemeChange={setTheme}/>
        <section className="flex">
          <aside>
            <Sidebar 
              materie="istorie" 
              titluri={titluri} 
              isMaterieContent={true}
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
                    <h1>Istorie</h1>
                    <p>
                    Istoria este știința care studiază evenimentele și faptele din trecutul omenirii, modul în care s-au desfășurat acestea, cauzele și consecințele lor. Ea ne ajută să înțelegem cum s-au format societățile, civilizațiile și cultura umană de-a lungul timpului.
                    </p>
                    <H2 h2text="Alege specializarea"></H2>
                    <div
                        className={`grid grid-cols-2 gap-5 w-full`}>
                        {capitole.map((capitol, index) => (
                            <button key={index} className="px-16 py-8 flex items-center justify-center rounded-2xl capitol-btn cursor-pointer" onClick={() => router.push(`/materii/istorie/${capitol.link}`)}>{capitol.nume}</button> 
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

export default Page