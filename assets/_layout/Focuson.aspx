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
	<div class="header-content">
        <div class="header-top">
            <div class="container nz-clearfix">

                <div class="slogan nz-clearfix">
                    <div class="nz-bar"><span class="nz-icon none small icon-phone animate-false"></span><span class="header-top-label">Questions?</span> Call us: (855) 655-4356</div>
                    <div class="nz-bar"><span class="nz-icon none small icon-envelope animate-false"></span>support@ninzio.com</div>
                </div>

                <a class="top-button" href="contact-form.html">Get a Quote</a>

                <nav class="header-top-menu nz-clearfix">
                    <ul class="menu">
                        <li class="menu-item menu-item-has-children"><a href="#"><span class="mi"></span><span class="txt">Solutions</span></a>
                            <ul class="sub-menu">
                                <li class="menu-item"><a href="#"><span class="mi"></span><span class="txt">Overview</span></a></li>
                                <li class="menu-item"><a href="#"><span class="mi"></span><span class="txt">Analytics</span></a></li>
                                <li class="menu-item"><a href="#"><span class="mi"></span><span class="txt">Optimization</span></a></li>
                                <li class="menu-item"><a href="#"><span class="mi"></span><span class="txt">Applications</span></a></li>
                                <li class="menu-item"><a href="#"><span class="mi"></span><span class="txt">Cloud serices</span></a></li>
                                <li class="menu-item"><a href="#"><span class="mi"></span><span class="txt">Mobility</span></a></li>
                                <li class="menu-item"><a href="#"><span class="mi"></span><span class="txt">Collaboration</span></a></li>
                                <li class="menu-item"><a href="#"><span class="mi"></span><span class="txt">Communication</span></a></li>
                            </ul>
                        </li>
                        <li class="menu-item menu-item-has-children"><a href="#"><span class="mi"></span><span class="txt">Products</span></a>
                            <ul class="sub-menu">
                                <li class="menu-item"><a href="#"><span class="mi"></span><span class="txt">Overview</span></a></li>
                                <li class="menu-item"><a href="#"><span class="mi"></span><span class="txt">Application</span></a></li>
                                <li class="menu-item"><a href="#"><span class="mi"></span><span class="txt">MarvelClient</span></a></li>
                                <li class="menu-item"><a href="#"><span class="mi"></span><span class="txt">GreenLight</span></a></li>
                                <li class="menu-item"><a href="#"><span class="mi"></span><span class="txt">GroupExplorer</span></a></li>
                                <li class="menu-item"><a href="#"><span class="mi"></span><span class="txt">SmartChanger</span></a></li>
                                <li class="menu-item"><a href="#"><span class="mi"></span><span class="txt">Bundles</span></a></li>
                            </ul>
                        </li>
                        <li class="menu-item"><a href="#"><span class="mi"></span><span class="txt">News &amp; Events</span></a></li>
                        <li class="menu-item menu-item-has-children"><a href="#"><span class="mi"></span><span class="txt">Company</span></a>
                            <ul class="sub-menu">
                                <li class="menu-item"><a href="#"><span class="mi"></span><span class="txt">About</span></a></li>
                                <li class="menu-item"><a href="#"><span class="mi"></span><span class="txt">Mission</span></a></li>
                                <li class="menu-item"><a href="#"><span class="mi"></span><span class="txt">Partners</span></a></li>
                                <li class="menu-item"><a href="#"><span class="mi"></span><span class="txt">Career</span></a></li>
                                <li class="menu-item"><a href="#"><span class="mi"></span><span class="txt">Contact</span></a></li>
                                <li class="menu-item"><a href="#"><span class="mi"></span><span class="txt">People</span></a></li>
                                <li class="menu-item"><a href="#"><span class="mi"></span><span class="txt">Customers</span></a></li>
                            </ul>
                        </li>
                        <li class="icon-login menu-item"><a href="#"><span class="mi"></span><span class="txt">Sign In</span></a></li>
                        <li class="menu-item menu-item-language menu-item-language-current menu-item-has-children"><a href="#" onclick="return false"><span class="mi"></span><span class="txt">English</span></a>
                            <ul class="sub-menu submenu-languages">
                                <li class="menu-item menu-item-language"><a href="#">Danish</a></li>
                                <li class="menu-item menu-item-language"><a href="#">French</a></li>
                                <li class="menu-item menu-item-language"><a href="#">German</a></li>
                                <li class="menu-item menu-item-language"><a href="#">Spanish</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <div class="header-body">
            <div class="container nz-clearfix">

                <div class="logo logo-desk">
                    <a href="vetc.html" title="Focuson">
                        <img style="max-width: 149px; max-height: 41px;" src="/Style%20Library/vetc/assets/upload/logo%402.png" alt="Focuson">
                    </a>
                </div>

                <div class="logo logo-desk-fixed">
                    <a href="vetc.html" title="Focuson">
                        <img style="max-width: 149px; max-height: 41px;" src="/Style%20Library/vetc/assets/upload/logo%402.png" alt="Focuson">
                    </a>
                </div>

                <div class="search-toggle"></div>
                <div class="search">
                    <form action="#" method="get">
                        <fieldset>
                            <input type="text" name="s" data-placeholder="Search for..." value="Search for...">
                            <input type="submit" value="Search">
                        </fieldset>
                        <input type="hidden" name="lang" value="en">
                    </form>
                </div>

                <nav class="header-menu desk-menu nz-clearfix">
                    <ul id="header-menu" class="menu">
                        <li class="menu-item current-menu-item menu-item-has-children" data-mm="false" data-mmc="2"><a href="vetc.html"><span class="mi"></span><span class="txt">Home</span></a>
                            <ul class="sub-menu" style="opacity: 0; margin-top: 40px; display: none;">
                                <li class="icon-plus4 menu-item" data-mm="false" data-mmc="2"><a href="vetc.html"><span class="mi"></span><span class="txt">Home Default</span></a></li>
                                <li class="icon-plus4 menu-item" data-mm="false" data-mmc="2"><a href="home-2.html"><span class="mi"></span><span class="txt">Home Extended</span></a></li>
                                <li class="icon-plus4 menu-item" data-mm="false" data-mmc="2"><a href="home-3.html"><span class="mi"></span><span class="txt">Home Simple</span></a></li>
                                <li class="icon-plus4 menu-item" data-mm="false" data-mmc="2"><a href="home-4.html"><span class="mi"></span><span class="txt">Home Clean</span></a></li>
                                <li class="icon-plus4 menu-item" data-mm="false" data-mmc="2"><a href="home-5.html"><span class="mi"></span><span class="txt">Home One Page</span></a></li>
                                <li class="icon-plus4 menu-item" data-mm="false" data-mmc="2"><a href="home-6.html"><span class="mi"></span><span class="txt">Home With Products</span></a></li>
                                <li class="icon-plus4 menu-item" data-mm="false" data-mmc="2"><a href="home-8.html"><span class="mi"></span><span class="txt">Home Features Extended</span></a></li>
                                <li class="icon-plus4 menu-item" data-mm="false" data-mmc="2"><a href="home-9.html"><span class="mi"></span><span class="txt">Home With Contact</span></a></li>
                                <li class="icon-plus4 menu-item" data-mm="false" data-mmc="2"><a href="home-10.html"><span class="mi"></span><span class="txt">Home With Pricing</span></a></li>
                                <li class="icon-plus4 menu-item" data-mm="false" data-mmc="2"><a href="home-7.html"><span class="mi"></span><span class="txt">Home Features<span class="label" data-labelc="#f85208" style="background-color: #f85208">Animated</span></span></a></li>
                            </ul>
                        </li>
                        <li class="menu-item menu-item-has-children" data-mm="true" data-mmc="3"><a href="#"><span class="mi"></span><span class="txt">Headers</span></a>
                            <ul class="sub-menu" style="opacity: 0; margin-top: 40px; display: none;">
                                <li class="icon-star5 menu-item menu-item-has-children" data-mm="false" data-mmc="2"><a href="#"><span class="mi"></span><span class="txt">Headers</span></a>
                                    <ul class="sub-menu">
                                        <li class="icon-minus4 menu-item" data-mm="false" data-mmc="2"><a href="vetc.html"><span class="mi"></span><span class="txt">Header Version 1</span></a></li>
                                        <li class="icon-minus4 menu-item" data-mm="false" data-mmc="2"><a href="header2.html"><span class="mi"></span><span class="txt">Header Version 2</span></a></li>
                                        <li class="icon-minus4 menu-item" data-mm="false" data-mmc="2"><a href="header3.html"><span class="mi"></span><span class="txt">Header Version 3</span></a></li>
                                        <li class="icon-minus4 menu-item" data-mm="false" data-mmc="2"><a href="header4"><span class="mi"></span><span class="txt">Header Version 4</span></a></li>
                                        <li class="icon-minus4 menu-item" data-mm="false" data-mmc="2"><a href="header5.html"><span class="mi"></span><span class="txt">Header Version 5</span></a></li>
                                    </ul>
                                </li>
                                <li class="icon-paperplane2 menu-item menu-item-has-children" data-mm="false" data-mmc="2"><a href="#"><span class="mi"></span><span class="txt">Headers</span></a>
                                    <ul class="sub-menu">
                                        <li class="icon-minus4 menu-item" data-mm="false" data-mmc="2"><a href="header6.html"><span class="mi"></span><span class="txt">Header Version 6</span></a></li>
                                        <li class="icon-minus4 menu-item" data-mm="false" data-mmc="2"><a href="header7.html"><span class="mi"></span><span class="txt">Header Version 7</span></a></li>
                                        <li class="icon-minus4 menu-item" data-mm="false" data-mmc="2"><a href="header8.html"><span class="mi"></span><span class="txt">Header Version 8</span></a></li>
                                        <li class="icon-minus4 menu-item" data-mm="false" data-mmc="2"><a href="header9.html"><span class="mi"></span><span class="txt">Header Version 9</span></a></li>
                                        <li class="icon-minus4 menu-item" data-mm="false" data-mmc="2"><a href="header10.html"><span class="mi"></span><span class="txt">Header Version 10 (Under Slider)</span></a></li>
                                    </ul>
                                </li>
                                <li class="icon-heart5 menu-item menu-item-has-children" data-mm="false" data-mmc="2"><a href="#"><span class="mi"></span><span class="txt">Page Titles</span></a>
                                    <ul class="sub-menu">
                                        <li class="icon-minus4 menu-item" data-mm="false" data-mmc="2"><a href="page-title-version-1.html"><span class="mi"></span><span class="txt">Page Title Version 1</span></a></li>
                                        <li class="icon-minus4 menu-item" data-mm="false" data-mmc="2"><a href="page-title-version-2.html"><span class="mi"></span><span class="txt">Page Title Version 2</span></a></li>
                                        <li class="icon-minus4 menu-item" data-mm="false" data-mmc="2"><a href="page-title-version-3.html"><span class="mi"></span><span class="txt">Page Title Version 3</span></a></li>
                                        <li class="icon-minus4 menu-item" data-mm="false" data-mmc="2"><a href="page-title-version-4.html"><span class="mi"></span><span class="txt">Page Title Version 4</span></a></li>
                                        <li class="icon-minus4 menu-item" data-mm="false" data-mmc="2"><a href="page-title-version-5.html"><span class="mi"></span><span class="txt">Page Title Version 5</span></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item menu-item-has-children" data-mm="false" data-mmc="2"><a href="#"><span class="mi"></span><span class="txt">Sliders</span></a>
                            <ul class="sub-menu">
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="vetc.html"><span class="mi"></span><span class="txt">Revolution Slider 1</span></a></li>
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="slider2.html"><span class="mi"></span><span class="txt">Revolution Slider 2</span></a></li>
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="slider3.html"><span class="mi"></span><span class="txt">Revolution Slider 3</span></a></li>
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="slider4.html"><span class="mi"></span><span class="txt">Revolution Slider 4</span></a></li>
                            </ul>
                        </li>
                        <li class="menu-item menu-item-has-children" data-mm="false" data-mmc="2"><a href="#"><span class="mi"></span><span class="txt">Pages</span></a>
                            <ul class="sub-menu">
                                <li class="icon-airplane2 menu-item" data-mm="false" data-mmc="2"><a href="about-us.html"><span class="mi"></span><span class="txt">About Us</span></a></li>
                                <li class="icon-dropbox menu-item" data-mm="false" data-mmc="2"><a href="about-us-2.html"><span class="mi"></span><span class="txt">About Us 2</span></a></li>
                                <li class="icon-flag2 menu-item" data-mm="false" data-mmc="2"><a href="about-us-3.html"><span class="mi"></span><span class="txt">About Us 3</span></a></li>
                                <li class="icon-leaf2 menu-item" data-mm="false" data-mmc="2"><a href="services.html"><span class="mi"></span><span class="txt">Services</span></a></li>
                                <li class="icon-suitcase menu-item" data-mm="false" data-mmc="2"><a href="services-2.html"><span class="mi"></span><span class="txt">Services 2</span></a></li>
                                <li class="icon-database menu-item" data-mm="false" data-mmc="2"><a href="services-3.html"><span class="mi"></span><span class="txt">Services 3</span></a></li>
                                <li class="icon-bolt menu-item" data-mm="false" data-mmc="2"><a href="pricing-plans.html"><span class="mi"></span><span class="txt">Pricing Plans</span></a></li>
                                <li class="icon-paperplane2 menu-item" data-mm="false" data-mmc="2"><a href="contact-form.html"><span class="mi"></span><span class="txt">Contacts</span></a></li>
                                <li class="icon-microphone menu-item" data-mm="false" data-mmc="2"><a href="contacts-2.html"><span class="mi"></span><span class="txt">Contacts 2</span></a></li>
                                <li class="icon-cone menu-item" data-mm="false" data-mmc="2"><a href="contacts-3.html"><span class="mi"></span><span class="txt">Contacts 3</span></a></li>
                                <li class="icon-directions menu-item" data-mm="false" data-mmc="2"><a href="404error.html"><span class="mi"></span><span class="txt">404 Not Found</span></a></li>
                                <li class="icon-megaphone2 menu-item" data-mm="false" data-mmc="2"><a href="blank-page.html"><span class="mi"></span><span class="txt">Coming Soon</span></a></li>
                            </ul>
                        </li>
                        <li class="menu-item menu-item-has-children" data-mm="false" data-mmc="2"><a href="blog.html"><span class="mi"></span><span class="txt">Blog</span></a>
                            <ul class="sub-menu">
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="blog2.html"><span class="mi"></span><span class="txt">Small</span></a></li>
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="blog3.html"><span class="mi"></span><span class="txt">Medium</span></a></li>
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="blog4.html"><span class="mi"></span><span class="txt">Large</span></a></li>
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="blog5.html"><span class="mi"></span><span class="txt">List</span></a></li>
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="blog6.html"><span class="mi"></span><span class="txt">Standard</span></a></li>
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="blog7.html"><span class="mi"></span><span class="txt">Standard With Sidebar</span></a></li>
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="blog8.html"><span class="mi"></span><span class="txt">Sidebar Active</span></a></li>
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="retina-theme-today.html"><span class="mi"></span><span class="txt">Single Post</span></a></li>
                            </ul>
                        </li>
                        <li class="menu-item menu-item-has-children" data-mm="false" data-mmc="2"><a href="projects.html"><span class="mi"></span><span class="txt">Projects</span></a>
                            <ul class="sub-menu">
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="projects2.html"><span class="mi"></span><span class="txt">Small Standard</span></a></li>
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="projects3.html"><span class="mi"></span><span class="txt">Medium Standard</span></a></li>
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="projects4.html"><span class="mi"></span><span class="txt">Large Standard</span></a></li>
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="projects5.html"><span class="mi"></span><span class="txt">Small Image</span></a></li>
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="projects6.html"><span class="mi"></span><span class="txt">Medium Image</span></a></li>
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="projects7.html"><span class="mi"></span><span class="txt">Large Image</span></a></li>
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="projects8.html"><span class="mi"></span><span class="txt">Small Image No Gap</span></a></li>
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="projects9.html"><span class="mi"></span><span class="txt">Medium Image No Gap</span></a></li>
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="great-happy-woman.html"><span class="mi"></span><span class="txt">Single Project Simple</span></a></li>
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="creative-repairing-web-2.html"><span class="mi"></span><span class="txt">Single Project Gallery</span></a></li>
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="painting-and-repairing.html"><span class="mi"></span><span class="txt">Single Project Extended</span></a></li>
                            </ul>
                        </li>
                        <li class="menu-item menu-item-has-children" data-mm="false" data-mmc="2"><a href="shop.html"><span class="mi"></span><span class="txt">Shop</span></a>
                            <ul class="sub-menu">
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="shop2.html"><span class="mi"></span><span class="txt">Small</span></a></li>
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="shop3.html"><span class="mi"></span><span class="txt">Medium</span></a></li>
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="shop4.html"><span class="mi"></span><span class="txt">Sidebar Left</span></a></li>
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="shop5.html"><span class="mi"></span><span class="txt">Sidebar Right</span></a></li>
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="shop6.html"><span class="mi"></span><span class="txt">Single Product Sidebar Left</span></a></li>
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="shop7.html"><span class="mi"></span><span class="txt">Single Product Sidebar Right</span></a></li>
                                <li class="menu-item" data-mm="false" data-mmc="2"><a href="shop8.html"><span class="mi"></span><span class="txt">Single Product No Sidebar</span></a></li>
                            </ul>
                        </li>
                        <li class="menu-item menu-item-has-children" data-mm="true" data-mmc="5"><a href="#"><span class="mi"></span><span class="txt">Elements</span></a>
                            <ul class="sub-menu">
                                <li class="menu-item menu-item-has-children" data-mm="false" data-mmc="2"><a href="#"><span class="mi"></span><span class="txt">Elements</span></a>
                                    <ul class="sub-menu">
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-4.html"><span class="mi"></span><span class="txt">Accordion</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-1.html"><span class="mi"></span><span class="txt">Alert Messages</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-2.html"><span class="mi"></span><span class="txt">Animated Columns</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-1.html"><span class="mi"></span><span class="txt">Button</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-7.html"><span class="mi"></span><span class="txt">Carousel</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-5.html"><span class="mi"></span><span class="txt">Charts</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-5.html"><span class="mi"></span><span class="txt">Circle Progress</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-2.html"><span class="mi"></span><span class="txt">Clients</span></a></li>
                                    </ul>
                                </li>
                                <li class="menu-item menu-item-has-children" data-mm="false" data-mmc="2"><a href="#"><span class="mi"></span><span class="txt">Elements</span></a>
                                    <ul class="sub-menu">
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-2.html"><span class="mi"></span><span class="txt">Content Boxes</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-5.html"><span class="mi"></span><span class="txt">Counters</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements.html"><span class="mi"></span><span class="txt">Gap</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-7.html"><span class="mi"></span><span class="txt">Gallery</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-6.html"><span class="mi"></span><span class="txt">Google Map</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-1.html"><span class="mi"></span><span class="txt">Icons</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-1.html"><span class="mi"></span><span class="txt">Image Heading</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-1.html"><span class="mi"></span><span class="txt">Icon List</span></a></li>
                                    </ul>
                                </li>
                                <li class="menu-item menu-item-has-children" data-mm="false" data-mmc="2"><a href="#"><span class="mi"></span><span class="txt">Elements</span></a>
                                    <ul class="sub-menu">
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-5.html"><span class="mi"></span><span class="txt">Icon Progress</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-1.html"><span class="mi"></span><span class="txt">Mailchimp</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-7.html"><span class="mi"></span><span class="txt">Media Slider</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-3.html"><span class="mi"></span><span class="txt">Ordinary Tables</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-1.html"><span class="mi"></span><span class="txt">Popup Message</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-3.html"><span class="mi"></span><span class="txt">Pricing Table</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-2.html"><span class="mi"></span><span class="txt">Persons</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-5.html"><span class="mi"></span><span class="txt">Progress Bar</span></a></li>
                                    </ul>
                                </li>
                                <li class="menu-item menu-item-has-children" data-mm="false" data-mmc="2"><a href="#"><span class="mi"></span><span class="txt">Elements</span></a>
                                    <ul class="sub-menu">
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-8.html"><span class="mi"></span><span class="txt">Recent Projects</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-8.html"><span class="mi"></span><span class="txt">Recent Posts</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-8.html"><span class="mi"></span><span class="txt">Recent Tweets</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-2.html"><span class="mi"></span><span class="txt">Row</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-1.html"><span class="mi"></span><span class="txt">Separator</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-7.html"><span class="mi"></span><span class="txt">Slick Carousel</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-1.html"><span class="mi"></span><span class="txt">Social Links</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-7.html"><span class="mi"></span><span class="txt">SoundCloud</span></a></li>
                                    </ul>
                                </li>
                                <li class="menu-item menu-item-has-children" data-mm="false" data-mmc="2"><a href="#"><span class="mi"></span><span class="txt">Elements</span></a>
                                    <ul class="sub-menu">
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-4.html"><span class="mi"></span><span class="txt">Tabs</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-2.html"><span class="mi"></span><span class="txt">Taglines</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-2.html"><span class="mi"></span><span class="txt">Testimonials</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-5.html"><span class="mi"></span><span class="txt">Timer</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-7.html"><span class="mi"></span><span class="txt">Video Player</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-7.html"><span class="mi"></span><span class="txt">Vimeo</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-9.html"><span class="mi"></span><span class="txt">Woo Elements</span></a></li>
                                        <li class="menu-item" data-mm="false" data-mmc="2"><a href="elements-7.html"><span class="mi"></span><span class="txt">Youtube</span></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
				
	<div ng-app="vetc">
		<div ng-controller="menuController">
			<span>{{ model }}</span>
			<div ng-include="'/Style%20Library/vetc/apps/views/menu.html'"></div>
		</div>
	<div>	
</asp:Content>
