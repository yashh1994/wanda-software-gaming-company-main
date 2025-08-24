export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export const updateSEO = (data: SEOData) => {
  // Update title
  document.title = data.title;

  // Update or create meta tags
  const updateMetaTag = (name: string, content: string, property = false) => {
    const attribute = property ? 'property' : 'name';
    let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    
    meta.setAttribute('content', content);
  };

  updateMetaTag('description', data.description);
  if (data.keywords) updateMetaTag('keywords', data.keywords);
  
  // Open Graph tags
  updateMetaTag('og:title', data.ogTitle || data.title, true);
  updateMetaTag('og:description', data.ogDescription || data.description, true);
  if (data.ogImage) updateMetaTag('og:image', data.ogImage, true);
  updateMetaTag('og:type', 'website', true);

  // Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:title', data.ogTitle || data.title);
  updateMetaTag('twitter:description', data.ogDescription || data.description);
  if (data.ogImage) updateMetaTag('twitter:image', data.ogImage);
};

export const defaultSEO: SEOData = {
  title: 'Wanda Software - Premium Simulation Games',
  description: 'Leading developer of immersive simulation games including Truckers of Europe series, City Bus Simulator, and Farm Life Simulator.',
  keywords: 'simulation games, trucking simulator, farming games, bus simulator, Wanda Software',
  ogImage: 'https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg?auto=compress&cs=tinysrgb&w=1200'
};