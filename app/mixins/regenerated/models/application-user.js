import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  middleName: DS.attr('string'),
  lastName: DS.attr('string'),
  birthdate: DS.attr('date'),
  isAdmin: DS.attr('boolean', { defaultValue: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      email: { presence: true },
      firstName: { presence: true },
      lastName: { presence: true },
      isAdmin: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ApplicationUserE', 'application-user', {
    email: Projection.attr('Email', { index: 0 }),
    lastName: Projection.attr('Фамилия', { index: 1 }),
    firstName: Projection.attr('Имя', { index: 2 }),
    middleName: Projection.attr('Отчество', { index: 3 }),
    birthdate: Projection.attr('Дата рождения', { index: 4 })
  });
  modelClass.defineProjection('ApplicationUserL', 'application-user', {
    email: Projection.attr('Email', { index: 0 }),
    lastName: Projection.attr('Фамилия', { index: 1 }),
    firstName: Projection.attr('Имя', { index: 2 }),
    middleName: Projection.attr('Отчество', { index: 3 }),
    birthdate: Projection.attr('Дата рождения', { index: 4 })
  });
};
