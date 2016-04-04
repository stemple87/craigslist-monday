//notice the findRecord(2 args) instead of findAll()

import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('post');
    },
    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    }
  }
});
