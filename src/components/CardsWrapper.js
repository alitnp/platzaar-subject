import styled from "styled-components";
import arrowImage from "../asset/image/arrow.png";

const Container = styled.div`
	width: 85%;
	max-width: 1200px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: auto;
	row-gap: 2rem;
	padding-top: 2rem;
	margin-bottom: 10rem;
	position: relative;
	@media screen and (min-width: 768px) {
		grid-template-columns: auto auto;
	}
	@media screen and (min-width: 992px) {
		grid-template-columns: auto auto auto;
	}
`;

const ArrowWrapper = styled.div`
	position: absolute;
	& img {
		width: 40px;
	}
	left: -40px;
	top: 50%;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const LeftArrowWrapper = styled(ArrowWrapper)`
	left: unset;
	right: -40px;
	transform: rotate(180deg) scaleX(-1);
	-webkit-transform: scaleX(-1);
`;

const CardsWrapper = ({ children }) => {
	return (
		<Container>
			{children}
			<ArrowWrapper>
				<img src={arrowImage} alt="" />
			</ArrowWrapper>
			<LeftArrowWrapper>
				<img src={arrowImage} alt="" />
			</LeftArrowWrapper>
		</Container>
	);
};

export default CardsWrapper;
