let submit = document.getElementById('btn')
submit.onclick = () => {
    let date = new Date()
    let presentYear = date.getFullYear();
    let presentDay = date.getDate();
    let presentMonth = date.getMonth()+1;

    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let dayOfMonth= [31,28,31,30,31,30,31,31,30,31,30,31]
    
    if(presentYear < year) {
        alert("Enter year " +presentYear+" or less");
    }else if(day > dayOfMonth[month-1]){
        console.log(dayOfMonth[month-1])
        alert(day+" days are not present in the given month");
    }
   
    if(date != "" && month!="" && year!=""){
        let ageDay =document.getElementById('days')
      let ageMonth =document.getElementById('months')
      let ageYear =document.getElementById('years')

    if ( day > presentDay) {
        presentDay = presentDay + dayOfMonth[month-1];
        presentMonth = presentMonth - 1;
     }
     if (month > presentMonth) {
        presentYear = presentYear - 1;
        presentMonth = presentMonth + 12;
     }
      let final_day = presentDay - day;
      let final_month = presentMonth - month;
      let final_year = presentYear - year;

      

      ageDay.innerText=final_day
      ageMonth.innerText=final_month
      ageYear.innerText=final_year

    }
    
      

    


}






