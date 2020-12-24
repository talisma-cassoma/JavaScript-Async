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
const addBand = (name, callback)=>{
	setTimeout(()=>{
		bands.push({name});
		//essa funcao faz um callback da getBands que é transmitida por parametro
		callback();
	}, 2000)
}
addBand('Queen', getBands);