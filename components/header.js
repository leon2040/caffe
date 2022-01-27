import Link  from 'next/link'

export default function Header() {
  return ( 
		<>
			<header className=" flex flex-row p-4 justify-between">  
				<div>
					<Link  href="/" > 
					<a className="btn btn-link">Caffe</a>
					</Link>
				</div>

				<div>
					<Link href="/introduce">
						<a  className="btn btn-link">Introduce</a>
					</Link>
					<Link href="/order" >
						< a className="btn btn-link">Order</a>
					</Link>
{/* anker를 사용하면 페이지 전환이 일어난다 */}					
	{/* 				< a href="/order" className="btn btn-link">Order</a> */}
					<Link href="/hiring" >
						< a className="btn btn-link">Hiring!</a>
					</Link>	
					<Link href="/contact-us" prefetch={false}>
						< a className="btn btn-link">Contact Us</a>
					</Link>				
				</div>
			</header>
		</>
	)
}