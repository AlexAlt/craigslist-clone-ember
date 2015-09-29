import Ember from 'ember';

export function postDate(params) {
  var date = params[0];
  return moment(date).format('MMM D');
}

export default Ember.Helper.helper(postDate);
