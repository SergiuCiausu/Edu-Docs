"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Navbar from '@/app/components/Navbar/Navbar';
import { H2 } from '@/app/components/PageContent/H2';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { useTheme } from '@/context/ThemeContext';
import React, { useEffect, useState } from 'react'
import { titluri } from "@/app/data/capitole-limbi-straine-stiinte-sociale";
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
            nume: "Limba engleză",
            link: "limba-engleza"
        },
        {
            nume: "Limba franceză",
            link: "limba-franceza"
        },
        {
            nume: "Limba germană",
            link: "limba-germana"
        },
        {
          nume: "Limba italiană",
          link: "limba-italiana"
      },
      {
          nume: "Limba spaniolă",
          link: "limba-spaniola"
      },
    ]

  return (
    <div>
      <Navbar theme={theme} onThemeChange={setTheme}/>
        <section className="flex">
          <aside>
            <Sidebar 
              profil="științe sociale" 
              materie="limbi străine" 
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
                    <h1>Limbi străine, Știine sociale</h1>
                    <p>
                      Limbile străine cuprind studierea limbilor de circulație internațională, utile pentru comunicarea cu alți semeni. Această materie include {capitole.map((capitol, index) => <strong>{`${index === capitole.length - 1 ? " și " : `${index === 0 ? "" : ", "}`}${capitol.nume.toLowerCase()}${index === capitole.length - 1 ? "." : ""}`}</strong>)}
                    </p>
                    <H2 h2text="Alege anul școlar"></H2>
                    <div
                        className={`grid grid-cols-2 gap-5 w-full`}>
                        {capitole.map((capitol, index) => (
                            <button key={index} className="px-16 py-8 flex items-center justify-center rounded-2xl capitol-btn cursor-pointer" onClick={() => router.push(`/materii/limbi-straine/stiinte-sociale/${capitol.link}`)}>{capitol.nume}</button> 
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