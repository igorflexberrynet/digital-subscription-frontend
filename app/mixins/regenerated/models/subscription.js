import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  startTime: DS.attr('date', { defaultValue() { return new Date(); } }),
  endTime: DS.attr('date'),
  serviceCount: DS.attr('number', { defaultValue: 0 }),
  service: DS.belongsTo('service', { inverse: null, async: false }),
  client: DS.belongsTo('application-user', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      startTime: { datetime: true },
      serviceCount: { presence: true },
      service: { presence: true },
      client: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('SubscriptionE', 'subscription', {
    startTime: Projection.attr('Дата начала', { index: 0 }),
    endTime: Projection.attr('Дата окончания', { index: 1 }),
    serviceCount: Projection.attr('Количество', { index: 2 }),
    client: Projection.belongsTo('application-user', 'Клиент', {
      lastName: Projection.attr('Фамилия', { index: 4 }),
      firstName: Projection.attr('Имя', { index: 5 }),
      middleName: Projection.attr('Отчество', { index: 6 }),
      birthdate: Projection.attr('Дата рождения', { index: 7 }),
      email: Projection.attr('', { index: 8, hidden: true })
    }, { index: 3, displayMemberPath: 'email' }),
    service: Projection.belongsTo('service', 'Услуга', {
      name: Projection.attr('Name', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'name' })
  });
  modelClass.defineProjection('SubscriptionL', 'subscription', {
    client: Projection.belongsTo('application-user', 'Фамилия клиента', {
      lastName: Projection.attr('Фамилия клиента', { index: 0 }),
      firstName: Projection.attr('Имя клиента', { index: 1 }),
      middleName: Projection.attr('Отчество клиента', { index: 2 }),
      birthdate: Projection.attr('ДР клиента', { index: 3 }),
      email: Projection.attr('Email клиента', { index: 4 })
    }, { index: -1, hidden: true }),
    startTime: Projection.attr('С', { index: 5 }),
    endTime: Projection.attr('По', { index: 6 }),
    serviceCount: Projection.attr('Кол-во', { index: 7 }),
    service: Projection.belongsTo('service', 'Услуга', {
      name: Projection.attr('Услуга', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
