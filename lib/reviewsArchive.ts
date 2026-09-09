import type { ArchivedReview } from './reviews';

/**
 * Owner-supplied reviews.
 *
 * The Places API only ever returns the five reviews Google currently chooses to
 * surface, and older ones drop out of that set permanently. Everything Google
 * holds is kept here so the /reviews page shows the full set regardless of
 * which five the API is returning on any given day.
 *
 * Entries are matched against the live Google response by author name and
 * opening text, so a review listed here will not appear twice while Google is
 * still returning it.
 *
 * Timestamps on the five newest came from the Places API. The rest are dated
 * from Google's relative wording ("7 days ago"), so their times are accurate to
 * the day and ordered to match how Google lists them.
 *
 * Only add reviews genuinely left by a customer. publishTime must be an ISO
 * date string (YYYY-MM-DD is enough).
 */
export const archivedReviews: ArchivedReview[] = [
  {
    author: 'Rebecca Boyce',
    rating: 5,
    publishTime: '2026-09-06T08:57:22Z',
    text: 'Done my grouting for my driveway and an excellent job was done ! Would recommend his work to anyone! Thanks again team :)',
  },
  {
    author: 'Sharon Redmond',
    rating: 5,
    publishTime: '2026-09-04T13:38:13Z',
    text: 'Gr8 price for the job\nJob carried  out to a high standard',
  },
  {
    author: 'Lynn Huskisson',
    rating: 5,
    publishTime: '2026-09-03T17:12:16Z',
    text: 'Scott and the boys have done a brilliant job transforming my back garden. They installed a new shed and built a solid sub base for it to sit on. Really happy with the finished result and the quality of their work. Would definitely recommend!',
  },
  {
    author: 'Dylan Stevenson',
    rating: 5,
    publishTime: '2026-09-03T15:59:14Z',
    text: 'Great job by Scott and the team at Scotia Maintenance! They did a fantastic job in both my front and back garden, including hedge trimming, grass cutting and removing a large amount of garden rubbish. Very friendly, professional and hardworking. Would definitely recommend Scotia Maintenance! 👏🌿',
  },
  {
    author: 'Daniel McCrory',
    rating: 5,
    publishTime: '2026-09-03T15:48:29Z',
    text: 'We recently had Scott and his team from Scotia Maintenance carry out work in my uncle’s back garden, including laying a brand-new patio and new slabbing. From start to finish, the service was excellent. Scott provided us with a great quote and was professional, reliable and helpful throughout the whole job.\n\nThe finished work looks fantastic and has completely transformed the garden. The team worked hard, kept everything tidy and paid great attention to detail. We’re really happy with the results and would definitely recommend Scott and the team at Scotia Maintenance to anyone looking for quality work at a great price. Thanks again!',
  },
  {
    author: 'Craig Roberts',
    rating: 5,
    publishTime: '2026-09-02T12:00:00Z',
    text: 'Have not long moved into new house and needed to clear the garden and make it as low maintenence as possible due to new job taking me away on business all the time. Wife took to do with design and Scott came back to us with a very competitive price. I gave the go ahead, went away for a business trip and the garden was transformed on my return. Happy wife, happy life as they say. No more moaning about cutting the grass in my house! Cheers Scott',
  },
  {
    author: 'Danielle davidson',
    rating: 5,
    publishTime: '2026-09-02T11:00:00Z',
    text: 'Scott and his team came and did a great job doing some work outside my house. He cut the grass, tidied up the garden area and made everything look much neater, they added planters which I hadn’t previously thought about. He was reliable, friendly and worked quickly while still doing a really good job. I’m very happy with the results and would definitely recommend Scott and his team for any garden or outdoor work.',
  },
  {
    author: 'Kim Easton',
    rating: 5,
    publishTime: '2026-09-02T10:00:00Z',
    text: 'Was a bit apprehensive about these guys as had not heard about them previously and never had anyone else i knews experience. But the price quoted was good and we decided to give them a go. So glad we did, the work was carried out professionally and completed ahead of schedule too. They cleaned up each day also which was great as we have young kids who love the garden and a labrador that does not understand the word no. Really happy with our results and sister in law has already booked in too. Would definitely recommend!',
  },
  {
    author: 'Adrianne Hunter',
    rating: 5,
    publishTime: '2026-09-02T09:00:00Z',
    text: 'I had a garden fence that came down due to high winds, Scott installed a new fence for me and repaired the roof on my shed. A job well done, thanks Scott and the Scotia Maintenance team.',
  },
  {
    author: 'Stacey Mccusker',
    rating: 5,
    publishTime: '2026-09-02T08:00:00Z',
    text: 'Scott came and build my back fence that’s fell over with the bad winds which opened up my whole back and I felt so insecure in my house with it opened up. Scott and his team came and got up rapid and it’s looking fantastic now thank you to Scott and his team. Would highly recommend this company',
  },
];
