import Ember from 'ember';

export default Ember.Component.extend({
  sortedCategoriesProps: ['name:asc'],
  sortedCommunityCategories: Ember.computed.sort('categories.communityCategories', 'sortedCategoriesProps'),
  sortedPersonalsCategories: Ember.computed.sort('categories.personalsCategories', 'sortedCategoriesProps'),
  sortedDiscussionCategories: Ember.computed.sort('categories.discussionCategories', 'sortedCategoriesProps'),
  sortedHousingCategories: Ember.computed.sort('categories.housingCategories', 'sortedCategoriesProps'),
  sortedForSaleCategories: Ember.computed.sort('categories.forsaleCategories', 'sortedCategoriesProps'),
  sortedServicesCategories: Ember.computed.sort('categories.servicesCategories', 'sortedCategoriesProps'),
  sortedJobsCategories: Ember.computed.sort('categories.jobsCategories', 'sortedCategoriesProps'),
  sortedGigsCategories: Ember.computed.sort('categories.gigsCategories', 'sortedCategoriesProps')

});
