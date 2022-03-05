export type TSubpage = {
  name: string;
  url: string;
};

type TPage = {
  name: string;
  url: string;
  subpages?: TSubpage[];
};

const PAGES_NAMES: TPage[] = [
  {
    name: 'Sales',
    url: '/sales',
  },
  {
    name: 'Collections',
    url: '/collections',
    subpages: [
      {
        name: 'Junior',
        url: '/collections/junior',
      },
      {
        name: 'Mid',
        url: '/collections/mid',
      },
      {
        name: 'Senior',
        url: '/collections/senior',
      },
      {
        name: 'Architect',
        url: '/collections/achitect',
      },
      {
        name: 'DevOps',
        url: '/collections/devops',
      },
      {
        name: 'CSS',
        url: '/collections/css',
      },
      {
        name: 'HTML',
        url: '/collections/html',
      },
    ],
  },
  {
    name: 'Products',
    url: '/products',
  },
];

export default PAGES_NAMES;
