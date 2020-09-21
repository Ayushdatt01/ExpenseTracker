	window.onload = function ayush()
	{
	var name = document.getElementById("name");
	var date = document.getElementById("date");
	var amount = document.getElementById("amount");
	var button = document.getElementsByTagName("button")[0];
	var table = document.querySelector("table");
	
	var staticName = document.querySelectorAll("td")[4];
	var staticDate = document.querySelectorAll("td")[5];	
	var staticAmount = document.querySelectorAll("td")[6];
	
	var staticTr = document.querySelectorAll("tr")[1];
	
	var data = document.getElementById("FirstData");


	var image = document.querySelectorAll("td")[7];
	
	
function initial()
				{			
									staticName.innerText = name.value;
			                      	staticDate.innerText = date.value;
			                        staticAmount.innerText = amount.value;
			                        var x = document.createElement("img");	
			                        x.src = "cancel-cross-icon-flat-design-square-internet-gray-button-white-background-cancel-cross-icon-flat-design-square-internet-gray-110805587.jpg"
			                       	x.style.width = "50px";
					                image.appendChild(x);
			                        staticTr.appendChild(image);
			                        table.appendChild(staticTr); 	
			                     	x.onclick = function()
			     					{
			     						 data.remove();
			     					}     				
}


function SecondStep()
{
var dynamicTr = document.createElement("tr");

var cell = document.createElement("td");     	
	           cell.classList.add("last");
	                
var dynamicName = document.createTextNode(name.value);
cell.appendChild(dynamicName);
dynamicTr.appendChild(cell)
table.appendChild(dynamicTr);
			      
var cell2 =  document.createElement("td");   
cell2.classList.add("last")  		
	      
var dynamicDate2 = document.createTextNode(date.value);
cell2.appendChild(dynamicDate2);
dynamicTr.appendChild(cell2);
table.appendChild(dynamicTr);
			      
var cell3 =  document.createElement("td");   
cell3.classList.add("last")  
			      
var dynamicDate3 = document.createTextNode(amount.value);
cell3.appendChild(dynamicDate3);
dynamicTr.appendChild(cell3);
table.appendChild(dynamicTr);	
                
var cell4 = document.createElement("td"); 
cell4.classList.add("last");  
             
var dynamicDate4 = document.createElement("img");
dynamicDate4.src = "cancel-cross-icon-flat-design-square-internet-gray-button-white-background-cancel-cross-icon-flat-design-square-internet-gray-110805587.jpg"  	          
dynamicDate4.style.width = "50px";
cell4.appendChild(dynamicDate4);
dynamicTr.appendChild(cell4);
table.appendChild(dynamicTr);	
			      
			        window.scrollBy({ 
  						     top: 100, // could be negative value
 							 left: 0, 
 							 behavior: 'smooth' 
						});			
			      
			    
			      
			      dynamicDate4.onclick = function()
			         						{
			         						 
			         			               dynamicTr.remove();
			         						     
			         					    }
			         						  
}


	function tablevalue()
	     {
	         
	     
					if((staticName.innerText === "No expenses added yet" )&&(name.value.length > 0) && (amount.value.length > 0) && (date.value.length > 0))
	       
			                   {
			                   		initial();
			                   }
	       
	     
	       
	       else if ((staticAmount !== "") &&(name.value.length > 0) && (amount.value.length > 0) && (date.value.length > 0))
	       
            {      
                SecondStep();              
	            	          
	        }
			                    
		else
               {
                  alert("Please enter all the details");
               }
  }             
 
function keyboard(Event)
{ 
if(staticName.innerText === "No expenses added yet" && name.value.length > 0 && amount.value.length > 0 && date.value.length > 0 && Event.keyCode === 13)
{
    initial();

} 

  else if (staticAmount !== "" && name.value.length > 0 && amount.value.length > 0 && date.value.length > 0 && Event.keyCode === 13)
  	{
  		  SecondStep();              	
  	}

else if(name.value.length === 0 && amount.value.length === 0 && date.value.length === 0 && Event.keyCode === 13)
               {
                  alert("Please enter all the details");
               }

}


			
button.addEventListener("click", tablevalue);
name.addEventListener("keypress", keyboard);
date.addEventListener("keypress", keyboard);
amount.addEventListener("keypress", keyboard);

}
