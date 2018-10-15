import { KeycloakConfig } from 'keycloak-angular';

// Add here your keycloak setup infos
let keycloakConfig: KeycloakConfig = {
  url: 'https://id-t.storebrand.no/auth',
  realm: 'storebrand',
  clientId: 'pension-customer'
};

export const environment = {
  production: true,
  keycloak: keycloakConfig
};
