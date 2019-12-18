import { Serializer as OrganizationSerializer } from
  '../mixins/regenerated/serializers/organization';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(OrganizationSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
