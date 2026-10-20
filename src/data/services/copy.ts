import { contact } from '@/data/contact'
import type { ServiceSeed } from '@/data/services/buildService'
import type { ServiceFaq } from '@/data/services/types'
import type { AppLocale } from '@/i18n/routing'

export type CopyHelpers = {
  availability: () => string
  defaultProcess: (seed: ServiceSeed) => string[]
  faqs: (seed: ServiceSeed) => ServiceFaq[]
  fold: (value: string) => string
  introduction: (seed: ServiceSeed, pattern: 0 | 1) => string
  joinList: (items: string[]) => string
  mainDescription: (seed: ServiceSeed, pattern: 0 | 1) => string[]
  metaDescription: (seed: ServiceSeed) => string
  metaTitle: (seed: ServiceSeed) => string
  shortDescription: (seed: ServiceSeed) => string
  whyChooseUs: (seed: ServiceSeed) => string
}

type LocaleFacts = {
  address: string
  fridayHours: string
  satThuHours: string
  serviceArea: string
}

const englishFacts: LocaleFacts = {
  address: contact.address,
  fridayHours: contact.hours.friday,
  satThuHours: contact.hours.saturdayToThursday,
  serviceArea: contact.serviceArea,
}

const facts: Record<AppLocale, LocaleFacts> = {
  ar: {
    address: 'مارينا، دبي، الإمارات',
    fridayHours: '9:00 ص – 11:00 ص و4:00 م – 9:00 م',
    satThuHours: '8:00 ص – 9:00 م',
    serviceArea: 'الإمارات',
  },
  en: englishFacts,
  fr: {
    address: 'Marina, Dubaï, Émirats arabes unis',
    fridayHours: '9h00–11h00 et 16h00–21h00',
    satThuHours: '8h00–21h00',
    serviceArea: 'Émirats arabes unis',
  },
  hi: {
    address: 'मरीना, दुबई, यूएई',
    fridayHours: 'सुबह 9:00–11:00 और शाम 4:00–9:00',
    satThuHours: 'सुबह 8:00–रात 9:00',
    serviceArea: 'यूएई',
  },
  ur: {
    address: 'مرینا، دبئی، متحدہ عرب امارات',
    fridayHours: 'صبح 9:00–11:00 اور شام 4:00–9:00',
    satThuHours: 'صبح 8:00 تا رات 9:00',
    serviceArea: 'متحدہ عرب امارات',
  },
  zh: {
    address: '阿联酋迪拜码头',
    fridayHours: '9:00–11:00 及 16:00–21:00',
    satThuHours: '8:00–21:00',
    serviceArea: '阿联酋',
  },
}

const phone = contact.phone.display
const email = contact.email

const joinWith = (
  items: string[],
  two: (a: string, b: string) => string,
  many: (head: string, last: string) => string
) => {
  if (items.length === 0) return ''
  if (items.length === 1) return items[0]
  if (items.length === 2) return two(items[0], items[1])
  return many(items.slice(0, -1).join(', '), items.at(-1) ?? '')
}

const cap = (value: string) => {
  if (!value) return value
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`
}

const latinFold = (value: string) => value.toLowerCase()
const same = (value: string) => value

const makeFaqs = (
  seed: ServiceSeed,
  packs: ServiceFaq[][],
  complianceQuestion: string
): ServiceFaq[] => {
  const variant =
    Math.abs(
      [...seed.slug].reduce((hash, char) => {
        const next = (hash << 5) - hash + char.charCodeAt(0)
        return next | 0
      }, 0)
    ) % 3
  const faqs = packs[variant].slice(0, 5)
  if (seed.complianceNote) {
    faqs.push({ answer: seed.complianceNote, question: complianceQuestion })
  }
  return faqs
}

const english = (): CopyHelpers => {
  const fold = latinFold
  const joinList = (items: string[]) =>
    joinWith(
      items,
      (a, b) => `${a} and ${b}`,
      (head, last) => `${head}, and ${last}`
    )
  const { address, fridayHours, satThuHours, serviceArea } = facts.en

  const helpers: CopyHelpers = {
    availability: () =>
      `Available during Handyman working hours: Saturday–Thursday ${satThuHours}; Friday ${fridayHours}. Contact by phone or WhatsApp to arrange a visit.`,
    defaultProcess: (seed) => [
      `Discuss the issue and confirm that ${fold(seed.title)} is the right scope for your property.`,
      'Inspect the affected area, note access requirements, and agree the practical approach before work begins.',
      `Carry out ${fold(joinList(seed.includes.slice(0, 3)))}, keeping the workspace as tidy as conditions allow.`,
      'Review the finished work with you, share simple aftercare advice, and note any follow-up items that sit outside this visit.',
    ],
    faqs: (seed) => {
      const titleLower = fold(seed.title)
      const includes = joinList(seed.includes)
      const problems = joinList(seed.problems.slice(0, 3))
      return makeFaqs(
        seed,
        [
          [
            {
              answer: `${seed.title} typically covers ${includes}. The exact scope is confirmed after we see the site conditions and discuss what you need completed.`,
              question: `What does ${titleLower} include?`,
            },
            {
              answer: `${seed.whenNeeded} Arranging the work promptly helps avoid secondary damage and keeps the property comfortable to use.`,
              question: `When should I arrange ${titleLower}?`,
            },
            {
              answer: `We start with a clear look at the issue, then complete the agreed tasks with suitable tools and materials. For ${titleLower}, the focus is ${seed.angle}.`,
              question: 'How is the work carried out?',
            },
            {
              answer:
                'Clear access to the work area, move fragile items nearby, and note any building rules for tools, parking, or quiet hours. If you have product manuals or previous repair notes, keep them handy.',
              question: 'How should I prepare for the appointment?',
            },
            {
              answer:
                'Cost depends on access, materials, the condition of existing fittings, and whether related repairs are needed once the area is opened up. We provide a quote rather than fixed catalogue prices.',
              question: 'What factors affect the cost?',
            },
          ],
          [
            {
              answer: `Customers often ask for help with ${problems}. ${seed.title} is planned around those practical issues and the result you want afterwards.`,
              question: `Which problems does ${titleLower} usually solve?`,
            },
            {
              answer:
                'Yes. Many visits combine related tasks in the same area so you only need one appointment. Tell us about other pending jobs when you get in touch and we will advise what can sensibly be grouped.',
              question:
                'Can this service be combined with other maintenance work?',
            },
            {
              answer: `We confirm the brief, protect surrounding finishes where practical, complete the included work, and check that ${seed.outcome}.`,
              question: `How do you approach ${titleLower} on site?`,
            },
            {
              answer: `Useful habits include ${fold(joinList(seed.tips))}. Following these tips helps the work last longer between visits.`,
              question: 'How can I maintain the repaired or installed item?',
            },
            {
              answer: `Handyman is based in ${address} and serves properties across the ${serviceArea}. Share your location when you enquire so we can confirm travel for your visit.`,
              question: 'Do you work across the UAE?',
            },
          ],
          [
            {
              answer: `${seed.whenNeeded} Whether you manage a flat, villa, or workplace, we adapt the method to the space and the materials already installed.`,
              question: `Is ${titleLower} suitable for my property?`,
            },
            {
              answer: `Expect a focused visit covering ${fold(includes)}. We keep you informed if we find related issues that need a wider decision before continuing.`,
              question: 'What should I expect during the visit?',
            },
            {
              answer: `Call or WhatsApp ${phone}, or email ${email}. Describe the work, send clear photos if you can, and mention preferred times within our working hours.`,
              question: 'How do I ask for a quote?',
            },
            {
              answer: `A successful visit should mean ${seed.outcome}. We also leave you with practical aftercare notes suited to the materials used.`,
              question: `What outcome should I expect from ${titleLower}?`,
            },
            {
              answer:
                'Some jobs use parts or consumables that need selecting on site. We discuss material options before purchasing so you know what is included in the quote.',
              question: 'Are materials included?',
            },
          ],
        ],
        'Are there any licensing or specialist limits I should know about?'
      )
    },
    fold,
    introduction: (seed, pattern) =>
      pattern === 0
        ? `${seed.title} helps UAE property owners deal with ${seed.angle}. ${seed.whenNeeded} Handyman approaches each visit with a clear brief, tidy working habits, and practical advice for looking after the finished work.`
        : `When you need ${fold(seed.title)}, the priority is a reliable fix that suits how you use the space. ${seed.whenNeeded} Our team focuses on ${seed.angle}, then explains the aftercare that keeps the result stable.`,
    joinList,
    mainDescription: (seed, pattern) => {
      const includes = joinList(seed.includes)
      const problems = joinList(seed.problems)
      const titleLower = fold(seed.title)
      return pattern === 0
        ? [
            `${seed.title} is commonly requested when households notice ${problems}. Left alone, small faults can stain finishes, waste water or energy, or make rooms harder to use day to day.`,
            `During the visit we typically handle ${includes}. The sequence depends on access, the condition of existing fittings, and whether surrounding surfaces need protection while we work.`,
            `Customers choose professional help for ${titleLower} when they want ${seed.outcome}. That matters in busy Marina apartments, family villas, and commercial spaces where downtime needs to stay short.`,
          ]
        : [
            `From first contact we clarify what ${titleLower} should achieve for your property. Typical triggers include ${problems}, each of which needs a slightly different on-site approach.`,
            `The practical work usually covers ${includes}. We confirm materials and method before starting so you understand the scope, especially where finishes or fixtures may need matching.`,
            `The aim is straightforward: ${seed.outcome}. You also receive simple maintenance guidance so the improvement lasts between scheduled visits.`,
          ]
    },
    metaDescription: (seed) =>
      `${seed.title} across the ${serviceArea}. ${cap(seed.angle)}. Based in ${address} — call or WhatsApp for a quote.`,
    metaTitle: (seed) => `${seed.title} | Handyman UAE`,
    shortDescription: (seed) =>
      `${seed.title} for homes and workplaces across the ${serviceArea} — ${seed.angle}.`,
    whyChooseUs: (seed) =>
      `Handyman is based in ${address} and works across the ${serviceArea}. For ${fold(seed.title)}, you can reach us by phone or WhatsApp on ${phone}, or by email at ${email}. We quote on the job rather than publishing fixed prices, and we stick to the working hours listed on this site.`,
  }

  return helpers
}

const arabic = (): CopyHelpers => {
  const fold = same
  const joinList = (items: string[]) =>
    joinWith(
      items,
      (a, b) => `${a} و${b}`,
      (head, last) => `${head}، و${last}`
    )
  const { address, fridayHours, satThuHours, serviceArea } = facts.ar

  const helpers: CopyHelpers = {
    availability: () =>
      `متاح خلال ساعات عمل Handyman: السبت–الخميس ${satThuHours}؛ الجمعة ${fridayHours}. تواصلوا هاتفياً أو عبر واتساب لترتيب زيارة.`,
    defaultProcess: (seed) => [
      `نناقش المشكلة ونتأكد أن ${seed.title} هو النطاق المناسب لعقاركم.`,
      'نعاين المنطقة المتأثرة، ونحدد متطلبات الوصول، ونتفق على الأسلوب العملي قبل بدء العمل.',
      `ننفّذ ${joinList(seed.includes.slice(0, 3))}، مع الإبقاء على مكان العمل مرتباً قدر الإمكان.`,
      'نراجع العمل المنجز معكم، ونشارك نصائح العناية اللاحقة، ونبيّن أي بنود مؤجلة لزيارة لاحقة.',
    ],
    faqs: (seed) => {
      const includes = joinList(seed.includes)
      const problems = joinList(seed.problems.slice(0, 3))
      return makeFaqs(
        seed,
        [
          [
            {
              answer: `يشمل ${seed.title} عادةً ${includes}. يُؤكَّد النطاق الدقيق بعد معاينة الموقع ومناقشة ما تحتاجون إنجازه.`,
              question: `ماذا يشمل ${seed.title}؟`,
            },
            {
              answer: `${seed.whenNeeded} ترتيب العمل بسرعة يساعد على تجنب أضرار إضافية ويبقي العقار مريحاً للاستخدام.`,
              question: `متى ينبغي ترتيب ${seed.title}؟`,
            },
            {
              answer: `نبدأ بنظرة واضحة على المشكلة، ثم نُكمل المهام المتفق عليها بالأدوات والمواد المناسبة. بالنسبة إلى ${seed.title}، ينصب التركيز على ${seed.angle}.`,
              question: 'كيف يُنفَّذ العمل؟',
            },
            {
              answer:
                'وفّروا وصولاً واضحاً إلى منطقة العمل، وانقلوا الأغراض الهشة القريبة، وأخبرونا بأي قواعد للمبنى تخص الأدوات أو الوقوف أو ساعات الهدوء. إن وُجدت كتيبات المنتج أو ملاحظات إصلاح سابقة فليبقَ ذلك في المتناول.',
              question: 'كيف أستعد للموعد؟',
            },
            {
              answer:
                'تعتمد التكلفة على سهولة الوصول والمواد وحالة التجهيزات القائمة، وما إذا كانت هناك إصلاحات مرتبطة تظهر بعد فتح المنطقة. نقدّم عرض سعر بدل أسعار كتالوج ثابتة.',
              question: 'ما العوامل التي تؤثر على التكلفة؟',
            },
          ],
          [
            {
              answer: `غالباً ما يطلب العملاء المساعدة في ${problems}. يُخطط ${seed.title} حول هذه المسائل العملية والنتيجة التي تريدونها بعدها.`,
              question: `ما المشكلات التي يعالجها ${seed.title} عادةً؟`,
            },
            {
              answer:
                'نعم. تجمع زيارات كثيرة مهاماً مترابطة في المساحة نفسها حتى لا تحتاجوا إلا إلى موعد واحد. أخبرونا بالأعمال الأخرى المعلقة عند التواصل وسننصح بما يمكن جمعه بشكل معقول.',
              question: 'هل يمكن جمع هذه الخدمة مع أعمال صيانة أخرى؟',
            },
            {
              answer: `نؤكد المطلوب، ونحمي التشطيبات المحيطة حيث أمكن، ونُكمل العمل المشمول، ونتأكد أن ${seed.outcome}.`,
              question: `كيف تتعاملون مع ${seed.title} في الموقع؟`,
            },
            {
              answer: `من العادات المفيدة ${joinList(seed.tips)}. اتباع هذه النصائح يساعد العمل على البقاء أطول بين الزيارات.`,
              question: 'كيف أحافظ على العنصر بعد الإصلاح أو التركيب؟',
            },
            {
              answer: `يقع مقر Handyman في ${address} ويخدم عقارات في أنحاء ${serviceArea}. اذكروا موقعكم عند الاستفسار لنؤكد إمكانية الزيارة.`,
              question: 'هل تعملون في أنحاء الإمارات؟',
            },
          ],
          [
            {
              answer: `${seed.whenNeeded} سواء أدرتم شقة أو فيلا أو مكان عمل، نكيّف الأسلوب مع المساحة والمواد المركّبة أصلاً.`,
              question: `هل يناسب ${seed.title} عقاري؟`,
            },
            {
              answer: `توقعوا زيارة مركّزة تشمل ${includes}. نبقيكم على اطلاع إن ظهرت مسائل مرتبطة تحتاج قراراً أوسع قبل المتابعة.`,
              question: 'ماذا أتوقع خلال الزيارة؟',
            },
            {
              answer: `اتصلوا أو راسلونا على واتساب ${phone}، أو عبر البريد ${email}. صفوا العمل، وأرسلوا صوراً واضحة إن أمكن، واذكروا الأوقات المفضلة ضمن ساعات العمل.`,
              question: 'كيف أطلب عرض سعر؟',
            },
            {
              answer: `يعني نجاح الزيارة أن ${seed.outcome}. نترك لكم أيضاً ملاحظات عناية عملية تناسب المواد المستخدمة.`,
              question: `ما النتيجة المتوقعة من ${seed.title}؟`,
            },
            {
              answer:
                'بعض الأعمال تستخدم قطعاً أو مواد استهلاكية تُختار في الموقع. نناقش خيارات المواد قبل الشراء حتى تعرفوا ما يشمله عرض السعر.',
              question: 'هل المواد مشمولة؟',
            },
          ],
        ],
        'هل هناك حدود ترخيص أو اختصاص ينبغي معرفتها؟'
      )
    },
    fold,
    introduction: (seed, pattern) =>
      pattern === 0
        ? `يساعد ${seed.title} ملاك العقارات في الإمارات على التعامل مع ${seed.angle}. ${seed.whenNeeded} يتعامل Handyman مع كل زيارة بتصور واضح وعادات عمل مرتبة ونصائح عملية للعناية بالنتيجة.`
        : `عندما تحتاجون ${seed.title}، الأولوية لإصلاح موثوق يناسب استخدامكم للمساحة. ${seed.whenNeeded} يركز فريقنا على ${seed.angle}، ثم يشرح العناية اللاحقة التي تُبقي النتيجة ثابتة.`,
    joinList,
    mainDescription: (seed, pattern) => {
      const includes = joinList(seed.includes)
      const problems = joinList(seed.problems)
      return pattern === 0
        ? [
            `يُطلب ${seed.title} غالباً عندما يلاحظ السكان ${problems}. إن تُركت أعطال صغيرة دون معالجة فقد تلطّخ التشطيبات أو تهدر الماء أو الطاقة أو تصعّب استخدام الغرف يومياً.`,
            `خلال الزيارة نتولى عادةً ${includes}. يعتمد الترتيب على سهولة الوصول وحالة التجهيزات، وما إذا كانت الأسطح المحيطة تحتاج حماية أثناء العمل.`,
            `يختار العملاء المساعدة المهنية في ${seed.title} عندما يريدون ${seed.outcome}. وهذا مهم في شقق المارينا المزدحمة وفلل العائلات والأماكن التجارية حيث ينبغي أن يبقى التوقف قصيراً.`,
          ]
        : [
            `من أول تواصل نوضّح ما ينبغي أن يحققه ${seed.title} لعقاركم. المحفزات الشائعة تشمل ${problems}، ولكل منها أسلوب مختلف قليلاً في الموقع.`,
            `يغطي العمل العملي عادةً ${includes}. نؤكد المواد والطريقة قبل البدء حتى تفهموا النطاق، خاصة حيث قد تحتاج التشطيبات أو التجهيزات إلى مطابقة.`,
            `الهدف واضح: ${seed.outcome}. تتلقون أيضاً إرشادات صيانة بسيطة كي يدوم التحسين بين الزيارات المجدولة.`,
          ]
    },
    metaDescription: (seed) =>
      `${seed.title} في أنحاء ${serviceArea}. ${cap(seed.angle)}. المقر في ${address} — اتصلوا أو راسلوا واتساب لعرض سعر.`,
    metaTitle: (seed) => `${seed.title} | Handyman الإمارات`,
    shortDescription: (seed) =>
      `${seed.title} للمنازل وأماكن العمل في أنحاء ${serviceArea} — ${seed.angle}.`,
    whyChooseUs: (seed) =>
      `يقع مقر Handyman في ${address} ويعمل في أنحاء ${serviceArea}. لـ${seed.title} يمكنكم التواصل هاتفياً أو عبر واتساب على ${phone}، أو بالبريد ${email}. نسعّر العمل بعد المعاينة دون أسعار كتالوج ثابتة، ونلتزم بساعات العمل المنشورة في هذا الموقع.`,
  }

  return helpers
}

const urdu = (): CopyHelpers => {
  const fold = same
  const joinList = (items: string[]) =>
    joinWith(
      items,
      (a, b) => `${a} اور ${b}`,
      (head, last) => `${head}، اور ${last}`
    )
  const { address, fridayHours, satThuHours, serviceArea } = facts.ur

  const helpers: CopyHelpers = {
    availability: () =>
      `Handyman کے اوقاتِ کار میں دستیاب: ہفتہ–جمعرات ${satThuHours}؛ جمعہ ${fridayHours}۔ دورہ ترتیب دینے کے لیے فون یا واٹس ایپ کریں۔`,
    defaultProcess: (seed) => [
      `مسئلہ پر بات کرتے ہیں اور تصدیق کرتے ہیں کہ ${seed.title} آپ کی پراپرٹی کے لیے درست دائرہ ہے۔`,
      'متاثرہ جگہ کا معائنہ کرتے ہیں، رسائی کی ضروریات نوٹ کرتے ہیں، اور کام شروع کرنے سے پہلے عملی طریقہ طے کرتے ہیں۔',
      `${joinList(seed.includes.slice(0, 3))} انجام دیتے ہیں، اور جگہ کو جتنا ممکن ہو صاف رکھتے ہیں۔`,
      'مکمل کام آپ کے ساتھ دیکھتے ہیں، سادہ دیکھ بھال کی صلاح دیتے ہیں، اور اس دورے سے باہر رہ جانے والی چیزیں نوٹ کرتے ہیں۔',
    ],
    faqs: (seed) => {
      const includes = joinList(seed.includes)
      const problems = joinList(seed.problems.slice(0, 3))
      return makeFaqs(
        seed,
        [
          [
            {
              answer: `${seed.title} عام طور پر ${includes} کا احاطہ کرتا ہے۔ درست دائرہ سائٹ دیکھنے اور آپ کی ضرورت جاننے کے بعد طے ہوتا ہے۔`,
              question: `${seed.title} میں کیا شامل ہے؟`,
            },
            {
              answer: `${seed.whenNeeded} کام جلد ترتیب دینے سے ثانوی نقصان کم ہوتا ہے اور پراپرٹی استعمال کے قابل رہتی ہے۔`,
              question: `${seed.title} کب ترتیب دوں؟`,
            },
            {
              answer: `پہلے مسئلے کو صاف طور پر دیکھتے ہیں، پھر متفقہ کام مناسب اوزار اور مواد سے مکمل کرتے ہیں۔ ${seed.title} میں توجہ ${seed.angle} پر ہوتی ہے۔`,
              question: 'کام کیسے کیا جاتا ہے؟',
            },
            {
              answer:
                'کام کی جگہ تک رسائی صاف رکھیں، قریبی نازک چیزیں ہٹا دیں، اور عمارت کے اوزار، پارکنگ یا خاموش اوقات کے قواعد بتائیں۔ اگر دستی یا پرانی مرمت کی نوٹس ہوں تو ساتھ رکھیں۔',
              question: 'ملاقات کی تیاری کیسے کروں؟',
            },
            {
              answer:
                'لاگت رسائی، مواد، موجودہ فٹنگز کی حالت، اور کھولنے کے بعد درکار متعلقہ مرمت پر منحصر ہے۔ ہم فہرست کی مقررہ قیمتوں کے بجائے کوٹ دیتے ہیں۔',
              question: 'لاگت کن باتوں پر منحصر ہے؟',
            },
          ],
          [
            {
              answer: `گاہک اکثر ${problems} میں مدد مانگتے ہیں۔ ${seed.title} ان عملی مسائل اور مطلوبہ نتیجے کے گرد منصوبہ بندی کی جاتی ہے۔`,
              question: `${seed.title} عام طور پر کون سے مسائل حل کرتا ہے؟`,
            },
            {
              answer:
                'جی ہاں۔ بہت سے دوروں میں ایک ہی جگہ کے متعلقہ کام اکٹھے کیے جاتے ہیں تاکہ صرف ایک ملاقات کافی ہو۔ رابطہ کرتے وقت دیگر زیرِ التوا کام بتائیں، ہم مشورہ دیں گے کیا اکٹھا کیا جا سکتا ہے۔',
              question: 'کیا یہ سروس دیگر مینٹیننس کے ساتھ ملائی جا سکتی ہے؟',
            },
            {
              answer: `مختصر بریف طے کرتے ہیں، ارد گرد کی فنش جہاں ممکن ہو بچاتے ہیں، شامل کام مکمل کرتے ہیں، اور یقینی بناتے ہیں کہ ${seed.outcome}۔`,
              question: `سائٹ پر ${seed.title} کا طریقہ کیا ہے؟`,
            },
            {
              answer: `مفید عادات میں ${joinList(seed.tips)} شامل ہیں۔ ان مشوروں پر عمل سے کام دوروں کے درمیان زیادہ دیر چلتا ہے۔`,
              question: 'مرمت یا نصب شدہ چیز کی دیکھ بھال کیسے کروں؟',
            },
            {
              answer: `Handyman ${address} میں واقع ہے اور ${serviceArea} بھر کی پراپرٹیز کی خدمت کرتا ہے۔ استفسار کرتے وقت مقام بتائیں تاکہ سفر کی تصدیق ہو سکے۔`,
              question: 'کیا آپ پورے یو اے ای میں کام کرتے ہیں؟',
            },
          ],
          [
            {
              answer: `${seed.whenNeeded} فلیٹ، ولا یا کام کی جگہ جو بھی ہو، طریقہ جگہ اور پہلے سے نصب مواد کے مطابق ڈھالتے ہیں۔`,
              question: `کیا ${seed.title} میری پراپرٹی کے لیے مناسب ہے؟`,
            },
            {
              answer: `ایک مرکوز دورہ سمجھیں جس میں ${includes} شامل ہو۔ اگر متعلقہ مسائل ملیں جن پر بڑا فیصلہ درکار ہو تو آپ کو بتاتے رہتے ہیں۔`,
              question: 'دورے کے دوران کیا توقع کروں؟',
            },
            {
              answer: `${phone} پر کال یا واٹس ایپ کریں، یا ${email} پر ای میل بھیجیں۔ کام بیان کریں، اگر ہو سکے تو صاف تصاویر بھیجیں، اور اوقاتِ کار کے اندر پسندیدہ وقت بتائیں۔`,
              question: 'کوٹ کیسے مانگوں؟',
            },
            {
              answer: `کامیاب دورے کا مطلب یہ ہونا چاہیے کہ ${seed.outcome}۔ استعمال شدہ مواد کے مطابق عملی دیکھ بھال کی نوٹس بھی دے جاتے ہیں۔`,
              question: `${seed.title} سے کیا نتیجہ توقع کروں؟`,
            },
            {
              answer:
                'کچھ کاموں میں پرزے یا استعمال کی اشیاء سائٹ پر چننی پڑتی ہیں۔ خریداری سے پہلے آپشنز پر بات کرتے ہیں تاکہ کوٹ میں کیا شامل ہے معلوم رہے۔',
              question: 'کیا مواد شامل ہے؟',
            },
          ],
        ],
        'کیا لائسنس یا ماہر کی کوئی حدیں ہیں جو مجھے معلوم ہونی چاہییں؟'
      )
    },
    fold,
    introduction: (seed, pattern) =>
      pattern === 0
        ? `${seed.title} متحدہ عرب امارات کے پراپرٹی مالکان کو ${seed.angle} سے نمٹنے میں مدد دیتا ہے۔ ${seed.whenNeeded} Handyman ہر دورے کو واضح بریف، صاف کام کی عادات، اور مکمل کام کی دیکھ بھال کی عملی صلاح کے ساتھ کرتا ہے۔`
        : `جب آپ کو ${seed.title} درکار ہو تو ترجیح ایک قابلِ اعتماد حل کی ہوتی ہے جو جگہ کے استعمال سے میل کھائے۔ ${seed.whenNeeded} ہماری ٹیم ${seed.angle} پر توجہ دیتی ہے، پھر بعد کی دیکھ بھال سمجھاتی ہے تاکہ نتیجہ برقرار رہے۔`,
    joinList,
    mainDescription: (seed, pattern) => {
      const includes = joinList(seed.includes)
      const problems = joinList(seed.problems)
      return pattern === 0
        ? [
            `${seed.title} عام طور پر تب مانگا جاتا ہے جب گھر والے ${problems} محسوس کریں۔ چھوٹی خرابیاں چھوڑ دینے سے فنش داغدار ہو سکتی ہے، پانی یا بجلی ضائع ہو سکتی ہے، یا کمروں کا روزمرہ استعمال مشکل ہو سکتا ہے۔`,
            `دورے کے دوران عام طور پر ${includes} کیا جاتا ہے۔ ترتیب رسائی، موجودہ فٹنگز کی حالت، اور اس بات پر منحصر ہے کہ کام کے دوران ارد گرد کی سطحوں کو بچانا ہے یا نہیں۔`,
            `گاہک ${seed.title} کے لیے پیشہ ورانہ مدد تب چنتے ہیں جب وہ چاہتے ہیں کہ ${seed.outcome}۔ مصروف مرینا اپارٹمنٹس، خاندانی ولاز، اور تجارتی جگہوں پر یہ اہم ہے جہاں بندش مختصر رہنی چاہیے۔`,
          ]
        : [
            `پہلے رابطے سے ہم واضح کرتے ہیں کہ ${seed.title} آپ کی پراپرٹی کے لیے کیا حاصل کرے۔ عام محرکات میں ${problems} شامل ہیں، اور ہر ایک کا سائٹ پر تھوڑا مختلف طریقہ ہوتا ہے۔`,
            `عملی کام عام طور پر ${includes} کا احاطہ کرتا ہے۔ شروع سے پہلے مواد اور طریقہ طے کرتے ہیں تاکہ دائرہ سمجھ آئے، خاص طور پر جہاں فنش یا فکسچر ملانا پڑے۔`,
            `مقصد سیدھا ہے: ${seed.outcome}۔ سادہ مینٹیننس رہنمائی بھی ملتی ہے تاکہ بہتری مقررہ دوروں کے درمیان قائم رہے۔`,
          ]
    },
    metaDescription: (seed) =>
      `${serviceArea} بھر میں ${seed.title}۔ ${cap(seed.angle)}۔ مقام ${address} — کوٹ کے لیے کال یا واٹس ایپ کریں۔`,
    metaTitle: (seed) => `${seed.title} | Handyman یو اے ای`,
    shortDescription: (seed) =>
      `${serviceArea} بھر کے گھروں اور کام کی جگہوں کے لیے ${seed.title} — ${seed.angle}۔`,
    whyChooseUs: (seed) =>
      `Handyman ${address} میں واقع ہے اور ${serviceArea} بھر میں کام کرتا ہے۔ ${seed.title} کے لیے ${phone} پر فون یا واٹس ایپ، یا ${email} پر ای میل کریں۔ ہم فہرست کی مقررہ قیمتوں کے بجائے کام کا کوٹ دیتے ہیں، اور اس سائٹ پر درج اوقاتِ کار کے پابند رہتے ہیں۔`,
  }

  return helpers
}

const hindi = (): CopyHelpers => {
  const fold = same
  const joinList = (items: string[]) =>
    joinWith(
      items,
      (a, b) => `${a} और ${b}`,
      (head, last) => `${head}, और ${last}`
    )
  const { address, fridayHours, satThuHours, serviceArea } = facts.hi

  const helpers: CopyHelpers = {
    availability: () =>
      `Handyman के कामकाजी घंटों में उपलब्ध: शनिवार–गुरुवार ${satThuHours}; शुक्रवार ${fridayHours}। विज़िट तय करने के लिए फ़ोन या व्हाट्सएप करें।`,
    defaultProcess: (seed) => [
      `समस्या पर बात करते हैं और पुष्टि करते हैं कि ${seed.title} आपकी प्रॉपर्टी के लिए सही दायरा है।`,
      'प्रभावित जगह का निरीक्षण करते हैं, पहुँच की ज़रूरतें नोट करते हैं, और काम शुरू करने से पहले व्यावहारिक तरीका तय करते हैं।',
      `${joinList(seed.includes.slice(0, 3))} करते हैं, और जगह को जितना संभव हो व्यवस्थित रखते हैं।`,
      'पूरा काम आपके साथ देखते हैं, सरल देखभाल की सलाह देते हैं, और इस विज़िट से बाहर रहने वाले आइटम नोट करते हैं।',
    ],
    faqs: (seed) => {
      const includes = joinList(seed.includes)
      const problems = joinList(seed.problems.slice(0, 3))
      return makeFaqs(
        seed,
        [
          [
            {
              answer: `${seed.title} आमतौर पर ${includes} कवर करता है। सटीक दायरा साइट देखने और आपकी ज़रूरत समझने के बाद तय होता है।`,
              question: `${seed.title} में क्या शामिल है?`,
            },
            {
              answer: `${seed.whenNeeded} काम जल्दी कराने से आगे नुकसान कम होता है और प्रॉपर्टी आराम से इस्तेमाल होती रहती है।`,
              question: `${seed.title} कब कराना चाहिए?`,
            },
            {
              answer: `पहले समस्या को साफ-साफ देखते हैं, फिर तय काम उपयुक्त औज़ार और सामग्री से पूरा करते हैं। ${seed.title} में ध्यान ${seed.angle} पर रहता है।`,
              question: 'काम कैसे किया जाता है?',
            },
            {
              answer:
                'काम की जगह तक साफ पहुँच रखें, पास की नाजुक चीजें हटा दें, और बिल्डिंग के औज़ार, पार्किंग या शांत घंटों के नियम बताएँ। अगर प्रॉडक्ट मैनुअल या पुरानी मरम्मत के नोट हों तो साथ रखें।',
              question: 'अपॉइंटमेंट की तैयारी कैसे करूँ?',
            },
            {
              answer:
                'लागत पहुँच, सामग्री, मौजूदा फिटिंग की हालत, और खोलने के बाद चाहिए संबंधित मरम्मत पर निर्भर करती है। हम कैटलॉग की तय कीमतों की जगह कोट देते हैं।',
              question: 'लागत किन बातों पर निर्भर करती है?',
            },
          ],
          [
            {
              answer: `ग्राहक अक्सर ${problems} में मदद माँगते हैं। ${seed.title} इन्हीं व्यावहारिक मुद्दों और आपके मनचाहे नतीजे के आसपास प्लान होता है।`,
              question: `${seed.title} आमतौर पर कौन-सी समस्याएँ हल करता है?`,
            },
            {
              answer:
                'हाँ। कई विज़िट में एक ही जगह के जुड़े काम साथ कर लिये जाते हैं, ताकि एक ही अपॉइंटमेंट काफी हो। संपर्क करते समय अन्य लंबित काम बताएँ, हम सलाह देंगे क्या साथ लिया जा सकता है।',
              question: 'क्या इस सेवा को अन्य मेंटेनेंस के साथ जोड़ा जा सकता है?',
            },
            {
              answer: `ब्रिफ पक्का करते हैं, आसपास की फिनिश जहाँ संभव हो सुरक्षित रखते हैं, शामिल काम पूरा करते हैं, और जाँचते हैं कि ${seed.outcome}।`,
              question: `साइट पर ${seed.title} का तरीका क्या है?`,
            },
            {
              answer: `उपयोगी आदतों में ${joinList(seed.tips)} शामिल हैं। इन सुझावों से काम विज़िट के बीच अधिक समय चलता है।`,
              question: 'मरम्मत या लगाई गई चीज़ की देखभाल कैसे करूँ?',
            },
            {
              answer: `Handyman ${address} में स्थित है और ${serviceArea} भर की प्रॉपर्टी की सेवा करता है। पूछताछ करते समय लोकेशन बताएँ ताकि यात्रा की पुष्टि हो सके।`,
              question: 'क्या आप पूरे यूएई में काम करते हैं?',
            },
          ],
          [
            {
              answer: `${seed.whenNeeded} फ्लैट, विला या कार्यस्थल जो भी हो, तरीका जगह और पहले से लगी सामग्री के अनुसार ढालते हैं।`,
              question: `क्या ${seed.title} मेरी प्रॉपर्टी के लिए उपयुक्त है?`,
            },
            {
              answer: `एक केंद्रित विज़िट समझें जिसमें ${includes} शामिल हो। अगर जुड़े मुद्दे मिलें जिन पर बड़ा फैसला चाहिए, तो आपको बताते रहते हैं।`,
              question: 'विज़िट के दौरान क्या उम्मीद करूँ?',
            },
            {
              answer: `${phone} पर कॉल या व्हाट्सएप करें, या ${email} पर ईमेल भेजें। काम बताएँ, हो सके तो साफ फ़ोटो भेजें, और कामकाजी घंटों में पसंदीदा समय लिखें।`,
              question: 'कोट कैसे माँगूँ?',
            },
            {
              answer: `सफल विज़िट का मतलब यह होना चाहिए कि ${seed.outcome}। इस्तेमाल की सामग्री के हिसाब से व्यावहारिक देखभाल नोट्स भी मिलते हैं।`,
              question: `${seed.title} से क्या नतीजा उम्मीद करूँ?`,
            },
            {
              answer:
                'कुछ कामों में पार्ट्स या उपभोग्य चीजें साइट पर चुननी पड़ती हैं। खरीद से पहले विकल्पों पर बात करते हैं ताकि कोट में क्या शामिल है पता रहे।',
              question: 'क्या सामग्री शामिल है?',
            },
          ],
        ],
        'क्या कोई लाइसेंस या विशेषज्ञ सीमाएँ हैं जो मुझे पता होनी चाहिए?'
      )
    },
    fold,
    introduction: (seed, pattern) =>
      pattern === 0
        ? `${seed.title} यूएई के प्रॉपर्टी मालिकों को ${seed.angle} से निपटने में मदद करता है। ${seed.whenNeeded} Handyman हर विज़िट को साफ ब्रिफ, व्यवस्थित कामकाज, और पूरे काम की देखभाल की व्यावहारिक सलाह के साथ करता है।`
        : `जब आपको ${seed.title} चाहिए, प्राथमिकता एक भरोसेमंद समाधान की होती है जो जगह के इस्तेमाल से मेल खाए। ${seed.whenNeeded} हमारी टीम ${seed.angle} पर ध्यान देती है, फिर बाद की देखभाल समझाती है ताकि नतीजा स्थिर रहे।`,
    joinList,
    mainDescription: (seed, pattern) => {
      const includes = joinList(seed.includes)
      const problems = joinList(seed.problems)
      return pattern === 0
        ? [
            `${seed.title} आमतौर पर तब माँगा जाता है जब घर वाले ${problems} नोटिस करते हैं। छोटी खराबी छोड़ देने से फिनिश दागदार हो सकती है, पानी या ऊर्जा बर्बाद हो सकती है, या कमरों का रोज़ाना इस्तेमाल मुश्किल हो सकता है।`,
            `विज़िट के दौरान आमतौर पर ${includes} किया जाता है। क्रम पहुँच, मौजूदा फिटिंग की हालत, और इस बात पर निर्भर करता है कि काम के दौरान आसपास की सतहों को बचाना है या नहीं।`,
            `ग्राहक ${seed.title} के लिए पेशेवर मदद तब चुनते हैं जब वे चाहते हैं कि ${seed.outcome}। व्यस्त मरीना अपार्टमेंट, पारिवारिक विला और व्यावसायिक जगहों पर यह मायने रखता है जहाँ डाउनटाइम छोटा रहना चाहिए।`,
          ]
        : [
            `पहले संपर्क से हम स्पष्ट करते हैं कि ${seed.title} आपकी प्रॉपर्टी के लिए क्या हासिल करे। आम ट्रिगर में ${problems} शामिल हैं, और हर एक का साइट पर थोड़ा अलग तरीका होता है।`,
            `व्यावहारिक काम आमतौर पर ${includes} कवर करता है। शुरू से पहले सामग्री और तरीका तय करते हैं ताकि दायरा समझ आए, खासकर जहाँ फिनिश या फिक्स्चर मिलाने पड़ें।`,
            `उद्देश्य सीधा है: ${seed.outcome}। सरल मेंटेनेंस गाइडेंस भी मिलती है ताकि सुधार तय विज़िट के बीच बना रहे।`,
          ]
    },
    metaDescription: (seed) =>
      `${serviceArea} भर में ${seed.title}। ${cap(seed.angle)}। स्थान ${address} — कोट के लिए कॉल या व्हाट्सएप करें।`,
    metaTitle: (seed) => `${seed.title} | Handyman यूएई`,
    shortDescription: (seed) =>
      `${serviceArea} भर के घरों और कार्यस्थलों के लिए ${seed.title} — ${seed.angle}।`,
    whyChooseUs: (seed) =>
      `Handyman ${address} में स्थित है और ${serviceArea} भर में काम करता है। ${seed.title} के लिए ${phone} पर फ़ोन या व्हाट्सएप करें, या ${email} पर ईमेल करें। हम कैटलॉग की तय कीमतों की जगह काम का कोट देते हैं, और इस साइट पर लिखे कामकाजी घंटों का पालन करते हैं।`,
  }

  return helpers
}

const chinese = (): CopyHelpers => {
  const fold = same
  const joinList = (items: string[]) =>
    joinWith(
      items,
      (a, b) => `${a}和${b}`,
      (head, last) => `${head.replace(/, /g, '、')}、以及${last}`
    )
  const { address, fridayHours, satThuHours, serviceArea } = facts.zh

  const helpers: CopyHelpers = {
    availability: () =>
      `可在 Handyman 营业时间内预约：周六至周四 ${satThuHours}；周五 ${fridayHours}。请致电或通过 WhatsApp 安排上门。`,
    defaultProcess: (seed) => [
      `沟通问题，确认${seed.title}适合您的物业范围。`,
      '检查受影响区域，记录通行要求，并在开工前商定可行做法。',
      `完成${joinList(seed.includes.slice(0, 3))}，并尽量保持现场整洁。`,
      '与您一起验收完工内容，说明简单养护建议，并记录本次无法处理的后续事项。',
    ],
    faqs: (seed) => {
      const includes = joinList(seed.includes)
      const problems = joinList(seed.problems.slice(0, 3))
      return makeFaqs(
        seed,
        [
          [
            {
              answer: `${seed.title}通常包括${includes}。具体范围会在查看现场并确认需求后敲定。`,
              question: `${seed.title}包含哪些内容？`,
            },
            {
              answer: `${seed.whenNeeded}尽快安排有助于避免二次损坏，并让物业继续正常使用。`,
              question: `什么时候该安排${seed.title}？`,
            },
            {
              answer: `我们先把问题看清楚，再用合适的工具和材料完成约定工作。就${seed.title}而言，重点是${seed.angle}。`,
              question: '工作如何进行？',
            },
            {
              answer:
                '请保证工作区域通行顺畅，移开附近易碎物品，并告知楼宇对工具、停车或安静时段的规定。如有产品说明书或既往维修记录，请一并备好。',
              question: '预约前应如何准备？',
            },
            {
              answer:
                '费用取决于通行条件、材料、现有配件状况，以及打开后是否还需要相关维修。我们按现场报价，不设固定目录价。',
              question: '哪些因素影响费用？',
            },
          ],
          [
            {
              answer: `客户常因${problems}求助。${seed.title}会围绕这些实际问题和您期望的结果来安排。`,
              question: `${seed.title}通常能解决哪些问题？`,
            },
            {
              answer:
                '可以。许多上门会把同一区域的相关工作合并，这样只需一次预约。联系时请告知其他待办事项，我们会建议哪些可以合理一起做。',
              question: '这项服务能否与其他维修一并安排？',
            },
            {
              answer: `我们确认任务、尽可能保护周围饰面、完成包含的工作，并确认${seed.outcome}。`,
              question: `现场如何处理${seed.title}？`,
            },
            {
              answer: `实用习惯包括${joinList(seed.tips)}。照做有助于在两次上门之间保持更久。`,
              question: '修好或装好的物品如何保养？',
            },
            {
              answer: `Handyman 位于${address}，服务${serviceArea}各地物业。询价时请告知位置，以便确认行程。`,
              question: '是否覆盖整个阿联酋？',
            },
          ],
          [
            {
              answer: `${seed.whenNeeded}无论公寓、别墅还是办公场所，我们都会按空间和现有材料调整做法。`,
              question: `${seed.title}适合我的物业吗？`,
            },
            {
              answer: `预计一次聚焦上门，涵盖${includes}。若发现需要更大决策的相关问题，我们会及时告知。`,
              question: '上门时会怎样？',
            },
            {
              answer: `致电或 WhatsApp ${phone}，或发邮件至 ${email}。说明工作内容，尽量附清晰照片，并在营业时间内给出方便时段。`,
              question: '如何询价？',
            },
            {
              answer: `一次成功上门应意味着${seed.outcome}。我们也会留下适合所用材料的养护说明。`,
              question: `${seed.title}应达到什么效果？`,
            },
            {
              answer:
                '有些工作需要在现场选择零件或耗材。采购前我们会讨论材料选项，让您清楚报价包含什么。',
              question: '材料是否包含在内？',
            },
          ],
        ],
        '是否有许可或专业限制需要了解？'
      )
    },
    fold,
    introduction: (seed, pattern) =>
      pattern === 0
        ? `${seed.title}帮助阿联酋业主应对${seed.angle}。${seed.whenNeeded}Handyman 每次上门都有清晰说明、整洁作业习惯，以及完工后的实用养护建议。`
        : `需要${seed.title}时，首要是可靠、贴合使用方式的处理。${seed.whenNeeded}团队聚焦${seed.angle}，并说明如何养护以保持效果稳定。`,
    joinList,
    mainDescription: (seed, pattern) => {
      const includes = joinList(seed.includes)
      const problems = joinList(seed.problems)
      return pattern === 0
        ? [
            `住户发现${problems}时，常会预约${seed.title}。小故障若放任，可能污染饰面、浪费水电，或让房间更难日常使用。`,
            `上门时通常处理${includes}。顺序取决于通行条件、现有配件状况，以及作业时是否需要保护周围表面。`,
            `客户选择专业${seed.title}，是因为希望${seed.outcome}。这对繁忙的码头公寓、家庭别墅和商业空间尤其重要，停工时间需要尽量短。`,
          ]
        : [
            `从第一次联系起，我们就明确${seed.title}应为您的物业达成什么。常见诱因包括${problems}，每一种现场处理方式都略有不同。`,
            `实际工作通常涵盖${includes}。开工前会确认材料和方法，让您了解范围，尤其是饰面或器具可能需要匹配时。`,
            `目标很直接：${seed.outcome}。您还会收到简单养护指引，让改善在两次定期上门之间保持稳定。`,
          ]
    },
    metaDescription: (seed) =>
      `${serviceArea}范围内的${seed.title}。${cap(seed.angle)}。位于${address} — 致电或 WhatsApp 询价。`,
    metaTitle: (seed) => `${seed.title} | Handyman 阿联酋`,
    shortDescription: (seed) =>
      `面向${serviceArea}住宅与职场的${seed.title} — ${seed.angle}。`,
    whyChooseUs: (seed) =>
      `Handyman 位于${address}，服务${serviceArea}各地。如需${seed.title}，可致电或 WhatsApp ${phone}，或发邮件至 ${email}。我们按现场报价、不公布固定目录价，并遵守本站公布的营业时间。`,
  }

  return helpers
}

const french = (): CopyHelpers => {
  const fold = latinFold
  const joinList = (items: string[]) =>
    joinWith(
      items,
      (a, b) => `${a} et ${b}`,
      (head, last) => `${head} et ${last}`
    )
  const { address, fridayHours, satThuHours, serviceArea } = facts.fr

  const helpers: CopyHelpers = {
    availability: () =>
      `Disponible pendant les horaires Handyman : samedi–jeudi ${satThuHours} ; vendredi ${fridayHours}. Appelez ou écrivez sur WhatsApp pour convenir d’une visite.`,
    defaultProcess: (seed) => [
      `Discuter du problème et confirmer que ${fold(seed.title)} correspond bien au besoin de votre bien.`,
      'Inspecter la zone concernée, noter les contraintes d’accès et convenir de la méthode avant de commencer.',
      `Réaliser ${fold(joinList(seed.includes.slice(0, 3)))}, en gardant le chantier aussi rangé que les conditions le permettent.`,
      'Revoir le travail terminé avec vous, partager des conseils d’entretien simples et noter les points reportés à une autre visite.',
    ],
    faqs: (seed) => {
      const titleLower = fold(seed.title)
      const includes = joinList(seed.includes)
      const problems = joinList(seed.problems.slice(0, 3))
      return makeFaqs(
        seed,
        [
          [
            {
              answer: `${seed.title} couvre généralement ${includes}. Le périmètre exact est confirmé après visite et discussion de ce que vous souhaitez faire.`,
              question: `Que comprend ${titleLower} ?`,
            },
            {
              answer: `${seed.whenNeeded} Intervenir rapidement limite les dégâts secondaires et garde le logement confortable.`,
              question: `Quand faut-il prévoir ${titleLower} ?`,
            },
            {
              answer: `Nous commençons par un diagnostic clair, puis réalisons les tâches convenues avec les outils et matériaux adaptés. Pour ${titleLower}, l’accent est mis sur ${seed.angle}.`,
              question: 'Comment le travail est-il réalisé ?',
            },
            {
              answer:
                'Dégagez l’accès à la zone de travail, éloignez les objets fragiles et signalez les règles de l’immeuble sur les outils, le stationnement ou les heures calmes. Gardez sous la main notices et comptes rendus de réparations précédentes.',
              question: 'Comment me préparer au rendez-vous ?',
            },
            {
              answer:
                'Le coût dépend de l’accès, des matériaux, de l’état des équipements existants et des réparations liées qui apparaissent une fois la zone ouverte. Nous établissons un devis plutôt que des prix catalogue fixes.',
              question: 'Quels facteurs influencent le coût ?',
            },
          ],
          [
            {
              answer: `Les clients demandent souvent de l’aide pour ${problems}. ${seed.title} est pensé autour de ces questions pratiques et du résultat souhaité.`,
              question: `Quels problèmes ${titleLower} résout-il le plus souvent ?`,
            },
            {
              answer:
                'Oui. De nombreuses visites regroupent des tâches liées dans le même espace, pour n’avoir qu’un rendez-vous. Signalez les autres travaux en attente : nous indiquerons ce qui peut être regroupé.',
              question:
                'Peut-on combiner ce service avec d’autres travaux d’entretien ?',
            },
            {
              answer: `Nous confirmons le brief, protégeons les finitions autour lorsque c’est possible, réalisons le travail inclus et vérifions que ${seed.outcome}.`,
              question: `Comment abordez-vous ${titleLower} sur place ?`,
            },
            {
              answer: `Parmi les habitudes utiles : ${fold(joinList(seed.tips))}. Les suivre prolonge le résultat entre deux visites.`,
              question: 'Comment entretenir l’élément réparé ou installé ?',
            },
            {
              answer: `Handyman est basé à ${address} et intervient dans l’ensemble des ${serviceArea}. Indiquez votre localisation pour confirmer le déplacement.`,
              question: 'Intervenez-vous dans tous les Émirats ?',
            },
          ],
          [
            {
              answer: `${seed.whenNeeded} Appartement, villa ou lieu de travail : nous adaptons la méthode à l’espace et aux matériaux déjà en place.`,
              question: `${cap(titleLower)} convient-il à mon bien ?`,
            },
            {
              answer: `Attendez-vous une visite ciblée couvrant ${fold(includes)}. Nous vous tenons informé si des points liés exigent une décision plus large avant de continuer.`,
              question: 'À quoi s’attendre pendant la visite ?',
            },
            {
              answer: `Appelez ou WhatsApp au ${phone}, ou écrivez à ${email}. Décrivez le travail, joignez des photos nettes si possible, et indiquez des créneaux dans nos horaires.`,
              question: 'Comment demander un devis ?',
            },
            {
              answer: `Une visite réussie devrait signifier que ${seed.outcome}. Nous laissons aussi des notes d’entretien adaptées aux matériaux utilisés.`,
              question: `Quel résultat attendre de ${titleLower} ?`,
            },
            {
              answer:
                'Certains chantiers nécessitent des pièces ou consommables choisis sur place. Nous discutons des options avant achat pour que le devis soit clair.',
              question: 'Les matériaux sont-ils inclus ?',
            },
          ],
        ],
        'Y a-t-il des limites de licence ou de spécialité à connaître ?'
      )
    },
    fold,
    introduction: (seed, pattern) =>
      pattern === 0
        ? `${seed.title} aide les propriétaires aux Émirats à traiter ${seed.angle}. ${seed.whenNeeded} Handyman aborde chaque visite avec un brief clair, un chantier rangé et des conseils d’entretien concrets.`
        : `Quand vous avez besoin de ${fold(seed.title)}, la priorité est une réparation fiable, adaptée à l’usage du lieu. ${seed.whenNeeded} L’équipe se concentre sur ${seed.angle}, puis explique l’entretien qui stabilise le résultat.`,
    joinList,
    mainDescription: (seed, pattern) => {
      const includes = joinList(seed.includes)
      const problems = joinList(seed.problems)
      const titleLower = fold(seed.title)
      return pattern === 0
        ? [
            `On demande souvent ${fold(seed.title)} lorsque les occupants constatent ${problems}. Laissées telles quelles, de petites pannes tachent les finitions, gaspillent l’eau ou l’énergie, ou rendent les pièces moins utilisables au quotidien.`,
            `Pendant la visite, nous traitons en général ${includes}. L’ordre dépend de l’accès, de l’état des équipements et de la protection éventuelle des surfaces autour.`,
            `Les clients choisissent un professionnel pour ${titleLower} lorsqu’ils veulent que ${seed.outcome}. C’est essentiel dans les appartements animés de Marina, les villas familiales et les locaux commerciaux, où l’interruption doit rester courte.`,
          ]
        : [
            `Dès le premier contact, nous clarifions ce que ${titleLower} doit apporter à votre bien. Les déclencheurs typiques incluent ${problems}, chacun demandant une approche un peu différente sur place.`,
            `Le travail pratique couvre généralement ${includes}. Nous confirmons matériaux et méthode avant de commencer, surtout lorsque des finitions ou équipements doivent être assortis.`,
            `L’objectif est simple : ${seed.outcome}. Vous recevez aussi des consignes d’entretien pour que l’amélioration tienne entre deux visites.`,
          ]
    },
    metaDescription: (seed) =>
      `${seed.title} dans les ${serviceArea}. ${cap(seed.angle)}. Basé à ${address} — appelez ou WhatsApp pour un devis.`,
    metaTitle: (seed) => `${seed.title} | Handyman EAU`,
    shortDescription: (seed) =>
      `${seed.title} pour logements et lieux de travail dans les ${serviceArea} — ${seed.angle}.`,
    whyChooseUs: (seed) =>
      `Handyman est basé à ${address} et intervient dans l’ensemble des ${serviceArea}. Pour ${fold(seed.title)}, joignez-nous par téléphone ou WhatsApp au ${phone}, ou par e-mail à ${email}. Nous chiffrons le chantier plutôt que de publier des prix fixes, et nous respectons les horaires indiqués sur ce site.`,
  }

  return helpers
}

const helpers: Record<AppLocale, CopyHelpers> = {
  ar: arabic(),
  en: english(),
  fr: french(),
  hi: hindi(),
  ur: urdu(),
  zh: chinese(),
}

export const getCopy = (locale: AppLocale): CopyHelpers => {
  return helpers[locale] ?? helpers.en
}

export const localeFacts = facts
