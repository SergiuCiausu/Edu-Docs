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
          text: "Genetica umană",
          link: "genetica-umana"
        }
      ],
      h3: [
        {
          text: "Noțiuni fundamentale de genetică",
          link: "notiuni-fundamentale-de-genetica"
        },
        {
          text: "Mecanismele eredității",
          link: "mecanismele-ereditatii"
        },
        {
          text: "Boli genetice și implicațiile lor",
          link: "boli-genetice-si-implicatiile-lor"
        },
        {
          text: "Implicațiile studiului geneticii",
          link: "implicatiile-studiului-geneticii"
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
          text: "Ecosisteme și biocenoze",
          link: "ecosisteme-si-biocenoze"
        },
        {
          text: "Relațiile dintre organisme și mediul lor",
          link: "relatiile-dintre-organisme-si-mediul-lor"
        },
        {
            text: "Impactul activităților umane asupra mediului",
            link: "impactul-activitatilor-umane-asupra-mediului"
        },
        {
            text: "Strategii de conservare și protecție a biodiversității",
            link: "strategii-de-conservare-si-protectie-a-biodiversitatii"
        }
      ]
    }
  ]