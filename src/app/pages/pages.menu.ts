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
        path: 'imageSizes',
        data: {
          menu: {
            title: 'Image Sizes',
            icon: 'fa fa-picture-o',
            selected: false,
            expanded: false,
            order: 70
          }
        }
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
            order: 120
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
        path: 'publishingTours',
        data: {
          menu: {
            title: 'publishingTours',
            icon: 'fa fa-building',
            selected: false,
            expanded: false,
            order: 120
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
        path: 'b2bs',
        data: {
          menu: {
            title: 'B2B',
            icon: 'fa fa-product',
            selected: false,
            expanded: false,
            order: 130
          }
        }
      },
      {
        path: 'users',
        data: {
          menu: {
            title: 'Users',
            icon: 'fa fa-user',
            selected: false,
            expanded: false,
            order: 140
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
            order: 150
          }
        }
      }
    ]
  }
];
