const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam (members) {
  
  let code = '';
  let j=0;
  if (Array.isArray(members)){
    /*console.log ("Array");*/
    let codeMembers= new Array();
    

    for (let i=0; i<members.length; i++){

        if (typeof members[i] == 'string'){
          
          members[i]=members[i].trim();
          /*console.log ('members i :', members[i]);*/
          /*console.log('Slice:',members[i].slice(0,1));*/
          codeMembers[j]= members[i].slice(0,1).toLocaleUpperCase();
          j++;
        };
    };
  
  
      codeMembers.sort();
      for (let i=0; i<codeMembers.length; i++){
        /*console.log("Member: ", codeMembers[i]);*/
      code += codeMembers[i];
      };
        
  };
  if (code.trim =='')
    {
      return false;
    } else {
      console.log ("Code:", code);
      return code};
 
}
/*console.log ('Code name is:',createDreamTeam(['olivi  a', 111, 'lily', 'Oscar', true, null]));*/

/*result=createDreamTeam ([
  ['David Abram'],
  ['Robin Attfield'],
  'Thomas Berry',
  ['Paul R.Ehrlich'],
  'donna Haraway',
  ' BrIaN_gOodWiN  ',
  {
    0: 'Serenella Iovino'
  },
  'Erazim Kohak',
  '  val_plumwood',
]);
console.log ('Non standart', result);*/
module.exports = {
  createDreamTeam
};
