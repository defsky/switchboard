import $ from 'jquery';
import Ember from 'ember';

// Define classie from window namespace
let MLMenu = window.MLMenu;

export default Ember.Component.extend({

  didInsertElement() {
    this._super();

    let element = this.$().find('nav.menu')[0];
    if (element) {
      this.set('menu', new MLMenu(element, {}));
    }
  }
});
