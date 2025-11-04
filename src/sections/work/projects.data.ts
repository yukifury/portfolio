export interface BasicProject {
  name: string;
  titleImg?: string;
  description: string;
  smallDescription: string;
  techStack: string[];
  preview?: string;
}

export const Projects: BasicProject[] = [
  {
    name: 'BlupsApp',
    description: 'Preview',
    smallDescription: 'Game store in Telegram MiniApps',
    techStack: ['Next.js'],
    preview: 'https://preview.preview',
  },
];
