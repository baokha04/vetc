(function () {
    'use strict';
    angular.module('publicisApp.services.dataService', [])
        .factory('dataService', ['$http', '$q',
        function ($http, $q) {
            // constructor
            var dataService = function () {
            }            

            // base service: GET & POST & PUT
            dataService.prototype.getData = function (url) {
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
                    q.resolve(result);
                }).error(function (result, status) {
                    q.reject(status);
                });
                return q.promise;
            };

            dataService.prototype.postData = function (url) {
                var q = $q.defer();
                $http({
                    url: url,
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json;odata=verbose",
                        "Accept": "application/json;odata=verbose",
                        "X-RequestDigest": $("#__REQUESTDIGEST").val()
                    }
                }).success(function (result) {
                    q.resolve(result);
                }).error(function (result, status) {
                    q.reject(status);
                });
                return q.promise;
            };

            // methods
            dataService.prototype.getListItems = function (listGuid, fields, filters, orderBy) {
                var siteUrl = getSiteCollection();
                var url = String.format("{0}/_api/web/lists(guid'{1}')/items", siteUrl, listGuid);

                // call base service                
                var q = $q.defer();
                this.getData(url).then(function (result) {
                    var data = result.d.results;
                    q.resolve(data);
                }, function (error) {
                    console.log(error);
                })
                return q.promise;
            };

            dataService.prototype.getFileByServerRelativeUrl = function (listName, fields, filters, orderBy) {
                var siteUrl = getSiteCollection();
                var url = String.format("{0}/_api/web/GetFolderByServerRelativeUrl('{1}/{2}/')/Files?$expand=ListItemAllFields", siteUrl, appContext.webServerRelativeUrl, listName);

                // call base service                
                var q = $q.defer();
                this.getData(url).then(function (result) {
                    var data = [];
                    angular.forEach(result.d.results, function (item) {
                        var listItem = {
                            Title: item.Title,
                            ServerRelativeUrl: item.ServerRelativeUrl,
                            Url: item.ListItemAllFields.WebPage == undefined ? '#' : item.ListItemAllFields.WebPage.Url,
                            Target: item.ListItemAllFields.IsNewTab == true ? '_blank' : ''
                        };

                        if (item.ListItemAllFields.CEP_PageId == _spPageContextInfo.pageItemId) {
                            data.push(listItem);
                        }
                    });
                    q.resolve(data);
                }, function (error) {
                    console.log(error);
                })
                return q.promise;
            };

            dataService.prototype.getFileInListByServerRelativeUrl = function (listName, fields, filters, orderBy, ascending) {
                var siteUrl = getSiteCollection();
                var strTop = '$top=1'
                var strOrderBy = '$OrderBy=Created desc';
                var url = String.format("{0}/_api/web/GetFolderByServerRelativeUrl('{1}/Lists/{2}/')/Files?$expand=ListItemAllFields", siteUrl, appContext.webServerRelativeUrl, listName);
                url = url + "&$top=1&$OrderBy=TimeCreated desc";

                // call base service                
                var q = $q.defer();
                this.getData(url).then(function (result) {
                    var data = [];
                    angular.forEach(result.d.results, function (item) {
                        var listItem = {
                            Title: item.Title,
                            HowTo_Name: item.ListItemAllFields.HowTo_Name,
                            HowTo_Description: item.ListItemAllFields.HowTo_Description,
                            ServerRelativeUrl: item.ServerRelativeUrl,
                            Url: item.ListItemAllFields.WebPage == undefined ? '#' : item.ListItemAllFields.WebPage.Url,
                            Target: item.ListItemAllFields.IsNewTab == true ? '_blank' : ''
                        };
                        data.push(listItem);
                    });
                    q.resolve(data);
                }, function (error) {
                    console.log(error);
                })
                return q.promise;
            };

            dataService.prototype.getFileByFolderRelativeUrl = function (folderUrl) {
                var siteUrl = getSiteCollection();
                var url = String.format("{0}/_api/web/GetFolderByServerRelativeUrl('{1}')/Files?$expand=ListItemAllFields", siteUrl, folderUrl);

                // call base service                
                var q = $q.defer();
                this.getData(url).then(function (result) {
                    var data = result.d.results;
                    q.resolve(data);
                }, function (error) {
                    console.log(error);
                })
                return q.promise;
            };

            dataService.prototype.getItemByUrl = function (itemUrl) {
                var url = itemUrl;

                // call base service
                var q = $q.defer();
                this.getData(url).then(function (result) {
                    var data = result.d;
                    q.resolve(data);
                }, function (error) {
                    console.log(error);
                })
                return q.promise;
            };

            dataService.prototype.getCurrentUserWithDetails = function () {
                // check if Search Center -> get data from Ignite
                var url = '';
                if (appContext.siteServerRelativeUrl.indexOf('/search') >= 0) {
                    url = appContext.rootSiteIgnite + appContext.currentUICultureName + "/_api/web/currentuser/?$expand=groups";
                } else {
                    url = appContext.siteCollectionUrl + "/_api/web/currentuser/?$expand=groups";
                }
                // call Rest Api
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
                    var isGeneral = false;
                    var data = result.d.Groups.results;
                    angular.forEach(data, function (item) {
                        if (item.Title == 'CEP General') {
                            isGeneral = true;
                        }
                    });

                    if (!isGeneral || data.length == 0) {
                        var group = {
                            Title: 'CEP General'
                        };
                        data.push(group);
                    };
                    q.resolve(data);
                }).error(function (result, status) {
                    q.reject(status);
                });
                return q.promise;
            };

            dataService.prototype.getMyProperties = function () {
                var url = _spPageContextInfo.webAbsoluteUrl + String.format('/_api/SP.UserProfiles.PeopleManager/GetMyProperties');

                // call base service		
                var q = $q.defer();
                this.getData(url).then(function (result) {
                    var data = result.d;
                    q.resolve(data);
                }, function (error) {
                    q.reject(error);
                })
                return q.promise;
            };

            dataService.prototype.getMyCountry = function () {
                var q = $q.defer();
                this.getMyProperties().then(function (result) {
                    var country = {};
                    angular.forEach(result.UserProfileProperties.results, function (item) {
                        if (item.Key === 'CEPCountry') {
                            country.Key = item.Key;
                            country.Value = item.Value;
                        }
                    });
                    q.resolve(country);
                }, function (error) {
                    console.log(error);
                });
                return q.promise;
            };

            //Get all properties of Specific User: For Office 365/SharePoint Online:        
            dataService.prototype.getPropertiesForUserAccount = function () {
                var accountName = '';
                var url = _spPageContextInfo.webAbsoluteUrl + String.format("_api/SP.UserProfiles.PeopleManager/GetPropertiesFor(accountName=@v)?@v='i:0%23.f|membership|user@domain.com");
                var q = $q.defer();
                $http({
                    url: url,
                    method: 'GET',
                    crossDomain: true,
                    headers: {
                        "Content-Type": "application/json;odata=verbose",
                        "Accept": "application/json;odata=verbose",
                        "X-RequestDigest": $("#__REQUESTDIGEST").val()
                    }
                }).success(function (result) {
                    var data = result.d.results;
                    q.resolve(data);
                }).error(function (result, status) {
                    q.reject(status);
                });
                return q.promise;
            };

            return new dataService;
        }]);
})();
