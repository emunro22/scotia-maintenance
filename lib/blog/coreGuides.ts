import type { BlogPost } from './types';

/** The original five guides, rewritten. Slugs and publish dates are unchanged. */
export const coreGuides: BlogPost[] = [
  {
    slug: 'how-often-to-cut-your-lawn-west-scotland',
    title: 'How Often Should You Cut Your Lawn in the West of Scotland?',
    category: 'Lawn care',
    metaDescription:
      'A month-by-month cutting schedule for lawns in Glasgow, Renfrewshire and Dunbartonshire, the one-third rule, and why moss keeps coming back on west coast ground.',
    publishDate: '2025-03-11',
    excerpt:
      'Mowing frequency is the wrong question on its own. What actually decides whether a lawn thickens up or thins out is how much leaf you take off in one pass, and how often you come back.',
    image: '/images/front-garden-after-2.jpg',
    imageAlt: 'Neatly cut lawn edge alongside a finished porcelain path and gravel border',
    body: [
      {
        type: 'paragraph',
        text: 'Ask ten people how often a lawn needs cut and you will get ten answers, most of them a number of weeks. The number is the least useful part. Grass does not respond to the calendar, it responds to how much leaf it has left after each cut, and on the west coast that changes fast enough that a fixed fortnightly slot can be right in April and badly wrong by the middle of June.',
      },
      {
        type: 'heading',
        text: 'The one rule that matters more than frequency',
      },
      {
        type: 'paragraph',
        text: 'Never take more than about a third of the leaf off in a single cut. That is the whole principle. Grass feeds itself through its leaves, and scalping it back to the crown removes the machinery it needs to recover. A lawn cut hard after three weeks of growth goes yellow, sulks for a fortnight, and hands its bare patches to moss and weeds. The same lawn cut lightly twice in that period stays green throughout and thickens as it goes.',
      },
      {
        type: 'paragraph',
        text: 'That is why frequency follows growth rate rather than the diary. If the grass has run away, the fix is two cuts a few days apart at descending heights rather than one brutal one.',
      },
      {
        type: 'heading',
        text: 'What the year actually looks like here',
      },
      {
        type: 'list',
        items: [
          'March: growth starts, often earlier than people expect. One cut at a high setting to tidy the winter off, no lower.',
          'April to May: the fastest growth of the year. Weekly to ten days, and this is where most lawns get away from people.',
          'June to August: every ten to fourteen days, though a wet warm spell can push it back to weekly.',
          'September to October: growth slows but does not stop. Fortnightly, with the height raised slightly going into autumn.',
          'November: often one last light cut. Leaving a long, wet sward through winter is how moss gets its foothold.',
        ],
      },
      {
        type: 'paragraph',
        text: 'A growing season running from March to November is longer than most of the UK gets, which is the part people moving into the area tend to underestimate. It is also why a [regular maintenance arrangement](/services/garden-maintenance) usually works out better value here than booking individual visits and discovering in July that the grass is knee high.',
      },
      {
        type: 'heading',
        text: 'Height matters as much as timing',
      },
      {
        type: 'paragraph',
        text: 'Most domestic lawns in this part of Scotland are cut too short. A longer sward shades the soil, holds moisture in a dry spell, and out-competes the weeds trying to germinate underneath it. Somewhere around 30 to 40mm through the main season suits the ryegrass mixes that dominate here, dropping slightly in high summer only if the lawn is genuinely thriving.',
      },
      {
        type: 'paragraph',
        text: 'Edges do more for how a garden reads than the cut itself. A straightforward cut with a crisp edge where the grass meets a bed, path or fence looks cared for. An immaculate cut with ragged edges does not.',
      },
      {
        type: 'quote',
        text: 'Scott and his team came and did a great job doing some work outside my house. He cut the grass, tidied up the garden area and made everything look much neater, they added planters which I hadn’t previously thought about.',
        attribution: 'Danielle davidson, Google review',
      },
      {
        type: 'heading',
        text: 'Why moss keeps winning',
      },
      {
        type: 'paragraph',
        text: 'Moss is a symptom, not a disease. It moves into ground that grass has given up on, and on this coast there are three usual reasons for that. Shade is the first: gardens under mature trees around [Bearsden](/areas/bearsden) and [Milngavie](/areas/milngavie) simply do not get the light hours grass needs to hold its ground. Wet is the second, and flat, heavy plots through [Renfrew](/areas/renfrew), [Inchinnan](/areas/inchinnan) and [Linwood](/areas/linwood) can stay saturated for weeks after heavy rain. Thin soil is the third, which is the [new-build story](/blog/why-new-build-gardens-struggle-early-years) in its own right.',
      },
      {
        type: 'paragraph',
        text: 'Killing moss without changing any of that just clears space for next year’s moss. Where the cause is water sitting on the surface, the honest answer is usually [drainage work](/services/outdoor-maintenance) rather than another season of treatments. Where it is shade, it may be that grass is the wrong surface for that corner and gravel, planting or a path is a better outcome than a strip of permanent moss.',
      },
      {
        type: 'paragraph',
        text: 'None of that can be judged from a description, which is why a lawn gets looked at before anything is promised about it. Cutting is available on its own for people who handle the rest themselves, or as part of [lawn care](/services/lawn-maintenance) that covers scarifying, aerating and feeding through the season.',
      },
    ],
    relatedServices: ['lawn-maintenance', 'garden-maintenance', 'outdoor-maintenance'],
    relatedAreas: ['bearsden', 'milngavie', 'renfrew', 'inchinnan', 'linwood', 'bishopton'],
  },

  {
    slug: 'why-new-build-gardens-struggle-early-years',
    title: 'Why New-Build Gardens Struggle in Their First Few Years',
    category: 'New builds',
    metaDescription:
      'Compaction, thin topsoil and buried construction debris are why new-build turf fails on estates like Dargavel in Bishopton. What is actually wrong and what fixes it.',
    publishDate: '2025-04-22',
    excerpt:
      'A lawn that looked perfect on handover day and has been patchy ever since is one of the most common calls in this area. The problem is almost never the grass.',
    image: '/images/rear-garden-groundworks-1.jpg',
    imageAlt: 'Groundworks in a rear garden with soil being reworked before new landscaping goes in',
    body: [
      {
        type: 'paragraph',
        text: 'There is a particular kind of disappointment that comes with a new-build garden. The turf went down days before you moved in, it looked immaculate, and within eighteen months it is thin, mossy, boggy in one corner and bone hard in another. Nothing you have done has caused it, and nothing you buy in a garden centre is going to fix it, because the problem is a foot underneath the grass.',
      },
      {
        type: 'heading',
        text: 'What is actually under the turf',
      },
      {
        type: 'paragraph',
        text: 'A plot on an estate like Dargavel in [Bishopton](/areas/bishopton) has spent two years as a construction site. Tracked machinery, material stacks and site traffic have run over that ground repeatedly, and the result is soil compressed to something closer to a road base than a growing medium. On top of that goes a thin skim of topsoil, sometimes as little as 50mm, and then turf.',
      },
      {
        type: 'list',
        items: [
          'Compaction: air gaps in the soil are crushed out, so water cannot drain through and roots cannot push down.',
          'Thin topsoil: roots reach the compacted layer within weeks and stop, leaving the lawn living off a few centimetres of soil.',
          'Buried debris: brick, mortar, plastic and offcuts left below the surface create dead patches that never respond to feeding.',
          'Levels run to the house: gardens are often finished falling towards the building rather than away from it.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Those four together explain almost every failing new-build lawn in the west of Scotland. A grass that cannot root deeper than 50mm dries out in the first warm week of summer and drowns in the first wet week of autumn, sometimes within the same month.',
      },
      {
        type: 'heading',
        text: 'Why surface treatments do not shift it',
      },
      {
        type: 'paragraph',
        text: 'Feed, moss killer and overseeding all act on the top few centimetres. If the top few centimetres are the problem, they help for a season. If the problem is that there is nowhere for roots or water to go, they change nothing, and people end up repeating the same treatment every spring wondering why it never holds.',
      },
      {
        type: 'paragraph',
        text: 'Getting a new-build garden working starts underneath. That usually means breaking up the compacted layer, bringing in a real depth of topsoil, and correcting the falls so water leaves the plot rather than pooling at the back door. Where the ground is genuinely waterlogged rather than simply tight, [drainage](/services/outdoor-maintenance) goes in before anything green does. It is less satisfying than laying turf, and it is the only part of the job that decides whether the lawn is still good in five years.',
      },
      {
        type: 'heading',
        text: 'Turf, seed or artificial from there',
      },
      {
        type: 'paragraph',
        text: 'Once the ground is right, all three routes are open. [Turf](/services/lawn-maintenance) gives an instant lawn and is usually the choice where a garden needs to be usable quickly. Seed costs less and roots better over time but wants a season of patience. [Artificial grass](/services/lawn-maintenance) is worth considering on a plot that is heavily shaded or in constant use by children and dogs, provided it is built on a proper compacted sub-base rather than rolled over the existing soil.',
      },
      {
        type: 'heading',
        text: 'The structure a new plot was never given',
      },
      {
        type: 'paragraph',
        text: 'New-build gardens are handed over as a rectangle of turf inside a fence. No beds, no paths, no screening, no shelter. Once the ground has been sorted, the work that makes the biggest difference is adding that structure: a defined bed with a proper edge, a path along the line already being worn into the grass, a patio sized for the furniture you actually own, and [planting](/services/planting) chosen for how exposed the plot is rather than what looked good in a garden centre in April.',
      },
      {
        type: 'paragraph',
        text: 'The same pattern turns up on newer estates around [Erskine](/areas/erskine) and out towards [Renfrew](/areas/renfrew). If your garden is going through it, a [visit and a free quote](/contact) will tell you what is under there, which is the part no photograph can answer.',
      },
    ],
    relatedServices: ['lawn-maintenance', 'landscaping', 'planting', 'outdoor-maintenance'],
    relatedAreas: ['bishopton', 'erskine', 'renfrew'],
  },

  {
    slug: 'sloping-gardens-what-actually-helps',
    title: 'Sloping Gardens: What Actually Helps',
    category: 'Landscaping',
    metaDescription:
      'Terracing, retaining and drainage on steep gardens around Clydebank and the Kilpatrick hills, and how to work out whether levelling or planting is the better spend.',
    publishDate: '2025-06-05',
    excerpt:
      'A steep garden is not a smaller version of a flat one. It has its own failure modes, and the fix is usually structural rather than decorative.',
    image: '/images/rear-garden-after-9.jpg',
    imageAlt: 'Sandstone steps and glass balustrade detail built into a sloping garden patio',
    body: [
      {
        type: 'paragraph',
        text: 'Plenty of gardens in this area climb away from the house rather than sitting level with it. Around Kilbowie and Radnor Park in [Clydebank](/areas/clydebank), up the hill from the river at [Old Kilpatrick](/areas/old-kilpatrick) and [Bowling](/areas/bowling), and on the older terraced streets across the west, a back garden can rise several metres over its length. That single fact changes what the space can be used for, what it costs to work on, and what will still be standing in ten years.',
      },
      {
        type: 'heading',
        text: 'How slopes actually fail',
      },
      {
        type: 'paragraph',
        text: 'A slope does not degrade evenly, it fails at specific points, and they are predictable.',
      },
      {
        type: 'list',
        items: [
          'Water takes the fastest route down, cutting channels through beds and stripping topsoil into the lowest corner of the garden.',
          'Timber edging and stacked stone put in without foundations or drainage bulge, lean and eventually give way under saturated ground.',
          'Mowing a bank is genuinely hazardous, so it gets done less often, and the grass gradually turns into rough.',
          'Steps built to no consistent rise become the reason an older resident stops using the top half of their own garden.',
        ],
      },
      {
        type: 'paragraph',
        text: 'The common thread is water and gravity working on something that was never engineered to resist them. Almost every long-term fix on a slope is about interrupting one or both.',
      },
      {
        type: 'heading',
        text: 'Terracing: the honest cost and the honest benefit',
      },
      {
        type: 'paragraph',
        text: 'Cutting one level terrace into a slope is the single change that transforms how a steep garden gets used. A garden that was previously only ever looked at through a window becomes somewhere to put a table, or somewhere children can actually play. It does not need to be the whole plot. One properly built flat area, sized for what you would realistically use it for, does more than a scheme spread thinly across the whole slope.',
      },
      {
        type: 'paragraph',
        text: 'It is also the expensive option, and worth being straight about why. Terracing means cutting into the bank, holding back what is above with a [retaining wall](/services/garden-improvements) built on real foundations with drainage behind it, and dealing with the spoil that comes out. Access is usually the deciding factor on price: a garden reachable only through the house or a narrow close means everything moves by barrow, and that is time.',
      },
      {
        type: 'heading',
        text: 'When levelling is not the right spend',
      },
      {
        type: 'paragraph',
        text: 'Sometimes the better answer is to stop fighting the slope. Ground-cover planting with roots that genuinely bind soil, [rock and gravel landscaping](/services/landscaping) that does not wash out, and a set of well-built [steps](/services/garden-improvements) to get you up and down safely can make a bank into a feature for a fraction of what terracing costs. That is often the right recommendation on a garden where the slope is steady rather than severe, or where the budget is better spent on the flat part nearer the house.',
      },
      {
        type: 'paragraph',
        text: 'Where a slope is causing water to arrive at the building, though, it stops being a garden question. Regrading so ground falls away from the house, and putting in the [drainage](/services/outdoor-maintenance) to take that water somewhere sensible, comes before anything cosmetic.',
      },
      {
        type: 'quote',
        text: 'We recently had Scott and his team from Scotia Maintenance carry out work in my uncle’s back garden, including laying a brand-new patio and new slabbing. The finished work looks fantastic and has completely transformed the garden.',
        attribution: 'Daniel McCrory, Google review',
      },
      {
        type: 'paragraph',
        text: 'Sloping ground takes longer to work than its square meterage suggests, and that is said up front rather than appearing partway through the job. It is one of the clearest examples of [why quotes follow a visit](/blog/why-garden-quotes-are-given-on-site) instead of a phone call.',
      },
    ],
    relatedServices: ['landscaping', 'garden-improvements', 'outdoor-maintenance'],
    relatedAreas: ['clydebank', 'old-kilpatrick', 'bowling', 'dumbarton'],
  },

  {
    slug: 'hedge-cutting-and-new-planting-aftercare-timing',
    title: 'Getting the Timing Right for Hedge Cutting and New Planting',
    category: 'Planting & hedging',
    metaDescription:
      'When to cut a hedge in Scotland, the nesting season rules that apply, and what new planting genuinely needs through its first two years to establish.',
    publishDate: '2025-07-18',
    excerpt:
      'Most planting that fails was planted correctly. What went wrong came afterwards, in the first two seasons, and usually came down to water.',
    image: '/images/rear-garden-after-2.jpg',
    imageAlt: 'Two raised block-edged planting beds set in gold gravel in a rear garden',
    body: [
      {
        type: 'paragraph',
        text: 'Planting is the part of garden work where the visible effort and the actual outcome are least connected. A shrub goes in correctly in half an hour. Whether it is thriving in three years is decided over the following two summers, by things that take a few minutes at a time and are easy to skip.',
      },
      {
        type: 'heading',
        text: 'Hedge timing, including the bit that is law',
      },
      {
        type: 'paragraph',
        text: 'Start with the non-negotiable one. Wild birds, their nests and their eggs are protected under the Wildlife and Countryside Act, and the main nesting season runs from roughly March to August. In practice that means hedges are checked before they are cut during those months, and work is deferred where there is an active nest. This is not a formality, and it is a reasonable question to ask any contractor how they handle it.',
      },
      {
        type: 'paragraph',
        text: 'Beyond that, timing follows the plant. Formal evergreen hedging such as privet, box or laurel takes a trim in late spring once the first flush has hardened, and often a second tidy in early autumn. Beech and hornbeam prefer a single cut in late summer, which is what gives beech its copper winter leaf. Conifers are the ones to be careful with: most will not regenerate from bare old wood, so a hedge allowed to overshoot cannot simply be cut back to where it used to be.',
      },
      {
        type: 'list',
        items: [
          'Cut too early in spring and the fresh growth that follows can be caught by a late frost.',
          'Leave it too late in autumn and soft new growth goes into winter undamaged and unhardened.',
          'Let a light trim become a hard cut-back and recovery takes seasons rather than weeks.',
        ],
      },
      {
        type: 'heading',
        text: 'The first two years decide everything',
      },
      {
        type: 'paragraph',
        text: 'A newly planted hedge or shrub has a root system sized for the pot it came out of, not for the ground it is now in. Until those roots spread, the plant cannot reach the moisture that established planting takes for granted, and it is entirely dependent on what happens at the surface.',
      },
      {
        type: 'list',
        items: [
          'Water deeply and less often. A long soak that reaches down encourages roots to follow it; a daily sprinkle keeps them at the surface where they are most vulnerable.',
          'Water through dry spells even here. A fortnight without rain in a Scottish June will kill new hedging that has been left to fend for itself.',
          'Mulch a good depth around the base but not against the stem, to hold moisture in and keep weeds off the water the plant needs.',
          'Prune formatively in the first two years. On hedging this means cutting the leader back to force branching low down, which is what gives a hedge a dense base rather than a leggy one.',
        ],
      },
      {
        type: 'paragraph',
        text: 'That last point is the one people find counterintuitive. Cutting a new hedge back feels like undoing progress, but a hedge that is allowed to race upward in its first two years is thin at the bottom permanently, and no amount of later trimming fixes it.',
      },
      {
        type: 'heading',
        text: 'Choosing for the conditions you actually have',
      },
      {
        type: 'paragraph',
        text: 'Gardens across [Paisley](/areas/paisley), [Houston](/areas/houston) and [Bridge of Weir](/areas/bridge-of-weir) deal with high rainfall, heavy ground in the low-lying parts and real exposure to wind coming up the Clyde. Planting chosen for a sheltered southern garden will spend its life struggling here. Species selection against actual exposure, soil and light is most of what makes a [planting scheme](/services/planting) succeed, and it costs nothing extra to get right at the point of ordering.',
      },
      {
        type: 'quote',
        text: 'Great job by Scott and the team at Scotia Maintenance! They did a fantastic job in both my front and back garden, including hedge trimming, grass cutting and removing a large amount of garden rubbish. Very friendly, professional and hardworking.',
        attribution: 'Dylan Stevenson, Google review',
      },
      {
        type: 'paragraph',
        text: 'What a new scheme needs is explained when it goes in. For anyone who would rather not track watering and formative pruning through two seasons, it can be picked up as part of [regular garden maintenance](/services/garden-maintenance) instead.',
      },
    ],
    relatedServices: ['planting', 'garden-maintenance'],
    relatedAreas: ['paisley', 'houston', 'bridge-of-weir', 'kilmacolm'],
  },

  {
    slug: 'why-garden-quotes-are-given-on-site',
    title: 'Why Garden Quotes Are Given After a Visit, Not Over the Phone',
    category: 'Pricing & quotes',
    metaDescription:
      'What actually drives the price of landscaping and garden work, why access and ground conditions decide it, and how to compare quotes from different contractors fairly.',
    publishDate: '2025-08-29',
    excerpt:
      'A number given over the phone is a guess dressed up as a quote. Here is what genuinely moves the price, and how to read the quotes you get back.',
    image: '/images/rear-garden-after-7.jpg',
    imageAlt: 'Sandstone patio, gold gravel and raised planting beds in a finished rear garden landscaping project',
    body: [
      {
        type: 'paragraph',
        text: 'Wanting a ballpark before committing to a visit is completely reasonable. The difficulty is that the honest answer to "roughly what would a patio cost?" is a range so wide it tells you nothing. Two gardens of identical size, on the same street, can differ by a factor of two, and every bit of that difference sits in things you cannot see down a phone line.',
      },
      {
        type: 'heading',
        text: 'What genuinely moves the price',
      },
      {
        type: 'list',
        items: [
          'Access. A garden reached through a close, a shared lane or a 700mm side gate means every tonne of material and every tonne of spoil moves by barrow. On a full rebuild that is not a detail, it is days.',
          'What is already there. Lifting an existing concrete slab, taking out tree roots or dealing with buried construction debris is work that happens before the job you are actually paying for starts.',
          'Ground and levels. A slope, a high water table or compacted clay all add time that a flat, free-draining plot simply does not need.',
          'Spoil. Excavated soil and hardcore has to leave the site and be disposed of properly. On a driveway or a terraced garden this is a real line item, not a rounding error.',
          'Materials. Natural sandstone, porcelain, granite and monoblock sit at very different price points, and the sub-base under them varies with what the surface has to carry.',
        ],
      },
      {
        type: 'paragraph',
        text: 'None of that is visible in a description or a photograph. A price given without it is a figure that has to be revised once the job starts, which serves nobody.',
      },
      {
        type: 'heading',
        text: 'How to compare quotes properly',
      },
      {
        type: 'paragraph',
        text: 'If you are getting three quotes, the most useful thing you can do is check they describe the same job. The cheapest quote is often cheapest because it is for less work, and the difference is usually underground where you will not see it until it fails.',
      },
      {
        type: 'list',
        items: [
          'What depth of sub-base is going in, and is it compacted in layers?',
          'Is the paving laid on a full mortar bed, or spot-bedded on five dabs?',
          'What are the falls, and where is the water actually going?',
          'Is spoil removal and disposal included, or added later?',
          'Who does the work: the person quoting, their own team, or a subcontractor?',
        ],
      },
      {
        type: 'paragraph',
        text: 'Those five questions separate quotes far more reliably than the headline number does. A [driveway](/services/garden-improvements) laid on 50mm of sand will look identical to one on a properly compacted sub-base for about two winters.',
      },
      {
        type: 'quote',
        text: 'Was a bit apprehensive about these guys as had not heard about them previously. But the price quoted was good and we decided to give them a go. So glad we did, the work was carried out professionally and completed ahead of schedule too. They cleaned up each day also.',
        attribution: 'Kim Easton, Google review',
      },
      {
        type: 'heading',
        text: 'What the visit involves',
      },
      {
        type: 'paragraph',
        text: 'It is short. Someone looks at the ground, checks the access, works out where water is going and talks through what you actually want the space to do. That last part matters more than it sounds: a good number of jobs change shape at this stage, usually because the thing someone asked for is not the cheapest way to get the result they described.',
      },
      {
        type: 'paragraph',
        text: 'There is no charge for it and no obligation afterwards. Work is available as a one-off clearance, a tidy-up before a sale, a single [landscaping project](/services/landscaping), or as a [regular arrangement](/services/garden-maintenance) through the growing season. The principle is the same either way: the garden gets seen before a number is attached to it.',
      },
      {
        type: 'quote',
        text: 'Gr8 price for the job. Job carried out to a high standard.',
        attribution: 'Sharon Redmond, Google review',
      },
      {
        type: 'paragraph',
        text: 'You can see what other customers have said on the [reviews page](/reviews), or [get in touch](/contact) to arrange a visit.',
      },
    ],
    relatedServices: ['landscaping', 'garden-maintenance', 'garden-improvements'],
    relatedAreas: [],
  },
];
