//adding skills I know and have experienced with name, logo and alt attribute
const knownSkills = [
    {
        'name' : 'HTML',
        'src' : "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
        'alt' : 'HTML Logo'
    },
    {
        'name' : 'CSS',
        'src' : "https://cdn-icons-png.flaticon.com/512/732/732190.png",
        'alt' : 'CSS Logo'
    },
    {
        'name' : 'Bootstrap 5',
        'src' : "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
        'alt' : 'Bootstrap5 Logo'
        
    },
    {
        'name' : 'JavaScript',
        'src' : "https://cdn-icons-png.flaticon.com/512/1199/1199124.png",
        'alt' : 'JavaScript Logo'
       
    },
    {
        'name' : 'GitHub',
        'src' : "https://cdn-icons-png.flaticon.com/512/5968/5968866.png",
        'alt' : 'GitHub Logo'
    },
    {
        'name' : 'JSON',
        'src' : "https://cdn-icons-png.flaticon.com/512/136/136525.png",
        'alt' : 'JSON Logo'
    }
];

//creating a for loop to display skills in the page
const ulKnownSkills = document.getElementsByClassName('skills-known')[0];
for ( let i = 0; i < knownSkills.length; i++) {
   
    ulKnownSkills.innerHTML +=
    `
    <li class="li-style">
        <h4>${knownSkills[i].name}</h4>
        <img src="${knownSkills[i].src}" alt="${knownSkills[i].alt}" class="img-logos">
    </li>
    `
};







//adding the frameworks and technologies I want to learn in the near future
const unknownSkills = [
    {
        'name' : 'ReactJS',
        'src' : "https://cdn-icons-png.flaticon.com/512/1260/1260667.png",
        'alt' : 'ReactJS Logo'
    },
    {
        'name' : 'Database',
        'src' : "https://cdn-icons-png.flaticon.com/512/919/919836.png",
        'alt' : 'SQL Database Logo'
    },
    {
        'name' : 'NodeJS',
        'src' : "https://cdn-icons-png.flaticon.com/512/919/919825.png",
        'alt' : 'NodeJS Logo'
    }
];

//creating a for loop to display skills in the page
const ulUnknownSkills = document.getElementsByClassName('skills-known')[1];
for ( let i = 0; i < unknownSkills.length; i++) {
    
    ulUnknownSkills.innerHTML += 
    `
    <li class="li-style">
        <h4>${unknownSkills[i].name}</h4>
        <img src="${unknownSkills[i].src}" alt="${unknownSkills[i].alt}" class="img-logos">
    </li>
    `
};
