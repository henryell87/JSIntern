// Henry Ell  // chmas.js
// January 29, 2019 // JSIntern
//This JavaScript program is used to calculate days left until next Christmas.
//Variables set today's date.
today=new Date();
//Variable set new date December 25.
var chmas=new Date(today.getFullYear(), 11, 25);
//Sets the current day in the month and set Christmas in its month and year.
if (today.getMonth()==11 && today.getDate()>25) 
{
chmas.setFullYear(chmas.getFullYear()+1); 
}
//Variable for one day.  
var one_day=1000*60*60*24;
//Finds out how many days there are till Christmas within this year.
console.log(Math.ceil((chmas.getTime()-today.getTime())/(one_day))+
" days left until Christmas!");
