const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if ((Array.isArray(arr)) && (arr.constructor.name === "Array")){
    /*console.log ('It is an array:', arr);*/
    let arrNew= new Array();
    let discNextFlag = 0;
   /* let discPrevFlag = 0;*/
    let doubleNextFlag = 0;
    let popped;
    /*let doublePrevFlag = 0;*/
    for (let i=0; i<arr.length; i++){
      /*if (Number.isInteger(arr[i]) || ((typeof arr[i]=== 'string') && ((arr[i]==='--discard-prev') || (arr[i]==='--discard-next') || (arr[i]==='--double-prev') || (arr[i]==='--double-next')))){*/
      if ((typeof arr[i] != 'function') && !(Array.isArray(arr[i]))){
     /*console.log('Element', arr[i]);*/
       /* console.log('IsInteger', Number.isInteger(arr[i]));*/
        if (arr[i]=== '--discard-next'){
          discNextFlag = 1;
          /*console.log('arrNew:',arrNew);*/
        }else 
          {
          if(arr[i]==='--discard-prev') 
            {
              if (arrNew.length>0)
              {
                
                popped = arrNew.pop();
                if (popped != arr[i-1]) {
                  arrNew.push(popped);
                }
                /*console.log('arrNew:',arrNew);*/
              };
              /*console.log('--discard-prev');*/            
            }else
              {
                if (arr[i]==='--double-next')
                  {
                    doubleNextFlag = 1;
                  }else { if(arr[i]==='--double-prev') 
                          {
                            if (arrNew.length>0)
                            {
                              popped = arrNew.pop();
                              /*console.log('arrNew:',arrNew);*/

                              /*console.log('arrNew[lenght-1]=', arrNew[arrNew.length-1]);*/
                              /*console.log('popped:', popped);*/
                              if (popped != undefined) 
                              {
                                if (popped === arr[i-1])
                                  {arrNew.push(popped,popped);}
                                  else {arrNew.push(popped);}
                                  /*console.log('arrNew:',arrNew);*/
                              }
                            }                     
                          } 
                          else {
                      
                            if ((doubleNextFlag===0) && (discNextFlag===0))
                                {arrNew.push(arr[i]);}
                                else {
                                  if (doubleNextFlag===1){
                                    
                                  arrNew.push(arr[i],arr[i]);
                                   doubleNextFlag=0;
                                   /*console.log('arrNew:',arrNew);*/
                                  };
                                  };
                                  if (discNextFlag === 1)
                                  {                                    
                                      discNextFlag = 0;
                                      /*console.log('arrNew:',arrNew);*/
                                  };
                              };
                        }
                  }
            }
          };
          /*else {return "'arr' parameter must be an instance of the Array!";}*/
        }
        /*let newArray = arrNew.filter(function(f) { return f !== '' })*/
        /*console.log('old array', arr);*/
        return arrNew;
  
      }else {
        console.log("\'arr\' parameter must be an instance of the Array!");
    throw new TypeError ("\'arr\' parameter must be an instance of the Array!");
    /*return 'fool';*/
  };
  
  
};
/*console.log('Transform result:', transform([1, 2, 3, '--double-next', 4, 5, (test) => {return 1;}]));
console.log('Transform result:', transform(['--discard-prev', 1, 2, 3]));
console.log('Transform result:', transform(['foo', 'bbb']));
console.log('Transform result:', transform(['--double-prev', 1, 2, 3]));
console.log('Transform result:', transform([1, 2, 3, '--double-next']));
console.log('Transform result:', transform([1, 2, 3, '--discard-next','{foo, bar}', true]));
console.log('Transform result:', transform(3));
console.log('Transform result:', transform(3.312312));
console.log('Transform result:', transform(false));
console.log('Transform result:', transform(null));
console.log('Transform result:', transform(undefined));
console.log('Transform result:', transform({ 'foo': 'bar' }));
console.log('Transform result:', transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));
console.log('Transform result:', transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]));
console.log('Transform result:', transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]));
console.log('Transform result:', transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]));
*/


module.exports = {
  transform
};
  /*double means 2 numbers!!!
    check if prev or next member is not a number - ignore!  
*/ 
