  function ButtonAchangeImage() {
    const ele = document.getElementById("image");
    console.log(ele.id);
    const newUrl =
      "https://s3.r29static.com/bin/entry/ce2/x,80/2169674/image.jpg";
  
    ele.src = newUrl;
  }

  function ButtonBchangeImage() {
    const ele = document.getElementById("image");
    console.log(ele.id);
    const newUrl =
      "https://www.gotceleb.com/wp-content/uploads/photos/dakota-johnson/the-tonight-show-with-jimmy-fallon-in-nyc/Dakota-Johnson:-The-Tonight-Show-With-Jimmy-Fallon--05.jpg";
  
    ele.src = newUrl;
  }

  function ButtonCchangeImage() {
    const ele = document.getElementById("image");
    console.log(ele.id);
    const newUrl =
      "https://image.cnbcfm.com/api/v1/image/104819285-thor.jpg?v=1529476684";
  
    ele.src = newUrl;
  }

  
  function CopyValue() {
      debugger;
    let para = document.getElementById("txtName").value;
    let eles = document.getElementById("copyname").value = para;
  }


  function GetconsoleData()
  {
      for (let i=0  ; i < Employee.length; i++ )
      {
            console.log(Employee[i].name);
            console.log(Employee[i].age);
            console.log(Employee[i].country);
            console.log(Employee[i].hobbies);
      }
  }


  function GetDataByAge()
  {
      for (let i=0  ; i < Employee.length; i++ )
      {
          if(Employee[i].age < 30)
          {
            document.getElementById("age").innerHTML += Employee[i].name + '</br>' +  Employee[i].age + '</br>' +  Employee[i].country + '</br>' +  Employee[i].hobbies + '</br>';
          }
      }
  }

  function GetDataByCountry()
  {
      for (let i=0  ; i < Employee.length; i++ )
      {
          if(Employee[i].country == 'INDIA')
          {
            document.getElementById("country").innerHTML += Employee[i].name + '</br>' +  Employee[i].age + '</br>' +  Employee[i].country + '</br>' +  Employee[i].hobbies + '</br>';
          }
      }
  }

  let Employee = [
  {
    name: "Aksahy",
    age: 28,
    country: "INDIA",
    hobbies: "Traveling"
  },
  {
    name: "Akhil",
    age: 29,
    country: "China",
    hobbies: "Cricket"
  },
  {
    name: "Jinu",
    age: 31,
    country: "INDIA",
    hobbies: "Singing"
  }
];