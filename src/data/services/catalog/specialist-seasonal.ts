import type { ServiceSeed } from '@/data/services/buildService'
import { createSeed } from '@/data/services/catalog/createSeed'

const category = 'specialist-seasonal' as const

export const specialistSeasonalSeeds: ServiceSeed[] = [
  createSeed(category, {
    angle:
      'installation of basic accessibility aids such as bars, rails, and lever handles',
    benefits: [
      'Safer daily movement in familiar homes',
      'Fixings chosen for typical UAE wall types',
      'Respectful planning with family members present',
    ],
    includes: [
      'site discussion of user reach and transfer paths',
      'installation of supplied grab bars and rails',
      'replacement of knobs with lever handles where agreed',
      'load guidance per manufacturer labels',
    ],
    outcome:
      'fixtures are anchored appropriately and locations suit user reach and transfer paths',
    problems: [
      'standard towel rails used instead of load-rated bars',
      'narrow corridors blocking walker turns',
      'incorrect heights for seated users',
      'slippery floors without planned grab locations',
    ],
    related: ['grab-bar-installation', 'handrail-installation'],
    slug: 'home-accessibility-fixture-installation',
    tips: [
      'Confirm medical advice on placement when available',
      'Keep bars clear of shower curtains that tangle',
      'Test fixings periodically after heavy use',
    ],
    title: 'Home Accessibility Fixture Installation',
    whenNeeded:
      'Book when mobility needs change or after hospital discharge requiring safer bathrooms.',
  }),
  createSeed(category, {
    angle: 'rated grab bars installed in showers, baths, and toilets',
    benefits: [
      'Proper anchors reduce pull-out risk',
      'Placement respects tile layouts and niches',
      'Compatible with future shower chair use',
    ],
    includes: [
      'layout marking with user trial stances',
      'drilling with tile-safe methods and dust control',
      'structural anchors or backing plates as required',
      'silicone sealing at penetrations',
    ],
    outcome:
      'bars are level, anchored to structure where possible, and sealed against moisture',
    problems: [
      'users grabbing unstable glass shelves for support',
      'bars mounted into hollow tile without correct anchors',
      'wrong diameter for arthritic grips',
      'bars positioned away from shower controls',
    ],
    related: ['home-accessibility-fixture-installation'],
    slug: 'grab-bar-installation',
    tips: [
      'Use bars only for their rated load',
      'Avoid hanging heavy wet towels on support bars',
      'Retighten fixings if grout cracks appear',
    ],
    title: 'Grab Bar Installation',
    whenNeeded:
      'Arrange when bathrooms need reliable handholds beyond decorative towel bars.',
  }),
  createSeed(category, {
    angle: 'handrails on stairs, ramps, and corridors for steady support',
    benefits: [
      'Continuous support on internal villa stairs',
      'Bracket spacing suited to daily load',
      'Neat finishes in visible hallways',
    ],
    includes: [
      'measurement of pitch and user height factors',
      'bracket fixing into studs or suitable anchors',
      'end cap and return details per layout',
      'alignment checks along full flight',
    ],
    outcome:
      'handrails run continuously with secure brackets and comfortable terminations',
    problems: [
      'missing returns on rail ends catching clothing',
      'rails stopping short of top and bottom steps',
      'loose brackets after daily use',
      'unclear wall backing on plasterboard',
    ],
    related: ['grab-bar-installation'],
    slug: 'handrail-installation',
    tips: [
      'Keep stairs clear while adhesive or sealant cures',
      'Wipe hands clean before using fresh paint nearby',
      'Inspect brackets after heavy guest weekends',
    ],
    title: 'Handrail Installation',
    whenNeeded:
      'Use when steps feel unsafe for older residents or after minor stair modifications.',
  }),
  createSeed(category, {
    angle: 'pressure and hardware-mounted gates at stairs and doorways',
    benefits: [
      'Safer stair use without permanent damage when using hardware mounts correctly',
      'Correct gate type for top versus bottom of stairs',
      'Advice on when to remove gates as children grow',
    ],
    includes: [
      'site assessment of mounting surfaces',
      'hardware or pressure installation per product guidance',
      'latch height testing for carers',
      'trim protection pads where needed',
    ],
    outcome:
      'gates swing or lock reliably and mounting protects walls or balustrades',
    problems: [
      'pressure gates failing on hollow drywall',
      'gap at bottom exceeding safe limits',
      'top-of-stairs gates mounted incorrectly',
      'conflict with skirting boards preventing flush fit',
    ],
    related: ['cabinet-child-locks', 'furniture-anchoring'],
    slug: 'child-safety-gate-installation',
    tips: [
      'Retighten pressure mounts after first week',
      'Never climb over gates yourself',
      'Remove trip hazards near gate swing paths',
    ],
    title: 'Child Safety Gate Installation',
    whenNeeded:
      'Book when toddlers begin moving independently around the home.',
  }),
  createSeed(category, {
    angle:
      'child locks on kitchen and bathroom cabinets with sharp or chemical contents',
    benefits: [
      'Keeps cleaning products and knives secured',
      'Balanced choice between safety and daily access',
      'Non-destructive options where rentals require',
    ],
    includes: [
      'selection of lock type suited to each cabinet style',
      'alignment so doors and drawers seat cleanly',
      'demo for adults on release methods',
      'spare adhesive or screws bagged for owner',
    ],
    outcome:
      'locks engage consistently and adults can release them without frustration',
    problems: [
      'adhesive locks failing in humid kitchens',
      'magnetic keys misplaced',
      'drawers still opening due to flexible fronts',
      'grandparents struggling with complex mechanisms',
    ],
    related: ['child-safety-gate-installation'],
    slug: 'cabinet-child-locks',
    tips: [
      'Relock cabinets after every use',
      'Store magnetic keys high and consistent',
      'Replace adhesive mounts when they loosen',
    ],
    title: 'Cabinet Child Locks',
    whenNeeded:
      'Arrange when crawling or walking children explore lower units.',
  }),
  createSeed(category, {
    angle:
      'anti-tip anchoring for wardrobes, shelves, and chests in family homes',
    benefits: [
      'Reduces tip incidents during climbing phases',
      'Reversible methods suit many rental agreements',
      'Complements TV mounting safety',
    ],
    includes: [
      'identification of stud or solid backing points',
      'strap or bracket installation per kit instructions',
      'furniture repositioned with clearance for airflow',
      'photo record for rental reversibility',
    ],
    outcome:
      'anchors connect furniture to walls with straps or brackets rated for load',
    problems: [
      'heavy wardrobes free-standing on carpet',
      'TV consoles with climbing toddlers nearby',
      'missing anti-tip kits in flat-pack boxes',
      'landlords requiring reversible fixes',
    ],
    related: ['furniture-assembly', 'wall-shelf-installation'],
    slug: 'furniture-anchoring',
    tips: [
      'Do not overload top shelves',
      'Reanchor after moving furniture',
      'Teach children not to climb drawers',
    ],
    title: 'Furniture Anchoring',
    whenNeeded:
      'Use when tall furniture poses tip risks in rooms with children.',
  }),
  createSeed(category, {
    angle:
      'seals and strips to reduce dust ingress and AC loss around doors and windows',
    benefits: [
      'More comfortable rooms in dusty weather',
      'Simple upgrade before full window replacement',
      'Quick wins for older villas and flats',
    ],
    includes: [
      'gap measurement at affected openings',
      'installation of brush, foam, or silicone seals as suited',
      'door sweep fitting where thresholds allow',
      'operation check so doors still latch',
    ],
    outcome:
      'gaps are measured and sealed with appropriate strips without binding doors',
    problems: [
      'visible light under apartment doors',
      'whistling balcony doors in wind',
      'AC working overtime in summer',
      'old foam strips crumbling',
    ],
    related: ['window-and-door-weather-sealing', 'seasonal-home-maintenance'],
    slug: 'draught-proofing',
    tips: [
      'Clean tracks before adhesive strips',
      'Replace crushed foam annually in harsh sun',
      'Combine with AC maintenance for best effect',
    ],
    title: 'Draught Proofing',
    whenNeeded:
      'Book when sand enters under doors or AC costs rise from leaky frames.',
  }),
  createSeed(category, {
    angle:
      'visual checks of accessible insulation and thermal gaps without invasive surveys',
    benefits: [
      'Clarifies when specialist insulation teams are needed',
      'Documents issues for landlord maintenance',
      'Non-invasive suitable for occupied homes',
    ],
    complianceNote:
      'Full thermal imaging reports and certified insulation installation are provided by specialist energy assessors, not included here.',
    includes: [
      'attic or ceiling hatch visual checks where safe access exists',
      'note of missing or compressed insulation batts',
      'photos of obvious thermal bridges at hatches',
      'referral guidance for certified insulation contractors',
    ],
    outcome:
      'you receive notes on visible gaps, damaged insulation, and practical next steps',
    problems: [
      'hot ceilings below poorly insulated roofs',
      'AC lines sweating due to missing pipe lagging',
      'removed ceiling tiles never replaced',
      'store rooms overheating affecting adjacent bedrooms',
    ],
    slug: 'insulation-inspection',
    tips: [
      'Do not disturb suspected asbestos materials',
      'Wear a mask if dust is present in hatches',
      'Seal hatch covers after inspection',
    ],
    title: 'Insulation Inspection',
    whenNeeded:
      'Arrange when rooms feel unevenly cooled or hot spots appear after roof works.',
  }),
  createSeed(category, {
    angle:
      'drying support, stain treatment, and minor board repair after small leaks',
    benefits: [
      'Prevents cosmetic damage becoming structural',
      'Clear scope after plumber has stopped active leaks',
      'Prepares surfaces for repainting',
    ],
    includes: [
      'assessment of moisture with meters where available',
      'removal of loose material and anti-mould treatment',
      'patch filling and ready-for-paint prep',
      'advice if structural drying specialists are needed',
    ],
    outcome:
      'affected finishes are stable, stains treated where possible, and mould risk reduced',
    problems: [
      'yellow ceiling patches after AC overflow',
      'swollen skirting from short plumbing leaks',
      'bubbling paint near shower enclosures',
      'musty cupboards under sinks',
    ],
    related: ['ceiling-and-wall-repairs', 'humidity-related-maintenance'],
    slug: 'minor-water-damage-repairs',
    tips: [
      'Fix active leaks before cosmetic work',
      'Ventilate and dehumidify during drying',
      'Discard porous materials that stayed wet too long',
    ],
    title: 'Minor Water Damage Repairs',
    whenNeeded:
      'Call once the leak source is fixed and areas need cosmetic recovery.',
  }),
  createSeed(category, {
    angle: 'touch-up repairs after wind or rain events within handyman scope',
    benefits: [
      'Quick stabilisation before further storms',
      'Photo evidence for insurance where needed',
      'Pairs with seasonal maintenance plans',
    ],
    includes: [
      'securing of loose items that pose immediate risk',
      'minor refixing of panels, trims, and accessories',
      'clearing accessible drainage paths',
      'documentation for insurer or building follow-up',
    ],
    outcome:
      'immediate safety hazards are secured and cosmetic repairs are scheduled appropriately',
    problems: [
      'loose fence panels after gusts',
      'water ingress at balcony door thresholds',
      'dislodged signage or light covers',
      'blocked balcony drains after heavy rain',
    ],
    related: ['seasonal-home-maintenance', 'outdoor-and-villa-maintenance'],
    slug: 'minor-storm-damage-repairs',
    tips: [
      'Photograph damage before temporary fixes',
      'Do not climb damaged structures without assessment',
      'Clear drains regularly during rainy seasons',
    ],
    title: 'Minor Storm Damage Repairs',
    whenNeeded:
      'Use after unusual weather when fences, doors, or facades show minor damage.',
  }),
  createSeed(category, {
    angle:
      'twice-yearly checks aligned to UAE heat, humidity, and dust seasons',
    benefits: [
      'Predictable upkeep rhythm',
      'Catches small items before peak weather',
      'Documentation for holiday homes and rentals',
    ],
    includes: [
      'seasonal checklist tailored to property type',
      'minor adjustments and lubrication within visit',
      'filter and vent visual checks with referrals',
      'owner reminder list for next season',
    ],
    outcome:
      'home receives a seasonal checklist with completed items and reminders',
    problems: [
      'AC strains before summer without prep',
      'doors swelling in humidity',
      'dust storms clogging tracks',
      'outdoor hardware corroding unnoticed',
    ],
    related: ['annual-maintenance-inspections', 'home-maintenance-plans'],
    slug: 'seasonal-home-maintenance',
    tips: [
      'Book early before summer rush',
      'Keep spare track brushes for sliding doors',
      'Note irrigation overspray on glass seasonally',
    ],
    title: 'Seasonal Home Maintenance',
    whenNeeded:
      'Schedule before summer cooling peaks and after humid winter spells.',
  }),
  createSeed(category, {
    angle: 'pre-arrival checks and setup for short-term and holiday properties',
    benefits: [
      'Better guest reviews for short-term lets',
      'Owner peace of mind from afar',
      'Combines with furniture and curtain installs',
    ],
    includes: [
      'walk-through with guest perspective',
      'basic functional tests of doors, lights, and wet areas',
      'coordination with cleaning if scheduled',
      'minor fixes from resulting snag list',
    ],
    outcome:
      'property feels fresh, basic systems operate, and welcome touches are ready',
    problems: [
      'stale air in closed villas',
      'pool of water under idle AC units',
      'dead remote batteries',
      'guest essentials missing from bathrooms',
    ],
    related: [
      'holiday-home-maintenance',
      'preventive-maintenance-for-holiday-homes',
    ],
    slug: 'holiday-home-preparation',
    tips: [
      'Share alarm and gate codes securely',
      'Stock spare bulbs and batteries on site',
      'Align with laundry and linen deliveries',
    ],
    title: 'Holiday Home Preparation',
    whenNeeded: 'Arrange before owners or guests arrive after long absences.',
  }),
  createSeed(category, {
    angle: 'yearly property walk-through with maintenance roadmap',
    benefits: [
      'Long-term asset protection',
      'Budget planning for landlords',
      'Single document to share with agents',
    ],
    includes: [
      'comprehensive visual inspection room by room',
      'photo log of wear items',
      'priority tagging for safety versus cosmetic',
      'suggested visit schedule for following year',
    ],
    outcome:
      'you receive prioritised maintenance suggestions for the coming year',
    problems: [
      'reactive repairs costing more over time',
      'forgotten roof or balcony checks',
      'warranty periods expiring unnoticed',
      'no central record of past fixes',
    ],
    related: ['home-maintenance-plans', 'scheduled-property-maintenance'],
    slug: 'annual-maintenance-inspections',
    tips: [
      'Keep past invoices for trend spotting',
      'Attend inspection to ask room-specific questions',
      'Update list after any renovation',
    ],
    title: 'Annual Maintenance Inspections',
    whenNeeded:
      'Book on ownership anniversaries or lease cycles for proactive planning.',
  }),
  createSeed(category, {
    angle: 'agreed cadence of visits covering recurring handyman tasks',
    benefits: [
      'Less emergency spending',
      'Predictable calendar for tenants and staff',
      'Adaptable as family needs change',
    ],
    includes: [
      'draft maintenance calendar with owner input',
      'bundled tasks per visit to save cost',
      'review meeting after first cycle',
      'adjustment of plan as property ages',
    ],
    outcome:
      'plan lists scheduled tasks, responsible parties, and review dates',
    problems: [
      'competing reminders for filters, seals, and hardware',
      'different trades duplicating visits',
      'holiday absences missing obvious snags',
      'uncertainty what landlords versus tenants handle',
    ],
    related: ['seasonal-home-maintenance', 'annual-maintenance-inspections'],
    slug: 'home-maintenance-plans',
    tips: [
      'Revisit plan after major renovations',
      'Share plan with building management when needed',
      'Keep digital copies for insurance',
    ],
    title: 'Home Maintenance Plans',
    whenNeeded:
      'Set up when busy owners want maintenance spread across the year.',
  }),
]
