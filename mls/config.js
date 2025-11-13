/**
 * MLS Configuration for HiCentral/Trestle Integration
 * 
 * Configuration file for MLS data consumption.
 * Update these values once you have API credentials from HiCentral.
 */

const MLS_CONFIG = {
  // Trestle API Configuration
  trestle: {
    baseUrl: 'https://api.trestle.corelogic.com', // Update with actual endpoint
    apiKey: process.env.TRESTLE_API_KEY || '',
    clientId: process.env.TRESTLE_CLIENT_ID || '',
    clientSecret: process.env.TRESTLE_CLIENT_SECRET || '',
    version: 'v1',
    rateLimit: {
      requestsPerMinute: 60,
      requestsPerHour: 1000
    }
  },

  // Matrix Direct Feed (RETS) Configuration 
  matrix: {
    loginUrl: 'https://matrix.hicentral.com/login', // Update with actual endpoint
    username: process.env.MATRIX_USERNAME || '',
    password: process.env.MATRIX_PASSWORD || '',
    userAgent: 'JuliaTan-AgingAkamai/1.0',
    retsVersion: '1.7.2'
  },

  // Data refresh settings
  sync: {
    intervalMinutes: 30,
    fullSyncHours: 24,
    maxRetries: 3,
    backoffMs: 5000
  },

  // Property filters for Senior Transition focus
  filters: {
    propertyTypes: ['Single Family', 'Condo', 'Townhouse'],
    priceRange: {
      min: 300000,
      max: 2000000
    },
    bedrooms: {
      min: 1,
      max: 4
    },
    seniorFriendly: {
      singleLevel: true,
      elevator: true,
      rampAccess: true,
      gatedCommunity: true
    }
  }
};

module.exports = MLS_CONFIG;