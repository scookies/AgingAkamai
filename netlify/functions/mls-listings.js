/**
 * Netlify Function: MLS Listings for Senior Transitions
 * Fetches and returns senior-friendly properties from Trestle API
 */

const TrestleClient = require('../../mls/trestle');

let cache = null;
let cacheTime = 0;
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

exports.handler = async (event, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  try {
    // Check cache
    if (cache && Date.now() - cacheTime < CACHE_DURATION) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(cache)
      };
    }

    // Initialize Trestle client
    const client = new TrestleClient(
      process.env.TRESTLE_API_KEY,
      process.env.TRESTLE_CLIENT_ID,
      process.env.TRESTLE_CLIENT_SECRET
    );

    // Fetch listings
    const rawListings = await client.getSeniorFriendlyListings();
    
    // Process for senior transitions
    const listings = rawListings.map(listing => ({
      id: listing.id,
      address: listing.address,
      price: listing.price,
      bedrooms: listing.bedrooms,
      bathrooms: listing.bathrooms,
      sqft: listing.living_area,
      photos: listing.photos?.slice(0, 1) || [],
      
      // Senior-friendly score
      seniorScore: calculateSeniorScore(listing),
      features: extractFeatures(listing),
      
      // Contact info
      contactPhone: process.env.JULIA_PHONE || '808-XXX-XXXX'
    }));

    // Update cache
    cache = {
      listings: listings.slice(0, 6),
      lastUpdated: new Date().toISOString(),
      count: listings.length
    };
    cacheTime = Date.now();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(cache)
    };

  } catch (error) {
    console.error('MLS API Error:', error);
    
    // Return cached data if available, or error message
    if (cache) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          ...cache,
          warning: 'Using cached data due to API error'
        })
      };
    }

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'MLS data temporarily unavailable',
        message: 'Please call Julia directly for current listings'
      })
    };
  }
};

function calculateSeniorScore(listing) {
  let score = 50;
  if (listing.stories === 1) score += 25;
  if (listing.elevator) score += 15;
  if (listing.handicap_access) score += 10;
  return Math.min(100, score);
}

function extractFeatures(listing) {
  const features = [];
  if (listing.stories === 1) features.push('Single Level');
  if (listing.elevator) features.push('Elevator');
  if (listing.handicap_access) features.push('Accessible');
  return features;
}