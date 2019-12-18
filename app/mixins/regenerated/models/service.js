import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
import PricePeriodEnum from '../../../enums/new-platform-digital-subscription-price-period';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  price: DS.attr('number', { defaultValue: 0 }),
  pricePeriod: DS.attr('new-platform-digital-subscription-price-period', { defaultValue: PricePeriodEnum.Month }),
  organization: DS.belongsTo('organization', { inverse: 'service', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      name: { presence: true },
      price: { presence: true },
      pricePeriod: { presence: true },
      organization: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ServiceE', 'service', {
    name: Projection.attr('Название', { index: 0 }),
    price: Projection.attr('Стоимость', { index: 1 }),
    pricePeriod: Projection.attr('Период', { index: 2 })
  });
  modelClass.defineProjection('ServiceL', 'service', {
    name: Projection.attr('Название', { index: 0 }),
    price: Projection.attr('Стоимость', { index: 1 }),
    pricePeriod: Projection.attr('Период', { index: 2 }),
    organization: Projection.belongsTo('organization', '', {

    }, { index: 3, hidden: true })
  });
};
