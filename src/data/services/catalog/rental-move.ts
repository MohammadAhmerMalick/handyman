import type { ServiceSeed } from '@/data/services/buildService'
import { createSeed } from '@/data/services/catalog/createSeed'

const category = 'rental-move' as const

export const rentalMoveSeeds: ServiceSeed[] = [
  createSeed(category, {
    angle: 'ongoing repairs and checks for rented flats and villas',
    benefits: [
      'Protects rental ratings and renewals',
      'Single contact instead of ad-hoc contractors',
      'Documentation supports deposit conversations',
    ],
    includes: [
      'scheduled or ad-hoc visits per landlord agreement',
      'repairs to fixtures, joinery, and finishes within scope',
      'photo updates for remote owners',
      'coordination with tenants for access',
    ],
    outcome:
      'tenants experience fewer day-to-day faults and landlords receive concise visit notes',
    problems: [
      'mixed minor tickets stacking up in one unit',
      'unclear lines between building and in-unit repairs',
      'humidity affecting doors and silicone in empty flats',
      'holiday lets needing quick turnarounds',
    ],
    related: ['landlord-repair-services', 'apartment-maintenance'],
    slug: 'rental-property-maintenance',
    tips: [
      'Share tenant contact details with permission only',
      'Keep a unit-specific snag history',
      'Ventilate vacant flats during humid months',
    ],
    title: 'Rental Property Maintenance',
    whenNeeded:
      'Schedule when agents or landlords need a dependable handyman between tenancies.',
  }),
  createSeed(category, {
    angle: 'handyman upkeep tailored to high-rise and mid-rise apartments',
    benefits: [
      'Suited to Marina and urban tower living',
      'Minimises complaints from neighbouring units',
      'Experience with service lift and parking logistics',
    ],
    includes: [
      'repairs aligned with building quiet hours',
      'balcony and wet-area minor fixes',
      'furniture and fixture adjustments',
      'protection of lifts and corridors when moving tools',
    ],
    outcome:
      'repairs respect building access rules and leave common areas tidy',
    problems: [
      'intercom or door viewer faults at entry',
      'balcony door tracks clogged after dust storms',
      'kitchen extractor filters neglected',
      'noise-sensitive neighbours around drill times',
    ],
    related: [
      'rental-property-maintenance',
      'curtain-and-blind-installation-for-new-homes',
    ],
    slug: 'apartment-maintenance',
    tips: [
      'Book loading bay access when needed',
      'Notify security before noisy works',
      'Keep shoes and mats clean in common corridors',
    ],
    title: 'Apartment Maintenance',
    whenNeeded:
      'Book when body corporate rules require careful, quiet repairs inside your unit.',
  }),
  createSeed(category, {
    angle:
      'inside and outside minor maintenance for detached and semi-detached villas',
    benefits: [
      'One team understands whole-property context',
      'Outdoor and indoor items captured in one list',
      'Flexible scheduling for family routines',
    ],
    includes: [
      'multi-room snag walks focusing on living areas first',
      'gate, fence, and external fixture minor repairs within scope',
      'coordination with outdoor specialists when needed',
      'advice on seasonal checks for empty rooms',
    ],
    outcome:
      'key rooms and entrances stay functional with outdoor items noted for seasonal follow-up',
    problems: [
      'garden gates dragging on sand buildup',
      'garage door hardware loosening',
      'multiple AC condensate stains on ceilings',
      'pool equipment areas needing tidy cable routes',
    ],
    related: ['outdoor-and-villa-maintenance', 'holiday-home-maintenance'],
    slug: 'villa-maintenance',
    tips: [
      'Rinse outdoor hardware after dusty weather',
      'Keep spare gate remote batteries on hand',
      'Note room temperatures in closed-up wings',
    ],
    title: 'Villa Maintenance',
    whenNeeded:
      'Arrange for family homes needing periodic fixes across multiple floors and outdoor areas.',
  }),
  createSeed(category, {
    angle:
      'handyman support on moving day for assembly, mounting, and minor fixes',
    benefits: [
      'Faster functional home on day one',
      'Combines multiple setup tasks in one visit',
      'Reduces DIY stress after travel',
    ],
    includes: [
      'priority assembly list agreed before arrival',
      'curtain or blind hanging where units are on site',
      'TV or shelf mounting if brackets are ready',
      'quick patch and touch-up of minor wall marks where included',
    ],
    outcome:
      'essential furniture is built, beds are ready, and priority mounts are completed',
    problems: [
      'flat-pack backlog blocking bedroom setup',
      'curtain gaps on first night',
      'TV stand wobble in new lounge',
      'minor nail holes from previous tenant',
    ],
    related: ['furniture-installation-for-new-homes', 'furniture-assembly'],
    slug: 'move-in-handyman-services',
    tips: [
      'Pre-label boxes by room before movers arrive',
      'Have Wi‑Fi and power confirmed for smart devices',
      'Keep paint codes from landlord for touch-ups',
    ],
    title: 'Move-In Handyman Services',
    whenNeeded:
      'Use when keys are collected and boxes need turning into a usable home quickly.',
  }),
  createSeed(category, {
    angle: 'make-good repairs before returning keys on rental properties',
    benefits: [
      'Smoother deposit return discussions',
      'Neutral third-party completion where arranged via landlord',
      'Combines several small tasks before handover',
    ],
    includes: [
      'filling and sanding of agreed wall marks',
      'replacement of damaged fixtures where stocked',
      'basic silicone refresh at wet areas if required',
      'final clean coordination if scheduled separately',
    ],
    outcome:
      'unit meets the agreed standard with photographic evidence of completed items',
    problems: [
      'picture holes beyond fair wear',
      'broken blind slats',
      'loose toilet seats and wobbly handles',
      'scuffed walls along furniture paths',
    ],
    related: ['tenant-move-out-repairs', 'rental-property-inspection'],
    slug: 'move-out-repairs',
    tips: [
      'Complete inventory removal before repairs',
      'Clarify agent checklist priorities',
      'Allow paint drying time before inspection',
    ],
    title: 'Move-Out Repairs',
    whenNeeded:
      'Book once you have the outgoing inspection list from the agent.',
  }),
  createSeed(category, {
    angle: 'visual inspections with photo notes for landlords and tenants',
    benefits: [
      'Shared visual record reduces arguments',
      'Maintenance items prioritised early',
      'Helpful for overseas landlords',
    ],
    includes: [
      'systematic room walk with photos',
      'notation of wear versus damage',
      'basic safety checks on rails, locks, and wet areas within scope',
      'summary suitable for agent files',
    ],
    outcome:
      'you receive room-by-room photos and a concise list of maintenance recommendations',
    problems: [
      'verbal agreements forgotten after handover',
      'disputes over pre-existing damage',
      'missed safety items such as loose balcony rails',
      'incomplete meter readings context',
    ],
    related: [
      'property-inspection-and-snagging',
      'snagging-and-defect-repairs',
    ],
    slug: 'rental-property-inspection',
    tips: [
      'Open all shutters and cupboards during inspection',
      'Run taps briefly to check obvious leaks',
      'Note appliance serials if provided',
    ],
    title: 'Rental Property Inspection',
    whenNeeded:
      'Arrange at check-in or check-out when condition must be recorded clearly.',
  }),
  createSeed(category, {
    angle: 'closing out snag lists from developers, landlords, or tenants',
    benefits: [
      'Faster clearance of handover lists',
      'Photo trail for warranty submissions',
      'Single coordinator for assorted small trades',
    ],
    includes: [
      'review and triage of supplied snag register',
      'on-site fixes for eligible minor defects',
      'photo closure for each completed item',
      'escalation notes for structural or MEP items',
    ],
    outcome:
      'listed snags within scope are repaired and marked complete with photos',
    problems: [
      'duplicate snags across multiple visits',
      'unclear severity delaying critical fixes',
      'items needing specialist trades mixed with minor tasks',
      'tenants living on site during repairs',
    ],
    related: [
      'property-snagging-and-handover-repairs',
      'property-inspection-and-snagging',
    ],
    slug: 'snagging-and-defect-repairs',
    tips: [
      'Group snags by trade to save visits',
      'Protect floors when moving ladders',
      'Keep children and pets away from work zones',
    ],
    title: 'Snagging and Defect Repairs',
    whenNeeded:
      'Use when a formal list exists and needs practical completion rather than reinspection only.',
  }),
  createSeed(category, {
    angle: 'practical support during key handover appointments',
    benefits: [
      'Less stress during tight handover windows',
      'Immediate fixes prevent first-week complaints',
      'Neutral technical presence alongside agents',
    ],
    includes: [
      'attendance during handover walk-through',
      'operation demos for valves, stops, and basic controls',
      'immediate tightening or adjustments within scope',
      'snag list drafting for follow-up visits',
    ],
    outcome:
      'fixtures are tested, minor issues noted, and immediate safe fixes completed where agreed',
    problems: [
      'agents rushing through inspections',
      'tenants unsure how to operate valves or breakers',
      'missing bathroom accessories on day one',
      'loose handles discovered only after signing',
    ],
    related: ['move-in-handyman-services', 'rental-property-inspection'],
    slug: 'property-handover-assistance',
    tips: [
      'Bring manuals left by previous occupant',
      'Test all windows and balcony doors slowly',
      'Photograph meter readings with timestamps',
    ],
    title: 'Property Handover Assistance',
    whenNeeded:
      'Book when you want a handyman present to test fixtures while agents record condition.',
  }),
  createSeed(category, {
    angle: 'batch assembly and mounting for newly rented or purchased homes',
    benefits: [
      'One coordinated day instead of weeks of DIY',
      'Safer lifting for heavy wardrobes',
      'Mounting matches furniture layout plans',
    ],
    includes: [
      'prioritised assembly plan by room',
      'wall mounting for TVs, mirrors, and shelves as agreed',
      'hardware cross-check across cartons',
      'packaging consolidated for disposal area',
    ],
    outcome:
      'bedrooms, dining, and office zones become usable with mounts completed in logical order',
    problems: [
      'delivery stacking blocking corridors',
      'missing hardware across several cartons',
      'uncertainty about wall types for mounting',
      'children needing beds prioritised first',
    ],
    related: ['furniture-assembly', 'wall-mounted-tv-installation'],
    slug: 'furniture-installation-for-new-homes',
    tips: [
      'Unpack only rooms being worked on first',
      'Keep assembly manuals in a single folder',
      'Confirm stud locations before heavy wall units',
    ],
    title: 'Furniture Installation for New Homes',
    whenNeeded: 'Arrange when multiple rooms arrive flat-packed at once.',
  }),
  createSeed(category, {
    angle: 'whole-home window treatment installation for new tenancies',
    benefits: [
      'Uniform appearance for photography and viewings',
      'Professional drilling reduces patchwork',
      'Same-day shading before furniture placement',
    ],
    includes: [
      'measurement confirmation room by room',
      'bracket installation with aligned heights',
      'hanging of curtains or blinds supplied on site',
      'child safety fixings fitted where provided',
    ],
    outcome:
      'windows have consistent hardware, lengths, and operation across the home',
    problems: [
      'mixed inside and outside mounts causing light gaps',
      'different floor levels affecting drop lengths',
      'missing child safety devices on cords',
      'bay windows needing extra brackets',
    ],
    related: ['curtain-rod-installation', 'blind-installation'],
    slug: 'curtain-and-blind-installation-for-new-homes',
    tips: [
      'Decide blackout versus sheer strategy early',
      'Air curtains before final hemming if applicable',
      'Label remotes and wands by room',
    ],
    title: 'Curtain and Blind Installation for New Homes',
    whenNeeded: 'Use when every room needs consistent shading before move-in.',
  }),
  createSeed(category, {
    angle:
      'light refurbishment between tenancies without full renovation contracts',
    benefits: [
      'Shorter void periods between tenants',
      'Controlled spend compared with full refits',
      'Consistent finish for marketing photos',
    ],
    includes: [
      'patch, paint, and fixture refresh within agreed rooms',
      'silicone renewal at wet areas',
      'replacement of standard hardware such as handles and hooks',
      'coordination with cleaning if bundled',
    ],
    outcome:
      'rooms look updated with agreed paint, fixtures, and silicone work completed',
    problems: [
      'dated but functional kitchens needing cosmetic uplift',
      'scuffed walls throughout after long tenancies',
      'tired silicone lines in bathrooms',
      'worn door handles and hinges across the unit',
    ],
    related: ['commercial-painting', 'kitchen-and-bathroom-renovation'],
    slug: 'minor-property-refurbishment',
    tips: [
      'Choose paint colours before visit to save time',
      'Allow silicone cure before deep cleaning',
      'Stage furniture only after paint hardens',
    ],
    title: 'Minor Property Refurbishment',
    whenNeeded:
      'Book when a unit needs refreshing but not a complete gut renovation.',
  }),
  createSeed(category, {
    angle: 'responsive repairs coordinated through landlords and agents',
    benefits: [
      'Protects landlord reputation with tenants',
      'Clear escalation when jobs exceed handyman scope',
      'Works with agency maintenance portals where used',
    ],
    includes: [
      'triage from tenant photos and descriptions',
      'in-unit repairs within landlord-approved scope',
      'updates to landlord or agent after visit',
      'recommendations when specialist licenses are required',
    ],
    outcome:
      'repairs are completed or documented with clear next steps for specialist trades',
    problems: [
      'tenants waiting on ambiguous repair responsibility',
      'repeat issues from incomplete prior fixes',
      'access delays in occupied units',
      'emergency versus routine priority confusion',
    ],
    related: ['rental-property-maintenance', 'commercial-plumbing-repairs'],
    slug: 'landlord-repair-services',
    tips: [
      'Agree spend caps in writing',
      'Provide alternate access when tenants travel',
      'Keep unit access codes secure',
    ],
    title: 'Landlord Repair Services',
    whenNeeded:
      'Call when tenants report issues that fall to the landlord under lease terms.',
  }),
  createSeed(category, {
    angle: 'check-and-fix visits for occasionally occupied homes',
    benefits: [
      'Guest-ready presentation without owner presence',
      'Early catch of humidity-related issues',
      'Optional coordination with cleaning visits',
    ],
    includes: [
      'walk-through focusing on guest-facing areas',
      'basic AC filter check and cleaning where within scope with related AC services',
      'battery swaps and lubrication of common sticking points',
      'list of deferred items for owner approval',
    ],
    outcome:
      'home is ventilated, basic systems operate, and obvious snags are cleared',
    problems: [
      'musty rooms after AC was switched off',
      'stiff balcony doors before guest season',
      'dead batteries in door viewers',
      'pool of condensate under idle AC units',
    ],
    related: [
      'preventive-maintenance-for-holiday-homes',
      'seasonal-home-maintenance',
    ],
    slug: 'holiday-home-maintenance',
    tips: [
      'Run AC periodically during long absences',
      'Leave keys and alarm codes via secure channel',
      'Share guest arrival dates for prioritisation',
    ],
    title: 'Holiday Home Maintenance',
    whenNeeded:
      'Schedule before guest arrivals or after long vacant periods in humid months.',
  }),
]
