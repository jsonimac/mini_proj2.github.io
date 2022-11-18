// function Footer() {
//     return (
//         <div className="container">
//             <h2>This is Footer</h2>
//         </div>
//     );
// }

// export default Footer;

import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
return (
	<section>
		<Box>
			<h1 style={{ color: "white",
						textAlign: "center",
						marginTop: "-50px" }}>
				CornFlix: Just Watch and Chill
			</h1>
			<Container>
				<Row>
				<Column>
					<Heading>About Us</Heading>
					<FooterLink href="./about">About CornFlix</FooterLink>
				</Column>
				<Column>
					<Heading>Links</Heading>
					<FooterLink href="./movies">Movies</FooterLink>
					<FooterLink href="./tvshow">Tvshow</FooterLink>
					<FooterLink href="./mylist">Mylist</FooterLink>
                    <FooterLink href="./faqs">FAQs</FooterLink>
				</Column>
				<Column>
					<Heading>Contact Us</Heading>
					<FooterLink href="#">JC</FooterLink>
					<FooterLink href="#">Clyde</FooterLink>
					<FooterLink href="#">Anthony</FooterLink>
				</Column>
				<Column>
					<Heading>Social Media</Heading>
					<FooterLink href="#">
					<i className="fab fa-facebook-f">
						<span style={{ marginLeft: "10px" }}>
						<FaFacebookF /> - Facebook
						</span>
					</i>
					</FooterLink>
					<FooterLink href="#">
					<i className="fab fa-instagram">
						<span style={{ marginLeft: "10px" }}>
						<FaInstagram /> - Instagram
						</span>
					</i>
					</FooterLink>
					<FooterLink href="#">
					<i className="fab fa-twitter">
						<span style={{ marginLeft: "10px" }}>
						<FaTwitter /> - Twitter
						</span>
					</i>
					</FooterLink>
					<FooterLink href="#">
					<i className="fab fa-youtube">
						<span style={{ marginLeft: "10px" }}>
						<FaYoutube /> - Youtube
						</span>
					</i>
					</FooterLink>
				</Column>
				</Row>
			</Container>
		</Box>
	</section>
	
);
};
export default Footer;