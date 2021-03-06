(function() {
  'use strict';

  angular.module('iLayers')
    .filter('size', ['$sce', function($sce) {
      var bytesToSize = function(bytes) {
         var sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB'];
         if (bytes === 1) { return '1 <span>Byte</span>'; }
         if (bytes === 0) { return '0 <span>Bytes</span>'; }
         var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1000)));
         return Math.round(bytes / Math.pow(1000, i), 2) + ' <span>' + sizes[i] + '</span>';
      };

      return function(input) {
        return $sce.trustAsHtml(bytesToSize(input));
      };
    }]);
})();
