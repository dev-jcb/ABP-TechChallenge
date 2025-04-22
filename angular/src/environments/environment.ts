import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:44364/',
  redirectUri: baseUrl,
  clientId: 'TechChallenge_App',
  responseType: 'code',
  scope: 'offline_access TechChallenge',
  requireHttps: true,
};

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'TechChallenge',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44364',
      rootNamespace: 'TechChallenge',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
} as Environment;
