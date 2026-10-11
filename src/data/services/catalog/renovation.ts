import type { ServiceSeed } from '@/data/services/buildService'
import { createSeed } from '@/data/services/catalog/createSeed'

const category = 'renovation' as const

export const renovationSeeds: ServiceSeed[] = [
  createSeed(category, {
    angle:
      'coordinated refurbishment for residential and commercial spaces, from layout adjustments to finished surfaces',
    benefits: [
      'One brief covers multiple rooms instead of chasing separate contractors',
      'Work is phased to suit tenants, staff, or family routines where possible',
      'Finishes and fixings are discussed before materials are ordered',
    ],
    includes: [
      'site walk-through and scope planning with realistic sequencing',
      'coordination of carpentry, plumbing, painting, and related trades within agreed limits',
      'protection of occupied areas and tidy daily clear-up where practical',
      'snagging review and a practical list of any items deferred to a later phase',
    ],
    keywords: [
      'villa renovation UAE',
      'office refurbishment Dubai',
      'shop fit-out maintenance',
    ],
    outcome:
      'rooms are brought back to a consistent, usable standard with agreed finishes and clear handover notes for ongoing care',
    problems: [
      'dated layouts that no longer suit how the space is used',
      'patch repairs that leave mismatched finishes across rooms',
      'water or wear damage that affects walls, floors, and joinery together',
      'shop or office fit-outs that need updating without long closure',
    ],
    related: [
      'plumbing-and-carpentry',
      'kitchen-and-bathroom-renovation',
      'masonry-and-painting',
    ],
    slug: 'villa-flat-office-and-shop-renovation',
    tips: [
      'Share floor plans, previous snag lists, and building access rules early',
      'Decide which rooms must stay usable during the works',
      'Photograph existing damage before demolition or strip-out begins',
    ],
    title: 'Villa, Flat, Office & Shop Renovation',
    whenNeeded:
      'Book when a property needs a planned refresh, a change of use, or repair work that spans several trades and rooms.',
  }),
  createSeed(category, {
    angle:
      'safe positioning, connection, and basic commissioning of household and light commercial appliances',
    benefits: [
      'Reduces risk of leaks or damage from incorrect DIY installation',
      'Saves time on delivery day when access and tools are ready',
      'Clear advice on what needs a licensed specialist if limits are reached',
    ],
    complianceNote:
      'Gas appliance work, new dedicated circuits, and complex refrigeration repairs are referred to appropriately licensed specialists.',
    includes: [
      'unpacking, positioning, and levelling within manufacturer tolerances',
      'basic water, waste, or ventilation connections where within handyman scope',
      'securing built-in or stacked units with appropriate fixings',
      'operational check and tidy removal of packaging from the work area',
    ],
    outcome:
      'appliances sit level, secure, and ready to use with connections checked and simple operating guidance shared',
    problems: [
      'new cookers, hoods, or laundry units delivered without suitable fixings or access',
      'wobble or vibration from uneven floors or missing brackets',
      'unclear whether water, waste, or electrical points meet manufacturer guidance',
      'old units removed but new ones do not align with existing cut-outs',
    ],
    related: [
      'kitchen-and-bathroom-renovation',
      'plumbing-and-carpentry',
      'electrical',
    ],
    slug: 'appliance-installation',
    tips: [
      'Keep the installation manual and any template diagrams on site',
      'Confirm lift access and parking for bulky deliveries in advance',
      'Run a quick leak or airflow check during the first week of use',
    ],
    title: 'Appliance Installation',
    whenNeeded:
      'Arrange when a new appliance arrives, an old unit is replaced, or existing fixings no longer suit the product manual.',
  }),
  createSeed(category, {
    angle:
      'light metal fabrication and on-site welding for gates, frames, brackets, and custom steelwork',
    benefits: [
      'Tailored metal solutions instead of forcing standard sizes',
      'Repairs can extend the life of existing gates and structures',
      'Work is planned around community quiet hours where required',
    ],
    complianceNote:
      'Structural steel modifications, certified fire escapes, and pressure-vessel welding require specialist engineering sign-off and are outside this scope.',
    includes: [
      'measurement and marking for cuts, welds, or new brackets',
      'on-site welding and grinding within practical access limits',
      'alignment of gates, frames, and sliding components',
      'basic surface prep and touch-up paint where agreed',
    ],
    outcome:
      'metalwork is aligned, welded where agreed, and finished for safe daily use with maintenance guidance for coastal conditions',
    problems: [
      'rusted or bent gate hinges and frames after seasonal humidity',
      'missing brackets for canopies, signage, or outdoor fixtures',
      'sections of railing or grille that no longer meet safety expectations',
      'custom sizes needed where off-the-shelf metal parts do not fit',
    ],
    related: [
      'outdoor-and-villa-maintenance',
      'aluminum-and-glass',
      'handyman-and-general-maintenance',
    ],
    slug: 'welding-and-fabrication',
    tips: [
      'Note any powder-coated finishes that need colour-matched touch-up',
      'Keep pets and pedestrians clear of sparking areas during welding',
      'Rinse salt buildup from coastal metalwork periodically',
    ],
    title: 'Welding & Fabrication',
    whenNeeded:
      'Use when steel gates, railings, or frames need repair, extension, or a fabricated solution that suits UAE weather.',
  }),
  createSeed(category, {
    angle:
      'combined pipework, fixture, and woodwork repairs typical of busy UAE kitchens, bathrooms, and living areas',
    benefits: [
      'Pairs wet-area fixes with the joinery they often damage',
      'Fewer repeat visits for related symptoms in the same room',
      'Practical advice on humidity and ventilation for timber longevity',
    ],
    includes: [
      'isolation and repair of accessible leaks and fixture connections',
      'adjustment, easing, and hinge replacement for doors and shutters',
      'cabinet alignment, shelf pinning, and soft-close tuning where parts allow',
      'silicone touch-ups and seal checks at wet-area junctions within scope',
    ],
    keywords: [
      'plumber and carpenter Dubai',
      'kitchen leak repair UAE',
      'door adjustment handyman',
    ],
    outcome:
      'water-related faults are contained, timber elements operate smoothly, and you know which items need a follow-up specialist visit',
    problems: [
      'dripping mixers or loose traps staining cabinets and floors',
      'swollen or misaligned cupboard doors after humidity swings',
      'squeaking or sticking internal doors in villas and apartments',
      'minor pipe vibrations or loose brackets behind vanities',
    ],
    related: [
      'plumbing',
      'carpentry',
      'kitchen-and-bathroom-renovation',
      'bathroom',
    ],
    slug: 'plumbing-and-carpentry',
    tips: [
      'Turn off water at the local isolator before the appointment if safe to do so',
      'Leave under-sink areas clear for trap and valve access',
      'Report recurring leaks promptly to limit cabinet swelling',
    ],
    title: 'Plumbing & Carpentry',
    whenNeeded:
      'Call when leaks, stiff doors, or worn cabinetry appear together and you want one visit to stabilise the space.',
  }),
]
