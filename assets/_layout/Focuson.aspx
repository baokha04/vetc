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
	
	<!-- Custom CSS -->
	<link rel="stylesheet" href='<%$SPUrl:~sitecollection/SiteAssets/Styles/styles.css%>' runat="server" />
	
	<!-- Custom JS -->
	<script type="text/javascript" src='<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/Style%20Library/vetc/libs/jquery/jquery.js %>" />'></script>	
	<script type="text/javascript" src='<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/Style%20Library/vetc/libs/moment/moment.min.js %>" />'></script>
	<script type="text/javascript" src='<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/Style%20Library/vetc/libs/angular/angular.min.js %>" />'></script>
</asp:Content>

<asp:Content ContentPlaceholderID="PlaceHolderMain" runat="server">	
	<div ng-app="vetc">
		<div ng-controller="menuController">
			<span>{{ model }}</span>
			<div ng-include="'/Style%20Library/vetc/apps/views/menu.html'"></div>
		</div>
	<div>
	<script type="text/javascript" src='<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/Style%20Library/vetc/apps/app.js %>" />'></script>
	
	<script type="text/javascript" src='<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/Style%20Library/vetc/apps/common/appCommon.js %>" />'></script>	
	
	<script type="text/javascript" src='<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/Style%20Library/vetc/apps/services/baseService.js %>" />'></script>
	<script type="text/javascript" src='<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/Style%20Library/vetc/apps/services/dataService.js %>" />'></script>
	<script type="text/javascript" src='<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/Style%20Library/vetc/apps/services/navigationService.js %>" />'></script>
	
	<script type="text/javascript" src='<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/Style%20Library/vetc/apps/controllers/menuController.js %>" />'></script>
	
</asp:Content>
