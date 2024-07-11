//var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all','true');
request.send();
request.onload=function (){
    //var countryData=JSON.parse(this.response);
    var asia=countryData.filter((a)=>{
        if(a.region==='Asia')
          {
                        return a.name;
        }
    });
  }
 // var request=new XMLHttpRequest();
  request.open('GET','https://restcountries.eu/rest/v2/all','true');
  request.send();
  request.onload=function (){
  //var countryData=JSON.parse(this.response);
  const population=countryData.filter((element)=>{
       return element.population<200000;
  })
  console.log(population);
}

//var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all','true');
request.send();
request.onload=function (){
   //var countryData=JSON.parse(this.response);
   countryData.forEach((element)=>{
       console.log(element.name,element.capital,element.flag);
   })}

   //4)Print the total population of countries using reduce function
  
    //var request=new XMLHttpRequest();
   request.open('GET','https://restcountries.eu/rest/v2/all','true');
   request.send();
   request.onload=function (){
   //var countryData=JSON.parse(this.response);
   const population=countryData.reduce((acc,element)=>{
       return acc+element.population;
   })
   console.log(population);
  }

  //5)Print the country which use US Dollars as currency
 

  //var request = new XMLHttpRequest();
  request.open('Get', 'https://restcountries.eu/rest/v2/all', true)
  request.send();
  request.onload = function () {
  //var data = JSON.parse(this.response);
  for(i=0;i<data.length;i++){
       if(data[i].currencies[0].code==="USD")
      {
          console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
      }
    }
   }