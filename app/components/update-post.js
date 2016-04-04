import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        author: this.get('author'),
        category: this.get('category'),
        title: this.get('title'),
        image: this.get('image'),
        body: this.get('body'),
        price: parseInt(this.get('price'))
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
