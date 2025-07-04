const env = {
  // App Configuration
  APP_NAME: 'SolarPower India',
  APP_DESCRIPTION: 'India\'s leading solar equipment supplier. Buy premium quality solar panels, inverters, batteries, mounting structures and complete solar solutions with government subsidy assistance.',
  

  FREE_SHIPPING_THRESHOLD: 25000,
  DEFAULT_SHIPPING_COST: 500,
  EXPRESS_SHIPPING_COST: 1000,

  // Tax Configuration
  GST_RATE: 0.18,

};

// Validation function to ensure required environment variables are set
export const validateEnv = () => {
  // const requiredEnvVars = [
  //   'NEXT_PUBLIC_APP_URL'
  // ];
  
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