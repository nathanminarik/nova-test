(function() {
  'use strict';

  angular
    .module('understandingNode')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
