"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Navbar from '@/app/components/Navbar/Navbar';
import { H2 } from '@/app/components/PageContent/H2';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { useTheme } from '@/context/ThemeContext';
import React, { useEffect, useState } from 'react'
import { titluri } from "@/app/data/capitole-istorie-11";
import { useRouter } from 'next/navigation';

const Page = () => {

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
              materie="istorie" 
              clasa={11}
              isClasaContent={true}
              titluri={titluri} 
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
                    <h1>Istorie, Științe sociale, clasa a XI-a</h1>
                    <p>
                    Istoria este știința care studiază trecutul omenirii pe baza surselor scrise, orale și materiale, în scopul înțelegerii evenimentelor, proceselor și transformărilor care au influențat evoluția societăților umane de-a lungul timpului.</p>
                    <H2 h2text="Alege anul școlar"></H2>
                    <div
                        className={`grid grid-cols-2 gap-5 w-full`}>
                        {capitole.map((capitol, index) => (
                            <button key={index} className="px-16 py-8 flex items-center justify-center rounded-2xl capitol-btn cursor-pointer" onClick={() => router.push(`/materii/istorie/stiinte-sociale/clasa-a-xi-a/${capitol.link}`)}>{capitol.nume}</button> 
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