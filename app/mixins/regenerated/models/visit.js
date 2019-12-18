import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  date: DS.attr('date', { defaultValue() { return new Date(); } }),
  subscription: DS.belongsTo('subscription', { inverse: null, async: false }),
  client: DS.belongsTo('application-user', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      date: { datetime: true },
      subscription: { presence: true },
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
  modelClass.defineProjection('VisitE', 'visit', {
    date: Projection.attr('Дата', { index: 0 }),
    subscription: Projection.belongsTo('subscription', 'Услуга', {
      startTime: Projection.attr('С', { index: 2 }),
      endTime: Projection.attr('По', { index: 3 }),
      service: Projection.belongsTo('service', '', {
        name: Projection.attr('', { index: 4, hidden: true }),
        organization: Projection.belongsTo('organization', '', {
          name: Projection.attr('Организация', { index: 5 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: 1, displayMemberPath: 'service.name' }),
    client: Projection.belongsTo('application-user', 'Email', {
      email: Projection.attr('Email', { index: 7, hidden: true }),
      lastName: Projection.attr('Фамилия', { index: 8 }),
      firstName: Projection.attr('Имя', { index: 9 }),
      middleName: Projection.attr('Отчество', { index: 10 })
    }, { index: 6, displayMemberPath: 'email' })
  });
  modelClass.defineProjection('VisitL', 'visit', {
    date: Projection.attr('Дата', { index: 0 }),
    subscription: Projection.belongsTo('subscription', 'Услуга', {
      service: Projection.belongsTo('service', '', {
        name: Projection.attr('Услуга', { index: 1 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    client: Projection.belongsTo('application-user', 'Email', {
      email: Projection.attr('Email', { index: 2 }),
      lastName: Projection.attr('Фамилия', { index: 3 }),
      firstName: Projection.attr('Имя', { index: 4 }),
      middleName: Projection.attr('Отчество', { index: 5 }),
      birthdate: Projection.attr('Дата рождения', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
