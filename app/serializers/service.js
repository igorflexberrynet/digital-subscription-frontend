import { Serializer as ServiceSerializer } from
  '../mixins/regenerated/serializers/service';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ServiceSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
