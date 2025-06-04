"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Navbar from '@/app/components/Navbar/Navbar'
import { H2 } from '@/app/components/PageContent/H2';
import Sidebar from '@/app/components/Sidebar/Sidebar'
import { useTheme } from '@/context/ThemeContext';
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { titluri } from "@/app/data/capitole-fizica-mate-info-statica-si-dinamica-solidului-rigid-9";

const Page = () => {

    const router = useRouter();

    const { theme, setTheme } = useTheme();

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
                materie="fizică" 
                clasa={9} 
                titluri={titluri}
                capitol="statica și dinamica solidului rigid"
                isCapitolContent={true}
                isPageContent={true}
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
                            <h1>Fizică, Științe sociale, clasa a IX-a, Statica și dinamica solidului rigid</h1>
                            <p>                    
                            Statica și dinamica solidului rigid reprezintă ramura fizicii care studiază echilibrul și mișcarea corpurilor solide considerate indeformabile (rigide), adică a acelor corpuri care nu își modifică forma sau dimensiunile în timpul mișcării sau sub acțiunea forțelor.                            </p>
                            <H2 h2text="Capitole de studiu"></H2>
                            <div
                                className={`grid grid-cols-2 gap-5 w-full`}>
                                {capitole.map((capitol, index) => (
                                   <button key={index} className="px-16 py-8 flex items-center justify-center rounded-2xl capitol-btn cursor-pointer" onClick={() => router.push(`/materii/fizica/stiinte-sociale/clasa-a-ix-a/statica-si-dinamica-solidului-rigid/${capitol.link}`)}>{capitol.nume}</button> 
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