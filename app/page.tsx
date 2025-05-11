"use client";

import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import { useTheme } from "@/context/ThemeContext";
import { useEffect } from "react";
import "@/app/hero.css"
import Link from "next/link";
import SectionHeader from "./components/LP/SectionHeader";

export default function Home() {

  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
        document.documentElement.classList.toggle("dark-theme", theme === "dark");
        document.documentElement.classList.toggle("light-theme", theme === "light");
    }, [theme]);

    const heroPerks = [
      {
        id: "materie-scolara",
        label: "Materii școlare",
        p: "Am adunat toate lecțiile, capitolele și subcapitolele de la fiecare materie, pentru fiecare an școlar și fiecare specializare de liceu care sunt incluse în sistemul de învățământ liceal românesc."
      },
      {
        id: "edubot",
        label: "EduBot",
        p: "Ai o întrebare legată de o noțiune sau o mică curiozitate? EduBot îți stă la dispoziție cu răspunsuri extrase direct din lecțiile relevante."
      },
      {
        id: "eduprof",
        label: "EduProf",
        p: "Programează o întâlnire de 40 de minute cu cei mai buni profesori din țară oricând simți că ai nevoie de ajutor specializat și fii gata să-ți crești cu mult notele din catalog."
      }
    ]

    const perks = [
      {
        id: "materie-scolara",
        h3: "Alege materia",
        p: "Programa școlară cuprinde 12 materii ce acoperă o arie vastă de cunoștințe, care pot deveni o povară pentru elevi. Astfel, poți căuta și înțelege orice noțiune legată de orice materie în doar câteva secunde.",
        ss: ""
      },
      {
        id: "edubot",
        h3: "Fixează-ți noile noțiuni cu EduBot",
        p: "De multe ori, pentru a reține lecțiile predate, este nevoie de asocierea noțiunilor și conceptelor. Însă, există posibilitatea în care elevii pot avea anumite blocaje în conectarea ideilor învățate. EduBot contribuie la rezolvarea acestei probleme, formulându-și răspunsurile pe baza materiei cuprinse în programa școlară.",
        ss: ""
      },
      {
        id: "eduprof",
        h3: "Catapultează-ți progresul școlar cu un EduProf",
        p: "Fiecare om este conceput în mod unic, iar căile neuronale de învățare pot fi mai mult sau mai puțin bătătorite. În cazul în care simți că ai rămas în urmă și că nu poți face față materiei pentru a lua note bune și foarte bune, un profesor EduProf te va ajuta. Programează o ședință de 40 de minute cu cei mai buni profesori din țară oricând ai nevoie de ajutor semnificativ.",
        ss: ""
      }
    ]

    const testimoniale = [
      {
        nume: "John Doe",
        titulatura: "Elev/ Profesor/ Părinte al unui elev de la liceul X",
        testimonial: "Lorem ipsum dolor sit amet consectetur. Dolor gravida risus dictum a fermentum facilisi tellus non tempor. Suspendisse sit tellus massa integer id. Odio a ac nibh eu. Viverra nibh arcu hendrerit tellus dignissim. Magna vel tincidunt vitae semper faucibus.",
        img: "john-doe"
      },
      {
        nume: "John Doe",
        titulatura: "Elev/ Profesor/ Părinte al unui elev de la liceul X",
        testimonial: "Lorem ipsum dolor sit amet consectetur. Dolor gravida risus dictum a fermentum facilisi tellus non tempor. Suspendisse sit tellus massa integer id. Odio a ac nibh eu. Viverra nibh arcu hendrerit tellus dignissim. Magna vel tincidunt vitae semper faucibus.",
        img: "john-doe"
      },
      {
        nume: "John Doe",
        titulatura: "Elev/ Profesor/ Părinte al unui elev de la liceul X",
        testimonial: "Lorem ipsum dolor sit amet consectetur. Dolor gravida risus dictum a fermentum facilisi tellus non tempor. Suspendisse sit tellus massa integer id. Odio a ac nibh eu. Viverra nibh arcu hendrerit tellus dignissim. Magna vel tincidunt vitae semper faucibus.",
        img: "john-doe"
      },
      {
        nume: "John Doe",
        titulatura: "Elev/ Profesor/ Părinte al unui elev de la liceul X",
        testimonial: "Lorem ipsum dolor sit amet consectetur. Dolor gravida risus dictum a fermentum facilisi tellus non tempor. Suspendisse sit tellus massa integer id. Odio a ac nibh eu. Viverra nibh arcu hendrerit tellus dignissim. Magna vel tincidunt vitae semper faucibus.",
        img: "john-doe"
      },
    ]

  return (
    <div>
      <Navbar theme={theme} onThemeChange={setTheme} outOfContentArea={true}/>
      <section
        className="flex gap-8 items-center h-[720px]">
        <div
          className="w-[750px] flex flex-col gap-8">
          <h1 className="hero-header">
          Obține note mai mari, muncește mai eficient.
          </h1>
          <p className="lp-p">
          Învață lecțiile pentru școală mai rapid, fixează-ți noțiunile de bază și discută cu cei mai bine pregătiți profesori din țară cu ajutorul platformei noastre de ultimă generație.
          </p>
          <Link href="/cont-nou" className="hero-btn rounded-2xl px-8 py-3 w-fit">Parcurge prima lecție</Link>
        </div>
        <div
          className="flex-1">

        </div>
      </section>
      <section
        className="flex justify-between">
        {heroPerks.map(perk => (
          <div className="w-[384px] flex flex-col items-center gap-6 mb-[36px]">
            <Image src={`/${perk.id}-icon.png`} width={64} height={48} alt={`${perk.id} icon`}></Image>
            <div
              className="flex flex-col items-center">
              <h4 className="text-center">{perk.label}</h4>
              <p className="text-center">
                {perk.p}
              </p>
            </div>
          </div>
        ))}
      </section>
      <section
        className="flex flex-col gap-32">
        <SectionHeader h2="Aprofundează orice materie dorești" p="Am colectat, restructurat și reformulat întreaga materie școlară, pentru a te ajuta să obții note mai mari, să intri la facultatea dorită și să-ți construiești viitorul la care visezi."/>
        {perks.map((perk, index) => (
          <div>
            {index % 2 === 0 
            ?
            <div
              className="flex w-[1520px] justify-between gap-16 items-center">
              <div
                className="w-[622px] flex flex-col gap-4">
                <h3
                  className={`lp-h3 ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                  {perk.h3}
                </h3>
                <p
                  className={`lp-p ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                  {perk.p}
                </p>
              </div>
              <div>
                <Image src={`/${perk.id}-icon.png`} width={48} height={32} alt={`${perk.id} icon`}></Image>
              </div>
              <div
                className="flex-1">

              </div>
            </div>
            : 
            <div
              className="flex w-[1520px] justify-between gap-16 items-center">
              <div
                className="w-[622px]">

              </div>
              <div>
                <Image src={`/${perk.id}-icon.png`} width={48} height={32} alt={`${perk.id} icon`}></Image>
              </div>
              <div
                className="flex-1 flex flex-col gap-4">
                <h3
                  className={`lp-h3 ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                  {perk.h3}
                </h3>
                <p
                  className={`lp-p ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                  {perk.p}
                </p>
              </div>
            </div>
            }
          </div>
        ))}
      </section>
      <section
        className="flex flex-col gap-32">
        <SectionHeader h2="Peste 10.000 de elevi, profesori și părinți folosesc EduDocs" p="Elevii, profesorii și părinții reușesc să alcătuiască un ciclu virtuos de comunicare, dedicare și dezvoltare pentru o societate mai educată, mai informată și mai inteligentă."/>
        <div
          className="flex gap-5">
          {testimoniale.map(testimonial => (
            <div
              className="flex flex-col items-center justify-center gap-8 testimonial-container px-8 py-10">
              <p
                className="testimonial-p">
                  <i>
                    {testimonial.testimonial}
                  </i>
              </p>
              <div
                className="flex gap-4">
                <Image src={`/${testimonial.img}.jpg`} width={48} height={48} alt={`${testimonial.img} photo`} className="testimonial-avatar"></Image>
                <div
                  className="flex flex-col">
                  <p className="testimonial-nume">{testimonial.nume}</p>
                  <p className="testimonial-titulatura">{testimonial.titulatura}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
