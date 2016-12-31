export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'tours',
        data: {
          menu: {
            title: 'Tours',
            icon: 'fa fa-bus',
            selected: false,
            expanded: false,
            order: 10
          }
        },
        children: [
          {
            path: 'list',
            data: {
              menu: {
                title: 'List',
              }
            }
          }
        ]
      },
      {
        path: 'products',
        data: {
          menu: {
            title: 'Products',
            icon: 'fa fa-cubes',
            selected: false,
            expanded: false,
            order: 20
          }
        },
        children: [
          {
            path: 'list',
            data: {
              menu: {
                title: 'List',
              }
            }
          }
        ]
      },
      {
        path: 'tourCategories',
        data: {
          menu: {
            title: 'Tour Category',
            icon: 'fa fa-map-signs',
            selected: false,
            expanded: false,
            order: 30
          }
        }
      },
      {
        path: 'productTypeCategories',
        data: {
          menu: {
            title: 'Prod. Type Catgs',
            icon: 'fa fa-map-wrench',
            selected: false,
            expanded: false,
            order: 40
          }
        },
        children: [
          {
            path: 'list',
            data: {
              menu: {
                title: 'List',
              }
            }
          }
        ]
      },
      {
        path: 'priceTypes',
        data: {
          menu: {
            title: 'Price Types',
            icon: 'fa fa-try',
            selected: false,
            expanded: false,
            order: 50
          }
        }
      },
      {
        path: 'specTypes',
        data: {
          menu: {
            title: 'Spec Types',
            icon: 'fa fa-wrench',
            selected: false,
            expanded: false,
            order: 60
          }
        },
        children: [
          {
            path: 'list',
            data: {
              menu: {
                title: 'List',
              }
            }
          }
        ]
      },
      {
        path: 'photoLocationTypes',
        data: {
          menu: {
            title: 'Photo Locations',
            icon: 'fa fa-img',
            selected: false,
            expanded: false,
            order: 70
          }
        },
        children: [
          {
            path: 'list',
            data: {
              menu: {
                title: 'List',
              }
            }
          }
        ]
      },
      {
        path: 'companySpecs',
        data: {
          menu: {
            title: 'Company Specs',
            icon: 'fa fa-info',
            selected: false,
            expanded: false,
            order: 80
          }
        },
        children: [
          {
            path: 'list',
            data: {
              menu: {
                title: 'List',
              }
            }
          }
        ]
      },
      {
        path: 'tourScheduleSpecs',
        data: {
          menu: {
            title: 'Tour Schedule Specs',
            icon: 'fa fa-info',
            selected: false,
            expanded: false,
            order: 90
          }
        },
        children: [
          {
            path: 'list',
            data: {
              menu: {
                title: 'List',
              }
            }
          }
        ]
      },
      {
        path: 'currencyTypes',
        data: {
          menu: {
            title: 'Currency Types',
            icon: 'fa fa-try',
            selected: false,
            expanded: false,
            order: 100
          }
        }
      },
      {
        path: 'companies',
        data: {
          menu: {
            title: 'Companies',
            icon: 'fa fa-building',
            selected: false,
            expanded: false,
            order: 110
          }
        },
        children: [
          {
            path: 'list',
            data: {
              menu: {
                title: 'List',
              }
            }
          }
        ]
      },
      {
        path: 'users',
        data: {
          menu: {
            title: 'Users',
            icon: 'fa fa-user',
            selected: false,
            expanded: false,
            order: 110
          }
        }
      },
      {
        path: 'roles',
        data: {
          menu: {
            title: 'Roles',
            icon: 'fa fa-users',
            selected: false,
            expanded: false,
            order: 110
          }
        }
      }
    ]
  }
];
