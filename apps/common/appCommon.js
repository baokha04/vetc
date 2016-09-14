(function () {
    'use strict';
    angular.module('vetc.common', [])
        .factory('appCommon', ['$q', function ($q) {
            var appCommon = function () {
            }

            appCommon.prototype.spPageContextInfo = _spPageContextInfo;

            appCommon.prototype.listInstance = {
                Feedback: 'Feedback',
                FeedbackTemplate: 'Feedback Templates',
                FeedbackOption: 'Feedback Options',
                FeedbackQuestion: 'Feedback Questions',
            }

            appCommon.prototype.getListIdByListTitle = function (listTitle) {
                var guidId = '';                
                if (listTitle == 'Feedback') guidId = 'C48C7E7F-FF7A-4B51-A126-84A9182DF390';
                if (listTitle == 'Feedback Templates') guidId = '8D67EF80-16F9-466F-879F-83C5FBADBAA5';
                if (listTitle == 'Feedback Options') guidId = 'C1F6F536-486B-40BC-992E-189D8535E240';
                if (listTitle == 'Feedback Questions') guidId = '2CB59367-CE51-49B4-8CD4-80EE74EB0A2D';                
                return guidId;
            }
            
            return new appCommon;
        }])
})();
