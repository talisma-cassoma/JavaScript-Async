# JavaScript-Async
alguns apontamentos do que estou estudando sobre o assunto

***curiosidades***

<a href="https://www.w3schools.com/jsref/jsref_push.asp">.puch()</a>

```resolve``` e ```reject``` sao metodos do obejeto Promise,
<a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/reject">Promise.reject()</a>
<a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/resolve">Promise.resolve()</a> 

```then``` é um metodo do obj Promise que envia o resultado quando tudo está certo, isto é resolve 

<a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/then">Promise.then()</a>  


try catch throw finally 

```cash``` é um metodo do obj Promise que envia o resultado quando da errado, isto é reject

```finally``` é um metodo do obj Promise que independente do resultado (error ou sucess) ele é executado.  

# Callbacks

o setTimeout(Callback, delay ,'' ) é uma funçao nativa do javaSctipt ela usa Callback

	* desvantagem: Callback hell

# promises 

promises é um objeto 
sua estrura é mais ou menos:

```
const callback = (resolve, reject)=>{
const error = false; //tenta error = true e result = false  
const result = true;

	if(error){
		reject(error);
	}
	else{
		resolve(result);
	}
};
p = new Promise(callback);

p.then(console.log).then(()=>{
	console.log('esse é o segundo then')
}).catch(console.error).finally(()=>console.log('!done!'))
```
as promises alem de servirem pra tratar das falhas ou erros eles tambem resolvem o problema do callback hell, usando o then como no execicio

# async/await
