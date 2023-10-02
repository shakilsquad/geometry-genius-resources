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
      // triangle area 
      const area = 0.5* base * height;
      console.log(area);
      const triangleArea  = document.getElementById('triangle-area');
      triangleArea.innerText= area;
}
// Rectangle section 
function calculatorRectangleArea(){
      // rectangle W
      const rectangleW = document.getElementById('rectangle-W');
      const rectangleWValue = rectangleW.value;
      const wRectangle =parseFloat(rectangleWValue);
      rectangleW.value ='';
      // rectangle I
      const rectangleI = document.getElementById('rectangle-I');
      const rectangleIValue = rectangleI.value;
      const iRectangle = parseFloat(rectangleIValue);
      rectangleI.value = '';
      // rectangle-area
      const rectangleArea = wRectangle * iRectangle;
      console.log(rectangleArea);
      const areaRectangle = document.getElementById('rectangle-area');
      areaRectangle.innerText =  rectangleArea;
}
// Parallelogram section
function calculatorParallelogramArea(){
      const base = getInputValue('Parallelogram-base');
      console.log(base);
      const height = getInputValue('Parallelogram-height');
      console.log(height);
      const area = base * height;
      setElementText('Parallelogram-area' , area);    
}
function calculatorEllipseArea(){
      const majorRadius =  getInputValue('ellipse-major-readus');
      const minorRadius = getInputValue('ellipse-mainur-readus');
      const area = 3.14 * majorRadius * minorRadius;
      const todsemile = area.toFixed(2);
      
      setElementText('ellipse-area' , todsemile);
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
