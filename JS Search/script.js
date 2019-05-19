var responseData =[
    {
        "name": "Arun",
        "Role": "Developer",
        "Description": "Begining developer"
    },
    {
        "name": "Raja",
        "Role": "Business Analyst",
        "Description": "Begining BA"
    },
    {
        "name": "Hari",
        "Role": "OBIEE Developer",
        "Decription": "Oracle buisness developer"
    },{
        "name": "Karthick",
        "Role": "Hacker",
        "Decription": "Specalist hacker"
    }
];

function contentCreation(responseData) {
    document.getElementById('des').innerHTML = '';
    var myNode = document.getElementById("content");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    
    responseData.forEach((res, i)=>{
        var element = document.createElement("div");
        element.id = res.name;
        element.addEventListener('click', function(res) {
            console.log(res.srcElement.id);
            document.getElementById('des').innerHTML = responseData.filter((resData)=>{
                return resData.name === res.srcElement.id;
            })[0].name;
        });
        element.appendChild(document.createTextNode(res.name + ' as '+ res.Role));
        document.getElementById('content').appendChild(element);
    })
}
contentCreation(responseData);

function searchPerson() {
   var searchData =  document.getElementById("search").value.toLowerCase();
   var filteredData = responseData.filter(function(data) {
    if(data.name.toLowerCase().includes(searchData) || data.Role.toLowerCase().includes(searchData)) {
        return data;
    }
   });
   console.log(filteredData);
   contentCreation(filteredData)
}
