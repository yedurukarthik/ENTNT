export const COMMUNICATION_METHODS = [
  { 
    id: 1, 
    name: 'LinkedIn Post', 
    description: 'Share content on company LinkedIn page',
    sequence: 1, 
    mandatory: true 
  },
  { 
    id: 2, 
    name: 'LinkedIn Message', 
    description: 'Direct message to company representatives',
    sequence: 2, 
    mandatory: true 
  },
  { 
    id: 3, 
    name: 'Email', 
    description: 'Email communication with company contacts',
    sequence: 3, 
    mandatory: true 
  },
  { 
    id: 4, 
    name: 'Phone Call', 
    description: 'Voice communication with company representatives',
    sequence: 4, 
    mandatory: false 
  },
  { 
    id: 5, 
    name: 'Other', 
    description: 'Any other form of communication',
    sequence: 5, 
    mandatory: false 
  },
];

export const COMMUNICATION_STATUS_COLORS = {
  overdue: 'bg-red-100',
  due: 'bg-yellow-100',
  upcoming: 'bg-green-100',
};

export const SAMPLE_COMPANIES = [
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
];