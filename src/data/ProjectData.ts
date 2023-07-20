
export interface ProjectsDataProps{
    id: number;
    title: string;
    description: string;
    technologies: Array<string>;
    linkDemo?: string;
    demoVideo?: string;
    linkGithub: string;
    imageLink?: string;
}

export const data: Array<ProjectsDataProps> = [
    {
        id:1,
        title:'Snake Royale - A Multiplayer Snake Game',
        description:'A web based adaptation of the classic snake game but with the twist of being multiplayer 1v1',
        technologies:['Pixi.js', 'Typescript,','Vite','Socket.io','Express'],
        linkGithub:'https://github.com/luycaslima/multiplayer-snake',
        imageLink:'/projects/multiplayer_snake.png',
    },
    {
        id: 2,
        title: 'IsoEditor - Isometric Map Editor',
        description: 'A isometric map editor that exports the maps in JSON',
        technologies: ['Pixi.js', 'Typescript', 'Vite'],
        linkGithub: 'https://github.com/luycaslima/isometric-tilemap-editor',
        linkDemo: 'https://isometric-tilemap-editor.vercel.app/',
        
        
    },
    {
        
        id: 3,
        title: 'Portifolio',
        description: 'This portifolio\'s website.',
        technologies: ['React','Vite','Tailwindcss', 'Typescript'],
        linkGithub: 'https://github.com/luycaslima/portifolio',
        linkDemo: 'https://portifolio-luycaslima.vercel.app/',
        
    },

    /*{
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
    }*/
]