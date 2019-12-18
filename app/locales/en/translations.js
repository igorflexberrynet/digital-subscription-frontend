import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'рабочий-стол': {
          caption: 'рабочий-стол',
          title: 'рабочий-стол',
          'new-platform-digital-subscription-subscription-l': {
            caption: 'new-platform-digital-subscription-subscription-l',
            title: 'new-platform-digital-subscription-subscription-l'
          },
          'new-platform-digital-subscription-visit-l': {
            caption: 'new-platform-digital-subscription-visit-l',
            title: 'new-platform-digital-subscription-visit-l'
          },
          'new-platform-digital-subscription-application-user-l': {
            caption: 'new-platform-digital-subscription-application-user-l',
            title: 'new-platform-digital-subscription-application-user-l'
          },
          'new-platform-digital-subscription-organization-l': {
            caption: 'new-platform-digital-subscription-organization-l',
            title: 'new-platform-digital-subscription-organization-l'
          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
