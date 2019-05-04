
var plateThumbArray = ['empty'];
var plateFullArray = ['empty'];


for (let count = 1; count < 29; count++) {
    plateThumbArray.push('assets/images/plateThumbs/' + count + '.jpg');
    plateFullArray.push('assets/images/plateFull/plate' + count + '.jpg');
}
 
for (let count = 1; count < 29; count++) {
    
    var imgThumb = document.createElement('img');
    imgThumb.src = plateThumbArray[count];
    document.getElementById('plateGrid').appendChild(imgThumb);
    imgThumb.classList.add('thumbClick');
     
    
        imgThumb.addEventListener('click', function(event) {
        plateWindow.style.display = "block";
        document.getElementById('nowShowing').src = this.nextSibling.textContent;
        var descriptionPod = document.getElementById('description' + count);
        document.getElementById('caption').innerHTML = descriptionPod.innerHTML;
        
        })  
    
    var imgBigSrc = document.createElement('div');
    // var plateCaption = document.getElementById('description' + count);
    imgBigSrc.textContent = plateFullArray[count];
    // imgBig.alt = plateCaption.innerText;
    document.getElementById('plateGrid').appendChild(imgBigSrc);
    imgBigSrc.classList.add('fullDisplay');
    
    
    

}

var windowClose = document.getElementById("plateWindow");

windowClose.onclick = function() { 
    plateWindow.style.display = "none";
}

var contactInfo = document.getElementById('info2');
var contactLink = document.getElementById('contactLink2');
var infoClose = document.getElementById('infoClose2');

contactLink.addEventListener('click', function(event){
    contactInfo.style.display = "block";
});
    
infoClose.addEventListener('click', function(event){
    contactInfo.style.display = "none";
});


// console.log(descriptionPod);