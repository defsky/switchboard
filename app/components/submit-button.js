import Ember from 'ember';

export default Ember.Component.extend({
  text: 'Submit',
  loading: false,
  classNames: ['loading-button'],
  classNameBindings: ['loading'],
  disabled: Ember.computed('loading', function() {
    let loading = this.get('loading');
    return (loading) ? 'disabled' : null;
  })
});
