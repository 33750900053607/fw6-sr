import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';

// Import Routes
import routes from './routes.js';

var app = new Framework7({
  root: '#app', // App root element

  name: 'Sleep Routine MU', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
      ]
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,

  // Register service worker
  serviceWorker: {
    path: '/service-worker.js',
  },
  // picker property
  picker: {
    rotateEffect: true,
    openIn: 'popover',
  }
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});

// Picker With Two Values and 3D-Rotate Effect
var today = new Date();
var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe',
    rotateEffect: true,
    value: [
      today.getHours(),
      today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()
    ],
    formatValue: function (values) {
      return values[0] + ':' + values[1];
    },
    cols: [
    // Hours
    {
      values: (function () {
        var arr = [];
        for (var i = 0; i <= 28; i++) { arr.push(i); }
          return arr;
      })(),
    },
      // Divider
    {
      divider: true,
      content: ':'
    },
    // Minutes
    {
      values: (function () {
        var arr = [];
        for (var i = 0; i <= 59; i++) { arr.push(i < 10 ? '0' + i : i); }
          return arr;
      })(),
    }
    ]
});

var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe2',
    rotateEffect: true,
    value: [
      today.getHours(),
      today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()
    ],
    formatValue: function (values) {
      return values[0] + ':' + values[1];
    },
    cols: [
    // Hours
    {
      values: (function () {
        var arr = [];
        for (var i = 0; i <= 28; i++) { arr.push(i); }
          return arr;
      })(),
    },
      // Divider
    {
      divider: true,
      content: ':'
    },
    // Minutes
    {
      values: (function () {
        var arr = [];
        for (var i = 0; i <= 59; i++) { arr.push(i < 10 ? '0' + i : i); }
          return arr;
      })(),
    }
    ]
});

var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe3',
    rotateEffect: true,
    value: [
      today.getHours(),
      today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()
    ],
    formatValue: function (values) {
      return values[0] + ':' + values[1];
    },
    cols: [
    // Hours
    {
      values: (function () {
        var arr = [];
        for (var i = 0; i <= 28; i++) { arr.push(i); }
          return arr;
      })(),
    },
      // Divider
    {
      divider: true,
      content: ':'
    },
    // Minutes
    {
      values: (function () {
        var arr = [];
        for (var i = 0; i <= 59; i++) { arr.push(i < 10 ? '0' + i : i); }
          return arr;
      })(),
    }
    ]
});

var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe4',
    rotateEffect: true,
    value: [
      today.getHours(),
      today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()
    ],
    formatValue: function (values) {
      return values[0] + ':' + values[1];
    },
    cols: [
    // Hours
    {
      values: (function () {
        var arr = [];
        for (var i = 0; i <= 28; i++) { arr.push(i); }
          return arr;
      })(),
    },
    // Divider
    {
      divider: true,
      content: ':'
    },
    // Minutes
    {
      values: (function () {
        var arr = [];
        for (var i = 0; i <= 59; i++) { arr.push(i < 10 ? '0' + i : i); }
          return arr;
      })(),
    }
    ]
});

// var today = new Date();
var pickerInline = app.picker.create({
  containerEl: '#demo-picker-date-container',
  inputEl: '#demo-picker-date',
  toolbar: false,
  rotateEffect: true,
  value: [
    today.getMonth(),
    today.getDate(),
    today.getFullYear(),
    today.getHours(),
    today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()
  ],
  formatValue: function (values, displayValues) {
    return displayValues[0] + ' ' + values[1] + ', ' + values[2] + ' ' + values[3] + ':' + values[4];
  },
  cols: [
    // Months
    {
      values: ('0 1 2 3 4 5 6 7 8 9 10 11').split(' '),
      displayValues: ('January February March April May June July August September October November December').split(' '),
      textAlign: 'left'
    },
    // Days
    {
      values: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    },
    // Years
    {
      values: (function () {
        var arr = [];
        for (var i = 1950; i <= 2030; i++) { arr.push(i); }
          return arr;
      })(),
    },
    // Space divider
    {
      divider: true,
      content: '&nbsp;&nbsp;'
    },
    // Hours
    {
      values: (function () {
        var arr = [];
        for (var i = 0; i <= 23; i++) { arr.push(i); }
          return arr;
      })(),
    },
    // Divider
    {
      divider: true,
      content: ':'
    },
    // Minutes
    {
      values: (function () {
        var arr = [];
        for (var i = 0; i <= 59; i++) { arr.push(i < 10 ? '0' + i : i); }
          return arr;
      })(),
    }
  ],
  on: {
    change: function (picker, values, displayValues) {
      var daysInMonth = new Date(picker.value[2], picker.value[0]*1 + 1, 0).getDate();
      if (values[1] > daysInMonth) {
        picker.cols[1].setValue(daysInMonth);
      }
    },
  }
});