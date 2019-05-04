
var contactInfo = document.getElementById('info3');
var contactLink = document.getElementById('contactLink3');
var infoClose = document.getElementById('infoClose3');

contactLink.addEventListener('click', function(event){
    contactInfo.style.display = "block";
});
    
infoClose.addEventListener('click', function(event){
    contactInfo.style.display = "none";
});