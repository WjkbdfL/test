(function () {

    var DbsAlert = {
        show: (function () {
            var body = document.getElementsByTagName('body')[0];
            var oDiv = document.createElement('div');
            var p = document.createElement('p');
            var oDiv2 = document.createElement('div');
            var btnDiv = document.createElement('div');

            oDiv.style.zIndex = '10000';
            oDiv.style.position = 'absolute';
            oDiv.style.width = '280px';
            oDiv.style.height = 'auto';
            oDiv.style.backgroundColor = 'white';
            oDiv.style.left = '50%';
            oDiv.style.top = '45%';
            oDiv.style.marginLeft = '-140px';
            oDiv.style.marginTop = '-70px';
            oDiv.style.boxShadow = '0 1px 10px rgba(0, 0, 0, 0.6)';
            oDiv.style.webkitBoxShadow = '0 1px 10px rgba(0, 0, 0, 0.6)';
            oDiv.style.borderRadius = '8px';
            oDiv.style.overflow = 'hidden';

            p.style.textAlign = 'center';
            p.style.fontSize = '18px';
            p.style.height = '45px';
            p.style.lineHeight = '45px';
            p.style.borderBottom = '1px solid #eee';
            p.style.fontFamily = 'PingFang-SC-Medium';

            oDiv2.style.wordBreak = 'break-all';
            oDiv2.style.padding = '26px 36px 0 36px';
            oDiv2.style.maxHeight = '100px';
            oDiv2.style.overflow = 'hidden';
            oDiv2.style.fontSize = '14px';
            oDiv2.style.lineHeight = '18px';
            oDiv2.style.textAlign = 'center';
            oDiv2.className = 'dbs_gray_6b7786';

            btnDiv.style.width = '100%';
            btnDiv.style.overflow = 'hidden';
            btnDiv.style.marginTop = '26px';
            btnDiv.style.borderTop = '1px solid #eee';
            oDiv.appendChild(p);
            oDiv.appendChild(oDiv2);
            oDiv.appendChild(btnDiv);

            return function (o) {
                bgPop.hide();
                var options = {
                    text: '后台系统异常，客官请稍后再试!!!',
                    onTap: null,
                    title: '温馨提示',
                    btnText: '确定',
                    onClear: null
                };
                var that = this;
                if (typeof o === 'string') {
                    options.text = o;
                } else {
                    options = extend(options, o);
                }
                p.innerText = options.title;
                oDiv2.innerText = options.text;
                if (!options.clearBtnText) {
                    btnDiv.innerHTML = '<button style="border:none;padding:8px;width:100%;color:red;font-size:1.2rem;border-radius:3px;background-color:white;">' + options.btnText + '</button>';
                } else {
                    btnDiv.innerHTML = '<button class="dbs_red" style="background-color:white;border:none;padding:12px;width:50%;font-size:1.2rem;border-radius:3px;">' + options.clearBtnText + '</button>' +
                    '<button class="dbs_red" style="background-color:white;border:none;padding:12px;;width:50%;font-size:1.2rem;border-radius:3px;">' + options.btnText + '</button>';

                }

                var clearBtn = btnDiv.getElementsByTagName('button')[0];
                var confirmBtn = btnDiv.getElementsByTagName('button')[1];

                clearBtn.onclick = function () {
                    if (options.onClear) options.onClear();
                    that.hide();
                };

                if (confirmBtn) {
                    confirmBtn.onclick = function () {
                        if (options.onTap) options.onTap();
                        that.hide();
                    };
                }

                body.appendChild(oDiv);
                this.div = oDiv;
                bgPop.show();
            }
        })(),

        hide: function () {
            var body = document.getElementsByTagName('body')[0];
            body.removeChild(this.div);
            bgPop.hide();
        }
    };

    function extend(a, b) {
        for (var i in b) {
            a[i] = b[i];
        }
        return a;
    }

    window.DbsAlert = DbsAlert;
})();

(function () {
    //计数的背景幕
    var bgColor = 'rgba(0,0,0,0.7)';
    var XeLoading = {
        sum: 0,
        show: function () {
            this.sum++;
            if (this.sum == 1) {
                this.append();
            }
        },
        hide: function () {
            if (this.sum > 0) {
                this.sum--;
            }

            if (this.sum == 0) {
                this.remove();
            }
        },
        append: (function () {
            var body = document.getElementsByTagName('body')[0];
            var loadDiv = document.createElement('div');

            loadDiv.id = 'Xe___Loading';
            loadDiv.style.position = 'absolute';
            loadDiv.style.left = '0px';
            loadDiv.style.right = '0px';
            loadDiv.style.bottom = '0px';
            loadDiv.style.top = '0px';
            loadDiv.style.backgroundColor = bgColor;
            loadDiv.style.zIndex = '1001';

            return function () {
                body.appendChild(loadDiv);
            }
        })(),
        remove: function () {
            var body = document.getElementsByTagName('body')[0];
            var loadDiv = document.getElementById('Xe___Loading');

            if (loadDiv) body.removeChild(loadDiv);
        },
        clear: function () {
            this.sum = 0;
            this.hide();
        }
    };

    window.bgPop = XeLoading;
})();

(function () {
    var bgColor = 'rgba(0,0,0,0.4)';
    var loadPop = {};

    function extend(o, k) {
        for (var x in k) {
            o[x] = k[x];
        }
        return o;
    }

    loadPop = extend(loadPop, bgPop);


    loadPop.append = (function () {
        var body = document.getElementsByTagName('body')[0];
        var loadDiv = document.createElement('div');
        var oImg = document.createElement('img');
        var loadContainDiv = document.createElement('div');
        var loadTitle = document.createElement("p");
        var loadContent = document.createElement("p");

        loadContainDiv.className = 'afs_load_img';

        oImg.src = 'images/circle.png';
        oImg.style.display = "block";
        oImg.style.width = '60px';
        oImg.style.height = '60px';
        oImg.style.margin = '10px 85px';
       /* oImg.style.left = (screen.width ) * 0.5 + 'px';
        oImg.style.top = (screen.height ) * 0.5 + 'px';*/
        oImg.style.animation = "loading 3s linear 0s infinite";
        oImg.style.webkitAnimation = "loading 3s linear 0s infinite";
        oImg.style.mozAnimation = "loading 3s linear 0s infinite";
        oImg.style.oAnimation = "loading 3s linear 0s infinite";

        loadTitle.style.borderTop = "1px #00A0E9 dashed";

        loadTitle.style.color = "#00A0E9";
        loadTitle.style.fontSize = "20px";
        loadTitle.style.width = '100%';
        loadTitle.style.height = '40px';
        loadTitle.style.lineHeight = "40px";
        loadTitle.style.textAlign = "center";
        loadTitle.innerHTML = "温馨提示";

        loadContent.innerHTML = "银联优惠活动火热进行中，赶紧下载\"出国金融\"APP进行领取。";
        loadContent.style.textAlign = "center";


        loadContainDiv.appendChild(oImg);
        loadContainDiv.appendChild(loadTitle);
        loadContainDiv.appendChild(loadContent);
        loadDiv.appendChild(loadContainDiv);


        loadDiv.id = 'Xe___Loading2';
        loadDiv.style.position = 'absolute';
        loadDiv.style.left = '0px';
        loadDiv.style.right = '0px';
        loadDiv.style.bottom = '0px';
        loadDiv.style.top = '0px';
        loadDiv.style.zIndex = '10000';
        loadDiv.style.backgroundColor = bgColor;

        return function () {
            body.appendChild(loadDiv);
        }
    })();




        loadPop.remove = function () {
        var body = document.getElementsByTagName('body')[0];
        var loadDiv = document.getElementById('Xe___Loading2');

        if (loadDiv) body.removeChild(loadDiv);
    };

    window.loadPop = loadPop;
})();
