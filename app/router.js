import Ember from 'ember';
import config from './config/environment';

Ember.LinkComponent.reopen({
  init() {
    this._super();
    Ember.keys(this).forEach(key => {
      if (key.substr(0, 5) === 'data-') {
        this.get('attributeBindings').pushObject(key);
      }
    });
  }
});


const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('account', function() {
    this.route('login');
  });

  this.resource('accounts', function() {
    this.resource('account', { path : '/:account_id' });
  });

  this.resource('realms', function() {
    this.route('new');
    this.resource('realm', { path: '/:realm_id' });
  });

  this.resource('tickets', function() {
    this.route('ticket', { path: '/:ticket_id' });
  });

  this.resource('conversations', function() {
    this.route('conversation', { path: '/:conversation_id' });
  });

  this.resource('crashes', function() {
    this.route('crash', { path: '/:crash_id' });
  });



  // this.route('realms', { path: '/realms' }, function() {
  //   this.route('index');
  // });
  // this.resource('realms');
  // this.resource('accounts');
});

export default Router;
