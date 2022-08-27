const loadData = () => {
    fetch('https://randomuser.me/api/?results=7')
    .then(res => res.json())
    .then(data => displayUsers(data.results))
}
const displayUsers = users =>{
    console.log(users);
    const options = document.getElementById('option');
    let count = 0;
    users.map(user =>{
        count++;
        const div = document.createElement('div');
        div.classList.add('user')
        div.innerHTML=`
        <h3>Option- ${count}</h3>
        <p>Name : ${user.name.first}</p>
        <p>location : ${user.location.city}, ${user.location.country}</p>
        <p>Pic : ${user.picture.thumbnail}</p>
        `
        options.appendChild(div)
    })
}
loadData();