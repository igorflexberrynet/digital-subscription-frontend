import { Model as VisitMixin, defineProjections } from
  '../mixins/regenerated/models/visit';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, VisitMixin, {

});

defineProjections(Model);
export default Model;
