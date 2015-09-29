import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    searchPosts() {
      var query = this.get('query');
      this.sendAction('searchPosts', query);
    }
  }

});
