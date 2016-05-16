function resumeBuilder() {

    resumeData = {
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
            'skills': ko.observableArray(),
        },

        'work': {
            'jobs': ko.observableArray(),
        },
        'education': {
            'schools': ko.observableArray(),
            'onlineCourses': ko.observableArray(),
        },
        'projects': ko.observableArray()
    };

resumeFetch = function() {
  var url = 'data/resume.json';
  $.ajax({
    url: url,
    type: 'GET',
    dataType: 'JSON',
    success: function(result) {
      var data = result;
      resumeData.bio.name(result.bio.name);
      resumeData.bio.role(result.bio.role);
      resumeData.bio.contacts.mobile(result.bio.contacts.mobile);
      resumeData.bio.contacts.email("mailto:marksthings24@gmail.com"+ result.bio.contacts.email + "?Subject=Your%20Resume");
      resumeData.bio.contacts.github("https://github.com/" + result.bio.contacts.github);
      resumeData.bio.contacts.linkedin("https://www.linkedin.com/" + result.bio.contacts.linkedin);
      resumeData.bio.contacts.twitter("https://twitter.com" + result.bio.contacts.twitter);
      resumeData.bio.contacts.location(result.bio.contacts.location);
      resumeData.bio.bioPic(result.bio.bioPic);
      resumeData.bio.welcomeMessage(result.bio.welcomeMessage);
      for (var skill = 0; skill < result.bio.skills.length; skill++) {
        resumeData.bio.skills.push(result.bio.skills[skill]);
      }
      // Work Data
      for (var job = 0; job < result.work.jobs.length; job++) {
        resumeData.work.jobs.push({
        employer:  ko.observable(result.work.jobs.employer),
        title:  ko.observable(result.work.jobs.title),
        dates:  ko.observable(result.work.jobs.dates),
        location:  ko.observable(result.work.jobs.location),
        description:  ko.observable(result.work.jobs.description),
        duties:  ko.observableArray()
        });
      }
      // Education Data-Schools
      for (var school = 0; school < result.education.schools.length; school++) {
        resumeData.education.schools.push({
        name:  ko.observable(result.education.schools.name),
        location:  ko.observable(result.education.schools.location),
        degree:  ko.observable(result.education.schools.degree),
        dates:  ko.observable(result.education.schools.dates),
        url:  ko.observable(result.education.schools.url)
        });
      }
      // Education Data-Online Courses
      for (var course = 0; course < result.education.onlineCourses.length; course++) {
        resumeData.education.onlineCourses.push({
          title:  ko.observable(result.education.schools.title),
          school:  ko.observable(result.education.schools.school),
          dates:  ko.observable(result.education.schools.dates),
          url:  ko.observable(result.education.schools.url)
        });
      }


      //Logs Incoming Data
      console.log('Resume Data:', result);
    },
    error: function(result) {
      Materialize.toast('Trouble Retreiving Resume Data...', 6500);
    }
  }).done(function() {
    Materialize.toast('Successfully Loaded Resume Data',6500);
  });
};
resumeFetch();
}
var resumeBuilder = new resumeBuilder();
ko.applyBindings(resumeBuilder);
