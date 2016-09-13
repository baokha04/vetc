(function () {
    'use strict';
    angular.module('FeedbackApp.Common', [])
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
                var currentCultureName = _spPageContextInfo.currentCultureName.toLowerCase();

                // English
                if (currentCultureName == 'en-us') {
                    if (listTitle == 'Feedback') guidId = 'C48C7E7F-FF7A-4B51-A126-84A9182DF390';
                    if (listTitle == 'Feedback Templates') guidId = '8D67EF80-16F9-466F-879F-83C5FBADBAA5';
                    if (listTitle == 'Feedback Options') guidId = 'C1F6F536-486B-40BC-992E-189D8535E240';
                    if (listTitle == 'Feedback Questions') guidId = '2CB59367-CE51-49B4-8CD4-80EE74EB0A2D';
                }

                // France
                if (currentCultureName == 'fr-fr') {
                    if (listTitle == 'Feedback') guidId = '59F5D4F3-B5DA-448E-8178-FB02894BC39B';
                    if (listTitle == 'Feedback Templates') guidId = '1DD6A7D3-B57A-4362-A3C3-30F2E47A9569';
                    if (listTitle == 'Feedback Options') guidId = 'C731D542-62D9-4B94-B7DF-B0E9DB4EC5C8';
                    if (listTitle == 'Feedback Questions') guidId = '1C8810C4-ECD0-4AAE-BA67-6B211596036E';
                }

                // China
                if (currentCultureName == 'zh-cn') {
                    if (listTitle == 'Feedback') guidId = '766D8956-65DB-458E-9795-D0248B480B33';
                    if (listTitle == 'Feedback Templates') guidId = '333D128F-9871-4ACD-A704-B7BC5125988E';
                    if (listTitle == 'Feedback Options') guidId = 'F0E157DC-3827-4816-BB7E-88CD7EB9F562';
                    if (listTitle == 'Feedback Questions') guidId = '4ED367B3-20F7-44A6-8E53-7A6C840D882F';
                }

                return guidId;
            }

            appCommon.prototype.templateUrl = {
                feedbackAdmin: _spPageContextInfo.siteServerRelativeUrl + '/SiteAssets/Scripts/modules/feedback/views/feedbackAdmin.html',
                feedbackArchive: _spPageContextInfo.siteServerRelativeUrl + '/SiteAssets/Scripts/modules/feedback/views/feedbackArchive.html',
                mainSlider: _spPageContextInfo.siteServerRelativeUrl + '/SiteAssets/Scripts/modules/feedback/views/main-slider.html',
                slideFeedback: _spPageContextInfo.siteServerRelativeUrl + '/SiteAssets/Scripts/modules/feedback/views/slide-feedback.html',
                slideSurvey: _spPageContextInfo.siteServerRelativeUrl + '/SiteAssets/Scripts/modules/feedback/views/slide-survey.html',
                slideSupport: _spPageContextInfo.siteServerRelativeUrl + '/SiteAssets/Scripts/modules/feedback/views/slide-support.html',
            }

            return new appCommon;
        }])
})();
