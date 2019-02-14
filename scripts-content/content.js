
let _DEBUG_MODE = true;
let _VERSION = "1.0.2";
_DEBUG_MODE ? _debug(0, "HY Extracter Start Version: "+_VERSION) : false;

let startTime = new Date('1/1/1990');
let startMsec = startTime.getMilliseconds();
startTime.setTime(5000000);
let elapsed = (startTime.getTime() - startMsec) / 1000;
// document.write(elapsed);

let webPage;


window.onload = function() {

    _DEBUG_MODE ? _debug(0, "Started function named 'window.onload'") : false;

    // let webPage = new WebPage(document.body);
    // webPage.run();
    // console.log(webPage.paintCandidateNodes());

    // webPage.selectionRootNode();

    // webPage.paintRootCandidateNodes();

    // let a = new Node(document.body);

    _DEBUG_MODE ? _debug(0, "Extracting started") : false;

    // webPage = new WebPage(document.body);

    _DEBUG_MODE ? _debug(0, "Extracting Finished") : false;

    let _CHECK_MODE_STATUS = true;
    let communication = new Communication();


    _DEBUG_MODE ? _debug(0, "Initialed valuables") : false;

    _DEBUG_MODE ? _debug(0, "Send Data") : false;

    // let _data = {todo: Communication.SENDING, webpage: webPage.Json, nodes: webPage.nodesJson};
    // communication.sendToBackground(_data);

    _DEBUG_MODE ? _debug(0, "Send Data") : false;

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

        _DEBUG_MODE ? _debug(0, "Received message code: "+ request.code) : false;

        switch(request.code){
            case Communication.MENU_CONTENT_CHECK():

                _check_mode_on(Communication.MENU_CONTENT_CHECK(), function(){


                    communication.sendToBackground(Communication.MENU_CONTENT_CHECK(),{});

                });


                break;
            case Communication.MAIN_CONTENT_CHECK():

                _check_mode_on(Communication.MAIN_CONTENT_CHECK(), function(data){

                    communication.sendToBackground(Communication.MAIN_CONTENT_CHECK(),data);

                });

                break;
            case Communication.MENU_INITIAL():

                sendResponse(
                    {
                        "_CHECK_MODE_STATUS":_CHECK_MODE_STATUS,
                        "_MENU_NODES":webPage.menuNodes
                    }
                );

                break;

            case 'execute':
                // _DEBUG_MODE ? _debug(0, "Received message") : false;

                webPage = new WebPage(document.body);

                break;
            case 'send_dom':

                // webPage.paintCandidateNodes();
                // new WebPage(document.body);

                // console.log(webPage.nodesJson);

                let _data = {todo: Communication.SENDING2, webpage: webPage.Json, nodes: webPage.nodesJson};
                communication.sendToBackground(_data);

                break;
            case 'check_node':
                // webPage.paintRootCandidateNodes();
                _DEBUG_MODE ? _debug(1, "Menu Node Checking Procedure started") : false;

                _CHECK_MODE_STATUS ? _check_mode_on() : _check_mode_off();

                _CHECK_MODE_STATUS = !_CHECK_MODE_STATUS;

                _DEBUG_MODE ? _debug(1, "Menu Node Checking Procedure finished") : false;
                break;
            case 2:

                break;

            default:

                console.log("Wrong Command");
                break;
        }

        sendResponse({
           "_CHECK_MODE_STATUS":_CHECK_MODE_STATUS,


        });
    });

    _DEBUG_MODE ? _debug(0, "Contents Script Finished") : false;
};

function _check_mode_off() {

    $.destroyHighlightOverlay();

    // This code is not working
    // $('*').off('hover');

    $('*').off('mouseenter mouseleave');

    _DEBUG_MODE ? _debug(1, "Menu Node Checking Mode is deactivated") : false;

}

function _check_mode_on(_code, callback) {

    $("*").hover(
        function(event) {
            event.stopPropagation();
            $(this).highlightOverlay()
        },
        function() {

        });
    $("*").click(function(event) {
        event.stopPropagation();
        // common operation

        // webPage.checkMenu(this);

        let _node = new Node(0, this);

        console.log(_node.XPath);

        callback({code:_code, answer_dom:$(this).html()});
        _DEBUG_MODE ? _debug(1, "Menu Node is checked") : false;

        _check_mode_off();

    });

    _DEBUG_MODE ? _debug(1, "Menu Node Checking Mode is activated") : false;
}

function _debug(_code, _message) {

    let _date = new Date();

    console.log(_code, _date.getHours()+':'+_date.getMinutes()+':'+_date.getSeconds(), _message);
    // console.log(_code, _date.format('hh:mm:ss'), _message);

}