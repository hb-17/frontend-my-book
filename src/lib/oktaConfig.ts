export const oktaConfig = {
    clientId: '0oa9r4hfomADsMObu5d7',
    issuer: 'https://dev-15517920.okta.com/oauth2/default',
    redirectUri: 'http://localhost:5173/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}
