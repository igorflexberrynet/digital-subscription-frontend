import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  employmentDate: DS.attr('date', { defaultValue() { return new Date(); } }),
  dismissalDate: DS.attr('date'),
  position: DS.attr('string'),
  isAdmin: DS.attr('boolean', { defaultValue: false }),
  employee: DS.belongsTo('application-user', { inverse: null, async: false }),
  organization: DS.belongsTo('organization', { inverse: 'employees', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      isAdmin: { presence: true },
      employee: { presence: true },
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
  modelClass.defineProjection('EmployeeInOrganizationE', 'employee-in-organization', {
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
  });
};
