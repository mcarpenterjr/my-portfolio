function about() {
  var formattedName = HTMLheaderName.replace('%data%', bio.name);
  var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
  var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
  var formattedwelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
  if (bio.skills.length > 0) {
    for (var skill in bio.skills) {
      var formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
    }
  }

  var cntfoMobile = HTMLmobile.replace(/%data%/gi, bio.contacts.mobile);
  var cntfoTwitter = HTMLtwitter.replace(/%data%/gi, bio.contacts.twitter);
  var cntfoGithub = HTMLgithub.replace(/%data%/gi, bio.contacts.github);
  var cntfoLocation = HTMLlocation.replace('%data%', bio.contacts.location);
  var cntfoLinkedin = HTMLlinkedin.replace('%data%', bio.contacts.linkedin);
  var cntfoEmail = HTMLemail.replace(/%data%/gi, bio.contacts.email);
  var formattedContactnfo = cntfoMobile + cntfoEmail + cntfoLinkedin + cntfoGithub + cntfoTwitter + cntfoLocation;

}

function workExp() {
  for (var job in work.jobs) {
    var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
    if (work.jobs[job].duties.length > 0) {
      for (var duty in work.jobs[job].duties) {
        var formattedDuties = HTMLworkDuties.replace('%data%', work.jobs[job].duties[duty]);
      }
    }

    var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
  }
}

function education() {
  for (var school in education.schools) {
    var formattedSchool = HTMLschoolName.replace('%data%', education.schools[school].name);
    var formattedSchoolUrl = formattedSchool.replace('#', education.schools[school].url);
    var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
    var formattedSchoolDegree = formattedSchool + formattedDegree;
    var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
    var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major);
  }
}

for (var course in education.onlineCourses) {
  var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
  var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
  var formattedTitle = formattedTitle.replace('#', education.onlineCourses[course].url);
  var formattedSchoolTitle = formattedTitle + formattedSchool;
  var formattedDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
}

function projects() {
  for (var project in projects.projects) {
    var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
    var formattedLinkTitle = formattedTitle.replace('#', projects.projects[project].url);
    var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
    var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);

    if (projects.projects[project].images.length > 0) {
      for (var image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
      }
    }
  }
}


$(document).ready(function() {
  $('.parallax').parallax();
  $('.slider').slider();
});
