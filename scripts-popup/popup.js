let _DEBUG_MODE = true;
let tab;
_DEBUG_MODE ? _debug(0, "Popup script started") : false;


let communication = new Communication();


chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    tab = tabs[0].id;


});


function display(data) {


    console.log(JSON.stringify(data));

    if (data.login) {
        $(".page_nav").text(data.list_num+"/"+data.list_size);
        $(".username").text("DBLAB");
        $(".container-account").show();
        $(".container-login").hide();
        $(".container-content").show();

        if(!data.page) {

            $("#main_content_show_button").css('color','red');
            $("#main_content_show_button").attr("disabled", true);

            $("#menu_content_show_button").css('color','red');
            $("#menu_content_show_button").attr("disabled", true);

        }
        else {
            if (data.page.fields.answer === "") {

                $("#main_content_show_button").css('color','red');
                $("#main_content_show_button").attr("disabled", true);

            }

            if (data.page.fields.menu === "") {

                $("#menu_content_show_button").css('color','red');
                $("#menu_content_show_button").attr("disabled", true);

            }
        }
    } else {
        $(".container-login").show();
        $(".container-account").hide();
        $(".container-content").hide();
        // $("main-content").hide();

    }
}
function update() {

    communication.sendToBackground(Communication.STATUS(),null, display);

}

window.onload = function() {

    update();

    // chrome.tabs.getSelected(null, function(tab) {  // 현재 선택된 탭 얻기
    //     chrome.tabs.sendMessage(tab.id, { todo: Communication.MENU_INITIAL() }, function(response) {
    //
    //         // 응답 처리
    //         // if(response._CHECK_MODE_STATUS) {
    //         //
    //         //     // $(".check_mode").attr("hidden", false)
    //         //
    //         // }
    //
    //
    //         console.log(response);
    //
    //     });
    // });
    $("#main_content_check_button").on("click", function() {
        communication.sendToContent(Communication.MAIN_CONTENT_CHECK());
        close();
    });

    $("#main_content_show_button").on("click", function() {
        communication.sendToContent(Communication.MAIN_CONTENT_SHOW());
        close();
    });


    $("#menu_content_check_button").on("click", function() { communication.sendToContent(Communication.MENU_CONTENT_CHECK());});


    // $(".button_function").on("click", function() { communication.sendToContent();});
    $("#previous_page").on("click", function() { communication.sendToBackground(Communication.PREVIOUSPAGE(),null,update);});
    $("#next_page").on("click", function() { communication.sendToBackground(Communication.NEXTPAGE(),null,update);});

    $("#login-button").on("click", function() {

        let _username = $("input[name='username']").val();
        let _password = $("input[name='password']").val();

        if (_username === "" || _password == "") {



        }
        else {

            let _data = {
                "username": _username,
                "password": _password,
            };
            communication.sendToBackground(Communication.LOGIN(),_data, update);

        }
    });

    $("#logout-button").on("click", function() {

        communication.sendToBackground(Communication.LOGOUT(),{}, update);

    });

    $("#join-button").on("click", function() {

        // let _data = {
        //     "username":$("input[name='username']").val(),
        //     "password":$("input[name='password']").val(),
        // };

        communication.sendToBackground(Communication.JOIN(),{}, update);

    });
    $(".save-page").on("click", function() {


        communication.sendToBackground(Communication.SAVE_PAGE(),null, update);


    });
};


function _debug(_code, _message) {

    let _date = new Date();

    console.log(_code, _date.getHours()+':'+_date.getMinutes()+':'+_date.getSeconds(), _message);
    // console.log(_code, _date.format('hh:mm:ss'), _message);

}


const POPUPCOMMAND = {

    a:1,
    b:2


};