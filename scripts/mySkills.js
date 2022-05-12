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
        'name' : 'JavaScript',
        'src' : "https://cdn-icons-png.flaticon.com/512/1199/1199124.png",
        'alt' : 'JavaScript Logo'
       
    },
    {
        'name' : 'Bootstrap 5',
        'src' : "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
        'alt' : 'Bootstrap5 Logo'
        
    },
    
    {
        'name' : 'jQuery',
        'src' : "https://cdn.iconscout.com/icon/free/png-256/jquery-8-1175153.png",
        'alt' : 'jQuery Logo'
    },
    {
        'name' : 'JSON',
        'src' : "https://cdn-icons-png.flaticon.com/512/136/136525.png",
        'alt' : 'JSON Logo'
    },
    {
        'name' : 'GitHub',
        'src' : "https://cdn-icons-png.flaticon.com/512/5968/5968866.png",
        'alt' : 'GitHub Logo'
    }
];

//creating a for loop to display skills in the page
const ulKnownSkills = document.getElementsByClassName('skills-list')[0];
for ( let i = 0; i < knownSkills.length; i++) {
   
    ulKnownSkills.innerHTML +=
    `
    <li>
        <p>${knownSkills[i].name}</p>
        <img src="${knownSkills[i].src}" alt="${knownSkills[i].alt}" class="skills-img-logos">
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
        'src' : "https://cdn-icons-png.flaticon.com/512/1265/1265531.png",
        'alt' : 'SQL Database Logo'
    },
    {
        'name' : 'NodeJS',
        'src' : "https://cdn-icons-png.flaticon.com/512/919/919825.png",
        'alt' : 'NodeJS Logo'
    },
    {
        'name' : 'API',
        'src' : 'https://cdn-icons.flaticon.com/png/512/1493/premium/1493169.png?token=exp=1652310850~hmac=7849433afa7bb00c595a5d0443119738',
        'alt' : 'API logo'
    }
];

//creating a for loop to display skills in the page
const ulUnknownSkills = document.getElementsByClassName('skills-list')[1];
for ( let i = 0; i < unknownSkills.length; i++) {
    
    ulUnknownSkills.innerHTML += 
    `
    <li>
        <p>${unknownSkills[i].name}</p>
        <img src="${unknownSkills[i].src}" alt="${unknownSkills[i].alt}" class="skills-img-logos">
    </li>
    `
};
