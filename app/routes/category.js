import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },
    actions: {
      save3(params) {
      var newPost = this.store.createRecord('post', params);
      var category = params.category;
      category.get('posts').addObject(newPost);
      newPost.save().then(function() {
        return category.save();
      });
      this.transitionTo('category', params.category);
    },
    destroyCategory(category) {
      var post_deletions = category.get('posts').map(function(post) {
        return post.destroyRecord();
      });
      Ember.RSVP.all(post_deletions).then(function() {
        return category.destroyRecord();
      });
      this.transitionTo('index');
    }
  }
});
