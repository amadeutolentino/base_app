Auth.Config.reopen({
  tokenCreateUrl: '/users/sign_in',
  tokenDestroyUrl: '/users/sign_out',
  tokenKey: 'auth_token',
  idKey: 'user_id',
  rememberMe: true,
  rememberTokenKey: 'remember_token',
  rememberPeriod: 14,
  signInRoute: 'sign_in',
  authRedirect: true,
  signInRedirectFallbackRoute: 'home',
});
