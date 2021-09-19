var navUl = document.querySelector('.navButtons');
navUl.innerHTML = "<li><a class=\"links\" id=\'section1a\' href=\"#section1\">Section1</a></li> \n <li><a class=\"links\" id=\'section2a\' href=\"#section2\">Section2</a></li> \n <li><a class=\"links\" id=\'section3a\' href=\"#section3\">Section3</a></li> \n <li><a class=\"links\" id=\'section4a\' href=\"#section4\">Section4</a></li>";

var sections = document.querySelectorAll('section');
var links = document.querySelectorAll('.links');
var navBar = document.querySelector('nav');

onscroll = function(){
    var scrollPosition = document.documentElement.scrollTop;

    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.offsetHeight;
        
        if(scrollPosition >= sectionTop - sectionHeight * 0.35 && scrollPosition < sectionTop + sectionHeight - sectionHeight * 0.35){
            var currentId = section.attributes.id.value;

            removeAllActiveClasses();
            addActiveClass(currentId);
        }
    })
}

var removeAllActiveClasses = function(){
    links.forEach(lnk => {
        lnk.classList.remove('active');
    });
};

var addActiveClass = function(currentId){
    document.getElementById(currentId+"a").classList.add('active');
}
