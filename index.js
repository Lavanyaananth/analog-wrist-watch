onload = function() {
    var today = new Date();
    var dd = today.getDate();
    var day;

    if (dd < 10) {
        dd = '0' + dd;
    }


    var m_name = ['JAN', 'FEB', 'MAR',
        'APR', 'MAY', 'JUN', 'JUL',
        'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
    ];

    d = new Date();
    var n = m_name[d.getMonth()];
    today = dd + ' ' + n;

    var date = today;
    document.getElementById("date").innerHTML = date;

    $(function() {
        Time.install();
    });

    Time = {
        counter: 0,
        install: function() {
            this.setSeconds();
            this.setMinutes();
            this.setHours();
            this.setAnimation();
        },
        setSeconds: function() {
            setInterval(function() {
                var seconds = new Date().getSeconds();
                var sdegree = seconds * 6;
                var srotate = "rotate(" + sdegree + "deg)";
                $('.second').css({ "-moz-transform": srotate, "-webkit-transform": srotate });
            }, 1000);
        },
        setMinutes: function() {
            setInterval(function() {
                var mins = new Date().getMinutes();
                var mdegree = mins * 6;
                var mrotate = "rotate(" + mdegree + "deg)";
                $('.minute').css({ "-moz-transform": mrotate, "-webkit-transform": mrotate });
            }, 1000);
        },
        setMinutes: function() {
            setInterval(function() {
                var mins = new Date().getMinutes();
                var mdegree = mins * 6;
                var mrotate = "rotate(" + mdegree + "deg)";
                $('.minute').css({ "-moz-transform": mrotate, "-webkit-transform": mrotate });
            }, 1000);
        },
        setHours: function() {
            setInterval(function() {
                var hours = new Date().getHours();
                console.log(hours);
                if (hours > 0 && hours < 12) {
                    var img = '<img src="icons/morning.svg">';
                    document.getElementById("time-cycle-eve").innerHTML = img;
                }
                if (hours >= 12 && hours < 16) {
                    var img = '<img src="icons/afternoon.svg">';
                    document.getElementById("time-cycle-eve").innerHTML = img;
                }
                if (hours >= 16 && hours < 20) {
                    var img = '<img src="icons/evening.svg">';
                    document.getElementById("time-cycle-eve").innerHTML = img;


                }
                if (hours >= 20 && hours <= 24) {
                    var img = '<img src="icons/night.svg">';
                    document.getElementById("time-cycle-eve").innerHTML = img;


                }
                var mins = new Date().getMinutes();
                var hdegree = hours * 30 + (mins / 2);
                var hrotate = "rotate(" + hdegree + "deg)";
                $('.hour').css({ "-moz-transform": hrotate, "-webkit-transform": hrotate });
            }, 1000);
        },
        setAnimation: function() {
            setInterval(function() {
                if (Time.counter == 10) {
                    $('.watch').removeClass('zoomIn').addClass('zoomOut');
                    $('.watch').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
                        $('.watch').hide();
                    });
                }
                if (Time.counter == 1) {
                    $('.watch').show();
                    $('.watch').removeClass('zoomOut').addClass('zoomIn');
                    $('.watch').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
                        $('.watch').show();
                    });
                }
                if (Time.counter == 10) Time.counter = 0;

                Time.counter += 1;
            }, 1000);
        }

    }
}