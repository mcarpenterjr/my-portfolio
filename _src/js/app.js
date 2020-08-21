class App {
  constructor() {
    let self = this;

  }

  /**
   * Wrapper for the jQ ajax method so we can reuse throughout our classes
   * 
   * @param string url is required.
   * @param array  opts is not required defaults to an empty arrary.
   * @param string method is the request method, POST or GET but regex checking
   *               will look for other parts of the CRUD model.
  */  
  fetchData(url, opts = [], method = 'GET') {
    let request;

    const regex = RegExp('/[GETPOSDL]{3,}/g');
    method = regex.test(method)
      ? method.toUpperCase() : 'GET';
    
    // We made a convention for the options/params array but haven't done
    // anything to implement it yet.
    for (let idx = 0; idx < opts.length; idx++) {
      const option = opts[idx];
      
    }

    if (typeof url !== 'undefined') {
      request = $.ajax({
        url: url,
        type: method,
        dataType: 'JSON'
      });
    } else {
      request = 'Request location required!';
    }

    return request;
  }
}

class NavBar extends App {
  constructor(data) {
    super(data);
    let self = this;
   
    self.init();
    // self.socials = [];
    // for (let i = 0; i < navData.socials.length; i++) {
    //   const social = navData.socials[i];
    //   self.social.push(social);
    // }
  }

  init() {
    let self = this;
    let goto;
    // init the mobile button
    $(".button-collapse").sideNav();
    // Load material tooltips
    $('nav .tooltipped').tooltip();
    // do some jq majick for link clicks
    $('nav a').click((e) => {
      if (goto = $(e.currentTarget).attr('id')) {
        e.preventDefault();
        if (!$(e.currentTarget).hasClass('active')) {
          $(e.currentTarget).addClass('active')
          self.loadLink(goto);
        }
      }
    });
  }

  loadLink(link) {
    let self = this;
    if (link == 'resume') {
      $('body content').load('partials/resume.html');
      self.resume = new Resume;
    }
    // self.fetchData('data/about.json').done((a) => { console.log(a) });
    $('body footer').load('partials/footer.html');
  }

};

class Resume extends App {
  constructor(data) {
    super(data);
    let self = this;
    let resData = {
      'welcomeMessage': ko.observable(''),
      'skills': ko.observableArray(''),
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
      'isReady': ko.observable(false)
    };
      
    
    self.fetchData('data/resume.json').done((data) => {
      console.log(data);
      resData.welcomeMessage(data.welcomeMessage);
      for (let i = 0; i < data.skills.length; i++) {
        const skill = data.skills[i];
        resData.skills.push(skill);
      }

      // process work data
      for (let widx = 0; widx < data.work.jobs.length; widx++) {
        const job = data.work.jobs[widx];
        let duties = ko.observableArray();
        for (var didx = 0; didx < job.duties.length; didx++) {
          const duty = job.duties[didx];
          duties.push(duty);
        }
        resData.work.jobs.push({
          employer: ko.observable(job.employer),
          title: ko.observable(job.title),
          dates: ko.observable(job.dates),
          location: ko.observable(job.location),
          description: ko.observable(job.description),
          duties: duties
        });
      }
      // process education data
      for (let eidx = 0; eidx < data.education.schools.length; eidx++) {
        const school = data.education.schools[eidx];
        let majors = ko.observableArray();
        for (let midx = 0; midx < school.major.length; midx++) {
          const major = school.major[midx];
          majors.push(major);
        }
        resData.education.schools.push({
          name: ko.observable(school.name),
          title: ko.observable(`${school.name} (${school.dates})`),
          location: ko.observable(school.location),
          degree: ko.observable(school.degree),
          major: majors,
          dates: ko.observable(school.dates),
          url: ko.observable(school.url)
        });
      }

      // process online course data
      for (let ocidx = 0; ocidx < data.education.onlineCourses.length; ocidx++) {
        const course = data.education.onlineCourses[ocidx];
        resData.education.onlineCourses.push({
          title: ko.observable(course.title),
          school: ko.observable(course.school),
          dates: ko.observable(course.dates),
          url: ko.observable(course.url)
        });
        
      }

      // process projects
      for (let pidx = 0; pidx < data.projects.projects.length; pidx++) {
        const project = data.projects.projects[pidx];
        let images = ko.observableArray();
        for (let piidx = 0; piidx < project.images.length; piidx++) {
          const image = project.images[piidx];
          images.push(image);
        }
        resData.projects.projects.push({
          title: ko.observable(project.title),
          dates: ko.observable(project.dates),
          description: ko.observable(project.description),
          image: ko.observable(images()[0]),
          url: ko.observable(project.url),
          gitRepo: ko.observable(project.gitRepo)
        });
        console.log(images()[0]);
      }
    }).then(() => {
      ko.applyBindings(resData);
      // call the collapsible helper after data is in.
      $('.collapsible').collapsible();
    });
  }

};

function contact() {
  swal({
    title: "Contact Mark",
    text: '<a href="mailto:mark@mncarpenter.ninja">Mark\'s Email</a>',
    html: true
  });
}

$('document').ready(() => {
  $('body nav-bar').load('partials/nav.html',
    (response, status, obj) => {
      // We could use the callback data for something.
      const navbar = new NavBar();
    }
  );
  $('body content slider-full').load(
    'partials/slider.html',
    () => $('.slider').slider()
  );
  $('body content floaters').load('partials/floaters.html');
});

// var resumeBuilder = new resumeBuilder();
// ko.applyBindings(resumeBuilder);
