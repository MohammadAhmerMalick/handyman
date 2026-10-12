export type Testimonial = {
  avatarSrc: string
  id: string
  name: string
  quote: string
  role: string
  serviceSlug: string
  serviceTitle: string
}

const avatar = (initials: string) => {
  return `https://placehold.co/96x96/222222/ffc527?text=${initials}`
}

/** Example reviews for the home carousel. Replace with real customer quotes later. */
export const testimonials: Testimonial[] = [
  {
    avatarSrc: avatar('LH'),
    id: 'layla-hassan',
    name: 'Layla Hassan',
    quote:
      'Working with Handyman transformed our Marina flat. They explained each stage, protected the rooms they were not in, and the finished spaces look better than we expected.',
    role: 'Homeowner, Dubai Marina',
    serviceSlug: 'villa-flat-office-and-shop-renovation',
    serviceTitle: 'Villa, Flat, Office & Shop Renovation',
  },
  {
    avatarSrc: avatar('OF'),
    id: 'omar-al-farsi',
    name: 'Omar Al Farsi',
    quote:
      'I was surprised by how quickly they understood our AC problems. They serviced the units, cleared the drains, and the apartments were cooling again within the agreed visit.',
    role: 'Property Manager, Jumeirah',
    serviceSlug: 'air-conditioning-services',
    serviceTitle: 'Air Conditioning Services',
  },
  {
    avatarSrc: avatar('PN'),
    id: 'priya-nair',
    name: 'Priya Nair',
    quote:
      'A dripping kitchen tap and a wardrobe door that would not shut were both sorted in one visit. The door closes flush now, and the tap has stayed dry.',
    role: 'Resident, Abu Dhabi',
    serviceSlug: 'plumbing-and-carpentry',
    serviceTitle: 'Plumbing & Carpentry',
  },
  {
    avatarSrc: avatar('JW'),
    id: 'james-whitfield',
    name: 'James Whitfield',
    quote:
      'Cracked plaster and a tired paint finish were handled together. They prepared the walls properly, and the new colour is even from one room to the next.',
    role: 'Villa Owner, Arabian Ranches',
    serviceSlug: 'masonry-and-painting',
    serviceTitle: 'Masonry & Painting',
  },
  {
    avatarSrc: avatar('FM'),
    id: 'fatima-al-mazrouei',
    name: 'Fatima Al Mazrouei',
    quote:
      'We sent a short office list: loose fittings, a latch that stuck, and a few wall fixings. Everything was finished the same day, and the rooms were left tidy.',
    role: 'Facilities Coordinator, Sharjah',
    serviceSlug: 'handyman-and-general-maintenance',
    serviceTitle: 'Handyman & General Maintenance',
  },
  {
    avatarSrc: avatar('DO'),
    id: 'daniel-okonkwo',
    name: 'Daniel Okonkwo',
    quote:
      'Worn switches and a shop light were replaced during our quieter hours. Each point was tested before they packed up, and the floor is evenly lit again.',
    role: 'Shop Owner, Deira',
    serviceSlug: 'electrical',
    serviceTitle: 'Electrical',
  },
  {
    avatarSrc: avatar('AK'),
    id: 'aisha-khan',
    name: 'Aisha Khan',
    quote:
      'Failed bathroom sealant and sagging kitchen doors were sorted without a full strip-out. They resealed the wet areas, refitted the cabinets, and both rooms are usable again.',
    role: 'Apartment Owner, Al Barsha',
    serviceSlug: 'kitchen-and-bathroom-renovation',
    serviceTitle: 'Kitchen & Bathroom Renovation',
  },
  {
    avatarSrc: avatar('MS'),
    id: 'michael-santos',
    name: 'Michael Santos',
    quote:
      'Flat-packed desks and shelving for our meeting room were assembled, and the tall units were anchored to the wall. The space was ready before staff arrived the next morning.',
    role: 'Office Admin, Business Bay',
    serviceSlug: 'furniture-assembly',
    serviceTitle: 'Furniture Assembly',
  },
]
