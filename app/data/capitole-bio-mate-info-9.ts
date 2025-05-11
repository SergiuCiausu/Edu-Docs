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
          text: "Proprietățile generale ale organismelor vii",
          link: "proprietatile-generale-ale-organismelor-vii"
        },
        {
          text: "Nivelurile de organizare ale lumii vii",
          link: "nivelurile-de-organizare-ale-lumii-vii"
        }
      ]
    },
    {
      h2: [
        { 
          text: "Celula - unitatea structurală și funcțională a lumii vii",
          link: "celula"
        }
      ],
      h3: [
        {
          text: "Compoziția chimică a celulei",
          link: "compozitia-chimica-a-celulei"
        },
        {
          text: "Structura și funcțiile componentelor celulare",
          link: "structura-si-functiile-componentelor-celulare"
        }
      ]
    },
    {
      h2: [
        {
          text: "Diversitatea lumii vii",
          link: "diversitatea-lumii-vii"
        }
      ],
      h3: [
        {
          text: "Clasificarea organismelor: regnuri și încadrarea principalelor grupe de plante și animale",
          link: "clasificarea-organismelor-regnuri-si-incadrarea-principalelor-grupe-de-plante-si-animale"
        },
        {
            text: "Caracteristici morfologice și fiziologice ale principalelor grupe de organisme",
            link: "caracteristici-morfologice-si-fiziologice-ale-principalelor-grupe-de-organisme"
        }
      ]
    },
    {
      h2: [
        {
          text: "Procesele vitale la plante",
          link: "procesele-vitale-la-plante"
        }
      ],
      h3: [
        {
          text: "Nutriția autotrofă: fotosinteza",
          link: "nutritia-autotrofa-fotosinteza"
        },
        {
          text: "Respirația la plante​",
          link: "respiratia-la-plante"
        },
        {
          text: "Circulația sevei brute și elaborate",
          link: "circulatia-sevei-brute-si-elaborate"
        },
        {
            text: "Transpirația și excreția",
            link: "transpiratia-si-excretia"
        }, 
        {
            text: "Creșterea și dezvoltarea plantelor",
            link: "cresterea-si-dezvoltarea-plantelor"
        },
        {
            text: "Reproducerea la plante: înmulțirea vegetativă și generativă",
            link: "reproducerea-la-plante-inmultirea-vegetativa-si-generativa"
        }
      ]
    },
    {
        h2: [
            {
                text: "Procesele vitale la animale",
                link: "procesele-vitale-la-animale"
            }
        ],
        h3: [
            {
                text: "Nutriția heterotrofă: tipuri de digestie",
                link: "nutritia-heterotrofa-tipuri-de-digestie"
            },
            {
                text: "Respirația la animale: tipuri de respirație",
                link: "respiratia-la-animale-tipuri-de-respiratie"
            },
            {
                text: "Circulația la diferite grupe de animale",
                link: "circulatia-la-diferite-grupe-de-animale"
            },
            {
                text: "Excreția și osmoreglarea",
                link: "excretia-si-osmoreglarea"
            },
            {
                text: "Sistemul nervos și organele de simț",
                link: "sistemul-nervos-si-organele-de-simt"
            },
            {
                text: "Locomoția și structura sistemului muscular și osos",
                link: "locomotia-si-structura-sistemului-muscular-si-osos"
            },
            {
                text: "Reproducerea și dezvoltarea la animale",
                link: "reproducerea-si-dezvoltarea-la-animale"
            }
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
                text: "Factorii de mediu și adaptările organismelor",
                link: "factorii-de-mediu-si-adaptarile-organismelor"
            },
            {
                text: "Relațiile dintre organisme și mediul lor",
                link: "relatiile-dintre-organisme-si-mediul-lor"
            },
            {
                text: "Ecosisteme și biomi",
                link: "ecosisteme-si-biomi"
            },
            {
                text: "Impactul activităților umane asupra mediului și măsuri de protecție",
                link: "impactul-activitatilor-umane-asupra-mediului-si-masuri-de-protectie"
            }
        ]
    }
  ]