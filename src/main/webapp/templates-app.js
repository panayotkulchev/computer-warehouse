angular.module('templates-app', ['about/about.tpl.html', 'clients/clients.tpl.html', 'confirm-modal.tpl.html', 'deliveries/deliveries.tpl.html', 'goods/goods.tpl.html', 'home/home.tpl.html', 'invoices/invoices.tpl.html', 'partners/partners.tpl.html', 'pricelist/pricelist.tpl.html', 'reports/reports.tpl.html', 'sales/sales.tpl.html', 'tmp/deliveries/deliveries.tpl.html', 'translators/translators.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row\">\n" +
    "    <h1 class=\"page-header\">\n" +
    "        The Elevator Pitch\n" +
    "        <small>For the lazy and impatient.</small>\n" +
    "    </h1>\n" +
    "    <p>\n" +
    "        <code>ng-boilerplate</code> is an opinionated kickstarter for web\n" +
    "        development projects. It's an attempt to create a simple starter for new\n" +
    "        web sites and apps: just download it and start coding. The goal is to\n" +
    "        have everything you need to get started out of the box; of course it has\n" +
    "        slick styles and icons, but it also has a best practice directory structure\n" +
    "        to ensure maximum code reuse. And it's all tied together with a robust\n" +
    "        build system chock-full of some time-saving goodness.\n" +
    "    </p>\n" +
    "\n" +
    "    <h2>Why?</h2>\n" +
    "\n" +
    "    <p>\n" +
    "        Because my team and I make web apps, and\n" +
    "        last year AngularJS became our client-side framework of choice. We start\n" +
    "        websites the same way every time: create a directory structure, copy and\n" +
    "        ever-so-slightly tweak some config files from an older project, and yada\n" +
    "        yada, etc., and so on and so forth. Why are we repeating ourselves? We wanted a starting point; a set of\n" +
    "        best practices that we could identify our projects as embodying and a set of\n" +
    "        time-saving wonderfulness, because time is money.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "        There are other similar projects out there, but none of them suited our\n" +
    "        needs. Some are awesome but were just too much, existing more as reference\n" +
    "        implementations, when we really just wanted a kickstarter. Others were just\n" +
    "        too little, with puny build systems and unscalable architectures. So we\n" +
    "        designed <code>ng-boilerplate</code> to be just right.\n" +
    "    </p>\n" +
    "\n" +
    "    <h2>What ng-boilerplate Is Not</h2>\n" +
    "\n" +
    "    <p>\n" +
    "        This is not an example of an AngularJS app. This is a kickstarter. If\n" +
    "        you're looking for an example of what a complete, non-trivial AngularJS app\n" +
    "        that does something real looks like, complete with a REST backend and\n" +
    "        authentication and authorization, then take a look at <code><a\n" +
    "            href=\"https://github.com/angular-app/angular-app/\">angular-app</a></code>,\n" +
    "        which does just that, and does it well.\n" +
    "    </p>\n" +
    "\n" +
    "    <h1 class=\"page-header\">\n" +
    "        So What's Included?\n" +
    "        <small>I'll try to be more specific than \"awesomeness\".</small>\n" +
    "    </h1>\n" +
    "    <p>\n" +
    "        This section is just a quick introduction to all the junk that comes\n" +
    "        pre-packaged with <code>ng-boilerplate</code>. For information on how to\n" +
    "        use it, see the <a\n" +
    "            href=\"https://github.com/joshdmiller/ng-boilerplate#readme\">project page</a> at\n" +
    "        GitHub.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "        The high-altitude view is that the base project includes\n" +
    "        <a href=\"http://getbootstrap.com\">Twitter Bootstrap</a>\n" +
    "        styles to quickly produce slick-looking responsive web sites and apps. It also\n" +
    "        includes <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>,\n" +
    "        a collection of native AngularJS directives based on the aforementioned\n" +
    "        templates and styles. It also includes <a href=\"http://fortawesome.github.com/Font-Awesome/\">Font Awesome</a>,\n" +
    "        a wicked-cool collection of font-based icons that work swimmingly with all\n" +
    "        manner of web projects; in fact, all images on the site are actually font-\n" +
    "        based icons from Font Awesome. Neat! Lastly, this also includes\n" +
    "        <a href=\"http://joshdmiller.github.com/angular-placeholders\">Angular Placeholders</a>,\n" +
    "        a set of pure AngularJS directives to do client-side placeholder images and\n" +
    "        text to make mocking user interfaces super easy.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "        And, of course, <code>ng-boilerplate</code> is built on <a href=\"http://angularjs.org\">AngularJS</a>,\n" +
    "        by the far the best JavaScript framework out there! But if you don't know\n" +
    "        that already, then how did you get here? Well, no matter - just drink the\n" +
    "        Kool Aid. Do it. You know you want to.\n" +
    "    </p>\n" +
    "\n" +
    "    <h2>Twitter Bootstrap</h2>\n" +
    "\n" +
    "    <p>\n" +
    "        You already know about this, right? If not, <a\n" +
    "            href=\"http://getbootstrap.com\">hop on over</a> and check it out; it's\n" +
    "        pretty sweet. Anyway, all that wonderful stylistic goodness comes built in.\n" +
    "        The LESS files are available for you to import in your main stylesheet as\n" +
    "        needed - no excess, no waste. There is also a dedicated place to override\n" +
    "        variables and mixins to suit your specific needs, so updating to the latest\n" +
    "        version of Bootstrap is as simple as:\n" +
    "    </p>\n" +
    "\n" +
    "    <pre>$ cd vendor/twitter-bootstrap<br/>$ git pull origin master</pre>\n" +
    "\n" +
    "    <p>\n" +
    "        Boom! And victory is ours.\n" +
    "    </p>\n" +
    "\n" +
    "    <h2>UI Bootstrap</h2>\n" +
    "\n" +
    "    <p>\n" +
    "        What's better than Bootstrap styles? Bootstrap directives! The fantastic <a\n" +
    "            href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>\n" +
    "        library contains a set of native AngularJS directives that are endlessly\n" +
    "        extensible. You get the tabs, the tooltips, the accordions. You get your\n" +
    "        carousel, your modals, your pagination. And <i>more</i>.\n" +
    "        How about a quick demo?\n" +
    "    </p>\n" +
    "\n" +
    "    <ul>\n" +
    "        <li class=\"dropdown\">\n" +
    "            <a class=\"btn dropdown-toggle\">\n" +
    "                Click me!\n" +
    "            </a>\n" +
    "            <ul class=\"dropdown-menu\">\n" +
    "                <li ng-repeat=\"choice in dropdownDemoItems\">\n" +
    "                    <a>{{choice}}</a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <p>\n" +
    "        Oh, and don't include jQuery;\n" +
    "        you don't need it.\n" +
    "        This is better.\n" +
    "        Don't be one of those people. <sup>*</sup>\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "        <small><sup>*</sup> Yes, there are exceptions.</small>\n" +
    "    </p>\n" +
    "\n" +
    "    <h2>Font Awesome</h2>\n" +
    "\n" +
    "    <p>\n" +
    "        Font Awesome has earned its label. It's a set of open (!) icons that come\n" +
    "        distributed as a font (!) for super-easy, lightweight use. Font Awesome\n" +
    "        works really well with Twitter Bootstrap, and so fits right in here.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "        There is not a single image on this site. All of the little images and icons\n" +
    "        are drawn through Font Awesome! All it takes is a little class:\n" +
    "    </p>\n" +
    "\n" +
    "    <pre>&lt;i class=\"fa fa-flag\"&gt;&lt/i&gt</pre>\n" +
    "\n" +
    "    <p>\n" +
    "        And you get one of these: <i class=\"fa fa-flag\"> </i>. Neat!\n" +
    "    </p>\n" +
    "\n" +
    "    <h2>Placeholders</h2>\n" +
    "\n" +
    "    <p>\n" +
    "        Angular Placeholders is a simple library for mocking up text and images. You\n" +
    "        can automatically throw around some \"lorem ipsum\" text:\n" +
    "    </p>\n" +
    "\n" +
    "    <pre>&lt;p ph-txt=\"3s\"&gt;&lt;/p&gt;</pre>\n" +
    "\n" +
    "    <p>\n" +
    "        Which gives you this:\n" +
    "    </p>\n" +
    "\n" +
    "    <div class=\"pre\">\n" +
    "        &lt;p&gt;\n" +
    "        <p ph-txt=\"3s\"></p>\n" +
    "        &lt;/p&gt;\n" +
    "    </div>\n" +
    "\n" +
    "    <p>\n" +
    "        Even more exciting, you can also create placeholder images, entirely\n" +
    "        client-side! For example, this:\n" +
    "    </p>\n" +
    "  \n" +
    "  <pre>\n" +
    "&lt;img ph-img=\"50x50\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-polaroid\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-rounded\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-circle\" /&gt;</pre>\n" +
    "\n" +
    "    <p>\n" +
    "        Gives you this:\n" +
    "    </p>\n" +
    "\n" +
    "    <div>\n" +
    "        <img ph-img=\"50x50\"/>\n" +
    "        <img ph-img=\"50x50\" class=\"img-polaroid\"/>\n" +
    "        <img ph-img=\"50x50\" class=\"img-rounded\"/>\n" +
    "        <img ph-img=\"50x50\" class=\"img-circle\"/>\n" +
    "    </div>\n" +
    "\n" +
    "    <p>\n" +
    "        Which is awesome.\n" +
    "    </p>\n" +
    "\n" +
    "    <h1 class=\"page-header\">\n" +
    "        The Roadmap\n" +
    "        <small>Really? What more could you want?</small>\n" +
    "    </h1>\n" +
    "\n" +
    "    <p>\n" +
    "        This is a project that is <i>not</i> broad in scope, so there's not really\n" +
    "        much of a wish list here. But I would like to see a couple of things:\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "        I'd like it to be a little simpler. I want this to be a universal starting\n" +
    "        point. If someone is starting a new AngularJS project, she should be able to\n" +
    "        clone, merge, or download its source and immediately start doing what she\n" +
    "        needs without renaming a bunch of files and methods or deleting spare parts\n" +
    "        ... like this page. This works for a first release, but I just think there\n" +
    "        is a little too much here right now.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "        I'd also like to see a simple generator. Nothing like <a href=\"yeoman.io\">\n" +
    "        Yeoman</a>, as there already is one of those, but just something that\n" +
    "        says \"I want Bootstrap but not Font Awesome and my app is called 'coolApp'.\n" +
    "        Gimme.\" Perhaps a custom download builder like UI Bootstrap\n" +
    "        has. Like that. Then again, perhaps some Yeoman generators wouldn't be out\n" +
    "        of line. I don't know. What do you think?\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "        Naturally, I am open to all manner of ideas and suggestions. See the \"Can I\n" +
    "        Help?\" section below.\n" +
    "    </p>\n" +
    "\n" +
    "    <h2>The Tactical To Do List</h2>\n" +
    "\n" +
    "    <p>\n" +
    "        There isn't much of a demonstration of UI Bootstrap. I don't want to pollute\n" +
    "        the code with a demo for demo's sake, but I feel we should showcase it in\n" +
    "        <i>some</i> way.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "        <code>ng-boilerplate</code> should include end-to-end tests. This should\n" +
    "        happen soon. I just haven't had the time.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "        Lastly, this site should be prettier, but I'm no web designer. Throw me a\n" +
    "        bone here, people!\n" +
    "    </p>\n" +
    "\n" +
    "    <h2>Can I Help?</h2>\n" +
    "\n" +
    "    <p>\n" +
    "        Yes, please!\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "        This is an opinionated kickstarter, but the opinions are fluid and\n" +
    "        evidence-based. Don't like the way I did something? Think you know of a\n" +
    "        better way? Have an idea to make this more useful? Let me know! You can\n" +
    "        contact me through all the usual channels or you can open an issue on the\n" +
    "        GitHub page. If you're feeling ambitious, you can even submit a pull\n" +
    "        request - how thoughtful of you!\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "        So join the team! We're good people.\n" +
    "    </p>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("clients/clients.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("clients/clients.tpl.html",
    "<style>\n" +
    "    #id {\n" +
    "        width: 5%;\n" +
    "    }\n" +
    "\n" +
    "    #name {\n" +
    "        width: 17%;\n" +
    "    }\n" +
    "\n" +
    "    #eik {\n" +
    "        width: 8%;\n" +
    "    }\n" +
    "\n" +
    "    #dds {\n" +
    "        width: 10%;\n" +
    "    }\n" +
    "\n" +
    "    #address {\n" +
    "        width: 35%;\n" +
    "    }\n" +
    "\n" +
    "    #mol {\n" +
    "        width: 15%;\n" +
    "    }\n" +
    "\n" +
    "    #edit-dell {\n" +
    "        width: 10%;\n" +
    "    }\n" +
    "</style>\n" +
    "\n" +
    "<div class=\"input-group\">\n" +
    "    <button type=\"button\" class=\"btn btn-success btn-sm\" ng-click=\"openAddModal()\" style=\"width: 100px;\">\n" +
    "        <i class=\"fa fa-plus\"></i>&nbsp;Add\n" +
    "    </button>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"input-group\" style=\"margin: 10px auto\">\n" +
    "    <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n" +
    "    <input class=\"form-control\" type=\"text\" ng-model=\"searchText\" placeholder=\"Search for expenses\"/>\n" +
    "</div>\n" +
    "<table class=\"table table-bordered table-condensed\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "        <th>#</th>\n" +
    "        <th>Name</th>\n" +
    "        <th>EIK/EGN</th>\n" +
    "        <th>DDS</th>\n" +
    "        <th>Addres</th>\n" +
    "        <th>Mol</th>\n" +
    "        <th>Edit/Del</th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "    <tr ng-repeat=\"datalist in datalists | orderBy:'name' |  filter:searchText\" class=\"repeat-animation\">\n" +
    "        <th id=\"id\" scope=\"row\">{{$index}}</th>\n" +
    "        <td id=\"name\">{{datalist.name}}</td>\n" +
    "        <td id=\"eik\">{{ datalist.eik }}</td>\n" +
    "        <td id=\"dds\">{{ datalist.dds }}</td>\n" +
    "        <td id=\"address\">{{ datalist.address }}</td>\n" +
    "        <td id=\"mol\">{{ datalist.mol }}</td>\n" +
    "        <td id=\"edit-del\">\n" +
    "            <div class=\"row\" align=\"center\" style=\"width: 100px;\">\n" +
    "                <button type=\"button\" class=\"btn btn-info btn-xs\"\n" +
    "                        ng-click=\"openModal(datalist.id, datalist.name,datalist.eik,datalist.dds, datalist.address, datalist.mol, datalist.phone)\"\n" +
    "                        style=\"margin: 1px 1px\"><i class=\"fa fa-pencil\"></i></button>\n" +
    "                <button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"deleteClient(datalist.id)\"\n" +
    "                        style=\"margin: 1px 1px\"><i class=\"fa fa-trash\"></i></button>\n" +
    "            </div>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "    </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n" +
    "    <div class=\"modal-dialog\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n" +
    "                <h4 class=\"modal-title\">{{modalTitle}}</h4>\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\" align=\"center\">\n" +
    "\n" +
    "                <label for=\"modalName\">Name</label>\n" +
    "                <input id=\"modalName\" type=\"text\" class=\"form-control\" ng-model=\"name\"/><br/>\n" +
    "\n" +
    "                <form class=\"form-horizontal\">\n" +
    "                    <div class=\"form-group form-group-sm\">\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <label class=\"col-md-2 control-label\" for=\"modalEik\">EIK</label>\n" +
    "\n" +
    "                            <div class=\"col-md-10\">\n" +
    "                                <input class=\"form-control\" type=\"text\" id=\"modalEik\" ng-model=\"eik\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <label class=\"col-md-2 control-label\" for=\"modalDds\">DDS</label>\n" +
    "\n" +
    "                            <div class=\"col-md-10\">\n" +
    "                                <input class=\"form-control\" type=\"text\" id=\"modalDds\" ng-model=\"dds\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "                <label for=\"modalAddress\">Address</label>\n" +
    "                <input id=\"modalAddress\" type=\"text\" class=\"form-control\" ng-model=\"address\"/><br/>\n" +
    "\n" +
    "                <form class=\"form-horizontal\">\n" +
    "                    <div class=\"form-group form-group-sm\">\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <label class=\"col-md-2 control-label\" for=\"modalMol\">MOL</label>\n" +
    "\n" +
    "                            <div class=\"col-md-10\">\n" +
    "                                <input class=\"form-control\" type=\"text\" id=\"modalMol\" ng-model=\"mol\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <label class=\"col-md-2 control-label\" for=\"modalPhone\">Phone</label>\n" +
    "\n" +
    "                            <div class=\"col-md-10\">\n" +
    "                                <input class=\"form-control\" type=\"text\" id=\"modalPhone\" ng-model=\"phone\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "                <br/>\n" +
    "                <button type=\"button\" class=\"btn btn-success\" ng-click=\"save()\" ng-if=\"showEditBtn\" data-dismiss=\"modal\"\n" +
    "                        style=\"width: 100px;\"><i class=\"fa fa-check\"></i>&nbsp;\n" +
    "                    Edit\n" +
    "                </button>\n" +
    "                <button type=\"button\" class=\"btn btn-success\" ng-click=\"add()\" ng-if=\"showAddBtn\" data-dismiss=\"modal\"\n" +
    "                        style=\"width: 100px;\"><i class=\"fa fa-check\"></i>&nbsp;\n" +
    "                    Add\n" +
    "                </button>\n" +
    "                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\"\n" +
    "                        style=\"width: 100px; margin-left: 30px\"><i class=\"fa fa-times\"></i>&nbsp;\n" +
    "                    Cancel\n" +
    "                </button>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("confirm-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("confirm-modal.tpl.html",
    "<style>\n" +
    "    .confirm-modal , .modal-open {\n" +
    "        overflow: auto;\n" +
    "    }\n" +
    "</style>\n" +
    "<div class=\"modal-body\">\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-12\">\n" +
    "            <button type=\"button\" class=\"close\" ng-click=\"cancel()\">&times;</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-12\">\n" +
    "            <p translate>{{data.message}}</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-success btn-sm\" ng-click=\"ok()\">{{'BUTTON.YES' | translate}}</button>\n" +
    "    <button class=\"btn btn-danger btn-sm\" ng-click=\"cancel()\">{{'BUTTON.NO' | translate}}</button>\n" +
    "</div>");
}]);

angular.module("deliveries/deliveries.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("deliveries/deliveries.tpl.html",
    "<h3>Reports</h3>");
}]);

angular.module("goods/goods.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("goods/goods.tpl.html",
    "<h3>Goods</h3>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "    <h3>Home page</h3>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("invoices/invoices.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("invoices/invoices.tpl.html",
    "<h3>Invoices</h3>");
}]);

angular.module("partners/partners.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partners/partners.tpl.html",
    "<style>\n" +
    "    #id {\n" +
    "        width: 5%;\n" +
    "    }\n" +
    "\n" +
    "    #name {\n" +
    "        width: 17%;\n" +
    "    }\n" +
    "\n" +
    "    #eik {\n" +
    "        width: 8%;\n" +
    "    }\n" +
    "\n" +
    "    #dds {\n" +
    "        width: 10%;\n" +
    "    }\n" +
    "\n" +
    "    #address {\n" +
    "        width: 35%;\n" +
    "    }\n" +
    "\n" +
    "    #mol {\n" +
    "        width: 15%;\n" +
    "    }\n" +
    "\n" +
    "    #edit-dell {\n" +
    "        width: 10%;\n" +
    "    }\n" +
    "</style>\n" +
    "<div class=\"input-group\" style=\"margin: 10px auto\">\n" +
    "    <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-zoom-in\"></span></span>\n" +
    "    <input class=\"form-control\" type=\"text\" ng-model=\"searchText\" placeholder=\"Search for expenses\"/>\n" +
    "</div>\n" +
    "<table class=\"table table-bordered table-condensed\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "        <th>#</th>\n" +
    "        <th>Name</th>\n" +
    "        <th>EIK/EGN</th>\n" +
    "        <th>DDS</th>\n" +
    "        <th>Addres</th>\n" +
    "        <th>Mol</th>\n" +
    "        <th>Edit/Del</th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "    <tr ng-repeat=\"datalist in datalists | filter:searchText\" class=\"repeat-animation\">\n" +
    "        <th id=\"id\" scope=\"row\">{{$index}}</th>\n" +
    "        <!--<td id=\"date\"><a href=\"#\">{{datalist.date}}</a></td>-->\n" +
    "        <td id=\"name\">{{datalist.name}}</td>\n" +
    "        <td id=\"eik\">{{ datalist.eik }}</td>\n" +
    "        <td id=\"dds\">{{ datalist.dds }}</td>\n" +
    "        <td id=\"address\">{{ datalist.address }}</td>\n" +
    "        <td id=\"mol\">{{ datalist.mol }}</td>\n" +
    "        <td id=\"edit-del\">\n" +
    "            <div class=\"row\" align=\"center\" style=\"width: 100px;\">\n" +
    "                <button type=\"button\" class=\"btn btn-info btn-xs\"\n" +
    "                        ng-click=\"openModal(datalist.id, datalist.name,datalist.eik,datalist.dds, datalist.address, datalist.mol, datalist.phone)\"\n" +
    "                        style=\"margin: 1px 1px\"><i class=\"fa fa-pencil\"></i></button>\n" +
    "                <button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"deletePartner(datalist.id)\"\n" +
    "                        style=\"margin: 1px 1px\"><i class=\"fa fa-trash\"></i></button>\n" +
    "            </div>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "    </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n" +
    "    <div class=\"modal-dialog\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n" +
    "                <h4 class=\"modal-title\">Edit partner</h4>\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\" align=\"center\">\n" +
    "\n" +
    "                <label for=\"modalName\">Name</label>\n" +
    "                <input id=\"modalName\" type=\"text\" class=\"form-control\" ng-model=\"name\"/><br/>\n" +
    "\n" +
    "                <form class=\"form-horizontal\">\n" +
    "                    <div class=\"form-group form-group-sm\">\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <label class=\"col-md-2 control-label\" for=\"modalEik\">EIK</label>\n" +
    "\n" +
    "                            <div class=\"col-md-10\">\n" +
    "                                <input class=\"form-control\" type=\"text\" id=\"modalEik\" ng-model=\"eik\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <label class=\"col-md-2 control-label\" for=\"modalDds\">DDS</label>\n" +
    "\n" +
    "                            <div class=\"col-md-10\">\n" +
    "                                <input class=\"form-control\" type=\"text\" id=\"modalDds\" ng-model=\"dds\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "                <label for=\"modalAddress\">Address</label>\n" +
    "                <input id=\"modalAddress\" type=\"text\" class=\"form-control\" ng-model=\"address\"/><br/>\n" +
    "\n" +
    "                <form class=\"form-horizontal\">\n" +
    "                    <div class=\"form-group form-group-sm\">\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <label class=\"col-md-2 control-label\" for=\"modalMol\">MOL</label>\n" +
    "\n" +
    "                            <div class=\"col-md-10\">\n" +
    "                                <input class=\"form-control\" type=\"text\" id=\"modalMol\" ng-model=\"mol\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <label class=\"col-md-2 control-label\" for=\"modalPhone\">Phone</label>\n" +
    "\n" +
    "                            <div class=\"col-md-10\">\n" +
    "                                <input class=\"form-control\" type=\"text\" id=\"modalPhone\" ng-model=\"phone\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "                <br/>\n" +
    "                <button type=\"button\" class=\"btn btn-success\" ng-click=\"save()\" data-dismiss=\"modal\"\n" +
    "                        style=\"width: 100px;\">\n" +
    "                    Ok\n" +
    "                </button>\n" +
    "                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\"\n" +
    "                        style=\"width: 100px; margin-left: 30px\">\n" +
    "                    Cancel\n" +
    "                </button>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("pricelist/pricelist.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pricelist/pricelist.tpl.html",
    "<h3>Pricelist</h3>");
}]);

angular.module("reports/reports.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("reports/reports.tpl.html",
    "<h3>Reports</h3>");
}]);

angular.module("sales/sales.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sales/sales.tpl.html",
    "<h3>Sales</h3>");
}]);

angular.module("tmp/deliveries/deliveries.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tmp/deliveries/deliveries.tpl.html",
    "<h3>Reports</h3>");
}]);

angular.module("translators/translators.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("translators/translators.tpl.html",
    "<div class=\"panel\">\n" +
    "    <div class=\"panel-body\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-offset-1 col-md-10\">\n" +
    "                <ul class=\"nav nav-tabs\" ng-init=\"this.invoicemode=false\">\n" +
    "                    <li class=\"active\"><a data-toggle=\"tab\" href=\"#listTranslator\" translate>TRANSLATORS.LISTS</a></li>\n" +
    "                    <li><a data-toggle=\"tab\" href=\"#addTranslators\" translate>TRANSLATORS.ADD</a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "                <div class=\"row tab-content top-buffer\" style=\"margin-top: 20px\">\n" +
    "                    <div id=\"listTranslator\" class=\"tab-pane fade in active\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-10\">\n" +
    "                                <form class=\"form-inline\" role=\"form\">\n" +
    "                                    <div class=\"form-group form-group-sm\">\n" +
    "                                        <label for=\"filter\">Филтър: </label>\n" +
    "\n" +
    "                                            <ol id=\"filter\" class=\"nya-bs-select btn-sm\" ng-model=\"translator.filteredLanguages\" multiple\n" +
    "                                                data-size=\"5\" data-live-search=\"true\">\n" +
    "                                                <li nya-bs-option=\"option in languageOptions\">\n" +
    "                                                    <a>\n" +
    "                                                        {{ option.name }}\n" +
    "                                                        <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n" +
    "                                                    </a>\n" +
    "                                                </li>\n" +
    "                                            </ol>\n" +
    "\n" +
    "                                    </div>\n" +
    "                                    <div class=\"checkbox\">\n" +
    "                                        <label><input type=\"checkbox\">{{'TRANSLATORS.ONLY_LEGALS' | translate}}</label>\n" +
    "                                    </div>\n" +
    "                                    <button type=\"submit\" class=\"btn btn-success btn-sm\" uib-tooltip=\"{{'TRANSLATORS.SEARCH_TOOLTIP' | translate}}\" translate>TRANSLATORS.SEARCH</button>\n" +
    "                                </form>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-2 text-right\">\n" +
    "                                <h5 class=\"text-muted\">{{'TRANSLATORS.RESULTS'| translate}} {{translators.length}}</h5>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <!--<div class=\"table-responsive\">-->\n" +
    "                            <table class=\"table table-hover\">\n" +
    "                                <thead>\n" +
    "                                <tr>\n" +
    "                                    <th class=\"text-center text-primary\" style=\"width: 15px\">\n" +
    "                                        <h6><strong>#</strong></h6>\n" +
    "                                    </th>\n" +
    "                                    <th class=\"text-center text-primary\">\n" +
    "                                        <h6><strong translate>TRANSLATORS.LEGAL_SIGN</strong></h6>\n" +
    "                                    </th>\n" +
    "                                    <th class=\"text-center text-primary\">\n" +
    "                                        <h6><strong translate>TRANSLATORS.NAME</strong></h6>\n" +
    "                                    </th>\n" +
    "                                    <th class=\"text-center text-primary\">\n" +
    "                                        <h6><strong translate>TRANSLATORS.LANGUAGES_EDUCATION</strong></h6>\n" +
    "                                    </th>\n" +
    "                                    <th class=\"text-center text-primary\">\n" +
    "                                        <h6><strong translate>TRANSLATORS.EMAIL</strong></h6>\n" +
    "                                    </th>\n" +
    "                                    <th class=\"text-center text-primary\">\n" +
    "                                        <h6><strong translate>TRANSLATORS.PHONES</strong></h6>\n" +
    "                                    </th>\n" +
    "                                    <th class=\"text-center text-primary\">\n" +
    "                                        <h6><strong translate>TRANSLATORS.OPTIONS</strong></h6>\n" +
    "                                    </th>\n" +
    "                                </tr>\n" +
    "                                </thead>\n" +
    "\n" +
    "                                <tbody>\n" +
    "                                <tr ng-repeat=\"row in translators | orderBy: 'name'\">\n" +
    "                                    <td class=\"text-center\" style=\"width: 15px\">\n" +
    "                                        <small>{{$index+1}}</small>\n" +
    "                                    </td>\n" +
    "                                    <td class=\"text-center\" width=\"20px\">\n" +
    "                                        <small>\n" +
    "                                            <span ng-if=\"row.registered==true\" >\n" +
    "                                                <i class=\"fa fa-star-o\" uib-tooltip=\"{{'TRANSLATORS.TOOLTIP_LEGAL'| translate}}\"></i>\n" +
    "                                            </span>\n" +
    "                                            <span ng-if=\"row.favorite==true\">\n" +
    "                                                <i class=\"fa fa-heart-o\" uib-tooltip=\"{{'TRANSLATORS.TOOLTIP_FAVORITE'| translate}}\"></i>\n" +
    "                                            </span>\n" +
    "                                        </small>\n" +
    "\n" +
    "                                    </td>\n" +
    "                                    <td class=\"text-center\">\n" +
    "                                        <small>{{row.name}}\n" +
    "                                        </small>\n" +
    "                                    </td>\n" +
    "                                    <td class=\"text-center\">\n" +
    "                                        <small>\n" +
    "                                            {{row.languages}}\n" +
    "                                        </small>\n" +
    "                                    </td>\n" +
    "                                    <td class=\"text-center\">\n" +
    "                                        <small> {{row.email}}\n" +
    "                                        </small>\n" +
    "                                    </td>\n" +
    "                                    <td class=\"text-center\">\n" +
    "                                        <small>{{row.phones}}</small>\n" +
    "                                    </td>\n" +
    "                                    <td class=\"text-center\" width=\"80px\">\n" +
    "\n" +
    "                                            <div class=\"row text-center btn-group\" align=\"center\">\n" +
    "                                                <button type=\"button\" class=\"btn btn-success btn-xs\"\n" +
    "                                                        ng-click=\"openModal()\"\n" +
    "                                                        uib-tooltip=\"{{'TRANSLATORS.FULL_INFO'| translate}}\">\n" +
    "                                                    <i class=\"fa fa-info-circle\"></i>\n" +
    "                                                </button>\n" +
    "                                                <button type=\"button\" class=\"btn btn-info btn-xs\"\n" +
    "                                                        ng-click=\"openModal()\"\n" +
    "                                                        uib-tooltip=\"{{'TRANSLATORS.EDIT'| translate}}\">\n" +
    "                                                    <i class=\"fa fa-pencil\"></i></button>\n" +
    "                                                <confirm-modal message=\"Test\" ok-pressed=\"deleteById(5)\">\n" +
    "                                                    <button type=\"button\" class=\"btn btn-danger btn-xs\"\n" +
    "                                                            uib-tooltip=\"{{'TRANSLATORS.DELETE'| translate}}\">\n" +
    "                                                        <i class=\"fa fa-trash\"></i></button>\n" +
    "                                                </confirm-modal>\n" +
    "\n" +
    "                                            </div>\n" +
    "                                    </td>\n" +
    "                                </tr>\n" +
    "                                </tbody>\n" +
    "                            </table>\n" +
    "                        <!--</div>-->\n" +
    "\n" +
    "                    </div>\n" +
    "                    <div id=\"addTranslators\" class=\"tab-pane fade\">\n" +
    "                        <form class=\"form-horizontal\">\n" +
    "                            <div class=\"form-group form-group-sm\">\n" +
    "                                <label for=\"names\" class=\"col-sm-2 control-label\">Име: </label>\n" +
    "\n" +
    "                                <div class=\"col-sm-10\">\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"names\" placeholder=\"Име...\"\n" +
    "                                           ng-model=\"translator.name\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group form-group-sm\">\n" +
    "                                <label for=\"currentAddress\" class=\"col-sm-2 control-label\">Настоящ адрес: </label>\n" +
    "\n" +
    "                                <div class=\"col-sm-10\">\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"currentAddress\"\n" +
    "                                           placeholder=\"Настоящ адрес:...\"\n" +
    "                                           ng-model=\"translator.currentAddress\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group form-group-sm\">\n" +
    "                                <label for=\"permanentAddress\" class=\"col-sm-2 control-label\">Постоянен адрес: </label>\n" +
    "\n" +
    "                                <div class=\"col-sm-10\">\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"permanentAddress\"\n" +
    "                                           placeholder=\"Постоянен адрес...\"\n" +
    "                                           ng-model=\"translator.permanentAddress\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group form-group-sm\">\n" +
    "                                <label for=\"phones\" class=\"col-sm-2 control-label\">Телефон: </label>\n" +
    "\n" +
    "                                <div class=\"col-sm-10\">\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"phones\" placeholder=\"Телефон...\"\n" +
    "                                           ng-model=\"translator.phones\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group form-group-sm\">\n" +
    "                                <label for=\"langs\" class=\"col-sm-2 control-label\">Езици: </label>\n" +
    "\n" +
    "                                <div class=\"col-sm-4\">\n" +
    "                                    <ol id=\"langs\" class=\"nya-bs-select btn-sm\" ng-model=\"translator.languages\" multiple\n" +
    "                                        data-size=\"5\" data-live-search=\"true\">\n" +
    "                                        <li nya-bs-option=\"option in languageOptions\">\n" +
    "                                            <a>\n" +
    "                                                {{ option.name }}\n" +
    "                                                <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n" +
    "                                            </a>\n" +
    "                                        </li>\n" +
    "                                    </ol>\n" +
    "                                </div>\n" +
    "                                <label for=\"educations\" class=\"col-sm-2 control-label\">Образование: </label>\n" +
    "\n" +
    "                                <div class=\"col-sm-4\">\n" +
    "                                    <ol id=\"educations\" class=\"nya-bs-select btn-sm\" ng-model=\"translator.educations\"\n" +
    "                                        multiple\n" +
    "                                        data-size=\"5\" data-live-search=\"true\">\n" +
    "                                        <li nya-bs-option=\"option in educationOptions\">\n" +
    "                                            <a>\n" +
    "                                                {{ option.name }}\n" +
    "                                                <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n" +
    "                                            </a>\n" +
    "                                        </li>\n" +
    "                                    </ol>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group form-group-sm\">\n" +
    "                                <label for=\"email\" class=\"col-sm-2 control-label\">E-mail: </label>\n" +
    "\n" +
    "                                <div class=\"col-sm-4\">\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"e-mail...\"\n" +
    "                                           ng-model=\"translator.email\">\n" +
    "                                </div>\n" +
    "                                <label for=\"skype\" class=\"col-sm-2 control-label\">Skype: </label>\n" +
    "\n" +
    "                                <div class=\"col-sm-4\">\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"skype\" placeholder=\"Skype...\"\n" +
    "                                           ng-model=\"translator.skype\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group form-group-sm\">\n" +
    "                                <label for=\"eid\" class=\"col-sm-2 control-label\">ЕГН: </label>\n" +
    "\n" +
    "                                <div class=\"col-sm-10\">\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"eid\" placeholder=\"ЕГН...\"\n" +
    "                                           ng-model=\"translator.eid\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group form-group-sm\">\n" +
    "                                <label for=\"eid\" class=\"col-sm-2 control-label\">Лична карта: </label>\n" +
    "\n" +
    "                                <div class=\"col-sm-10\">\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"lk\" placeholder=\"Лична карта...\"\n" +
    "                                           ng-model=\"translator.document\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group form-group-sm\">\n" +
    "                                <label for=\"iban\" class=\"col-sm-2 control-label\">IBAN: </label>\n" +
    "\n" +
    "                                <div class=\"col-sm-10\">\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"iban\" placeholder=\"IBAN...\"\n" +
    "                                           ng-model=\"translator.iban\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <button type=\"button\" class=\"btn btn-success btn-sm pull-right\" ng-click=\"add(translator)\"\n" +
    "                                    style=\"width: 100px;\">\n" +
    "                                <i class=\"fa fa-plus\"></i> Добави\n" +
    "                            </button>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
