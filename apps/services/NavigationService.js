(function () {
    angular.module('vetc.services.navigationService', [])
	.factory('navigationService', ['$http', '$q', '$filter', 'appCommon',
        function ($http, $q, $filter, appCommon, appSetting) {
            // constructor
            var navigationService = function () {
            };            

            /*
            * Get taxonomy terms by CSOM
            * @termStoreName: term store name
            * @termGroupName: term group name
            * @termSetName: termset name            
            */
            navigationService.prototype.getTerms = function (termStoreName, termGroupName, termSetName) {
                var q = $q.defer();
                var scriptbase = _spPageContextInfo.webServerRelativeUrl + "/_layouts/15/";
                $.getScript(scriptbase + "SP.js", function () {
                    $.getScript(scriptbase + "SP.Taxonomy.js", function () {
                        // Current Context
                        var context = SP.ClientContext.get_current();
                        // Current Taxonomy Session
                        var taxSession = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
                        // Term Stores
                        var termStores = taxSession.get_termStores();
                        // Name of the Term Store from which to get the Terms.
                        termStore = termStores.getByName(termStoreName);
                        // Term Group
                        var termGroup = termStore.get_groups().getByName(termGroupName ? termGroupName : consts.taxonomy.rootTermGroupName);
                        // Term Set
                        var termSet = termGroup.get_termSets().getByName(termSetName);

                        var terms = termSet.getAllTerms();
                        var requests = 'Include(IsRoot, Labels, TermsCount, Description, CustomSortOrder, Id, IsAvailableForTagging, Name, PathOfTerm, Parent, TermSet.Name, IsPinned, IsDeprecated, LocalCustomProperties, CustomProperties)';
                        context.load(terms, requests);

                        var tempList = [];
                        context.executeQueryAsync(function () {
                            var termEnumerator = terms.get_data().length > 0 ? terms.getEnumerator() : terms.$5_0.$1t_0.getEnumerator();

                            while (termEnumerator.moveNext()) {
                                var currentTerm = termEnumerator.get_current();
                                var isRoot = currentTerm.get_isRoot();
                                var parent = currentTerm.get_parent();
                                var name = currentTerm.get_name();
                                var text = currentTerm.get_name();
                                var description = currentTerm.get_description();
                                var id = currentTerm.get_id().ToSerialized();
                                var parentId = '';
                                var parentName = '';
                                if (!isRoot) {
                                    parentId = parent.get_id().ToSerialized();
                                    parentName = parent.get_name();
                                };
                                var path = currentTerm.get_pathOfTerm();
                                var isPinned = currentTerm.get_isPinned();
                                var isDeprecated = currentTerm.get_isDeprecated();
                                var level = path.split(';').length;

                                // get SimpleLink                                
                                var url = currentTerm.get_localCustomProperties()['_Sys_Nav_SimpleLinkUrl'];
                                if (!url || url == undefined || url == '' || url == '/') {
                                    url = '#';
                                } else if (url.length > 0) {
                                    if (appContext.currentUICultureName != 'en-us') {
                                        url = url.replace('en-us', appContext.currentUICultureName);
                                    }
                                };                                

                                // get GlobalNavigationTaxonomyProvider || CurrentNavigationTaxonomyProvider
                                var navigationProvider = '';
                                var _Sys_Nav_ExcludedProviders = currentTerm.get_localCustomProperties()['_Sys_Nav_ExcludedProviders'];
                                if (_Sys_Nav_ExcludedProviders != undefined && _Sys_Nav_ExcludedProviders.length > 0) {
                                    _Sys_Nav_ExcludedProviders = _Sys_Nav_ExcludedProviders.replace(/"/g, '');
                                }

                                if (_Sys_Nav_ExcludedProviders == undefined) {
                                    navigationProvider = 'ALL';
                                } else if (_Sys_Nav_ExcludedProviders == 'CurrentNavigationTaxonomyProvider') {
                                    navigationProvider = 'GlobalNavigationTaxonomyProvider';
                                } else if (_Sys_Nav_ExcludedProviders == 'GlobalNavigationTaxonomyProvider') {
                                    navigationProvider = 'CurrentNavigationTaxonomyProvider';
                                } else {
                                    navigationProvider = '';
                                };

                                // get custom Sort Order
                                var customSortOrder = currentTerm.get_customSortOrder();

                                var termInJson = {
                                    isRoot: isRoot,
                                    name: name,
                                    text: text,
                                    description: description,
                                    id: id,
                                    path: path,
                                    parentId: parentId,
                                    parentName: parentName,
                                    isPinned: isPinned,
                                    isDeprecated: isDeprecated,
                                    level: level,
                                    url: url,
                                    isNewTab: isNewTab,
                                    permission: permission,
                                    navigationProvider: navigationProvider,
                                    customSortOrder: customSortOrder,
                                    children: []
                                };

                                tempList.push(termInJson);
                            };
                            //Build hierachy
                            var hierachy = [];
                            angular.forEach(tempList, function (termItem, index) {
                                if (termItem.level > 1) {
                                    var parentId = termItem.parentId;
                                    var parentTerm = $filter('filter')(tempList, { id: parentId }, true)[0];
                                    parentTerm.children.push(termItem);
                                } else {
                                    hierachy.push(termItem);
                                }
                            });

                            // Custom Sort Order
                            angular.forEach(hierachy, function (nodeItem, index) {
                                if (nodeItem.customSortOrder) {
                                    var sortOrder = nodeItem.customSortOrder.split(':');
                                    nodeItem.children.sort(function (a, b) {
                                        var indexA = sortOrder.indexOf(a.id);
                                        var indexB = sortOrder.indexOf(b.id);
                                        if (indexA > indexB) {
                                            return 1;
                                        } else if (indexA < indexB) {
                                            return -1;
                                        }
                                        return 0;
                                    });

                                }
                                sortArrrayRecursive(nodeItem);
                            });

                            q.resolve(hierachy);
                        });
                    });
                });
                return q.promise;
            };

            var sortArrrayRecursive = function (nodeItem) {
                angular.forEach(nodeItem.children, function (nodeItem1, index1) {
                    if (nodeItem1.customSortOrder) {
                        var sortOrder = nodeItem1.customSortOrder.split(':');
                        nodeItem1.children.sort(function (c, d) {
                            var indexC = sortOrder.indexOf(c.id);
                            var indexD = sortOrder.indexOf(d.id);
                            if (indexC > indexD) {
                                return 1;
                            } else if (indexC < indexD) {
                                return -1;
                            }
                            return 0;
                        });
                    }
                    sortArrrayRecursive(nodeItem1);
                });
            };
            
            /*
            * Get taxonomy terms by CSOM
            * @termStoreName: term store name
            * @termGroupName: term group name
            * @termSetName: termset name
            * @navigationProvider: GlobalNavigationTaxonomyProvider || CurrentNavigationTaxonomyProvider            
            */
            navigationService.prototype.getNavigationByTerms = function (termStoreName, termGroupName, termSetName, navigationProvider) {                
                var q = $q.defer();
                this.getTerms(termStoreName, termGroupName, termSetName).then(function (result) {
                    // hide children
                    hideChildrenTerms(result, navigationProvider);

                    // get terms
                    var terms = [];
                    angular.forEach(result, function (t) {
                        if (t.navigationProvider == 'ALL' || t.navigationProvider == navigationProvider) {
                            terms.push(t);
                        };
                    });
                    q.resolve(terms);
                }, function (error) {
                    q.reject(error);
                });
                return q.promise;
            };

            var hideChildrenTerms = function (terms, navigationProvider) {
                angular.forEach(terms, function (t) {
                    if (t.navigationProvider != 'ALL' && t.navigationProvider != navigationProvider) {
                        t.children = [];
                    }

                    // hide children
                    if (t.children.length > 0) {
                        hideChildrenTerms(t.children);
                    }
                });
            };

            /*
            * Get Global Navigation or Current Navigation by Rest Api
            * @termStoreName: term store name
            * @termGroupName: term group name
            * @termSetName: termset name
            * @navigationTaxonomyProvider: GlobalNavigationSwitchableProvider or CurrentNavigationTaxonomyProvider
            */
            navigationService.prototype.getNavigationByRestApi = function (termStoreName, termGroupName, termSetName, navigationTaxonomyProvider) {

                // check if Search Center -> get data from Ignite
                var url = '';
                if (appContext.isRootSiteIgnite) {
                    url = appContext.webAbsoluteUrl + String.format("/_api/navigation/menustate?mapprovidername='{0}'", navigationTaxonomyProvider);
                } else {
                    url = appContext.rootSiteIgnite + appContext.currentUICultureName + String.format("/_api/navigation/menustate?mapprovidername='{0}'", navigationTaxonomyProvider);
                };

                // call Rest Api
                var q = $q.defer();
                $http({
                    url: url,
                    type: "GET",
                    contentType: "application/json;odata=verbose",
                    headers: { "accept": "application/json;odata=verbose" },
                }).success(function (result) {
                    var menuItems = [];
                    var termLevel = 0;
                    angular.forEach(result.d.MenuState.Nodes.results, function (item) {
                        menuItems = getChildrenNavigation(result.d.MenuState.Nodes.results, termLevel);
                    });
                    q.resolve(menuItems);
                }).error(function (error, status) {
                    q.reject(status);
                });
                return q.promise;
            };

            var getChildrenNavigation = function (results, termLevel) {
                var menuItems = [];
                termLevel = termLevel + 1;

                if (results.length > 0) {
                    angular.forEach(results, function (item) {
                        // get Simple Link
                        var url = item.SimpleUrl;
                        if (!url || url == undefined || url == '' || url == '/') {
                            url = '#';
                        } else if (url.length > 0) {
                            if (appContext.currentUICultureName != 'en-us') {
                                url = url.replace('en-us', appContext.currentUICultureName);
                            }
                        };

                        // get IsHidden
                        var isHidden = item.IsHidden;

                        // build Term in JSON
                        var termInJson = {
                            id: item.Key,
                            name: item.Title,
                            text: item.Title,
                            isHidden: item.IsHidden,
                            friendlyUrlSegment: item.FriendlyUrlSegment,
                            level: termLevel,
                            url: url,
                            children: getChildrenNavigation(item.Nodes.results, termLevel),
                        };

                        if (!isHidden) {
                            menuItems.push(termInJson);
                        };
                    });
                };
                return menuItems;
            };
			
            return new navigationService;
        }]);
})();