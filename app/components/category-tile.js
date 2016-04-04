import Ember from 'ember';

export default Ember.Component.extend({
//a new computed property
  fullLocation: Ember.computed('category.name', 'category.country', function() {
    return this.get('category.name') + ', ' + this.get('category.country');
  }),

  sortBy: ['cost:asc'],
  sortedPosts: Ember.computed.sort('category.posts', 'sortBy'),
  
  actions: {
    destroyCategory(category) {
      if(confirm('Are you sure you want to delete this category forever? ever ever!')) {
        this.sendAction('destroyCategory', category);
      }
    }
  }
});
