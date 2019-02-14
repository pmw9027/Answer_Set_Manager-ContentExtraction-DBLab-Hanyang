/**
 * Created by chan on 2017. 8. 26..
 */

class Node {

    constructor(_index_number, _node) {

        this._index_number = _index_number;
        this._node = _node;
        this._offsetLeft = _node.offsetLeft;
        this._offsetWidth = _node.offsetWidth;
        this._offsetHeight = _node.offsetHeight;
        this._scrollHeight = _node.scrollHeight;
        this._clientWidth = _node.clientWidth;
        this._clientHeight = _node.clientHeight;
        this._linkNum = _node.getElementsByTagName('a').length;
        this._childNum;
        this._linkRatio;
        this._avgLinkDepth;
        this._textWordsLength = _node.textContent.trim().replace(/\s+/g, ' ').split(' ').length;
        this._childrenSiblingTagRatio;
        this._disCenter;
        this._checkFlag;

    }

    node() {

        return this._node;
    }

}


