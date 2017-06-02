var request = new XMLHttpRequest();

var url = 'https://api.twitch.tv/kraken/search/streams?query=Overwatch';

request.open('GET', url, true);

request.onload = function () {
    if (request.status >= 200 && request.status < 400){
        var data = JSON.parse(request.responseText);

        console.log(data);
    }else{
        console.log('response error', request)
    }
};

request.onerror = function(){

    console.log('connection error');
};


request.send();