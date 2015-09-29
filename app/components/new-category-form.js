import Ember from 'ember';

export default Ember.Component.extend({
  newCategoryForm: false,

  actions: {
    showNewCategoryForm() {
      this.set('newCategoryForm', true);
    },
    hideNewCategoryForm() {
      this.set('newCategoryForm', false);
    },
    saveCategory() {
      var params = {
        name: this.get('name'),
        parentCategory: this.get('parentCategory').toLowerCase(),
      };
      this.set('newCategoryForm', false);
      this.sendAction('saveCategory', params);
    }
  }
});
