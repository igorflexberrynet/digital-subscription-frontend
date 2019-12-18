import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('new-platform-digital-subscription-application-user-l');
  this.route('new-platform-digital-subscription-application-user-e',
  { path: 'new-platform-digital-subscription-application-user-e/:id' });
  this.route('new-platform-digital-subscription-application-user-e.new',
  { path: 'new-platform-digital-subscription-application-user-e/new' });
  this.route('new-platform-digital-subscription-organization-l');
  this.route('new-platform-digital-subscription-organization-e',
  { path: 'new-platform-digital-subscription-organization-e/:id' });
  this.route('new-platform-digital-subscription-organization-e.new',
  { path: 'new-platform-digital-subscription-organization-e/new' });
  this.route('new-platform-digital-subscription-service-l');
  this.route('null',
  { path: 'null/:id' });
  this.route('null.new',
  { path: 'null/new' });
  this.route('new-platform-digital-subscription-subscription-l');
  this.route('new-platform-digital-subscription-subscription-e',
  { path: 'new-platform-digital-subscription-subscription-e/:id' });
  this.route('new-platform-digital-subscription-subscription-e.new',
  { path: 'new-platform-digital-subscription-subscription-e/new' });
  this.route('new-platform-digital-subscription-visit-l');
  this.route('new-platform-digital-subscription-visit-e',
  { path: 'new-platform-digital-subscription-visit-e/:id' });
  this.route('new-platform-digital-subscription-visit-e.new',
  { path: 'new-platform-digital-subscription-visit-e/new' });
});

export default Router;
