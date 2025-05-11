export type Header = {
    text: string,
    link: string
}

export type Titluri = {
    h2: Header[],
    h3: Header[]
}

export type fullTitluri = Titluri[];

export const titluri: fullTitluri = [
    {
      h2: [
        {
          text: "Istoria evreilor. Holocaustul",
          link: "istoria-evreilor-holocaustul"
        }
      ],
      h3: [
        { 
            text: "Originile și evoluția comunităților evreiești în Europa și în România",
            link: "originile-si-evolutia-comunitatilor-evreiesti-in-europa-si-in-romania"
        },
        { 
            text: "Antisemitismul: forme, cauze și consecințe",
            link: "antisemitismul-forme-cauze-si-consecinte"
        },
        { 
            text: "Holocaustul: politici de exterminare, lagăre de concentrare și mărturii ale supraviețuitorilor",
            link: "holocaustul-politici-de-exterminare-lagare-de-concentrare-si-marturii-ale-supravietuitorilor"
        },
        { 
            text: "Reacții internaționale la Holocaust și impactul asupra drepturilor omului",
            link: "reactii-internationale-la-holocaust-si-impactul-asupra-drepturilor-omului"
        },
        { 
            text: "Memoria Holocaustului: comemorări, educație și prevenirea genocidului",
            link: "memoria-holocaustului-comemorari-educatie-si-prevenirea-genocidului"
        },
      ]
    },
    {
      h2: [
        {
          text: "Istoria comunismului",
          link: "istoria-comunismului"
        }
      ],
      h3: [
        { 
            text: "Ideologia comunistă: origini, principii și răspândire",
            link: "ideologia-comunista-origini-principii-si-raspandire"
        },
        { 
            text: "Instaurarea regimurilor comuniste în Europa Centrală și de Est",
            link: "instaurarea-regimurilor-comuniste-in-europa-centrala-si-de-est"
        },
        { 
            text: "Partidul Comunist Român: ascensiune și consolidare a puterii",
            link: "partidul-comunist-roman-ascensiune-si-consolidare-a-puterii"
        },
        { 
            text: "Politici economice și sociale în România comunistă: colectivizare, industrializare, represiune",
            link: "politici-economice-si-sociale-in-romania-comunista-colectivizare-industrializare-represiune"
        },
        { 
            text: "Rezistența anticomunistă și disidența",
            link: "rezistenta-anticomunista-si-disidenta"
        },
        { 
            text: "Căderea regimurilor comuniste și tranziția către democrație",
            link: "caderea-regimurilor-comuniste-si-tranzitia-catre-democratie"
        },
      ]
    },
  ]