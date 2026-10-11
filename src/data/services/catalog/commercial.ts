import type { ServiceSeed } from '@/data/services/buildService'
import { createSeed } from '@/data/services/catalog/createSeed'

const category = 'commercial' as const

export const commercialSeeds: ServiceSeed[] = [
  createSeed(category, {
    angle:
      'responsive upkeep for workplaces keeping staff areas safe and presentable',
    benefits: [
      'Keeps workspace professional for clients and recruits',
      'Single contact for assorted small jobs',
      'Visits planned outside peak meetings where possible',
    ],
    includes: [
      'walk-through snag list creation',
      'minor repairs to doors, walls, and fixtures',
      'coordination with building management for access',
      'follow-up notes for items needing specialists',
    ],
    outcome:
      'faults are logged, repaired within agreed scope, and staff disruption stays minimal',
    problems: [
      'flickering lights and loose sockets worrying staff',
      'damaged ceiling tiles after minor leaks',
      'doors not latching in meeting rooms',
      'scuffed walls in high-traffic corridors',
    ],
    related: [
      'scheduled-property-maintenance',
      'office-partition-repairs',
      'office-furniture-assembly',
    ],
    slug: 'office-maintenance',
    tips: [
      'Share floor plans and access cards before visits',
      'Nominate a staff contact for quick decisions',
      'Photograph recurring issues to spot patterns',
    ],
    title: 'Office Maintenance',
    whenNeeded:
      'Schedule when offices need recurring fixes between major fit-out projects.',
  }),
  createSeed(category, {
    angle: 'front-of-house repairs for shops and showrooms open to customers',
    benefits: [
      'Protects brand presentation on busy streets',
      'Reduces trip hazards at entrances',
      'Flexible timing around trading hours',
    ],
    includes: [
      'priority repairs to customer-facing areas',
      'secure fixing of shelves, hooks, and displays',
      'touch-up painting within agreed patches',
      'after-hours scheduling where requested',
    ],
    outcome:
      'shopfronts look cared for, fixtures work, and trading can continue where safe',
    problems: [
      'damaged shelving after deliveries',
      'loose signage frightening passers-by',
      'trial room hooks and locks failing',
      'scuffed flooring at entrances',
    ],
    related: ['commercial-painting', 'lighting-fixture-replacement'],
    slug: 'retail-property-maintenance',
    tips: [
      'Rope off wet paint until cured',
      'Keep spare fixings on site for displays',
      'Report stock water leaks immediately',
    ],
    title: 'Retail Property Maintenance',
    whenNeeded:
      'Use when storefronts need quick fixes that affect customer impressions.',
  }),
  createSeed(category, {
    angle:
      'accessible plumbing fixes for staff kitchens, washrooms, and utility points',
    benefits: [
      'Restores staff facilities quickly',
      'Documents items outside handyman plumbing scope',
      'Works with building shut-off procedures',
    ],
    includes: [
      'isolation and repair of taps, traps, and visible pipe joints',
      'replacement of washers, cartridges, or flexible hoses',
      'basic clearance of accessible traps',
      'reporting of concealed leaks needing specialist tracing',
    ],
    outcome:
      'water is isolated safely, visible leaks are repaired, and escalation paths for major pipework are clear',
    problems: [
      'blocked staff kitchen sinks during lunch peaks',
      'running toilets wasting water in washrooms',
      'loose basin mixers wobbling under daily use',
      'drip trays overflowing on AC condensate lines near units',
    ],
    related: ['commercial-washroom-maintenance', 'plumbing-and-carpentry'],
    slug: 'commercial-plumbing-repairs',
    tips: [
      'Post signs when isolating washrooms temporarily',
      'Keep under-sink areas clear for trap access',
      'Note water meter changes after major leaks',
    ],
    title: 'Commercial Plumbing Repairs',
    whenNeeded:
      'Call when leaks or blockages affect staff areas but full commercial plumbing contracts are not needed.',
  }),
  createSeed(category, {
    angle:
      'timber and laminate repairs for counters, shelving, and back-of-house joinery',
    benefits: [
      'Extends life of fitted joinery without full refit',
      'Safer edges for staff handling stock',
      'Matches existing hardware where possible',
    ],
    includes: [
      'realignment of doors and drawer runners',
      're-screwing carcasses and adding brackets',
      'patch sanding and ready-for-paint prep where agreed',
      'replacement of handles, locks, or shelf pins',
    ],
    outcome:
      'joinery is square, hinges adjusted, and surfaces ready for continued use',
    problems: [
      'swollen counter panels near dishwashers',
      'shelving sagging under stock weight',
      'cabinet locks failing in back offices',
      'splintered edges on delivery bay doors',
    ],
    related: ['office-partition-repairs', 'commercial-painting'],
    slug: 'commercial-carpentry',
    tips: [
      'Do not overload shelves beyond label ratings',
      'Wipe spills promptly on laminate tops',
      'Schedule deeper sanding when shops are closed',
    ],
    title: 'Commercial Carpentry',
    whenNeeded:
      'Arrange when retail counters or office storage show wear from daily operations.',
  }),
  createSeed(category, {
    angle: 'touch-up and small-area painting for workplaces and retail units',
    benefits: [
      'Fresher customer-facing spaces quickly',
      'Contained odour through timing and airflow',
      'Clear record of paint codes used',
    ],
    includes: [
      'surface degrease and light sanding',
      'matched or client-supplied paint application',
      'protection of floors and fixtures with sheets',
      'ventilation planning with building HVAC rules',
    ],
    outcome:
      'patches blend reasonably with existing colours and areas are ventilated during cure',
    problems: [
      'accent walls marked by trolley bumps',
      'peeling paint near AC condensate stains',
      'colour mismatch after partial DIY touch-ups',
      'odour concerns in enclosed malls',
    ],
    related: ['retail-property-maintenance', 'ceiling-and-wall-repairs'],
    slug: 'commercial-painting',
    tips: [
      'Allow full cure before heavy cleaning',
      'Store leftover paint labelled by room',
      'Confirm mall contractor rules before starting',
    ],
    title: 'Commercial Painting',
    whenNeeded:
      'Book between tenancies or when scuffs accumulate in customer view.',
  }),
  createSeed(category, {
    angle:
      'repairs to demountable partitions, gypsum infills, and door kits in offices',
    benefits: [
      'Avoids costly full partition replacement for minor damage',
      'Quieter meeting rooms after hinge tuning',
      'Maintains fire-stop awareness at penetrations',
    ],
    includes: [
      'hinge and closer adjustment on partition doors',
      'replacement of damaged clips, seals, or pelmet sections',
      'patching of minor board damage ready for paint',
      're-seating of grommets and blanking plates',
    ],
    outcome:
      'partitions sit plumb, doors close quietly, and cable routes remain accessible',
    problems: [
      'doors dragging after new flooring height',
      'gaps at partition heads following AC works',
      'broken glass or panel clips in meeting pods',
      'cable grommets pulled out during desk moves',
    ],
    related: ['office-maintenance', 'walls-ceilings'],
    slug: 'office-partition-repairs',
    tips: [
      'Do not drill partitions without building approval',
      'Keep spare clip types from original installer if possible',
      'Plan desk moves before door adjustment visits',
    ],
    title: 'Office Partition Repairs',
    whenNeeded:
      'Use when layout changes leave gaps or doors rub after carpet replacement.',
  }),
  createSeed(category, {
    angle: 'ongoing door and lock tuning for high-traffic commercial doors',
    benefits: [
      'Reduces forced-entry damage from staff kicking stuck doors',
      'Improves accessibility with lighter closing forces',
      'Documents fire-door items for specialist follow-up',
    ],
    includes: [
      'hinge tightening and selective lubrication',
      'strike plate adjustment and latch alignment',
      'replacement of consumable parts such as closers where supplied',
      'labelling doors needing licensed fire-door work',
    ],
    outcome:
      'doors latch without forcing, hinges are lubricated appropriately, and exit paths remain clear',
    problems: [
      'hydraulic closers leaking in stairwells',
      'mortice latches sticking during humidity',
      'misaligned aluminium doors after carpet swaps',
      'master key systems with loose cylinders',
    ],
    related: ['commercial-carpentry', 'smart-lock-installation'],
    slug: 'door-and-lock-maintenance',
    tips: [
      'Report fire-door defects immediately',
      'Keep closers adjusted rather than removed',
      'Train staff not to prop secure doors open',
    ],
    title: 'Door and Lock Maintenance',
    whenNeeded:
      'Schedule when staff report sticking doors or worn latches in daily use.',
  }),
  createSeed(category, {
    angle:
      'patch repairs to ceilings and walls after leaks, removals, or minor impacts',
    benefits: [
      'Stabilises surfaces before mould takes hold',
      'Neater handover after equipment removal',
      'Limits spread of damaged board',
    ],
    includes: [
      'cut-out of loose material and drying checks',
      'filling, mesh, and sanding to flush surfaces',
      'primer on stains before top coats where included',
      'advice on drying times before redecorating fully',
    ],
    outcome:
      'patches are filled, sanded, and ready for paint or left finished per agreement',
    problems: [
      'bulging ceiling paint after upstairs leaks',
      'anchor holes from removed signage',
      'corner bead damage from trolley impacts',
      'telegraphing cracks after AC duct moves',
    ],
    related: ['commercial-painting', 'commercial-plumbing-repairs'],
    slug: 'ceiling-and-wall-repairs',
    tips: [
      'Fix source leaks before cosmetic ceiling work',
      'Keep rooms ventilated during drying',
      'Photograph stain boundaries for insurance notes',
    ],
    title: 'Ceiling and Wall Repairs',
    whenNeeded:
      'Arrange after minor water incidents or when relocating wall-mounted equipment.',
  }),
  createSeed(category, {
    angle:
      'replacement of light fittings and tubes within accessible commercial ceilings',
    benefits: [
      'Brighter, more efficient staff and retail areas',
      'Secure mounting reduces fall risks',
      'Documented items needing licensed electrical work',
    ],
    complianceNote:
      'New circuits, panel changes, and certified emergency lighting are carried out by licensed electricians.',
    includes: [
      'isolation and removal of failed units',
      'installation of client-supplied or agreed replacements',
      'basic alignment of grids and diffusers',
      'disposal of old tubes according to site rules',
    ],
    outcome:
      'new fittings are secure, light output suits the area, and safe isolation is confirmed',
    problems: [
      'discoloured diffusers reducing perceived cleanliness',
      'failed ballasts in older fluorescent trays',
      'fixtures hanging by one anchor after maintenance',
      'incorrect colour temperature in product displays',
    ],
    related: ['electrical', 'office-maintenance'],
    slug: 'lighting-fixture-replacement',
    tips: [
      'Do not open live ceilings without isolation',
      'Match IP ratings in washrooms and kitchens',
      'Keep spare tubes labelled by fitting type',
    ],
    title: 'Lighting Fixture Replacement',
    whenNeeded:
      'Use when fittings fail frequently or upgrades to LED kits are planned at fixture level.',
  }),
  createSeed(category, {
    angle:
      'fixtures, dispensers, and sealing upkeep in staff and customer washrooms',
    benefits: [
      'Better user experience for staff and visitors',
      'Water savings from stopped continuous flows',
      'Early grout repair limits subfloor damage',
    ],
    includes: [
      'tightening and re-fixing of accessories',
      'washer and valve replacements within scope',
      'silicone touch-ups at basins and floors',
      'replacement of hooks, signs, and minor partitions',
    ],
    outcome:
      'fixtures are secure, seals intact, and users have reliable supplies',
    problems: [
      'loose grab bars or dispensers',
      'leaking flush valves running continuously',
      'grout missing at floor junctions',
      'mirrors corroding at edges in humid rooms',
    ],
    related: ['commercial-plumbing-repairs', 'sealant-and-grout-maintenance'],
    slug: 'commercial-washroom-maintenance',
    tips: [
      'Ventilate washrooms during silicone cure',
      'Report hidden leaks behind panels promptly',
      'Use manufacturer spares for flush parts where possible',
    ],
    title: 'Commercial Washroom Maintenance',
    whenNeeded:
      'Book when washrooms show wear, leaks, or loose accessories between deep cleans.',
  }),
  createSeed(category, {
    angle:
      'planned maintenance visits for portfolios and single sites on a recurring calendar',
    benefits: [
      'Predictable budgeting for upkeep',
      'Fewer emergency visits from neglected snags',
      'Single record of property condition over time',
    ],
    includes: [
      'agreed checklist walk-through each visit',
      'batch completion of minor repairs within time box',
      'photo log of deferred items with priority',
      'coordination with tenants for access windows',
    ],
    outcome:
      'each visit produces a punch list with completed items and deferred notes for specialists',
    problems: [
      'small defects accumulating between tenancies',
      'untracked repairs leading to repeated call-outs',
      'seasonal items such as seal checks overlooked',
      'tenants unsure whom to contact for minor faults',
    ],
    related: ['landlord-maintenance-services', 'office-maintenance'],
    slug: 'scheduled-property-maintenance',
    tips: [
      'Share access and parking rules before each round',
      'Keep a living snag list between visits',
      'Align visit times with quiet hours in residential blocks',
    ],
    title: 'Scheduled Property Maintenance',
    whenNeeded:
      'Set up when landlords or facilities managers want predictable snag rounds.',
  }),
  createSeed(category, {
    angle:
      'maintenance support for landlords between tenancies and during lets',
    benefits: [
      'Protects rental income with faster turnarounds',
      'Documented condition for deposit discussions',
      'Practical scope boundaries reduce surprise costs',
    ],
    includes: [
      'triage of tenant reports with photo requests',
      'in-unit repairs for agreed landlord responsibilities',
      'neutral communication through landlord or agent',
      'move-related punch lists when scheduled',
    ],
    outcome:
      'tenants receive timely fixes within scope and landlords get concise visit reports',
    problems: [
      'tenants reporting mixed issues in one ticket',
      'delayed repairs affecting renewal decisions',
      'unclear responsibility between building and unit items',
      'wear at handover not documented',
    ],
    related: [
      'tenant-move-in-repairs',
      'tenant-move-out-repairs',
      'rental-property-maintenance',
    ],
    slug: 'landlord-maintenance-services',
    tips: [
      'Provide tenant contact only with consent',
      'Use written approval for spend limits',
      'Photograph before-and-after at handover',
    ],
    title: 'Landlord Maintenance Services',
    whenNeeded:
      'Use when rental units need reliable repair contacts without a full facilities team.',
  }),
  createSeed(category, {
    angle: 'snag fixes before new tenants occupy a unit',
    benefits: [
      'Smoother tenant onboarding',
      'Fewer day-one complaints',
      'Clear separation of building versus unit items',
    ],
    includes: [
      'priority repairs from the incoming snag sheet',
      'installation of basic accessories where supplied',
      'testing of doors, windows, and wet areas',
      'final walk-through with agent or landlord',
    ],
    outcome:
      'agreed snags are closed out and the unit presents cleanly for move-in',
    problems: [
      'paint touch-ups after previous move-out',
      'cabinet hinges loose from empty property heat',
      'missing bathroom accessories',
      'non-functioning sockets or switches flagged on snag list',
    ],
    related: [
      'property-inspection-and-snagging',
      'rental-property-maintenance',
    ],
    slug: 'tenant-move-in-repairs',
    tips: [
      'Share snag list with photos in advance',
      'Confirm which items are tenant-supplied',
      'Allow paint cure time before furniture delivery',
    ],
    title: 'Tenant Move-In Repairs',
    whenNeeded:
      'Book in the days before key handover when inspection lists are ready.',
  }),
  createSeed(category, {
    angle: 'repairs after tenancy ends to restore lettable condition',
    benefits: [
      'Faster re-letting after consistent make-good',
      'Neutral documentation for deposit disputes',
      'Combines multiple small trades in one visit',
    ],
    includes: [
      'patch painting and filling to agreed standard',
      'replacement of damaged fixtures where stocked',
      'deep clean coordination if bundled separately',
      'inventory of completed versus chargeable items',
    ],
    outcome:
      'unit meets the agreed make-good standard with items documented for deposit handling',
    problems: [
      'anchor holes throughout living areas',
      'damaged blinds or curtain tracks',
      'scuffed skirting and door edges',
      'minor leaks left unreported during tenancy',
    ],
    related: ['tenant-move-in-repairs', 'move-out-repairs'],
    slug: 'tenant-move-out-repairs',
    tips: [
      'Complete outgoing inspection before booking',
      'Clarify fair wear versus chargeable damage',
      'Ventilate after painting before viewings',
    ],
    title: 'Tenant Move-Out Repairs',
    whenNeeded:
      'Arrange once tenants vacate and an outgoing inspection is complete.',
  }),
  createSeed(category, {
    angle:
      'structured inspections with snag lists for commercial and residential handovers',
    benefits: [
      'Shared reference reduces disputes',
      'Photos support deposit and warranty conversations',
      'Immediate fixes close easy wins same day',
    ],
    includes: [
      'room-by-room inspection against agreed standards',
      'photo-backed snag register with severity tags',
      'on-the-spot fixes for items within visit scope',
      'summary report for landlord, tenant, or facilities',
    ],
    outcome:
      'you receive a prioritised snag list with photos and clear scope for each item',
    problems: [
      'informal verbal snags lost between stakeholders',
      'mixed responsibility between developer and tenant',
      'hidden defects behind fitted furniture',
      'deadlines approaching without a sorted list',
    ],
    related: ['tenant-move-in-repairs', 'snagging-and-defect-repairs'],
    slug: 'property-inspection-and-snagging',
    tips: [
      'Attend inspections with keys and access cards ready',
      'Open all shutters and cupboards during walk-through',
      'Label snags by room and surface type consistently',
    ],
    title: 'Property Inspection and Snagging',
    whenNeeded:
      'Use at practical completion or before lease start when a formal punch list is needed.',
  }),
]
