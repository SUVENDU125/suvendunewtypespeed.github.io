function myfun1(){
	 var name12=document.getElementById('name2').value
	 var email12=document.getElementById('email2').value
	 var mobile12=document.getElementById('mobile2').value
	 var pass12=document.getElementById('pass2').value
	 var cpass12=document.getElementById('cpass2').value

	 var namechk= /^[a-zA-Z]{3,25}$/;
	 var emailchk= /^[a-zA-Z1-9]{3,15}@[a-zA-Z1-9]{3,15}[.]{1}[a-zA-Z1-9.]{2,6}$/;
	 var mobilechk= /^[789][0-9]{9}$/;
	 var passchk= /^(?=.*[789])(?=.*[!@#$%^&*])[a-zA-Z1-9!@#$%^&*]{6}$/;

	 if(namechk.test(name12)){
	 	document.getElementById('name2').style.border = '2px solid green'
	 }
	 else{
	 	document.getElementById('name2').style.border = '2px solid red'
	 	return false;
	 }
	 if(emailchk.test(email12)){
	 	document.getElementById('email2').style.border = '2px solid green'
	 }
	 else{
	 	document.getElementById('email2').style.border = '2px solid red'
	 	return false;
	 }
	 if(mobilechk.test(mobile12)){
	 	document.getElementById('mobile2').style.border = '2px solid green'
	 }
	 else{
	 	document.getElementById('mobile2').style.border = '2px solid red'
	 	return false;
	 }
	 if(passchk.test(pass12)){
	 	document.getElementById('pass2').style.border = '2px solid green'
	 }
	 else{
	 	document.getElementById('pass2').style.border = '2px solid red'
	 	return false;
	 }
	 if(cpass12.match(pass12)){
	 	document.getElementById('cpass2').style.border = '2px solid green'
	 }
	 else{
	 	document.getElementById('cpass2').style.border = '2px solid red'
	 	return false;
	 }


}

const btn=()=> {
	let noc=document.getElementById('mywords').value.length;
	let now=document.getElementById('mywords').value;
	let nos=document.getElementById('mywords').value;

	if(now.replace(/\s/g,"").length<=0){
		alert('Sorry white space not allowed');
	}
	else{
		nos=nos.match(/\s+/g);
		nos=nos.length;
		now=now.match(/\w+/g);
		now=now.length;
		let noc5=(noc)-nos;	
	    document.getElementById('noc1').innerHTML=" Total Number of Character :"+" "+noc5;
	    document.getElementById('now1').innerHTML="Total Number of Word :"+" "+now;
	    document.getElementById('nos1').innerHTML="Total Number of Space :"+" "+nos;
	}
}
 










