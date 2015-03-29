define(function (require) {
    'use strict';

    var $ = require('jquery'),
        React = require('react'),
        HomePage = require('components/HomePage.react');

    return {
      run: function () {
        $(document).ready(function () {
          var HomePageComponent = React.createFactory(HomePage);
          React.render(HomePageComponent(), document.getElementById('application'));
        });
      }
    }

  });
