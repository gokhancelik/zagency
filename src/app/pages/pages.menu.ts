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
            order: 1
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
        path: 'tourTypes',
        data: {
          menu: {
            title: 'Tour Types',
            icon: 'fa fa-map-signs',
            selected: false,
            expanded: false,
            order: 1
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
            order: 1
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
        path: 'specTypes',
        data: {
          menu: {
            title: 'Spec Types',
            icon: 'fa fa-wrench',
            selected: false,
            expanded: false,
            order: 1
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
            order: 1
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
            order: 1
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
            order: 1
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
            order: 1
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
        path: 'companies',
        data: {
          menu: {
            title: 'Companies',
            icon: 'fa fa-building',
            selected: false,
            expanded: false,
            order: 1
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
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 2
          }
        }
      },
      {
        path: 'editors',
        data: {
          menu: {
            title: 'Editors',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'ckeditor',
            data: {
              menu: {
                title: 'CKEditor',
              }
            }
          }
        ]
      },
      //{
      //  path: 'components',
      //  data: {
      //    menu: {
      //      title: 'Components',
      //      icon: 'ion-gear-a',
      //      selected: false,
      //      expanded: false,
      //      order: 250,
      //    }
      //  },
      //  children: [
      //    {
      //      path: 'treeview',
      //      data: {
      //        menu: {
      //          title: 'Tree View',
      //        }
      //      }
      //    }
      //  ]
      //},
      {
        path: 'charts',
        data: {
          menu: {
            title: 'Charts',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'chartist-js',
            data: {
              menu: {
                title: 'Chartist.Js',
              }
            }
          }
        ]
      },
      {
        path: 'forms',
        data: {
          menu: {
            title: 'Form Elements',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: 'Form Inputs',
              }
            }
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'Form Layouts',
              }
            }
          }
        ]
      },
      {
        path: 'tables',
        data: {
          menu: {
            title: 'Tables',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'basictables',
            data: {
              menu: {
                title: 'Basic Tables',
              }
            }
          },
          {
            path: 'smarttables',
            data: {
              menu: {
                title: 'Smart Tables',
              }
            }
          }
        ]
      },
      {
        path: 'maps',
        data: {
          menu: {
            title: 'Maps',
            icon: 'ion-ios-location-outline',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'googlemaps',
            data: {
              menu: {
                title: 'Google Maps',
              }
            }
          },
          {
            path: 'leafletmaps',
            data: {
              menu: {
                title: 'Leaflet Maps',
              }
            }
          },
          {
            path: 'bubblemaps',
            data: {
              menu: {
                title: 'Bubble Maps',
              }
            }
          },
          {
            path: 'linemaps',
            data: {
              menu: {
                title: 'Line Maps',
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'Login'
              }
            }
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'Register'
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Menu Level 1',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'Menu Level 1.1',
                url: '#'
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: 'Menu Level 1.2',
                url: '#'
              }
            },
            children: [
              {
                path: '',
                data: {
                  menu: {
                    title: 'Menu Level 1.2.1',
                    url: '#'
                  }
                }
              }
            ]
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'External Link',
            url: 'http://akveo.com',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank'
          }
        }
      }
    ]
  }
];
