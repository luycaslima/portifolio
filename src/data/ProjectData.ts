
export interface ProjectsDataProps{
    id: number;
    title: string;
    description: string;
    technologies: Array<string>;
    linkDemo?: string;
    linkGithub: string;
    imageLink: string;
}

export const data: Array<ProjectsDataProps> = [
    {
        id: 1,
        title: 'Portifolio',
        description: 'Site do portifolio como prática React',
        technologies: ['React', 'Tailwind', 'Typescript'],
        linkGithub: 'https://github.com/luycaslima/portifolio',
        linkDemo: 'https://www.l22l.tech',
        imageLink: 'https://www.l22l.tech/_nuxt/img/profile_pic.159b25a.svg',
        
    },
    {
        id: 2,
        title: 'PC Builder',
        description: 'Site de construção de pc/desktop com as peças apropriadas, preços e voltagem estimada',
        technologies: ['React', 'Tailwind', 'Typescript'],
        linkGithub: 'https://github.com/luycaslima/portifolio',
        imageLink: 'https://www.l22l.tech/_nuxt/img/profile_pic.159b25a.svg',   
    },
    {
        
        id: 3,
        title: 'Ecommerce Plataform',
        description: 'Ecommerce',
        technologies: ['Next.js', 'Tailwind', 'Typescript', 'Node.js'],
        linkGithub: 'https://github.com/luycaslima/portifolio',
        imageLink: 'https://www.l22l.tech/_nuxt/img/profile_pic.159b25a.svg',   
    }
]