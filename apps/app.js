/* ------------------------------ Feedback Common --------------------------------------------------*/
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

/* ------------------------------ Feedback Directives ---------------------------------------------*/
(function () {
    'use strict';
    angular.module('FeedbackApp.Directives', ['FeedbackApp.Common'])
        .directive('ngFeedbackAdmin', ['appCommon', function (appCommon) {            
            return {
                restrict: 'EA',
                replace: true,
                templateUrl: appCommon.templateUrl.feedbackAdmin,
                controller: 'feedbackAdminController',
                link: function (scope, element, attrs, ngCtrl) {

                }
            }
        }])
        .directive('ngFeedbackArchive', ['appCommon', function (appCommon) {            
            return {
                restrict: 'EA',
                replace: true,
                templateUrl: appCommon.templateUrl.feedbackArchive,
                controller: 'feedbackArchiveController',
                link: function (scope, element, attrs, ngCtrl) {

                }
            }
        }])
        .directive('ngMainSlider', ['appCommon', function (appCommon) {            
            var linker = function (scope, element, attrs, ngCtrl) {
                var inDesignMode = document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value;
                if (inDesignMode != undefined && inDesignMode == "1") {
                    element.remove();
                    element.empty();
                }
            };

            return {
                restrict: 'EA',
                transclude: true,
                replace: true,
                templateUrl: appCommon.templateUrl.mainSlider,
                link: linker
            };
        }])
        .directive('ngSlideFeedback', ['appCommon', function (appCommon) {            
            return {
                restrict: 'EA',
                replace: true,
                templateUrl: appCommon.templateUrl.slideFeedback,
                controller: 'feedbackSliderController',
                link: function (scope, element, attrs, ngCtrl) {

                }
            }
        }])
        .directive('ngSlideSurvey', ['appCommon', function (appCommon) {            
            return {
                restrict: 'EA',
                replace: true,
                templateUrl: appCommon.templateUrl.slideSurvey,
                link: function (scope, element, attrs, ngCtrl) {

                }
            }
        }])
        .directive('ngSlideSupport', ['appCommon', function (appCommon) {
            return {
                restrict: 'EA',
                replace: true,
                templateUrl: appCommon.templateUrl.slideSupport,
                link: function (scope, element, attrs, ngCtrl) {

                }
            }
        }])
        .directive('ngShowSliderTab', function () {
            var linker = function (scope, element, attrs, ngCtrl) {
                element.bind('click', function (event) {
                    var slideSide = angular.element(attrs.target);
                    if (slideSide.hasClass("open-slider")) {
                        angular.element('body').removeClass('open-slider');
                        slideSide.removeClass('open-slider');
                        angular.element('.slide-side .btn-rotate-group .btn').removeClass('btn-active');
                        angular.element(this).removeClass("active");
                        angular.element('.slide-side *').attr('tabindex', -1);
                    } else {
                        angular.element('.slide-side.open-slider').removeClass('open-slider');
                        angular.element('.slider-tabs a').removeClass('active');
                        angular.element('.slide-side .btn-rotate-group .btn').removeClass('btn-active');

                        angular.element('body').addClass('open-slider');
                        slideSide.addClass('open-slider');
                        angular.element(this).addClass("active");
                        angular.element(attrs.target + ' .btn-rotate-group .btn').addClass('btn-active');
                        angular.element('.slide-side *').attr('tabindex', null);
                    }
                });
            };

            return {
                restrict: 'A',
                link: linker
            };
        })
        .directive('ngShowSlider', ['$timeout', function ($timeout) {
            var linker = function (scope, element, attrs, ngCtrl) {
                element.bind('click', function (event) {
                    var slideSide = angular.element(this).parentsUntil(".slide-side").parent();
                    var slideId = angular.element(this).parentsUntil(".slide-side").parent().attr("id");
                    if (slideSide.hasClass("open-slider")) {
                        angular.element('body').removeClass('open-slider');
                        slideSide.removeClass('open-slider');
                        angular.element(this).removeClass("btn-active");
                        angular.element(".slider-tabs a[data-target='#" + slideId + "']").removeClass("active");
                        angular.element('.slide-side *').attr('tabindex', -1);
                    } else {
                        angular.element('.slide-side.open-slider').removeClass('open-slider');
                        angular.element('.slide-side .btn-rotate-group .btn').removeClass('btn-active');
                        angular.element('.slider-tabs a').removeClass('active');

                        angular.element('body').addClass('open-slider');
                        slideSide.addClass('open-slider');
                        angular.element(this).addClass("btn-active");
                        angular.element(".slider-tabs a[data-target='#" + slideId + "']").addClass("active");
                        angular.element('.slide-side *').attr('tabindex', null);
                    }
                });
            };

            return {
                restrict: 'A',
                link: linker
            };
        }])
        .directive("ngDatePicker", ['$timeout', function ($timeout) {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    element.datetimepicker({
                        format: 'DD/MM/YYYY',
                        showTodayButton: true,
                        defaultDate: new Date(),
                        keepInvalid: true,
                        minDate: new Date("1900", "1", "1"),
                        maxDate: new Date(),
                        ignoreReadonly: true,
                    });
                    var picker = element.data("DateTimePicker");

                    var getDate = function () {
                        var date = picker.date();
                        if (date != null) {
                            scope.$apply(function () {
                                scope.selectDate = picker.date().format("DD/MM/YYYY");
                            });
                        }
                        else {
                            scope.$apply(function () {
                                scope.selectDate = picker.defaultDate().format("DD/MM/YYYY");
                            });
                        }
                    }

                    element.on('dp.change', function (event) {
                        getDate();
                    });

                    element.children("input").on("blur", function () {
                        getDate();
                    });
                }
            };
        }])
        .directive('ngFileModel', ['$parse', function ($parse) {
            var linker = function (scope, element, attrs, ngCtrl) {
                var model = $parse(attrs.ngFileModel);
                var modelSetter = model.assign;

                element.bind('change', function () {
                    scope.$apply(function () {
                        if (element[0].files[0] != undefined) {
                            element[0].files[0].filePath = element.val();
                            modelSetter(scope, element[0].files[0]);
                        }
                    });
                });
            };

            return {
                restrict: 'A',
                link: linker
            };
        }])
})();

/* ------------------------------ Feedback Services ----------------------------------------------*/
(function () {
    'use strict';
    angular.module('FeedbackApp.Services', ['FeedbackApp.Common'])
        .factory('baseService', ['$http', '$q', function ($http, $q) {
            //TO DO: review code BaseService & merge code inheritance with FeedbackService

            // constructor
            var baseService = function () {
            }

            // methods
            baseService.prototype.getData = function (siteUrl, listTitle) {
                var url = String.format("{0}/_api/web/lists/getbytitle('{1}')/items", siteUrl, listTitle);

                var q = $q.defer();
                $http({
                    url: url,
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json;odata=verbose",
                        "Accept": "application/json;odata=verbose"
                    }
                }).success(function (result) {
                    q.resolve(result);
                }).error(function (error, status) {
                    q.reject(error);
                });
                return q.promise;
            }

            baseService.prototype.getItemById = function (siteUrl, listTitle, itemId) {
                var url = String.format("{0}/_api/web/lists/getbytitle('{1}')/items?$filter=Id eq {2}", siteUrl, listTitle, itemId);

                var q = $q.defer();
                $http({
                    url: url,
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json;odata=verbose",
                        "Accept": "application/json;odata=verbose"
                    }
                }).success(function (result) {
                    q.resolve(result.d.results[0]);
                }).error(function (error, status) {
                    q.reject(error);
                });
                return q.promise;
            }

            baseService.prototype.createItem = function (siteUrl, listTitle, item) {
                var url = String.format("{0}/_api/web/lists/getbytitle('{1}')/items", siteUrl, listTitle);

                var q = $q.defer();
                $http({
                    url: url,
                    method: 'POST',
                    data: JSON.stringify(item),
                    headers: {
                        "Content-Type": "application/json;odata=verbose",
                        "Accept": "application/json;odata=verbose",
                        "X-RequestDigest": $("#__REQUESTDIGEST").val()
                    }
                }).success(function (result) {
                    q.resolve(result);
                }).error(function (error, status) {
                    q.reject(error);
                });
                return q.promise;
            }

            baseService.prototype.editItem = function (siteUrl, listTitle, item) {
                var q = $q.defer();
                var self = this;
                // update list item by id
                self.getItemById(siteUrl, listTitle, item.Id).then(function (data) {
                    // update list item
                    $http({
                        url: data.__metadata.uri,
                        method: 'POST',
                        data: JSON.stringify(item),
                        headers: {
                            "Content-Type": "application/json;odata=verbose",
                            "Accept": "application/json;odata=verbose",
                            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                            "X-HTTP-Method": "MERGE",
                            "If-Match": data.__metadata.etag
                        }
                    }).success(function (result) {
                        q.resolve(true);
                    }).error(function (error, status) {
                        q.reject(error);
                    });
                }, function (error, status) {
                    q.reject(status);
                });
                return q.promise;
            }

            baseService.prototype.deleteItem = function (siteUrl, listTitle, itemId) {
                var url = String.format("{0}/_api/web/lists/getbytitle('{1}')/items({2})", siteUrl, listTitle, itemId);

                var q = $q.defer();
                $http({
                    url: url,
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json;odata=verbose",
                        "Accept": "application/json;odata=verbose",
                        "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                        "If-Match": "*"
                    }
                }).success(function (result) {
                    q.resolve(result);
                }).error(function (error, status) {
                    q.reject(error);
                });
                return q.promise;
            };

            baseService.prototype.uploadFiles = function (uri, files) {
                // You can upload files up to 2 GB with the REST API.
                var length = files.length,
                    i = 0,
                    self = this,
                    deferred = $q.defer();

                function next(i) {
                    self.attachFileToList(uri, files[i].name, files[i].binaryData).then(function () {
                        i = i + 1;
                        var file = files[i];
                        if (file) {
                            next(i);
                        } else {
                            deferred.resolve('done');
                        }
                    });
                }
                next(i);
                return deferred.promise;
            };

            baseService.prototype.attachFileToList = function (uri, fileName, data) {
                var url = String.format("{0}/AttachmentFiles/add(FileName='{1}')", uri, fileName);
                var deferred = $q.defer();
                $http({
                    url: url,
                    method: 'POST',
                    async: false,
                    processData: false,
                    binaryStringRequestBody: true,
                    transformRequest: [],
                    data: data,
                    headers: {
                        'accept': 'application/json;odata=verbose',
                        'X-RequestDigest': $("#__REQUESTDIGEST").val(),
                        'content-Type': 'application/json;odata=verbose'
                    }
                }).success(function (result) {
                    deferred.resolve(result);
                }).error(function (result, status) {
                    deferred.reject(status);
                });
                return deferred.promise;
            };

            return new baseService;
        }])
        .factory('feedbackService', ['$http', '$q', 'appCommon', function ($http, $q, appCommon) {
            /* ---------------------------- constructor -------------------------------- */
            var feedbackService = function () {
                this._siteUrl = _spPageContextInfo.webAbsoluteUrl;
                this._digest = $("#__REQUESTDIGEST").val();
            }
            
            /* ---------------------------- global properties & functions -------------- */
            var siteUrl = _spPageContextInfo.webAbsoluteUrl;

            var extendProperties = function (item) {
                var model = new Object();
                if (item.length != null) {
                    model.length = item.length;
                }
                for (var key in item) {
                    if (item.hasOwnProperty(key)) {
                        var property = key.charAt(0).toLowerCase() + key.slice(1);
                        model[property] = item[key];

                        if (angular.isObject(item[key])) {
                            var oldItem = item[key];
                            var newItem = extendProperties(oldItem);
                            model[property] = newItem;
                        }
                    }
                }
                return model;
            };
                       
            var getItemTypeForListTitle = function (name) {
                return "SP.Data." + name.charAt(0).toUpperCase() + name.split(" ").join("").slice(1) + "ListItem";
            }
            
            /* ---------------------------- User & Permission -------------------------- */
            feedbackService.prototype.getCurrentUserWithDetails = function () {
                var url = String.format("{0}/_api/web/currentuser/?$expand=groups", siteUrl);

                var q = $q.defer();
                $http({
                    url: url,
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json;odata=verbose",
                        "Accept": "application/json;odata=verbose",
                        "X-RequestDigest": $("#__REQUESTDIGEST").val()
                    }
                }).success(function (result) {
                    if (result.d.Groups.results.length == 0) {
                        var group = { Title: 'CEP General' };
                        result.d.Groups.results.push(group);
                    };
                    q.resolve(result.d.Groups.results);
                }).error(function (result, status) {
                    q.reject(status);
                });
                return q.promise;
            };
            
            /* ---------------------------- Feedback Template -------------------------- */
            feedbackService.prototype.createFeedbackTemplate = function (listTitle, feedbackTemplate) {
                var itemType = getItemTypeForListTitle(listTitle);
                var item = {
                    "__metadata": { "type": itemType },
                    "Title": feedbackTemplate.title,
                    "FeedbackTemplateTitle": feedbackTemplate.title,
                    "FeedbackTemplateName": feedbackTemplate.name,
                    "Section01": feedbackTemplate.section01,
                    "Section02": feedbackTemplate.section02,
                    "Section03": feedbackTemplate.section03,
                    "Section04": feedbackTemplate.section04,
                    "Section05": feedbackTemplate.section05
                };

                // call REST API
                var q = $q.defer();
                var self = this;
                self.createItem(siteUrl, listTitle, item).then(function (result) {
                    q.resolve(result);
                }, function (error) {
                    q.reject(error);
                });
                return q.promise;
            }

            feedbackService.prototype.editFeedbackTemplate = function (listTitle, feedbackTemplate) {
                var itemType = getItemTypeForListTitle(listTitle);
                var item = {
                    "__metadata": { "type": itemType },
                    "Id": feedbackTemplate.id,
                    "Title": feedbackTemplate.title,
                    "FeedbackTemplateTitle": feedbackTemplate.title,
                    "FeedbackTemplateName": feedbackTemplate.name,
                    "Section01": feedbackTemplate.section01,
                    "Section02": feedbackTemplate.section02,
                    "Section03": feedbackTemplate.section03,
                    "Section04": feedbackTemplate.section04,
                    "Section05": feedbackTemplate.section05
                };

                // call REST API
                var q = $q.defer();
                var self = this;
                self.editItem(siteUrl, listTitle, item).then(function (result) {
                    q.resolve(result);
                }, function (error) {
                    q.reject(error);
                });
                return q.promise;
            }

            feedbackService.prototype.deleteFeedbackTemplate = function (listTitle, itemId) {
                // call REST API
                var q = $q.defer();
                var self = this;
                self.deleteItem(siteUrl, listTitle, itemId).then(function (result) {
                    q.resolve(result);
                }, function (error) {
                    q.reject(error);
                });
                return q.promise;
            }

            feedbackService.prototype.getFeedbackTemplateById = function (listTitle, itemId) {
                if (itemId == undefined) {
                    itemId = 1
                }
                // call REST API
                var q = $q.defer();
                var self = this;
                self.getData(siteUrl, listTitle, itemId).then(function (result) {
                    var template = {};
                    if (result.d.results.length > 0) {
                        template = extendProperties(result.d.results[0]);
                        template.name = template.feedbackTemplateName;
                        template.title = template.feedbackTemplateTitle;
                    }
                    q.resolve(template);
                }, function (error) {
                    q.reject(error);
                });
                return q.promise;
            }
            
            /* ---------------------------- Feedback Options --------------------------- */
            feedbackService.prototype.createFeedbackOption = function (listTitle, feedbackOption) {
                var itemType = getItemTypeForListTitle(listTitle);
                var item = {
                    "__metadata": { "type": itemType },
                    "Title": feedbackOption.title,
                    "FeedbackDescription": feedbackOption.description
                };

                // call REST API
                var q = $q.defer();
                var self = this;
                self.createItem(siteUrl, listTitle, item).then(function (result) {
                    q.resolve(result);
                }, function (error) {
                    q.reject(error);
                });
                return q.promise;
            }

            feedbackService.prototype.editFeedbackOption = function (listTitle, feedbackOption) {
                var itemType = getItemTypeForListTitle(listTitle);
                var item = {
                    "__metadata": { "type": itemType },
                    "Id": feedbackOption.id,
                    "Title": feedbackOption.title,
                    "FeedbackDescription": feedbackOption.description
                };

                // call REST API
                var q = $q.defer();
                var self = this;
                self.editItem(siteUrl, listTitle, item).then(function (result) {
                    q.resolve(result);
                }, function (error) {
                    q.reject(error);
                });
                return q.promise;
            }

            feedbackService.prototype.deleteFeedbackOption = function (listTitle, itemId) {
                // call REST API
                var q = $q.defer();
                var self = this;
                self.deleteItem(siteUrl, listTitle, itemId).then(function (result) {
                    q.resolve(result);
                }, function (error) {
                    q.reject(error);
                });
                return q.promise;
            }

            feedbackService.prototype.getFeedbackOption = function (listTitle) {
                // call REST API
                var q = $q.defer();
                var self = this;
                self.getData(siteUrl, listTitle).then(function (result) {
                    var data = [];
                    if (result.d.results.length > 0) {
                        angular.forEach(result.d.results, function (item) {
                            var model = extendProperties(item);
                            model.description = model.feedbackDescription;
                            model.deleted = false;
                            model.checked = false;
                            data.push(model);
                        });
                    }
                    q.resolve(data);
                }, function (error) {
                    q.reject(error);
                });
                return q.promise;
            }
            
            /* ---------------------------- Feedback Questions ------------------------- */
            feedbackService.prototype.createFeedbackQuestion = function (listTitle, feedbackQuestion) {
                var itemType = getItemTypeForListTitle(listTitle);
                var item = {
                    "__metadata": { "type": itemType },
                    "Title": feedbackQuestion.title,
                    "FeedbackDescription": feedbackQuestion.description
                };

                // call REST API
                var q = $q.defer();
                var self = this;
                self.createItem(siteUrl, listTitle, item).then(function (result) {
                    q.resolve(result);
                }, function (error) {
                    q.reject(error);
                });
                return q.promise;
            }

            feedbackService.prototype.editFeedbackQuestion = function (listTitle, feedbackQuestion) {
                var url = _spPageContextInfo.webAbsoluteUrl;
                var itemType = getItemTypeForListTitle(listTitle);
                var item = {
                    "__metadata": { "type": itemType },
                    "Id": feedbackQuestion.id,
                    "Title": feedbackQuestion.title,
                    "FeedbackDescription": feedbackQuestion.description
                };

                // call REST API
                var q = $q.defer();
                var self = this;
                self.editItem(url, listTitle, item).then(function (result) {
                    q.resolve(result);
                }, function (error) {
                    q.reject(error);
                });
                return q.promise;
            }

            feedbackService.prototype.deleteFeedbackQuestion = function (listTitle, itemId) {
                // call REST API
                var q = $q.defer();
                var self = this;
                self.deleteItem(siteUrl, listTitle, itemId).then(function (result) {
                    q.resolve(result);
                }, function (error) {
                    q.reject(error);
                });
                return q.promise;
            }

            feedbackService.prototype.getFeedBackQuestion = function (listTitle) {
                // call REST API
                var q = $q.defer();
                var self = this;
                self.getData(siteUrl, listTitle).then(function (result) {
                    var data = [];
                    if (result.d.results.length > 0) {
                        angular.forEach(result.d.results, function (item) {
                            var model = extendProperties(item);
                            model.description = model.feedbackDescription;
                            model.deleted = false;
                            model.checked = false;
                            data.push(model);
                        });
                    }
                    q.resolve(data);
                }, function (error) {
                    q.reject(error);
                });
                return q.promise;
            }
            
            /* ---------------------------- Feedback ----------------------------------- */
            feedbackService.prototype.createFeedback = function (listTitle, feedback) {
                var itemType = getItemTypeForListTitle(listTitle);
                var item = {
                    "__metadata": { "type": itemType },
                    "Title": feedback.title,
                    "SuggestionType": feedback.suggestionType,
                    "FeedbackDescription": feedback.feedbackDescription,
                    "FeedbackAnswer": feedback.feedbackAnswer,
                    "FeedbackLink": {
                        '__metadata': { 'type': 'SP.FieldUrlValue' },
                        'Description': feedback.feedbackLink.description,
                        'Url': feedback.feedbackLink.url
                    },
                    "Browser": feedback.browser,
                    "OperatingSystem": feedback.operatingSystem,
                    "MobileDevice": feedback.mobileDevice,
                    "ScreenSize": feedback.screenSize,
                    "FeedbackStatus": feedback.feedbackStatus,
                    "FeedbackResponse": feedback.feedbackResponse,
                };

                // call REST API
                var q = $q.defer();
                var self = this;
                self.createItem(siteUrl, listTitle, item).then(function (result) {
                    var data = extendProperties(result.d);
                    q.resolve(data);
                }, function (error) {
                    q.reject(error);
                });
                return q.promise;
            };

            feedbackService.prototype.editFeedback = function (listTitle, feedback) {
                var url = _spPageContextInfo.webAbsoluteUrl;
                var itemType = getItemTypeForListTitle(listTitle);
                var item = {
                    "__metadata": { "type": itemType },
                    "Title": feedback.title,
                    "FeedbackDescription": feedback.feedbackDescription,
                    "Answer01": feedback.answer01,
                    "Answer02": feedback.answer02,
                    "Answer03": feedback.answer03,
                    "Answer04": {
                        '__metadata': { 'type': 'SP.FieldUrlValue' },
                        'Description': feedback.answer04.description,
                        'Url': feedback.answer04.url
                    },
                };

                // call REST API
                var q = $q.defer();
                var self = this;
                self.editItem(url, listTitle, item).then(function (result) {
                    q.resolve(result);
                }, function (error) {
                    q.reject(error);
                });
                return q.promise;
            }

            feedbackService.prototype.deleteFeedback = function (listTitle, itemId) {
                // call REST API
                var q = $q.defer();
                var self = this;
                self.deleteItem(siteUrl, listTitle, itemId).then(function (result) {
                    q.resolve(result);
                }, function (error) {
                    q.reject(error);
                });
                return q.promise;
            }

            feedbackService.prototype.getFeedBack = function (listTitle) {
                // call REST API
                var q = $q.defer();
                var self = this;
                self.getData(siteUrl, listTitle).then(function (result) {
                    var data = [];
                    if (result.d.results.length > 0) {
                        angular.forEach(result.d.results, function (item) {
                            var model = extendProperties(item);
                            data.push(model);
                        });
                    }
                    q.resolve(data);
                }, function (error) {
                    q.reject(error);
                });
                return q.promise;
            }
            
            /* ---------------------------- base functions ----------------------------- */
            feedbackService.prototype.getData = function (siteUrl, listTitle) {                
                var listGuid = appCommon.getListIdByListTitle(listTitle);
                var url = String.format("{0}/_api/web/lists(guid'{1}')/items", siteUrl, listGuid);

                var q = $q.defer();
                $http({
                    url: url,
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json;odata=verbose",
                        "Accept": "application/json;odata=verbose"
                    }
                }).success(function (result) {
                    q.resolve(result);
                }).error(function (error, status) {
                    q.reject(error);
                });
                return q.promise;
            }

            feedbackService.prototype.getItemById = function (siteUrl, listTitle, itemId) {                
                var listGuid = appCommon.getListIdByListTitle(listTitle);
                var url = String.format("{0}/_api/web/lists(guid'{1}')/items?$filter=Id eq {2}", siteUrl, listGuid, itemId);

                var q = $q.defer();
                $http({
                    url: url,
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json;odata=verbose",
                        "Accept": "application/json;odata=verbose"
                    }
                }).success(function (result) {
                    q.resolve(result.d.results[0]);
                }).error(function (error, status) {
                    q.reject(error);
                });
                return q.promise;
            }

            feedbackService.prototype.createItem = function (siteUrl, listTitle, item) {                
                var listGuid = appCommon.getListIdByListTitle(listTitle);
                var url = String.format("{0}/_api/web/lists(guid'{1}')/items", siteUrl, listGuid);

                var q = $q.defer();
                $http({
                    url: url,
                    method: 'POST',
                    data: JSON.stringify(item),
                    headers: {
                        "Content-Type": "application/json;odata=verbose",
                        "Accept": "application/json;odata=verbose",
                        "X-RequestDigest": $("#__REQUESTDIGEST").val()
                    }
                }).success(function (result) {
                    q.resolve(result);
                }).error(function (error, status) {
                    q.reject(error);
                });
                return q.promise;
            }

            feedbackService.prototype.editItem = function (siteUrl, listTitle, item) {
                var q = $q.defer();
                var self = this;
                // update list item by id
                self.getItemById(siteUrl, listTitle, item.Id).then(function (data) {
                    // update list item
                    $http({
                        url: data.__metadata.uri,
                        method: 'POST',
                        data: JSON.stringify(item),
                        headers: {
                            "Content-Type": "application/json;odata=verbose",
                            "Accept": "application/json;odata=verbose",
                            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                            "X-HTTP-Method": "MERGE",
                            "If-Match": data.__metadata.etag
                        }
                    }).success(function (result) {
                        q.resolve(true);
                    }).error(function (error, status) {
                        q.reject(error);
                    });
                }, function (error, status) {
                    q.reject(status);
                });
                return q.promise;
            }

            feedbackService.prototype.deleteItem = function (siteUrl, listTitle, itemId) {                
                var listGuid = appCommon.getListIdByListTitle(listTitle);
                var url = String.format("{0}/_api/web/lists(guid'{1}')/items({2})", siteUrl, listGuid, itemId);

                var q = $q.defer();
                $http({
                    url: url,
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json;odata=verbose",
                        "Accept": "application/json;odata=verbose",
                        "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                        "If-Match": "*"
                    }
                }).success(function (result) {
                    q.resolve(result);
                }).error(function (error, status) {
                    q.reject(error);
                });
                return q.promise;
            };

            feedbackService.prototype.uploadFiles = function (uri, files) {
                // You can upload files up to 2 GB with the REST API.
                var length = files.length,
                    i = 0,
                    self = this,
                    deferred = $q.defer();

                function next(i) {
                    self.attachFileToList(uri, files[i].name, files[i].binaryData).then(function () {
                        i = i + 1;
                        var file = files[i];
                        if (file) {
                            next(i);
                        } else {
                            deferred.resolve('done');
                        }
                    });
                }
                next(i);
                return deferred.promise;
            };

            feedbackService.prototype.attachFileToList = function (uri, fileName, data) {
                var url = String.format("{0}/AttachmentFiles/add(FileName='{1}')", uri, fileName);
                var deferred = $q.defer();
                $http({
                    url: url,
                    method: 'POST',
                    async: false,
                    processData: false,
                    binaryStringRequestBody: true,
                    transformRequest: [],
                    data: data,
                    headers: {
                        'accept': 'application/json;odata=verbose',
                        'X-RequestDigest': $("#__REQUESTDIGEST").val(),
                        'content-Type': 'application/json;odata=verbose'
                    }
                }).success(function (result) {
                    deferred.resolve(result);
                }).error(function (result, status) {
                    deferred.reject(status);
                });
                return deferred.promise;
            };

            return new feedbackService;
        }])
        .factory('fileService', ['$q', function ($q) {
            /**
		    * CONSTRUCTOR
		    */
            var fileService = function () {
                this._sizeOfOneFile = 5242880;
                this._sizeOfTotalFile = 26214400;
                this._fileType = [];
            }

            /**
            * STATIC INTERNAL METHODS
            */
            fileService.prototype.readFileAsBinaryString = function (file) {
                var deferred = $q.defer();
                var reader = new FileReader();

                reader.onload = function () {
                    file.binaryData = reader.result;
                    deferred.resolve(file);
                };

                reader.onerror = function () {
                    deferred.reject(reader);
                };
                reader.readAsArrayBuffer(file);
                return deferred.promise;
            };

            fileService.prototype.readFileAsBase64String = function (file) {
                function base64ToBinary(base64EncodedFile) {
                    var BASE64_MARKER = ';base64,';
                    var base64Index = base64EncodedFile.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
                    var base64 = base64EncodedFile.substring(base64Index);
                    var raw = atob(base64);
                    var rawLength = raw.length;
                    var array = new Uint8Array(rawLength);
                    var i;

                    for (i = 0; i < rawLength; i++) {
                        array[i] = raw.charCodeAt(i);
                    }
                    return array.buffer;
                }

                function processImage() {
                    //The image file has been read by the filereader
                    //and can be converted to an arraybuffer
                    var arrayBuffer = base64ToBinary(this.result);

                    //Upload the image to the SharePoint images library
                    file.binaryData = arrayBuffer;
                    deferred.resolve(file);
                }

                var deferred = $q.defer(),
                    reader = new FileReader();

                reader.onload = processImage;

                reader.onerror = function () {
                    deferred.reject(reader);
                };

                reader.readAsDataURL(file);
                return deferred.promise;
            };


            /**
             * PUBLIC METHODS
             */
            fileService.prototype.checkSpecialCharacters = function (files) {
                /* there are unallowed characters : ? < > # % / \ */
                var result = true,
                    temp,
                    pattern = new RegExp('[\\~#%&*{}/:<>?|\()"]');

                if (files instanceof Array) {
                    angular.forEach(files, function (item) {
                        temp = item.name || '';
                        if (pattern.test(temp))
                            result = false;
                    })
                };

                return result;
            };

            fileService.prototype.checkFileNameMaxLength = function (files) {
                var result = true;
                if (files instanceof Array) {
                    angular.forEach(files, function (item) {
                        if (item.name.length > 100) result = false;
                    });
                };
                return result;
            };

            fileService.prototype.checkFileTypes = function (files) {
                // there are allowed types : 'pdf', 'doc', 'docx', 'xls', 'xlsx', 'jpg', 'jpeg', 'png', 'mp4'
                var result = true,
                    temp,
                    pattern = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(.pdf|.doc|.docx|.xls|.xlsx|.jpg|.jpeg|.png)$");

                if (files instanceof Array) {
                    angular.forEach(files, function (item) {
                        temp = item.name || '';
                        if (!pattern.test(temp))
                            result = false;
                    })
                };

                return result;
            };

            fileService.prototype.checkFileSize = function (file) {
                var result = false, temp;

                if (file instanceof Object) {
                    temp = file.size || 0;
                    if (this._sizeOfOneFile >= temp) { result = true; };
                };

                return result;
            };

            fileService.prototype.checkTotalFileSize = function (files) {
                var result = false, temp, total = 0;

                if (files instanceof Array) {
                    angular.forEach(files, function (item) {
                        temp = item.size || 0;
                        total += temp;
                    })
                    if (this._sizeOfTotalFile >= total) { result = true; };
                };

                return result;
            };

            fileService.prototype.loadFiles = function (files) {
                var promises = [],
                    length = files.length,
                    i = 0,
                    self = this;

                if (length <= 0) {
                    return [];
                };

                angular.forEach(files, function (file) {
                    if (file.type.indexOf('image') >= 0) {
                        promises.push(self.readFileAsBase64String(file));
                    } else {
                        promises.push(self.readFileAsBinaryString(file));
                    }
                });

                return $q.all(promises);
            };

            return new fileService;
        }]);
})();

/* ------------------------------ Feedback Controllers -------------------------------------------*/
(function () {
    'use strict';
    angular.module('FeedbackApp.Controllers', ['FeedbackApp.Common', 'FeedbackApp.Services'])
        .controller('feedbackAdminController', ['$scope', '$q', '$timeout', 'appCommon', 'feedbackService',
            function ($scope, $q, $timeout, appCommon, feedbackService) {
                // declare models
                $scope.isUpdateSuccess = false;
                $scope.isChanged = false;
                $scope.isSaving = false;
                $scope.submitted = false;
                $scope.template = {
                    name: '',
                    title: '',
                    section01: '',
                    section02: '',
                    section03: '',
                    section04: '',
                    section05: '',
                };
                $scope.lstFeedbackOption = [];
                $scope.lstFeedbackQuestion = [];
                
                /* ------------ add & remove Feedback Option -----------*/
                $scope.addOption = function () {
                    var feedbackOption = {
                        id: 0,
                        title: '',
                        description: '',
                        deleted: false
                    };
                    $scope.lstFeedbackOption.push(feedbackOption);
                    $scope.changeItem();
                }

                $scope.removeOption = function ($index) {
                    $scope.lstFeedbackOption[$index].deleted = true;
                    $scope.changeItem();
                }

                /* ------------ add & remove Feedback Question ---------*/
                $scope.addQuestion = function () {
                    var feedbackQuestion = {
                        id: 0,
                        title: '',
                        description: '',
                        deleted: false
                    };
                    $scope.lstFeedbackQuestion.push(feedbackQuestion);
                    $scope.changeItem();
                }

                $scope.removeQuestion = function ($index) {
                    $scope.lstFeedbackQuestion[$index].deleted = true;
                    $scope.changeItem();
                }
                               
                /* ------------ get data from other lists() ------------*/
                var getData = function () {
                    $q.all([
                            feedbackService.getFeedbackTemplateById(appCommon.listInstance.FeedbackTemplate),
                            feedbackService.getFeedbackOption(appCommon.listInstance.FeedbackOption),
                            feedbackService.getFeedBackQuestion(appCommon.listInstance.FeedbackQuestion)
                    ]).then(function (result) {
                        if (result.length > 0) {
                            $scope.template = result[0];
                            $scope.lstFeedbackOption = result[1];
                            $scope.lstFeedbackQuestion = result[2];
                        }
                        $scope.isChanged = false;
                    }, function (error) {
                        console.log(error);
                        $scope.isChanged = false;
                    })
                }

                /* ------------ reset data ------------*/
                var resetStatus = function () {
                    $timeout(function () {
                        $scope.isUpdateSuccess = false;
                        $scope.isSaving = false;
                    }, 5000);
                }

                $scope.resetData = function () {
                    getData();
                }

                $scope.changeData = function () {
                    $scope.isChanged = true;
                };

                /* ------------ save data ------------*/
                $scope.saveData = function () {
                    $scope.submitted = true;
                    $scope.isSaving = true;
                    var validate = validateBeforeSave();
                    if (validate) {
                        $q.all([
                            feedbackService.editFeedbackTemplate(appCommon.listInstance.FeedbackTemplate, $scope.template),
                            saveFeedbackOption(),
                            saveFeedbackQuestion()
                        ]).then(function (result) {
                            if (result.length > 0) {
                                var resultSaveFeedbackTemplate = result[0];
                                var resultSaveFeedbackOption = result[1];
                                var resultSaveFeedbackQuestion = result[2];
                                getData();
                            }
                            $scope.isUpdateSuccess = true;
                            resetStatus();
                        }, function (error) {
                            console.log(error);
                            resetStatus();
                        })
                    }
                }

                var validateBeforeSave = function () {
                    var result = true;
                    // validate list Options
                    angular.forEach($scope.lstFeedbackOption, function (item) {
                        if (item.title == undefined || item.title.length == 0) {
                            result = false;
                        }
                    });

                    // validate list Questions
                    angular.forEach($scope.lstFeedbackQuestion, function (item) {
                        if (item.title == undefined || item.title.length == 0) {
                            result = false;
                        }
                    });
                    return result;
                }                               

                var saveFeedbackOption = function () {
                    var listItemCollection = [];
                    var ctx = SP.ClientContext.get_current();   // get clientcontext
                    var listId = appCommon.getListIdByListTitle(appCommon.listInstance.FeedbackOption); // get list id
                    var spList = ctx.get_web().get_lists().getById(listId);
                    angular.forEach($scope.lstFeedbackOption, function (item, index) {
                        // create item
                        if (item.id == undefined || item.id == 0) {
                            var itemCreateInfo = new SP.ListItemCreationInformation();
                            var listItem = spList.addItem(itemCreateInfo);
                            listItem.set_item('Title', item.title);
                            listItem.set_item('FeedbackDescription', item.description);
                            listItem.update();
                            listItemCollection[index] = listItem;
                            ctx.load(listItemCollection[index]);
                        } else {
                            // delete item
                            if (item.deleted == true) {
                                var listItem = spList.getItemById(item.id);
                                listItem.deleteObject();
                            } else {
                                // update item
                                var listItem = spList.getItemById(item.id);
                                listItem.set_item('Title', item.title);
                                listItem.set_item('FeedbackDescription', item.description);
                                listItem.update();
                                listItemCollection[index] = listItem;
                                ctx.load(listItemCollection[index]);
                            }
                        }
                    });

                    // update batch multiple items
                    var q = $q.defer();
                    ctx.executeQueryAsync(function (result) {
                        q.resolve(result);
                    }, function (error) {
                        q.reject(error);
                    });

                    return q.promise;
                }

                var saveFeedbackQuestion = function () {
                    var listItemCollection = [];
                    var ctx = SP.ClientContext.get_current();   // get clientcontext
                    var listId = appCommon.getListIdByListTitle(appCommon.listInstance.FeedbackQuestion); // get list id
                    var spList = ctx.get_web().get_lists().getById(listId);
                    angular.forEach($scope.lstFeedbackQuestion, function (item, index) {
                        // create item
                        if (item.id == undefined || item.id == 0) {
                            var itemCreateInfo = new SP.ListItemCreationInformation();
                            var listItem = spList.addItem(itemCreateInfo);
                            listItem.set_item('Title', item.title);
                            listItem.set_item('FeedbackDescription', item.description);
                            listItem.update();
                            listItemCollection[index] = listItem;
                            ctx.load(listItemCollection[index]);
                        } else {
                            // delete item
                            if (item.deleted == true) {
                                var listItem = spList.getItemById(item.id);
                                listItem.deleteObject();
                            } else {
                                // update item
                                var listItem = spList.getItemById(item.id);
                                listItem.set_item('Title', item.title);
                                listItem.set_item('FeedbackDescription', item.description);
                                listItem.update();
                                listItemCollection[index] = listItem;
                                ctx.load(listItemCollection[index]);
                            }
                        }
                    });

                    // update batch multiple items
                    var q = $q.defer();
                    ctx.executeQueryAsync(function (result) {
                        q.resolve(result);
                    }, function (error) {
                        q.reject(error);
                    });
                    return q.promise;
                }

                /* ------------ main data ------------*/
                getData();
            }])
        .controller('feedbackArchiveController', ['$scope', '$q', '$interval', 'appCommon', 'feedbackService',
            function ($scope, $q, $interval, appCommon, feedbackService) {
                // models				
                $scope.archiving = false;
                $scope.selectDate = new Date();
                $scope.selectDate = $scope.selectDate.format("dd/MM/yyyy");
                $scope.archivedItems = [];
                $scope.percentage = 0;
                $scope.isProgressComplete = false;
                $scope.isNoItem = true;
                $scope.messageErrorPermission = '';
                $scope.stopProgressBar = false;

                // archive List Items
                var getTotalArchiveListItems = function () {
                    var q = $q.defer();
                    var array = [];
                    var ctx = new SP.ClientContext(appCommon.spPageContextInfo.webAbsoluteUrl);
                    var spList = ctx.get_web().get_lists().getByTitle(appCommon.listInstance.Feedback);
                    var selectDate = $scope.selectDate.format("yyyy-MM-dd");
                    var camlQuery = new SP.CamlQuery();
                    camlQuery.set_viewXml(
                        '<View>' +
                            '<Query>' +
                                '<Where>' +
									'<And>' +
										'<Leq>' +
											'<FieldRef Name="Created"/><Value IncludeTimeValue="FALSE" Type="DateTime">' + selectDate + '</Value>' +
										'</Leq>' +
										'<Eq>' +
											'<FieldRef Name="FeedbackStatus"/><Value Type="Text">New</Value>' +
										'</Eq>' +
									'</And>' +
                                '</Where>' +
                            '</Query>' +
                            '<RowLimit>1000</RowLimit>' +
                        '</View>');
                    var lstItemCollection = spList.getItems(camlQuery);
                    ctx.load(lstItemCollection);
                    ctx.executeQueryAsync(function () {
                        var lstItems = lstItemCollection.getEnumerator();
                        while (lstItems.moveNext()) {
                            var item = lstItems.get_current();
                            var newItem = {
                                id: item.get_item('ID'),
                                title: item.get_item('Title'),
                            }
                            array.push(newItem);
                        }
                        q.resolve(array);
                    }, function (sender, args) {
                        //console.log('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
                        q.reject(args.get_message());
                    });
                    return q.promise;
                }

                var archiveListItems = function () {
                    var q = $q.defer();
                    var array = [];
                    var ctx = new SP.ClientContext(appCommon.spPageContextInfo.webAbsoluteUrl);
                    var spList = ctx.get_web().get_lists().getByTitle(appCommon.listInstance.Feedback);
                    var selectDate = $scope.selectDate.format('yyyy-MM-dd');
                    var camlQuery = new SP.CamlQuery();
                    camlQuery.set_viewXml(
                        '<View>' +
                            '<Query>' +
                                '<Where>' +
									'<And>' +
										'<Leq>' +
											'<FieldRef Name="Created"/><Value IncludeTimeValue="FALSE" Type="DateTime">' + selectDate + '</Value>' +
										'</Leq>' +
										'<Eq>' +
											'<FieldRef Name="FeedbackStatus"/><Value Type="Text">New</Value>' +
										'</Eq>' +
									'</And>' +
                                '</Where>' +
                            '</Query>' +
                            '<RowLimit>1000</RowLimit>' +
                        '</View>');
                    var lstItemCollection = spList.getItems(camlQuery);
                    ctx.load(lstItemCollection);
                    ctx.executeQueryAsync(function () {
                        var lstItems = lstItemCollection.getEnumerator();
                        while (lstItems.moveNext()) {
                            var item = lstItems.get_current();
                            var newItem = {
                                id: item.get_item('ID'),
                                title: item.get_item('Title'),
                            }
                            item.set_item('FeedbackStatus', 'Archived');
                            item.update();
                            ctx.load(item);
                            ctx.executeQueryAsync(function () {
                                newItem.archived = true;
                            }, function () {
                                newItem.archived = false;
                            });
                            array.push(newItem);
                        }
                        q.resolve(array);
                    }, function (sender, args) {
                        //console.log('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());					
                        q.reject(args.get_message());
                    });
                    return q.promise;
                };

                // methods
                var resetStatus = function () {
                    $scope.archiving = false;
                    $scope.percentage = 0;
                    $scope.isProgressComplete = false;
                    $scope.isNoItem = false;
                    $scope.archivedItems = [];
                    $scope.selectDate = $scope.selectDate.format("dd/MM/yyyy");
                };

                var startProgressBar = function () {
                    stopProgressBar = $interval(function () {
                        if ($scope.percentage >= 100) {
                            $interval.cancel(stopProgressBar);
                        }
                        if ($scope.percentage <= 90) {
                            $scope.percentage += 1;
                            $interval.cancel(stopProgressBar);
                        }
                    }, 200);
                };

                // buttons
                $scope.archiveData = function () {
                    var hasPermission = false;
                    var selectDateTemp = moment($scope.selectDate, "DD/MM/YYYY").toDate();

                    feedbackService.getCurrentUserWithDetails().then(function (resultUsers) {
                        angular.forEach(resultUsers, function (item) {
                            if (item.Title == 'CEP Content Owner' ||
								item.Title == 'CEP Content Approvers' ||
								item.Title == 'CEP Leadership' ||
								item.Title == 'CEP Site Admin') {
                                hasPermission = true;
                            }
                        });
                        if (!hasPermission) {
                            $scope.messageErrorPermission = 'Invalid Permission: you can not execute this function!';
                        }
                    }, function (errorUsers) {
                        console.log(error);
                    }).then(function () {
                        if (hasPermission && angular.isDate(selectDateTemp)) {
                            $scope.archiving = true;
                            $scope.selectDate = selectDateTemp;
                            startProgressBar();
                            getTotalArchiveListItems().then(function (resultItems) {
                                $scope.archivedItems = resultItems;
                                if ($scope.archivedItems.length == 0) $scope.isNoItem = true;
                                else $scope.isNoItem = false;

                                // start archive items
                                $scope.percentage = 100;
                                $scope.isProgressComplete = true;
                                if (!$scope.isNoItem) {
                                    archiveListItems().then(function (resultItems) {
                                        $scope.archivedItems = resultItems;
                                    }, function (error) {
                                        console.log(error);
                                    });
                                }
                            }, function (error) {
                                console.log(error);
                            });
                        }
                    });
                };

                $scope.closeArchiving = function () {
                    resetStatus();
                };
            }])
        .controller('feedbackSliderController', ['$scope', '$q', '$timeout', 'appCommon', 'feedbackService', 'fileService',
            function ($scope, $q, $timeout, appCommon, feedbackService, fileService) {
                // declare models
                $scope.submitted = false;
                $scope.hasOptionDescription = false;
                $scope.hasPermission = false;
                $scope.loading = true;
                $scope.submitting = false;
                $scope.errorMessage = '';
                $scope.errorDescription = '';
                $scope.template = {
                    name: '',
                    title: '',
                    survey: '',
                    section01: '',
                    section02: '',
                    section03: '',
                    section04: '',
                    section05: '',
                };
                $scope.feedback = {
                    title: 'Feedback',
                    suggestionType: '',
                    feedbackDescription: '',
                    feedbackAnswer: '',
                    feedbackLink: {
                        description: document.title,
                        url: window.location.href
                    },
                    browser: String.format('{0} {1}', jscd.browser, jscd.browserVersion),
                    operatingSystem: String.format('{0} {1}', jscd.os, jscd.osVersion),
                    mobileDevice: jscd.mobile,
                    screenSize: jscd.screen,
                    feedbackStatus: 'New',
                    feedbackResponse: '',
                };
                $scope.lstAttachFiles = [];
                $scope.lstFeedbackOption = [];
                $scope.lstFeedbackQuestion = [];
                $scope.selectedOption = {};
                $scope.selectFile = {};
                $scope.editTemplateUrl = String.format('{0}/Pages/feedbacktemplate.aspx', _spPageContextInfo.webServerRelativeUrl);
                $scope.feedbackReviewUrl = String.format('{0}/Pages/feedbackreview.aspx', _spPageContextInfo.webServerRelativeUrl);

                $scope.$watch(function () { return $scope.selectedOption; }, function (newValue, oldValue) {
                    if (newValue != oldValue) {
                        if ($scope.selectedOption.description != undefined && $scope.selectedOption.description.length > 0) {
                            $scope.hasOptionDescription = true;
                        } else {
                            $scope.hasOptionDescription = false;
                        }
                    }
                });

                var clearSelectFile = function () {
                    // reset Input
                    var $el = $('#inputFileControl');
                    $el.wrap('<form>').closest('form').get(0).reset();
                    $el.unwrap();
                }

                /* ------------------------------ init ------------------------------*/
                var isFirstLoadData = true;
                var loadData = function () {
                    $q.all([
                        feedbackService.getFeedbackTemplateById(appCommon.listInstance.FeedbackTemplate),
                        feedbackService.getFeedbackOption(appCommon.listInstance.FeedbackOption),
                        feedbackService.getFeedBackQuestion(appCommon.listInstance.FeedbackQuestion),
                        feedbackService.getCurrentUserWithDetails()
                    ]).then(function (result) {
                        if (result.length > 0) {
                            $scope.template = result[0];
                            $scope.template.survey = 'Survey';
                            $scope.template.support = 'IT Support';
                            $scope.lstFeedbackOption = result[1];
                            $scope.lstFeedbackQuestion = result[2];
                            $scope.lstGroups = result[3];

                            if ($scope.lstFeedbackOption.length > 0) {
                                $scope.lstFeedbackOption[0].checked = true;
                                $scope.selectedOption = $scope.lstFeedbackOption[0];
                            }

                            if ($scope.lstGroups != undefined && $scope.lstGroups.length > 1) {
                                $scope.hasPermission = true;
                            }

                        }
                        $scope.loading = false;

                        if (isFirstLoadData) {
                            //create virtual slider buttons
                            angular.element('<div class="btn btn-slider-temp">' + $scope.template.support + '</div>').appendTo('body');
                            angular.element('<div class="btn btn-slider-temp">' + $scope.template.name + '</div>').appendTo('body');
                            angular.element('<div class="btn btn-slider-temp">' + $scope.template.survey + '</div>').appendTo('body');
                            var listBtnsTemp = angular.element("body").find(".btn-slider-temp");
                            //fix slider position
                            var org = 170, activePoint = 256;
                            angular.element(window).on("scroll", function () {
                                if (!angular.element('body').hasClass('open-slider')) {
                                    var offset = org;
                                    if (angular.element(window).scrollTop() > activePoint) {
                                        offset = angular.element(window).scrollTop() - activePoint + org;
                                    }
                                    var listBtns = angular.element(".slider-widget").find(".btn-rotate-group");
                                    var totalBtnGroupWidth = 0;
                                    for (var i = 0; i < listBtns.length; i++) {
                                        var slider = angular.element(listBtns[i]).parent();
                                        var sliderGap = 5 * i;
                                        slider.css('top', offset + totalBtnGroupWidth + sliderGap + 'px');
                                        totalBtnGroupWidth += angular.element(listBtnsTemp[i]).outerWidth();
                                    }
                                }
                            });
                            //outsite click 
                            angular.element(window).on("click", function () {
                                angular.element('body').removeClass("open-slider");
                                angular.element('.slide-side').removeClass("open-slider");
                                angular.element('.slide-side .btn-rotate-group .btn').removeClass("btn-active");
                                angular.element('.slider-tabs a').removeClass("active");
                            });
                            angular.element(".slide-side, .slider-tabs").on("click", function (event) {
                                event.stopPropagation();
                            });

                            //set tabs position 
                            $timeout(function () {
                                var listBtns = angular.element(".slider-widget").find(".btn-rotate-group");
                                var btnGroupWidth = 0;
                                var totalBtnGroupWidth = 0;
                                for (var i = 0; i < listBtns.length; i++) {
                                    var slider = angular.element(listBtns[i]).parent();
                                    var sliderGap = 5 * i;
                                    slider.css({ top: slider.position().top + totalBtnGroupWidth + sliderGap + "px" });
                                    btnGroupWidth = angular.element(listBtnsTemp[i]).outerWidth();
                                    angular.element(listBtns[i]).css({ top: btnGroupWidth + "px" });
                                    totalBtnGroupWidth += btnGroupWidth;
                                }
                            });
                        }
                    }, function (error) {
                        console.log(error);
                    }).then(function () {
                        isFirstLoadData = false;
                    });
                }

                /* ------------------------------ ui execute ------------------------*/
                $scope.clickOption = function (index) {
                    angular.forEach($scope.lstFeedbackOption, function (item) {
                        item.checked = false;
                    });
                    $scope.lstFeedbackOption[index].checked = true;
                    $scope.selectedOption = $scope.lstFeedbackOption[index];
                }

                $scope.clickQuestion = function ($index, value) {
                    $scope.lstFeedbackQuestion[$index].checked = value;
                }

                // review code by using $filter
                $scope.addFile = function () {
                    if ($scope.selectFile != undefined && $scope.selectFile.name != undefined) {
                        var isExited = false;
                        angular.forEach($scope.lstAttachFiles, function (item) {
                            if ($scope.selectFile.name == item.name) {
                                isExited = true;
                            }
                        });
                        if (!isExited) {
                            $scope.errorMessage = '';
                            $scope.lstAttachFiles.push($scope.selectFile);
                            $scope.selectFile = undefined;
                            clearSelectFile();
                        }
                    }
                }

                $scope.removeFile = function ($index) {
                    $scope.errorMessage = '';
                    $scope.lstAttachFiles.splice($index, 1);
                }

                $scope.saveData = function () {
                    // submit data
                    $scope.submitted = true;
                    if (!fileService.checkSpecialCharacters($scope.lstAttachFiles)) {
                        $scope.errorMessage = 'File Name is invalid special characters.';
                        return;
                    }

                    if (!fileService.checkFileNameMaxLength($scope.lstAttachFiles)) {
                        $scope.errorMessage = 'File Name is too long.';
                        return;
                    }

                    if (!fileService.checkFileTypes($scope.lstAttachFiles)) {
                        $scope.errorMessage = 'File Type is not allowed to upload.';
                        return;
                    }

                    if (!fileService.checkTotalFileSize($scope.lstAttachFiles)) {
                        $scope.errorMessage = 'File Size must less than 25Mb.';
                        return;
                    }

                    buildSuggestionType();
                    buildQuestionYesNo();

                    // validate model			
                    if (validateBeforeSave()) {
                        $scope.errorMessage = '';
                        $scope.submitting = true;
                        feedbackService.createFeedback(appCommon.listInstance.Feedback, $scope.feedback).then(function (result) {
                            var uri = result.__metadata.uri;
                            if ($scope.lstAttachFiles.length == 0) {
                                alert('your feedback was submitted successfully.');
                                reloadData();
                                angular.element('body').removeClass('open-slider');
                                angular.element('#slide-feedback').removeClass('open-slider');
                                angular.element('#slide-feedback .btn-rotate-group .btn').removeClass('btn-active');
                                $scope.submitted = false;
                                $scope.submitting = false;
                            } else {
                                // read Files
                                fileService.loadFiles($scope.lstAttachFiles).then(function (bufferFiles) {
                                    feedbackService.uploadFiles(uri, bufferFiles).then(function (resultFiles) {
                                        alert('your feedback was submitted successfully.');
                                        reloadData();
                                        angular.element('body').removeClass('open-slider');
                                        angular.element('#slide-feedback').removeClass('open-slider');
                                        angular.element('#slide-feedback .btn-rotate-group .btn').removeClass('btn-active');
                                        $scope.submitted = false;
                                        $scope.submitting = false;
                                    }, function (errorFiles) {
                                        console.log('load file buffer error', errorFiles);
                                        $scope.submitted = false;
                                        $scope.submitting = false;
                                    });
                                }, function (errorBuffer) {
                                    console.log('load file buffer error', errorBuffer);
                                    $scope.submitted = false;
                                    $scope.submitting = false;
                                });
                            }
                        }, function (error) {
                            console.log(error);
                            $scope.submitted = false;
                            $scope.submitting = false;
                        });
                    }
                }

                $scope.resetData = function () {
                    var result = dialogConfirm();
                    if (result) {
                        reloadData();
                        angular.element('body').removeClass('open-slider');
                        angular.element('#slide-feedback').removeClass('open-slider');
                        angular.element('#slide-feedback .btn-rotate-group .btn').removeClass('btn-active');
                    }
                }

                /* ------------------------------ methods ---------------------------*/
                var reloadData = function () {
                    $scope.feedback = {
                        title: 'Feedback',
                        suggestionType: '',
                        feedbackDescription: '',
                        feedbackAnswer: '',
                        feedbackLink: {
                            description: document.title,
                            url: window.location.href
                        },
                        browser: String.format('{0} {1}', jscd.browser, jscd.browserVersion),
                        operatingSystem: String.format('{0} {1}', jscd.os, jscd.osVersion),
                        mobileDevice: jscd.mobile,
                        screenSize: jscd.screen,
                        feedbackStatus: 'New',
                        feedbackResponse: '',
                    };
                    $scope.selectFile = undefined;
                    $scope.lstAttachFiles = [];
                    $scope.submitted = false;
                    $scope.errorMessage = '';
                    loadData();

                    // reset Input
                    clearSelectFile();
                }

                var dialogConfirm = function () {
                    return confirm("Are you sure you want to cancel ?");
                }

                var buildSuggestionType = function () {
                    var suggestionType = '';
                    angular.forEach($scope.lstFeedbackOption, function (item) {
                        if (item.checked) {
                            suggestionType = item.title;
                        }
                    });
                    $scope.feedback.suggestionType = suggestionType;
                }

                var buildQuestionYesNo = function () {
                    var answer = '';
                    angular.forEach($scope.lstFeedbackQuestion, function (item, index) {
                        answer += String.format('{0}({1}) ;', item.title, item.checked ? 'Yes' : 'No');
                    });
                    $scope.feedback.feedbackAnswer = answer;
                }

                var validateBeforeSave = function () {
                    if (angular.isUndefined($scope.feedback.suggestionType) || $scope.feedback.suggestionType.length == 0) {
                        return false;
                    }
                    if (angular.isUndefined($scope.feedback.feedbackDescription) || $scope.feedback.feedbackDescription.length == 0) {
                        return false;
                    }
                    if (angular.isUndefined($scope.feedback.feedbackAnswer) || $scope.feedback.feedbackAnswer.length == 0) {
                        return false;
                    }
                    return true;
                }

                /* main */
                loadData();
            }])
})();

/* ------------------------------ Feedback App ---------------------------------------------------*/
(function () {
    'use strict';
    angular.module('feedbackApp', [
        'FeedbackApp.Common',
        'FeedbackApp.Directives',
        'FeedbackApp.Services',
		'FeedbackApp.Controllers'
    ]);
})();

/* ------------------------------ Feedback Check Browser & IOS -----------------------------------*/
navigator.sayswho = (function () {
    var ua = navigator.userAgent, tem,
    M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
    return M;
})();

(function (window) {
    {
        var unknown = '-';

        // screen
        var screenSize = '';
        if (screen.width) {
            width = (screen.width) ? screen.width : '';
            height = (screen.height) ? screen.height : '';
            screenSize += '' + width + " x " + height;
        }

        // browser
        var nVer = navigator.appVersion;
        var nAgt = navigator.userAgent;
        var browser = navigator.appName;
        var version = '' + parseFloat(navigator.appVersion);
        var majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset, verOffset, ix;

        // Opera
        if ((verOffset = nAgt.indexOf('Opera')) != -1) {
            browser = 'Opera';
            version = nAgt.substring(verOffset + 6);
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // Opera Next
        if ((verOffset = nAgt.indexOf('OPR')) != -1) {
            browser = 'Opera';
            version = nAgt.substring(verOffset + 4);
        }
            // MSIE
        else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
            browser = 'Microsoft Internet Explorer';
            version = nAgt.substring(verOffset + 5);
        }
            // Chrome
        else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
            browser = 'Chrome';
            version = nAgt.substring(verOffset + 7);
        }
            // Safari
        else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
            browser = 'Safari';
            version = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
            // Firefox
        else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
            browser = 'Firefox';
            version = nAgt.substring(verOffset + 8);
        }
            // MSIE 11+
        else if (nAgt.indexOf('Trident/') != -1) {
            browser = 'Microsoft Internet Explorer';
            version = nAgt.substring(nAgt.indexOf('rv:') + 3);
        }
            // Other browsers
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
            browser = nAgt.substring(nameOffset, verOffset);
            version = nAgt.substring(verOffset + 1);
            if (browser.toLowerCase() == browser.toUpperCase()) {
                browser = navigator.appName;
            }
        }
        // trim the version string
        if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

        majorVersion = parseInt('' + version, 10);
        if (isNaN(majorVersion)) {
            version = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }

        if (browser != undefined && browser == "Microsoft Internet Explorer") {
            if (navigator.sayswho instanceof Array) {
                version = navigator.sayswho[1];
                majorVersion = navigator.sayswho[1];
            } else {
                version = navigator.sayswho.split(' ')[1];
                majorVersion = navigator.sayswho.split(' ')[1];
            }
        }

        if ((verOffset = nAgt.indexOf('Edge')) != -1) {
            browser = 'Microsoft Edge';
            version = nAgt.substring(verOffset + 5);
        }

        // mobile version
        var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

        // cookie
        var cookieEnabled = (navigator.cookieEnabled) ? true : false;

        if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
            document.cookie = 'testcookie';
            cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
        }

        // system
        var os = unknown;
        var clientStrings = [
            { s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/ },
            { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
            { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
            { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
            { s: 'Windows Vista', r: /Windows NT 6.0/ },
            { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
            { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
            { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
            { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
            { s: 'Windows 98', r: /(Windows 98|Win98)/ },
            { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
            { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
            { s: 'Windows CE', r: /Windows CE/ },
            { s: 'Windows 3.11', r: /Win16/ },
            { s: 'Android', r: /Android/ },
            { s: 'Open BSD', r: /OpenBSD/ },
            { s: 'Sun OS', r: /SunOS/ },
            { s: 'Linux', r: /(Linux|X11)/ },
            { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
            { s: 'Mac OS X', r: /Mac OS X/ },
            { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
            { s: 'QNX', r: /QNX/ },
            { s: 'UNIX', r: /UNIX/ },
            { s: 'BeOS', r: /BeOS/ },
            { s: 'OS/2', r: /OS\/2/ },
            { s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }
        ];
        for (var id in clientStrings) {
            var cs = clientStrings[id];
            if (cs.r.test(nAgt)) {
                os = cs.s;
                break;
            }
        }

        var osVersion = unknown;

        if (/Windows/.test(os)) {
            osVersion = /Windows (.*)/.exec(os)[1];
            os = 'Windows';
        }

        switch (os) {
            case 'Mac OS X':
                osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                break;

            case 'Android':
                osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                break;

            case 'iOS':
                osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                break;
        }

        // flash (you'll need to include swfobject)
        /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
        var flashVersion = 'no check';
        if (typeof swfobject != 'undefined') {
            var fv = swfobject.getFlashPlayerVersion();
            if (fv.major > 0) {
                flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
            }
            else {
                flashVersion = unknown;
            }
        }
    }

    window.jscd = {
        screen: screenSize,
        browser: browser,
        browserVersion: version,
        browserMajorVersion: majorVersion,
        mobile: mobile,
        os: os,
        osVersion: osVersion,
        cookies: cookieEnabled,
        flashVersion: flashVersion
    };
}(this));

