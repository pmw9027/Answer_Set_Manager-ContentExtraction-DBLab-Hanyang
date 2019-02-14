let _DEBUG_MODE = true;

_DEBUG_MODE ? _debug(0, "Background script started") : false;

class System{

    constructor() {

        this._account = new Account();

        this._host = "localhost";
        this._port = "8000";

        this._pages = [];
        this._cur_page_index = 0;

    }

    get account() {
        return this._account;
    }

    set pages(value) {
        this._pages.push(value);
    }

    getPage(_index) {

        return this._pages[_index];
    }
    get CurPage() {
        return this._pages[this.cur_page_index-1];
    }

    get pages() {
        return this._pages;
    }
    get pageSize() {

        return this._pages.length;
    }

    get cur_page_index() {
        return this._cur_page_index;
    }

    page_move(value) {

        if (0 < this.cur_page_index + value && this.cur_page_index + value < this.pageSize + 1) {
            if (value === 1) {
                this._cur_page_index++;

            }
            else if (value === -1) {
                this._cur_page_index--;

            }

            return 0;
        }
        else {

            return 1;
        }
    }
}


class Account{
    constructor(_username) {

        this._isLogin = false;
        this._token = null;

    }

    get isLogin() {
        return this._isLogin;
    }


    set isLogin(value) {
        this._isLogin = value;
    }


    get token() {
        return this._token;
    }

    set token(value) {
        this._token = value;
    }
}

class Answer {



}

class Page {

    constructor(_pk) {
        this._answer = new Answer();
        this._pk = _pk;
        this._url = null;


    }

    get pk() {
        return this._pk;
    }

    get url() {
        return this._url;
    }

    set url(value) {
        this._url = value;
    }

    get answer() {
        return this._answer;
    }
}

tabs_count = 5;
tabs_id = [];
let page_list = [];


if (_DEBUG_MODE) {

    HOST = "localhost";
    PORT = "8000";

    CLIENT_ID = "LSeHhWNHcH0VWHpFgQ4JMj2vd4Ac7y6hO9JFV0Zt";
    CLIENT_SECRET = "gGJ9SCkbt5uVU644gkmL39lyeBGCmo7PFFsqDXSwzyv5udfhMqp5rxzCr1KFZULfMg2jjMJH1UcUK7zFC7EmXhP1Np7okXJneixYM4ApC3ip5goejXXfABnKsC23Ghyh";

}
else {

    HOST = "127.0.0.1";
    PORT = "8000";

}
var account = new Account();

SYSTEM = new System();

isLogin(account);



// url_list = ["www.serienjunkies.org","http://www.hotair.com","http://www.te3p.com","http://www.gruenderszene.de","http://www.socialspark.com","http://www.hasoffers.com","http://www.slodive.com","http://www.gamestlbb.com","http://www.oneddl.eu","http://www.unblog.fr","http://www.orgasmatrix.com","http://www.allkpop.com","http://www.radio.com","http://www.webdesignerdepot.com","http://www.redmondpie.com","http://www.envato.com","http://www.noticierodigital.com","http://www.dawn.com","http://www.babosas.com","http://www.anime44.com","http://www.allthingsd.com","http://www.wpbeginner.com","http://www.deadline.com","http://www.smartpassiveincome.com","http://www.hollywoodlife.com","http://www.amctv.com","http://www.daylife.com","http://www.giorgiotave.it","http://www.ufl.edu","http://www.sucuri.net","http://www.deutsche-startups.de","http://www.fayerwayer.com","http://www.premiumpress.com","http://www.appthemes.com","http://www.psdgraphics.com","http://www.wwtdd.com","http://www.slashgear.com","http://www.tribune.com.pk","http://www.entrance-exam.net","http://www.edublogs.org","http://www.kataweb.it","http://www.hip2save.com","http://www.macromill.com","http://www.wpzoom.com","http://www.mojo-themes.com","http://www.uproxx.com","http://www.awwwards.com","http://www.bossip.com","http://www.zero10.net","http://www.pjmedia.com","http://www.digitaltrends.com","http://www.channeladvisor.com","http://www.n-mobile.net","http://www.gamefront.com","http://www.wpmu.org","http://www.priceindia.in","http://www.tutorialzine.com","http://www.moheet.com","http://www.moveon.org","http://www.barstoolsports.com","http://www.techsupportforum.com","http://www.dailyblogtips.com","http://www.adsmarket.com","http://www.mademan.com","http://www.betanews.com","http://www.wwwhatsnew.com","http://www.inquisitr.com","http://www.newwpthemes.com","http://www.flyertalk.com","http://www.rtl.be","http://www.jquerymobile.com","http://www.flexmls.com","http://www.goodgamestudios.com","http://www.suzukikenichi.com","http://www.ktonanovenkogo.ru","http://www.uberhumor.com","http://www.kriesi.at","http://www.xovi.de","http://www.zonadictoz.com.ar","http://www.onlinewatchmovies.net","http://www.webdesignerwall.com","http://www.techtunes.com.bd","http://www.proceso.com.mx","http://www.thekrazycouponlady.com","http://www.themecraft.net","http://www.tlvmedia.com","http://www.hotnews.ro","http://www.neteller.com","http://www.optimizepress.com","http://www.wsodownloads.info","http://www.bgr.com","http://www.dyn.com","http://www.hypebeast.com","http://www.topdocumentaryfilms.com","http://www.mlmleadsystempro.com","http://www.pepperjamnetwork.com","http://www.thepioneerwoman.com","http://www.mysitemyway.com","http://www.estekhtam.com","http://www.thinkprogress.org","http://www.digitalmarketer.com","http://www.ayudawordpress.com","http://www.ultimatesocialchallenge.com","http://www.androidadvices.com","http://www.vcommission.com","http://www.alt1040.com","http://www.thefrisky.com","http://www.frenchweb.fr","http://www.desi-tashan.com","http://www.xvideos-field.com","http://www.swalif.net","http://www.btemplates.com","http://www.hdfilmsitesi.com","http://www.iwannawatch.net","http://www.korben.info","http://www.themefuse.com","http://www.appstorm.net","http://www.osxdaily.com","http://www.zemtv.com","http://www.geek.com","http://www.ilpost.it","http://www.boredpanda.com","http://www.gopro.com","http://www.wired.jp","http://www.ubergizmo.com","http://www.pagelines.com","http://www.kibeloco.com.br","http://www.tipsandtricks-hq.com","http://www.naldzgraphics.net","http://www.bloter.net","http://www.instantshift.com","http://www.ratemyprofessors.com","http://www.mentalfloss.com","http://www.straitstimes.com","http://www.toucharcade.com","http://www.freshome.com","http://www.cultofmac.com","http://www.giga.de","http://www.moneysavingmom.com","http://www.bo7.net","http://www.mediaite.com","http://www.jandan.net","http://www.collider.com","http://www.parentsconnect.com","http://www.marksdailyapple.com","http://www.tvline.com","http://www.gogoanime.com","http://www.phonegap.com","http://www.sendgrid.com","http://www.raventools.com","http://www.presse-citron.net","http://www.css3.info","http://www.seo-united.de","http://www.cssmania.com","http://www.sankakucomplex.com","http://www.inhabitat.com","http://www.frandroid.com","http://www.androidauthority.com","http://www.alverde.net","http://www.theme.wordpress.com","http://www.domain-pop.com","http://www.gaadi.com","http://www.hornywhores.net","http://www.livechatinc.com","http://www.freejobalert.com","http://www.pcgamer.com","http://www.shatel.ir","http://www.piwik.org","http://www.wp-themes.com","http://www.momdot.com","http://www.surveygizmo.com","http://www.androidcommunity.com","http://www.adultbay.org","http://www.fnac.es","http://www.premiumpixels.com","http://www.fthemes.com","http://www.tehran98.com","http://www.cucirca.com","http://www.emusic.com","http://www.sceper.eu","http://www.nikonrumors.com","http://www.fbprofilecovers.com","http://www.oppapers.com","http://www.mundodastribos.com","http://www.appbank.net","http://www.onlinemeetingnow.com","http://www.sitetrail.com","http://www.gamme.com.tw","http://www.buddypress.org","http://www.xbmc.org","http://www.coliss.com","http://www.tgareed.com","http://www.feedblitz.com","http://www.m7shsh.com","http://www.thedirty.com","http://www.newalbumreleases.net","http://www.johnchow.com","http://www.ebay.cn","http://www.webappers.com","http://www.jaidefinichon.com","http://www.managewp.com","http://www.yourinspirationweb.com","http://www.prisonplanet.com"]

_DEBUG_MODE ? _debug(0, "Global valuables are initialed") : false;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {


        let _from = sender.tab ? "script" : "extension";
        _DEBUG_MODE ? _debug(0, "Message is received from "+ _from + "(code:"+request.todo+")\n"+JSON.stringify(request.data)) : false;

        let t_data = JSON.stringify(request.data);
        let _data;
        let _res;

        switch(request.todo) {

            case Communication.SAVE_PAGE():

                chrome.tabs.query({active:true}, tabs=> {

                    chrome.pageCapture.saveAsMHTML({tabId:tabs[0]['id']}, mhtmlData => {



                        const reader = new FileReader();

                        reader.addEventListener('loadend', (e) => {
                            const text = e.srcElement.result;
                        });

                        _data = {
                            page_url:tabs[0]['url'],
                            mhtmlData:reader.readAsText(mhtmlData)
                        };


                        ajax_request("/answers/pages", "POST", _data, "json", function (xhr) {

                            xhr.setRequestHeader("Authorization", "Bearer "+account.token);

                        }, null, null);

                        new Page();

                    });
                });

                break;
            case Communication.JOIN():


                chrome.tabs.update({url:"http://"+HOST+":"+PORT});


                break;
            case Communication.ISLOGIN():

                break;
            case Communication.LOGIN():
                _DEBUG_MODE ? _debug(0, "Message is sent to Server (code:"+Communication.LOGIN()+")\n"+JSON.stringify(request.data)) : false;

                _data = {
                    grant_type:'password',
                    username:request.data['username'],
                    password:request.data['password']
                };

                ajax_request("/o/token/", "POST", _data, "json",
                    function(xhr){
                        xhr.setRequestHeader ("Authorization", "Basic " + btoa(CLIENT_ID + ":" +CLIENT_SECRET));

                    },
                    function(data){
                        account.isLogin = true;
                        account.token = data['access_token'];

                        ajax_request("/answers/pages", "GET", null,"json",
                            xhr => {
                                xhr.setRequestHeader("Authorization", "Bearer "+account.token);

                            },
                            function(data) {

                                let _data = data['data'];
                                _data.forEach(function (value, key) {

                                    page_list.push(value);

                                    let _pk = value['pk'];
                                    let _url = value['page_url'];
                                    let _page = new Page(_pk);

                                    _page.url = _url;

                                    SYSTEM.pages = _page;

                                });
                                sendResponse({code:Communication.LOGIN(),data:123});

                            },
                            null
                        );
                    },
                    function (request, status, error) {

                        if (request.status === "400") {

                        }

                    });


                break;
            case Communication.LOGOUT():
                _data = {
                    token:account.token,
                    client_id:CLIENT_ID,
                    client_secret:CLIENT_SECRET
                };

                ajax_request("/o/revoke_token/","POST", _data,"text",
                    function(xhr){

                        xhr.setRequestHeader("Authorization", "Bearer "+account.token);

                    },
                    function(data){
                        account = new Account();
                        sendResponse({code:Communication.LOGOUT(),data:123});
                });
                break;
            case Communication.MAIN_CONTENT_CHECK():

                _DEBUG_MODE ? _debug(0, "Message is sent to Server (code:"+Communication.LOGIN()+")\n"+JSON.stringify(request.data)) : false;

                $.ajax({
                    url: "http://" + HOST + ":"+PORT+"/answers",
                    method: "POST",
                    data: JSON.stringify({
                        page:page_list[list_num],
                        answer_dom:request.data['answer_dom']
                    }),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    xhrFields: { withCredentials: true },
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader("Authorization", "Bearer "+account.token);
                    },
                    success:function (data) {
                        console.log("test");
                    },
                    error:function (a, b, c) {
                        console.log(a, b, c)
                    }
                });

                break;
            case Communication.MAIN_CONTENT_SHOW():


                sendResponse(page.answer);
                break;
            case Communication.MENU_CONTENT_CHECK():

                $.ajax({
                    url: "http://" + HOST + ":"+PORT+"/answers",
                    method: "POST",
                    data: JSON.stringify({
                        page:page_list[list_num]

                    }),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    xhrFields: { withCredentials: true },
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader("Authorization", "Bearer "+account.token);
                    },
                    success:function (data) {
                        console.log("test");
                    },
                    error:function (a, b, c) {
                        console.log(a, b, c)
                    }
                });

                break;
            case Communication.STATUS():

                _data = {
                    login: account.isLogin,
                    list_size: SYSTEM.pageSize,
                    list_num: SYSTEM.cur_page_index,
                    page:SYSTEM.CurPage
                };
                sendResponse({code:Communication.STATUS(), data: _data});

                _DEBUG_MODE ? _debug(0, "Message is respond to "+ _from + "(code:"+Communication.STATUS()+")\n"+JSON.stringify(_data)) : false;

                break;
            case Communication.PREVIOUSPAGE():

                _res = SYSTEM.page_move(-1);

                if (!_res) {
                    console.log(SYSTEM.CurPage);
                    chrome.tabs.update({url:SYSTEM.CurPage.url});

                }
                sendResponse({code:Communication.PREVIOUSPAGE(), error:_res});


                break;
            case Communication.NEXTPAGE():

                _res = SYSTEM.page_move(1);

                if (!_res) {
                    console.log(SYSTEM.CurPage);


                    chrome.tabs.update({url:SYSTEM.CurPage.url});
                    chrome.tabs.update({url:HOST+":"+PORT+"/answer/page/"+SYSTEM.CurPage.pk});

                }

                sendResponse({code:Communication.NEXTPAGE(), error:_res});

                break;
            case Communication.GETLIST():
                sendResponse({code:Communication.GETLIST(), pages:page_list});
                _DEBUG_MODE ? _debug(0, "Message is replied (code:"+request.todo+")") : false;


                break;
            case "sending":

                sendResponse({code:0, menu:[]});
                _DEBUG_MODE ? _debug(0, "Message is replied (code:"+request.todo+")") : false;
                break;
            case "send_dom":

                let _nodes = request.nodes;
                let _page_url = request.webpage.url;

                $.ajax({
                    url: "http://166.104.144.77:8000/menu",
                    method: "POST",
                    data: JSON.stringify({
                        nodes:_nodes,
                        web_page:request.webpage,


                    }),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success:function (data) {

                        console.log("test");


                    },
                    error:function (a, b, c) {

                        console.log(a, b, c)

                    }
                });

                break;
            default:
                _DEBUG_MODE ? _debug(0, "The received code is wrong (code:"+request.todo+")") : false;

                break;
        }
});


function _debug(_code, _message) {

    let _date = new Date();

    console.log(_code, _date.getHours()+':'+_date.getMinutes()+':'+_date.getSeconds(), _message);
    // console.log(_code, _date.format('hh:mm:ss'), _message);

}

function isLogin(account) {
    $.ajax({
        url: "http://" + HOST + ":"+PORT+"/accounts/api/account",
        method: "GET",
        crossDomain: true,
        // contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        xhrFields: { withCredentials: true },
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Bearer "+account.token);
            // xhr.setRequestHeader("Cookie", "session=1234");
            // xhr.setRequestHeader ("Authorization", "Basic " + btoa('IEtdGS3FRYsg7EX7NY2QPL6mMShzeYjHmlvrxyIS' + ":" + '7toYm6rQeqWNiJHLzo0mh2nh4nYafe1obIg1kafmVixMDG3eAkyfJntCfbxaZNgDGvznIGp3pNMGfFL5XOMzc4dvLAhAADhimgwOxJe5dsnRN6y8GE2gdAdYfWFDRMz6'));
        },
        success:function (data, status, xhr) {
            _DEBUG_MODE ? _debug(0, "Message is received from Server \n"+JSON.stringify(data)) : false;
            if (data.status === 1) {
                // account.isLogin(true);

            }
            else {

            }
        },
        error:function (a, b, c) {

            // console.log(a);

            console.log(a, b, c)
        }
    });
}

function ajax_request(path, method, data, dataType, bf_callback, af_callback, er_callback) {

    $.ajax({
        url: "http://" + HOST + ":"+PORT+path,
        method: method,
        crossDomain: true,
        // contentType: "application/json; charset=utf-8",
        data:data,
        dataType: dataType,
        async: false,
        xhrFields: { withCredentials: true },
        beforeSend: function(xhr) {

            typeof bf_callback === 'function' && bf_callback(xhr);

        },
        success:function (data, status, xhr) {
            // _DEBUG_MODE ? _debug(0, "Message is received from Server (code:"+request.todo+")\n"+JSON.stringify(data)) : false;
            // console.log(data);
            typeof af_callback === 'function' && af_callback(data);

            // _DEBUG_MODE ? _debug(0, "Message is respond to "+ _from + " (code:"+Communication.LOGIN()+")\n"+JSON.stringify(data)) : false;

        },
        error:function (request, status, error) {
            // console.log(a);
            console.log(request);
            console.log(status);
            console.log(error);
            typeof er_callback === 'function' && er_callback(request, status, error);

        }
    });

}