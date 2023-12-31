// triangle section
function calculatorTriangle(){
      // triangle base 
      const triangleBase = document.getElementById('triangle-base');
      const triangleBaseValue = triangleBase.value;
      const base = parseFloat(triangleBaseValue);
      triangleBase.value= '';
      // triangle height 
      const triangleHeight =  document.getElementById('triangle-height');
      const triangleHeightValue = triangleHeight.value;
      const height = parseFloat(triangleHeightValue);
      triangleHeight.value='';
      //validation input number 
      if(isNaN(base) || isNaN(height)){
            alert('place valid number')
            return;
      }
      // triangle area 
      const area = 0.5* base * height;
      console.log(area);
      const triangleArea  = document.getElementById('triangle-area');
      triangleArea.innerText= area;
      // add to calculation  section area
      addToCalculationAreaEntry ('Triangle' ,area );

}
// Rectangle section 
function calculatorRectangleArea(){
      // rectangle W
      const rectangleW = document.getElementById('rectangle-W');
      const rectangleWValue = rectangleW.value;
      const width =parseFloat(rectangleWValue);
      rectangleW.value ='';

      // rectangle I
      const rectangleI = document.getElementById('rectangle-I');
      const rectangleIValue = rectangleI.value;
      const length = parseFloat(rectangleIValue);
      rectangleI.value = '';
      // validation  input  number
      if(isNaN(width) || isNaN(length)){
            alert('place number add');
            return;
      }
      //
      // rectangle-area
      const rectangleArea = width * length;

      console.log(rectangleArea);
      const areaRectangle = document.getElementById('rectangle-area');
      areaRectangle.innerText =  rectangleArea;

      // add to calculation area 
      addToCalculationAreaEntry('Rectangle', rectangleArea)
}
// Parallelogram section
function calculatorParallelogramArea(){
      const base = getInputValue('Parallelogram-base');
      console.log(base);
      const height = getInputValue('Parallelogram-height');
      console.log(height);
      // validation input number 
      if(isNaN(base) || isNaN(height)){
            alert('place valid a number');
            return;
      }
      const area = base * height;
      setElementText('Parallelogram-area' , area);   
      // add to calculation area 
      addToCalculationAreaEntry('Parallelogram', area);

}
// Ellipse section 
function calculatorEllipseArea(){
      const majorRadius =  getInputValue('ellipse-major-readus');
      const minorRadius = getInputValue('ellipse-mainur-readus');
      // validation input number 
      if(isNaN(majorRadius) || isNaN(minorRadius)){
            alert('place valid a number');
            return;
      }
      const area = 3.14 * majorRadius * minorRadius;
      const areaTowDecimal = area.toFixed(2);
      setElementText('ellipse-area' , areaTowDecimal);
      // add to calculation  section area
      addToCalculationAreaEntry ('Ellipse' ,areaTowDecimal );

}
function getInputValue (filedId){
      const inputFiled = document.getElementById(filedId);
      const inputFiledValue = inputFiled.value;
      const filedValue = parseFloat(inputFiledValue);
      inputFiled.value = '';
      return filedValue;
}
function setElementText(innerElement , area ){
      const elementText = document.getElementById( innerElement )
      elementText.innerText = area;

}
// add to calculation  section area 
function addToCalculationAreaEntry (areaType ,area ){
     console.log(areaType , + '' , + area );
     const calculationEntry  = document.getElementById('calculation-entry');
     const count = calculationEntry.childElementCount;

     const p =document.createElement('p');
     p.classList.add('my-4')
     p.innerHTML=  `${count + 1} ${areaType} ${area} cm <sup>2</sup> <button  class="  btn btn-sm btn-success" >convert</button>`;

     calculationEntry.appendChild(p);

}
