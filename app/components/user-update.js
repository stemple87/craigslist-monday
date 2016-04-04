import Ember from 'ember';

export default Ember.Component.extend({
  updateUserForm: false,
  actions: {
    updateUserForm() {
      this.set('updateUserForm', true);
    },
    update(user) {
      var params = {
        user: this.get('user'),
        password: this.get('password')
      };
      this.set('updateUserForm', false);
      this.sendAction('update', user, params);
    }
  }
});
