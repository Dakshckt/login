
value = 0
arr = []


function userExists(username) 
{
    for(i=0 ; i < arr.length ; i++)
    {
        if (arr[i].name.toLowerCase() === username.toLowerCase()) 
        {
            return true; // User exists in the array
        }            
    }
}

function remeberBox()
{
    ans = document.querySelector("#checkBoxID");
    ans.checked = !ans.checked;
    remeberCheckBox(ans);

}

function remeberCheckBox(myvar)
{
    if (myvar.checked) {
        value = 1
        console.log(value);
    }
    else if(!myvar.checked)
    {
        value = 0
        console.log(value);
    }
}

function collectData(myvar)
{
    console.log("funciton called");
    userName = (document.querySelector(".txt1").value).toLowerCase();
    password = (document.querySelector(".txt2").value).toLowerCase();
    userNameObj = {}
    if(userExists(userName))
    {
        alert("User Alredy Exsist")
    }
    else
    {        
        if(userName == "" && password == "")
        {
            alert("Enter Valid User Name and Password")
        }    
        else if(userName == "")
        {
            alert("Enter Valid User Name");
        }
        else if(password == "")
        {
            alert("Enter vALID Password");
        }
        else
        {
            userNameObj.name = userName;
            userNameObj.pass = password;
            if(arr.push(userNameObj))
            alert("Successfull")          
            console.log(arr);
        }
        
    }
    document.querySelector(".txt1").value = "";
    document.querySelector(".txt2").value = "";

}

function forgotPass()
{
    alert("Not Defined Yet");
}

function accountFunc()
{
    alert("Not Defined Yet");
}

