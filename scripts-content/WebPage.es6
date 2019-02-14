class WebPage {


    static ATTR() {


        return "hyu"
    }

    constructor(_node) {

        let _tmp = _node.baseURI.split("://");
        let _tmp2 = _tmp[1].split("/");
        this._http_protocol = _tmp.shift();
        this._domain =  _tmp2.shift();
        this._url =  _tmp2.join();
        this._number_tmp = 0;


        // document.getElementsByTagName('body')[0].setAttribute("hyu", this._number_tmp);
        this._root_node = document.getElementsByTagName('body')[0];

        this._nodes = [];
        this._leaf_nodes = [];
        this._menu_nodes = [];

        this._traversing(this._root_node);

        this._leaf_nodes.forEach(function (_node) {


        })
    }
    get menuNodes() {

        return this._menu_nodes;
    }


    checkMenu(_node) {

        let _index = _node.getAttribute(WebPage.ATTR());

        this._menu_nodes.push(_index);

    }


    _traversing(_parent_node) {

        /**
         *
         * nodeType list
         *
         *  ELEMENT_NODE	            1
         *  ATTRIBUTE_NODE 	            2
         *  TEXT_NODE	                3
         *  CDATA_SECTION_NODE 	        4
         *  ENTITY_REFERENCE_NODE 	    5
         *  ENTITY_NODE 	            6
         *  PROCESSING_INSTRUCTION_NODE	7
         *  COMMENT_NODE	            8
         *  DOCUMENT_NODE	            9
         *  DOCUMENT_TYPE_NODE	        10
         *  DOCUMENT_FRAGMENT_NODE	    11
         *  NOTATION_NODE 	            12
         *
         */
        if (_parent_node.nodeType === 1 || _parent_node.nodeType === 3) {

            // SCRIPT TAG NODE
            if (_parent_node.nodeName.toUpperCase() === "SCRIPT") {


                // console.log(_child_node);


            }
            // STYLE TAG NODE
            else if (_parent_node.nodeName.toUpperCase() === "STYLE") {



            }
            else {

                // A TAG NODE
                if (_parent_node.nodeName.toUpperCase() === "A") {

                    // console.log(_parent_nodeJson);


                }
                // #TEXT NODE
                else if (_parent_node.nodeName.toUpperCase() === "#TEXT") {



                    // _node.set

                    // this._leaf_nodes.push(_node);


                }
                else {

                    if(_parent_node.clientWidth === 0 || _parent_node.clientHeight === 0 ) {




                    }
                    else {

                        _parent_node.setAttribute(WebPage.ATTR(), this._number_tmp);

                        let _node = new Node(this._number_tmp++, _parent_node);

                        let _child_nodes = _parent_node.childNodes;
                        _child_nodes.forEach(function(_child_node){


                            this._traversing(_child_node);

                            // _parent_node.push(_node);

                        },this);
                    }
                }
            }
        }
        else {

            // console.log(_child_node);



        }



        //
        //
        //
        //
        //
        // let _child_nodes = _parent_node._node.childNodes;
        //
        // if(_child_nodes.length < 0) { // ERROR
        //
        //     console.log("ERROR");
        //
        // }
        // else if(_child_nodes.length === 0) { // leaf node
        //
        //     this._leaf_nodes.push(new Node(this._number_tmp++, _parent_node));
        //
        //
        // } else {
        //
        //     let _node = new Node(this._number_tmp++, _parent_node);
        //     this._traversing(_node);
        //
        //
        //     _child_nodes.forEach(function(_child_node){
        //
        //         let _node = new Node(this._number_tmp++, _child_node, _parent_node);
        //
        //         _parent_node.push(_node);
        //
        //
        //
        //
        //     },this);
        // }
    }

    get Json() {

        return {
            domain:this._domain,
            url:this._url,
            protocol:this._http_protocol,

        }
    }

    get nodes() {
        return this._nodes;
    }

    get nodesJson() {

        let _output = [];

        this._nodes.forEach(function (_element) {

            _output.push(_element.nodeJson);

        });

        // console.log(_arr);

        return _output;
    }
}