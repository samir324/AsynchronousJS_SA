var myread = document.getElementById('myread');
var mycreat = document.getElementById('mycreat');
var myupdate = document.getElementById('myupdate');
var mydelete = document.getElementById('mydelete');

myread.addEventListener('click', function getBook() {

    const xhr = new XMLHttpRequest();

    xhr.open('get', 'http://localhost:3000/books', true)
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.response)
            var book = "";
            for (i = 0; i < data.length; i++) {
                book += `<tr>`;
                book += `<td> ${i} </td>`;
                book += `<td>${data[i].author}</td>`;
                book += `<td>${data[i].country}</td>`;
                book += `<td>${data[i].imageLink}</td>`;
                book += `<td>${data[i].language}</td>`;
                book += `<td>${data[i].link}</td>`;
                book += `<td>${data[i].pages}</td>`;
                book += `<td>${data[i].title}</td>`;
                book += `<td>${data[i].year}</td></tr>`;

            }
            document.getElementById("data").innerHTML = book;

        } else {
            console.error(data);
        }
    }
    xhr.send();
});

// mycreat.addEventListener('click', function addBook() {
//     var url = "http://localhost:3000/books/";
//     var AddDook = {
//         "id": 33,
//         "author": "SAMIR",
//         "country": "Morocco",
//         "imageLink": "images/SAMIR.jpg",
//         "language": "arab",
//         "link": "https://en.wikipedia.org/wiki/images/SAMIR",
//         "pages": 209,
//         "title": "TITLE",
//         "year": 1958
//     }
//     var json = JSON.stringify(AddDook);
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", url);

//     xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     xhr.onload = function () {
//         var book = JSON.parse(xhr.response);
//         if ((xhr.readyState === XMLHttpRequest.DONE && xhr.status === 201)) {

//         } else {
//             console.error(book);
//         }
//     }
//     xhr.send(json);
// });
myupdate.addEventListener('click', function patchBook() {
    var url = "http://localhost:3000/books/15"

    var bookdata = {

        "id": 15,
        "author": "SAMIR",
        "country": "Morocco",
        "imageLink": "images/SAMIR.jpg",
        "language": "arab",
        "link": "https://en.wikipedia.org/wiki/images/SAMIR",
        "pages": 289,
        "title": "TITLE",
        "year": 1278
    };
    var json = JSON.stringify(bookdata);

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        var res = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(res);
        } else {
            console.error(res);
        }
    }
    xhr.send(json);


})


mydelete.addEventListener('click', function deletBook() {

    var url = "http://localhost:3000/books";

    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", url + '/32', true);
    xhr.onload = function () {
        var book = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(book);
        } else {
            console.error(book);
        }
    }
    xhr.send(null);
});


// ***************************** fetch******************************

// let api = "http://localhost:3000/books";


// fetch(api)
//     .then(function (response) {
//         let data = response.json();
//         console.log(data);
//         return data;

//     })


//     .then(function (data) {
//         var book = "";
//         for (i = 0; i < data.length; i++) {
//             book += `<tr>`;
//             book += `<td> ${data[i].id} </td>`;
//             book += `<td>${data[i].author}</td>`;
//             book += `<td>${data[i].country}</td>`;
//             book += `<td>${data[i].imageLink}</td>`;
//             book += `<td>${data[i].language}</td>`;
//             book += `<td>${data[i].link}</td>`;
//             book += `<td>${data[i].pages}</td>`;
//             book += `<td>${data[i].title}</td>`;
//             book += `<td>${data[i].year}</td></tr>`;
//         }
//         document.getElementById("data").innerHTML = book;

//     })

// *****************************XMLhttprequest POST******************************/

// var api20 = "http://localhost:3000/books/20";

// fetch(api20, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify({
//             // la recherche ajout et mise à jour se fait par id donc il faut ajouté un id dans la base de donné "db.json"
//             "id": 20,
//             "author": "kamal",
//             "country": "morocco",
//             "imageLink": "images/things-fall-apart.jpg",
//             "language": "arab",
//             "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart",
//             "pages": 209,
//             "title": "Things Fall Apart",
//             "year": 1958
//         })

//     })
//     // à revoir 
//     .then(res => {
//         return res.json();
//     })

//     .then(data => document.body.innerHTML = data)

//     .then(error => console.log('ERROR'))