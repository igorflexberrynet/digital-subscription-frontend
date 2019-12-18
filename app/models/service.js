import { Model as ServiceMixin, defineProjections } from
  '../mixins/regenerated/models/service';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ServiceMixin, {

});

defineProjections(Model);
export default Model;
