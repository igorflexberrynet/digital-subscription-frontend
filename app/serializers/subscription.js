import { Serializer as SubscriptionSerializer } from
  '../mixins/regenerated/serializers/subscription';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(SubscriptionSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
