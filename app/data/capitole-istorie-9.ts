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
          text: "Popoare și spații în Antichitate",
          link: "popoare-si-spatii-in-antichitate"
        }
      ],
      h3: [
        { 
            text: "Popoare din Orient",
            link: "popoare-din-orient"
        },
        { 
            text: "Popoare din Europa",
            link: "popoare-din-europa"
        },
        { 
            text: "Termeni importanți",
            link: "termeni-importanti"
        },
      ]
    },
    {
      h2: [
        {
          text: "Forme de organizare politică în Antichitate",
          link: "forme-de-organizare-politica-in-antichitate"
        }
      ],
      h3: [
        { 
            text: "Monarhia egipteană",
            link: "monarhia-egipteana"
        },
        { 
            text: "Democrația ateniană",
            link: "democratia-ateniana"
        },
        { 
            text: "Republica și Imperiul Roman",
            link: "republica-si-imperiul-roman"
        },
        { 
            text: "Regatul dac",
            link: "regatul-dac"
        },
      ]
    },
    {
      h2: [
        {
          text: "Moștenirea culturală a Antichității",
          link: "mostenirea-culturala-a-antichitatii"
        }
      ],
      h3: [
        { 
            text: "Arhitectura orientală",
            link: "arhitectura-orientala"
        },
        { 
            text: "Stilurile artei grecești",
            link: "stilurile-artei-grecesti"
        },
        { 
            text: "Arta plastică greacă",
            link: "arta-plastica-greaca"
        },
        { 
            text: "Arta monumentală romană",
            link: "arta-monumentala-romana"
        },
        { 
            text: "Modele și valori în educația greacă",
            link: "modele-si-valori-in-educatia-greaca"
        },
        { 
            text: "Știința în Antichitate",
            link: "stiinta-in-antichitate"
        },
      ]
    },
    {
      h2: [
        {
          text: "Mari religii",
          link: "mari-religii"
        }
      ],
      h3: [
        { 
            text: "Iudaismul",
            link: "iudaismul"
        },
        { 
            text: "Creștinismul",
            link: "crestinismul"
        },
        { 
            text: "Islamul",
            link: "islamul"
        },
        { 
            text: "Budismul",
            link: "budismul"
        },
      ]
    },
    {
      h2: [
        {
          text: "Formarea popoarelor medievale",
          link: "formarea-popoarelor-medievale"
        }
      ],
      h3: [
        { 
            text: "Popoarele europene",
            link: "popoarele-europene"
        },
        { 
            text: "Arabii și popoarele turcice",
            link: "arabii-si-popoarele-turcice"
        },
      ]
    },
    {
      h2: [
        {
          text: "Civilizația medievală",
          link: "civilizatia-medievala"
        }
      ],
      h3: [
        { 
            text: "Demografie și economie",
            link: "demografie-si-economie"
        },
        { 
            text: "Ierarhia feudală",
            link: "ierarhia-feudala"
        },
        { 
            text: "Europa romanică și Europa gotică",
            link: "europa-romanica-si-europa-gotica"
        },
        { 
            text: "Arhitectura medievală românească",
            link: "arhitectura-medievala-romaneasca"
        },
        { 
            text: "Influențe orientale în Europa",
            link: "influente-orientale-in-europa"
        },
      ]
    },
  ]