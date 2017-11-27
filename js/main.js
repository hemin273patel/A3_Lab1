(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
  // this all are variables    
    var allInfo = document.querySelectorAll('.data-ref'),
        // this is the box of all details of the car
        
        carDetails = document.querySelector('.modelDetails'),
        // this is the box of all price of the car
       
        carPrice = document.querySelector('.priceInfo'),
        // this is the box of all name of the car
        
        carName = document.querySelector('.modelName');
    
    // this is the loop to select the all cars 
    allInfo.forEach(function(Element,index){
        Element.addEventListener('click', converter, false);
    });
    
    //this is the function to change the elements
    function converter () {
        let remote = carData[this.id];
        carName.firstChild.nodeValue = remote.modelName;
        carPrice.firstChild.nodeValue = remote.priceInfo;
        carDetails.firstChild.nodeValue = remote.modelDetails;
        
        //this will chane the class of all the images to change the opacity
        allInfo.forEach(function(car) {
            car.classList.add('nonActive');
        });
        
        //this will remove the selected car from the classlist
        this.classList.remove("nonActive");
    }
   

})();
