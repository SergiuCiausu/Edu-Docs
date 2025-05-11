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
          text: "Genetica",
          link: "genetica"
        }
      ],
      h3: [
        {
          text: "Structura și funcțiile materialului genetic",
          link: "structura-si-functiile-materialului-genetic"
        },
        {
          text: "Genomul și genele",
          link: "genomul-si-genele"
        },
        {
          text: "Mecanismele eredității",
          link: "mecanismele-ereditatii"
        },
        {
          text: "Legile eredității (Mendel)",
          link: "legile-ereditatii-mendel"
        },
        {
          text: "Moștenirea legată de sex",
          link: "mostenirea-legata-de-sex"
        },
        {
          text: "Mutațiile genetice",
          link: "mutatiile-genetice"
        },
        {
          text: "Tehnici moderne în genetică",
          link: "tehnici-moderne-in-genetica"
        },
      ]
    },
    {
      h2: [
        { 
          text: "Imunitatea și protecția organismului",
          link: "imunitatea-si-protectia-organismului"
        }
      ],
      h3: [
        {
          text: "Sistemul imunitar",
          link: "sistemul-imunitar"
        },
        {
          text: "Mecanismele imunității",
          link: "mecanismele-imunitatii"
        },
        {
          text: "Boli autoimune și imunodeficiențe",
          link: "boli-autoimune-si-imunodeficiente"
        },
        {
          text: "Vaccinarea și prevenirea bolilor infecțioase",
          link: "vaccinarea-si-prevenirea-bolilor-infectioase"
        },
      ]
    },
    {
      h2: [
        {
          text: "Ecologia",
          link: "ecologia"
        }
      ],
      h3: [
        {
          text: "Ecosisteme și biocenoze",
          link: "ecosisteme-si-biocenoze"
        },
        {
          text: "Structura și funcțiile ecosistemelor",
          link: "structura-si-functiile-ecosistemelor"
        },
        {
          text: "Factorii de mediu",
          link: "factorii-de-mediu"
        },
        {
          text: "Populațiile și dinamica lor",
          link: "populatiile-si-dinamica-lor"
        },
        {
          text: "Modele de creștere a populațiilor",
          link: "modele-de-crestere-a-populatiilor"
        },
        {
          text: "Comunități ecologice",
          link: "comunitati-ecologice"
        },
        {
          text: "Lanțuri trofice și piramide energetice",
          link: "lanturi-trofice-si-piramide-energetice"
        },
        {
          text: "Protecția mediului",
          link: "protectia-mediului"
        },
      ]
    },
    {
      h2: [
        {
            text: "Fiziologia umană",
            link: "fiziologia-umana"
        }
      ],
      h3: [
        {
          text: "Sistemul nervos",
          link: "sistemul-nervos"
        },
        {
          text: "Sistemul endocrin",
          link: "sistemul-endocrin"
        },
        {
          text: "Sistemul circulator",
          link: "sistemul-circulator"
        },
        {
          text: "Sistemul respirator",
          link: "sistemul-respirator"
        },
        {
          text: "Sistemul digestiv",
          link: "sistemul-digestiv"
        },
        {
          text: "Sistemul excretor",
          link: "sistemul-excretor"
        }
      ]
    },
    {
        h2: [
            {
                text: "Reproducerea organismelor",
                link: "reproducerea-organismelor"
            }
        ],
        h3: [
            {
                text: "Reproducerea la plante",
                link: "reproducerea-la-plante"
            },
            {
                text: "Reproducerea la animale",
                link: "reproducerea-la-animale"
            },
            {
                text: "Reproducerea umană",
                link: "reproducerea-umana"
            },
        ]
    },
  ]