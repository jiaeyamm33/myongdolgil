import React, {useState} from 'react';
import './Home.css';

export default function Home(props) {

  // let [mouse, setMouse] = useState(false);

  

  
  // setInterval(()=>(setMouse((prev)=> (!prev))), 2000);

  

  return (

    <>
      {/* 첫 번째 섹션 시작 */}
      <section className='home-sect01 home_sect'>

        <div className='sect01_ctnt_area ctnt_area'>
          <h2 className='sect_title title01'>
            <span className='title_txt'>박스오피스</span>
          </h2>

          <img src={`${process.env.PUBLIC_URL}/images/asdf.png`} alt="가짜" className='fake'/>

          <ul className='sect01-navbar'>
            <li>
              <form className='sect01-search'>
                <input type="text" placeholder='영화명을 입력해주세요' />
              </form>
            </li>

            <li className='sect01-cal'>
              <img src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-schedule-main.png" alt="" />
              <span className='sect01-cal_txt'>
                상영시간표
              </span>
            </li>

            <li className='sect01-box'>
              <img src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-boxoffice-main.png" alt="" />
              <span className='sect01-box_txt'>
                박스오피스
              </span>
            </li>

            <li className='sect01-ticket'>
              <img src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-quick-reserve-main.png" alt="" />
              <span className='sect01-ticket_txt'>
                빠른예매
              </span>
            </li>
            
          </ul>

          <div className='sect01-mouse'>
            <img src="https://www.megabox.co.kr/static/pc/images/common/ico/ico-mouse.png" alt="" className={`mouse_img`} />
          </div>


        </div>

        {/* 첫 섹션 백그라운드 박스 시작 */}
        <div className="home-bg_wrap">
          <img src="https://img.megabox.co.kr/SharedImg/2023/07/18/6O1YI0SdZqUlb63isHggGbR1NcTz3yxl_380.jpg" alt="섹션 배경 이미지" className='home-sect01_bg' />
        </div>
        {/* 첫 섹션 백그라운드 박스 끝 */}

      </section>
      {/* 첫 번째 섹션 끝 */}

      {/* 두 번째 섹션 시작 */}
      <section className='home-sect01 home_sect'>

      </section>
      {/* 두 번재 섹션 끝 */}

      {/* 세 번째 섹션 시작 */}
      <section>

      </section>
      {/* 세 번째 섹션 끝 */}

      {/* 네 번째 섹션 시작 */}
      <section>


      </section>
      {/* 네 번째 섹션 끝 */}




    </>
  );

}
