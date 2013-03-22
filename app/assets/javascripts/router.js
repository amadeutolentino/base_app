BaseApp.Router.reopen({
  location: 'history'
});

BaseApp.Router.map(function() {
  this.route('home');
  this.route('sign_in');
  this.resource('users', function() {
    this.route('edit');
    this.route('new');
  });
});

BaseApp.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('home');
  }
});


BaseApp.HomeRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    this.controllerFor('application').set('currentRoute', 'home');
  }
});

BaseApp.SignInRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    this.controllerFor('application').set('currentRoute', 'sign_in');
  }
});

BaseApp.UsersEditRoute = Auth.Route.extend({
  model: function() {
    return BaseApp.User.find(Auth.currentUserId);
  },
  setupController: function(controller, model) {
    controller.set('content', model);
    this.controllerFor('application').set('currentRoute', 'edit_user');
  }
});

BaseApp.UsersNewRoute = Ember.Route.extend({
  model: function() {
    return BaseApp.User.createRecord();
  },
  setupController: function(controller, model) {
    controller.set('content', model);
    this.controllerFor('application').set('currentRoute', 'sign_up');
  },
  events: {
    save: function(user) {
      user.get('transaction').commit();
      this.transitionTo('home');
    },
    cancel: function() {
      this.transitionTo('home');
    }
  }
});

BaseApp.UsersIndexRoute = Auth.Route.extend({
  model: function() {
    return BaseApp.User.find();
  },
  setupController: function(controller,model) {
    controller.set('users', model);
    return this.controllerFor('application').set('currentRoute', 'users');
  }
});