export type Faq = { question: string; answer: string };

export type Service = {
  slug: string;
  name: string;
  navLabel: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  intro: string;
  body: string[];
  benefits: { title: string; text: string }[];
  expect: string[];
  faqs: Faq[];
  relatedAreas: string[];
};

export const services: Service[] = [
  {
    slug: 'landscaping',
    name: 'Landscaping',
    navLabel: 'Landscaping',
    shortDescription:
      'Reshaping tired outdoor space into something usable: levels, edges, surfaces and planting worked out on site.',
    metaTitle: 'Landscaping Glasgow & Renfrewshire | Scotia Maintenance',
    metaDescription:
      'Landscaping across Glasgow, Paisley, Renfrew and surrounding towns. Reshaping gardens, levels, edges and planting. Call Scotia Maintenance on 07766 636189.',
    image: '/images/rear-garden-after-7.jpg',
    imageAlt:
      'Landscaped rear garden in the Glasgow area with a sandstone patio, gold gravel and raised planting beds',
    intro:
      'Landscaping is the work of changing the shape of a garden rather than simply tidying it. Scotia Maintenance takes on landscaping projects across Glasgow and the surrounding towns, from a single awkward corner through to a full rear garden that has never really worked for the people living with it.',
    body: [
      'Most gardens in this part of Scotland were laid out for a different life than the one being lived in them now. A long, narrow strip behind a terrace, a sloping back green that drops away from the house, a lawn that has crept over its edges until the shape has been lost entirely: these are the situations landscaping is for. The starting point is always a visit. Levels, drainage, access and what the ground is actually made of matter far more than any drawing, and none of them can be judged from a photograph.',
      'A landscaping project might involve stripping out overgrown or failed planting, cutting in new lawn shapes and edges, reworking levels so a slope becomes usable, laying paths and hard surfaces where they are needed, and replanting borders so the garden holds together through the year. The scale is set by the garden and the budget rather than by a fixed package. Some jobs are a day of clearance and reshaping. Others are staged over several visits so the work spreads out sensibly.',
      'The west of Scotland puts particular demands on a landscaped garden. Rainfall is high, many gardens sit on heavy clay that holds water through winter, and exposed plots near the Clyde take a constant salt-laden wind. Work that ignores those conditions tends to look fine for a season and then fail. Falls are set so water runs away from the house, edges are put in so they hold rather than collapse into the beds after the first wet spell, and planting is chosen to cope with a Scottish winter rather than a catalogue photograph.',
      'Quotes are given after seeing the garden, with the work described plainly so it is clear what is included. If a garden needs staging across a few visits, that is said upfront rather than discovered halfway through.',
    ],
    benefits: [
      {
        title: 'A garden shaped for how you use it',
        text: 'Space planned around seating, drying, storage, children or access rather than left as one undefined lawn.',
      },
      {
        title: 'Drainage considered from the start',
        text: 'Levels and falls set so water moves away from the house and the ground stays workable through a west of Scotland winter.',
      },
      {
        title: 'Edges and surfaces that hold',
        text: 'Lawn edges, paths and beds put in so they keep their line instead of breaking down after one wet season.',
      },
      {
        title: 'Planting suited to the site',
        text: 'Species chosen for the exposure, soil and light your garden actually has, not a generic border scheme.',
      },
    ],
    expect: [
      'A visit to look at the garden, the access and the ground before anything is priced.',
      'A clear description of the work, what is included and roughly how long it will take.',
      'Materials and green waste dealt with as part of the job, not left behind.',
      'Work carried out between 8am and 4pm, seven days a week.',
    ],
    faqs: [
      {
        question: 'Do you design the garden as well as build it?',
        answer:
          'Scotia Maintenance works out the layout with you on site rather than issuing formal design drawings. Levels, shapes, surfaces and planting positions are agreed in person, which suits most domestic gardens and keeps the cost in the work itself.',
      },
      {
        question: 'How long does a landscaping project take?',
        answer:
          'Most domestic landscaping projects run from one day to around a week, depending on size, access and how much clearance is needed. A firmer timescale is given once the garden has been seen.',
      },
      {
        question: 'Can you landscape a sloping garden?',
        answer:
          'Yes. Sloping gardens are common across Glasgow and the surrounding towns, and reworking levels so a slope becomes usable is a normal part of landscaping work.',
      },
      {
        question: 'Which areas do you cover for landscaping?',
        answer:
          'Landscaping is available across Glasgow, Paisley, Renfrew, Erskine, Clydebank, Bearsden, Milngavie, Dumbarton and the other towns listed on the site, seven days a week from 8am to 4pm.',
      },
    ],
    relatedAreas: ['glasgow', 'paisley', 'renfrew', 'bearsden', 'east-kilbride'],
  },
  {
    slug: 'garden-maintenance',
    name: 'Garden maintenance',
    navLabel: 'Garden maintenance',
    shortDescription:
      'Regular visits that keep a garden under control: cutting, edging, weeding, pruning and clearing, on a rhythm that suits the space.',
    metaTitle: 'Garden Maintenance Glasgow & Paisley | Scotia Maintenance',
    metaDescription:
      'Regular garden maintenance across Glasgow, Paisley, Renfrew and nearby towns. Cutting, edging, weeding, pruning and clearing. Call 07766 636189.',
    image: '/images/front-garden-after-1.jpg',
    imageAlt:
      'Well-kept front garden with a clean granite-edged bed and gravel finish after a maintenance visit',
    intro:
      'Garden maintenance is the ongoing work that stops a garden getting away from you. Scotia Maintenance takes on regular and one-off maintenance across Glasgow and the surrounding towns, with visits set at a frequency that matches the garden rather than a standard contract.',
    body: [
      'A garden in the west of Scotland grows hard from April to October. Grass in a wet spring can put on enough growth in ten days to make a mower struggle, hedges thicken quickly, and beds that were clear in May are full by July. Left alone for a season, a manageable garden turns into a clearance job. Regular maintenance is simply the cheaper and less disruptive version of the same work.',
      'A typical visit covers cutting the grass, tidying the edges where lawn meets path or border, weeding beds, cutting back growth that is spilling over paths or windows, and clearing arisings so nothing is left sitting in a pile. Hedges are trimmed at the right point in the season. In autumn the emphasis moves to leaf clearance, cutting back and getting the garden into a state where winter does not do damage. In winter, visits become less frequent but still useful for gutters lines, overhanging growth and general tidying.',
      'Frequency depends on the garden. A small enclosed plot might need a visit every three or four weeks through the growing season. A larger garden with hedges, mature trees and long borders often needs fortnightly attention from spring through autumn. Some customers want a single tidy-up before a family event, a property viewing or the end of a tenancy, and that is equally straightforward to arrange.',
      'The service also suits people who like their garden but no longer want to do the heavy or repetitive parts of it: the hedge that needs a ladder, the grass that has become too much, the corner that gets away every year. Maintenance can be arranged around exactly those tasks rather than taking the whole garden off your hands.',
    ],
    benefits: [
      {
        title: 'A garden that never gets out of hand',
        text: 'Regular visits keep growth in check so the garden never reaches the point of needing a full clearance.',
      },
      {
        title: 'Frequency set by the garden',
        text: 'Weekly, fortnightly, monthly or seasonal: chosen around how fast your space actually grows.',
      },
      {
        title: 'Everything cleared away',
        text: 'Cuttings, clippings and leaves dealt with as part of the visit rather than bagged and left.',
      },
      {
        title: 'Seven-day availability',
        text: 'Visits between 8am and 4pm any day of the week, including weekends.',
      },
    ],
    expect: [
      'An agreed list of what each visit covers, so there is no ambiguity about the work.',
      'Grass cut, edges tidied, beds weeded and growth cut back as the season requires.',
      'Green waste removed at the end of the visit.',
      'A consistent rhythm of visits through the growing season.',
    ],
    faqs: [
      {
        question: 'How often should a garden be maintained?',
        answer:
          'Most gardens in the west of Scotland need attention every two to four weeks between April and October, and much less over winter. The right frequency depends on the size of the lawn, how much hedging there is and how quickly your beds fill up.',
      },
      {
        question: 'Do you take one-off jobs or only regular visits?',
        answer:
          'Both. One-off tidy-ups before a sale, a viewing, an event or the end of a tenancy are common, and there is no obligation to set up a recurring arrangement.',
      },
      {
        question: 'Do you take the garden waste away?',
        answer:
          'Yes. Clearing arisings is part of the visit, so cuttings and clippings are not left sitting in the garden.',
      },
      {
        question: 'Can you maintain a garden I do not live at?',
        answer:
          'Yes. Maintenance is regularly carried out at rental properties, second homes and properties being prepared for sale, with arrangements made by phone or email.',
      },
    ],
    relatedAreas: ['paisley', 'glasgow', 'rutherglen', 'johnstone', 'clydebank'],
  },
  {
    slug: 'lawn-maintenance',
    name: 'Lawn and grass maintenance',
    navLabel: 'Lawn maintenance',
    shortDescription:
      'Cutting, edging and grass care that keeps a lawn even, healthy and usable through a wet Scottish season.',
    metaTitle: 'Lawn Maintenance Glasgow & Renfrew | Scotia Maintenance',
    metaDescription:
      'Lawn and grass maintenance across Glasgow, Renfrew, Erskine and surrounding areas. Regular cutting, edging and grass care. Call 07766 636189.',
    image: '/images/front-garden-after-2.jpg',
    imageAlt: 'Neatly cut lawn edge alongside a finished porcelain path and gravel border',
    intro:
      'Grass is the single biggest job in most Scottish gardens. Scotia Maintenance provides lawn and grass maintenance across Glasgow and the surrounding towns, covering regular cutting, edging and the wider care that keeps a lawn even and usable rather than patchy and waterlogged.',
    body: [
      'The growing season here is long and wet. Grass often starts moving in March and is still growing into November, and a fortnight of mild rain in June can put on more growth than a domestic mower is comfortable with. Cutting on a consistent rhythm keeps the sward dense and even. Cutting only when the grass has already got long tends to leave a yellowed, uneven finish and encourages moss and weeds to take the gaps.',
      'A lawn visit covers cutting at a height appropriate to the season, cutting in the edges where the lawn meets beds, paths and fences, and clearing the clippings. Edges make more difference to how a lawn looks than almost anything else: a straightforward cut with a clean edge reads as a well-kept garden, while a good cut with ragged edges does not.',
      'Beyond cutting, common grass problems in this area are moss, compaction and poor drainage. Shaded gardens under mature trees in places like Bearsden and Milngavie hold moss badly. Flat, low-lying gardens on heavy ground in Renfrew, Inchinnan and Linwood can sit wet for weeks. New-build lawns, particularly turf laid over thin topsoil on estates like Dargavel in Bishopton, often struggle in their first few years. These issues are assessed on site and dealt with practically, improving what is there where that is realistic, and being honest where a lawn would be better reshaped or replaced.',
      'Grass cutting is also available as a standalone arrangement for people who manage the rest of the garden themselves and simply want the mowing taken care of through the season.',
    ],
    benefits: [
      {
        title: 'A consistent cutting rhythm',
        text: 'Regular visits through the growing season keep the sward even instead of alternating between overgrown and scalped.',
      },
      {
        title: 'Edges cut in every visit',
        text: 'Clean lines where the lawn meets beds, paths and fences: the detail that makes a garden look kept.',
      },
      {
        title: 'Practical answers to moss and wet ground',
        text: 'Shade, compaction and drainage assessed on site, with honest advice about what will and will not improve.',
      },
      {
        title: 'Grass cutting on its own',
        text: 'Available as a standalone service if you handle the rest of the garden yourself.',
      },
    ],
    expect: [
      'Cutting height set for the season and the condition of the grass.',
      'Edges cut in where the lawn meets borders, paths and boundaries.',
      'Clippings collected and removed.',
      'A view on any underlying moss, drainage or compaction problems.',
    ],
    faqs: [
      {
        question: 'How often should a lawn be cut in Scotland?',
        answer:
          'Roughly every one to two weeks from April to September, and less often either side of that. The west of Scotland has a long, wet growing season, so lawns here usually need cutting later into autumn than gardens further south.',
      },
      {
        question: 'Can you deal with a mossy lawn?',
        answer:
          'Moss can usually be reduced by improving cutting, drainage and light where those are the underlying causes. It is assessed on site, and if a lawn is too far gone for treatment to be worthwhile, that is said plainly.',
      },
      {
        question: 'Will you cut a lawn that has been left to grow long?',
        answer:
          'Yes. Overgrown lawns are taken down in stages where necessary so the grass is not scalped, and the arisings are cleared as part of the work.',
      },
      {
        question: 'Do you offer grass cutting only?',
        answer:
          'Yes. Grass cutting can be arranged as a standalone service without the rest of the garden maintenance package.',
      },
    ],
    relatedAreas: ['renfrew', 'erskine', 'bishopton', 'milngavie', 'linwood'],
  },
  {
    slug: 'garden-improvements',
    name: 'Garden improvements',
    navLabel: 'Garden improvements',
    shortDescription:
      'Targeted changes that fix the one thing not working: a failing edge, a muddy route, a dead corner, an awkward level.',
    metaTitle: 'Garden Improvements Glasgow Area | Scotia Maintenance',
    metaDescription:
      'Garden improvement work across Glasgow and surrounding towns. Paths, edges, levels, beds and problem corners fixed. Call Scotia Maintenance on 07766 636189.',
    image: '/images/rear-garden-after-3.jpg',
    imageAlt:
      'Improved rear garden with a new sandstone patio leading to a repainted garden shed',
    intro:
      'Not every garden needs redesigning. Often one thing is wrong: a route that turns to mud every winter, a bed that has lost its shape, a corner nothing will grow in, a step that has become unsafe. Scotia Maintenance takes on garden improvement work of exactly that kind across Glasgow and the surrounding areas.',
    body: [
      'Improvement work sits between maintenance and full landscaping. It is for the jobs that regular visits will never solve because the underlying arrangement is the problem, but which do not justify starting the whole garden again. Common examples include putting in a path across a worn line of grass, re-cutting and edging beds that have blurred into the lawn, levelling a dip that collects water, replacing a rotten or collapsing edge, opening up an overgrown boundary, or clearing and replanting a section that has been given up on.',
      'These jobs tend to have a disproportionate effect. A garden can look neglected because of one failed element while everything around it is perfectly sound. Fixing the route from the back door to the shed, or reinstating a proper edge along a long border, often changes how the whole space reads and how much it gets used.',
      'The approach is practical. The garden is looked at, the cause of the problem is identified rather than just the symptom, and the work is priced on that basis. A wet patch caused by a downpipe discharging onto the lawn is a different job from a wet patch caused by compacted clay, and treating them the same wastes money. Where a problem is genuinely not worth fixing, or where the sensible answer is to live with it, that gets said.',
      'Improvement work can be carried out as a one-off or combined with an existing maintenance arrangement, taking a section of the garden at a time so the cost is spread across the year.',
    ],
    benefits: [
      {
        title: 'Fixes the cause, not the symptom',
        text: 'Drainage, wear and level problems traced back to why they are happening before anything is priced.',
      },
      {
        title: 'Proportionate to the problem',
        text: 'Work scoped to the specific issue rather than expanded into a full garden project.',
      },
      {
        title: 'Can be staged',
        text: 'A section at a time, spread across the year, alongside regular maintenance visits.',
      },
      {
        title: 'Restores how the garden is used',
        text: 'Routes, edges and usable corners brought back so the space works again day to day.',
      },
    ],
    expect: [
      'A look at the problem area and an explanation of what is causing it.',
      'A clear price for the specific work, described in plain terms.',
      'Materials, spoil and waste handled as part of the job.',
      'Honest advice where a problem is not worth the cost of fixing.',
    ],
    faqs: [
      {
        question: 'What counts as a garden improvement?',
        answer:
          'Any targeted change that fixes something not working, such as a new path, re-cut edges, a levelled dip, a replaced border edge, or a cleared and replanted corner. It is smaller in scope than full landscaping but goes beyond routine maintenance.',
      },
      {
        question: 'Can improvements be done alongside regular maintenance?',
        answer:
          'Yes. Many customers take on one improvement at a time during scheduled maintenance visits, which spreads the cost across the year.',
      },
      {
        question: 'Do you fix waterlogged areas of garden?',
        answer:
          'Wet areas are assessed on site to establish the cause, which is usually compaction, levels or water discharging in the wrong place. The fix depends on which of those it is, and that is explained before any work is quoted.',
      },
      {
        question: 'Which areas do you cover for improvement work?',
        answer:
          'Garden improvements are carried out across Glasgow, Paisley, Renfrew, Clydebank, Bearsden, Milngavie, Dumbarton, East Kilbride and the other towns listed on the site.',
      },
    ],
    relatedAreas: ['milngavie', 'bearsden', 'kilmacolm', 'houston', 'glasgow'],
  },
  {
    slug: 'planting',
    name: 'Planting',
    navLabel: 'Planting',
    shortDescription:
      'Beds, borders, hedging and shrubs chosen for the exposure, soil and light your garden actually has.',
    metaTitle: 'Garden Planting Glasgow & West Scotland | Scotia Maintenance',
    metaDescription:
      'Planting for beds, borders and hedging across Glasgow and surrounding towns, chosen to suit Scottish conditions. Call Scotia Maintenance on 07766 636189.',
    image: '/images/rear-garden-after-10.jpg',
    imageAlt: 'Raised planting bed with a potted hydrangea in a newly landscaped garden',
    intro:
      'Planting is what stops a landscaped garden looking bare and gives a maintained one some structure. Scotia Maintenance carries out planting work across Glasgow and the surrounding towns: new beds and borders, hedging, shrubs and replacement planting where things have failed.',
    body: [
      'The decisions that matter in planting are made before anything goes in the ground. Exposure, soil, light and drainage vary enormously across this area, and often across a single garden. A sheltered south-facing back garden in the Southside of Glasgow supports plants that would be shredded within a season on an exposed riverside plot at Langbank or Erskine. Ground under mature beech in Bearsden is dry and shaded in a way that catalogue planting schemes rarely account for. Heavy clay in low-lying parts of Renfrewshire drowns anything that needs sharp drainage.',
      'Planting work therefore starts with what the site is, not with a plant list. Ground is prepared properly, which on compacted or clay-heavy soil usually matters more than the plants themselves. Species are chosen to cope with west of Scotland rainfall and wind, and positioned with their eventual size in mind so a border does not need ripping out in five years because everything was planted too close together.',
      'Common work includes putting in new borders where there is currently only lawn or bare ground, planting hedging for shelter, screening or boundaries, replacing shrubs that have died back or outgrown their position, and filling gaps in established beds. Where planting is part of a larger landscaping project it is carried out as the final stage, once levels, edges and surfaces are in.',
      'Aftercare matters more than most people expect in the first two seasons, particularly for hedging. What a new planting scheme will need (watering, mulching, formative pruning) is explained at the time, and it can be picked up as part of a regular garden maintenance arrangement if you would rather not manage it yourself.',
    ],
    benefits: [
      {
        title: 'Chosen for your conditions',
        text: 'Exposure, soil, drainage and light assessed on site before any species are proposed.',
      },
      {
        title: 'Ground prepared properly',
        text: 'On clay and compacted soil, preparation does more for long-term success than the plants themselves.',
      },
      {
        title: 'Spaced for eventual size',
        text: 'Planting positioned so borders and hedges still work in five years rather than needing thinned out.',
      },
      {
        title: 'Aftercare explained',
        text: 'Watering, mulching and pruning needs set out clearly, and available as part of a maintenance arrangement.',
      },
    ],
    expect: [
      'A site assessment covering soil, exposure, light and drainage.',
      'Plant choices explained in plain terms, with reasons.',
      'Beds prepared and planted, with waste and packaging cleared.',
      'Clear aftercare guidance for the first two growing seasons.',
    ],
    faqs: [
      {
        question: 'When is the best time to plant in the west of Scotland?',
        answer:
          'Autumn and early spring are generally best, when the ground is workable but not frozen and there is enough moisture for roots to establish. Container-grown stock can go in through the summer provided it is watered properly.',
      },
      {
        question: 'Can you plant hedging for screening?',
        answer:
          'Yes. Hedging for shelter, screening and boundaries is a common request, and species are chosen based on exposure, how quickly you need cover and how much trimming you are willing to take on.',
      },
      {
        question: 'What grows well in an exposed garden near the Clyde?',
        answer:
          'Wind-tolerant and salt-tolerant planting is the priority on exposed riverside plots at places like Erskine, Langbank and Bowling. Suitable species are chosen on site once the exposure has been seen.',
      },
      {
        question: 'Do you replace planting that has died?',
        answer:
          'Yes. Replacement planting in established beds is straightforward, though it is worth establishing why the original planting failed before putting the same thing back in the same place.',
      },
    ],
    relatedAreas: ['bearsden', 'langbank', 'kilmacolm', 'bridge-of-weir', 'erskine'],
  },
  {
    slug: 'outdoor-maintenance',
    name: 'General outdoor maintenance',
    navLabel: 'Outdoor maintenance',
    shortDescription:
      'The wider work around a property: clearance, tidying, seasonal jobs and the tasks that never quite get done.',
    metaTitle: 'Outdoor Maintenance Glasgow Area | Scotia Maintenance',
    metaDescription:
      'General outdoor and grounds maintenance across Glasgow and surrounding towns. Clearance, seasonal tidying and property upkeep. Call 07766 636189.',
    image: '/images/rear-garden-groundworks-6.jpg',
    imageAlt:
      'Cleared outdoor space ready for landscaping, with ground cleared and boundary fencing renewed',
    intro:
      'Not everything outside a property is strictly gardening. Scotia Maintenance takes on general outdoor maintenance across Glasgow and the surrounding areas: the clearance, seasonal work and accumulated jobs that sit outside a normal grass-cutting visit.',
    body: [
      'This covers work such as clearing overgrown ground, removing accumulated debris and garden rubbish, seasonal leaf clearance, tidying paths, driveways and hard standing, cutting back growth encroaching on fences, walls, windows and boundaries, and getting outdoor space back into a usable state after a period of neglect. It is often the first job at a property that has been empty, recently bought, or simply left through a busy year.',
      'It also suits properties where the outdoor space is not really a garden at all: a yard, a paved area, a strip of ground around a building, a communal back court, a bin store area. That kind of space still gets overgrown, still collects leaves and rubbish, and still affects how a property looks, but it rarely fits neatly into a standard gardening service.',
      'Seasonal work is a large part of it. Autumn leaf fall in the tree-lined suburbs around Bearsden, Milngavie and the west end of Glasgow is heavy and worth staying on top of, because wet leaves left on paths and grass do damage and become a slip hazard. Winter storms bring down growth. Spring brings the first surge of weeds through paths and gravel. These are all straightforward jobs, but they are exactly the ones that get postponed.',
      'Outdoor maintenance is available as a one-off clearance or as an ongoing arrangement, seven days a week between 8am and 4pm. For landlords, letting agents and people managing a property from a distance, it can be arranged and confirmed entirely by phone or email.',
    ],
    benefits: [
      {
        title: 'Covers what gardening services skip',
        text: 'Yards, paved areas, back courts and the ground around a building, not just lawns and borders.',
      },
      {
        title: 'One-off clearance available',
        text: 'Useful after a period of neglect, a property purchase, a tenancy ending or a storm.',
      },
      {
        title: 'Seasonal work handled',
        text: 'Leaf clearance, storm damage and spring weed growth dealt with at the right point in the year.',
      },
      {
        title: 'Arranged remotely',
        text: 'Suited to landlords and owners managing a property from elsewhere, organised by phone or email.',
      },
    ],
    expect: [
      'An agreed scope covering exactly which areas and tasks are included.',
      'Overgrowth, debris and waste cleared rather than moved to the corner.',
      'Paths, hard standing and boundaries left clear and usable.',
      'One-off or recurring visits, seven days a week from 8am to 4pm.',
    ],
    faqs: [
      {
        question: 'Do you clear overgrown gardens?',
        answer:
          'Yes. Clearing badly overgrown ground is a common request, and it is usually the first stage before any maintenance or landscaping work can sensibly begin.',
      },
      {
        question: 'Can you work at a property I do not live in?',
        answer:
          'Yes. Work at rental properties, empty properties and second homes is regularly arranged by phone or email without needing anyone present, provided there is access.',
      },
      {
        question: 'Do you take the waste away?',
        answer:
          'Yes. Clearing arisings and debris is part of the job, so waste is not left on site once the work is finished.',
      },
      {
        question: 'Do you carry out autumn leaf clearance?',
        answer:
          'Yes. Leaf clearance is a regular autumn job, particularly in the tree-lined areas around Bearsden, Milngavie and the west end of Glasgow where leaf fall is heavy.',
      },
    ],
    relatedAreas: ['clydebank', 'glasgow', 'dumbarton', 'old-kilpatrick', 'bowling'],
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
