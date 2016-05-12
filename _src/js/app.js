function resumeBuilder() {
    var self = this;

    self.workExp = ko.observableArray([]);
    self.schools = ko.observableArray([]);
    self.onlineCourses = ko.observableArray([]);
    self.projects = ko.observableArray([]);

    var bioData = function(input) {

        var name = ko.observable(input.name);
        var role = ko.observable(input.role);
        var contacts = [];
        var mobile = ko.observable(input.contacts.mobile);
        var email = ko.observable(input.contacts.email);
        var github = ko.observable(input.contacts.github);
        var linkedin = ko.observable(input.contacts.linkedin);
        var twitter = ko.observable(input.contacts.twitter);
        var location = ko.observable(input.contacts.location);
        var pic = ko.observable(input.bioPic);
        var welcomeMessage = ko.observable(input.welcomeMessage);
        var skills = ko.observableArray([]);

        var skillsBuild = function(input) {
            for (var i = 0; i < input.length; i++) {
                skills.push(input[i]);
            }
        }
        skillsBuild(input.skills);
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
            for (var i = 0; i < input.length; i++) {
                self.duties.push(input[i]);
            }
        }
        dutiesBuild(input.duties);
    }
    var work = function(input) {
        for (var i = 0; i < input.length; i++) {
            self.workExp.push(new workData(input[i]));
        }
    }
    work(resume.work.jobs);

    var eduData = function(input) {
        var school = function(input) {
            self.name = ko.observable(input.name);
            self.location = ko.observable(input.location);
            self.degree = ko.observable(input.degree);
            self.discipline = ko.observableArray([]);
            self.dates = ko.observable(input.dates);
            self.description = ko.observable(input.description);
            self.url = ko.observable(input.url);

            var disciplineBuild = function(input) {
                for (var i = 0; i < input.length; i++) {
                    self.discipline.push(input[i]);
                }
            }
            disciplineBuild(input.major);
        }

        var online = function(input) {
            self.title = ko.observable(input.title);
            self.school = ko.observable(input.school);
            self.dates = ko.observable(input.dates);
            self.url = ko.observable(input.url);
        }
        var schoolBuild = function(input) {
            for (var i = 0; i < input.length; i++) {
                self.schools.push(new school(input[i]));
            }
        }
        schoolBuild(input.schools);
        var onlineBuild = function(input) {
            for (var i = 0; i < input.length; i++) {
                self.onlineCourses.push(new online(input[i]));
            }
        }
        onlineBuild(input.onlineCourses);
    }
    eduData(resume.education);

    var projectData = function(input) {
        self.title = ko.observable(input.title);
        self.dates = ko.observable(input.dates);
        self.description = ko.observable(input.description);
        self.url = ko.observable(input.url);
        self.images = ko.observableArray([]);

        var imagesBuild = function(input) {
            for (var i = 0; i < input.length; i++) {
                self.images.push(input[i]);
            }
        }
        imagesBuild(input.images);
    }
    var project = function(input) {
        for (var i = 0; i < input.length; i++) {
            self.projects.push(new projectData(input[i]));
        }
    }
    project(resume.projects);
};
var data = new resumeBuilder();
ko.applyBindings();
