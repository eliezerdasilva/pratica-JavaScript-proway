console.log("a")
let response = fetch("https://jsonplaceholder.typicode.com/posts",{
    "method" : "post",
    "body": JSON.stringify({
        "userID": 123456,
        "title": "Publicaçõa de teste",
        "body": "lorem impum solor sit amet"
    }),
    "headers":{
        "Content-type": "application/json"
    }
})
.then((resposta) =>resposta.json())
.then((jsonObject) => console.log(jsonObject))
