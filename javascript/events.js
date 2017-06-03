const subForm = document.querySelector('#searchForm');
const searchInput = document.querySelector('#input');

//listen for forms submission
function searchForm(e) {

    //stop default submit action
    e.preventDefault();

    //take in value from form
    const query = searchInput.value;

    //set aditinal values
    const limit = "12";
    const client_Id = "0g2ex58adfewngshnutm5yks4bntml";

    //build query string
    const api = 'https://api.twitch.tv/kraken/search/streams?client_id=' + client_Id + '&query=' + query + '&limit=' + limit;

    var request = new XMLHttpRequest();

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);

            console.log(data);

            var ele = document.getElementById("results");

            if (ele) {
                var gameInfo = document.querySelectorAll("#results article");

                for (var i = 0; i < gameInfo.length; i++) {

                    gameInfo[i].getElementsByTagName('img')[0].src = data.streams[i].preview.medium;
                    gameInfo[i].getElementsByTagName('h3')[0].innerHTML = data.streams[i].channel.name + '<strong>' + data.streams[i].channel.game + '</strong>';

                }

                //console.log(data.streams[0]);

            } else {
                console.log('response error')
            }

            request.onerror = function () {

                console.log('connection error');
            };
        };

        request.onerror = function () {

            console.log('connection error');
        };

        request.open('GET', api, true);
        request.send();
    };
}

subForm.addEventListener('submit', searchForm, false);