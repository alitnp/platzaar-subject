import styled from "styled-components";
import userImage from "../asset/image/user.png";
import bagImage from "../asset/image/bag.png";
import lampImage from "../asset/image/lamp.png";
import checkImage from "../asset/image/check.png";

const Container = styled.div`
	width: 100%;
	flex-shrink: 1;
	flex-grow: 0;
	padding: 0 1rem;
`;

const Wrapper = styled.div`
	border-radius: 0.25rem;
	overflow: hidden;
	width: 100%;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
`;
const ImageWrapper = styled.div`
	width: 100%;
`;

const Image = styled.img`
	width: 100%;
	height: 200px;
	object-fit: cover;
`;

const Title = styled.h4`
	text-align: right;
	width: 85%;
	margin: 0 auto;
	padding: 0.5rem 0;
`;

const InfoWrapper = styled.div`
	width: 85%;
	height: fit-content;
	margin: 0 auto;
	border-top: 1px solid var(--black);
	padding: 0.5rem 0;
	display: flex;
`;

const Divider = styled.div`
	border-left: 1px solid var(--black);
	width: 0;
	height: 72spx;
`;

const Info = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-top: 10px;
	font-weight: 400;
	color: var(--balck);
	& img {
		height: 24px;
		width: 24px;
		margin: 0 auto;
		object-fit: contain;
	}
	& p {
		font-size: 0.75rem;
		white-space: nowrap;
	}
`;

const Card = ({ image, title }) => {
	return (
		<Container>
			<Wrapper>
				<ImageWrapper>
					<Image src={image} />
				</ImageWrapper>
				<Title>{title}</Title>
				<InfoWrapper>
					<Info>
						<img src={checkImage} alt="" />
						<p>۷ رویداد</p>
					</Info>
					<Divider />
					<Info>
						<img src={lampImage} alt="" />
						<p>۱۲ ایده</p>
					</Info>
					<Divider />
					<Info>
						<img src={bagImage} alt="" />
						<p>۱۰۰ محصول</p>
					</Info>
					<Divider />
					<Info>
						<img src={userImage} alt="" />
						<p>۷ فعال</p>
					</Info>
				</InfoWrapper>
			</Wrapper>
		</Container>
	);
};

export default Card;
