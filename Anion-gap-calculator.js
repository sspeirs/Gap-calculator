function GetAnion() {
	
		// Validation here
		
	var NaInput, KInput, CIInput, HCO3Input, ValidationText;

    // Get the value of the input fields Na, HCO3,CI and K(optional input)
    NaInput = document.getElementById("Na").value;	
	CIInput = document.getElementById("CI").value;
	HCO3Input = document.getElementById("HCO3").value;
	KInput = document.getElementById("K").value;
	

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(NaInput) || NaInput <= 0) {
        ValidationText = "Na needs a number greater than 0";
		alert(ValidationText);
    } 
	if (isNaN(HCO3Input) || HCO3Input <= 0) {
        ValidationText = "HCO3 needs a number greater than 0";
		alert(ValidationText);
		}
	if (isNaN(CIInput) || CIInput <= 0) {
        ValidationText = "CI needs a number greater than 0";
		alert(ValidationText);
		}
		// if there is no input or K is 0 
	if (KInput=="" || KInput==0)
	{		
	   // Do the calculation without k
	   NoKdoCalculation();
	}
	else {
        
		ValidationText = "The KInput = "+ KInput;
		
		IncKdoCalculation(KInput);
	} 
	}//end includes k function. 
	
	
   function IncKdoCalculation(KInput){
	//Begin Calculation, have set variables to 0 to clear previous . 
		 var elmNa=0, elmK=0, elmCI=0, elmHCO3=0,theResultK=0, AnionAdvice, writeTo;
		
		 
		 elmNA = document.getElementById("Na").value;
		 elmK = KInput;
		 elmCI = document.getElementById("CI").value;		 
		 elmHCO3 = document.getElementById("HCO3").value;
		 
		 theResultIncK=(parseFloat(elmNA)+parseFloat(elmK))-(parseFloat(elmCI)+parseFloat(elmHCO3));
		 
			if(isNaN(parseFloat(theResultIncK)))
		 {
			
			theResultIncK=0;
			document.getElementById("Resultk").innerHTML = theResultIncK.toFixed(2);
			if(theResultIncK == 0)
		  {
		    AnionAdvice = "Advice <br/> The anion gap is 0";
			document.getElementById("ResultAdvice").innerHTML = AnionAdvice;
		  }
		 }
		 else{
		 document.getElementById("Resultk").innerHTML = theResultIncK.toFixed(2);
		
		 if(theResultIncK < 8 )
		  {
		  
		    AnionAdvice = " Advice <br/> Alkaline.  Check blood test sample – I.e fasting/non-fasting";
			writeTo = document.getElementById("ResultAdvice");
			writeTo.innerHTML = AnionAdvice;
		  }
		  else if(theResultIncK >= 8 && theResultIncK <= 12)
		  {
		  
		    AnionAdvice = "Advice <br/> Optimal range for acid-base balance";
			writeTo = document.getElementById("ResultAdvice");
			writeTo.innerHTML = AnionAdvice;
		  }
		  
		  else if(theResultIncK > 12 && theResultIncK <= 14.5)
		  {
		    AnionAdvice = "Advice <br/> Increasing risk of adverse effects from acid burden";
			writeTo = document.getElementById("ResultAdvice");
			writeTo.innerHTML = AnionAdvice;
		  }
		  
		  else if(theResultIncK > 14.5)
		  {
		    AnionAdvice = "Advice <br/> Higher risk of adverse effects from acid burden";
			writeTo = document.getElementById("ResultAdvice");
			writeTo.innerHTML = AnionAdvice;
		  }
		
		 }
			 
		 } // end doCalculation
		 
		 
		 
		 function NoKdoCalculation()
		 {
				
				var elmNa=0, elmCI=0, elmHCO3=0,theResultExcK=0, AnionAdvice, writeTo;
		
		 
		 elmNA = document.getElementById("Na").value;		 
		 elmCI = document.getElementById("CI").value;		 
		 elmHCO3 = document.getElementById("HCO3").value;
		 theResultExcK=(parseFloat(elmNA))-(parseFloat(elmCI)+parseFloat(elmHCO3));
		 
			if(isNaN(parseFloat(theResultExcK)))
		 {
			
			theResultExcK=0;
			document.getElementById("Resultk").innerHTML = theResultExcK.toFixed(2);
			if(theResultExcK == 0)
		  {
		    AnionAdvice = "Advice <br/> The anion gap is 0";
			document.getElementById("ResultAdvice").innerHTML = AnionAdvice;
		  }
		 }
		 else{
		 document.getElementById("Resultk").innerHTML = theResultExcK.toFixed(2);
		 if(theResultExcK < 4 )
		  {
		    AnionAdvice = "Advice <br/> Alkaline.  Check blood test sample – I.e fasting/non-fasting";
			writeTo = document.getElementById("ResultAdvice");
			writeTo.innerHTML = AnionAdvice;
		  }
		  else if(theResultExcK >= 4 && theResultExcK <= 8)
		  {
		    AnionAdvice = "Advice <br/> Optimal range for acid-base balance";
			writeTo = document.getElementById("ResultAdvice");
			writeTo.innerHTML = AnionAdvice;
		  }
		  else if(theResultExcK > 8 && theResultExcK <= 10.5)
		  {
		    AnionAdvice = "Advice <br/> Increasing risk of adverse effects from acid burden";
			writeTo = document.getElementById("ResultAdvice");
			writeTo.innerHTML = AnionAdvice;
		  }
		  else if(theResultExcK > 10.5)
		  {
		    AnionAdvice = "Advice <br/> Higher risk of adverse effects from acid burden";
			writeTo = document.getElementById("ResultAdvice");
			writeTo.innerHTML = AnionAdvice;
		  }
		  
		
		 }   
		 
		 }