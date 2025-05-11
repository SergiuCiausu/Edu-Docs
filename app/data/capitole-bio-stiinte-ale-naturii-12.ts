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
          text: "Genetica moleculară",
          link: "genetica-moleculara"
        }
      ],
      h3: [
        {
          text: "Acizii nucleici",
          link: "acizii-nucleici"
        },
        {
          text: "Organizarea materialului genetic",
          link: "organizarea-materialului-genetic"
        },
      ]
    },
    {
      h2: [
        { 
          text: "Genetica umană",
          link: "genetica-umana"
        }
      ],
      h3: [
        {
          text: "Genomul uman",
          link: "genomul-uman"
        },
        {
          text: "Mutageneza și teratogeneza",
          link: "mutageneza-si-teratogeneza"
        },
        {
          text: "Domenii de aplicabilitate și considerații bioetice în genetica umană",
          link: "domenii-de-aplicabilitate-si-consideratii-bioetice-in-genetica-umana"
        },
      ]
    },
    {
      h2: [
        {
          text: "Biologie celulară și moleculară",
          link: "biologie-celulara-si-moleculara"
        }
      ],
      h3: [
        {
          text: "Structura și funcțiile celulei",
          link: "structura-si-functiile-celulei"
        },
        {
          text: "Metabolismul celular",
          link: "metabolismul-celular"
        },
        {
          text: "Diviziunea celulară",
          link: "diviziunea-celulara"
        },
      ]
    },
  ]