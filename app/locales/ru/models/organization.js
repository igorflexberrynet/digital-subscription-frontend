export default {
  projections: {
    OrganizationE: {
      name: {
        __caption__: 'Название'
      },
      address: {
        __caption__: 'Адрес'
      },
      employees: {
        __caption__: 'Сотрудники',
        employmentDate: {
          __caption__: 'Дата приёма на работу'
        },
        dismissalDate: {
          __caption__: 'Дата увольнения'
        },
        position: {
          __caption__: 'Должность'
        },
        isAdmin: {
          __caption__: 'Администратор'
        },
        employee: {
          __caption__: 'Email пользователя',
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
      service: {
        __caption__: 'Услуги',
        name: {
          __caption__: 'Название'
        },
        price: {
          __caption__: 'Стоимость'
        },
        pricePeriod: {
          __caption__: 'Период'
        }
      }
    },
    OrganizationL: {
      name: {
        __caption__: 'Название'
      },
      address: {
        __caption__: 'Адрес'
      }
    }
  }
};
