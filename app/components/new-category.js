import Ember from 'ember';

export default Ember.Component.extend({
   addNewCategory: false,
   actions: {
     categoryFormShow() {
       this.set('addNewCategory', true);
     },
     newCategoryMethod() {
       var params = {
         name: this.get('name'),
         country: this.get('country')
       };
       this.set('addNewcategory', false);
       this.set('name', '');
       this.set('country', '');
       this.sendAction('categoryToSave', params);
     }
   }
 });
