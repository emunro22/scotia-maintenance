export type BeforeAfterPair = {
  id: string;
  title: string;
  description: string;
  before: { src: string; alt: string };
  after: { src: string; alt: string };
};

/** Real transformations, used on the homepage and about page. */
export const transformations: BeforeAfterPair[] = [
  {
    id: 'rear-garden-glasgow',
    title: 'Full rear garden rebuild',
    description:
      'A bare, waterlogged back green stripped out, re-fenced and rebuilt with a sandstone patio, raised planting beds and self-binding gravel.',
    before: {
      src: '/images/rear-garden-fence-5.jpg',
      alt: 'Rear garden mid-project with new timber fencing and bare cleared soil around a teal garden shed',
    },
    after: {
      src: '/images/rear-garden-after-1.jpg',
      alt: 'Same rear garden finished with gold gravel, potted planting and a sandstone patio edge around the teal shed',
    },
  },
  {
    id: 'front-garden-glasgow',
    title: 'Front garden hard landscaping',
    description:
      'A tired front border and cracked driveway edge replaced with porcelain paving, granite kerbing and a clean white gravel bed.',
    before: {
      src: '/images/front-garden-before-1.jpg',
      alt: 'Front garden before work, bare soil border around a young tree next to a block-paved driveway',
    },
    after: {
      src: '/images/front-garden-after-1.jpg',
      alt: 'Same front garden finished with porcelain paving, white gravel and a granite-edged planting bed around the tree',
    },
  },
];

/** Finished-work photography used across the project gallery, services and areas. */
export const workGallery = [
  { src: '/images/rear-garden-after-7.jpg', alt: 'Sandstone patio, gold gravel and raised planting beds in a finished rear garden landscaping project' },
  { src: '/images/rear-garden-after-10.jpg', alt: 'Raised block-edged planting bed with a potted hydrangea in a landscaped rear garden' },
  { src: '/images/front-garden-after-2.jpg', alt: 'Finished porcelain path and white gravel border leading to a front door' },
  { src: '/images/rear-garden-after-4.jpg', alt: 'Wide view of a finished rear garden with sandstone patio, gravel and a painted garden shed' },
  { src: '/images/rear-garden-after-6.jpg', alt: 'Multi-tone sandstone patio paving detail in a finished garden' },
  { src: '/images/front-garden-after-3.jpg', alt: 'Finished driveway and porcelain path with white gravel borders' },
  { src: '/images/rear-garden-after-2.jpg', alt: 'Two raised block-edged planting beds set in gold gravel in a rear garden' },
  { src: '/images/rear-garden-after-9.jpg', alt: 'Sandstone steps and glass balustrade detail on a garden patio' },
] as const;

export const heroImage = {
  src: '/images/rear-garden-after-7.jpg',
  alt: 'Finished rear garden landscaping in Glasgow with a sandstone patio, raised planting beds and gold gravel',
};
