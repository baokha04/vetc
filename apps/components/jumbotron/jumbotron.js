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
        'Jumbotron.Directives',
        'FeedbackApp.Services',
		'Jumbotron.Controllers'
    ]);
})();
