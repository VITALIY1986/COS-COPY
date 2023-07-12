import Link from 'next/link';
import CartIcon from "./cart/CartIcon";
import CartIconmob from "./cart/CartIconmob";
import { useState } from 'react';
import profilePic from '../../public/logo.png'
import Image from 'next/image'
import { useAuth } from './login-function/hooks';
const Nav = () => {
	const { isLoggedIn } = useAuth();
	const [ isMenuVisible, setMenuVisibility ] = useState(false);
    const [activeIndex, setActiveIndex] = useState(2);
	
	const questionsAnswers = [
			
	  {
		id: 2,
		  title: "СHANTARELLE",
		linkhome:"/categori-chantarelle-home",
		linkprof:"",
		linkarticle:"/posts/chantarelle",
		linkhomepage:"/chantarelle"
	  },
	  {
		id: 3,
		  title: "ARKANA",
		  linkhome:"/categori-arkana-home",
		  linkprof:"",
		  linkarticle:"/posts/arkana",
		  linkhomepage:"/arkana"
	  },
	  {
		id:4,
		  title: "NOREL",
		  linkhome:"/categori-norel-home",
		  linkprof:"",
		  linkarticle:"/posts/norel",
		  linkhomepage:"/norel"
	  },
	  {
		id:5,
		  title: "MCCM",
		  linkhome:"",
		  linkprof:"",
		  linkarticle:"/posts/mccm",
		  linkhomepage:"/mccm"
	  },
	  {
		id: 6,
		  title: "DermaOxy",
		  linkhome:"/categori-dermaoxy-home",
		  linkprof:"",
		  linkarticle:"",
		  linkhomepage:"/dermaoxy"
	  },
	  
	  {
		id: 7,
		  title: "Sittara",
		  linkhome:"",
		  linkprof:"",
		  linkarticle:"/posts/sittara",
		  linkhomepage:"/sittara",
		
	  },
	  {
		id: 8,
		  title: "Контакти",
		  linkhome:"",
		  linkprof:"",
		  linkarticle:"",
		  linkhomepage:"/contacts",
		  item:""
	  }
	
	];
	const questionsAnswersLog = [
			
		{
		  id: 2,
			title: "СHANTARELLE",
		  linkhome:"/categori-chantarelle-home",
		  linkprof:"/categori-chantarelle-prof",
		  linkarticle:"/posts/chantarelle",
		  linkhomepage:"/chantarelle"
		},
		{
		  id: 3,
			title: "ARKANA",
			linkhome:"/categori-arkana-home",
			linkprof:"/categori-arkana-prof",
			linkarticle:"/posts/arkana",
			linkhomepage:"/arkana"
		},
		{
		  id:4,
			title: "NOREL",
			linkhome:"/categori-norel-home",
			linkprof:"/categori-norel-prof",
			linkarticle:"/posts/norel",
			linkhomepage:"/norel"
		},
		{
		  id:5,
			title: "MCCM",
			linkhome:"",
			linkprof:"/categori-mccm-prof",
			linkarticle:"/posts/mccm",
			linkhomepage:"/mccm"
		},
		{
		  id: 6,
			title: "DermaOxy",
			linkhome:"/categori-dermaoxy-home",
			linkprof:"/categori-dermaoxy-prof",
			linkarticle:"",
			linkhomepage:"/dermaoxy"
		},
		
		{
		  id: 7,
			title: "Sittara",
			linkhome:"",
			linkprof:"",
			linkarticle:"/posts/sittara",
			linkhomepage:"/",
		
		},
		{
		  id: 8,
			title: "Контакти",
			linkhome:"",
			linkprof:"",
			linkarticle:"",
			linkhomepage:"/contacts",
			item:""
		}
	  
	  ];
	
	return (

		
		<nav className="mx-5 py-5 ">
			<div className="flex items-center justify-between container mx-auto">
				<div className="flex items-center flex-shrink-0 text-black mr-20 w-24">
					{/*<svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>*/}
					<Link href="/">
						<Image  src={profilePic} alt="C.O.S. Laboratories" />
					</Link>
					<span className="font-semibold text-xl tracking-tight">
					<Link href="/">
						<a className=""></a>
					</Link>
					</span>
				</div>
		
			
							
				<div className=" py-3 lg:hidden flex items-center">
				<CartIconmob/>
				<input id="hamburger" className="hamburger" type="checkbox"/>
				<label className=" hamburger" for="hamburger">
		  		<i></i>
		
		</label>
		<section className="drawer-list bg-very_peri  ">
		<ul className="text-center mt-30 uppercase">
		<li className='mx-5 mt-10'><a href="/">Acasa</a></li>
			<li className='mx-5 mt-10'><a href="/categories">produse</a></li>
			<li className='mx-5 mt-10'><a href="/contact">Contact</a></li>
			
		</ul>
			</section>
				</div>

				{/*MMenu in mobile*/}
				<div className={`${ isMenuVisible ? 'max-h-full h-full' : 'h-0' } w-full hidden lg:h-full flex-grow lg:flex lg:items-center lg:w-auto`}>
					<ul className="text-sm font-medium  lg:flex-grow lg:flex h-full uppercase ">
					<li className='mx-5'><a href="/">Acasa</a></li>
					<li className='mx-5'><a href="/categories">produse</a></li>
					<li className='mx-5'><a href="/contact">Contact</a></li>
					
					
					</ul>
					
					<div className="text-sm font-medium">
					
						<CartIcon/>
					</div>
				</div>

			</div>
		</nav>
	
	)
};

export default Nav;