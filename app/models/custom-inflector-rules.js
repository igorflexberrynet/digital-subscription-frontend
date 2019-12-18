import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('organization', 'Organizations');
inflector.irregular('subscription', 'Subscriptions');
inflector.irregular('service', 'Services');
inflector.irregular('visit', 'Visits');
inflector.irregular('user', 'Users');

export default {};
