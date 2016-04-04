// Params is not speficic to post???
//  Where is the post model being past in?

import Ember from 'ember';

export function postCost(params) {
  var postPrice = params[0].get('cost');
  // console.log(params[0]);
  if (postPrice >= 150){
    return '$$$$';
  } else if (postPrice >= 100){
    return '$$$';
  } else if (postPrice >= 50){
    return '$$';
  } else if (postPrice <= 49){
    return '$';
  }
}

export default Ember.Helper.helper(postCost);
