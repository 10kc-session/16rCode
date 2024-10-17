let URL = 'http://localhost:5000/movies/';

async function getData(URL) {
    let response = await fetch(URL);
    let data = await response.json();
    data.forEach(ele => console.log(ele));
}
// getData(URL);
async function postData(URL, options) {
    let response = await fetch(URL, options);
    if (response.ok) {
        console.log(response.statusText, response.status);
    } else {
        console.error("Something Went Wrong");
    }
}
let options = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    },
    "body": JSON.stringify({
        "id": "6",
        "name": "OG"
    })
}
// postData(URL, options);

async function deleteData(id, options) {
    let URL = `http://localhost:5000/movies/${id}`;
    let response = await fetch(URL, options);
    if (response.ok) {
        console.log(response.statusText, response.status);
    } else {
        console.error("Id Not Found");
    }
}
options = {
    "method": "DELETE"
}
// deleteData(4, options);

async function patchUpdate(id, options) {
    let URL = `http://localhost:5000/movies/${id}`;
    let response = await fetch(URL, options);
    if (response.ok) {
        console.log(response.statusText, response.status);
    } else {
        console.error("Id Not Found");
    }
}
options = {
    "method": "PATCH",
    "headers": {
        "Content-Type": "application/json"
    },
    "body": JSON.stringify({
        "name": "Bharateyudu - 2"
    })
}
// patchUpdate(3, options);

async function update(id, options) {
    let URL = `http://localhost:5000/movies/${id}`;
    let response = await fetch(URL, options);
    if (response.ok) {
        console.log(response.statusText, response.status);
    } else {
        console.error("Id Not Found");
    }
}
options = {
    "method": "PUT",
    "headers": {
        "Content-Type": "application/json"
    },
    "body": JSON.stringify({
        "id": "2",
        "name": "Pushpa - 2"
    })
}
update(2, options);

