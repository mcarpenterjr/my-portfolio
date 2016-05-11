function resumeBuilder() {
    var self = this;

    self.workExp = ko.observableArray([]);
    self.education = ko.observableArray([]);
    self.projects = ko.observableArray([]);

    var bioData = function(input) {

        self.name = ko.observable(input.name);
        self.role = ko.observable(input.role);
        self.contacts = [];
        self.mobile = ko.observable(input.contacts.mobile);
        self.email = ko.observable(input.contacts.email);
        self.github = ko.observable(input.contacts.github);
        self.linkedin = ko.observable(input.contacts.linkedin);
        self.twitter = ko.observable(input.contacts.twitter);
        self.location = ko.observable(input.contacts.location);
        self.pic = ko.observable(input.bioPic);
        self.welcomeMessage = ko.observable(input.welcomeMessage);
        self.skills = ko.observableArray([]);

        var skillsBuild = function(input) {
            for (var i = 0; i < input.length; i++;) {
                self.skills.push(input[i]);
            }
        }
        skillbuild(input.skills);
    }
    bioData(resume.bio);

    var workData = function(input) {
        self.employer = ko.observable(input.employer);
        self.title = ko.observable(input.title);
        self.dates = ko.observable(input.dates);
        self.location = ko.observable(input.location);
        self.description = ko.observable(input.description);
        self.duties = ko.observableArray([]);

        var dutiesBuild = function(input) {
            for (var i = 0; i < input.length; i++;) {
                self.duties.push(input[i]);
            }
        }
        dutiesBuild(input.duties);
    }
    self.work = function(input) {
        for (var i = 0; i < input.length; i++;) {
            self.workExp.push(new workData(input[i]));
        }
    }
    work(resume.work);

    var eduData = function(input) {
        self.employer = ko.observable(input.employer);
        self.title = ko.observable(input.title);
        self.dates = ko.observable(input.dates);
        self.location = ko.observable(input.location);
        self.description = ko.observable(input.description);
        self.duties = ko.observableArray([]);

        var dutiesBuild = function(input) {
            for (var i = 0; i < input.length; i++;) {
                self.duties.push(input[i]);
            }
        }
    }
    self.edu = function(input) {
        for (var i = 0; i < input.length; i++;) {
            self.education.push(new eduData(input[i]));
        }
    }
    edu(resume.education);

    var projectData = function(input) {
        self.title = ko.observable(input.title);
        self.dates = ko.observable(input.dates);
        self.description = ko.observable(input.description);
        self.url = ko.observable(input.url);
        self.images = ko.observableArray([]);

        var imagesBuild = function(input) {
            for (var i = 0; i < input.length; i++;) {
                self.images.push(input[i]);
            }
        }
        imagesBuild(input.images);
    }
    self.project = function(input) {
        for (var i = 0; i < input.length; i++;) {
            self.projects.push(new projectData(input[i]));
        }
    }
    project(resume.projects);
};

ko.applyBindings(new resumeBuilder());

var contact = function() {
    swal({
            title: "Contact Mark",
            text: '<div class="progress"><div class="indeterminate"></div></div>' +
                '<div class="card blue-grey darken-1">' +
                '<div class="card-content white-text">' +
                '<p>There seems to be a problem loading our app, we will try again.</p>' +
                '<br><a href="mailto:mark@mncarpenter.ninja" target="_blank"><span>Direct E-Mail &nbsp<i class="fa fa-envelope"></i></span></a>' +
                '</div>' +
                '</div>' +
                '</div>',
            showCancelButton: false,
            showConfirmButton: true,
            confirmButtonText: "Retry",
            confirmButtonColor: "#ffb300",
            html: true,
            timer: 8500,
        },
        function() {

        });
};

var resume = new resume();
