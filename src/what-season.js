const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date != null){
    /*console.log('Date', date);
    console.log('toString',date.toString(date));*/
    /*if (date=='winter'){return 'winter'};
    if (date=='spring'){return 'spring'};
    if (date=='summer'){return 'summer'};
    if (date=='autumn'){return 'autumn'};
    if (date=='fall'){return 'fall'};*/
    try{Date.parse(date)}
    catch{
      
      throw new TypeError("Invalid date!"); };
    try 
      {if ((Object.prototype.toString.call(date) === "[object Date]")&& (isNaN(Date.parse(date)) == false) && (date instanceof Date) && (!isNaN(date)) )
          { 

      /*console.log('Date object checking ok', Object.prototype.toString.call(date));*/
            if (date !== date)
            {
              throw new TypeError("Invalid date!");
            } else {
                  /*console.log('Date checking ok');*/
                  try {let month= date.getMonth();
                        console.log('Month', month);
                        if (month<2 || month==11) 
                              {return 'winter'}
                        else {if (month>1 && month<5) 
                                  {return 'spring';
                              }else {if (month>4 && month<8)
                                        {return 'summer';
                                      }else{return 'autumn'}
                                    }
                              }
                      }
                  catch {throw new TypeError("Invalid date!");}
                    }
        }else { throw new TypeError("Invalid date!");
              }
      } catch { throw new TypeError("Invalid date!");}
    } else { return ("Unable to determine the time of year!");};
  
  
}
/*Date.prototype.isValid = function () {
  
  return this.getTime() === this.getTime();
}; */ 
/*console.log ('Season:', getSeason(new Date(2134, 2, 17, 11, 27, 4, 321)));
console.log ('Season:', getSeason(new Date(1969, 02, 31)));*/
/*console.log ('Season:',getSeason('foo'));*/
/*console.log ('Season:',getSeason({ John: 'Smith' }));*/
/*console.log ('Season:', getSeason(20192701));*/
/*console.log ('Season:', getSeason([2019, '27', 0 + '1']));*/
/*console.log ('Season:', getSeason(() => new Date()));*/
console.log ('Season:',getSeason());

  /*const fakeDate = {
      toString() {
          return Date.prototype.toString.call(new Date());
      },
      [Symbol.toStringTag]: 'Date'
  };

Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));

 console.log ('Season:', getSeason(fakeDate));
  

 const deeperFakeDate = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  getMonth() {
      return Date.prototype.getMonth.call(new Date());
  },
  getFullYear() {
      return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
  },
  getDate() {
      return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
  },
  getHours() {
      return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
  },
  getMinutes() {
      return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
  },
  getSeconds() {
      return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
  },
  getMilliseconds() {
      return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
  },
  getDay() {
      return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
  },
  [Symbol.toStringTag]: 'Date'};
  Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));
  console.log ('Season:', getSeason(deeperFakeDate));
*/
module.exports = {
  getSeason
};
