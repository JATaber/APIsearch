function setup() {

    var request = new XMLHttpRequest();

    var search = 'Overwatch';

    console.log(search);

    var url = 'https://api.twitch.tv/kraken/search/streams?client_id=0g2ex58adfewngshnutm5yks4bntml&query='+search+'&limit=12';


    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);

            console.log(data);
        } else {
            console.log('response error')
        }

        var elForm = document.querySelector('#searchForm');
    };

    request.onerror = function () {

        console.log('connection error');
    };

    request.open('GET', url, true);
    request.send();

}

window.addEventListener('load', setup, false);