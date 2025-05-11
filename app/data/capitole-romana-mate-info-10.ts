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
          text: "Limba și literatura română în spațiul culturii. Devenirea cititorului",
          link: "limba-si-literatura-romana-in-spatiul-culturii-devenirea-cititorului"
        }
      ],
      h3: [
        {
          text: "Ce este ficțiunea literară?",
          link: "ce-este-fictiunea-literara"
        },
        {
          text: "Diferența între literar și non-literar",
          link: "diferenta-intre-literar-si-non-literar"
        },
        {
          text: "Genurile literare",
          link: "genurile-literare"
        },
      ]
    },
    {
      h2: [
        {
          text: "Creativitatea lingvistică și literară în devenirea genurilor și speciilor",
          link: "creativitatea-lingvistica-si-literara-in-devenirea-genurilor-si-speciilor"
        }
      ],
      h3: [
        {
          text: "Genul epic sau aventura omului în universul cunoașterii",
          link: "genul-epic-sau-aventura-omului-in-universul-cunoasterii"
        },
        {
          text: "Genul dramatic sau măștile și rolurile ființei",
          link: "genul-dramatic-sau-mastile-si-rolurile-fiintei"
        },
        {
          text: "Genul liric sau dialogul eului cu lumea",
          link: "genul-liric-sau-dialogul-eului-cu-lumea"
        },
      ]
    },
    {
      h2: [
        { 
          text: "Limbă și comunicare",
          link: "limba-si-comunicare"
        }
      ],
      h3: [
        {
          text: "Producerea mesajelor orale și scrise",
          link: "producerea-mesajelor-orale-si-scrise"
        },
        {
          text: "Receptarea mesajelor orale și scrise",
          link: "receptarea-mesajelor-orale-si-scrise"
        },
      ]
    },
  ]