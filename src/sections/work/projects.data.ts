export interface BasicProject {
  name: string;
  titleImg?: string;
  description: string;
  smallDescription: string;
  techStack: string[];
  link?: string;
}

export const Projects: BasicProject[] = [
  {
    name: 'BlupsApp',
    description:
      'An e-commerce platform as a Telegram Mini App with product catalogs, cart, user balance management, and seamless Telegram-based authentication. Implemented secure backend communication and performance optimizations using Next.js API routes and middleware.',
    smallDescription: 'E-commerce Mini App in Telegram',
    techStack: ['Next.js', 'Tailwind'],
    titleImg: '/svgs/BlupsBot.svg',
  },
  {
    name: 'BlupsAdmin',
    description:
      'Built a full-featured CMS for BlupsApp using Next.js, enabling store, product, and client management. Implemented mailing tools, an analytics dashboard with interactive charts, RBAC access control, and an order processing system with automated distribution among store employees.',
    smallDescription: 'Administrative CMS for BlupsApp',
    techStack: ['Next.js', 'TypeScript', 'Shadcn/ui'],
    titleImg: '/svgs/BlupsBot.svg',
  },
  {
    name: 'ReGlyph',
    description:
      'Developing a lightweight and stable React-based chat UI kit focused on minimal bundle size and ease of integration. Organized and coordinated a small development team. Published initial design and concept materials on Behance. Take a look!',
    smallDescription: 'Lightweight React chat UI kit (WIP)',
    techStack: ['React', 'TypeScript', 'Vite'],
    link: 'https://www.behance.net/gallery/235495355/Teaser-CHAT-UI-KIT',
    titleImg: '/svgs/ReGlyph.svg',
  },
  {
    name: 'MetaPanel',
    description:
      'Developed an administrative panel for managing a large multi-server Minecraft infrastructure. Implemented server controls, an integrated terminal for each server, configuration management, player and admin management, RBAC, and a dashboard with charts and real-time statistics. Demonstration available upon request.',
    smallDescription: 'Admin panel for a multi-server Minecraft project',
    techStack: ['React', 'TypeScript', 'Bootstrap'],
    titleImg: '/svgs/MetaPanel.svg',
  },
];
