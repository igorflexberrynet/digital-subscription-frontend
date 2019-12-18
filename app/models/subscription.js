import { Model as SubscriptionMixin, defineProjections } from
  '../mixins/regenerated/models/subscription';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, SubscriptionMixin, {

});

defineProjections(Model);
export default Model;
