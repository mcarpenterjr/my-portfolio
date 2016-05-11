function model() {
  var self = this;

  self.bio = {
    name: 'Mark N Carpenter Jr',
    role: 'Front-End Web Developer',
    contacts: {
      mobile: '(203)816-5206',
      email: 'marksthings24@gmail.com',
      github: 'xXSirenSxOpusXx',
      linkedin: 'Mark N Carpenter Jr',
      twitter: 'xXSirenSxOpusXx',
      location: 'Newtown, CT',
    },
    bioPic: 'images/mncheadshot.jpg',
    welcomeMessage: 'With strong problem solving skills, the ability to adapt,' +
      ' and capability to quickly learn new tasks, I know I will become a vital' +
      ' asset to almost any team. ',
    skills: ['HTML', 'CSS', 'JavaScript', 'Jquery', 'Bootstrap', 'CMS', 'Netbeans',
      'Git', 'GitHub', 'MySql', 'iOS', 'Windows', 'CLI', 'PhotoShop', 'Fireworks',
      'Premier Pro', 'Illustrator', 'DreamWeaver', 'Joomla', 'WordPress', 'MVC',
      'CodeIgniter',
    ],
  };

  slef.work = {
    jobs: [{
      employer: 'G. P. Tool Co.',
      title: 'CNC Machinist',
      dates: '2014 - Current',
      location: 'Danbury, CT',
      description: 'Producing machined parts for the Aerospace, Medical, ' +
        'and Energy Generation industries. Works from supplied blueprints and ' +
        'drawings to create excellent qaulity parts per customer specifications. ' +
        'Keeps a clean and safe work area along with routine equipment maintinence ' +
        'and quality checks. Works closely with Quality Control to meet Zero-Loss ' +
        'Certified Material requirements.',
      duties: ['Studies Blueprints', 'Verifies Program Through Measurements ' +
        'and Feedback From Quality Control', 'Maintains Production Consistency Through ' +
        'Attention to Part Details', 'Maintains a Safe Work Enviroment', 'Maintians Quality ' +
        'and Production Logs', 'Explores Oppurtunities to Add Value to Jobs',
      ],
    }, {
      employer: 'M.T.J. Manufacturing',
      title: 'Manager',
      dates: '2002 - 2014',
      location: 'Bridgeport, CT',
      description: 'My employment at M.T.J. covered a very large scope of ' +
        'business operations, that scope encompassed labor on the shop floor, ' +
        'to customer invoicing and sales. To be upfront and honest M.T.J. is ' +
        "owned and operated by my father, the 'M' is the first initial of my " +
        'name, regaurdless my experience and knowledge gained during my time ' +
        'here have proved invaluable to my success on my career path.',
      duties: [],
    }, {
      employer: 'Mount Snow',
      title: 'Ski Ambassador',
      dates: '2009-2014',
      location: 'West Dover, VT',
      description: 'As a Mountain Ambassador, I was required to deliver ' +
        'excellent customer service, educate Skiers and Riders of the "Responsibilty' +
        ' Code" assist with security and crowd control at major events, and ' +
        'Greet as well as Send Off guests with a smile at the begining and ' +
        'end of the day. Daily duties included, morning breifings, skiing the ' +
        'mountain with 2 or more people assisting skiers and riders in need, ' +
        'and aiding in various mountain operation tasks. Things I most enjoyed ' +
        'were, working with a diverse group, and being an integral part of an ' +
        'extremely large team of talent that kept things running at a major ' +
        'winter destination for Southern New Englanders and the Tri-State area.',
      duties: ['Meet and Greet Customers', 'Assist With Major Events',
        'Help With Day to Day Operations', 'Educate Proper Skiing and Rdiding Etiquette',
      ],
    }, {
      employer: 'Naiad Dynamics US, INC.',
      title: 'CNC Machinist, Service Technician',
      dates: '2005 - 2011',
      location: 'Shelton, CT',
      description: 'Originally started employment as a second shift CNC ' +
        'machinist my employment was expanded to aid in facility and equiment ' +
        'maintinece. During my first 2 years I grew to be an integral part of ' +
        'second shift, advancing production to meet constantly changing needs ' +
        'while working closely with the facility and production management to' +
        ' maintain and improve organization, equipment maintinence in a prioritized ' +
        'manner, and assist in expiditing and delivering new products to the marine ' +
        'industry. Going into the latter years of employment I was asked to join ' +
        'the service and installation portion of Naiad, due to my versatility and ' +
        'skill. During that time I worked independantly, was responsible for ' +
        'keeping descript service records, maintaing "spares" stock in my company ' +
        'service vehicle, and maintaining an extemely high customer satisfaction ' +
        'level. Service and New installations required constant travel to the ' +
        'surrounding Tri State area, as well as the Pacific Northwest, North ' +
        'Mid and Southern Atlantic regions, The Netherlands Antilles and the Canary Islands.',
      duties: ['Planned, Programmed, Setup, Operated, and Verified CNC Production Operations',
        'Maintained a Safe Work Enviroment', "Performed Req'd PM on CNC Equipment",
        'Documented Communications, Irregularities and Needs to maintain Continuity',
        'Maintined Workflow With Schedule', 'Diagnosed Technical Issues and Provided Solutions',
        'Produced Detailed Service Reports', 'Followed Strict Service Protocols', 'Collaborated Latterally' +
        ' Within Naiad to Reach Realistic Solutions to Unique Product Issues',
      ],
    }, ],
  };

  self.education = {
    schools: [{
      name: 'Trumbull High School',
      location: 'Trumbull, CT',
      degree: 'High School Diploma',
      major: ['Mechanical CADD', 'Mechanical Engineering'],
      dates: '1999-2003',
      url: 'http://www.trumbullps.org/ths/',
    }, {
      name: 'Housatonic Community College',
      location: 'Bridgeport, CT',
      degree: 'Real Estate Liscense',
      major: ['Real Estate Law and Sales'],
      dates: '2005',
      url: 'http://www.housatonic.edu',
    }, ],
    onlineCourses: [{
      title: 'Intro to HTML and CSS',
      school: 'Udacity',
      dates: '2015',
      url: 'https://www.udacity.com/course/intro-to-html-and-css--ud304-nd',
    }, {
      title: 'Responsive Web Design Fundementals',
      school: 'Udacity',
      dates: '2015',
      url: 'https://www.udacity.com/course/responsive-web-design-fundamentals--ud893-nd',
    }, {
      title: 'Responsive Images',
      school: 'Udacity',
      dates: '2015',
      url: 'https://www.udacity.com/course/responsive-images--ud882-nd',
    }, {
      title: 'Intro To jQuery',
      school: 'Udacity',
      dates: '2015',
      url: 'https://www.udacity.com/course/intro-to-jquery--ud245-nd',
    }, {
      title: 'JavaScript Syntax',
      school: 'Udacity',
      dates: '2015',
      url: 'https://www.udacity.com/course/javascript-basics--ud804-nd',
    }, {
      title: 'Front-End Web Developer Nanodegree',
      school: 'Udacity',
      dates: '2015-Current',
      url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001',
    }, ],
  };

  self.projects = {
    'projects': [{
      'title': 'Build a Personal Portfilio',
      'dates': '2015',
      'description': 'During my Nanodegree one of the very first projects I' +
        'completed was a hand coded Personal Portfolio. It showcases not only ' +
        'Projects I have completed and will complete during my Nanodegree, but' +
        'also my Semantic, Clean and Responsive, HTML and CSS coding ability. ' +
        'Something I am particularly proud of seeing it was my first Responsve' +
        'Design acheived with out the help of a responsive frame work.',
      'images': ['images/portfolio.PNG'],
      'url': 'http://portfolio.mncarpenter.ninja'
    }, {
      'title': '@dotMobi AngularJs Contact Form',
      'dates': '2015',
      'description': 'An AngularJs responsive contact form designed to be ' +
        'used on a .mobi domain. Used to collect a desired dcontacts information ' +
        'using phpmailer to send the information to your specified email and ' +
        'then dispaly or ideally through an auto responder, email your direct ' +
        'contact information along with a vcard file.',
      'images': ['images/mobicontact.PNG'],
      'url': 'http://www.mncarpenter.mobi'
    }, {
      'title': 'CakeWalk V',
      'dates': '2010',
      'description': "While Employed at Naiad Dynamics, Inc. Naiad was contracted " +
        "to install over two and a half miles of stainless tubing for onboard " +
        "hydraulic equipment, into the Yacht CakeWalk. I was responsible to the " +
        "lead project manager, Head Ship's Engineer and various system designers. " +
        "While over seeing the work of one to two other emplyees over the 8 month " +
        "install period. CakeWalk at the time was the largest private ship in the " +
        "previous 75 years ever constructed in North America, the project was one " +
        "I will never forget.",
      'images': ['images/cakewalk2.jpg'],
      'url': 'http://www.derecktor.com/new-construction/yachts/cakewalk/'
    }],
  };
}
