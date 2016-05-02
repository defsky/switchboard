import Ember from 'ember';

export default Ember.Controller.extend({
  loading: false,

  inputsDisabled: Ember.computed('loading', function() {
    let loading = this.get('loading');
    return (loading) ? 'disabled' : null;
  })
});
