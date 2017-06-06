const subForm = document.querySelector('.searchForm');
const searchInput = document.querySelector('#input');


//listen for forms submission
function searchForm(event) {

    //stop default submit action
    event.preventDefault();

    //take in value from form
    const query = searchInput.value;

    console.log(query);

    //set additional values
    const limit = "13";
    const client_Id = "0g2ex58adfewngshnutm5yks4bntml";

    var request = new XMLHttpRequest();

    //build query string
    const api = 'https://api.twitch.tv/kraken/search/streams?client_id=' + client_Id + '&query=' + query + '&limit=' + limit;
    console.log(api);



    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);

            console.log(data);

            var ele = document.getElementById("results");

            if (ele) {
                var gameInfo = document.querySelectorAll("#results article");
                var title = document.querySelector('#resultsInfo');

                console.log(data.streams.length);

                title.innerHTML= "Search results for "+ query;

                for (var i = 0; i < gameInfo.length; i++) {

                    gameInfo[i].getElementsByTagName('a')[0].href= data.streams[i].channel.url;
                    gameInfo[i].getElementsByTagName('img')[0].src = data.streams[i].preview.medium;
                    gameInfo[i].getElementsByTagName('h3')[0].innerHTML = data.streams[i].channel.name + ' <strong>'+ data.streams[i].game + '</strong>';

                }

                console.log(data.streams[0]);

            } else {
                console.log('response error');
            }

            request.onerror = function () {

                console.log('connection error');
            };
            //request close
        }
//onload close
    };

    request.open('GET', api, true);
    request.send();

    //search function end
}

subForm.addEventListener('submit', searchForm, false);