/**
 * Frontend MLS Integration for Julia's Website
 * Fetches listings from serverless function and displays them
 */

class MLSDisplay {
  constructor() {
    this.apiUrl = '/.netlify/functions/mls-listings';
    this.container = null;
  }

  async loadListings() {
    try {
      const response = await fetch(this.apiUrl);
      const data = await response.json();
      
      if (data.error) {
        this.showError(data.message);
        return;
      }

      this.displayListings(data.listings);
      this.showLastUpdated(data.lastUpdated);
      
    } catch (error) {
      console.error('Failed to load listings:', error);
      this.showError('Unable to load current listings. Please call Julia directly.');
    }
  }

  displayListings(listings) {
    if (!this.container) {
      this.container = document.getElementById('mls-listings');
      if (!this.container) return;
    }

    this.container.innerHTML = `
      <div class="listings-gallery">
        <button class="gallery-nav gallery-nav--prev" onclick="this.parentElement.scrollLeft -= 350">‹</button>
        <div class="gallery-scroll">
          ${listings.map(listing => `
            <div class="gallery-card">
              <div class="card-image" style="background-image: url('${listing.photos[0] || '/images/julia-hero.svg'}')">
                <div class="card-badge">SENIOR FRIENDLY</div>
                <div class="card-overlay">
                  <button class="card-action">👁 View Details</button>
                  <button class="card-action">❤ Save</button>
                </div>
              </div>
              <div class="card-content">
                <div class="card-price">$${listing.price.toLocaleString()}</div>
                <div class="card-location">${this.extractCity(listing.address)}</div>
                
                <div class="card-details">
                  <div class="detail-row">
                    <span class="detail-label">Type</span>
                    <span class="detail-value">Single Family | Active</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Size</span>
                    <span class="detail-value">${listing.sqft ? listing.sqft.toLocaleString() + ' SqFt' : 'N/A'}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Rooms</span>
                    <span class="detail-value">${listing.bedrooms} Beds • ${listing.bathrooms} Baths</span>
                  </div>
                </div>
                
                <div class="card-footer">
                  <div class="card-logo">JT</div>
                  <div class="card-agent">
                    <div class="agent-text">Listed by:</div>
                    <div class="agent-name">Julia Tan, Aging Akamai</div>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        <button class="gallery-nav gallery-nav--next" onclick="this.parentElement.scrollLeft += 350">›</button>
      </div>
    `;
  }

  extractCity(address) {
    const parts = address.split(',');
    return parts.length > 1 ? parts[1].trim() : address;
  }

  showError(message) {
    if (!this.container) return;
    this.container.innerHTML = `
      <div class="mls-error">
        <p>${message}</p>
        <a href="tel:808-XXX-XXXX" class="contact-julia-btn">Call Julia: (808) XXX-XXXX</a>
      </div>
    `;
  }

  showLastUpdated(timestamp) {
    const updateElement = document.getElementById('listings-updated');
    if (updateElement && timestamp) {
      const date = new Date(timestamp).toLocaleString();
      updateElement.textContent = `Listings updated: ${date}`;
    }
  }
}

// Auto-load when page is ready
document.addEventListener('DOMContentLoaded', () => {
  const mlsDisplay = new MLSDisplay();
  mlsDisplay.loadListings();
  
  // Refresh every 30 minutes
  setInterval(() => mlsDisplay.loadListings(), 30 * 60 * 1000);
});