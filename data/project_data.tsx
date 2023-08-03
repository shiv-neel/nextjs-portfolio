export interface ProjectCardType {
    title: string
    description: JSX.Element | string
    dates: string
    stack: ChipType[]
    github?: string
    demo?: string
    hasDivider?: boolean
}

export interface ChipType {
    label: string
    color: string
}
export const PROJECT_DATA: ProjectCardType[] = [
    // {
    //     title: 'OpenLink',
    //     description:
    //         <p>Interactive platform that leverages <strong>deep learning algorithms</strong> to pair software engineers with opportunities to contribute to meaningful <strong>open-source software</strong> (OSS) projects on Github.'</p>,
    //     dates: 'May 2023 - Present',
    //     stack: ['React', 'Typescript', 'Next.js', 'MongoDB', 'Go', 'AWS']
    // },
    {
        title: 'Pathfinding Visualizer',
        description:
            <p>Feature-rich React web application with a 2D grid, enabling users to interactively visualize and analyze graph algorithms,
                including Dijkstra's, BFS, DFS, and A* algorithms, by selecting source and destination vertices, placing walls, and bombs.</p>,
        dates: 'May 2023 - Present',
        stack: [{ label: 'React', color: 'blue' }, { label: 'Typescript', color: 'blue' }, { label: 'TailwindCSS', color: 'cyan' }],
        github: 'https://github.com/shiv-neel/pathfinder-v2',
        demo: 'https://pathviz.vercel.app',
        hasDivider: true
    },
    {
        title: 'SoundTrack',
        description:
            <p>SoundTrack is a mobile social media application on which you can share automated analytics posts about your favorite songs, albums, and artists, and connect with your fellow music lovers.<br /><br />
                The app uses OAuth 2.0 to fetch and aggregate user-specific analytics from Spotify's Web API. The frontend is written in Android Studio, and the backend uses Java Springboot with Spring Security. All analytic posts are generated using a custom Javascript-based image generator microservice.</p>,
        dates: 'Jan 2023 - Apr 2023',
        stack: [{ label: 'Android Studio', color: 'green' }, { label: 'Springboot', color: 'whatsapp' }, { label: 'MySQL', color: 'orange' }],
        github: 'https://github.com/shiv-neel/soundtrack',
        hasDivider: false
    },

]