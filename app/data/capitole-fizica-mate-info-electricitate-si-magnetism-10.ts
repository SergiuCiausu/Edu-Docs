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
          text: "Electrostatică",
          link: "electrostatica"
        }
      ],
      h3: [
        {
          text: "Ce este electrostatica?",
          link: "ce-este-electrostatica"
        },
        {
          text: "Forța electrostatică (Legea lui Coulomb)",
          link: "forta-electrostatica-legea-lui-coulomb"
        },
        {
          text: "Câmpul și potențialul electric",
          link: "campul-si-potentialul-electric"
        },
        {
          text: "Condensatoare electrice",
          link: "condensatoare-electrice"
        },
      ]
    },
    {
      h2: [
        { 
          text: "Curentul electric continuu",
          link: "curentul-electric-continuu"
        }
      ],
      h3: [
        {
          text: "Ce este curentul electric?",
          link: "ce-este-curentul-electric"
        },
        {
          text: "Mărimi fizice fundamentale",
          link: "marimi-fizice-fundamentale"
        },
        {
          text: "Legea lui Ohm",
          link: "legea-lui-ohm"
        },
        {
          text: "Gruparea rezistențelor",
          link: "gruparea-rezistentelor"
        },
        {
          text: "Legile lui Kirchhoff",
          link: "legile-lui-kirchhoff"
        },
      ]
    },
    {
      h2: [
        { 
          text: "Efecte ale curentului electric",
          link: "efecte-ale-curentului-electric"
        }
      ],
      h3: [
        {
          text: "Efectul termic (Efectul Joule)",
          link: "efectul-termic-efectul-joule"
        },
        {
          text: "Efectul magnetic",
          link: "efectul-magnetic"
        },
        {
          text: "Efectul mecanic (Forța electromagnetică)",
          link: "efectul-mecanic-forta-electromagnetica"
        },
        {
          text: "Câmpul magnetic al curentului electric",
          link: "campul-magnetic-al-curentului-electric"
        },
        {
          text: "Forțele electromagnetice și electrodinamice",
          link: "fortele-electromagnetice-si-electrodinamice"
        },
      ]
    },
    {
      h2: [
        { 
          text: "Curentul alternativ",
          link: "curentul-alternativ"
        }
      ],
      h3: [
        {
          text: "Inducția electromagnetică",
          link: "inductia-electromagnetica"
        },
        {
          text: "Legea lui Faraday",
          link: "legea-lui-faraday"
        },
        {
          text: "Curentul alternativ (CA)",
          link: "curentul-alternativ-ca"
        },
        {
          text: "Circuite RLC în curent alternativ",
          link: "circuite-rlc-in-curent-alterantiv"
        },
        {
          text: "Puterea în curent alternativ",
          link: "puterea-in-curent-alternativ"
        },
        {
          text: "Transformatorul",
          link: "transformatorul"
        },
        {
          text: "Recapitulare",
          link: "recapitulare"
        },
      ]
    },
  ]