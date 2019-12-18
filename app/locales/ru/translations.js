import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import NewPlatformDigitalSubscriptionApplicationUserLForm from './forms/new-platform-digital-subscription-application-user-l';
import NewPlatformDigitalSubscriptionOrganizationLForm from './forms/new-platform-digital-subscription-organization-l';
import NewPlatformDigitalSubscriptionServiceLForm from './forms/new-platform-digital-subscription-service-l';
import NewPlatformDigitalSubscriptionSubscriptionLForm from './forms/new-platform-digital-subscription-subscription-l';
import NewPlatformDigitalSubscriptionVisitLForm from './forms/new-platform-digital-subscription-visit-l';
import NewPlatformDigitalSubscriptionApplicationUserEForm from './forms/new-platform-digital-subscription-application-user-e';
import NewPlatformDigitalSubscriptionOrganizationEForm from './forms/new-platform-digital-subscription-organization-e';
import NewPlatformDigitalSubscriptionSubscriptionEForm from './forms/new-platform-digital-subscription-subscription-e';
import NewPlatformDigitalSubscriptionVisitEForm from './forms/new-platform-digital-subscription-visit-e';
import ApplicationUserModel from './models/application-user';
import EmployeeInOrganizationModel from './models/employee-in-organization';
import OrganizationModel from './models/organization';
import ServiceModel from './models/service';
import SubscriptionModel from './models/subscription';
import VisitModel from './models/visit';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations);

Ember.$.extend(true, translations, {
  models: {
    'application-user': ApplicationUserModel,
    'employee-in-organization': EmployeeInOrganizationModel,
    'organization': OrganizationModel,
    'service': ServiceModel,
    'subscription': SubscriptionModel,
    'visit': VisitModel,
  },

  'application-name': 'Электронный абонемент',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Электронный абонемент',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Электронный абонемент',
          title: 'Электронный абонемент'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'рабочий-стол': {
          caption: 'Рабочий стол',
          title: 'Рабочий стол',
          'new-platform-digital-subscription-subscription-l': {
            caption: 'Абонементы',
            title: ''
          },
          'new-platform-digital-subscription-visit-l': {
            caption: 'Посещения',
            title: ''
          },
          'new-platform-digital-subscription-application-user-l': {
            caption: 'Пользователи',
            title: ''
          },
          'new-platform-digital-subscription-organization-l': {
            caption: 'Организации',
            title: ''
          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'new-platform-digital-subscription-application-user-l': NewPlatformDigitalSubscriptionApplicationUserLForm,
    'new-platform-digital-subscription-organization-l': NewPlatformDigitalSubscriptionOrganizationLForm,
    'new-platform-digital-subscription-service-l': NewPlatformDigitalSubscriptionServiceLForm,
    'new-platform-digital-subscription-subscription-l': NewPlatformDigitalSubscriptionSubscriptionLForm,
    'new-platform-digital-subscription-visit-l': NewPlatformDigitalSubscriptionVisitLForm,
    'new-platform-digital-subscription-application-user-e': NewPlatformDigitalSubscriptionApplicationUserEForm,
    'new-platform-digital-subscription-organization-e': NewPlatformDigitalSubscriptionOrganizationEForm,
    'new-platform-digital-subscription-subscription-e': NewPlatformDigitalSubscriptionSubscriptionEForm,
    'new-platform-digital-subscription-visit-e': NewPlatformDigitalSubscriptionVisitEForm,
  },

});

export default translations;
