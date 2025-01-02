export const sampleCompanies = [
  {
    id: 1,
    name: 'ENTNT Software Solutions',
    location: 'Bangalore, India',
    linkedinProfile: 'https://linkedin.com/company/entnt',
    emails: ['contact@entnt.com', 'hr@entnt.in'],
    phoneNumbers: ['+91-80-1234-5678', '+91-80-8765-4321'],
    communicationPeriodicity: 7,
    comments: 'Leading software development company specializing in enterprise solutions'
  },
  {
    id: 2,
    name: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    linkedinProfile: 'https://linkedin.com/company/techcorp',
    emails: ['contact@techcorp.com', 'sales@techcorp.com'],
    phoneNumbers: ['+1-555-0123', '+1-555-0124'],
    communicationPeriodicity: 14,
    comments: 'Key client for enterprise solutions'
  },
  {
    id: 3,
    name: 'InnovateLabs',
    location: 'Boston, MA',
    linkedinProfile: 'https://linkedin.com/company/innovatelabs',
    emails: ['info@innovatelabs.com'],
    phoneNumbers: ['+1-555-0125'],
    communicationPeriodicity: 7,
    comments: 'Startup with high growth potential'
  }
]

export const sampleCommunications = [
  {
    id: 1,
    companyId: 1,
    method: 'LinkedIn Post',
    date: '2024-02-20',
    notes: 'Shared ENTNT\'s latest AI innovation announcement'
  },
  {
    id: 2,
    companyId: 1,
    method: 'Email',
    date: '2024-02-22',
    notes: 'Follow-up on technical collaboration opportunity'
  },
  {
    id: 3,
    companyId: 1,
    method: 'Phone Call',
    date: '2024-02-25',
    notes: 'Discussion about upcoming project requirements'
  },
  {
    id: 4,
    companyId: 2,
    method: 'LinkedIn Message',
    date: '2024-02-18',
    notes: 'Product demo scheduling'
  },
  {
    id: 5,
    companyId: 3,
    method: 'Email',
    date: '2024-02-23',
    notes: 'Partnership proposal discussion'
  }
]