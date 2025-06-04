"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-romana-mate-info-9";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';

const Page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);
  
  const h1 = "Introducere în ficțiune și genuri literare"

  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    [""],
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
              profil="științe ale naturii" 
              materie="limba și literatura română" 
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
                  <h1>{`Capitolul ${indexLectie}: ${h1}`}</h1>
                  <H2 h2text="Ce este ficțiunea literară?" indexH2={indexH2("Ce este ficțiunea literară?")} indexLectie={indexLectie}></H2>
                  <p>
                  Ficțiunea literară reprezintă un tip de text literar care creează realități imaginare, inventate, prin intermediul unui limbaj artistic. Aceste texte sunt caracterizate de faptul că nu se bazează pe fapte reale, ci pe imaginația autorului, care construiește lumi, personaje și întâmplări ce nu există în realitatea cotidiană.
                  </p>
                  <p>
                  Ficțiunea literară poate fi întâlnită în diferite forme, cum ar fi povestiri, romane, nuvele, piese de teatru sau poezii. Scopul ficțiunii literare este de a provoca emoții, de a stimula gândirea și de a transmite mesaje și învățăminte prin intermediul unei narațiuni sau al unui discurs artistic.
                  </p>
                  <H2 h2text="Diferența între literar și non-literar" indexH2={indexH2("Diferența între literar și non-literar")} indexLectie={indexLectie}></H2>
                  <ul className={ulClass}>
                    <li><strong>Literar</strong> se referă, pe de o parte, la operele care sunt scrise cu intenția de a fi apreciate pentru valoarea lor artistică, estetică și intelectuală. Acestea includ ficțiunea literară (povești, romane, poezii) și textele care se bazează pe un limbaj figurat și creativ.</li>
                    <li><strong>Non-literar</strong>, pe de altă parte, se referă la texte care nu au scop artistic și care sunt destinate mai mult să informeze sau să transmită fapte concrete. Exemple de texte non-literare sunt articolele de jurnalism, manualele, studiile științifice sau instrucțiunile de utilizare.</li>
                  </ul>
                  <p>
                  Diferența principală dintre literar și non-literar este că ficțiunea literară se concentrează pe formă, pe creativitate și pe impactul emoțional asupra cititorului, în timp ce textele non-literare au un scop mai pragmatic, informativ și funcțional.
                  </p>
                  <H2 h2text="Genurile literare" indexH2={indexH2("Genurile literare")} indexLectie={indexLectie}></H2>
                  <p>
                  În literatura universală, textele sunt grupate în trei mari genuri literare: epic, liric și dramatic. Fiecare dintre aceste genuri are trăsături proprii care îl definesc și care ajută la clasificarea și analiza operelor literare.
                  </p>
                  <p>
                  <strong>Genul epic</strong> este un gen literar în care acțiunea este relatată într-o formă narativă. În acest tip de texte, autorul spune o poveste despre evenimente sau întâmplări importante, care pot include atât fapte reale, cât și fantastice. Caracteristicile genului epic sunt:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Perspectiva narativă</strong> – povestea este spusă de un narator, care poate fi obiectiv sau subiectiv, și poate relata evenimentele dintr-o singură perspectivă sau din mai multe unghiuri.</li>
                    <li><strong>Personaje</strong> – în genul epic, personajele pot fi multiple și variate, având roluri diferite în desfășurarea acțiunii.</li>
                    <li><strong>Structura</strong> – textele epice pot fi structurate în capitole, scene și secțiuni, cu un început, mijloc și sfârșit clar definite.</li>
                  </ul>
                  <p>
                  <strong>Genul liric</strong> este caracterizat prin exprimarea sentimentelor, gândurilor și trăirilor subiective ale autorului sau ale unui personaj. În acest gen, autorul nu povestește o întâmplare, ci transmite impresii, emoții și reflecții personale. Trăsăturile genului liric sunt:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Eu liric</strong> – este vorba despre vocea subiectivă a autorului sau a unui personaj, care transmite sentimentele și stările sale.</li>
                    <li><strong>Figuri de stil</strong> – genul liric se remarcă prin utilizarea frecventă a figurilor de stil, precum metafore, comparații, personificări etc.</li>
                    <li><strong>Subiectivitate</strong> – în lirică, emoțiile și sentimentele sunt predominante, iar acțiunile sunt rare sau absente.</li>
                  </ul>
                  <p>
                  <strong>Genul dramatic</strong> este un gen literar care se bazează pe reprezentarea în fața publicului a unui conflict sau a unei situații. Acesta include piese de teatru și scenarii care sunt destinate a fi jucate pe scenă, de obicei prin dialoguri și monologuri. Trăsăturile genului dramatic sunt:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Dialogul</strong> – în dramă, acțiunea se desfășoară prin intermediul dialogurilor dintre personaje, care exprimă conflictele și emoțiile lor.</li>
                    <li><strong>Didascalia</strong> – instrucțiunile oferite de autor pentru regia piesei, privind mișcările, expresiile faciale și reacțiile personajelor.</li>
                    <li><strong>Conflictul</strong> – este un element central al pieselor de teatru, în care protagonistul se confruntă cu un obstacol, un alt personaj sau chiar cu sine însuși.</li>
                  </ul>
                  <p>
                  În această lecție am explorat <strong>ficțiunea literară</strong> și am învățat despre diferențele dintre <strong>literar</strong> și <strong>non-literar</strong>, precum și despre <strong>genurile literare</strong>: epic, liric și dramatic. Înțelegerea trăsăturilor fiecărui gen literar ne ajută să analizăm și să interpretăm textele literare într-un mod mai profund și mai structurat, având în vedere contextul, intenția autorului și impactul asupra cititorului.
                  </p>
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