import Ember from 'ember';

export function adminPassword(params/*, hash*/) {
  var user = params[0];

  if(user.get('user.username') === "admin" && user.get('user.password') === "password") {
    return Ember.String.htmlSafe(alert('hey admin, ya cutie'));
  }
}

export default Ember.Helper.helper(adminPassword);
