class PaintFlash {

    constructor(){

        this.t = null;
        this.a = null;

    }

    activate(){

        let self = this;

        $('*').mouseenter(function (e) {
            e.preventDefault();

            self.t = $(this).css("border");
            self.a = $(this);
            $(this).css("border","red solid 1px");

        });

        $('*').mouseout(function (e) {
            e.preventDefault();

            $(this).css("border",self.t);

        });

        // this.deactivate();

        $(window).mousedown(function (e) {
            e.preventDefault();

            if( e.button === 0 ) {

                self.a.css("border","blue solid 1px");
                self.a.attr('dom_check_attr',"checked");
                self.t = null;

            }
            else if(e.button === 2 ) {

                    // e.deactivate();

                    // console.log(super);

                self.deactivate();

            }
        });

    }
    one_extract(callback) {

        let self = this;


        $('*').mouseenter(function (e) {
            e.preventDefault();

            self.t = $(this).css("border");
            self.a = $(this);
            $(this).css("border","red solid 1px");

        });

        $('*').mouseout(function (e) {
            e.preventDefault();

            $(this).css("border",self.t);

        });


        $(window).mousedown(function (e) {
            e.preventDefault();
            if( e.button === 0 ) {

                self.a.css("border","blue solid 1px");
                self.a.attr('dom_check_attr',"checked");
                self.t = null;
                self.deactivate();
                callback(self.a);

            }
            else if(e.button === 2 ) {

                // e.deactivate();

                // console.log(super);

                self.deactivate();

            }
        });
    }

    deactivate() {

        $('*').off("mouseenter");
        $('*').off("mouseout");
    }
}