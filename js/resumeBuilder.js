// /*
// This is empty on purpose! Your code to build the resume will go here.
//  */


var bio = {
	name : ["Brian Wise"],
	role : ["Web Developer"],
	contacts : {
		email : "myemailaddress@gmail.com",
		mobile : "555-555-5555",
		github : "briancwise",
    	location: ["Brooklyn, NY"],
    	twitter : "@briancwise" },
    bioPic : ["images/fry.jpg"],
    welcomeMessage : ["Brian Wise is a web developer with a background in journalism, classical music and digital media"],
	skills : ["Javascript", " CSS", " HMTL", " jQuery"],
};

 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
 $("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
 $("#header").prepend(formattedName);

 var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
 $("#topContacts").append(formattedMobile);

 var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

 var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
 $("#topContacts").append(formattedTwitter);

 var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
 $("#topContacts").append(formattedGithub);

if (bio.skills.length > 1){
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPic);

if (bio.skills.length > 0){
var formattedworkDescription = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage );
$("#header").append(formattedworkDescription);
}

var formattedSkillsHead = HTMLskillsStart.replace("%data%", "Skills at a Glance");
 $("#header").append(formattedSkillsHead);

for (var indexCount = 0; indexCount < bio.skills.length; indexCount++) {
    console.log(bio.skills[indexCount]);
};

 var formattedSkills = HTMLskills.replace("%data%", bio.skills);
 $("#header").append(formattedSkills);

}

var work = {
"jobs": [
  {
	employer : "Chicago Symphony Orchestra",
	title : "Producer",
	dates : "December 2016 - Present",
	description : "Producing radio broadcasts for the CSO",
	location : "Brooklyn, NY"
},
{
	employer : 'Freelance Journalist',
	title : 'Writer and Editor',
	dates : '1998 - Present',
	description : 'Writing for various outlets around the world.',
	location : 'Brooklyn, NY'
}
  ]
};

 function displayWork() {
	for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);


var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
$(".work-entry:last").append(formattedLocation);
	
var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

var formattedEmployerStart = formattedEmployer + formattedworkTitle;
	$(".work-entry:last").append(formattedEmployerStart);

var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
$(".work-entry:last").append(formattedworkDates);

var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
$(".work-entry:last").append(formattedworkDescription);

}
}
displayWork();


var projects = {
	sampleProjects: [
	{
	title : "Online Resume", 
	dates : "February 2017",
	description : "A Javascript and HTML-based resume",
},
{
	title: "Radio Project",
	dates: "March 2017",
	description: "Radio broadcasts for the CSO",
}
  ]
};

// function displayProject() {
// 	for (sampleProject in sampleProjects.projects){
// 	$("#projects").append(HTMLprojectStart);

// var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.sampleProjects[project].title);
// $(".project-entry:last").append(HTMLprojectTitle);
// }

// displayProject;


function displayProjects() {
for (project in projects.sampleProjects){

	$("#projects").append(HTMLprojectStart);	

	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.sampleProjects[project].title)
	$(".project-entry:last").append(formattedTitle);

	var formattedDates = HTMLprojectDates.replace("%data%", projects.sampleProjects[project].dates)
	$(".project-entry:last").append(formattedDates);

	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.sampleProjects[project].description)
	$(".project-entry:last").append(formattedDescription);

	// if (projects.projects[project].images.length > 0){
	// 	for (image in projects.projects[project].images) {
	// 		var formattedImage = HTMLprojectImage.replace("%data%", projects.sampleProjects[project].images[image]);
	// 		$(".project-entry:last").append(formattedImage);

	// 	}
	}
}
displayProjects();


var education = {
  "schools": [
  {
       name: "Northwestern University",
       location: "Evanston, IL",
       degree: "Masters",
       major: "Musicology",
       dates: "1995-96",
       url: "www.Northwestern.edu"
    },   
    {
    	name: "University of Michigan",
    	location: "Ann Arbor, MI",
    	degree: "Bachelors",
    	major: "Musicology",
    	dates: "1991-95",
    	url: "www.umich.edu"
    },
],
	"onlineCourses": [
	{
		school: "Udacity", 
		title: "Front-end Web Development",
		dates: "2017", 
		url: "Udacity.com"
}
]
};


function displayEducation() {
for (school in education.schools) {
$("#education").append(HTMLschoolStart);

var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
var formattedschoolTitle = formattedschoolName + formattedschoolDegree;
$(".education-entry:last").prepend(formattedschoolTitle);

var formattedschooldates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
$(".education-entry:last").append(formattedschooldates);

var formattedschoollocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
$(".education-entry:last").append(formattedschoollocation);

var formattedschoolmajors = HTMLschoolMajor.replace("%data%", education.schools[school].major);
$(".education-entry:last").append(formattedschoolmajors);
}
}
displayEducation();

function displayOnlineEducation() {
for (school in education.onlineCourses){
	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLschoolStart);

	var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
	var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
	
	var formattedonlineschoolTitle = formattedonlineTitle + formattedonlineSchool;
	$(".education-entry:last").append(formattedonlineschoolTitle);
	
	var formattedonlineschooldates = HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates);
	$(".education-entry:last").append(formattedonlineschooldates);

		var formattedonlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
	$(".education-entry:last").append(formattedonlineUrl);

}
}
displayOnlineEducation();

$("#mapdiv").append(googleMap);

