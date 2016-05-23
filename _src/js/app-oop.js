function app() {
  var self = this;

  var resume = function(file) {
    var fileName = file;

    var data = {
      'bio': {
        'name': ko.observable(''),
        'role': ko.observable(''),
        'contacts': {
          'mobile': ko.observable(''),
          'email': ko.observable(''),
          'github': ko.observable(''),
          'linkedin': ko.observable(''),
          'twitter': ko.observable(''),
          'location': ko.observable(''),
        },
        'bioPic': ko.observable(''),
        'welcomeMessage': ko.observable(''),
        'skills': ko.observableArray(''),
      },
      'work': {
        'jobs': ko.observableArray(''),
      },
      'education': {
        'schools': ko.observableArray(''),
        'onlineCourses': ko.observableArray(''),
      },
      'projects': {
        'projects': ko.observableArray(''),
      },
      'ready': ko.observable(false)
    };
    var fetch = function(fileName) {
      var url = 'data/' + fileName;
      $.ajax({
        url: url,
        type: 'GET',
        dataType: 'JSON',
        success: function(result) {
          var data = result;
          data.bio.name(result.bio.name);
          data.bio.role(result.bio.role);
          data.bio.contacts.mobile(result.bio.contacts.mobile);
          data.bio.contacts.email("mailto:marksthings24@gmail.com" + result.bio.contacts.email + "?Subject=Your%20Resume");
          data.bio.contacts.github("https://github.com/" + result.bio.contacts.github);
          data.bio.contacts.linkedin("https://www.linkedin.com/in/" + result.bio.contacts.linkedin);
          data.bio.contacts.twitter("https://twitter.com/" + result.bio.contacts.twitter);
          data.bio.contacts.location(result.bio.contacts.location);
          data.bio.bioPic(result.bio.bioPic);
          data.bio.welcomeMessage(result.bio.welcomeMessage);
          for (var skill = 0; skill < result.bio.skills.length; skill++) {
            data.bio.skills.push(result.bio.skills[skill]);
          }
          // Work Data
          for (var job = 0; job < result.work.jobs.length; job++) {
            var duties = result.work.jobs[job].duties;
            var dutiesArray = ko.observableArray();
            for (var duty = 0; duty < duties.length; duty++) {
              dutiesArray.push(duties[duty]);
            }
            data.work.jobs.push({
              employer: ko.observable(result.work.jobs[job].employer),
              title: ko.observable(result.work.jobs[job].title),
              dates: ko.observable(result.work.jobs[job].dates),
              location: ko.observable(result.work.jobs[job].location),
              description: ko.observable(result.work.jobs[job].description),
              duties: dutiesArray
            });
          }
          // Education Data-Schools
          for (var school = 0; school < result.education.schools.length; school++) {
            var major = result.education.schools[school].major;
            var majorArray = ko.observableArray();
            for (var discipline = 0; discipline < major.length; discipline++) {
              majorArray.push(major[discipline]);
            }
            data.education.schools.push({
              name: ko.observable(result.education.schools[school].name),
              location: ko.observable(result.education.schools[school].location),
              degree: ko.observable(result.education.schools[school].degree),
              dates: ko.observable(result.education.schools[school].dates),
              url: ko.observable(result.education.schools[school].url),
              major: majorArray
            });
          }
          // Education Data-Online Courses
          for (var course = 0; course < result.education.onlineCourses.length; course++) {
            data.education.onlineCourses.push({
              title: ko.observable(result.education.onlineCourses[course].title),
              school: ko.observable(result.education.onlineCourses[course].school),
              dates: ko.observable(result.education.onlineCourses[course].dates),
              url: ko.observable(result.education.onlineCourses[course].url)
            });
          }
          for (var project = 0; project < result.projects.projects.length; project++) {
            var images = result.projects.projects[project].images;
            var imageArray = ko.observableArray();
            for (var image = 0; image < images.length; image++) {
              imageArray.push(images[image]);
            }
            data.projects.projects.push({
              title: ko.observable(result.projects.projects[project].title),
              dates: ko.observable(result.projects.projects[project].dates),
              description: ko.observable(result.projects.projects[project].description),
              gitRepo: ko.observable(result.projects.projects[project].gitRepo),
              url: ko.observable(result.projects.projects[project].url),
              images: imageArray
            });
          }
          //Resets View to diplay Bindings
          data.ready(true);
          //Logs Incoming Data
          console.log('Resume Data:', result);
        },
        error: function(result) {
          Materialize.toast('Trouble Retreiving Resume Data...', 6500);
        }
      }).done(function() {
        Materialize.toast('Successfully Loaded Resume Data', 6500);
      });
    };
  };

  var about = function() {
    var data = {

    };

    fetch = function(fileName) {
      var url = 'data/' + fileName;
      $.ajax({
        url: url,
        type: 'GET',
        dataType: 'JSON',
        success: function(result) {
          var data = result;

          console.log('About Data:', result);
        },
        error: function(result) {
          Materialize.toast('Trouble Retreiving Information About Mark...', 6500);
        }
      }).done(function() {
        Materialize.toast('Successfully Loaded Mark\'s Information.', 6500);
      });
    };
  }

}
var app = new app();
ko.applyBindings(app);
