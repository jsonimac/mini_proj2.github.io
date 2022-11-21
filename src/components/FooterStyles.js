import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 40px;
background: #f2f2f2;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 999px;
	margin: 0 auto;
	margin-bottom: 2px;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: black;
margin-bottom:10px;
font-size: 15px;
text-decoration: none;

&:hover {
	color: yellow;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 17px;
color: #black;
margin-top: 20px;
font-weight: bold;
`;
