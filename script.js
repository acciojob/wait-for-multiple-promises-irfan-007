//your JS code here. If required.
let promise1=new Promise((resolved,rejected)=>{
	let time=Math.floor(Math.random()*3)+1;
	setTimeout(()=>resolved(time),time*1000);
});
let promise2=new Promise((resolved,rejected)=>{
	let time=Math.floor(Math.random()*3)+1;
	setTimeout(()=>resolved(time),time*1000);
});
let promise3=new Promise((resolved,rejected)=>{
	let time=Math.floor(Math.random()*3)+1;
	setTimeout(()=>resolved(time),time*1000); 
});
const arr=[promise1,promise2,promise3];
const tbody=document.getElementById("output");
tbody.innerHTML="<tr><td colspan=2>Loading...</td></tr>"
let promiseCombi=Promise.all(arr);
promiseCombi.then((values)=>{
	console.log("success");
	tbody.innerHTML="";
	for(let i=1;i<=3;i++){
		let promise="Promise "+i;
		let val=values[i-1];
		let tr=document.createElement('tr');
		tr.innerHTML=`<td>${promise}</td><td>${val}</td>`;
		tbody.appendChild(tr);
	}
});