import Ember from 'ember';

  var announcements = [{
    "message" : "Big News!",
    "priority" : "Low",
    "type" : "Weather"
  }, {
    "message" : "This just in!",
    "priority" : "High",
    "type" : "Politics"
  }, {
    "message": "Michael Jordan to return to Chicago Bulls 2017",
    "priority": "Very Low",
    "type": "Sports"
  }];

export default Ember.Route.extend({
  model() { //model hook
    return announcements;
  }
});
