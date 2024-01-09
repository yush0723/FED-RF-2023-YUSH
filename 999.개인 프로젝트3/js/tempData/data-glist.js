// 공통 data 객체 셋팅 JS - data-common.js

const comData = {
    // 상단영역 html data
    tarea: `                    
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
                <li>
                    <router-link to="/glist">
                        지역
                    </router-link>
                </li>
                <li>
                    <router-link to="/paging">
                        분류
                    </router-link>
                </li>
                <li>
                    <router-link to="/more">
                        인기
                    </router-link>
                </li>
            </ul>
        </nav>

        <!-- 햄버거버튼 -->
        <div class="ham">
            <span></span>
            <span></span>
            <span></span>
        
    </header>

    `,
    }; ///////////////// comData //////////////


// 내보내기
export default comData;