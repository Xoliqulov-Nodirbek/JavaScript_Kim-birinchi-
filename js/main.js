var elForm = document.querySelector(".form");
var elFormInput = document.querySelector(".form__input");
var elFormBtn = document.querySelector(".form__btn");
var elFormResult = document.querySelector(".form__result");
var elPeopleResult = document.querySelector(".card__result--people");
var elBicycleResult = document.querySelector(".card__result--bicycle");
var elCarResult = document.querySelector(".card__result--car");
var elPlaneResult = document.querySelector(".card__result--plane");


var el_ON_FOOD = 3.6;
var el_BICYCLE = 20.1;
var el_CAR = 70;
var el_PLANE = 800;


elForm.addEventListener("submit" , function(evt){
    evt.preventDefault();

    var elRel = elFormInput.value;

    if(elRel <= 0){
        alert `Iltimos ! 0 dan katta va musbar son kiriting !`;
    }
    if(elRel = " "){
        alert `Iltimos Raqam kiriting !`
    }
    
    calculateOnFood();
    calculateBicycle();
    calculateCar();
    calculatePlane();
})



function calculateOnFood(){
    var distance = Number(elFormInput.value);
    var onFoodHour = Math.floor(distance/el_ON_FOOD);
    var onFoodMin = Math.floor((distance/el_ON_FOOD - onFoodHour) * 60);
    var onFoodCek = Math.floor(((distance/el_ON_FOOD - onFoodHour) * 60 - onFoodMin) * 60);
    
    if(distance > 0){
        elPeopleResult.textContent = `${onFoodHour} soat ${onFoodMin} minut ${onFoodCek} sekund`;
    }
    
    if(onFoodHour == 0 && onFoodCek == 0){
        elPeopleResult.textContent = `${onFoodMin} minut`;
    }
    
    if(onFoodCek == 0){
        elPeopleResult.textContent = `${onFoodHour} soat ${onFoodMin} minut`;
    }
    
    if(onFoodHour == 0){
        elPeopleResult.textContent = `${onFoodMin} minut ${onFoodCek} sekund`;
    }
    
    return;
}

function calculateBicycle(){
    var distance = Number(elFormInput.value);
    var bicycleHour = Math.floor(distance/el_BICYCLE);
    var bicycleMin = Math.floor((distance/el_BICYCLE - bicycleHour) * 60);
    var bicycleCek = Math.floor(((distance/el_BICYCLE - bicycleHour) * 60 -bicycleMin) * 60);

    if(distance > 0){
        elBicycleResult.textContent = `${bicycleHour} soat ${bicycleMin} minut ${bicycleCek} sekund`;
    }
    
    if(bicycleHour == 0){
        elBicycleResult.textContent = `${bicycleMin} minut ${bicycleCek} sekund`;
    }
    
    if(bicycleHour == 0 && onFoodMin == 0){
        elBicycleResult.textContent = `${bicycleCek} sekund`;
    }
    
    if(bicycleCek == 0){
        elBicycleResult.textContent = `${bicycleHour} soat ${bicycleMin} minut`;
    }
    
    return;

}

function calculateCar(){
    var distance = Number(elFormInput.value);
    var carHour = Math.floor(distance/el_CAR);
    var carMin = Math.floor((distance/el_CAR - carHour) * 60);
    var carCek = Math.floor(((distance/el_CAR - carHour) * 60 - carMin) * 60);
    
    if(distance > 0){
        elCarResult.textContent = `${carHour} soat ${carMin} minut ${carCek} sekund`;
    }
    
    if(carHour == 0){
        elCarResult.textContent = `${carMin} minut ${carCek} sekund`;
    }
    
    if(carHour == 0 && carMin == 0){
        elCarResult.textContent = `${carCek} sekund`;
    }

    if(carCek == 0){
        elCarResult.textContent = `${carHour} soat ${carMin} minut`;
    }    
    
    return;
}

function calculatePlane(){
    var distance = Number(elFormInput.value);
    var planeHour = Math.floor(distance/el_PLANE);
    var planeMin = Math.floor((distance/el_PLANE - planeHour) * 60);
    var planeCek = Math.floor(((distance/el_PLANE - planeHour) * 60 - planeMin) * 60);
    
    if(distance > 0){
        elPlaneResult.textContent = `${planeHour} soat ${planeMin} minut ${planeCek} sekund`;
    }
    
    if(planeHour == 0){
        elPlaneResult.textContent = `${planeMin} minut ${planeCek} sekund`;
    }
    
    if(planeHour == 0 && planeMin == 0){
        elPlaneResult.textContent = `${planeCek} sekund`;
    }

    if(planeCek == 0){
        elPlaneResult.textContent = `${planeHour} soat ${planeMin} minut`;
    }    
    
    return;
}