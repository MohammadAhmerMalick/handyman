import type { ServiceSeed } from '@/data/services/buildService'

export const paintingSeeds: ServiceSeed[] = [
  {
    angle:
      'even, durable interior finishes that suit daily living in UAE homes',
    benefits: [
      'Fresher rooms without a full renovation',
      'Consistent colour and finish across walls',
      'Practical advice on drying times and ventilation',
    ],
    category: 'painting',
    includes: [
      'Surface inspection and light preparation of painted areas',
      'Protection of floors and fixed furniture where practical',
      'Application of agreed coats with suitable interior paint',
      'Neat cutting-in at ceilings, skirting, and openings',
    ],
    outcome:
      'rooms feel cleaner and more cohesive, with edges, cut-ins, and sheen levels suited to each space',
    problems: [
      'Patchy or faded wall colour in high-traffic areas',
      'Marks and scuffs that cleaning no longer removes',
      'Uneven sheen after DIY touch-ups',
      'Yellowing or staining near kitchens and bathrooms',
    ],
    related: ['wall-surface-preparation', 'touch-up-painting'],
    slug: 'interior-painting',
    tips: [
      'Ventilate rooms while paint cures, especially in humid months',
      'Wait for full cure before washing or hanging heavy frames',
      'Keep a small record of paint codes for future touch-ups',
    ],
    title: 'Interior Painting',
    whenNeeded:
      'Book interior painting when walls look tired, colours feel dated, or you are refreshing a room before move-in or after minor repairs.',
  },
  {
    angle:
      'weather-aware exterior coatings that help facades cope with sun and dust',
    benefits: [
      'Improved kerb appeal for villas and townhouses',
      'Better protection for render and masonry beneath',
      'Clear scope for what can be reached safely from ladders or staging',
    ],
    category: 'painting',
    includes: [
      'Visual assessment of accessible exterior surfaces',
      'Light cleaning and preparation of sound areas',
      'Application of suitable exterior paint systems',
      'Neat work around fixtures, pipes, and rails where reachable',
    ],
    outcome:
      'exterior surfaces look renewed and are better protected against sun exposure and routine weathering',
    problems: [
      'Faded or chalking paint on balconies and facades',
      'Flaking on sun-facing walls',
      'Staining from AC drips or planter runoff',
      'Peeling at parapets and ledges',
    ],
    related: ['wall-surface-preparation', 'paint-peeling-repairs'],
    slug: 'exterior-painting',
    tips: [
      'Plan work outside peak heat where possible for better adhesion',
      'Keep gutters and drains clear while washes dry',
      'Inspect annually for early chips at corners and joints',
    ],
    title: 'Exterior Painting',
    whenNeeded:
      'Arrange exterior painting when render or exterior walls look chalky, faded, or flaky, or before seasonal deep cleaning of outdoor areas.',
  },
  {
    angle: 'focused wall repainting with tidy edges and even coverage',
    benefits: [
      'Targeted refresh without repainting entire rooms',
      'Better stain control with appropriate primers',
      'Neat joins at corners and openings',
    ],
    category: 'painting',
    includes: [
      'Masking and protection of adjacent surfaces',
      'Filling of minor imperfections where agreed',
      'Primer or sealer where stains require blocking',
      'Two-coat application on agreed wall areas',
    ],
    outcome:
      'selected walls look uniform in colour and texture, blending with adjacent finishes',
    problems: [
      'Visible roller marks or lap lines',
      'Colour mismatch between old and new paint',
      'Stains bleeding through fresh coats',
      'Dusty or poorly prepared surfaces',
    ],
    slug: 'wall-painting',
    tips: [
      'Allow patched areas to dry fully before top coats',
      'Use the same batch of paint on large walls when possible',
      'Avoid heavy cleaning until the manufacturer cure time has passed',
    ],
    title: 'Wall Painting',
    whenNeeded:
      'Use wall painting when one or more walls need a colour change, stain cover, or refresh after repairs.',
  },
  {
    angle:
      'flat, clean ceiling finishes that reduce shadows and marks overhead',
    benefits: [
      'Rooms feel taller and lighter',
      'Stains sealed before decorative top coats',
      'Safer access handling for overhead work',
    ],
    category: 'painting',
    includes: [
      'Inspection of ceiling condition and access planning',
      'Stain blocking where marks are still visible',
      'Ceiling-specific roller application',
      'Cutting-in at coves, bulkheads, and light fittings',
    ],
    outcome:
      'ceilings appear brighter and more uniform, with minimal roller texture where specified',
    problems: [
      'Water stains or AC condensation marks',
      'Patchy white after small ceiling repairs',
      'Cracks and hairlines showing through paint',
      'Yellowing in kitchens with grease vapour',
    ],
    related: ['ceiling-repairs', 'stain-blocking-and-priming'],
    slug: 'ceiling-painting',
    tips: [
      'Fix active leaks before repainting stained areas',
      'Use matt or suitable sheen for ceilings as discussed',
      'Keep light fittings cool and dust-free during work',
    ],
    title: 'Ceiling Painting',
    whenNeeded:
      'Book ceiling painting when water marks, yellowing, or patch repairs leave ceilings looking uneven.',
  },
  {
    angle:
      'hard-wearing door finishes that stand up to daily opening and closing',
    benefits: [
      'Doors match updated interior schemes',
      'Improved resistance to scuffs at handles',
      'Consistent sheen with nearby trim',
    ],
    category: 'painting',
    includes: [
      'Light sanding and degreasing of door surfaces',
      'Masking of hardware or removal where agreed',
      'Undercoat and topcoat suited to timber or metal doors',
      'Neat finishing on visible faces and stiles',
    ],
    outcome:
      'doors look refreshed with smooth, durable paint on faces and edges where accessible',
    problems: [
      'Chipped paint on door edges and frames',
      'Stickiness or drag from thick old coatings',
      'Colour fade on sun-exposed balcony doors',
      'Brush marks from previous DIY coats',
    ],
    slug: 'door-painting',
    tips: [
      'Leave doors slightly ajar while drying to avoid sticking',
      'Lubricate hinges after paint fully cures',
      'Avoid slamming while coatings harden',
    ],
    title: 'Door Painting',
    whenNeeded:
      'Arrange door painting when edges chip, colours clash with updated rooms, or lacquer has worn through.',
  },
  {
    angle: 'neat frame and reveal painting that complements glazing and seals',
    benefits: [
      'Sharper appearance at windows without full replacement',
      'Better coordination with wall colours',
      'Care taken around existing seals and tracks',
    ],
    category: 'painting',
    includes: [
      'Cleaning and light abrasion of sound coatings',
      'Masking of glass and hardware',
      'Metal- or wood-appropriate primers where needed',
      'Even topcoats on accessible frame faces',
    ],
    outcome:
      'frames and reveals look cleaner with coatings suited to their material and exposure',
    problems: [
      'Chalking or fading on sun-facing frames',
      'Peeling on previously painted metal',
      'Stained interior reveals below AC units',
      'Gaps visible between frame and wall finish',
    ],
    related: ['window-caulking', 'weatherstripping-installation'],
    slug: 'window-frame-painting',
    tips: [
      'Wipe condensation from reveals regularly to reduce staining',
      'Do not paint over damaged rubber seals—replace seals separately',
      'Keep tracks free of wet paint while drying',
    ],
    title: 'Window Frame Painting',
    whenNeeded:
      'Book when aluminium or timber frames look chalky, or interior reveals show marks from condensation.',
  },
  {
    angle:
      'small-area colour correction after repairs, furniture moves, or minor damage',
    benefits: [
      'Cost-effective refresh before handover or viewings',
      'Minimal disruption compared with full repaints',
      'Practical guidance on when full repainting is smarter',
    ],
    category: 'painting',
    includes: [
      'Local sanding and filling of minor defects',
      'Feathering edges for smoother blends',
      'Matched or closely coordinated touch-up paint',
      'Spot priming where stains or fillers show through',
    ],
    outcome:
      'repairs blend into surrounding paint as closely as conditions and age allow',
    problems: [
      'Visible patches after wall anchors removed',
      'Scuff marks in corridors and behind doors',
      'Small cracks filled but not colour-matched',
      'Tenant move-out marks on neutral walls',
    ],
    slug: 'touch-up-painting',
    tips: [
      'Store leftover paint from original jobs in labelled tins',
      'Test touch-ups in inconspicuous areas first',
      'Expect slight sheen differences on older walls',
    ],
    title: 'Touch-Up Painting',
    whenNeeded:
      'Use touch-up painting when nail holes, scuffs, or patch repairs leave obvious spots on otherwise sound walls.',
  },
  {
    angle: 'whole-room or whole-home repainting to reset colour and condition',
    benefits: [
      'Single project plan instead of endless spot fixes',
      'Better batch consistency for large areas',
      'Scheduling that respects building quiet hours',
    ],
    category: 'painting',
    includes: [
      'Walk-through to agree rooms and colours',
      'Standard preparation per room as needed',
      'Ceiling, wall, and trim scope defined in the quote',
      'Final walk-through for missed spots and touch-ups',
    ],
    outcome:
      'spaces feel consistently updated with a clear colour plan and tidy finish lines',
    problems: [
      'Mixed colours from phased DIY work',
      'General wear across living and sleeping areas',
      'Need to neutralise before leasing',
      'Outdated accent colours throughout',
    ],
    related: ['interior-painting', 'wall-surface-preparation'],
    slug: 'repainting-and-refreshing',
    tips: [
      'Decide furniture placement before masking begins',
      'Group wet areas and kitchens for appropriate paint systems',
      'Allow extra drying time before hanging curtains',
    ],
    title: 'Repainting and Refreshing',
    whenNeeded:
      'Plan repainting and refreshing when multiple rooms look tired, or you want a coordinated palette after renovation works.',
  },
  {
    angle:
      'feature finishes such as bands, panels, and simple decorative effects',
    benefits: [
      'Personalisation without structural changes',
      'Crisp edges that are hard to achieve freehand',
      'Advice on colours that suit UAE daylight',
    ],
    category: 'painting',
    includes: [
      'Layout marking and level lines',
      'Masking for sharp colour transitions',
      'Application of agreed decorative scheme',
      'Protection of adjacent finishes during work',
    ],
    outcome:
      'decorative elements look deliberate and crisp, aligned with your layout and lighting',
    problems: [
      'Plain rooms needing visual interest',
      'Awkward proportions that colour can balance',
      'Previous freehand lines that look uneven',
      'Need to highlight architectural details',
    ],
    related: ['feature-wall-painting', 'wall-painting'],
    slug: 'decorative-painting',
    tips: [
      'View sample patches at different times of day',
      'Keep decorative areas dust-free while drying',
      'Photograph line positions for future maintenance',
    ],
    title: 'Decorative Painting',
    whenNeeded:
      'Choose decorative painting when you want accent bands, colour blocking, or subtle texture without wallpaper.',
  },
  {
    angle: 'bold or contrasting feature walls that anchor a room’s design',
    benefits: [
      'Strong visual impact with minimal material',
      'Easier to change later than textured panels',
      'Coordinates with existing flooring and furniture',
    ],
    category: 'painting',
    includes: [
      'Wall selection advice based on layout and light',
      'Extra coats or tinted primers where needed',
      'Precise masking at corners and ceilings',
      'Finish suited to the room’s use',
    ],
    outcome:
      'a single wall reads clearly as a feature, with clean borders against adjoining colours',
    problems: [
      'Accent colour bleeding onto neighbouring walls',
      'Uneven coverage on dark base colours',
      'Uncertainty about which wall to highlight',
      'Old wallpaper adhesive affecting paint',
    ],
    slug: 'feature-wall-painting',
    tips: [
      'Use sample pots on the actual wall before committing',
      'Keep a little accent paint for future touch-ups',
      'Balance strong colours with neutral adjoining walls',
    ],
    title: 'Feature Wall Painting',
    whenNeeded:
      'Book feature wall painting when you want one wall to carry accent colour behind beds, sofas, or reception desks.',
  },
  {
    angle: 'aligned wallpaper hangs with neat seams and pattern matching',
    benefits: [
      'Fast visual upgrade for bedrooms and offices',
      'Professional handling of tricky corners',
      'Guidance on wallpapers suited to UAE humidity',
    ],
    category: 'painting',
    includes: [
      'Wall assessment for flatness and moisture',
      'Application of suitable wallpaper adhesive',
      'Pattern matching and trimming at openings',
      'Cleanup of excess paste from surfaces',
    ],
    outcome:
      'wallpaper lies flat with matched patterns and tidy cuts at switches and corners',
    problems: [
      'Bubbles or lifting seams from poor adhesion',
      'Pattern mismatch at joins',
      'Peeling near AC airflow or humid zones',
      'Uneven walls showing through thin papers',
    ],
    related: ['wallpaper', 'wall-surface-preparation'],
    slug: 'wallpaper-installation',
    tips: [
      'Acclimatise rolls indoors before hanging',
      'Avoid heavy rubbing on embossed papers',
      'Ventilate rooms during and after installation',
    ],
    title: 'Wallpaper Installation',
    whenNeeded:
      'Arrange wallpaper installation when you want texture or pattern without wet plaster works.',
  },
  {
    angle:
      'supply and installation of interior wallpaper across residential and light commercial spaces',
    benefits: [
      'Single entry point for wallpaper projects',
      'Clear links to installation and removal trades',
      'Practical expectations on pattern and waste',
    ],
    category: 'painting',
    includes: [
      'Discussion of wallpaper type and room suitability',
      'Site check of wall condition and access',
      'Quotation for installation and related prep',
      'Referral to removal or prep services where needed',
    ],
    keywords: [
      'Wallpaper',
      'Wallpaper UAE',
      'Wallpaper Dubai',
      'wallpaper installation',
      'feature wall wallpaper',
    ],
    outcome:
      'you understand scope, preparation needs, and which related tasks (removal, prep, painting) belong in the same project',
    problems: [
      'Unsure whether existing walls are flat enough',
      'Old paper still in place and needs removal first',
      'Mixed finishes in open-plan areas',
      'Need to coordinate with painters on primers',
    ],
    related: [
      'wallpaper-installation',
      'wallpaper-removal',
      'wall-surface-preparation',
    ],
    slug: 'wallpaper',
    tips: [
      'Order slightly extra rolls for pattern repeat waste',
      'Confirm lead times for imported designs',
      'Plan furniture moves before installers arrive',
    ],
    title: 'Wallpaper',
    whenNeeded:
      'Choose this service when you want an overview of wallpaper options—from feature walls to full rooms—before booking a specific install visit.',
  },
  {
    angle:
      'controlled stripping that prepares walls for paint or new coverings',
    benefits: [
      'Smoother base for paint or new wallpaper',
      'Less gouging than rushed DIY removal',
      'Clear next steps for priming and patching',
    ],
    category: 'painting',
    includes: [
      'Steaming or scoring methods suited to paper type',
      'Gradual removal to limit substrate damage',
      'Adhesive residue reduction on the wall face',
      'Advice on drying time before repainting',
    ],
    outcome:
      'walls are stripped cleanly with residual adhesive reduced ready for the next finish',
    problems: [
      'Multiple layers of old wallpaper',
      'Torn backing left on plaster',
      'Damage to drywall faces during DIY stripping',
      'Stubborn vinyl layers near bathrooms',
    ],
    related: ['wall-surface-preparation', 'wallpaper-installation'],
    slug: 'wallpaper-removal',
    tips: [
      'Do not rush drying—damp walls affect paint adhesion',
      'Expect minor patching after aggressive papers',
      'Ventilate to manage steam and odour',
    ],
    title: 'Wallpaper Removal',
    whenNeeded:
      'Book wallpaper removal when paper is peeling, dated, or must come off before repainting or new installs.',
  },
  {
    angle: 'proper prep so paint and wallpaper adhere and look level',
    benefits: [
      'Better longevity for topcoats and paper',
      'Fewer surprises after colour goes on',
      'Efficient handover to painters or paperhangers',
    ],
    category: 'painting',
    includes: [
      'Cleaning and deglossing where required',
      'Filling of minor holes and cracks',
      'Sanding of repairs to a smooth face',
      'Primer application when specified',
    ],
    outcome:
      'surfaces are clean, sound, and ready for the agreed finish system',
    problems: [
      'Chalky or glossy old paint rejecting new coats',
      'Fine cracks and pinholes across large walls',
      'Dust from building works on bare plaster',
      'Uneven filler ridges from previous repairs',
    ],
    related: [
      'crack-filling-and-surface-repairs',
      'stain-blocking-and-priming',
    ],
    slug: 'wall-surface-preparation',
    tips: [
      'Allow fillers to cure before sanding and coating',
      'Keep rooms dust-controlled after prep',
      'Confirm moisture sources are fixed first',
    ],
    title: 'Wall Surface Preparation',
    whenNeeded:
      'Schedule preparation before major painting or wallpaper when walls are dusty, glossy, or uneven.',
  },
  {
    angle: 'localised wall repairs that stabilise cracks before decorating',
    benefits: [
      'Smoother final appearance after painting',
      'Reduced chance of cracks telegraphing through',
      'Focused repairs without full replastering',
    ],
    category: 'painting',
    includes: [
      'Opening and cleaning of workable cracks',
      'Filling with suitable joint compounds',
      'Sanding and feathering to surrounding levels',
      'Spot priming of repaired zones',
    ],
    outcome:
      'repaired areas are flush and stable, ready for primer and finish coats',
    problems: [
      'Hairline cracks along drywall joints',
      'Nail pops in ceilings and walls',
      'Corner bead damage at external corners',
      'Small holes from removed fixtures',
    ],
    slug: 'crack-filling-and-surface-repairs',
    tips: [
      'Monitor structural cracks that reopen—report for wider assessment',
      'Do not overload fillers in single thick passes',
      'Prime repairs before matching sheen',
    ],
    title: 'Crack Filling and Surface Repairs',
    whenNeeded:
      'Use when hairline cracks, nail pops, or small holes appear before painting or after settling.',
  },
  {
    angle: 'removing failed paint and rebuilding coatings that bond properly',
    benefits: [
      'Stops active peeling from spreading',
      'Identifies when moisture must be fixed first',
      'Better compatibility between old and new coats',
    ],
    category: 'painting',
    includes: [
      'Scraping of loose and flaking coatings',
      'Edge feathering and dust removal',
      'Moisture- or adhesion-promoting primers',
      'Repainting with suitable systems',
    ],
    outcome:
      'peeling areas are stabilised with compatible primers and new topcoats',
    problems: [
      'Blistering on bathroom ceilings',
      'Peeling on balcony soffits',
      'Layers lifting from poor surface prep',
      'Moisture pushing paint off plaster',
    ],
    related: ['stain-blocking-and-priming', 'exterior-painting'],
    slug: 'paint-peeling-repairs',
    tips: [
      'Resolve leaks before cosmetic repainting',
      'Avoid painting over unsound edges',
      'Allow full drying between repair stages',
    ],
    title: 'Paint Peeling Repairs',
    whenNeeded:
      'Arrange when paint lifts in sheets, often near bathrooms, exterior walls, or over glossy undercoats.',
  },
  {
    angle: 'primers that seal stains and improve adhesion for topcoats',
    benefits: [
      'Fewer recoats needed for coverage',
      'Reduced bleed-through after decorating',
      'Better adhesion on glossy or repaired areas',
    ],
    category: 'painting',
    includes: [
      'Identification of stain type and source',
      'Application of appropriate stain-blocking primer',
      'Spot or full-wall priming as agreed',
      'Guidance on topcoat timing',
    ],
    outcome:
      'stains are sealed and surfaces are uniformly ready for finish colour',
    problems: [
      'Water rings on ceilings after past leaks',
      'Tannin bleed on wood trim',
      'Dark colours showing through lighter topcoats',
      'Greasy marks in kitchens',
    ],
    slug: 'stain-blocking-and-priming',
    tips: [
      'Fix active leaks before blocking ceiling stains',
      'Use compatible primer and topcoat brands where possible',
      'Do not skip primer on bold colour changes',
    ],
    title: 'Stain Blocking and Priming',
    whenNeeded:
      'Book when water marks, nicotine, ink, or tannin bleed threaten to show through new paint.',
  },
  {
    angle: 'crisp skirting and architrave finishes that frame rooms neatly',
    benefits: [
      'Rooms look finished without full redecoration',
      'Protection for timber in busy corridors',
      'Coordination with wall and floor colours',
    ],
    category: 'painting',
    includes: [
      'Cleaning and light sanding of trim',
      'Masking at floors and carpets',
      'Undercoat and topcoat on accessible skirting',
      'Touch-up at mitres and returns',
    ],
    outcome:
      'trim appears sharp against floors and walls with durable enamel or agreed coating',
    problems: [
      'Scuffs from vacuum cleaners and mops',
      'Gloss yellowing in older properties',
      'Gaps visible after floor replacements',
      'Brush marks from rushed DIY work',
    ],
    slug: 'skirting-board-painting',
    tips: [
      'Avoid washing gloss until fully cured',
      'Use protective pads on furniture when moving',
      'Plan skirting work after floor sanding if applicable',
    ],
    title: 'Skirting Board Painting',
    whenNeeded:
      'Schedule when skirting looks scuffed, yellowed, or mismatched after floor or wall updates.',
  },
]
