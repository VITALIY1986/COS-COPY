import {Facebook, Instagram, Twitter, Youtube} from "./icons";
import Link from 'next/link';
import Image from 'next/image'
import profilePic from '../../public/logo.png'
const Footer = () => (
	<div className="footer bg-white shadow-2xl text-futer px-6 py-6 ">
		<div className="flex flex-col items-center">
		
			<div className="w-24">
	
						<Image  src={profilePic} alt="C.O.S. Laboratories " />
						</div>
		
			
			<div className="flex mt-3">
			<div className="bg-grey_cos  p-3 rounded-full mx-1 shadow-xl"><a href="https://www.facebook.com/COS.Laboratories/"><Facebook/></a></div><div className="bg-grey_cos  p-3 rounded-full mx-1 shadow-xl"><a href="https://www.instagram.com/cos_laboratories/"><Instagram/></a></div>
			</div>
			</div>
			<div className=" mt-6 text-center"><p>© 2019-2022 C.O.S. Laboratories / Toate drepturile rezervate. </p></div>
		</div>

);

export default Footer;