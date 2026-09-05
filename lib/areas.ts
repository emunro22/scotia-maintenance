import type { Faq } from './services';

export type Area = {
  slug: string;
  name: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  /** Google Maps embed query for this town. */
  mapQuery: string;
  intro: string;
  body: string[];
  landmarks: string[];
  travel: string;
  services: string[];
  nearby: string[];
  faqs: Faq[];
};

export const areas: Area[] = [
  {
    slug: 'dumbarton',
    name: 'Dumbarton',
    region: 'West Dunbartonshire',
    metaTitle: 'Landscaping in Dumbarton | Scotia Maintenance',
    metaDescription:
      'Landscaping and garden maintenance in Dumbarton, from Levengrove and Silverton to Bellsmyre and Castlehill. Call Scotia Maintenance on 07766 636189.',
    image: '/images/rear-garden-after-1.jpg',
    imageAlt: 'Rear garden with gold gravel and a painted shed, typical of landscaping work in Dumbarton',
    mapQuery: 'Dumbarton, Scotland',
    intro:
      'Scotia Maintenance provides landscaping and garden maintenance throughout Dumbarton, covering the streets around Levengrove and the town centre as well as Silverton, Brucehill, Castlehill and Bellsmyre. Work is available seven days a week between 8am and 4pm.',
    body: [
      'Dumbarton gardens vary enormously depending on where in the town you are. The older sandstone properties near Levengrove Park and along the streets running down to the Leven often have generous, well-established gardens with mature boundaries and long-standing planting that needs proper pruning rather than a blanket cut back. Move up towards Bellsmyre and Castlehill and the picture changes to post-war housing with more open, uniform plots where the main issues are grass, edges and boundaries that have blurred over time.',
      'The two features that shape gardening work here are water and wind. Ground close to the River Leven and the low-lying parts of the town holds moisture heavily, which shows up as waterlogged lawns through winter, moss taking hold in shaded corners and beds that stay too wet to work for long stretches. On the higher ground towards the Kilpatrick Hills the drainage is better but the exposure is worse, and gardens sitting open to the wind coming up the Clyde estuary take a battering that unsuitable planting will not survive.',
      'Typical work in Dumbarton runs from regular grass and hedge maintenance through to reshaping gardens that have not been touched in years. Clearance is a common starting point, particularly at properties that have changed hands or been rented out for a period. From there the work is usually about re-establishing structure: cutting lawns back to a defined shape, reinstating bed edges, taking overgrown hedging back under control and putting in planting robust enough for the conditions.',
    ],
    landmarks: ['Levengrove Park', 'Dumbarton Rock', 'Silverton', 'Bellsmyre', 'Castlehill', 'River Leven'],
    travel:
      'Scotia Maintenance travels to Dumbarton as part of a regular run along the north bank of the Clyde, which also takes in Bowling, Old Kilpatrick and Clydebank. Visits are arranged directly by phone or email, with no minimum contract.',
    services: ['garden-maintenance', 'landscaping', 'lawn-maintenance', 'outdoor-maintenance'],
    nearby: ['bowling', 'old-kilpatrick', 'clydebank', 'milngavie'],
    faqs: [
      {
        question: 'Do you cover all areas of Dumbarton?',
        answer:
          'Yes, all parts of Dumbarton are covered, including Levengrove, Silverton, Brucehill, Castlehill, Bellsmyre and the town centre. Call 07766 636189 to arrange a visit.',
      },
      {
        question: 'My Dumbarton lawn stays waterlogged all winter. Can that be improved?',
        answer:
          'Often, yes. Low-lying ground near the Leven holds water badly, and the cause is usually compaction, levels or water discharging in the wrong place. The lawn is assessed on site so the right fix is identified before any work is quoted.',
      },
      {
        question: 'What planting works in an exposed Dumbarton garden?',
        answer:
          'Wind-tolerant species are essential on plots open to the estuary. Suitable hedging and shrubs are chosen after seeing how exposed the garden actually is, since shelter varies street by street across the town.',
      },
      {
        question: 'Can you clear a garden that has been left for years?',
        answer:
          'Yes. Full clearance of overgrown gardens is regular work in Dumbarton, particularly at properties that have recently been bought or come out of a tenancy, and all waste is taken away.',
      },
    ],
  },
  {
    slug: 'rutherglen',
    name: 'Rutherglen',
    region: 'South Lanarkshire',
    metaTitle: 'Landscaping in Rutherglen | Scotia Maintenance',
    metaDescription:
      'Garden maintenance and landscaping in Rutherglen, covering Burnhill, Fernhill, Blairbeth and the Main Street area. Call Scotia Maintenance on 07766 636189.',
    image: '/images/rear-garden-after-2.jpg',
    imageAlt: 'Raised block-edged planting beds set in gold gravel at a Rutherglen property',
    mapQuery: 'Rutherglen, Glasgow, Scotland',
    intro:
      'Scotia Maintenance offers garden maintenance and landscaping across Rutherglen, from the tenement streets around Main Street and Overtoun Park out to Burnhill, Fernhill and Blairbeth. Visits are available seven days a week, 8am to 4pm.',
    body: [
      'Rutherglen has one of the more varied housing mixes in the south east of Glasgow, and the gardens reflect that. Around Main Street and the older core there are tenement back courts and shared drying greens where the work is mostly about keeping communal ground under control: grass, weeds through the paving, encroaching growth and general clearance. Further out, the inter-war and post-war semis have proper rear gardens, often long and narrow, with lawn down the middle and borders that have gradually lost their edges.',
      'The ground rises noticeably towards Fernhill and Blairbeth as you head up towards Cathkin. Gardens on those slopes bring their own problems: soil washing down onto paths after heavy rain, lawns that are awkward to cut safely, steps and edges that have shifted over the years, and terracing that has started to fail. Reworking levels so a sloping garden becomes genuinely usable is common landscaping work here.',
      'Because a lot of Rutherglen properties sit close together, access is worth thinking about before any larger project. Rear gardens reached only through a close, a shared path or a narrow side gate limit what can be brought in and taken out, which affects how a job is best staged. That gets worked out at the visit rather than being discovered on the day the work starts.',
    ],
    landmarks: ['Overtoun Park', 'Rutherglen Main Street', 'Burnhill', 'Fernhill', 'Blairbeth', 'Cathkin Braes'],
    travel:
      'Rutherglen sits within the regular Glasgow south side run, so visits are straightforward to arrange alongside work in the surrounding areas. Call 07766 636189 or send an enquiry to get a time booked in.',
    services: ['garden-maintenance', 'lawn-maintenance', 'landscaping', 'garden-improvements'],
    nearby: ['glasgow', 'east-kilbride'],
    faqs: [
      {
        question: 'Do you maintain shared back courts in Rutherglen?',
        answer:
          'Yes. Communal drying greens and back courts around the Main Street area and other tenement streets are regularly maintained, covering grass, weed growth and general clearance.',
      },
      {
        question: 'Can you work on a sloping garden in Fernhill or Blairbeth?',
        answer:
          'Yes. Sloping plots are common on the higher ground towards Cathkin, and reworking levels, steps and terracing so the garden is usable and safe is standard landscaping work.',
      },
      {
        question: 'What if my Rutherglen garden is only accessible through a close?',
        answer:
          'Restricted access is very common in Rutherglen and is checked at the initial visit. It affects how a job is staged and what materials can realistically be brought in, and that is factored into the quote upfront.',
      },
      {
        question: 'How often would a Rutherglen garden need maintained?',
        answer:
          'Most gardens here need a visit every two to four weeks from April through October, and much less over winter. The right interval depends on the size of the lawn and how much hedging there is.',
      },
    ],
  },
  {
    slug: 'linwood',
    name: 'Linwood',
    region: 'Renfrewshire',
    metaTitle: 'Landscaping in Linwood | Scotia Maintenance',
    metaDescription:
      'Landscaping and garden maintenance in Linwood, covering Clippens, Auchenlodment and the streets around the Phoenix Retail Park. Call 07766 636189.',
    image: '/images/rear-garden-after-3.jpg',
    imageAlt: 'Multi-tone sandstone patio leading to a garden shed at a Linwood home',
    mapQuery: 'Linwood, Renfrewshire, Scotland',
    intro:
      'Scotia Maintenance covers Linwood for landscaping, garden maintenance and grass cutting, working across the estates around Clippens and the streets running out towards the Phoenix Retail Park and Bridge of Weir Road. Available seven days a week, 8am to 4pm.',
    body: [
      'Linwood is largely post-war and later housing, which means a lot of gardens share a similar starting point: an open-plan front lawn with no real boundary, and a rectangular rear garden bounded by fencing. That layout is easy to maintain but easy to let slip, because there is often nothing structural holding the shape. Front lawns in particular tend to spread into the pavement edge and lose their line, and re-cutting a proper edge makes an immediate difference to how a whole street-facing garden reads.',
      'The ground around Linwood is flat and low-lying, with the Black Cart Water and the remnants of Linwood Moss close by. That combination means drainage is the recurring issue. Lawns sit wet well into spring, moss establishes quickly in anything shaded, and beds compact under foot traffic. Cutting grass that is permanently soft needs care to avoid rutting and scalping, and it is worth dealing with the underlying wetness rather than fighting the symptoms every year.',
      'Work here ranges from straightforward fortnightly grass cutting through to reshaping gardens that have never really been laid out. Because many plots are a simple rectangle, relatively small changes have a large effect: defining a bed along one boundary, putting in a hard path on the worn line to the shed or bin store, or planting hedging to give a front garden some enclosure and shelter.',
    ],
    landmarks: ['Clippens', 'Phoenix Retail Park', 'Linwood Moss', 'Black Cart Water', 'Bridge of Weir Road'],
    travel:
      'Linwood sits in the middle of the Renfrewshire coverage area, between Paisley, Johnstone and Bridge of Weir, so visits are easy to fit in. Get in touch on 07766 636189 to arrange a time.',
    services: ['lawn-maintenance', 'garden-maintenance', 'garden-improvements', 'planting'],
    nearby: ['paisley', 'johnstone', 'bridge-of-weir', 'houston'],
    faqs: [
      {
        question: 'Do you cut grass in Linwood on a regular schedule?',
        answer:
          'Yes. Regular grass cutting is available across Linwood, usually fortnightly through the growing season, with the interval set to suit the size and condition of the lawn.',
      },
      {
        question: 'My Linwood lawn is wet and mossy. What can be done?',
        answer:
          'Wet, mossy lawns are common on the flat, low-lying ground around Linwood. The cause is usually compaction and poor drainage rather than the grass itself, and it is assessed on site so the right approach can be recommended.',
      },
      {
        question: 'Can you put a boundary on an open-plan front garden?',
        answer:
          'Yes. Hedging or defined bed edges are a common way to give open-plan front gardens in Linwood some structure and shelter, and planting is chosen to suit the exposure of the plot.',
      },
      {
        question: 'Do you cover the estates towards Clippens?',
        answer:
          'Yes, all parts of Linwood are covered including Clippens and the streets towards Bridge of Weir Road. Call 07766 636189 to book a visit.',
      },
    ],
  },
  {
    slug: 'paisley',
    name: 'Paisley',
    region: 'Renfrewshire',
    metaTitle: 'Landscaping in Paisley | Scotia Maintenance',
    metaDescription:
      'Landscaping and garden maintenance in Paisley, covering Ralston, Hawkhead, Castlehead, Glenburn and Foxbar. Call Scotia Maintenance on 07766 636189.',
    image: '/images/rear-garden-after-4.jpg',
    imageAlt: 'Finished rear garden with sandstone patio, gravel and a garden shed in Paisley',
    mapQuery: 'Paisley, Renfrewshire, Scotland',
    intro:
      'Scotia Maintenance provides landscaping and garden maintenance throughout Paisley, from the villa streets of Castlehead and Ralston to Hawkhead, Glenburn, Foxbar and Thornly Park. Work is carried out seven days a week between 8am and 4pm.',
    body: [
      'Paisley has some of the largest and most established domestic gardens in Renfrewshire. The Victorian and Edwardian villas around Castlehead and the streets near Barshaw Park frequently have mature trees, long-established hedging and substantial borders, gardens that reward proper seasonal maintenance and suffer badly from a season of neglect. Work at these properties is usually about pruning at the right time, keeping hedging to a manageable line and stopping mature planting from closing the garden in.',
      'The newer suburban areas tell a different story. Ralston and Hawkhead have generous but more regular plots where the main jobs are lawns, edges and boundary hedging. Glenburn, Foxbar and Thornly Park sit on rising ground towards the Gleniffer Braes, where gardens are often on a slope, more exposed, and colder later into spring than gardens down in the town.',
      'Across all of these, the practical pattern is the same: gardens here grow hard from April onwards and need a consistent rhythm rather than occasional attention. Regular maintenance is set at a frequency that matches the size of the garden and how much hedging there is. Where a garden has already got away, clearance and reshaping come first: cutting lawns back to a defined shape, reinstating bed edges and taking hedging back to a line that can be held.',
      'Larger landscaping projects in Paisley often involve mature gardens that have outgrown their original layout: a lawn shrinking under encroaching shrubs, paths that have been lost, or a section that has been given over entirely to overgrowth and could be brought back into use.',
    ],
    landmarks: ['Barshaw Park', 'Paisley Abbey', 'Castlehead', 'Ralston', 'Hawkhead', 'Gleniffer Braes'],
    travel:
      'Paisley is central to the Renfrewshire coverage area and is visited regularly, so appointments are usually straightforward to arrange. Call 07766 636189 or send an enquiry through the site.',
    services: ['garden-maintenance', 'landscaping', 'lawn-maintenance', 'planting', 'garden-improvements'],
    nearby: ['renfrew', 'johnstone', 'linwood', 'glasgow', 'inchinnan'],
    faqs: [
      {
        question: 'Do you maintain large mature gardens in Paisley?',
        answer:
          'Yes. Established gardens around Castlehead, Ralston and the Barshaw Park area are regular work, covering seasonal pruning, hedging, lawns and borders on a schedule that suits the size of the garden.',
      },
      {
        question: 'Which parts of Paisley do you cover?',
        answer:
          'All of Paisley is covered, including Castlehead, Ralston, Hawkhead, Glenburn, Foxbar, Thornly Park and the town centre area.',
      },
      {
        question: 'Are gardens towards the Gleniffer Braes different to work on?',
        answer:
          'They tend to be more exposed, colder later into spring and often on a slope, which affects both the planting that will succeed and how a lawn is best cut and maintained. That is taken into account when the garden is assessed.',
      },
      {
        question: 'Can you take on a Paisley garden that has been badly overgrown?',
        answer:
          'Yes. Clearance and reshaping of overgrown gardens is common work in Paisley, and it is usually the first stage before regular maintenance can be set up.',
      },
    ],
  },
  {
    slug: 'east-kilbride',
    name: 'East Kilbride',
    region: 'South Lanarkshire',
    metaTitle: 'Landscaping in East Kilbride | Scotia Maintenance',
    metaDescription:
      'Garden maintenance and landscaping in East Kilbride, covering The Murray, Westwood, Stewartfield and the Village. Call Scotia Maintenance on 07766 636189.',
    image: '/images/rear-garden-after-5.jpg',
    imageAlt: 'Raised planting bed with a potted hydrangea at an East Kilbride property',
    mapQuery: 'East Kilbride, South Lanarkshire, Scotland',
    intro:
      'Scotia Maintenance covers East Kilbride for landscaping, garden maintenance and grass cutting, working across The Murray, Westwood, Stewartfield, Whitemoss and the older streets around the Village. Available seven days a week, 8am to 4pm.',
    body: [
      'East Kilbride was laid out as a new town, and that shows in the gardens. Estates were built with open-plan frontages, shared verges and standardised rear plots, which produces a very particular kind of maintenance work. Boundaries between private garden and public verge are often unclear, front lawns have no natural edge to hold them, and rear gardens are frequently a plain rectangle with fencing on three sides. Giving those spaces some definition (a cut edge, a defined bed, a hedge line) is often the single most effective change.',
      'The town also sits high. At its elevation, spring arrives noticeably later and the first frosts come earlier than in Glasgow or down in Renfrewshire, which shifts the whole gardening calendar. Grass starts growing later in the year, planting needs to be hardier, and there is less margin for tender species. It is worth planning maintenance around that rather than assuming the same timings as gardens closer to the Clyde.',
      'The older properties around East Kilbride Village and the more established parts of the town have more traditional gardens with mature planting and proper boundaries, where the work is closer to conventional seasonal maintenance. Around Calderglen and the eastern edge, gardens back onto woodland and open ground, which brings heavier leaf fall in autumn and more pressure from encroaching growth along the boundaries.',
    ],
    landmarks: ['Calderglen Country Park', 'The Murray', 'Westwood', 'Stewartfield', 'East Kilbride Village'],
    travel:
      'Scotia Maintenance travels out to East Kilbride from the Glasgow side of the coverage area. Because it sits at the eastern edge of the area covered, it is worth calling 07766 636189 to arrange a time that works.',
    services: ['garden-maintenance', 'lawn-maintenance', 'landscaping', 'garden-improvements'],
    nearby: ['rutherglen', 'glasgow'],
    faqs: [
      {
        question: 'Do you cover all of East Kilbride?',
        answer:
          'Yes, the whole town is covered including The Murray, Westwood, Stewartfield, Whitemoss and East Kilbride Village. Call 07766 636189 to arrange a visit.',
      },
      {
        question: 'Does East Kilbride need a different maintenance schedule?',
        answer:
          'Slightly. The town sits at a higher elevation than Glasgow, so grass generally starts growing later in spring and stops earlier in autumn, which shifts the useful window for regular cutting.',
      },
      {
        question: 'Can you give an open-plan front garden more definition?',
        answer:
          'Yes. Cut edges, defined beds and low hedging are all effective ways of giving new town open-plan frontages a proper boundary, and the approach is chosen to suit the property.',
      },
      {
        question: 'Do you deal with leaf clearance near Calderglen?',
        answer:
          'Yes. Gardens backing onto woodland around Calderglen and the eastern edge of the town get heavy autumn leaf fall, and seasonal clearance is straightforward to arrange.',
      },
    ],
  },
  {
    slug: 'clydebank',
    name: 'Clydebank',
    region: 'West Dunbartonshire',
    metaTitle: 'Landscaping in Clydebank | Scotia Maintenance',
    metaDescription:
      'Landscaping and garden maintenance in Clydebank, covering Dalmuir, Radnor Park, Faifley, Kilbowie and Whitecrook. Call Scotia Maintenance on 07766 636189.',
    image: '/images/rear-garden-after-6.jpg',
    imageAlt: 'Close-up of multi-tone sandstone patio paving at a property in Clydebank',
    mapQuery: 'Clydebank, West Dunbartonshire, Scotland',
    intro:
      'Scotia Maintenance provides garden maintenance, landscaping and outdoor clearance across Clydebank, covering Dalmuir, Radnor Park, Kilbowie, Whitecrook, Faifley and the streets around the town centre. Seven days a week, 8am to 4pm.',
    body: [
      'Clydebank gardens are strongly affected by the ground the town is built on. Between Kilbowie and Radnor Park the land climbs sharply away from the river, and gardens on those streets are frequently terraced, stepped or simply steep. That makes ordinary jobs harder: mowing a bank safely, stopping soil and mulch washing down after heavy rain, keeping retaining edges intact. Reworking a steep garden into something with a usable flat area is one of the more common landscaping requests here.',
      'Closer to the centre and around Dalmuir there are tenement back courts and drying greens alongside compact terraced and semi-detached plots. Work in those spaces is often about control and clearance rather than design: keeping communal grass and weed growth down, cutting back growth over paths and bin areas, and clearing ground that has been allowed to go.',
      'Faifley and the higher ground towards the Kilpatrick Hills are more exposed and hold moisture. Gardens there suffer from moss in shaded corners and from wind damage to anything planted without shelter. Getting boundary planting established makes a real difference over time, but the species have to be chosen with the exposure in mind.',
      'Regular maintenance across the town is usually set fortnightly through the growing season, with the emphasis shifting to leaf clearance and cutting back through autumn.',
    ],
    landmarks: ['Dalmuir', 'Radnor Park', 'Kilbowie', 'Faifley', 'Forth & Clyde Canal', 'Titan Crane'],
    travel:
      'Clydebank is on the regular north bank route alongside Old Kilpatrick, Bowling and Dumbarton, so visits are easy to schedule. Call 07766 636189 to arrange one.',
    services: ['outdoor-maintenance', 'garden-maintenance', 'landscaping', 'lawn-maintenance'],
    nearby: ['old-kilpatrick', 'dumbarton', 'bearsden', 'renfrew'],
    faqs: [
      {
        question: 'Can you work on a steep garden in Clydebank?',
        answer:
          'Yes. Steep and terraced gardens are common on the streets climbing from Kilbowie towards Radnor Park, and reworking levels to create a usable flat area is regular landscaping work here.',
      },
      {
        question: 'Do you maintain communal back courts in Clydebank?',
        answer:
          'Yes. Shared drying greens and back court areas around Dalmuir and the town centre are regularly maintained, including grass, weed growth and clearance of accumulated debris.',
      },
      {
        question: 'Which parts of Clydebank are covered?',
        answer:
          'All of Clydebank is covered, including Dalmuir, Radnor Park, Kilbowie, Whitecrook, Faifley and the town centre.',
      },
      {
        question: 'What can be done about a mossy garden in Faifley?',
        answer:
          'Moss on the higher, more exposed ground towards the Kilpatrick Hills is usually down to shade, compaction and retained moisture. It is assessed on site so the underlying cause can be addressed rather than just the surface.',
      },
    ],
  },
  {
    slug: 'bearsden',
    name: 'Bearsden',
    region: 'East Dunbartonshire',
    metaTitle: 'Landscaping in Bearsden | Scotia Maintenance',
    metaDescription:
      'Landscaping and garden maintenance in Bearsden, covering Killermont, Westerton, Kessington and Baljaffray. Call Scotia Maintenance on 07766 636189.',
    image: '/images/rear-garden-after-7.jpg',
    imageAlt: 'Sandstone patio, gold gravel and raised planting beds in a finished Bearsden garden',
    mapQuery: 'Bearsden, East Dunbartonshire, Scotland',
    intro:
      'Scotia Maintenance carries out landscaping and garden maintenance across Bearsden, covering Killermont, Westerton, Kessington, Baljaffray and the streets around the Roman bath house and Antonine Wall. Work is available seven days a week, 8am to 4pm.',
    body: [
      'Bearsden has some of the largest and most mature domestic gardens in the west of Scotland, and they come with a specific set of demands. Long-established beech, privet and laurel hedging needs cutting at the right height and the right time of year to stay dense rather than going bare at the base. Mature trees create dry shade underneath, where grass thins out and moss takes over, and the planting that succeeds there is quite different from what works in an open border.',
      'Autumn is the demanding season here. The tree cover across much of Bearsden produces heavy leaf fall, and leaves left lying on lawns and paths through a wet autumn cause real damage as well as being a slip hazard. Staying on top of clearance from October onwards matters more in these gardens than in more open parts of the coverage area.',
      'The scale of the gardens also means maintenance intervals need to be realistic. A large plot with substantial hedging, several borders and mature trees needs consistent fortnightly attention through the growing season rather than an occasional visit, otherwise each visit turns into a recovery job. For gardens that have been well kept for years, the work is largely about continuity: pruning correctly, holding hedge lines, keeping edges crisp and replacing planting as it comes to the end of its life.',
      'Landscaping projects in Bearsden are often about reclaiming space that mature planting has slowly taken over: opening up a lawn that has shrunk, reinstating a path, or clearing and replanting a shaded section that stopped working years ago.',
    ],
    landmarks: ['Killermont', 'Westerton', 'Kessington', 'Baljaffray', 'Antonine Wall', 'Roman bath house'],
    travel:
      'Bearsden is covered alongside Milngavie and the north west of Glasgow, so visits are simple to arrange. Call 07766 636189 or send an enquiry through the site.',
    services: ['garden-maintenance', 'planting', 'garden-improvements', 'outdoor-maintenance'],
    nearby: ['milngavie', 'glasgow', 'clydebank'],
    faqs: [
      {
        question: 'Do you cut mature hedging in Bearsden?',
        answer:
          'Yes. Established beech, privet and laurel hedging is common across Bearsden and is trimmed at the right point in the season to keep it dense rather than bare at the base.',
      },
      {
        question: 'What grows under mature trees in a Bearsden garden?',
        answer:
          'Dry shade under established trees needs shade-tolerant planting rather than grass, which usually thins out and gives way to moss. Suitable species are chosen after seeing the light and soil conditions in that part of the garden.',
      },
      {
        question: 'Do you handle autumn leaf clearance in Bearsden?',
        answer:
          'Yes. Leaf fall is heavy across much of Bearsden and regular autumn clearance is available, which protects lawns and keeps paths safe through the wet months.',
      },
      {
        question: 'How often should a large Bearsden garden be maintained?',
        answer:
          'Larger gardens with mature hedging and borders generally need fortnightly visits from April to October. Less frequent visits tend to mean each one becomes a recovery job rather than routine maintenance.',
      },
    ],
  },
  {
    slug: 'bridge-of-weir',
    name: 'Bridge of Weir',
    region: 'Renfrewshire',
    metaTitle: 'Landscaping in Bridge of Weir | Scotia Maintenance',
    metaDescription:
      'Landscaping and garden maintenance in Bridge of Weir, covering Ranfurly, Crosslee and the Gryffe valley. Call Scotia Maintenance on 07766 636189.',
    image: '/images/rear-garden-after-8.jpg',
    imageAlt: 'Sandstone patio steps with a glass balustrade at a Bridge of Weir property',
    mapQuery: 'Bridge of Weir, Renfrewshire, Scotland',
    intro:
      'Scotia Maintenance provides landscaping and garden maintenance in Bridge of Weir, working across Ranfurly, the village centre and the properties along the Gryffe valley. Available seven days a week between 8am and 4pm.',
    body: [
      'Bridge of Weir gardens are generally larger than the regional average, and a good number sit on plots that shade into semi-rural ground, with long boundaries, mature trees, paddock edges and open outlooks over the Gryffe. That scale changes the nature of the work. Boundary management becomes a significant job in itself, with hedging, tree lines and encroaching growth needing regular attention to stop the garden being gradually closed in from the edges.',
      'The Ranfurly area and the streets around the golf courses have substantial villa gardens with established structure: mature specimen planting, long borders and lawns big enough that cutting is a proper job rather than a quick pass. These gardens generally justify a consistent maintenance arrangement through the growing season, because the volume of growth between visits is high.',
      'Ground conditions along the valley hold moisture, and gardens sitting lower towards the water can be slow to dry out in spring. Where lawns are large, that matters practically: cutting soft ground too early causes rutting that lasts all season. Timing the first cuts sensibly and keeping to a rhythm afterwards makes a visible difference by midsummer.',
      'Landscaping work here tends to involve defining space within a large garden rather than filling a small one: creating a usable lawn area, putting in paths that hold up in wet conditions, and establishing shelter planting on exposed boundaries.',
    ],
    landmarks: ['Ranfurly', 'Gryffe Water', 'Crosslee', 'Bridge of Weir village centre'],
    travel:
      'Bridge of Weir is covered as part of the wider Renfrewshire area alongside Houston, Kilmacolm and Johnstone. Call 07766 636189 to arrange a visit or a quote.',
    services: ['garden-maintenance', 'planting', 'landscaping', 'lawn-maintenance'],
    nearby: ['houston', 'kilmacolm', 'johnstone', 'linwood'],
    faqs: [
      {
        question: 'Do you take on large gardens in Bridge of Weir?',
        answer:
          'Yes. Larger plots with long boundaries, mature trees and substantial lawns are common in and around Bridge of Weir, and maintenance is scheduled to match the volume of growth.',
      },
      {
        question: 'Can you manage long boundaries and tree lines?',
        answer:
          'Yes. Keeping hedging, tree lines and encroaching growth under control along extended boundaries is a regular part of the work at semi-rural properties in the Gryffe valley.',
      },
      {
        question: 'When should grass cutting start on a large Bridge of Weir lawn?',
        answer:
          'Usually once the ground has dried enough to take a mower without rutting, which on lower-lying land near the water can be later than in town gardens. Starting too early on soft ground causes damage that shows all season.',
      },
      {
        question: 'Do you cover Ranfurly and Crosslee?',
        answer:
          'Yes, the whole of Bridge of Weir is covered including Ranfurly, Crosslee and the surrounding properties along the valley.',
      },
    ],
  },
  {
    slug: 'erskine',
    name: 'Erskine',
    region: 'Renfrewshire',
    metaTitle: 'Landscaping in Erskine | Scotia Maintenance',
    metaDescription:
      'Landscaping and garden maintenance in Erskine, covering Park Mains, Bargarran, Rashielea and the riverside. Call Scotia Maintenance on 07766 636189.',
    image: '/images/rear-garden-after-9.jpg',
    imageAlt: 'Detail of sandstone patio steps and glass balustrade in a landscaped Erskine garden',
    mapQuery: 'Erskine, Renfrewshire, Scotland',
    intro:
      'Scotia Maintenance covers Erskine for landscaping, garden maintenance and grass cutting, working across Park Mains, Bargarran, Rashielea, Barrhill and the streets running down towards the river and the Erskine Bridge. Seven days a week, 8am to 4pm.',
    body: [
      'Erskine was largely developed from the 1970s onwards, and the gardens are typically compact, regular and enclosed by fencing rather than hedging. Small gardens are quick to maintain but unforgiving of neglect: a plot this size looks overgrown much faster than a large one, and a single missed season can mean starting with clearance. On the other hand, small changes go a long way: one well-placed bed, a defined lawn edge or a short run of hedging can transform how an Erskine back garden feels.',
      'The dominant environmental factor is wind. Gardens on the north side of the town, close to the river and the approach to the Erskine Bridge, are genuinely exposed. Wind coming up the Clyde carries salt, and planting that would be perfectly happy a few miles inland gets scorched and stunted here. Choosing wind and salt tolerant species, and establishing shelter on the exposed boundary first, is the difference between planting that establishes and planting that limps along for two seasons before being replaced.',
      'Many Erskine estates were built with open-plan or lightly defined frontages, so front gardens often merge into shared grass. Re-cutting a clean edge and putting in a low boundary is common improvement work, and it also helps stop the front lawn being worn away where people cut the corner.',
      'Regular maintenance here typically runs at three to four week intervals for a standard plot, with more frequent visits during the peak growth of May to July.',
    ],
    landmarks: ['Park Mains', 'Bargarran', 'Rashielea', 'Erskine Bridge', 'Erskine waterfront'],
    travel:
      'Erskine sits centrally in the coverage area, close to Bishopton, Inchinnan and Renfrew, so visits are quick to arrange. Call 07766 636189 or use the enquiry form.',
    services: ['landscaping', 'lawn-maintenance', 'planting', 'garden-maintenance'],
    nearby: ['bishopton', 'inchinnan', 'renfrew', 'old-kilpatrick'],
    faqs: [
      {
        question: 'What planting survives the wind in Erskine?',
        answer:
          'Wind and salt tolerant species are essential near the river and the bridge approach, where exposure is high. Establishing shelter on the windward boundary first gives everything planted behind it a far better chance.',
      },
      {
        question: 'Do you cover Park Mains and Bargarran?',
        answer:
          'Yes, all parts of Erskine are covered including Park Mains, Bargarran, Rashielea and Barrhill. Call 07766 636189 to arrange a visit.',
      },
      {
        question: 'How often does a typical Erskine garden need cut?',
        answer:
          'A standard Erskine plot usually needs a visit every three to four weeks through the growing season, with more frequent cutting during the peak growth from May to July.',
      },
      {
        question: 'Can a small Erskine garden be landscaped?',
        answer:
          'Yes. Compact gardens respond well to landscaping because relatively small changes to edges, levels and planting have a large effect on how the whole space works.',
      },
    ],
  },
  {
    slug: 'renfrew',
    name: 'Renfrew',
    region: 'Renfrewshire',
    metaTitle: 'Landscaping in Renfrew | Scotia Maintenance',
    metaDescription:
      'Landscaping and garden maintenance in Renfrew, covering Dean Park, Moorpark, Blythswood and the town centre. Call Scotia Maintenance on 07766 636189.',
    image: '/images/rear-garden-after-10.jpg',
    imageAlt: 'Potted hydrangea beside a raised planting bed and sandstone patio at a Renfrew home',
    mapQuery: 'Renfrew, Renfrewshire, Scotland',
    intro:
      'Scotia Maintenance provides garden maintenance, lawn care and landscaping across Renfrew, covering Dean Park, Moorpark, Blythswood, the streets around Robertson Park and the town centre. Available seven days a week, 8am to 4pm.',
    body: [
      'Renfrew is flat and low-lying, sitting right on the Clyde, and that single fact shapes most of the garden work here. The ground holds water. Lawns stay soft well into spring, winter waterlogging is common, and heavy or compacted soil under a lawn will produce moss no matter how well the grass is cut. Anyone who has tried to improve a Renfrew lawn purely by cutting and feeding it has usually found the problem returns, because the cause is underneath.',
      'The upside of the flat ground is that landscaping is straightforward when it comes to levels, since there is rarely a slope to fight. Work is more often about drainage, surfaces and defining space: putting in paths and hard standing that stay usable through winter, raising or improving beds so planting is not sitting in wet ground, and cutting proper edges so the lawn holds its shape.',
      'The housing stock is mostly inter-war and post-war semis and terraces with regular rectangular rear gardens, along with more modern development towards Blythswood and the riverside. These are manageable gardens on a normal maintenance cycle, typically every two to four weeks through the season. Gardens closer to the river also catch a fair amount of wind, which affects taller planting and anything not given some shelter.',
      'Regular grass cutting is the most common request in Renfrew, and it is available on its own for people who handle the rest of the garden themselves.',
    ],
    landmarks: ['Robertson Park', 'Dean Park', 'Moorpark', 'Blythswood', 'Renfrew Ferry'],
    travel:
      'Renfrew is close to the centre of the coverage area, next to Paisley, Inchinnan and Erskine, so visits are easy to fit in. Call 07766 636189 to get booked in.',
    services: ['lawn-maintenance', 'garden-maintenance', 'garden-improvements', 'landscaping'],
    nearby: ['paisley', 'inchinnan', 'erskine', 'glasgow'],
    faqs: [
      {
        question: 'Why does my Renfrew lawn stay wet and mossy?',
        answer:
          'Renfrew sits on flat, low-lying ground beside the Clyde, so soil here holds water and compacts easily. That combination produces moss and waterlogging regardless of how well the grass is cut, so the fix usually needs to address drainage and compaction rather than the grass itself.',
      },
      {
        question: 'Do you offer grass cutting on its own in Renfrew?',
        answer:
          'Yes. Grass cutting is available as a standalone service without any wider maintenance arrangement, which suits people who manage the rest of their garden themselves.',
      },
      {
        question: 'Which parts of Renfrew do you cover?',
        answer:
          'All of Renfrew is covered, including Dean Park, Moorpark, Blythswood, the Robertson Park area and the town centre.',
      },
      {
        question: 'Can you lay a path that stays usable in winter?',
        answer:
          'Yes. On wet ground, getting the base and falls right matters more than the surface material, and paths are built with that in mind so they remain usable through a Renfrew winter.',
      },
    ],
  },
  {
    slug: 'johnstone',
    name: 'Johnstone',
    region: 'Renfrewshire',
    metaTitle: 'Landscaping in Johnstone | Scotia Maintenance',
    metaDescription:
      'Landscaping and garden maintenance in Johnstone, covering Quarrelton, Thorn, Cochrane Castle and Elderslie. Call Scotia Maintenance on 07766 636189.',
    image: '/images/front-garden-after-1.jpg',
    imageAlt: 'Finished porcelain path and granite-edged planting bed in a Johnstone front garden',
    mapQuery: 'Johnstone, Renfrewshire, Scotland',
    intro:
      'Scotia Maintenance provides garden maintenance and landscaping across Johnstone, covering Quarrelton, Thorn, Cochrane Castle, the Johnstone Castle area and out towards Elderslie. Work is carried out seven days a week between 8am and 4pm.',
    body: [
      'Johnstone is built on noticeably uneven ground, and a lot of the town sits on a slope. Rear gardens on the streets climbing away from the centre are often long, narrow and stepped, sometimes with a significant drop from the back door to the far boundary. Gardens like that are harder to maintain than their size suggests: mowing takes longer, soil and mulch migrate downhill, and retaining edges or steps put in decades ago are frequently in poor condition.',
      'The housing is a mix of Victorian terraces near the centre, inter-war and post-war semis, and later estate development around Cochrane Castle and Thorn. Terraced properties in particular tend to have narrow rear plots reached by a shared path or lane, which limits access for larger work and means bigger projects need to be planned around what can physically be carried in and out.',
      'Common work here starts with getting a garden back under control: clearing overgrowth, taking hedges back to a line that can be held and re-cutting lawn edges that have crept outward. From there, improvement work on sloping plots is a frequent follow-on: cutting in a level area that can actually be used, replacing failed steps, or putting in a path on the worn route that everyone takes anyway.',
      'Regular maintenance is generally set fortnightly to monthly through the growing season, depending on how much lawn and hedging there is.',
    ],
    landmarks: ['Quarrelton', 'Thorn', 'Cochrane Castle', 'Johnstone Castle', 'Elderslie'],
    travel:
      'Johnstone sits within the core Renfrewshire coverage area alongside Linwood, Paisley and Bridge of Weir, so visits are straightforward to arrange. Call 07766 636189.',
    services: ['garden-maintenance', 'garden-improvements', 'lawn-maintenance', 'landscaping'],
    nearby: ['linwood', 'paisley', 'bridge-of-weir', 'houston'],
    faqs: [
      {
        question: 'Can you work on a sloping garden in Johnstone?',
        answer:
          'Yes. Sloping and stepped rear gardens are very common in Johnstone, and creating a usable level area, replacing failed steps or reinstating retaining edges is regular work here.',
      },
      {
        question: 'What if my garden is only reachable by a shared lane?',
        answer:
          'Restricted access is common with the older terraced properties in Johnstone. It is checked at the initial visit, because it affects how a job is staged and what can be brought in and taken out.',
      },
      {
        question: 'Do you cover Elderslie as well as Johnstone?',
        answer:
          'Yes, the areas immediately around Johnstone including Elderslie are covered. Call 07766 636189 to confirm a visit for your address.',
      },
      {
        question: 'How often would you visit a Johnstone garden?',
        answer:
          'Usually every two to four weeks through the growing season, set by how much lawn and hedging there is. Sloping gardens often benefit from the shorter interval because growth is harder to recover from once it gets away.',
      },
    ],
  },
  {
    slug: 'houston',
    name: 'Houston',
    region: 'Renfrewshire',
    metaTitle: 'Landscaping in Houston | Scotia Maintenance',
    metaDescription:
      'Landscaping and garden maintenance in Houston and Crosslee, covering village properties and larger rural plots. Call Scotia Maintenance on 07766 636189.',
    image: '/images/front-garden-after-2.jpg',
    imageAlt: 'Finished porcelain path and white gravel border at a Houston village property',
    mapQuery: 'Houston, Renfrewshire, Scotland',
    intro:
      'Scotia Maintenance covers Houston and the surrounding area for landscaping and garden maintenance, including the village conservation area, Crosslee and the properties out towards Barochan. Available seven days a week, 8am to 4pm.',
    body: [
      'Houston is a village with a genuinely rural setting, and the gardens reflect that. Plots are typically larger than in the surrounding towns, boundaries are often hedged rather than fenced, and many properties have gravel drives, mature trees and established structural planting. The maintenance burden is spread across more elements than a standard suburban garden: hedges, lawns, borders, drives and boundary trees all need attention on their own cycles.',
      'Hedging is a particular feature here. Long boundary hedges give shelter and privacy but need cutting properly and at the right time to stay dense to the base. A hedge that has been topped without attention to the sides gradually thins out and stops doing its job. Where hedges have been left too long, taking them back to a manageable line is a job worth doing once, properly, rather than trimming the outside of an ever-expanding shape each year.',
      'The conservation area at the heart of the village has older properties where the garden setting matters to the character of the street. Work there tends to be conservative: maintaining what is established, pruning correctly, keeping edges and gravel clean, rather than making dramatic changes.',
      'On the more rural plots towards Crosslee and Barochan, the work often shades into general grounds and outdoor maintenance: keeping ground clear, managing growth along long boundaries and dealing with leaf and storm debris seasonally.',
    ],
    landmarks: ['Houston village', 'Crosslee', 'Barochan', 'Houston and Killellan'],
    travel:
      'Houston is covered alongside Bridge of Weir, Kilmacolm and Johnstone. Because it sits towards the rural edge of the area, calling ahead on 07766 636189 is the quickest way to arrange a visit.',
    services: ['garden-maintenance', 'planting', 'outdoor-maintenance', 'landscaping'],
    nearby: ['bridge-of-weir', 'johnstone', 'kilmacolm', 'linwood'],
    faqs: [
      {
        question: 'Do you cut long boundary hedges in Houston?',
        answer:
          'Yes. Long hedged boundaries are common around Houston and are cut to keep them dense to the base, including reducing hedges that have been allowed to grow well beyond their intended line.',
      },
      {
        question: 'Do you take on larger rural plots near Crosslee and Barochan?',
        answer:
          'Yes. Larger plots are covered, with the work often combining garden maintenance and general outdoor maintenance across drives, boundaries and open ground.',
      },
      {
        question: 'When is the best time to cut a hedge?',
        answer:
          'It depends on the species, but most established garden hedging is best cut once growth has firmed up rather than during the flush of new growth. Timing is planned around what is growing in your garden, and nesting season is taken into account.',
      },
      {
        question: 'Do you work in the Houston conservation area?',
        answer:
          'Yes. Work at older village properties tends to focus on maintaining established planting and keeping the setting well kept rather than making significant changes.',
      },
    ],
  },
  {
    slug: 'inchinnan',
    name: 'Inchinnan',
    region: 'Renfrewshire',
    metaTitle: 'Landscaping in Inchinnan | Scotia Maintenance',
    metaDescription:
      'Landscaping and garden maintenance in Inchinnan, covering the village, Teucheen and surrounding semi-rural properties. Call 07766 636189.',
    image: '/images/front-garden-after-3.jpg',
    imageAlt: 'Finished driveway and porcelain path with white gravel borders at an Inchinnan property',
    mapQuery: 'Inchinnan, Renfrewshire, Scotland',
    intro:
      'Scotia Maintenance provides landscaping and garden maintenance in Inchinnan, covering the village, the streets around All Hallows and the more open properties towards Teucheen and the Black Cart. Seven days a week, 8am to 4pm.',
    body: [
      'Inchinnan is small, semi-rural and unusually open. Sitting on flat ground between the Black Cart and the White Cart with very little in the way of natural shelter, gardens here get the full effect of the prevailing wind. That exposure is the defining constraint. Tall or brittle planting struggles, newly planted stock needs staking and shelter to establish, and boundary hedging earns its place quickly by making everything behind it viable.',
      'The flat ground also drains slowly. Combined with heavy soil, that produces the familiar local picture of lawns that sit wet through winter and are slow to firm up in spring. Cutting too early on soft ground does lasting damage, so the season tends to start slightly later here than on better-drained sites, and it is worth being patient with the first cuts.',
      'Plots are generally larger than in the neighbouring towns, and many have a mix of formal garden and rougher ground. That suits a combined approach: maintaining the lawn and beds properly while keeping the wider ground, boundaries and access routes under control with more general outdoor maintenance.',
      'Because Inchinnan sits between Renfrew, Erskine and Paisley, it is easy to reach as part of the regular working area, and both one-off jobs and ongoing arrangements are straightforward to organise.',
    ],
    landmarks: ['All Hallows Church', 'Teucheen', 'Black Cart Water', 'Inchinnan Bridge'],
    travel:
      'Inchinnan is right in the middle of the coverage area between Renfrew, Erskine and Paisley, so visits are quick to arrange. Call 07766 636189 or send an enquiry.',
    services: ['garden-maintenance', 'planting', 'lawn-maintenance', 'outdoor-maintenance'],
    nearby: ['renfrew', 'erskine', 'bishopton', 'paisley'],
    faqs: [
      {
        question: 'What can be planted in an exposed Inchinnan garden?',
        answer:
          'Wind-tolerant species are the priority, since Inchinnan sits on open, flat ground with little natural shelter. Establishing a hedge or shelter belt on the windward side makes everything planted behind it far more likely to succeed.',
      },
      {
        question: 'Why is my Inchinnan lawn slow to dry out in spring?',
        answer:
          'Flat ground and heavy soil mean water sits rather than draining away. It is usually best to delay the first cuts until the ground can take a mower without rutting, since cutting soft ground causes damage that shows all season.',
      },
      {
        question: 'Do you cover larger plots around Inchinnan?',
        answer:
          'Yes. Larger and semi-rural plots are covered, and work often combines regular garden maintenance with general outdoor maintenance across boundaries and rougher ground.',
      },
      {
        question: 'Can you do a one-off tidy-up in Inchinnan?',
        answer:
          'Yes. One-off clearance and tidy-ups are available with no obligation to set up a recurring arrangement. Call 07766 636189 to arrange one.',
      },
    ],
  },
  {
    slug: 'bishopton',
    name: 'Bishopton',
    region: 'Renfrewshire',
    metaTitle: 'Landscaping in Bishopton | Scotia Maintenance',
    metaDescription:
      'Landscaping and garden maintenance in Bishopton, covering Dargavel Village, Old Bishopton and Rossland. Call Scotia Maintenance on 07766 636189.',
    image: '/images/rear-garden-after-1.jpg',
    imageAlt: 'Newly landscaped garden with gold gravel and a painted shed at a Bishopton new-build property',
    mapQuery: 'Bishopton, Renfrewshire, Scotland',
    intro:
      'Scotia Maintenance covers Bishopton for landscaping and garden maintenance, working across Dargavel Village, the older village around Old Bishopton, and Rossland. Available seven days a week, 8am to 4pm.',
    body: [
      'Bishopton is unusual in the coverage area because so much of its housing is new. The Dargavel development has added a large number of gardens that are only a few years old, and new-build gardens have a very specific set of problems. Topsoil is often shallow and spread thinly over compacted subsoil, turf laid on top of that struggles to root properly, and construction debris left below the surface causes dry patches and drainage problems that no amount of feeding will fix. Boundaries are young, so there is little shelter, and the plots frequently have no structure beyond a lawn and a fence.',
      'Getting a new-build garden working usually starts underneath. Relieving compaction, improving the growing medium and dealing with any buried debris does more for a struggling lawn than repeated treatments on the surface. After that, the useful work is adding the structure the garden was never given: defined beds, a path on the route that is already being worn into the grass, and planting that will eventually provide shelter and privacy as boundaries mature.',
      'Old Bishopton and the streets around the original village are a different proposition entirely, with older properties, established planting and mature boundaries that need conventional seasonal maintenance rather than remedial work.',
      'The area is also relatively exposed, sitting on rising ground with open country around it, which is worth accounting for when choosing planting on newer plots without established shelter.',
    ],
    landmarks: ['Dargavel Village', 'Old Bishopton', 'Rossland', 'Formakin'],
    travel:
      'Bishopton is covered alongside Erskine, Langbank and Inchinnan and is visited regularly. Call 07766 636189 to arrange a quote or a visit.',
    services: ['landscaping', 'lawn-maintenance', 'planting', 'garden-maintenance'],
    nearby: ['erskine', 'langbank', 'inchinnan', 'bowling'],
    faqs: [
      {
        question: 'Why is my new-build lawn in Dargavel Village struggling?',
        answer:
          'New-build lawns commonly sit on shallow topsoil over compacted subsoil, sometimes with construction debris underneath. That restricts rooting and drainage, so surface treatments rarely help until the ground beneath is improved.',
      },
      {
        question: 'Can you landscape a new-build garden from scratch?',
        answer:
          'Yes. New-build plots often have no structure beyond lawn and fencing, and adding defined beds, paths and shelter planting is common work across the Bishopton developments.',
      },
      {
        question: 'Do you cover Old Bishopton as well as the new estates?',
        answer:
          'Yes, the whole of Bishopton is covered, including the older village properties around Old Bishopton and Rossland where gardens are established and need conventional seasonal maintenance.',
      },
      {
        question: 'What planting suits an exposed Bishopton plot?',
        answer:
          'Hardy, wind-tolerant species are best on newer plots with immature boundaries, and establishing shelter on the exposed side first gives the rest of the garden a much better chance.',
      },
    ],
  },
  {
    slug: 'old-kilpatrick',
    name: 'Old Kilpatrick',
    region: 'West Dunbartonshire',
    metaTitle: 'Landscaping in Old Kilpatrick | Scotia Maintenance',
    metaDescription:
      'Landscaping and garden maintenance in Old Kilpatrick, covering the village, the canal side and the streets rising to the Kilpatrick Hills. Call 07766 636189.',
    image: '/images/rear-garden-after-2.jpg',
    imageAlt: 'Raised block-edged planting beds set in gold gravel at a property in Old Kilpatrick',
    mapQuery: 'Old Kilpatrick, West Dunbartonshire, Scotland',
    intro:
      'Scotia Maintenance provides garden maintenance and landscaping in Old Kilpatrick, covering the village, the streets along the Forth and Clyde Canal and the properties rising towards the Kilpatrick Hills. Seven days a week, 8am to 4pm.',
    body: [
      'Old Kilpatrick sits on a narrow band of ground between the Clyde and the hills, and gardens here are shaped by that position. Properties on the lower streets near the canal and the river are on damp ground and often quite shaded, which favours moss and makes lawns slow to recover after winter. Properties higher up drain better but sit on a slope, sometimes a fairly steep one, with gardens that step up away from the house.',
      'The proximity of the hills brings a steady pressure of natural growth along boundaries. Gardens backing onto rough ground need their edges managed regularly or they lose ground each season to encroaching scrub and self-seeded growth. Left for a couple of years, the boundary effectively moves inwards, and reclaiming it becomes a clearance job rather than a trim.',
      'The village has a mix of older stone properties with established gardens and later housing with more standard plots. Across both, the practical work is similar: keeping grass and edges under control, managing hedges and boundaries, dealing with damp shaded areas sensibly and clearing leaf fall in autumn.',
      'Because Old Kilpatrick sits directly on the route between Clydebank, Bowling and Dumbarton, it is covered as part of a regular run along the north bank, which makes scheduling straightforward.',
    ],
    landmarks: ['Forth & Clyde Canal', 'Kilpatrick Hills', 'Erskine Bridge', 'Dumbarton Road'],
    travel:
      'Old Kilpatrick is on the regular north bank route alongside Clydebank, Bowling and Dumbarton, so visits are easy to schedule. Call 07766 636189 to arrange one.',
    services: ['garden-maintenance', 'outdoor-maintenance', 'lawn-maintenance', 'garden-improvements'],
    nearby: ['bowling', 'clydebank', 'dumbarton', 'erskine'],
    faqs: [
      {
        question: 'Do you deal with overgrown boundaries backing onto the hills?',
        answer:
          'Yes. Gardens backing onto rough ground near the Kilpatrick Hills lose ground to self-seeded growth every season, and clearing and re-establishing those boundaries is regular work in Old Kilpatrick.',
      },
      {
        question: 'What can be done about a damp, shaded garden near the canal?',
        answer:
          'Damp shaded ground suits different planting than an open border, and grass often struggles there permanently. The area is assessed on site so a realistic approach can be recommended rather than repeatedly trying to grow a lawn that will not hold.',
      },
      {
        question: 'Can you work on a stepped garden in Old Kilpatrick?',
        answer:
          'Yes. Gardens stepping up away from the house are common on the higher streets, and reworking levels, steps and retaining edges is standard landscaping work here.',
      },
      {
        question: 'Do you cover the whole of Old Kilpatrick?',
        answer:
          'Yes, the whole village is covered including the canal side, the older village streets and the properties on the rising ground behind. Call 07766 636189 for a visit.',
      },
    ],
  },
  {
    slug: 'kilmacolm',
    name: 'Kilmacolm',
    region: 'Inverclyde',
    metaTitle: 'Landscaping in Kilmacolm | Scotia Maintenance',
    metaDescription:
      'Landscaping and garden maintenance in Kilmacolm, covering the village, Duchal and the surrounding large garden properties. Call 07766 636189.',
    image: '/images/rear-garden-after-3.jpg',
    imageAlt: 'Multi-tone sandstone patio leading to a garden shed at a Kilmacolm property',
    mapQuery: 'Kilmacolm, Inverclyde, Scotland',
    intro:
      'Scotia Maintenance covers Kilmacolm for landscaping and garden maintenance, working across the village, the Duchal area and the larger properties along the surrounding roads. Available seven days a week, 8am to 4pm.',
    body: [
      'Kilmacolm has some of the largest domestic gardens in the west of Scotland. Many properties sit in substantial grounds with mature specimen trees, long drives, tall established hedging and extensive lawns, and maintaining them properly is a different scale of job from a suburban garden. The volume of growth between visits through the summer is significant, so a consistent schedule matters far more here than in a small plot where a missed visit is easily recovered.',
      'The village sits high, on the edge of open moorland, and it is cold and exposed compared with the towns down on the Clyde. Spring arrives later, the first frosts come earlier, and wind off the higher ground is a real factor on the more open plots. Planting choices need to reflect that honestly, since species that thrive in a sheltered Glasgow back garden are not a safe bet here.',
      'Established hedging is a defining feature of Kilmacolm gardens, providing both shelter and the privacy that the layout of the village depends on. Keeping those hedges dense to the base and cut to a consistent line is ongoing work, and restoring a hedge that has been allowed to grow well beyond its intended size is a job worth doing properly once rather than repeatedly trimming the outside of it.',
      'Work here often combines garden maintenance with wider grounds and outdoor maintenance: drives, boundaries, leaf clearance and keeping the setting of the property in good order through the year.',
    ],
    landmarks: ['Knapps Loch', 'Duchal', 'Kilmacolm village', 'Kilmacolm Golf Club'],
    travel:
      'Kilmacolm is at the western edge of the coverage area, reached via Bridge of Weir and Langbank. Calling ahead on 07766 636189 is the best way to arrange a visit or a quote.',
    services: ['garden-maintenance', 'planting', 'outdoor-maintenance', 'landscaping'],
    nearby: ['bridge-of-weir', 'houston', 'langbank'],
    faqs: [
      {
        question: 'Do you maintain large gardens and grounds in Kilmacolm?',
        answer:
          'Yes. Larger properties with extensive lawns, mature trees and long hedged boundaries are regular work, with the visit schedule set to match the volume of growth rather than a standard interval.',
      },
      {
        question: 'Does Kilmacolm need different planting to gardens nearer Glasgow?',
        answer:
          'Generally yes. The village sits high on the edge of moorland, so it is colder and more exposed, spring comes later and hardier species are a safer choice than plants that would do well in a sheltered city garden.',
      },
      {
        question: 'Can you restore a hedge that has grown too large?',
        answer:
          'Yes. Reducing an overgrown hedge back to a manageable line is common work in Kilmacolm, and doing it properly once is more effective than trimming the outside of an ever-expanding shape each year.',
      },
      {
        question: 'How far in advance should I book?',
        answer:
          'Kilmacolm is at the western edge of the area covered, so it helps to call 07766 636189 in advance so a visit can be scheduled alongside other work in that direction.',
      },
    ],
  },
  {
    slug: 'bowling',
    name: 'Bowling',
    region: 'West Dunbartonshire',
    metaTitle: 'Landscaping in Bowling | Scotia Maintenance',
    metaDescription:
      'Landscaping and garden maintenance in Bowling, covering the harbour, the canal basin and the village. Call Scotia Maintenance on 07766 636189.',
    image: '/images/rear-garden-after-4.jpg',
    imageAlt: 'Finished rear garden with sandstone patio, gravel and a garden shed at a village property in Bowling',
    mapQuery: 'Bowling, West Dunbartonshire, Scotland',
    intro:
      'Scotia Maintenance provides garden maintenance and landscaping in Bowling, covering the village, the streets around the harbour and canal basin, and the properties towards Dunglass and Auchentorlie. Seven days a week, 8am to 4pm.',
    body: [
      'Bowling is a small village squeezed between the Clyde, the Forth and Clyde Canal and the rising ground behind, and gardens here are correspondingly compact. Plots tend to be narrow, often long, and bounded by walls or fences rather than open to neighbouring ground. The confined shape means proportion matters: planting that is too large for the space quickly dominates it, and a hedge left uncut for two seasons can take a noticeable share of a small garden.',
      'The waterside position brings damp and salt. Ground close to the canal and the shore stays moist, timber boundaries and edging weather quickly, and anything planted without shelter takes wind straight off the water. Gardens set back against the hill are damper and shadier again, where moss establishes readily in lawns and on paving.',
      'Practical work in Bowling is usually about control and upkeep: keeping grass, hedges and boundaries in proportion, clearing paths and hard standing that green over quickly in damp conditions, and dealing with leaf and storm debris seasonally. Where a garden has been neglected, clearance comes first, and it is often possible to restore a small plot to a manageable state in a single visit.',
      'Bowling sits on the regular north bank route between Old Kilpatrick and Dumbarton, so it is easy to include in scheduled work.',
    ],
    landmarks: ['Bowling Harbour', 'Bowling Basin', 'Forth & Clyde Canal', 'Dunglass', 'Auchentorlie'],
    travel:
      'Bowling is covered on the regular north bank run alongside Old Kilpatrick, Clydebank and Dumbarton. Call 07766 636189 to arrange a visit.',
    services: ['garden-maintenance', 'outdoor-maintenance', 'lawn-maintenance', 'planting'],
    nearby: ['old-kilpatrick', 'dumbarton', 'clydebank', 'bishopton'],
    faqs: [
      {
        question: 'Do you cover Bowling village and the harbour area?',
        answer:
          'Yes, the whole of Bowling is covered including the village, the streets around the harbour and canal basin and the properties towards Dunglass and Auchentorlie.',
      },
      {
        question: 'Why does moss build up so quickly in Bowling gardens?',
        answer:
          'The combination of damp waterside ground, shade from the rising land behind and consistently high moisture creates ideal conditions for moss on both lawns and paving. Managing it means addressing shade and drainage as well as treating the surface.',
      },
      {
        question: 'What planting copes with the wind off the water?',
        answer:
          'Salt and wind tolerant species are needed on plots exposed to the Clyde. Suitable choices are made after seeing how sheltered the specific garden is, since it varies considerably within the village.',
      },
      {
        question: 'Can a small overgrown garden be sorted in one visit?',
        answer:
          'Often yes. Bowling plots are generally compact, so a neglected garden can frequently be cleared and brought back to a manageable state in a single visit, with all waste taken away.',
      },
    ],
  },
  {
    slug: 'langbank',
    name: 'Langbank',
    region: 'Renfrewshire',
    metaTitle: 'Landscaping in Langbank | Scotia Maintenance',
    metaDescription:
      'Landscaping and garden maintenance in Langbank, covering the village and the sloping riverside properties. Call Scotia Maintenance on 07766 636189.',
    image: '/images/rear-garden-after-5.jpg',
    imageAlt: 'Raised planting bed with a potted hydrangea at a Langbank property overlooking the Clyde',
    mapQuery: 'Langbank, Renfrewshire, Scotland',
    intro:
      'Scotia Maintenance covers Langbank for landscaping and garden maintenance, working across the village and the properties on the slopes above the Clyde towards Gleddoch. Available seven days a week, 8am to 4pm.',
    body: [
      'Langbank sits on the south bank of the Clyde on ground that falls away towards the river, and almost everything about gardening here follows from that. Gardens are frequently on a slope or already terraced, with the outlook over the water that makes the village desirable also meaning full exposure to the wind coming down the estuary. Salt-laden westerlies are a genuine constraint on what will grow, particularly on the more open plots without established shelter.',
      'Sloping gardens need to be worked with rather than against. Terracing that was put in decades ago often needs attention, retaining edges fail gradually and then suddenly, and soil movement after heavy rain is a recurring issue. Creating a genuinely usable level area, whether for seating, drying or simply somewhere flat to stand, is one of the most common landscaping requests in the village.',
      'Planting decisions matter more here than in a sheltered garden, because the failure rate for unsuitable species is high. Establishing a shelter belt or hedge on the windward boundary changes what is possible in the rest of the garden, and it is usually the first thing worth investing in on an exposed plot.',
      'Maintenance visits are generally straightforward: grass, edges, hedges and seasonal clearance. But the sloping ground means jobs take longer than the plot size suggests, and that is reflected honestly in quotes.',
    ],
    landmarks: ['Langbank village', 'Gleddoch', 'Clyde estuary', 'Langbank station'],
    travel:
      'Langbank is covered alongside Bishopton and Kilmacolm on the western side of the area. Call 07766 636189 to arrange a visit or discuss a project.',
    services: ['landscaping', 'planting', 'garden-maintenance', 'garden-improvements'],
    nearby: ['bishopton', 'kilmacolm', 'erskine', 'bridge-of-weir'],
    faqs: [
      {
        question: 'Can you create a level area in a sloping Langbank garden?',
        answer:
          'Yes. Cutting in a usable flat area is one of the most common landscaping requests in Langbank, and it typically involves reworking levels and putting in retaining edges that will hold.',
      },
      {
        question: 'What planting survives the wind off the Clyde at Langbank?',
        answer:
          'Salt and wind tolerant species are essential on exposed riverside plots. Establishing shelter planting on the windward boundary first is usually the best investment, because it makes a much wider range of planting viable behind it.',
      },
      {
        question: 'Do failing terraces and retaining edges get repaired?',
        answer:
          'Yes. Older terracing and retaining edges are common in Langbank and frequently need reinstating. The cause of the failure is identified first, since rebuilding without addressing drainage tends to lead to the same outcome.',
      },
      {
        question: 'Do you cover the whole village?',
        answer:
          'Yes, Langbank and the surrounding properties towards Gleddoch are covered. Call 07766 636189 to arrange a time.',
      },
    ],
  },
  {
    slug: 'glasgow',
    name: 'Glasgow',
    region: 'Glasgow City',
    metaTitle: 'Landscaping in Glasgow | Scotia Maintenance',
    metaDescription:
      'Landscaping and garden maintenance across Glasgow, covering the west end, southside, east end and surrounding suburbs. Call Scotia Maintenance on 07766 636189.',
    image: '/images/rear-garden-after-7.jpg',
    imageAlt: 'Landscaped Glasgow back garden with a sandstone patio, gold gravel and raised planting beds',
    mapQuery: 'Glasgow, Scotland',
    intro:
      'Scotia Maintenance provides landscaping and garden maintenance across Glasgow, from tenement back gardens in the west end and southside to the bungalow and villa streets of the suburbs and the estates on the eastern side of the city. Seven days a week, 8am to 4pm.',
    body: [
      'Glasgow gardens fall into a few distinct types, each with its own demands. Tenement back courts and drying greens are shared spaces where the work is about keeping communal ground under control: grass, weed growth through paving, encroaching shrubs and general clearance. Access is usually through a close or a back lane, which is the single biggest practical constraint on what can be done and how it has to be staged.',
      'The sandstone terraces and villas of the west end and parts of the southside have deeper, more established rear gardens, often heavily shaded by mature trees and neighbouring buildings. Shade is the recurring problem: grass thins under it, moss takes the gaps, and planting has to be chosen for low light rather than for how it looks in a sunny border. Reworking a permanently struggling shaded lawn into something that suits the conditions is frequently better value than fighting it every season.',
      'The suburban bungalow and semi belt across the south and east of the city has more conventional gardens (proper lawns, defined borders and boundary hedging), where regular seasonal maintenance keeps everything in order and landscaping work is usually about updating a layout that has stopped suiting the household.',
      'Across all of these, city gardens share the same pressures: limited access, close neighbours, and a need for waste to be removed rather than stored. Work is scheduled and staged with those constraints in mind.',
    ],
    landmarks: ['West end', 'Southside', 'East end', 'Tenement back courts', 'City bungalow belt'],
    travel:
      'Glasgow is at the centre of the coverage area and is worked in regularly, so visits are generally easy to arrange at short notice. Call 07766 636189 or send an enquiry through the site.',
    services: [
      'garden-maintenance',
      'landscaping',
      'lawn-maintenance',
      'outdoor-maintenance',
      'garden-improvements',
    ],
    nearby: ['rutherglen', 'bearsden', 'renfrew', 'paisley', 'east-kilbride'],
    faqs: [
      {
        question: 'Do you work on tenement back gardens in Glasgow?',
        answer:
          'Yes. Shared back courts and drying greens are regular work, covering grass, weed growth, encroaching shrubs and clearance. Access through a close or lane is checked at the first visit because it affects how the job is staged.',
      },
      {
        question: 'Which parts of Glasgow do you cover?',
        answer:
          'Glasgow is covered broadly, including the west end, southside, east end and the surrounding suburbs. Call 07766 636189 to confirm coverage for a specific address.',
      },
      {
        question: 'My Glasgow back garden is too shaded for grass. What are the options?',
        answer:
          'Heavily shaded city gardens often suit a different treatment than a lawn, whether that is shade-tolerant planting, a hard surface or a mix of both. The garden is assessed on site so a realistic option can be recommended.',
      },
      {
        question: 'Can you remove garden waste from a city property?',
        answer:
          'Yes. All arisings and green waste are taken away as part of the job, which matters in city gardens where there is often nowhere sensible to store it.',
      },
    ],
  },
  {
    slug: 'milngavie',
    name: 'Milngavie',
    region: 'East Dunbartonshire',
    metaTitle: 'Landscaping in Milngavie | Scotia Maintenance',
    metaDescription:
      'Landscaping and garden maintenance in Milngavie, covering Clober, Craigton, Barloch and the streets towards Mugdock. Call 07766 636189.',
    image: '/images/rear-garden-after-6.jpg',
    imageAlt: 'Close-up of multi-tone sandstone patio paving in an improved Milngavie garden',
    mapQuery: 'Milngavie, East Dunbartonshire, Scotland',
    intro:
      'Scotia Maintenance carries out landscaping and garden maintenance in Milngavie, covering Clober, Craigton, Barloch, Tannoch and the streets running out towards Mugdock. Available seven days a week, 8am to 4pm.',
    body: [
      'Milngavie sits at the point where suburban Glasgow gives way to open country, and its gardens reflect that transition. Plots are generally generous, many back onto woodland, water or open ground, and mature trees are a defining feature of much of the town. That setting is the reason people live here and also the source of most of the maintenance work.',
      'Autumn is the heaviest season. Leaf fall from mature trees is substantial, and leaves left lying on grass and paths through a wet Scottish autumn damage the lawn beneath and make paved surfaces slippery. Regular clearance from October through to late November is more important in Milngavie than in most of the coverage area. Boundaries backing onto woodland also need managing year-round, because self-seeded growth steadily encroaches on any garden that is not holding its edge.',
      'Shade is the other constant. Established tree cover produces dry shade where grass thins and moss dominates, and the honest answer in some gardens is that a section will never hold a decent lawn. Those areas usually work far better replanted with shade-tolerant species or given over to a hard surface, and that assessment is made on site rather than by repeating treatments that will not take.',
      'Landscaping work in Milngavie often involves reclaiming space that mature planting has gradually absorbed: opening a lawn back up, reinstating a path that has disappeared, or clearing and replanting a woodland-edge boundary that has crept inwards over the years.',
    ],
    landmarks: ['Mugdock Country Park', 'Allander Water', 'Clober', 'Craigton', 'Tannoch Loch', 'West Highland Way'],
    travel:
      'Milngavie is covered alongside Bearsden and the north west of Glasgow and is visited regularly. Call 07766 636189 or send an enquiry to arrange a visit.',
    services: ['garden-maintenance', 'garden-improvements', 'outdoor-maintenance', 'planting'],
    nearby: ['bearsden', 'glasgow', 'clydebank', 'dumbarton'],
    faqs: [
      {
        question: 'Do you do autumn leaf clearance in Milngavie?',
        answer:
          'Yes. Leaf fall is heavy across Milngavie because of the mature tree cover, and regular clearance from October to late November protects lawns and keeps paths from becoming slippery.',
      },
      {
        question: 'What can be done about grass that will not grow under trees?',
        answer:
          'Dry shade under established trees rarely supports a good lawn no matter how it is treated. Replanting with shade-tolerant species or putting in a hard surface usually gives a far better long-term result, and the area is assessed on site before recommending either.',
      },
      {
        question: 'Can you manage a boundary backing onto woodland?',
        answer:
          'Yes. Gardens backing onto Mugdock and other woodland lose ground to self-seeded growth each season, and clearing and re-establishing those boundaries is regular work in Milngavie.',
      },
      {
        question: 'Which parts of Milngavie do you cover?',
        answer:
          'All of Milngavie is covered, including Clober, Craigton, Barloch, Tannoch and the streets towards Mugdock. Call 07766 636189 to arrange a visit.',
      },
    ],
  },
];

export const areaSlugs = areas.map((a) => a.slug);

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}

/** Areas in the order they are listed on the site, alphabetical by name. */
export const areasAlphabetical = [...areas].sort((a, b) => a.name.localeCompare(b.name, 'en-GB'));
