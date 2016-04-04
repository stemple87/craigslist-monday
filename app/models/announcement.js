import DS from 'ember-data';

export default DS.Model.extend({
  message: DS.attr(),
  priority: DS.attr(),
  type: DS.attr()
});
