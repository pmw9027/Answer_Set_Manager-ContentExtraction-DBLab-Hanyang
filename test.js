var page = getCurrentPageNumber();

function tt() {
    $.ajax({
        type: "POST",
        async: false,
        url: "/Edu/ContentsViewNextProcess",
        data: {"scheduleMemberProgressNo": getQuerystring("scheduleMemberProgressNo"), "gapTime": 300, "currentPage": page++},
        success: function (data) {
            if (data.Success == true) {
                opener.BindProgressList();
                if (data.IsLastPage == true) {
                    alert("수고 하셨습니다. 해당 교육이 완료 되었습니다.");
                }

                console.log(page, " 수강완료");
                window.setTimeout(tt, 10000);

            }
            else {
                alert(data.Message);
                self.close();
            }
        },
        error: function (xhr, status, error) {
            alert("err : " + error);
        }
    });
};

function getQuerystring(paramName){
    var _tempUrl = window.location.search.substring(1); //url에서 처음부터 '?'까지 삭제
    var _tempArray = _tempUrl.split('&'); // '&'을 기준으로 분리하기

    for(var i = 0; _tempArray.length; i++) {
        var _keyValuePair = _tempArray[i].split('='); // '=' 을 기준으로 분리하기
        if(_keyValuePair[0] == paramName){ // _keyValuePair[0] : 파라미터 명 // _keyValuePair[1] : 파라미터 값
            return _keyValuePair[1];
        }
    }
}


window.setTimeout(tt, 10000);