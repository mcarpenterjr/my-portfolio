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
            'skills': ko.observableArray('[]'),
        },

        'work': {
            'jobs': ko.observableArray('[]'),
        },
        'education': {
            'schools': ko.observableArray('[]'),
            'onlineCourses': ko.observableArray('[]'),
        },
        'projects': ko.observableArray('[]')
    };

resumeFetch = function() {
  var url = 'data/resume.js';
  $.ajax({
    url: url,
    type: 'GET',
    dataType: 'JSON',
    success: function(result) {
      var data = result;
      resumeData.bio.name(result.bio.name);
      resumeData.bio.role(result.bio.role);
      resumeData.bio.contacts.mobile(result.bio.contacts.mobile);
      resumeData.bio.contacts.email(result.bio.contacts.email);
      resumeData.bio.contacts.github(result.bio.contacts.github);
      resumeData.bio.contacts.linkedin(result.bio.contacts.linkedin);
      resumeData.bio.contacts.twitter(result.bio.contacts.twitter);
      resumeData.bio.contacts.location(result.bio.contacts.location);
      resumeData.bio.bioPic(result.bio.bioPic);
      resumeData.bio.welcomeMessage(result.bio.welcomeMessage);
    },
    error: function(result) {
      Materialize.toast('Trouble retreiving data...', 6500);
    }
  }).done(function() {
    Materialize.toast('Successfully Loaded Resume Data',6500);
  });
};
resumeFetch();
}
var resumeBuilder = new resumeBuilder();
ko.applyBindings(resumeBuilder);
