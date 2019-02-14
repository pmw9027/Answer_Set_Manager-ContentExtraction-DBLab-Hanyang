class WebSite{



}

class WebPage {

    constructor(_node){


        this._rootNode = new Node(this, _node, null, 0);
        this._candidateNodes = [];
        this._rootCandidateNodes = [];
        this._index = 0 ;
        this.characters
    }

    get nodeCount() {

        let _output = this._rootNode.descendants;

        return _output;
    }

    get characters() {

        // console.log(this._rootNode._node.getElementsByTagNameNS('http://www.w3.org/1999/xhtml','*'));

        let _output;

        _output = this._rootNode._node.innerText.trim().replace(/\s+/g, '').length;

        return _output;
    }

    run() {

        this.traversal(this._rootNode._node, null);

    }


    paintCandidateNodes() {

        let _output;

        this._candidateNodes.forEach(function (node) {

            node.paint();

        });

        _output = this._candidateNodes.length;

        return _output;
    }

    paintRootCandidateNodes(){
        this._rootCandidateNodes.forEach(function (node) {

            node.paint();


        });
    }



    traversal(_node, _parent){

        let _output;
        let new_node = new Node(this, _node, _parent, this._index++);

        if (new_node.childrenLength > 0) {

            // console.log(new_node.evaluate, new_node.properties);

            if(new_node.evaluate > 0.80) {


                // console.log(new_node);


                this._candidateNodes.push(new_node);

            }

            //using foreach
            new_node.children.forEach(function(_childNode) {



                let _result = this.traversal(_childNode, new_node);

                new_node._characters += _result._characters;
                new_node._childNodes.push(_result);

            }, this);


            new_node._node.setAttribute("properties",new_node.propertiesJSON);
            new_node._node.setAttribute("eval",new_node.evaluate);

        }

        _output = new_node;

        return _output;

    }

    selectionMenuNode() {

        let _output;

        let _max = 0;

        let _bestWeight = 0;

        this._rootCandidateNodes.forEach(function(_node){

            _node.childrenNodes.forEach(function(_node){

                if(_node.evaluate > 123) {



                }
            });
        });
    }

    selectionRootNode() {

        this._candidateNodes.forEach(function (_node) {


            // Initializing
            let _rootNode = _node;
            let _currentNode = _node;
            let baseWeight = _node.evaluate;

            let _found = false;


            while(_node.parentNode !== null &&_found === false) {

                let _parent = _currentNode._parentNode;


                let _nodeCount = 0;

                let _parentChildrenCount = _parent._node.childNodes.length;


                _parent.childNodes.forEach(function(_child){

                    if(_child !== undefined){
                        if(_child.evaluate > baseWeight*0.7) {

                            _nodeCount++;
                        }

                    }

                },this);


                if( 2 * _nodeCount > _parentChildrenCount ) {

                    _currentNode = _parent;

                    if(_parentChildrenCount > 1) {

                        _rootNode = _parent;

                    }
                }
                else {

                    _found = true;

                }
            }

            this._rootCandidateNodes.push(_rootNode);

        }, this);
    }
}
class Edge {



}

class Node {

    static _NODEAMPLITUDE() {

        return "nodeamplitude";
    }

    static _ULRATIO() {

        return "ulratio";
    }
    static _LINKRATIO() {

        return "linkratio";
    }
    static _TEXTRATIO() {

        return "textratio";
    }
    static _REPRESENTATIVETAG() {

        return "represtativetag";
    }

    static _NODEPOSITION() {

        return "nodeposition";
    }

    static _metricWeight() {

        let _output = new Map();

        _output.set(Node._NODEAMPLITUDE(), 0.2);
        _output.set(Node._LINKRATIO(), 0.1);
        _output.set(Node._TEXTRATIO(), 0.3);
        _output.set(Node._ULRATIO(), 0.2);
        _output.set(Node._REPRESENTATIVETAG(), 0.1);
        _output.set(Node._NODEPOSITION(), 0.1);

        return _output;
    }

    constructor(_page, _node, _parent, _nodePosition) {

        this._page = _page;
        this._node = _node;
        this._id = this._node.id;
        this._className = this._node.className;
        this._tagName = this._node.tagName;
        this._linkRatio = null;
        this._childNodes = [];
        this._parentNode = _parent;
        this._nodePosition = _nodePosition; //DFS

        this._characters = 0;
    }



    paint() {


        this._node.style.backgroundColor = "#0000FF";

    }

    get _textRatio() {

        let _output = 0;


        _output = 1 - (this.characters / this._page.characters);


        return _output;
    }

    get characters() {

        let _output;

        _output = this._node.innerText.trim().replace(/\s+/g, '').length;

        return _output;
    }

    get _ulRatio() {

        let _output = 0;
        if(this._tagName  === "UL") {

            _output = 1;

        }
        return _output;

    }

    get _representativeTag(){

        let _output = 0;

        if(this._tagName.toUpperCase() === "NAV") {

            _output = 1;

        }
        else if(this._className.toUpperCase() === "MENU" || this._className.toUpperCase() === "NAV") {

            _output = 1;

        }
        else if(this._id.toUpperCase() === "MENU" || this._id.toUpperCase() === "NAV") {

            _output = 1;

        }

        return _output;
    }


    get linkRatio() {

        let _output;

        _output = (this.descendants + this._node.getElementsByTagName('a').length) / ( 2 * this.descendants );


        return _output;
    }

    get amplitude() {
        let _output;

        _output = 1 - (1 / this.childrenLength);

        return _output;
    }


    get properties(){

        let _output = new Map();
        _output.set(Node._ULRATIO(), this._ulRatio);
        _output.set(Node._LINKRATIO(), this.linkRatio);
        _output.set(Node._NODEAMPLITUDE(), this.amplitude);
        _output.set(Node._NODEPOSITION(), this.nodePosition);
        _output.set(Node._TEXTRATIO(), this._textRatio);
        _output.set(Node._REPRESENTATIVETAG(), this._representativeTag);

        return _output
    }

    get nodePosition() {

        let _output;

        _output = 1 - (this._nodePosition / this._page.nodeCount);

        return _output;
    }

    get evaluate() {

        let _output = 0;


        //using for

        // for(let i=0;i<Node._metricWeight().length;i++) {
        //
        //     _nodeProperties.get()
        // }

        //using forEach
        Node._metricWeight().forEach(function (value, key) {

            _output += this.properties.get(key) * value;

        },this);

        // console.log(this.properties);

        return _output
    }

    isLink() {


        let _tagName = this._node.tagName;
        let _output = false;

        if(_tagName === "A"){

            _output = true;

        }
        return _output;
    }

    get children() {

        let _output = [];

        this._node.childNodes.forEach(function(_child){


            let _characters = _child.textContent.trim().replace(/\s+/g, ' ').length;

            if(_child.nodeName === '#text' && _characters === 0) {

                this._node._characters = _characters;

            }

            else if(_child.nodeName.toUpperCase() !== 'SCRIPT') {

                _output.push(_child);

            }

        },this);

        return _output;
    }

    get childrenLength() {

        let _output;

        _output = this.children.length;

        return _output;
    }


    get descendants() {

        let _output;

        _output = this._node.getElementsByTagName('*').length;

        if (_output < 0) {

            _output = 1;

        }

        return _output;
    }

    get childNodes() {
        return this._childNodes;
    }

    get propertiesJSON() {

        let _output;
        let set;

        let _obj = Object.create(null);

        set = this.properties;

        set.forEach(function (value, key) {
                // We don’t escape the key '__proto__'
                // which can cause problems on older engines
            _obj[key] = value;
            return _obj;
        });


        _output = JSON.stringify(_obj);
        return _output;
    }

}