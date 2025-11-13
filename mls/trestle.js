/**
 * Simple Trestle API Client for HiCentral MLS
 */

class TrestleClient {
  constructor(apiKey, clientId, clientSecret) {
    this.apiKey = apiKey;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.baseUrl = 'https://api.trestle.corelogic.com';
    this.token = null;
  }

  async authenticate() {
    const response = await fetch(`${this.baseUrl}/oauth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: this.clientId,
        client_secret: this.clientSecret,
        grant_type: 'client_credentials'
      })
    });

    if (!response.ok) throw new Error('Authentication failed');
    
    const data = await response.json();
    this.token = data.access_token;
    return this.token;
  }

  async getListings(filters = {}) {
    if (!this.token) await this.authenticate();

    const params = new URLSearchParams({
      status: 'Active',
      property_type: 'Residential',
      limit: 50,
      ...filters
    });

    const response = await fetch(`${this.baseUrl}/v1/properties?${params}`, {
      headers: { 'Authorization': `Bearer ${this.token}` }
    });

    if (!response.ok) throw new Error('Failed to fetch listings');
    
    return response.json();
  }

  async getSeniorFriendlyListings() {
    return this.getListings({
      min_price: 300000,
      max_price: 2000000,
      bedrooms: '1,2,3,4'
    });
  }
}

module.exports = TrestleClient;