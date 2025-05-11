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
          text: "Oscilații mecanice",
          link: "oscilatii-mecanice"
        }
      ],
      h3: [
        {
          text: "Mișcarea oscilatorie - caracteristici generale",
          link: "miscarea-oscilatorie-caracteristici-generale"
        },
        {
          text: "Pendulul gravitațional și elastic",
          link: "pendulul-gravitational-si-elastic"
        },
        {
          text: "Energie în oscilații",
          link: "energie-in-oscilatii"
        },
        {
          text: "Exemplu de problemă",
          link: "exemplu-de-problema"
        },
      ]
    },
    {
      h2: [
        { 
          text: "Unde mecanice",
          link: "unde-mecanice"
        }
      ],
      h3: [
        {
          text: "Ecuația undei plane",
          link: "ecuatia-undei-plane"
        },
        {
          text: "Interferența undelor",
          link: "interferenta-undelor"
        },
        {
          text: "Undele staționare",
          link: "undele-stationare"
        },
        {
          text: "Noțiuni de acustică",
          link: "notiuni-de-acustica"
        },
      ]
    },
    {
      h2: [
        { 
          text: "Optică ondulatorie",
          link: "optica-ondulatorie"
        }
      ],
      h3: [
        {
          text: "Interferența luminii",
          link: "interferenta-luminii"
        },
        {
          text: "Difracția luminii",
          link: "difractia-luminii"
        },
        {
          text: "Polarizarea luminii",
          link: "polarizarea-luminii"
        },
        {
          text: "Exemplu de problemă",
          link: "exemplu-de-problema"
        },
      ]
    },
    {
      h2: [
        { 
          text: "Câmpul electromagnetic",
          link: "campul-electromagnetic"
        }
      ],
      h3: [
        {
          text: "Câmpul electric și câmpul magnetic",
          link: "campul-electric-si-campul-magnetic"
        },
        {
          text: "Legea lui Faraday - inducția electromagnetică",
          link: "legea-lui-faraday"
        },
        {
          text: "Unda electromagnetică",
          link: "unda-electromagnetica"
        },
        {
          text: "Spectrul electromagnetic",
          link: "spectrul-electromagnetic"
        },
      ]
    },
    {
      h2: [
        { 
          text: "Aplicații și tehnologii",
          link: "aplicatii-si-tehnologii"
        }
      ],
      h3: [
        {
          text: "Comunicarea prin unde",
          link: "comunicarea-prin-unde"
        },
        {
          text: "Dispozitive optice",
          link: "dispozitive-optice"
        },
        {
          text: "Sisteme electromagnetice",
          link: "sisteme-electromagnetice"
        },
      ]
    },
  ]