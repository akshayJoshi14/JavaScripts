window.onload = function () {
    let employeeData = [
      {
        name: "Akshay",
        age: 28,
        city: "Ahemdabad",
        salary: "20000",
      },
      {
        name: "Jinu",
        age: 30,
        city: "Vadodra",
        salary: "30000",
      },
      {
        name: "Akhil",
        age: 30,
        city: "Banglore",
        salary: "50000",
      },
      {
        name: "Parth",
        age: 30,
        city: "Ahemdabad",
        salary: "25000",
      },
      {
        name: "Ankit",
        age: 28,
        city: "Anand",
        salary: "22000",
      },
    ];
  
    if (localStorage.getItem("superheroes") == null) {
      localStorage.setItem("superheroes", JSON.stringify(employeeData));
    }
  };
  
  function display(superarray = undefined) {
    let tabledata = "";
    let superheroes;
    if (superarray == undefined) {
      superheroes = JSON.parse(localStorage.getItem("superheroes"));
    } else {
      superheroes = superarray;
    }
  
    superheroes.forEach(function (superhero, index) {
      let currentrow = `<tr>
        <td>${index + 1}</td>
        <td>${superhero.name}</td>
        <td>${superhero.age}</td>
        <td>${superhero.city}</td>
        <td>${superhero.salary}</td>
        <td>
        <button onclick='deleteSuperhero(${index})'>delete</button>
        </td>
        </tr>`;
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    //   document.getElementById("tdata").innerHTML = tabledata;
  }
  
  display();
   
  function searchByName() {
    let searchValue = document.getElementById("searchName").value;
    let superheroes = JSON.parse(localStorage.getItem("superheroes"));
    let newdata = superheroes.filter(function (superhero) {
      return (
        superhero.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1 ||
        superhero.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }
 

  function deleteSuperhero(index) {
    let superheroes = JSON.parse(localStorage.getItem("superheroes"));
    superheroes.splice(index, 1);
    localStorage.setItem("superheroes", JSON.stringify(superheroes));
    display();
  }
  
  