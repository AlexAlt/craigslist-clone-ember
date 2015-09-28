import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  parentCategory: DS.attr(),
  posts: DS.hasMany('post', {async:true}),
});
