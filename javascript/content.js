var request = new XMLHttpRequest();

var url = 'https://api.twitch.tv/kraken/search/streams?client_id=0g2ex58adfewngshnutm5yks4bntml&query=overwatch&limit=12';

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);

        console.log(data);

        var ele = document.getElementById("results");

        if (ele) {
            var gameInfo = document.querySelectorAll("#results article");

            for (var i = 0; i < gameInfo.length; i++) {

                gameInfo[i].getElementsByTagName('img')[0].src = data.streams[i].preview.medium;
                gameInfo[i].getElementsByTagName('h3')[0].innerHTML = data.streams[i].channel.name + '<strong>'+ data.streams[i].channel.game + '</strong>';

            }

            //console.log(data.streams[0]);

        } else {
            console.log('response error')
        }

        request.onerror = function () {

            console.log('connection error');
        };
    };
  };

        request.open('GET', url, true);
        request.send();