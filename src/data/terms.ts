type LegalSection = {
  body: string
  heading: string
}

export const termsSections = [
  {
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. By accessing handyman.ae or requesting Handyman services in the UAE, you agree to these Terms of Use. This is dummy copy for layout only. Replace when the legal company name and trade license are known.',
    heading: 'Agreement to these terms',
  },
  {
    body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Handyman provides renovation, maintenance, and trade services across the UAE. Information on this website is for general marketing and enquiry purposes. Dummy placeholder only.',
    heading: 'About Handyman',
  },
  {
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. You may use the site for lawful purposes only. You must not misuse the site, attempt unauthorized access, or submit false or harmful content through forms or other channels. Dummy placeholder only.',
    heading: 'Use of the website',
  },
  {
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Service descriptions on the site are summaries only. Prices are not listed; work is quoted on request. A quote or enquiry does not create a binding contract until confirmed in writing or as otherwise agreed. Dummy placeholder only.',
    heading: 'Services and quotes',
  },
  {
    body: 'Excepteur sint occaecat cupidatat non proident. Scheduling, deposits, and cancellation rules for specific jobs will be confirmed when you book. Dummy placeholder only.',
    heading: 'Bookings and cancellations',
  },
  {
    body: 'Pellentesque habitant morbi tristique senectus et netus. You are responsible for providing accurate contact and site-access details and for ensuring you have authority to request work at the property. Dummy placeholder only.',
    heading: 'User responsibilities',
  },
  {
    body: 'Vestibulum tortor quam, feugiat vitae, ultricies eget. Content on this website (text, branding, layout, and media) belongs to Handyman or its licensors and may not be copied or reused without permission. Dummy placeholder only.',
    heading: 'Intellectual property',
  },
  {
    body: 'Donec eu libero sit amet quam egestas semper. The site may link to third-party sites (for example maps or messaging apps). We are not responsible for their content or practices. Dummy placeholder only.',
    heading: 'Third-party links',
  },
  {
    body: 'Aenean ultricies mi vitae est. The website is provided on an “as is” basis. We do not warrant that the site will be uninterrupted or error-free. Service warranties, if any, are set out separately for specific jobs. Dummy placeholder only.',
    heading: 'Disclaimer of warranties',
  },
  {
    body: 'Mauris placerat eleifend leo. To the fullest extent permitted by UAE law, Handyman is not liable for indirect or consequential loss arising from use of this website. Liability for contracted services is governed by the agreement for that work. Dummy placeholder only.',
    heading: 'Limitation of liability',
  },
  {
    body: 'Quisque sit amet est et sapien ullamcorper pharetra. You agree to indemnify Handyman against claims arising from your misuse of the site or breach of these terms. Dummy placeholder only.',
    heading: 'Indemnity',
  },
  {
    body: 'Vestibulum erat wisi, condimentum sed, commodo vitae. These terms are governed by the laws of the United Arab Emirates, and disputes may be subject to the courts of Dubai, unless otherwise required by law. Dummy placeholder only.',
    heading: 'Governing law',
  },
  {
    body: 'Aenean fermentum, elit eget tincidunt condimentum. We may update these Terms of Use at any time by posting a revised version on this page. Continued use of the site after changes means you accept the updated terms. Dummy placeholder only.',
    heading: 'Changes to these terms',
  },
] as const satisfies readonly LegalSection[]
