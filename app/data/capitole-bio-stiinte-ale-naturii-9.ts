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
          text: "Organizarea lumii vii",
          link: "organizarea-lumii-vii"
        }
      ],
      h3: [
        {
          text: "Caracteristicile organismelor vii",
          link: "caracteristicile-organismelor-vii"
        },
        {
          text: "Niveluri de organizare ale materiei vii",
          link: "niveluri-de-organizare-ale-materiei-vii"
        },
        {
          text: "Clasificarea organismelor vii",
          link: "clasificarea-organismelor-vii"
        },
      ]
    },
    {
      h2: [
        { 
          text: "Celula – unitatea de viață",
          link: "celula"
        }
      ],
      h3: [
        {
          text: "Structura generală a celulei",
          link: "structura-generala-a-celulei"
        },
        {
          text: "Organitele celulare și funcțiile lor",
          link: "organitele-celulare-si-functiile-lor"
        },
        {
          text: "Procese celulare esențiale",
          link: "procese-celulare-esentiale"
        },
        {
          text: "Diviziunea celulară: mitoză și meioză",
          link: "diviziunea-celulara-mitoza-si-meioza"
        },
        {
          text: "Procesele de transport celular",
          link: "procesele-de-transport-celular"
        }
      ]
    },
    {
      h2: [
        {
          text: "Mecanismele vieții",
          link: "mecanismele-vietii"
        }
      ],
      h3: [
        {
          text: "Metabolismul celular",
          link: "metabolismul-celular"
        },
        {
          text: "Procesele de respirație celulară și fotosinteză",
          link: "procesele-de-respiratie-celulara-si-fotosinteza"
        },
        {
          text: "Sinteza proteinelor",
          link: "sinteza-proteinelor"
        },
        {
            text: "Genetica celulară",
            link: "genetica-celulara"
        },
        {
            text: "Structura și funcțiile ADN-ului",
            link: "structura-si-functiile-adnului"
        },
        {
            text: "Moștenirea genetică: gene și cromozomi",
            link: "mostenirea-genetica-gene-si-cromozomi"
        }
      ]
    },
    {
      h2: [
        {
          text: "Plantele - regnul vegetal",
          link: "plantele-regnul-vegetal"
        }
      ],
      h3: [
        {
          text: "Structura și funcțiile plantelor",
          link: "structura-si-functiile-plantelor"
        },
        {
          text: "Organele plantelor: rădăcina, tulpina, frunza, floarea",
          link: "organele-plantelor-radacina-tulpina-frunza-floarea"
        },
        {
          text: "Fotosinteza și rolul plantei în ecosistem",
          link: "fotosinteza-si-rolul-plantei-in-ecosistem"
        },
        {
          text: "Reproducerea plantelor",
          link: "reproducerea-plantelor"
        },
        {
          text: "Reproducerea asexuată și sexuată la plante",
          link: "reproducerea-asexuata-si-sexuata-la-plante"
        },
        {
          text: "Tipuri de semințe și adaptări pentru dispersie",
          link: "tipuri-de-seminte-si-adaptari-pentru-dispersie"
        },
      ]
    },
    {
        h2: [
            {
                text: "Animalele – regnul animal",
                link: "animalele-regnul-animal"
            }
        ],
        h3: [
            {
                text: "Structura și funcțiile animalelor",
                link: "structura-si-functiile-animalelor"
            },
            {
                text: "Tipuri de organisme animale (unicelulare și pluricelulare)",
                link: "tipuri-de-organisme-animale-unicelulare-si-pluricelulare"
            },
            {
                text: "Sistemele de organe ale animalelor",
                link: "sistemele-de-organe-ale-animalelor"
            },
            {
                text: "Reproducerea animalelor",
                link: "reproducerea-animalelor"
            },
            {
                text: "Tipuri de dezvoltare: ouă și viviparitate",
                link: "tipuri-de-dezvoltare-oua-si-viviparitate"
            },
        ]
    },
    {
        h2: [
            {
                text: "Dinamica populațiilor și ecosistemelor",
                link: "dinamica-populatiilor-si-ecosistemelor"
            }
        ],
        h3: [
            {
                text: "Populațiile și relațiile dintre organisme",
                link: "populatiile-si-relatiile-dintre-organisme"
            },
            {
                text: "Relațiile ecologice: competiție, simbioză, prădători",
                link: "relatiile-ecologice-competitie-simbioza-pradatori"
            },
            {
                text: "Ecosisteme și biocenoze",
                link: "ecosisteme-si-biocenoze"
            },
            {
                text: "Structura și funcțiile ecosistemelor",
                link: "structura-si-functiile-ecosistemelor"
            },
            {
                text: "Transferul de energie și ciclurile biogeochimice",
                link: "transferul-de-energie-si-ciclurile-biogeochimice"
            },
        ]
    }
  ]