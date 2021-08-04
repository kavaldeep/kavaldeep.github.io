
const data = {
    name:"bullt shit"
}
fetch('https://asptestk.azurewebsites.net/home/statPortfolio', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
.then(res => console.log("kkkkkkk"))
