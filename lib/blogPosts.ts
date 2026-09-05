export type BlogBodyBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  metaDescription: string;
  publishDate: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  body: BlogBodyBlock[];
  relatedServices: string[];
  relatedAreas: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-often-to-cut-your-lawn-west-scotland',
    title: 'How Often Should You Cut Your Lawn in the West of Scotland?',
    category: 'Lawn care',
    metaDescription:
      'How often lawns need cut in Glasgow, Renfrewshire and Dunbartonshire, why the growing season runs longer here, and what causes moss and wet patches.',
    publishDate: '2025-03-11',
    excerpt:
      'Grass in this part of Scotland starts moving in March and keeps growing into November. Here is what that means for a realistic cutting rhythm, and why moss and wet ground turn up so often.',
    image: '/images/front-garden-after-2.jpg',
    imageAlt: 'Neatly cut lawn edge alongside a finished porcelain path and gravel border',
    body: [
      {
        type: 'paragraph',
        text: 'The growing season in the west of Scotland is longer and wetter than most of the country, and that changes what a sensible cutting schedule looks like. Grass often starts moving in March and is still putting on growth in November. A fortnight of mild, wet weather in June can produce more growth than a domestic mower is really comfortable with in one pass.',
      },
      {
        type: 'heading',
        text: 'A realistic cutting rhythm',
      },
      {
        type: 'paragraph',
        text: 'Roughly every one to two weeks from April to September is a reasonable starting point for most lawns, tapering off either side of that as growth slows. Cutting on a consistent rhythm keeps the sward dense and even. Leaving it until the grass has already got long tends to produce a patchy, yellowed finish and gives moss and weeds room to take the gaps left behind.',
      },
      {
        type: 'paragraph',
        text: 'Edges make more difference to how a lawn looks than the cut itself. A straightforward cut with a clean edge where the lawn meets a bed, path or fence reads as a well-kept garden, while a good cut with ragged edges does not.',
      },
      {
        type: 'heading',
        text: 'Why moss and wet patches turn up so often here',
      },
      {
        type: 'list',
        items: [
          'Shaded gardens under mature trees, common in places like Bearsden and Milngavie, hold moss badly because light and airflow are limited.',
          'Flat, low-lying gardens on heavy ground, such as parts of Renfrew, Inchinnan and Linwood, can sit wet for weeks after rain.',
          'New-build lawns laid over thin topsoil, including estates like Dargavel in Bishopton, often struggle through their first few years while the ground settles.',
        ],
      },
      {
        type: 'paragraph',
        text: 'These are assessed on site rather than guessed at from a description. Sometimes the fix is straightforward, better drainage, a change in cutting height, more light reaching the grass. Sometimes a lawn is better reshaped or replaced than repeatedly treated, and that is said plainly rather than left unsaid.',
      },
      {
        type: 'paragraph',
        text: 'Grass cutting is available as a standalone service for anyone who manages the rest of the garden themselves, as well as part of a wider garden maintenance arrangement.',
      },
    ],
    relatedServices: ['lawn-maintenance', 'garden-maintenance'],
    relatedAreas: ['bearsden', 'milngavie', 'renfrew', 'inchinnan', 'linwood', 'bishopton'],
  },
  {
    slug: 'why-new-build-gardens-struggle-early-years',
    title: 'Why New-Build Gardens Struggle in Their First Few Years',
    category: 'New builds',
    metaDescription:
      'Why turf on new-build estates like Dargavel in Bishopton often struggles, what compaction and thin topsoil actually do to a lawn, and what helps.',
    publishDate: '2025-04-22',
    excerpt:
      'A new-build lawn that looked fine on handover day and struggled ever since is one of the most common jobs across this area. The cause is usually underneath the grass, not on top of it.',
    image: '/images/rear-garden-groundworks-1.jpg',
    imageAlt: 'Groundworks in a rear garden with soil being reworked before new landscaping goes in',
    body: [
      {
        type: 'paragraph',
        text: 'New-build turf, particularly on estates like Dargavel in Bishopton, often struggles through its first few years. It is rarely a fault with the grass itself. The problem is almost always underneath it: turf laid over thin topsoil, with heavy machinery having compacted the ground during construction, gives roots very little to work with.',
      },
      {
        type: 'heading',
        text: 'What compaction actually does',
      },
      {
        type: 'paragraph',
        text: 'Compacted ground drains poorly and holds water at the surface, which is exactly the environment moss and shallow-rooted weeds prefer. It also restricts how far grass roots can reach, so the lawn becomes more vulnerable to drying out in a dry spell and struggling in a wet one, sometimes in the same season.',
      },
      {
        type: 'paragraph',
        text: 'Getting a new-build garden working usually starts underneath rather than on the surface. Relieving compaction and improving the growing medium does far more for a struggling lawn than repeated surface treatments aimed at symptoms rather than the cause.',
      },
      {
        type: 'heading',
        text: 'Adding the structure a new garden was never given',
      },
      {
        type: 'paragraph',
        text: 'New-build plots are also frequently handed over as a bare rectangle of turf and fencing, with no beds, paths or planting structure at all. Once the ground itself is in better shape, the useful next step is usually adding that structure: a defined bed, a path laid on the route that is already being worn into the grass, and planting that will eventually provide some shelter and privacy as boundaries mature.',
      },
      {
        type: 'paragraph',
        text: 'None of this can be judged from a description or a photograph. Levels, drainage and what the ground is actually made of matter more than anything else, which is why a visit comes before any quote.',
      },
    ],
    relatedServices: ['lawn-maintenance', 'landscaping', 'planting'],
    relatedAreas: ['bishopton', 'erskine'],
  },
  {
    slug: 'sloping-gardens-what-actually-helps',
    title: 'Sloping Gardens: What Actually Helps',
    category: 'Landscaping',
    metaDescription:
      'Practical options for a steep or sloping garden, drawn from landscaping work on the terraced streets around Clydebank and similar hillside plots.',
    publishDate: '2025-06-05',
    excerpt:
      'A garden that climbs sharply away from the house brings a specific set of problems: mowing safely, stopping mulch washing away, and keeping retaining edges intact. Here is what tends to actually work.',
    image: '/images/rear-garden-after-9.jpg',
    imageAlt: 'Sandstone steps and glass balustrade detail built into a sloping garden patio',
    body: [
      {
        type: 'paragraph',
        text: 'Some parts of this area sit on ground that climbs sharply away from the house. Between Kilbowie and Radnor Park in Clydebank, for example, gardens are frequently terraced, stepped or simply steep, and that changes almost everything about how a garden is worked and improved.',
      },
      {
        type: 'heading',
        text: 'The everyday problems a steep garden creates',
      },
      {
        type: 'list',
        items: [
          'Mowing a bank safely, without the mower slipping or the person behind it losing footing.',
          'Soil and mulch washing down the slope after heavy rain, undoing planting work within a season.',
          'Retaining edges and steps that were never built to hold, gradually failing under wet ground and freeze-thaw cycles.',
        ],
      },
      {
        type: 'heading',
        text: 'What actually helps',
      },
      {
        type: 'paragraph',
        text: 'Reworking a steep garden into something with at least one usable flat area is one of the more common landscaping requests on hillside plots. Cutting in a level terrace, even a modest one, turns a garden that is only really looked at from a window into one that can actually be used for sitting out or for children to play in.',
      },
      {
        type: 'paragraph',
        text: 'Where a full terrace is not realistic, the practical work is usually about the details that stop a slope failing: proper retaining edges rather than loose timber or stacked stone, ground cover planting with roots that hold soil in place, and drainage that takes water off the slope rather than letting it run straight down and take the topsoil with it.',
      },
      {
        type: 'paragraph',
        text: 'It is worth saying plainly that sloping ground takes longer to work on than the plot size alone suggests, and that is reflected honestly in any quote rather than being a surprise partway through the job.',
      },
    ],
    relatedServices: ['landscaping', 'garden-improvements'],
    relatedAreas: ['clydebank', 'old-kilpatrick', 'bowling'],
  },
  {
    slug: 'hedge-cutting-and-new-planting-aftercare-timing',
    title: 'Getting the Timing Right for Hedge Cutting and New Planting',
    category: 'Planting & hedging',
    metaDescription:
      'When to cut a hedge, what new planting actually needs in its first two seasons, and why aftercare matters more than the planting itself.',
    publishDate: '2025-07-18',
    excerpt:
      'A hedge cut at the wrong point in the year, or a new planting scheme left to fend for itself, causes more problems than people expect. Timing and aftercare matter more than most people assume.',
    image: '/images/rear-garden-after-2.jpg',
    imageAlt: 'Two raised block-edged planting beds set in gold gravel in a rear garden',
    body: [
      {
        type: 'paragraph',
        text: 'Two of the most common ways a good planting job goes wrong afterwards have nothing to do with what went in the ground. They are timing and aftercare, and both are more forgiving to get right than most people assume once you know what to look for.',
      },
      {
        type: 'heading',
        text: 'Hedge timing',
      },
      {
        type: 'paragraph',
        text: 'Hedges are best trimmed at the right point in their own growth cycle rather than whenever a visit happens to be convenient. Cut too early in the season and a hedge can put on a fresh flush of growth that gets damaged by the next frost. Left too late, and what should have been a light trim becomes a much harder cut-back, which is more stressful for the plant and takes longer to recover from.',
      },
      {
        type: 'heading',
        text: 'Why aftercare matters more than the planting itself',
      },
      {
        type: 'paragraph',
        text: 'Aftercare matters more than most people expect in the first two seasons after new planting goes in, particularly for hedging. A newly planted hedge or shrub has a limited root system and depends on watering, mulching and formative pruning at the right points to establish properly.',
      },
      {
        type: 'list',
        items: [
          'Watering through the first dry spells, even in a generally wet climate, since new roots have not yet reached deeper moisture.',
          'Mulching to hold moisture in and suppress the weeds that would otherwise compete with young plants for water and nutrients.',
          'Formative pruning in the first year or two, which shapes how a hedge or shrub develops rather than correcting problems later.',
        ],
      },
      {
        type: 'paragraph',
        text: 'What a new planting scheme will need is explained at the time it goes in, and it can be picked up as part of a regular garden maintenance arrangement for anyone who would rather not manage it themselves through those first two seasons.',
      },
    ],
    relatedServices: ['planting', 'garden-maintenance'],
    relatedAreas: ['paisley', 'houston', 'bridge-of-weir'],
  },
  {
    slug: 'why-garden-quotes-are-given-on-site',
    title: 'Why Garden Quotes Are Given After a Visit, Not Over the Phone',
    category: 'Pricing & quotes',
    metaDescription:
      'Why a phone quote for landscaping or garden maintenance is always a guess, and what actually gets assessed during an on-site visit before a price is given.',
    publishDate: '2025-08-29',
    excerpt:
      'A price given over the phone for garden work is a guess, not a quote. Here is what actually changes the cost of a job, and why none of it is visible from a description.',
    image: '/images/rear-garden-after-7.jpg',
    imageAlt: 'Sandstone patio, gold gravel and raised planting beds in a finished rear garden landscaping project',
    body: [
      {
        type: 'paragraph',
        text: 'It is a reasonable question to ask for a rough price over the phone before arranging a visit, and it is also, honestly, a question that cannot be answered accurately. In this line of work, a price given without seeing the garden is a guess rather than a quote.',
      },
      {
        type: 'heading',
        text: "What actually changes a job's price",
      },
      {
        type: 'list',
        items: [
          'Access: whether a garden is reached through a close, a shared lane or a narrow side gate limits what equipment and materials can be brought in, which changes how a job has to be done.',
          'Levels and ground conditions: a slope, poor drainage or compacted soil all add time that a flat, well-drained garden would not need.',
          'How much clearance is needed: a garden that has been left for a season or more is a different job to one that has simply been ticking along.',
        ],
      },
      {
        type: 'paragraph',
        text: 'None of this is reliably visible from a description or a photograph, which is why every quote follows a visit to the property. Seeing the space first means the price that gets discussed reflects the actual work rather than a figure that has to be revised once the job is underway.',
      },
      {
        type: 'heading',
        text: 'No obligation either way',
      },
      {
        type: 'paragraph',
        text: 'There is no charge for the visit and no obligation to go ahead with anything afterwards. Work is available as a one-off, a clearance, a tidy-up before a sale or an event, a single landscaping project, or as a regular arrangement through the growing season. Whichever it is, the same principle applies: the garden gets seen before a number gets attached to it.',
      },
    ],
    relatedServices: ['landscaping', 'garden-maintenance', 'garden-improvements'],
    relatedAreas: [],
  },
];

export const blogSlugs = blogPosts.map((p) => p.slug);

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

/** Posts in publish order, newest first. */
export const blogPostsByDate = [...blogPosts].sort(
  (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
);
