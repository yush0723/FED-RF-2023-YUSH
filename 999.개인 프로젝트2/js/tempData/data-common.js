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
                <li class="bld"></li>
                
            </ul>
        </nav>

        
    </header>

    `,
    // 상단영역 html data
    tareaSub: `                    
    <header class="top ibx">
        <!-- 1-1.로고 -->
        <h1 id="logo">
            <a href="./glist.html">
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
    </header>

    `,
}; ///////////////// comData //////////////


// 내보내기
export default comData;