export type Header = {
    text: string,
    link: string
}

export type Titluri = {
    h2: Header[],
    h3: Header[]
}

export type fullTitluri = Titluri[];

export const tocIntroducere: fullTitluri = [
    {
        h2: [
          {
            text: "Introducere",
            link: "introducere"
          }
        ],
        h3: [
          { 
              text: "Alege materia",
              link: "alege-materia"
          },
          { 
              text: "EduBot",
              link: "edubot"
          },
          { 
              text: "EduProf",
              link: "eduprof"
          },
        ]
      },
    ]