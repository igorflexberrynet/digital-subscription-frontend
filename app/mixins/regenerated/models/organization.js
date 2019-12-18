import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  address: DS.attr('string'),
  service: DS.hasMany('service', { inverse: 'organization', async: false }),
  employees: DS.hasMany('employee-in-organization', { inverse: 'organization', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      name: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('OrganizationE', 'organization', {
    name: Projection.attr('Название', { index: 0 }),
    address: Projection.attr('Адрес', { index: 1 }),
    employees: Projection.hasMany('employee-in-organization', 'Сотрудники', {
      employmentDate: Projection.attr('Дата приёма на работу', { index: 0 }),
      dismissalDate: Projection.attr('Дата увольнения', { index: 1 }),
      position: Projection.attr('Должность', { index: 2 }),
      isAdmin: Projection.attr('Администратор', { index: 3 }),
      employee: Projection.belongsTo('application-user', 'Email пользователя', {
        email: Projection.attr('Email', { index: 5, hidden: true }),
        lastName: Projection.attr('Фамилия', { index: 6 }),
        firstName: Projection.attr('Имя', { index: 7 }),
        middleName: Projection.attr('Отчество', { index: 8 })
      }, { index: 4, displayMemberPath: 'email' })
    }),
    service: Projection.hasMany('service', 'Услуги', {
      name: Projection.attr('Название', { index: 0 }),
      price: Projection.attr('Стоимость', { index: 1 }),
      pricePeriod: Projection.attr('Период', { index: 2 })
    })
  });
  modelClass.defineProjection('OrganizationL', 'organization', {
    name: Projection.attr('Название', { index: 0 }),
    address: Projection.attr('Адрес', { index: 1 })
  });
};
