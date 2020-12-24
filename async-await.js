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
	callback = (resolve, reject)=>{
		setTimeout(()=>{
			bands.push({name});
			//a gente chama resolve pra declarar que a Promise ja foi resolvida  
			resolve();												// gera resutado
			//reject('unable to add my nigga')// gera erro
		},2000)
 	}
 return new Promise(callback);//o funcao que chama se torna uma promise, nesse caso addBand
}
 const runAsyncMethods = async ()=>{{}
	  try{
			await addBand('Queen');	//espera ser addBand ser totalmente executada
	  	await addBand('AC/DC');	//espera ser addBand ser totalmente executada
	 		getBands()														// executa getBands que afixa as bandas em lista ul 
		} catch(error){
			console.log(error);
		}
 }
 runAsyncMethods(); 											//executa o codigo 