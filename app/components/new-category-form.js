import Ember from 'ember';

export default Ember.Component.extend({
  newCategoryForm: true,

  actions: {
    // showNewCategoryForm() {
    //   this.set('newCategoryForm', true);
    // },
    saveCategory() {
      var params = {
        name: this.get('name'),
        parentCategory: this.get('parentCategory').toLowerCase(),
      };
      // this.set('newCategoryForm', false);
      this.sendAction('saveCategory', params);
    }
  }
});
