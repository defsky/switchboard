import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('account', function() {
    this.route('login');
  });

  this.resource('realms', function() {
    this.resource('realm', { path: '/:realm_id' });
  });

  // this.route('realms', { path: '/realms' }, function() {
  //   this.route('index');
  // });
  // this.resource('realms');
  // this.resource('accounts');
});

export default Router;
