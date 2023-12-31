// DC PJ 검색모듈 컴포넌트

// 폰트어썸 불러오기
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SchCatList } from "./SchCatList";

// 제이쿼리
import $ from "jquery";

// 검색모듈용 CSS 불러오기
import "../../css/searching.css";
import { useState } from "react";

export function Searching(props) {
  // props.kword - 검색어전달
  console.log("전달검색어:", props.kword);

  ////////// 후크 상태관리 변수 ////////////
  // 1. 검색어 후크상태변수 : 초기값은 전달된 검색어
  const [kword,setKword] = useState(props.kword)
  // 2. 출력개수 후크상태변수
  const [cntNum,setCntNum] = useState(0);
  //////////////////////////////////////////

  // 검색어 업데이트 함수 /////
  const chgKword = txt => setKword(txt);

  // 넘어온 검색어와 셋팅된 검색어가 다르면 업데이트
  // if(props.kword!=kword) chgKword(props.kword);


  // 리스트 개수변경함수 ///////
  const chgCnt = (num) => {
    // 후크 상태개수변수 업데이트하기
    setCntNum(num);
    // $('.cntNum').text(num);
  }; ///////// showCnt 함수 ///////

  // 검색리스트 만들기 함수
  const schList = (e) => {
    // console.log(e.currentTarget);
    // 아이콘 다음요소가 input 이고 그 값을 읽어와서 변경
    chgKword($(e.currentTarget).next().val())
  };

  // 엔터키 반응 함수
  const enterKey = (e) => {
    // 엔터키일때만 반영함
    if(e.key == 'Enter'){
      let txt = $(e.target).val();
      chgKword(txt)
      console.log(txt,e.key);
    }
  };

  // 체크박스검색 함수 ////////
  const chkSearch = () => {};

  // 리스트 정렬 함수 /////////
  const sortList = () => {};


  // 리턴 코드 ////////////////////////
  return (
    <>
      {/* 전체 검색모듈 코드 */}
      <section className="schbx">
        {/* 1. 옵션선택박스 */}
        <div className="schopt">
          {/* 1-1.검색박스 */}
          <div className="searching">
            {/* 검색버튼 돋보기 아이콘 */}
            <FontAwesomeIcon
              icon={faSearch}
              className="schbtn"
              title="Open search"
              onClick={schList}
            />
            {/* 입력창 */}
            <input
              id="schin"
              type="text"
              placeholder="Filter by Keyword"
              onKeyUp={enterKey}
              defaultValue={kword}
              /* input요소에서 리액트 value속성은 
              defaultValue를 사용한다! */
            />
          </div>
          {/* 1-2. 체크박스구역 */}
          <div className="chkbx">
            <ul>
              <li>
                {/* 타이틀 */}
                <h2>
                  ALIGNMENT
                  <span className="spbtn">＋</span>
                </h2>
                {/* 체크박스리스트 */}
                <ol>
                  <li>
                    Heroes
                    {/* 숨긴 체크박스 */}
                    <input 
                        type="checkbox" 
                        id="hero" 
                        className="chkhdn"
                        onChange={chkSearch} 
                    />
                    {/* 디자인노출 라벨 */}
                    <label
                    htmlFor="hero"
                    className="chklb"></label>
                  </li>
                  <li>
                    It's Complicated
                    {/* 숨긴 체크박스 */}
                    <input 
                        type="checkbox" 
                        id="comp" 
                        className="chkhdn"
                        onChange={chkSearch} 
                    />
                    {/* 디자인노출 라벨 */}
                    <label
                    htmlFor="comp"
                    className="chklb"></label>
                  </li>
                  <li>
                    Villains
                    {/* 숨긴 체크박스 */}
                    <input 
                        type="checkbox" 
                        id="villain" 
                        className="chkhdn"
                        onChange={chkSearch} 
                    />
                    {/* 디자인노출 라벨 */}
                    <label
                    htmlFor="villain"
                    className="chklb"></label>
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
        {/* 2. 결과리스트박스 */}
        <div className="listbx">
            {/* 2-1. 결과 타이틀 */}
            <h2 className="restit">
                BROWSE CHARACTERS ({cntNum})
            </h2>
            {/* 2-2. 정렬선택박스 */}
            <aside className="sortbx">
                <select 
                    name="sel" 
                    id="sel" 
                    className="sel"
                    onChange={sortList}
                >
                    <option value="0">A-Z</option>
                    <option value="1">Z-A</option>
                </select>
            </aside>
            {/* 2-3. 캐릭터 리스트 컴포넌트 : 
            검색어를 후크상태변수로 연결! -> 데이터변경에 반영 */}
            <SchCatList 
              word={kword} 
              chgCntFn={chgCnt}
            />
        </div>
      </section>
    </>
  );
} ////////////// Searching 컴포넌트 //////////