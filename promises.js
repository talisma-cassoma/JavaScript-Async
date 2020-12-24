const bands = [
	{name: "Iron Maiden"},
	{name: "Megadeth"}
];
const bandList= document.querySelector("#bandList")

const getBands = ()=>{
	setTimeout(()=>{
		let output='';
		//loop forEach
		bands.forEach((item,idx)=>{
			output += `<li>${item.name}</li>`;
		});

		bandList.innerHTML = output;

	}, 1000)
}
const addBand = (name)=>{
	callback = (resolve, reject)=>{. 
		setTimeout(()=>{
			bands.push({name});
			//a gente chama resolve pra declarar que a Promise ja foi resolvida  
			resolve();
		},2000)
 	}
 return new Promise(callback);//o funcao que chama se torna uma promise, nesse caso addBand
}
addBand('Queen')
	.then(()=> {return addBand('AC/DC')})
	.then(getBands)
	.finally(()=>console.log('All bands added'));