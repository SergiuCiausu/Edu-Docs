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
          text: "Sistemul nervos",
          link: "sistemul-nervos"
        }
      ],
      h3: [
        {
          text: "Structura și funcțiile sistemului nervos",
          link: "structura-si-functiile-sistemului-nervos"
        },
        {
          text: "Componentele sistemului nervos central",
          link: "componentele-sistemului-nervos-central"
        },
        {
          text: "Sistemul nervos periferic și funcțiile acestuia",
          link: "sistemul-nervos-periferic-si-functiile-acestuia"
        },
        {
          text: "Neurotransmițători și rolul lor",
          link: "neurotransmitatori-si-rolul-lor"
        },
        {
          text: "Reacțiile și reflexele nervoase",
          link: "reactiile-si-reflexele-nervoase"
        },
        {
          text: "Reflexe condiționate și necondiționate",
          link: "reflexe-conditionate-si-neconditionate"
        },
        {
          text: "Circuitele nervoase și transmiterea impulsurilor",
          link: "circuitele-nervoase-si-transmiterea-impulsurilor"
        },
      ]
    },
    {
      h2: [
        { 
          text: "Sistemul endocrin",
          link: "sistemul-endocrin"
        }
      ],
      h3: [
        {
          text: "Glandele endocrine și hormonii",
          link: "glandele-endocrine-si-hormonii"
        },
        {
          text: "Glandele cu secreție internă",
          link: "glandele-cu-secretie-interna"
        },
        {
          text: "Hormonii și efectele acestora asupra organismului",
          link: "hormonii-si-efectele-acestora-asupra-organismului"
        },
        {
          text: "Mecanismele de reglare hormonală",
          link: "mecanismele-de-reglare-hormonala"
        },
        {
          text: "Feedback-ul negativ și pozitiv în reglarea hormonală",
          link: "feedbackul-negativ-si-pozitiv-in-reglarea-hormonala"
        }
      ]
    },
    {
      h2: [
        {
          text: "Sistemul locomotor",
          link: "sistemul-locomotor"
        }
      ],
      h3: [
        {
          text: "Structura oaselor și articulațiilor",
          link: "structura-oaselor-si-articulatiilor"
        },
        {
          text: "Tipuri de oase și funcțiile acestora",
          link: "tipuri-de-oase-si-functiile-acestora"
        },
        {
          text: "Articulațiile și mișcările acestora",
          link: "articulatiile-si-miscarile-acestora"
        },
        {
          text: "Mușchii și mecanismul contracției musculare",
          link: "muschii-si-mecanismul-contractiei-musculare"
        },
        {
          text: "Tipuri de mușchi și funcțiile acestora",
          link: "tipuri-de-muschi-si-functiile-acestora"
        },
        {
          text: "Mecanismul contracției musculare",
          link: "mecanismul-contractiei-musculare"
        }
      ]
    },
    {
      h2: [
        {
            text: "Sistemul cardiovascular",
            link: "sistemul-cardiovascular"
        }
      ],
      h3: [
        {
          text: "Structura și funcțiile inimii",
          link: "structura-si-functiile-inimii"
        },
        {
          text: "Anatomia inimii",
          link: "anatomia-inimii"
        },
        {
          text: "Circulația sanguină și rolul sistemului cardiovascular",
          link: "circulatia-sanguina-si-rolul-sistemului-cardiovascular"
        },
        {
          text: "Tipuri de vase sanguine",
          link: "tipuri-de-vase-sanguine"
        },
        {
          text: "Circulația mică și circulația mare",
          link: "circulatia-mica-si-circulatia-mare"
        },
        {
          text: "Reglarea ritmului cardiac și tensiunii arteriale",
          link: "reglarea-ritmului-cardiac-si-tensiunii-arteriale"
        }
      ]
    },
    {
        h2: [
            {
                text: "Sistemul respirator",
                link: "sistemul-respirator"
            }
        ],
        h3: [
            {
                text: "Structura și funcțiile sistemului respirator",
                link: "structura-si-functiile-sistemului-respirator"
            },
            {
                text: "Organitele implicate în respirație: trahee, bronhii, alveole",
                link: "organitele-implicate-in-respiratie-trahee-bronhii-alveole"
            },
            {
                text: "Mecanismul respirației",
                link: "mecanismul-respiratiei"
            },
            {
                text: "Schimburile gazoase la nivelul alveolelor",
                link: "schimburile-gazoase-la-nivelul-alveolelor"
            },
            {
                text: "Controlul respirației și adaptările fiziologice",
                link: "controlul-respiratiei-si-adaptarile-fiziologice"
            },
        ]
    },
    {
        h2: [
            {
                text: "Sistemul digestiv",
                link: "sistemul-digestiv"
            }
        ],
        h3: [
            {
                text: "Structura organelor digestive",
                link: "structura-organelor-digestive"
            },
            {
                text: "Funcțiile fiecărui organ în procesul de digestie",
                link: "functiile-fiecarui-organ-in-procesul-de-digestie"
            },
            {
                text: "Procesele de digestie și absorbție a nutrienților",
                link: "procesele-de-digestie-si-absorbtie-a-nutrientilor"
            },
            {
                text: "Absorbția nutrienților la nivelul intestinului subțire",
                link: "absorbtia-nutrientilor-la-nivelul-intestinului-subtire"
            },
        ]
    },
    {
        h2: [
            {
                text: "Sistemul excretor",
                link: "sistemul-excretor"
            }
        ],
        h3: [
            {
                text: "Structura rinichilor și a căilor urinare",
                link: "structura-rinichilor-si-a-cailor-urinare"
            },
            {
                text: "Funcțiile rinichilor și formarea urinei",
                link: "functiile-rinichilor-si-formarea-urinei"
            },
            {
                text: "Filtrarea sângelui și procesul de formare a urinei",
                link: "filtrarea-sangelui-si-procesul-de-formare-a-urinei"
            },
        ]
    },
    {
        h2: [
            {
                text: "Sistemul reproducător",
                link: "sistemul-reproducator"
            }
        ],
        h3: [
            {
                text: "Structura și funcțiile organelor reproducătoare",
                link: "structura-si-functiile-organelor-reproducatoare"
            },
            {
                text: "Fiziologia reproducției",
                link: "fiziologia-reproductiei"
            },
            {
                text: "Fecundația și dezvoltarea embrionară",
                link: "fecundatia-si-dezvoltarea-embrionara"
            },
        ]
    }
  ]