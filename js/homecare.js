//計算ADL結果

function calADL() {
    var sum = 0;

    for (i = 1; i <= 10; i++) {
        for (j = 0; j < document.getElementsByName("ADL" + i).length; j++) {
            if (document.getElementsByName("ADL" + i)[j].checked) {
                var temp = document.getElementsByName("ADL" + i)[j].value;
                sum += parseInt(temp);
            }
        }
    }
    if (sum > 90)
        alert(sum + "分，您屬於功能獨立");
    else if (sum > 60 && sum < 90)
        alert(sum + "分，您屬於中度依賴");
    else if (sum > 20 && sum < 60)
        alert(sum + "分，您屬於重度依賴");
    else
        alert(sum + "分，您屬於完全依賴");
}

//計算GDS結果

function calGDS() {
    var sum = 0;

    for (i = 1; i <= 15; i++) {
        for (j = 0; j < document.getElementsByName("GDS" + i).length; j++) {
            if (document.getElementsByName("GDS" + i)[j].checked) {
                var temp = document.getElementsByName("GDS" + i)[j].value;
                sum += parseInt(temp);
            }
        }
    }
    if (sum >= 0 && sum < 6)
        alert(sum + "分，健康");
    else if (sum > 5 && sum < 10)
        alert(sum + "分，有輕微憂鬱傾向，須進一步評估。");
    else
        alert(sum + "分，需積極關懷及轉介專業單位");
}

//計算IADL結果

function calIADL() {
    var disable = 0;

    for (i = 1; i <= 8; i++) {
        for (j = 0; j < document.getElementsByName("IADL" + i).length; j++) {
            if (document.getElementsByName("IADL" + i)[j].checked) {
                var temp = document.getElementsByName("IADL" + i)[j].value;
                disable += parseInt(temp);
            }
        }
    }
    if (disable >= 3)
        alert(disable + "分，輕度失能");
    else
        alert(disable + "分，正常");
}

//計算AD8結果

function calAD8() {
    var sum = 0;

    for (i = 1; i <= 8; i++) {
        for (j = 0; j < document.getElementsByName("AD8" + i).length; j++) {
            if (document.getElementsByName("AD8" + i)[j].checked) {
                var temp = document.getElementsByName("AD8" + i)[j].value;
                sum += parseInt(temp);

            }
        }
    }
    if (sum >= 2)
        alert(sum + "分，建議您由專業醫師進行進一步的檢查和診斷");
    else
        alert(sum + "分，結果正常，請您身體力行「預防失智症」之健康生活");
}