import { Model as EmployeeInOrganizationMixin, defineProjections } from
  '../mixins/regenerated/models/employee-in-organization';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, EmployeeInOrganizationMixin, {

});

defineProjections(Model);
export default Model;
