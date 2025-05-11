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
          text: "Noțiuni de termochimie",
          link: "notiuni-de-termochimie"
        }
      ],
      h3: [
        { 
            text: "Ce este termochimia?",
            link: "ce-este-termochimia"
        },
        { 
            text: "Efecte termice în reacții chimice",
            link: "efecte-termice-in-reactii-chimice"
        },
        { 
            text: "Legea lui Hess",
            link: "legea-lui-hess"
        },
        { 
            text: "Căldura de reacție",
            link: "caldura-de-reactie"
        },
        { 
            text: "Energia în sistemele biologice",
            link: "energia-in-sistemele-biologice"
        },
      ]
    },
    {
      h2: [
        {
          text: "Noțiuni de cinetică chimică",
          link: "notiuni-de-cinetica-chimica"
        }
      ],
      h3: [
        { 
            text: "Reacții lente și rapide",
            link: "reactii-lente-si-rapide"
        },
        { 
            text: "Viteza de reacție și legea vitezei",
            link: "viteza-de-reactie-si-legea-vitezei"
        },
        { 
            text: "Factorii care influențează viteza de reacție",
            link: "factorii-care-influenteaza-viteza-de-reactie"
        },
        { 
            text: "Mecanisme de reacție",
            link: "mecanisme-de-reactie"
        },
      ]
    },
    {
      h2: [
        {
          text: "Reacții cu transfer de electroni",
          link: "reactii-cu-transfer-de-electroni"
        }
      ],
      h3: [
        { 
            text: "Cupluri redox",
            link: "cupluri-redox"
        },
        { 
            text: "Celule galvanice",
            link: "celule-galvanice"
        },
        { 
            text: "Potențialul standard de reducere",
            link: "potentialul-standard-de-reducere"
        },
        { 
            text: "Pile electrice și acumulatori",
            link: "pile-electrice-si-acumulatori"
        },
        { 
            text: "Electroliza. Legile lui Faraday",
            link: "electroliza-legile-lui-faraday"
        },
      ]
    },
    {
      h2: [
        {
          text: "Compuși organici de importanță vitală",
          link: "compusi-organici-de-importanta-vitala"
        }
      ],
      h3: [
        { 
            text: "Grăsimile (lipidele)",
            link: "grasimile-lipidele"
        },
        { 
            text: "Hidrații de carbon (glucidele, zaharidele)",
            link: "hidratii-de-carbon-glucidele-zaharidele"
        },
        { 
            text: "Aminoacizii și proteinele",
            link: "aminoacizii-si-proteinele"
        },
        { 
            text: "Vitamine și enzime (fermenți)",
            link: "vitamine-si-enzime-fermenti"
        },
        { 
            text: "Compușii macromoleculari sintetici",
            link: "compusii-macromoleculari-sintetici"
        },
      ]
    },
  ]