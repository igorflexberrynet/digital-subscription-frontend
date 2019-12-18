import { Serializer as EmployeeInOrganizationSerializer } from
  '../mixins/regenerated/serializers/employee-in-organization';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(EmployeeInOrganizationSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
