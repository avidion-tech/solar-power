// Environment configuration for SolarPower India
const env = {
  // App Configuration
  APP_NAME: 'SolarPower India',
  APP_DESCRIPTION: 'India\'s leading solar equipment supplier. Buy premium quality solar panels, inverters, batteries, mounting structures and complete solar solutions with government subsidy assistance.',
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'https://solarpowerindia.com',
  
  // API Configuration
  API_BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'https://api.solarpowerindia.com',
  API_VERSION: 'v1',
  
  // Payment Gateway Configuration
  RAZORPAY_KEY_ID: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
  STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '',
  
  // Database Configuration (for server-side)
  DATABASE_URL: process.env.DATABASE_URL || '',
  
  // Email Configuration
  SMTP_HOST: process.env.SMTP_HOST || 'smtp.gmail.com',
  SMTP_PORT: process.env.SMTP_PORT || '587',
  SMTP_USER: process.env.SMTP_USER || '',
  SMTP_PASS: process.env.SMTP_PASS || '',
  
  // Third-party Services
  GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GA_ID || '',
  FACEBOOK_PIXEL_ID: process.env.NEXT_PUBLIC_FB_PIXEL_ID || '',
  
  // Solar Industry APIs
  SOLAR_IRRADIANCE_API_KEY: process.env.SOLAR_IRRADIANCE_API_KEY || '',
  WEATHER_API_KEY: process.env.WEATHER_API_KEY || '',
  
  // Government Subsidy APIs
  MNRE_API_KEY: process.env.MNRE_API_KEY || '',
  STATE_SUBSIDY_API_KEY: process.env.STATE_SUBSIDY_API_KEY || '',
  
  // File Upload Configuration
  CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '',
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY || '',
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET || '',
  
  // Security Configuration
  JWT_SECRET: process.env.JWT_SECRET || 'your-super-secret-jwt-key',
  ENCRYPTION_KEY: process.env.ENCRYPTION_KEY || '',
  
  // Feature Flags
  ENABLE_CHAT_SUPPORT: process.env.NEXT_PUBLIC_ENABLE_CHAT || 'true',
  ENABLE_SUBSIDY_CALCULATOR: process.env.NEXT_PUBLIC_ENABLE_SUBSIDY_CALC || 'true',
  ENABLE_SOLAR_CALCULATOR: process.env.NEXT_PUBLIC_ENABLE_SOLAR_CALC || 'true',
  ENABLE_EMI_CALCULATOR: process.env.NEXT_PUBLIC_ENABLE_EMI_CALC || 'true',
  
  // Business Configuration
  COMPANY_NAME: 'SolarPower India Pvt. Ltd.',
  COMPANY_CIN: 'U40106DL2009PTC123456',
  COMPANY_GST: '07AABCS1234F1Z5',
  SUPPORT_EMAIL: 'support@solarpowerindia.com',
  SUPPORT_PHONE: '+91-9876543210',
  TOLL_FREE_NUMBER: '1800-123-SOLAR',
  
  // Shipping Configuration
  FREE_SHIPPING_THRESHOLD: 25000,
  DEFAULT_SHIPPING_COST: 500,
  EXPRESS_SHIPPING_COST: 1000,
  
  // Tax Configuration
  GST_RATE: 0.18,
  CESS_RATE: 0.01,
  
  // Inventory Configuration
  LOW_STOCK_THRESHOLD: 10,
  OUT_OF_STOCK_THRESHOLD: 0,
  
  // Cache Configuration
  CACHE_TTL: 3600, // 1 hour in seconds
  REDIS_URL: process.env.REDIS_URL || '',
  
  // Monitoring & Analytics
  SENTRY_DSN: process.env.SENTRY_DSN || '',
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  
  // Social Media Links
  SOCIAL_LINKS: {
    facebook: 'https://facebook.com/solarpowerindia',
    twitter: 'https://twitter.com/solarpowerindia',
    instagram: 'https://instagram.com/solarpowerindia',
    youtube: 'https://youtube.com/solarpowerindia',
    linkedin: 'https://linkedin.com/company/solarpowerindia'
  },
  
  // Regional Configuration
  DEFAULT_CURRENCY: 'INR',
  DEFAULT_LANGUAGE: 'en',
  SUPPORTED_LANGUAGES: ['en', 'hi', 'ta', 'te', 'bn', 'gu', 'mr'],
  
  // Solar Calculator Defaults
  SOLAR_DEFAULTS: {
    PANEL_EFFICIENCY: 0.22,
    SYSTEM_EFFICIENCY: 0.85,
    PEAK_SUN_HOURS: 5.5,
    COST_PER_WATT: 45,
    MAINTENANCE_COST_ANNUAL: 0.02
  },
  
  // Subsidy Information
  CENTRAL_SUBSIDY_RATE: 0.40, // 40% for residential up to 3kW
  STATE_SUBSIDY_RATES: {
    'delhi': 0.20,
    'maharashtra': 0.30,
    'gujarat': 0.25,
    'rajasthan': 0.30,
    'karnataka': 0.20,
    'tamil-nadu': 0.25,
    'andhra-pradesh': 0.30,
    'telangana': 0.30,
    'kerala': 0.20,
    'punjab': 0.30
  }
};

// Validation function to ensure required environment variables are set
export const validateEnv = () => {
  const requiredEnvVars = [
    'NEXT_PUBLIC_APP_URL'
  ];
  
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.warn('Missing environment variables:', missingVars);
  }
  
  return missingVars.length === 0;
};

// Helper function to get environment-specific configuration
export const getEnvConfig = () => {
  const environment = process.env.NODE_ENV || 'development';
  
  const configs = {
    development: {
      ...env,
      API_BASE_URL: 'http://localhost:3001/api',
      LOG_LEVEL: 'debug'
    },
    production: {
      ...env,
      LOG_LEVEL: 'error'
    },
    test: {
      ...env,
      API_BASE_URL: 'http://localhost:3001/api',
      LOG_LEVEL: 'silent'
    }
  };
  
  return configs[environment] || configs.development;
};

export default env;