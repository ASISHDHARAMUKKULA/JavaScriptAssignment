let leapYear=2000;

if(leapYear%4===0){
    if(leapYear%100===0){
        if(leapYear%400===0){
            console.log(`${leapYear} is Leap Year`)
        }
        
    }
}
else
{
    console.log(`${leapYear} is not Leap Year`)
}