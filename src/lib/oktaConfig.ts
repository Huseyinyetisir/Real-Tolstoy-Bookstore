export const oktaConfig = {
    clientId: '0oadb764xnuBk2dIF5d7',
    issuer: 'https://dev-71513886.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid','profile','email'],
    pkce: true,
    disableHttpsCheck: true,

}