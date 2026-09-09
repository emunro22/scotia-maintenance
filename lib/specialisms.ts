/**
 * The full list of services Scotia Maintenance is listed under on Google,
 * grouped beneath the six core service pages.
 *
 * These are capabilities rather than separate pages: each description is short,
 * and thirty-four thin pages would compete with the service pages they belong
 * to. They are surfaced on /services and on every area page instead, so each
 * term appears on the site alongside the town it is offered in.
 */
export type Specialism = {
  slug: string;
  name: string;
  description: string;
  /** Slug of the core service page this sits under. */
  service: string;
};

export const specialisms: Specialism[] = [
  {
    slug: 'garden-landscaping',
    name: 'Garden landscaping',
    description:
      'Patios, paths, turf, artificial grass, decking, fencing, walls, planting and drainage, all handled by one team. From a tidy-up to a complete transformation.',
    service: 'landscaping',
  },
  {
    slug: 'hardscaping',
    name: 'Hardscaping',
    description:
      'Patios, paving, driveways, steps, retaining walls, raised beds and stonework, built on solid foundations with proper drainage. The structure that makes a garden usable year-round.',
    service: 'landscaping',
  },
  {
    slug: 'landscape-installations',
    name: 'Landscape installations',
    description:
      'Installation carried out by our own team, not subcontractors. Paving, turf, artificial grass, decking, fencing, walls, steps, planting and lighting installed to plan, to our design or yours.',
    service: 'landscaping',
  },
  {
    slug: 'garden-design',
    name: 'Garden design',
    description:
      'We survey the plot, discuss how you actually want to use it, then plan levels, planting, paving and lawn into one workable layout. Design only, or design and build.',
    service: 'landscaping',
  },
  {
    slug: 'landscaping-design',
    name: 'Landscaping design',
    description:
      'Design that turns an awkward or unused garden into a space that works. We plan zones, levels, access and planting around how you actually live, then give clear costings.',
    service: 'landscaping',
  },
  {
    slug: 'landscape-design',
    name: 'Landscape design',
    description:
      'For larger domestic plots and commercial grounds: site survey, levels, drainage strategy, planting plan and material choices set out clearly before any work starts.',
    service: 'landscaping',
  },
  {
    slug: 'green-landscaping',
    name: 'Green landscaping',
    description:
      'Permeable surfaces, native planting, wildflower areas and sustainable drainage. Gardens that manage rainwater properly and support local wildlife.',
    service: 'landscaping',
  },
  {
    slug: 'desert-landscaping',
    name: 'Desert landscaping',
    description:
      'Low-water gravel and rockery landscaping. Decorative aggregate, stone beds and drought-tolerant planting for a garden that needs almost no upkeep. Suits dry, sunny or awkward plots.',
    service: 'landscaping',
  },
  {
    slug: 'rock-landscaping',
    name: 'Rock landscaping',
    description:
      'Rockeries, feature stone, decorative aggregate and alpine planting for a low-maintenance garden with real texture. Works well on slopes and in dry corners.',
    service: 'landscaping',
  },
  {
    slug: 'stone-landscaping',
    name: 'Stone landscaping',
    description:
      'Whinstone, sandstone, slate and granite used for paving, walls, edging, steps and features. A hard-wearing, traditional finish that suits Scottish homes.',
    service: 'landscaping',
  },
  {
    slug: 'pool-landscaping',
    name: 'Pool landscaping',
    description:
      'Surrounds for pools, hot tubs and outdoor spas. Non-slip paving, bases, screening, decking and planting built to handle water and stay private.',
    service: 'landscaping',
  },

  {
    slug: 'gardening-services',
    name: 'Gardening services',
    description:
      'Regular gardening for homes and businesses. Grass cutting, hedge trimming, weeding, pruning, border upkeep, leaf clearance and green waste removal, weekly, fortnightly or monthly.',
    service: 'garden-maintenance',
  },
  {
    slug: 'landscaping-maintenance',
    name: 'Landscaping maintenance',
    description:
      'Keeping a finished garden looking the way it did on day one. Lawn care, border upkeep, hedge trimming, pressure washing of paving and seasonal tidy-ups, regular or one-off.',
    service: 'garden-maintenance',
  },
  {
    slug: 'groundskeeping',
    name: 'Groundskeeping',
    description:
      'Commercial groundskeeping for estates, developments, schools, offices and communal grounds. Grass cutting, hedge and shrub maintenance, weed control, litter picking and seasonal clearance on a scheduled contract.',
    service: 'garden-maintenance',
  },
  {
    slug: 'landscape-management',
    name: 'Landscape management',
    description:
      'Ongoing management for commercial sites and large gardens. Scheduled grounds maintenance, seasonal planting, pruning, weed control and annual works planning under one agreement.',
    service: 'garden-maintenance',
  },
  {
    slug: 'garden-decorating',
    name: 'Garden decorating',
    description:
      'Colour and character brought to an existing space. Planting schemes, raised beds, borders, decorative stone, lighting, screening and feature areas, without a full rebuild.',
    service: 'garden-maintenance',
  },

  {
    slug: 'lawn-care',
    name: 'Lawn care',
    description:
      'Cutting, scarifying, aerating, top dressing, feeding, moss control and weed treatment on a schedule that suits your grass. The fix for patchy, mossy or tired lawns.',
    service: 'lawn-maintenance',
  },
  {
    slug: 'sod-installation',
    name: 'Turfing and sod installation',
    description:
      'We strip the old surface, level and prepare the soil, then lay quality turf with tight joints and a firm roll. An instant lawn, ready to use within weeks.',
    service: 'lawn-maintenance',
  },
  {
    slug: 'grass-seeding',
    name: 'Grass seeding',
    description:
      'We prepare and level the ground, apply the right seed mix for Scottish conditions and feed it in, then advise on aftercare. A cost-effective route to a healthy lawn.',
    service: 'lawn-maintenance',
  },
  {
    slug: 'hydroseeding',
    name: 'Hydroseeding',
    description:
      'For large lawns, banks, verges and new-build plots: a seed, mulch and nutrient slurry sprayed over prepared ground for fast, even coverage where turf is impractical.',
    service: 'lawn-maintenance',
  },
  {
    slug: 'artificial-turf-installation',
    name: 'Artificial turf installation',
    description:
      'We excavate, lay a compacted sub-base and fit quality turf with proper joints and edging. A tidy, low-maintenance lawn that stays green through the Scottish winter.',
    service: 'lawn-maintenance',
  },
  {
    slug: 'lawn-landscaping',
    name: 'Lawn landscaping',
    description:
      'Lawns from the ground up. We level and prepare the soil, install drainage where needed, then lay turf, seed or artificial grass with proper edging so it drains and lasts.',
    service: 'lawn-maintenance',
  },

  {
    slug: 'driveway-landscaping',
    name: 'Driveway landscaping',
    description:
      'Monoblock, resin, slabbed and gravel driveways installed on a proper sub-base with correct falls and drainage. Kerbs, edging and planting finished to match the house.',
    service: 'garden-improvements',
  },
  {
    slug: 'driveway-or-path-paving',
    name: 'Driveway and path paving',
    description:
      'Monoblock, natural stone, porcelain and slab laid on a compacted, well-drained base so nothing sinks or shifts. Neat cuts, clean edges and a tidy site at the end.',
    service: 'garden-improvements',
  },
  {
    slug: 'path-landscaping',
    name: 'Path landscaping',
    description:
      'Paths and walkways in slab, natural stone, porcelain, gravel or resin, laid on a compacted base with correct falls and edging. Side access, bin paths and feature routes.',
    service: 'garden-improvements',
  },
  {
    slug: 'retaining-walls',
    name: 'Retaining walls',
    description:
      'Built in block, brick, natural stone, sleeper or gabion. Properly founded and drained so they hold back ground safely for the long term. Ideal for terracing a slope.',
    service: 'garden-improvements',
  },
  {
    slug: 'outdoor-step-construction',
    name: 'Outdoor step construction',
    description:
      'Steps in stone, slab, brick, timber or concrete. Safe, even risers on solid foundations with non-slip finishes, plus handrails and lighting where required.',
    service: 'garden-improvements',
  },
  {
    slug: 'outdoor-water-feature-design',
    name: 'Outdoor water features',
    description:
      'Ponds, rills, cascades and self-contained features built with proper lining, pumps and power, then planted and finished into the surrounding garden.',
    service: 'garden-improvements',
  },
  {
    slug: 'concrete-masonry',
    name: 'Concrete and masonry',
    description:
      'Driveways, shed and garage bases, foundations and garden structures. Properly formed, reinforced and finished to handle Scottish weather.',
    service: 'garden-improvements',
  },
  {
    slug: 'stonemasonry',
    name: 'Stonemasonry',
    description:
      'Garden walls, piers, steps, copings and feature stonework. Traditional and modern builds in natural and reconstituted stone, hand-cut and properly bedded. Repairs and rebuilds too.',
    service: 'garden-improvements',
  },

  {
    slug: 'tree-landscaping',
    name: 'Tree and shrub work',
    description:
      'Planting, pruning, crown reduction, hedge shaping and stump removal. We plant the right species for your soil and space, then keep them healthy.',
    service: 'planting',
  },

  {
    slug: 'garden-drainage',
    name: 'Garden drainage',
    description:
      'For waterlogged, boggy or poorly draining ground: French drains, soakaways, channel drains, land drains and regrading to move water away from the house. A common fix on Scottish clay.',
    service: 'outdoor-maintenance',
  },
  {
    slug: 'garden-levelling',
    name: 'Garden levelling',
    description:
      'For sloped, uneven or bumpy ground. We strip, cut, fill and compact to create a usable flat area for lawn, patio or play space, with retaining and drainage where needed.',
    service: 'outdoor-maintenance',
  },
  {
    slug: 'grading-and-resloping',
    name: 'Grading and resloping',
    description:
      'Correcting ground levels so water runs away from the property. Machine-graded, compacted and finished ready for turf, seed or paving.',
    service: 'outdoor-maintenance',
  },
];

export function specialismsByService(serviceSlug: string): Specialism[] {
  return specialisms.filter((s) => s.service === serviceSlug);
}

export function getSpecialism(slug: string): Specialism | undefined {
  return specialisms.find((s) => s.slug === slug);
}
