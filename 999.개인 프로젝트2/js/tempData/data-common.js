// 공통 data 객체 셋팅 JS - data-common.js

const comData = {
    // 상단영역 html data
    tarea: `                    
    <header class="top ibx">
        <!-- 1-1.로고 -->
        <h1 id="logo">
            <a>
                <img src="images/main_logo.png" alt="파일럿로고" />
            </a>
        </h1>
        <!-- 1-2.GNB메뉴 : 3개(배너,하단제외) -->
        <nav class="gnb">
            <ul>
                <li class="bld">배너순번 li 숨기기</li>
                <li>
                    <a href="#men">MEN</a>
                </li>
                <li>
                    <a href="#women">WOMEN</a>
                </li>
                <li>
                    <a href="#style">STYLE</a>
                </li>
            </ul>
        </nav>

        <!-- 햄버거버튼 -->
        <div class="ham">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <!-- 전체메뉴박스 -->
        <!-- 같은 부모박스 아래 있어야 z-index비교로 햄버거버튼
    이 위에 올 수 있다! -->
        <div class="mbox">
            <!-- 
            배경 동영상 : muted 소리없음, loop 반복재생
        -->
            <video src="images/disc2018.mp4" class="bgm" loop muted></video>
            <!-- 전체메뉴 -->
            <nav class="mlist">
                <dl>
                    <dt><a href="sub.html?cat=남성">MEN</a></dt>
                    <dd><a href="#">T-SHIRT</a></dd>
                    <dd><a href="#">JACKET</a></dd>
                    <dd><a href="#">TRAINING WARE</a></dd>
                    <dd><a href="#">BEACH WARE</a></dd>
                </dl>
                <dl>
                    <dt><a href="sub.html?cat=여성">WOMEN</a></dt>
                    <dd><a href="#">T-SHIRT</a></dd>
                    <dd><a href="#">JACKET</a></dd>
                    <dd><a href="#">TRAINING WARE</a></dd>
                    <dd><a href="#">BEACH WARE</a></dd>
                </dl>
                <dl>
                    <dt><a href="sub.html?cat=스타일">STYLE</a></dt>
                    <dd><a href="#">COLLECTION</a></dd>
                    <dd><a href="#">SEASON AD</a></dd>
                    <dd><a href="#">STAR &amp; NEWS</a></dd>
                    <dd><a href="#">MAIN ITEM</a></dd>
                </dl>
            </nav>
        </div>
    </header>

    `,
    // 상단영역 html data
    tareaSub: `                    
    <header class="top ibx">
        <!-- 1-1.로고 -->
        <h1 id="logo">
            <a>
                <img src="images/main_logo.png" alt="파일럿로고" />
            </a>
        </h1>
        <!-- 1-2.GNB메뉴 : 3개(배너,하단제외) -->
        <nav class="gnb">
            <ul>
                <li class="bld">배너순번 li 숨기기</li>

                <li 
                v-for="
                    (v,i) in $store.state.menu
                ">
                    <a v-bind:href="'#c'+(i+1)">{{v}}</a>
                </li>
            </ul>
        </nav>

        <!-- 햄버거버튼 -->
        <div class="ham">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <!-- 전체메뉴박스 -->
        <!-- 같은 부모박스 아래 있어야 z-index비교로 햄버거버튼
    이 위에 올 수 있다! -->
        <div class="mbox">
            <!-- 
            배경 동영상 : muted 소리없음, loop 반복재생
        -->
            <video src="images/disc2018.mp4" class="bgm" loop muted></video>
            <!-- 전체메뉴 -->
            <nav class="mlist">
                <dl>
                    <dt><a href="#" 
                    v-on:click="
                        $store.commit('chgData','남성')
                    ">MEN</a></dt>
                    <dd><a href="#">T-SHIRT</a></dd>
                    <dd><a href="#">JACKET</a></dd>
                    <dd><a href="#">TRAINING WARE</a></dd>
                    <dd><a href="#">BEACH WARE</a></dd>
                </dl>
                <dl>
                    <dt><a href="#" 
                    v-on:click="
                        $store.commit('chgData','여성')
                    ">WOMEN</a></dt>
                    <dd><a href="#">T-SHIRT</a></dd>
                    <dd><a href="#">JACKET</a></dd>
                    <dd><a href="#">TRAINING WARE</a></dd>
                    <dd><a href="#">BEACH WARE</a></dd>
                </dl>
                <dl>
                    <dt><a href="#" 
                    v-on:click="
                        $store.commit('chgData','스타일')
                    ">STYLE</a></dt>
                    <dd><a href="#">COLLECTION</a></dd>
                    <dd><a href="#">SEASON AD</a></dd>
                    <dd><a href="#">STAR &amp; NEWS</a></dd>
                    <dd><a href="#">MAIN ITEM</a></dd>
                </dl>
            </nav>
        </div>
    </header>

    `,
}; ///////////////// comData //////////////


// 내보내기
export default comData;