export default {
  projections: {
    VisitE: {
      date: {
        __caption__: 'Дата'
      },
      subscription: {
        __caption__: 'Услуга',
        startTime: {
          __caption__: 'С'
        },
        endTime: {
          __caption__: 'По'
        },
        service: {
          __caption__: '',
          name: {
            __caption__: ''
          },
          organization: {
            __caption__: '',
            name: {
              __caption__: 'Организация'
            }
          }
        }
      },
      client: {
        __caption__: 'Email',
        email: {
          __caption__: 'Email'
        },
        lastName: {
          __caption__: 'Фамилия'
        },
        firstName: {
          __caption__: 'Имя'
        },
        middleName: {
          __caption__: 'Отчество'
        }
      }
    },
    VisitL: {
      date: {
        __caption__: 'Дата'
      },
      subscription: {
        __caption__: 'Услуга',
        service: {
          __caption__: '',
          name: {
            __caption__: 'Услуга'
          }
        }
      },
      client: {
        __caption__: 'Email',
        email: {
          __caption__: 'Email'
        },
        lastName: {
          __caption__: 'Фамилия'
        },
        firstName: {
          __caption__: 'Имя'
        },
        middleName: {
          __caption__: 'Отчество'
        },
        birthdate: {
          __caption__: 'Дата рождения'
        }
      }
    }
  }
};
