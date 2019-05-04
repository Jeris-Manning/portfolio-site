var contactInfo = document.getElementById('info');
var contactLink = document.getElementById('contactLink');

contactLink.addEventListener('click', function(event){
    contactInfo.style.display = "block";
});
    
var infoClose = document.getElementById('infoClose');

infoClose.addEventListener('click', function(event){
    contactInfo.style.display = "none";
});