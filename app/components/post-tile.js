//only route handlers may create, delete or update objects in our data store
import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
 actions: {
   delete(post) {
     if(confirm('Are you sure you want to delete this post forever? ever ever!')) {
       this.sendAction('destroyPost', post);
     }
   },
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    update(post, params) {
      this.sendAction('update', post, params);
    }
  }
});
