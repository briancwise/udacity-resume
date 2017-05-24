var bio = {
	name: "Brian Wise",
	role: "Web Developer",
	contacts: {
		mobile: "555-555-5555",
		email: "fake-email@wordpress.com",
		github: "briancwise",
		twitter: "@briancwise",
		location: "Brooklyn, NY"
	},
	welcomeMessage: "Brian Wise is a web developer with a background in journalism, classical music and digital media",
	skills: ["Javascript", " CSS3", " HMTL5", " jQuery", " SASS", " Pro Tools", " Photo Shop"],
	biopic: "images/Brian-Wise-Istanbul.jpg",
};

bio.display = function() {

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedName, formattedRole);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

	$("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub);

	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedworkDescription = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedSkillsHead = HTMLskillsStart.replace("%data%", "Skills at a Glance");
	$("#header").append(formattedPic, formattedworkDescription, formattedSkillsHead);

	bio.skills.forEach(function(language) {
		var formattedSkills = HTMLskills.replace("%data%", language);
		$("#skills").append(formattedSkills);
	});
};


var work = {
	"jobs": [{
		employer: "Chicago Symphony Orchestra",
		title: "Producer",
		location: "Brooklyn, NY",
		dates: "2016 - Present",
		description: "Research and write scripts for national weekly radio series. Produce two-hour broadcast, assembling segments, editing, leveling and mastering interviews and host material. Write and produce on-air promos and web copy."
	},
	{
		employer: 'Freelance Journalist',
		title: 'Writer and Editor',
		location: 'Brooklyn, NY',
		dates: '1998 - Present',
		description: 'Features and news coverage for: The New York Times, BBC Music Magazine, The Guardian, Wall Street Journal, Slate, Listen Magazine, FiveThirtyEight, Christian Science Monitor, Financial Times, Newsday, San Francisco Chronicle, Time Out NY, Gramophone, Travel & Leisure, and The Strad.',
	},

	{
		employer: 'WQXR Radio',
		title: 'Online Editor',
		location: 'New York, NY',
		dates: '2010 - 2015',
		description: 'Manage WQXR’s online editorial content. Develop WQXR.org as a key source for classical music news and show content, playlists and podcasts.'
	}
	]
};

work.display = function() {
	work.jobs.forEach(function(work) {

		$("#workExperience").append(HTMLworkStart);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.location);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
		var formattedworkTitle = HTMLworkTitle.replace("%data%", work.title);
		var formattedEmployerStart = formattedEmployer + formattedworkTitle;
		var formattedworkDates = HTMLworkDates.replace("%data%", work.dates);
		var formattedworkDescription = HTMLworkDescription.replace("%data%", work.description);
		$(".work-entry:last").append(formattedLocation, formattedEmployerStart, formattedworkDates, formattedworkDescription);

	});
};


var projects = {
	projects: [{
		title: "Online Resume",
		dates: "February 2017",
		description: "A Javascript and HTML-based resume featuring four javaScript objects according to a provided schema, and leveraging a Google Maps API.",
		images: ["images/udacity-logo.png"]
	},
	{
		title: "Chicago Symphony Orchestra Radio Broadcasts",
		dates: "March 2017",
		description: "Script and produced radio broadcasts of concerts by the Chicago Symphony Orchestra, record live at Orchestra Hall in Chicago.",
		images: ["images/cso.jpg"]
	}
	]
};


projects.display = function() {

	projects.projects.forEach(function(project) {

		$("#projects").append(HTMLprojectStart);

		var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
		var formattedprojectDates = HTMLprojectDates.replace("%data%", project.dates);
		var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.description);

		project.images.forEach(function(image) {
			var formattedprojectimage = HTMLprojectImage.replace("%data%", project.images);
			$(".project-entry:last").append(formattedprojectTitle, formattedprojectDates, formattedprojectDescription, formattedprojectimage);
		});

	});
};


var education = {
	"schools": [{
		name: "Northwestern University",
		location: "Evanston, IL",
		degree: "Masters",
		majors: ["Musicology", " Journalism"],
		dates: "1995-96",
		url: "www.Northwestern.edu"
	},
	{
		name: "University of Michigan",
		location: "Ann Arbor, MI",
		degree: "Bachelors",
		majors: ["Musicology", " communications"],
		dates: "1991-1995",
		url: "www.umich.edu"
	},
	],
	"onlineCourses": [{
		title: "Front-end Web Development",
		school: "Udacity",
		dates: "2017",
		url: "Udacity.com"
	}]
};


education.display = function() {

	education.schools.forEach(function(school) {

		$("#education").append(HTMLschoolStart);

		var formattedschoolName = HTMLschoolName.replace("%data%", school.name);
		var formattedschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
		var formattedschoolTitle = formattedschoolName + formattedschoolDegree;
		$(".education-entry:last").prepend(formattedschoolTitle);

		var formattedschooldates = HTMLschoolDates.replace("%data%", school.dates);
		var formattedschoollocation = HTMLschoolLocation.replace("%data%", school.location);
		var formattedschoolmajors = HTMLschoolMajor.replace("%data%", school.majors);
		$(".education-entry:last").append(formattedschooldates, formattedschoollocation, formattedschoolmajors);

	});

	education.onlineCourses.forEach(function(online) {

		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", online.title);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%", online.school);
		var formattedonlineschoolTitle = formattedonlineTitle + formattedonlineSchool;
		var formattedonlineschooldates = HTMLonlineDates.replace("%data%", online.dates);
		var formattedonlineUrl = HTMLonlineURL.replace("%data%", online.url);
		$(".education-entry:last").append(HTMLonlineClasses, formattedonlineUrl, formattedonlineschoolTitle, formattedonlineschooldates);
	});
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
