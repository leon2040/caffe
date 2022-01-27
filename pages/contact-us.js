import { useState } from 'react';
import Header from '../components/header'
import Head from 'next/head';

export default function 한글컴포() {

	const [ email, setEmail ] = useState( '' );
	const [ subject, setSubject ] = useState( '' );
	const [ content, setContent ] = useState( '' );

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log( 'input data', email, subject, content );
	}

	return (
		<div className="container ">
			<Header/>
			<Head>
					<title>문의 - Caffe : 온라인 커피 주문</title>
			</Head>
			<h1 className="font-bold"> 문의하세요 </h1>
      <small>Contact Us</small>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">이메일</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                value={ email }
                onChange={ event => {setEmail( event.target.value ); console.log(email);} } //state 변수이므로 추가 입력 직전의 값이 출력된다
            />
        </div>
        <div className="mb-3">
            <label htmlFor="subjectInput" className="form-label">제목</label>
            <input type="text" name="subject" className="form-control" id="subjectInput" placeholder="제목을 입력하세요"
                value={ subject }
                onChange={ event=> setSubject( event.target.value ) }
            />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">내용</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                value={ content }
                onChange={ event=> setContent( event.target.value ) }
            />
        </div>
        <button className="btn btn-primary btn-lg">문의하기</button>
      </form>


		</div>
	)
}