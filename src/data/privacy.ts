type LegalSection = {
  body: string
  heading: string
}

export const privacySections = [
  {
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. This dummy Privacy Policy describes how Handyman may collect, use, and share information when you visit handyman.ae or contact us about services in the UAE. Replace this text when the legal company name and trade license are known.',
    heading: 'Introduction',
  },
  {
    body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We may collect details you provide (such as name, phone, email, and message content), usage data about how you browse the site, and technical information such as device type and approximate location. Dummy placeholder only.',
    heading: 'Information we collect',
  },
  {
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. We may use information to respond to enquiries, arrange quotes or visits, improve the website, and communicate about our renovation and maintenance services. Dummy placeholder only.',
    heading: 'How we use your information',
  },
  {
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. The site may use cookies or similar tools for basic functionality and analytics once analytics are added. Dummy placeholder only.',
    heading: 'Cookies and similar technologies',
  },
  {
    body: 'Excepteur sint occaecat cupidatat non proident. We do not sell personal information. We may share details with service providers who help us operate the site or deliver services, or when required by UAE law. Dummy placeholder only.',
    heading: 'Sharing of information',
  },
  {
    body: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. We keep information only as long as needed for the purposes above or as required by applicable law. Dummy placeholder only.',
    heading: 'Data retention',
  },
  {
    body: 'Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Depending on applicable law, you may ask to access, correct, or delete personal information we hold about you. Contact us using the details below. Dummy placeholder only.',
    heading: 'Your rights',
  },
  {
    body: 'Donec eu libero sit amet quam egestas semper. We take reasonable steps to protect information, but no method of transmission or storage is fully secure. Dummy placeholder only.',
    heading: 'Data security',
  },
  {
    body: 'Aenean ultricies mi vitae est. This website is not directed at children, and we do not knowingly collect personal information from minors. Dummy placeholder only.',
    heading: 'Children’s privacy',
  },
  {
    body: 'Mauris placerat eleifend leo. We may update this page from time to time. Continued use of the site after changes means you accept the updated policy. Dummy placeholder only.',
    heading: 'Changes to this policy',
  },
] as const satisfies readonly LegalSection[]
