
import Header from '../components/header'

import {Fragment, useState, useMemo, useEffect} from 'react';
import Head from 'next/head';
import axios from 'axios';
import useSWR from 'swr';
import cors  from 'cors';


const formatter = Intl.NumberFormat( 'ko-KR' );

const data = [
  { name: '오늘의 커피', price: 2500 },
  { name: '에스프레소', price: 2800 },
  { name: '아메리카노', price: 3000 },
  { name: '카페라떼', price: 3500 },
  { name: '카페모카', price: 3800 },
];

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, 
};

//app.use(cors(corsOptions));

const fetcher = function( url ) {
  return axios.get( url ).then( response => response.data );
	// menu.js 를 실행하고, ...csv 파일에서 메뉴와 가격을 새로 받아온다  
}

// 상태 state
export default function Order(props) {
    // console.log( 'props.menu', props.menu );
  // [ 읽기전용, 쓰기전용 ] = useState( 기본값 );
  const [loading, setLoading] = useState(true);

  const [ menu, setMenu ] = useState( [] );
  const [ selected, setSelected ] = useState( [] );

  const sum = useMemo(   
    () => selected.reduce( ( previousValue, item ) => previousValue + item.price, 0 ),
    [ selected ]
  );

  const { data, error } = useSWR('http://localhost:3000/api/menu', fetcher);

	//const error = false;

  useEffect(()=>{
      // fetch( '/api/menu' )
      //     .then( response => response.json() )
      //     .then( json => {
      //       setMenu( json );
      //       setLoading(false); 
      //      }
      //     )
      //     .catch( console.warn )
      // getServerSideProps 를 사용하므로 ....
      // axios.get( '/api/menu' )
      //     .then( response => setMenu( response.data ) ) // json 처리 필요없다
      //     .catch( console.warn )
  },[]);

  if( error ) {
      console.log(error);
      return <>에러가 발생했습니다.</>;
  }

  if( !data ) { // error == falsy && data == falsy
      return <>로딩중...</>
  }

 // if ( menu === null) return <div>Loading...</div>;

  return (
    <div className="container">
      <Head>
          <title>주문하기 - Caffe : 온라인 커피 주문</title>
      </Head>

      <Header />

      <h1 className="font-bold">Order</h1>

      <h2 className="text-xl font-bold">메뉴판</h2>

      <dl>
      {
          data.map( element => (
//        menu.map( element => (
//        props.menu.map( element => (
          <Fragment key={ element.name }> {/* 구분자를 넣어 중복된 이름을 구분할 수 있도록 */}
            <dt>{ element.name }</dt>
            <dd>
              { formatter.format( element.price ) }원
              <small>
                <button onClick={ () => {
                  if( selected.includes( element ) ) {
                    setSelected( selected.filter( item => item !== element ) );
                  }
                  else {
                    setSelected( [ ...selected, element ] ); // { name: '에스프레소', price: 2800 }
                  }
                }}>
                  [ { selected.includes( element ) ? '선택 해제' : '선택' } ]
                </button>
              </small>
            </dd>
          </Fragment>
        ) )
      }
      </dl>

      <hr />

      <h2 className="text-xl font-bold">주문서</h2>

      <ul className="list-unstyled">
        { selected.map( item => <li key={ item.name }>{ item.name } {item.price}</li> ) }
      </ul>

      합계 : { formatter.format( sum ) }원

      <div className="mt-4">
        <button className="btn btn-primary btn-lg" onClick={() => {
          confirm( `주문 합계는 ${formatter.format( sum )}원입니다. 주문하시겠습니까?` )
        }}>
          주문하기
        </button>
      </div>
    </div>
  )
}

// 서버 사이드에서만 동작하는  getServerSideProps() 
// export async function getServerSideProps(context) {
//     const response = await axios.get('http://localhost:3000/api/menu');
//     return {
//         props: {
//             menu: response.data,
//         }, // will be passed to the page component as props
//     }
// }

/*
export default function Order1() {
	return (
		<div className="container ">
			<Header/>
			<h1> 여기는 오더야 </h1>

		</div>
	)
}
*/