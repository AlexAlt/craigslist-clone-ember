import Ember from 'ember';

export default Ember.Route.extend({
  model(query) {
    return this.store.findAll('post').then(function(posts) {
      return posts.filterBy('title', query.search_id)
    });
  }

});
