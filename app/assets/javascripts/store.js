BaseApp.Store = DS.Store.extend({
  revision: 11,
  adapter: Auth.RESTAdapter.create()
});
