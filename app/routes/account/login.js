import Ember from 'ember';

export default Ember.Route.extend({

  setupController(controller, model) {
    this.set('controller', controller);
    controller.set('model', model);
  },

  actions: {
    signIn() {
      // Disable form inputs & set loading state for button
      this.set('controller.loading', true);

      
    }
  }
});
