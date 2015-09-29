import Ember from 'ember';

export default Ember.Component.extend({
  newPostForm: false,

  actions: {
    showNewPostForm() {
      this.set('newPostForm', true);
    },
    savePost() {
      var imageDefault = "assets/images/camera.jpg";
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        image: this.get('image') || imageDefault,
        category: this.get('category')
      };
      this.set('newPostForm', false);
      this.sendAction('savePost', params);
    }
  }
});
