var newsList = function(){
    var recommendationList = $("#recommendation-news");
    var placeHolder = $("#loading-placeholder");
    var doc = $(document);
    var win = $(window);

    var NewsNumber = 3;
    var loading = false;

    var placeholderOldPos;

    var newNode = `<li class="news-list-item clearFloat">
    <img class="news-thumbnail" src="Image/news_thumbnail.jpeg" alt="image thumbnail">
        <div class="news-information">
        <a class="news-title" href="#">特朗普不能要求科米忠诚？FBI又整了多少总统们的“黑材料”？</a>
    <div class="news-footerBox clearFloat">
        <div class="news-detail">
            <a class="news-detail-box" href="#">
                时政
            </a>
            <a class="news-author-img" href="#">
                <img src="Image/news-author-img.jpeg">
            </a>
            <a  href="#">
                文汇网
            </a>
            <a class="comment-number" href="#">
                · 8评论 ·
            </a>
            <a class="hours" href="#">
                2小时前
            </a>
        </div>
        <div class="news-dislike">
            <span class="dislike-content">不感兴趣</span>
            <i class="dislike-fork">x</i>
        </div>
    </div>
    </div>
    </li>`;

    win.bind("scroll", function(){
        if(!loading){
            placeHolder.css("display", "none");
            (doc.scrollTop() + win.height() >= doc.height()-30) && load();
        }
    });

    function load(){
        loading = true;
        placeHolder.css("display", "inline-block");

        setTimeout(function () {
            placeholderOldPos = doc.scrollTop();
            recommendationList.append(newNode);
            recommendationList.append(newNode);
            recommendationList.append(newNode);

            doc.scrollTop(placeholderOldPos);
            loading = false;
        }, 1000);
    }
}();