var request = new XMLHttpRequest();

var url = "https://api.twitch.tv/kraken/search/streams?client_id=0g2ex58adfewngshnutm5yks4bntml&query=overwatch&limit=12";

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);

        console.log(data);

        var ele = document.getElementById("results");

        if (ele) {
            var gameInfo = document.querySelector("#results");

            console.log(data.streams.length);

            var searchData = '<article>';

            for (var i = 0; i < data.streams.length; i++) {

                searchData += '<a href="' + data.streams[i].channel.url + '" target="_blank">';
                searchData += '<img class="medium" src=" ' + data.streams[i].preview.medium + ' ">';
                searchData += '<h3>' + data.streams[i].channel.name + ' <strong>' + data.streams[i].channel.game + '</strong></h3>';
                searchData += '</a>';
                searchData += '</article>';

            }

            searchData += '<a href="https://twitch.tv">View more on Twitch</a>';
            gameInfo.insertAdjacentHTML('beforeEnd', searchData);


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

        request.open('GET', url, true);
        request.send();
