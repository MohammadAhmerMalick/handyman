import type { ServiceSeed } from '@/data/services/buildService'
import { createSeed } from '@/data/services/catalog/createSeed'

const category = 'cleaning' as const

export const cleaningSeeds: ServiceSeed[] = [
  createSeed(category, {
    angle: 'cleaning after handyman visits to remove dust and debris',
    benefits: [
      'Comfortable re-entry after same-day works',
      'Reduces dust circulating through AC returns',
      'Pairs naturally with installation visits',
    ],
    includes: [
      'HEPA vacuuming of floors and soft edges',
      'damp wiping of hard surfaces and sills',
      'spot cleaning of glass touched during installs',
      'bagging of small offcuts where agreed',
    ],
    outcome:
      'rooms are vacuumed, wiped, and ready to use without construction dust',
    problems: [
      'fine dust on skirting after drilling',
      ' adhesive residue near mounts',
      'smudges on glass from fingerprinted panels',
      'debris in balcony tracks',
    ],
    related: ['post-renovation-cleaning'],
    slug: 'post-maintenance-cleaning',
    tips: [
      'Cover AC vents during nearby drilling when possible',
      'Ventilate while wipes dry',
      'Schedule cleans after paint cure times',
    ],
    title: 'Post-Maintenance Cleaning',
    whenNeeded:
      'Book when repairs or installations leave fine dust on floors and surfaces.',
  }),
  createSeed(category, {
    angle: 'detailed clean following decoration or minor refurbishment',
    benefits: [
      'Marketing-ready finish for rentals',
      'Healthier air quality after dusty works',
      'Highlights any missed paint snags',
    ],
    includes: [
      'top-down dusting including light fittings',
      'tile and sanitary ware detailing',
      'inside window tracks and frames',
      'floor wash suited to material type',
    ],
    outcome:
      'surfaces are dust-free, fixtures shine, and floors are ready for furniture',
    problems: [
      'paint chalk on switches after repainting',
      'silicone smears on tiles',
      'plaster dust in wardrobe carcasses',
      'masking tape residue on glass',
    ],
    related: ['post-maintenance-cleaning', 'kitchen-deep-cleaning'],
    slug: 'post-renovation-cleaning',
    tips: [
      'Confirm cure times before washing new paint',
      'Open windows during product use where safe',
      'Inspect with lighting angles for missed dust',
    ],
    title: 'Post-Renovation Cleaning',
    whenNeeded:
      'Arrange when paint and silicone have cured and rooms need move-in standard cleanliness.',
  }),
  createSeed(category, {
    angle: 'focused degreasing of kitchens after heavy use or post-works',
    benefits: [
      'Better extractor performance after filter exterior clean',
      'Pleasant cooking environment for families',
      'Prepares kitchens for tenancy photos',
    ],
    includes: [
      'degrease of hob, splashback, and extractor exterior',
      'cabinet front and handle cleaning',
      'sink and tap descaling within product limits',
      'floor degrease at cooking zones',
    ],
    outcome:
      'grease hotspots are treated, surfaces are sanitised, and appliances exteriors gleam',
    problems: [
      'sticky residue above hobs',
      'grease filters dripping when running extractors',
      'cabinet handles darkened with oils',
      'grout discolouration behind bins',
    ],
    related: ['post-renovation-cleaning', 'vent-cover-cleaning'],
    slug: 'kitchen-deep-cleaning',
    tips: [
      'Run extractor during cooking to limit buildup',
      'Wipe spills same day to reduce staining',
      'Confirm appliance warranty rules before panel removal',
    ],
    title: 'Kitchen Deep Cleaning',
    whenNeeded:
      'Use when extractor grease, hob surrounds, or cabinets need more than routine housekeeping.',
  }),
  createSeed(category, {
    angle: 'sanitary-focused cleaning for bathrooms and en-suites',
    benefits: [
      'Fresher bathrooms in hard-water areas',
      'Highlights grout needing maintenance not just cleaning',
      'Safer anti-slip floors after proper drying',
    ],
    includes: [
      'descaling of glass and chrome within safe products',
      'tile and grout surface treatment',
      'sanitary ware sanitisation',
      'exhaust fan exterior wipe where reachable',
    ],
    outcome:
      'tiles, fixtures, and glass are descaled and sanitised with ventilation maintained',
    problems: [
      'limescale on shower glass',
      'mildew at silicone lines',
      'blocked shower drains slowing water away',
      'tarnished fixtures from hard water',
    ],
    related: ['tile-and-grout-cleaning', 'sealant-and-grout-maintenance'],
    slug: 'bathroom-deep-cleaning',
    tips: [
      'Use squeegees after showers to limit scale',
      'Ventilate during and after cleaning',
      'Report failing silicone rather than masking with products',
    ],
    title: 'Bathroom Deep Cleaning',
    whenNeeded:
      'Book before guest stays or after maintenance that disturbed seals and tiles.',
  }),
  createSeed(category, {
    angle: 'mechanical and chemical cleaning of tile surfaces and grout lines',
    benefits: [
      'Restores appearance without retiling',
      'Identifies grout that needs repair not bleach',
      'Safer methods than harsh DIY acids',
    ],
    includes: [
      'application of suitable tile-safe cleaners',
      'agitation of grout lines with appropriate tools',
      'rinse and dry planning to avoid slips',
      'advice on ongoing neutral cleaners',
    ],
    outcome:
      'grout lines are brighter and tiles show even sheen without damaging glazes',
    problems: [
      'darkened grout in kitchen toe kicks',
      'soap scum on bathroom floor tiles',
      'stubborn marks in entrance areas',
      'wrong cleaners etching stone-look tiles',
    ],
    related: ['sealant-and-grout-maintenance', 'bathroom-deep-cleaning'],
    slug: 'tile-and-grout-cleaning',
    tips: [
      'Use entrance mats to reduce sand abrasion',
      'Avoid wax on matte tiles unless specified',
      'Fix cracked grout before heavy cleaning',
    ],
    title: 'Tile and Grout Cleaning',
    whenNeeded: 'Arrange when floors look dull despite regular mopping.',
  }),
  createSeed(category, {
    angle:
      'interior and accessible exterior glass cleaning for apartments and villas',
    benefits: [
      'Brighter rooms and better views',
      'Professional reach methods reduce fall risk',
      'Tracks cleaned improve sliding operation',
    ],
    includes: [
      'interior pane cleaning with drop sheets',
      'accessible exterior panes from balcony or ground level',
      'track and sill vacuuming',
      'identification of panes needing rope access specialists',
    ],
    outcome:
      'glass is streak-free within safe reach limits and sills are wiped clean',
    problems: [
      'salt film on balcony glazing',
      'fingerprints on full-height living room glass',
      'hard water spots from irrigation overspray',
      'unsafe DIY leaning from balconies',
    ],
    related: ['glass-surface-cleaning'],
    slug: 'window-cleaning',
    tips: [
      'Avoid cleaning in direct midday heat',
      'Rinse plants below windows before exterior work',
      'Report cracked seals when water ingress seen',
    ],
    title: 'Window Cleaning',
    whenNeeded:
      'Schedule when seasonal dust or salt haze reduces light and views.',
  }),
  createSeed(category, {
    angle: 'cleaning of mirrors, shower panels, and glass partitions',
    benefits: [
      'Safe methods protect coatings and tints',
      'Office partitions look professional for clients',
      'Highlights when replacement not cleaning is needed',
    ],
    includes: [
      'streak-free cleaning with non-abrasive products',
      'film removal where compatible with coatings',
      'edge and bracket area wipe-down',
      'inspection for chips needing glazier follow-up',
    ],
    outcome: 'glass surfaces are clear without streaks or abrasive damage',
    problems: [
      'protective film residue on new shower panels',
      'mirror edge corrosion from ammonia cleaners',
      'office partition fingerprints at handle height',
      'scratches from razor blades used incorrectly',
    ],
    related: ['mirror-installation', 'window-cleaning'],
    slug: 'glass-surface-cleaning',
    tips: [
      'Never use abrasive pads on coated glass',
      'Ventilate when using alcohol-based cleaners',
      'Fix loose brackets before heavy cleaning pressure',
    ],
    title: 'Glass Surface Cleaning',
    whenNeeded:
      'Use after installations or renovations that leave construction marks.',
  }),
  createSeed(category, {
    angle:
      'light pressure washing support after maintenance or for patios with ingrained dirt',
    benefits: [
      'Complements post-renovation cleaning outdoors',
      'Safer pressure choices than DIY rental machines',
      'Clear limits protect delicate finishes',
    ],
    includes: [
      'low-pressure washing on agreed tolerant surfaces',
      'pre-wet and post-rinse planning for adjacent planting',
      'spot treatment of stubborn areas',
      'referral notes when specialist facade teams are needed',
    ],
    keywords: ['patio cleaning Dubai', 'pressure wash after renovation'],
    outcome:
      'accessible hard surfaces look refreshed without damage from excessive pressure',
    problems: [
      'ingrained dirt on villa entry paths',
      'slippery algae patches near pool surrounds',
      'stains after minor outdoor repairs',
      'uncertainty about safe pressure for soft stone',
    ],
    related: ['outdoor-and-villa-maintenance'],
    slug: 'post-clean-pressure-washing',
    tips: [
      'Test a small hidden area first',
      'Keep electrical outlets covered and dry',
      'Combine with outdoor maintenance for full yards',
    ],
    title: 'Post-Clean Pressure Washing',
    whenNeeded:
      'Book for ground-level tiles and paths when manual scrubbing is insufficient, not as primary facade work.',
  }),
  createSeed(category, {
    angle: 'removal and cleaning of accessible vent covers and grilles',
    benefits: [
      'Improves perceived airflow and cleanliness',
      'Highlights when full AC duct cleaning is separate',
      'Gentle handling prevents visible damage',
    ],
    includes: [
      'safe removal of accessible covers',
      'wash and dry of plastic or metal grilles',
      'vacuum of reachable duct mouths only',
      'refit aligned with ceiling lines',
    ],
    keywords: ['AC vent cleaning UAE'],
    outcome: 'covers are washed, dried, and refitted without bent louvres',
    problems: [
      'grey dust rings around ceiling diffusers',
      'cooking grease on kitchen grilles',
      'bent slats from rough DIY removal',
      'AC airflow feels weak despite service',
    ],
    related: ['air-conditioning-services'],
    slug: 'vent-cover-cleaning',
    tips: [
      'Switch off fans before removal when safe',
      'Note screw lengths and locations for refit',
      'Schedule AC filter service separately if required',
    ],
    title: 'Vent Cover Cleaning',
    whenNeeded: 'Arrange when dust buildup affects airflow or marks ceilings.',
  }),
  createSeed(category, {
    angle: 'cleaning, minor grout repair, and silicone touch-ups in wet areas',
    benefits: [
      'Stops hidden water damage early',
      'Fresher appearance for rental photos',
      'Pairs with deep cleaning for best results',
    ],
    includes: [
      'removal of loose silicone within agreed lengths',
      'application of mould-resistant silicone in wet zones',
      'minor grout fill where tiles remain secure',
      'cure time guidance and ventilation advice',
    ],
    outcome:
      'seals are continuous, grout is stable, and users know cure times before heavy use',
    problems: [
      'blackened silicone at shower bases',
      'cracked grout letting water to walls',
      'missing seal at bath rims',
      'tenant complaints about musty smells',
    ],
    related: [
      'bathroom-deep-cleaning',
      'kitchen-and-bathroom-silicone-resealing',
    ],
    slug: 'sealant-and-grout-maintenance',
    tips: [
      'Do not shower on fresh silicone for agreed hours',
      'Run exhaust fans during cure',
      'Report loose tiles before sealing over damage',
    ],
    title: 'Sealant and Grout Maintenance',
    whenNeeded:
      'Use when mould-stained silicone or cracked grout lets water behind tiles.',
  }),
]
