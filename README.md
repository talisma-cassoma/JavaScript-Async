# JavaScript-Async
alguns apontamentos do que estou estudando sobre o assunto

**Curiosidades**

<a href="https://www.w3schools.com/jsref/jsref_push.asp">.puch()</a> ele adiciona novos items no fim dum array, e retorna a nova length.

```resolve``` e ```reject``` são métodos do obejeto Promise,

<a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/reject">Promise.reject()</a>

<a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/resolve">Promise.resolve()</a> 

```then``` é um método do obj Promise que envia o resultado quando tudo está certo, isto é resolve 

<a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/then">Promise.then()</a>  


try catch throw finally 

```cash``` é um método do obj Promise que envia o resultado quando da errado, isto é reject

```finally``` é um método do obj Promise que independente do resultado (error ou sucess) ele é executado.  

**OBJETIVOS**

criar um programa que adiciona bandas de forma assincrona usando callback promise e async await  

# <a href="https://github.com/talisma-cassoma/JavaScript-Async/blob/main/callbacks.js">Callbacks</a>

é uma função tipicamente passada como argumento de outra função e/ou chamada quando um evento for acontecido, ou quando uma parte de código receber uma resposta de que estava à espera.

o setTimeout(Callback, delay ,'' ) é uma função nativa do javaSctipt ela usa Callback

	* desvantagem: Callback hell

# <a href="https://github.com/talisma-cassoma/JavaScript-Async/blob/main/promises.js">promises</a> 

promises é um objeto 
sua estrura é mais ou menos assim:

```js
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

p.then(console.log('ola! tudo bem')).then(()=>{
	console.log('esse é o segundo then')
}).catch(console.error).finally(()=>console.log('!done!'))
```
as promises alem de servirem pra tratar das falhas ou erros eles tambem resolvem o problema do callback hell, usando o then como no execicio

# <a href="https://github.com/talisma-cassoma/JavaScript-Async/blob/main/async-await.js">async/await</a>

é sobretudo usada para um codigo mais limpo

tratamento de erro com ```try``` ```cash```

confira o resultado <a href="https://javascript-async.talismamanuel.repl.co">aqui</a>
