
// ----------- First case --------------

// function getApi() {
//     var xHttp = new XMLHttpRequest();
//     xHttp.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 200) {
//             var items = JSON.parse(this.responseText);

//             var result = "";

            // for (let i = 0; i < items.length; i++) {
            //     var id = items[i].id;
            //     var author = items[i].author;
            //     var download_url = items[i].download_url;

            //     result += `<div class="col-md-4 mb-4">
            //                     <img src="${download_url}" alt="img" class="w-100">
            //                     <h3>${id}</h3>
            //                     <p>${author}</p>
            //                 </div>`;
            // }

//             var home = document.querySelector(".home");
//             home.innerHTML = result;
//         }
//     };

//     xHttp.open("GET", "https://picsum.photos/v2/list?page=1&limit=9", true);
//     xHttp.send();
// }

// getApi();


// ----------- second case --------------

// fetch("https://picsum.photos/v2/list?page=1&limit=9").then(function(items){
    
//     return items.json();
// }).then(function(result){
//     var end = "";
//     for (let i = 0; i < result.length; i++) {
//     var id = result[i].id;
//     var author = result[i].author;
//     var download_url = result[i].download_url;

//     end += `<div class="col-md-4 mb-4">
//                     <img src="${download_url}" alt="img" class="w-100">
//                     <h3>${id}</h3>
//                     <p>${author}</p>
//                 </div>`;
//     }
//     var home = document.querySelector(".home");
//     home.innerHTML = end;
//     }
// );


// ----------- third case --------------

async function getApi() {
    var items = await fetch("https://picsum.photos/v2/list?page=1&limit=9");
    var result = await items.json();
    var end = "";
    for (let i = 0; i < result.length; i++) {
    var id = result[i].id;
    var author = result[i].author;
    var download_url = result[i].download_url;

    end += `<div class="col-md-4 mb-4">
                    <img src="${download_url}" alt="img" class="w-100">
                    <h3>${id}</h3>
                    <p>${author}</p>
                </div>`;
    }
    var home = document.querySelector(".home");
    home.innerHTML = end;
}

getApi()

