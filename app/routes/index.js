import Ember from 'ember';

export default Ember.Route.extend({
  // isCommunity: function(category) {
  //   return this.get('category')
  // }
  model() {
      return Ember.RSVP.hash({
        communityCategories: this.store.findAll('category').then(function(categories){
          return categories.filterBy('parentCategory', 'community');
        }),
        personalsCategories: this.store.findAll('category').then(function(categories){
          return categories.filterBy('parentCategory', 'personals');
        }),
        discussionCategories: this.store.findAll('category').then(function(categories){
          return categories.filterBy('parentCategory', 'discussion forums');
        }),
        housingCategories: this.store.findAll('category').then(function(categories){
          return categories.filterBy('parentCategory', 'housing');
        }),
        forsaleCategories: this.store.findAll('category').then(function(categories){
          return categories.filterBy('parentCategory', 'for sale');
        }),
        servicesCategories: this.store.findAll('category').then(function(categories){
          return categories.filterBy('parentCategory', 'services');
        }),
        jobsCategories: this.store.findAll('category').then(function(categories){
          return categories.filterBy('parentCategory', 'jobs');
        }),
        gigsCategories: this.store.findAll('category').then(function(categories){
          return categories.filterBy('parentCategory', 'gigs');
        }),
      });
    },
    actions: {
      saveCategory(params) {
        var newCategory = this.store.createRecord('category', params);
        newCategory.save();
        params.category.save().then(function(category) {
          category.reload();
        });
        this.transitionTo('index');
      },
      searchPosts(query) {
        this.transitionTo('search', query);
      }
    }
});
