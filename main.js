// 當頁面載入完成後執行
document.addEventListener('DOMContentLoaded', function() {
    // 獲取按鈕元素
    var btn = document.getElementById('btn');

    // 監聽按鈕的點擊事件
    btn.addEventListener('click', function() {
        // 獲取選中的星期值
        var startDaySelect = document.getElementById('startDays');  // 更新ID為 'startDays'
        var selectedDay = startDaySelect.value;
    
        console.log("startDaySelect:"+startDaySelect)
        console.log("selectedDay:"+selectedDay)

        // 獲取輸入的天數
        var daysToAddInput = document.getElementById('daysToAdd');
        var daysToAdd = parseInt(daysToAddInput.value, 10);
        console.log("daysToAdd:"+daysToAdd)

        // 如果星期和天數都有效，則進行計算
        if (selectedDay !== "" && !isNaN(daysToAdd)) {
            // 計算未來的星期值
            var daysOrder = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
            var currentDayIndex = daysOrder.indexOf(selectedDay);
            var futureDayIndex = (currentDayIndex + daysToAdd) % 7;
            var futureDay = daysOrder[futureDayIndex];

            // 顯示計算結果
            var answerLabel = document.getElementById('answer');
            answerLabel.textContent = "未來 " + daysToAdd + " 天後是 " + futureDay;
        } else {
            // 輸入不完整時的提示
            var answerLabel = document.getElementById('answer');
            answerLabel.textContent = "請選擇星期並輸入有效的天數";
        }
    });
});