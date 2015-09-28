import Ember from 'ember';

export default Ember.Route.extend({
  // isCommunity: function(category) {
  //   return this.get('category')
  // }
  model() {
      return Ember.RSVP.hash({
        categories: this.store.findAll('category'),
        posts: this.store.findAll('post')
      });
    }
});
