import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:/',
  redirectUri: baseUrl,
  clientId: 'TechChallenge_App',
  responseType: 'code',
  scope: 'offline_access TechChallenge',
  requireHttps: true,
};

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'TechChallenge',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:',
      rootNamespace: 'TechChallenge',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
} as Environment;
