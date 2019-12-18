import { Model as OrganizationMixin, defineProjections } from
  '../mixins/regenerated/models/organization';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, OrganizationMixin, {

});

defineProjections(Model);
export default Model;
