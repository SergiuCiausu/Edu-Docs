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
          text: "Cinematica punctului material",
          link: "cinematica-punctului-material"
        }
      ],
      h3: [
        {
          text: "Ce este cinematica?",
          link: "ce-este-cinematica"
        },
        {
          text: "Mărimi fizice scalare și vectoriale",
          link: "marimi-fizice-scalare-si-vectoriale"
        },
        {
          text: "Mișcarea rectilinie uniformă (MRU)",
          link: "miscarea-rectilinie-uniforma-mru"
        },
        {
          text: "Mișcarea rectilinie uniform accelerată (MRUA)",
          link: "miscarea-rectilinie-uniforma-accelerata-mrua"
        },
        {
          text: "Mișcarea circulară uniformă",
          link: "miscarea-circulara-uniforma"
        },
        {
          text: "Mișcarea relativă",
          link: "miscarea-relativa"
        },
      ]
    },
    {
      h2: [
        { 
          text: "Dinamica punctului material",
          link: "dinamica-punctului-material"
        }
      ],
      h3: [
        {
          text: "Forța și interacțiunile fundamentale",
          link: "forta-si-interactiunile-fundamentale"
        },
        {
          text: "Legile mișcării – Legile lui Newton",
          link: "legile-miscarii-legile-lui-newton"
        },
        {
          text: "Frecarea și tensiunea",
          link: "frecarea-si-tensiunea"
        },
        {
          text: "Mișcarea pe plan înclinat",
          link: "miscarea-pe-plan-inclinat"
        },
      ]
    },
    {
      h2: [
        {
          text: "Lucrul mecanic și energia",
          link: "lucrul-mecanic-si-energia"
        }
      ],
      h3: [
        {
          text: "Lucrul mecanic",
          link: "lucrul-mecanic"
        },
        {
          text: "Puterea mecanică",
          link: "puterea-mecanica"
        },
        {
          text: "Energia mecanică",
          link: "energia-mecanica"
        },
        {
            text: "Legea conservării energiei mecanice",
            link: "legea-conservarii-energiei-mecanice"
        },
      ]
    },
    {
      h2: [
        {
          text: "Impulsul și legea conservării impulsului",
          link: "impulsul-si-legea-conservarii-impulsului"
        }
      ],
      h3: [
        {
          text: "Impulsul mecanic",
          link: "impulsul-mecanic"
        },
        {
          text: "Legea conservării impulsului",
          link: "legea-conservarii-impulsului"
        },
        {
          text: "Coliziunile elastice și inelastice",
          link: "coliziunile-elastice-si-inelastice"
        },
        {
          text: "Exemplu de problemă:",
          link: "exemplu-de-problema"
        },
      ]
    },
  ]