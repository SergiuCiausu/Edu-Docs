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
          text: "Clasificarea și diversitatea organismelor vii",
          link: "clasificarea-si-diversitatea-organismelor-vii"
        }
      ],
      h3: [
        {
          text: "Principiile clasificării biologice",
          link: "principiile-clasificarii-biologice"
        },
        {
          text: "Caracteristicile și diversitatea microorganismelor",
          link: "caracteristicile-si-diversitatea-microorganismelor"
        },
        {
          text: "Caracteristicile și diversitatea regnului Protista",
          link: "caracteristicile-si-diversitatea-regnului-protista"
        },
        {
          text: "Caracteristicile și diversitatea regnului Fungi",
          link: "caracteristicile-si-diversitatea-regnului-fungi"
        },
        {
          text: "Caracteristicile și diversitatea regnului Plantae",
          link: "caracteristicile-si-diversitatea-regnului-plantae"
        },
        {
          text: "Caracteristicile și diversitatea regnului Animalia",
          link: "caracteristicile-si-diversitatea-regnului-animalia"
        },
      ]
    },
    {
      h2: [
        { 
          text: "Anatomia și fiziologia plantelor",
          link: "anatomia-si-fiziologia-plantelor"
        }
      ],
      h3: [
        {
          text: "Structura și funcțiile rădăcinii, tulpinii și frunzei",
          link: "structura-si-functiile-radacinii-tulpinii-si-frunzei"
        },
        {
          text: "Structura și funcțiile florii, fructului și seminței",
          link: "structura-si-functiile-florii-fructului-si-semintei"
        },
        {
            text: "Procese fiziologice: fotosinteza, respirația, transpirația",
            link: "procese-fiziologice-fotosinteza-respiratia-transpiratia"
        },
        {
            text: "Creșterea și dezvoltarea plantelor",
            link: "cresterea-si-dezvoltarea-plantelor"
        },
      ]
    },
    {
      h2: [
        {
          text: "Anatomia și fiziologia animalelor",
          link: "anatomia-si-fiziologia-animalelor"
        }
      ],
      h3: [
        {
          text: "Structura și funcțiile sistemelor de organe la diferite grupe de animale",
          link: "structura-si-functiile-sistemelor-de-organe-la-diferite-grupe-de-animale"
        },
        {
            text: "Adaptări morfologice și fiziologice la mediul de viață",
            link: "adaptari-morfologice-si-fiziologice-la-mediul-de-viata"
        }
      ]
    },
    {
      h2: [
        {
          text: "Genetica și ereditatea",
          link: "genetica-si-ereditatea"
        }
      ],
      h3: [
        {
          text: "Noțiuni fundamentale de genetică​",
          link: "notiuni-fundamentale-de-genetica"
        },
        {
          text: "Legile mendeliene ale eredității",
          link: "legile-mendeliene-ale-ereditatii"
        },
        {
            text: "Tipuri de încrucișări și analiza rezultatelor",
            link: "tipuri-de-incrucisari-si-analiza-rezultatelor"
        }, 
        {
            text: "Importanța geneticii în ameliorarea plantelor și animalelor",
            link: "importanta-geneticii-in-ameliorarea-plantelor-si-animalelor"
        },
      ]
    },
    {
        h2: [
            {
                text: "Ecologie și protecția mediului",
                link: "ecologie-si-protectia-mediului"
            }
        ],
        h3: [
            {
                text: "Ecosisteme și biocenoze",
                link: "ecosisteme-si-biocenoze"
            },
            {
                text: "Relațiile dintre organisme și mediul lor",
                link: "relatiile-dintre-organisme-si-mediul-lor"
            },
            {
                text: "Ciclurile biogeochimice",
                link: "ciclurile-biogeochimice"
            },
            {
                text: "Impactul activităților umane asupra mediului și măsuri de protecție",
                link: "impactul-activitatilor-umane-asupra-mediului-si-masuri-de-protectie"
            }
        ]
    }
  ]