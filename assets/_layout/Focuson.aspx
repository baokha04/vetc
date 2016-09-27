<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">
	<SharePointWebControls:CssRegistration name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
	
	<!-- EditModePanel -->
	<PublishingWebControls:EditModePanel runat="server">
		<!-- Styles for edit mode only-->
		<SharePointWebControls:CssRegistration name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/editmode15.css %>"
			After="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
	</PublishingWebControls:EditModePanel>
	<SharePointWebControls:FieldValue id="PageStylesField" FieldName="HeaderStyleDefinitions" runat="server"/>
	
	<!-- CSS Registration -->
	<link rel='stylesheet' href='/Style%20Library/vetc/assets/css/settings.css' type='text/css' media='all' />
    <link rel='stylesheet' href='/Style%20Library/vetc/assets/css/style.css' type='text/css' media='all' />
    <link rel='stylesheet' href='/Style%20Library/vetc/assets/css/js_composer.min.css' type='text/css' media='all' />

    <link rel="icon" href="/Style%20Library/vetc/assets/upload/cropped-favicon-32x32.png" sizes="32x32" />
    <link rel="icon" href="/Style%20Library/vetc/assets/upload/cropped-favicon-192x192.png" sizes="192x192" />
    <link rel="apple-touch-icon-precomposed" href="/Style%20Library/vetc/assets/upload/cropped-favicon-180x180.png" />

    <link href="http://fonts.googleapis.com/css?family=PT+Serif%3Aitalic" rel="stylesheet" property="stylesheet" type="text/css" media="all" />
    <link href="http://fonts.googleapis.com/css?family=Montserrat%3A700%2C400" rel="stylesheet" property="stylesheet" type="text/css" media="all" />
    <link href="http://fonts.googleapis.com/css?family=Open+Sans%3A400%2C600" rel="stylesheet" property="stylesheet" type="text/css" media="all" />
    <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Abril+Fatface%3Aregular&amp;ver=4.5.3' type='text/css' media='all' />
	
	<!-- CSS Custom -->
	<link rel="stylesheet" href="/Style%20Library/vetc/assets/css/vetc.css"/>
	                                                     
	<!-- JS Registration -->
	<script type='text/javascript' src="/Style%20Library/vetc/assets/js/jquery/jquery.js"></script>
    <script type='text/javascript' src="/Style%20Library/vetc/assets/js/jquery/jquery-migrate.min.js"></script>

    <script type='text/javascript' src="/Style%20Library/vetc/assets/js/jquery.themepunch.tools.min.js"></script>
    <script type='text/javascript' src="/Style%20Library/vetc/assets/js/jquery.themepunch.revolution.min.js"></script>
    <script type="text/javascript" src="/Style%20Library/vetc/assets/js/extensions/revolution.extension.slideanims.min.js"></script>
    <script type="text/javascript" src="/Style%20Library/vetc/assets/js/extensions/revolution.extension.layeranimation.min.js"></script>
    <script type="text/javascript" src="/Style%20Library/vetc/assets/js/extensions/revolution.extension.navigation.min.js"></script>
    <script type="text/javascript" src="/Style%20Library/vetc/assets/js/extensions/revolution.extension.actions.min.js"></script>
    <script type="text/javascript" src="/Style%20Library/vetc/assets/js/extensions/revolution.extension.carousel.min.js"></script>
    <script type="text/javascript" src="/Style%20Library/vetc/assets/js/extensions/revolution.extension.kenburn.min.js"></script>
    <script type="text/javascript" src="/Style%20Library/vetc/assets/js/extensions/revolution.extension.migration.min.js"></script>
    <script type="text/javascript" src="/Style%20Library/vetc/assets/js/extensions/revolution.extension.parallax.min.js"></script>
    <script type="text/javascript" src="/Style%20Library/vetc/assets/js/extensions/revolution.extension.video.min.js"></script>

    <script type='text/javascript' src="/Style%20Library/vetc/assets/js/modernizr.js"></script>
    <script type='text/javascript' src="/Style%20Library/vetc/assets/js/jquery-blockui/jquery.blockUI.min.js"></script>
    <script type='text/javascript' src="/Style%20Library/vetc/assets/js/frontend/woocommerce.min.js"></script>
    <script type='text/javascript' src="/Style%20Library/vetc/assets/js/controller.js"></script>
    <script type='text/javascript' src="/Style%20Library/vetc/assets/js/js_composer_front.min.js"></script>
		
	<script type="text/javascript" src="/Style%20Library/vetc/libs/moment/moment.min.js"/></script>
	<script type="text/javascript" src="/Style%20Library/vetc/libs/angular/angular.min.js"/></script>
	
	<!-- Angular Application -->
	<script type="text/javascript" src="/Style%20Library/vetc/apps/app.js"/></script>
	<script type="text/javascript" src="/Style%20Library/vetc/apps/common/appCommon.js"/></script>
	<script type="text/javascript" src="/Style%20Library/vetc/apps/services/baseService.js"/></script>
	<script type="text/javascript" src="/Style%20Library/vetc/apps/services/dataService.js"/></script>
	<script type="text/javascript" src="/Style%20Library/vetc/apps/services/navigationService.js"/></script>
	<script type="text/javascript" src="/Style%20Library/vetc/apps/controllers/menuController.js"/></script>
	<script type="text/javascript" src="/Style%20Library/vetc/apps/controllers/homeController.js"/></script>
	<script type="text/javascript" src="/Style%20Library/vetc/apps/utils/utils.js"/></script>
</asp:Content>

<asp:Content ContentPlaceholderID="PlaceHolderMain" runat="server">	
	<div ng-app="vetc">
		<div ng-controller="menuController">
			<span>{{ model }}</span>
			<div ng-include="'/Style%20Library/vetc/apps/views/menu.html'"></div>
		</div>
	<div>	
</asp:Content>
