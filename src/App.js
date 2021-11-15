import logo from "./logo.svg";
import "./asset/font/css/style.css";
import "./asset/font/css/fontiran.css";
import "./App.css";
import CardsWrapper from "./components/CardsWrapper";
import Card from "./components/Card";
import image1 from "./asset/image/1.jpg";
import styled from "styled-components";

const Text = styled.p`
	max-width: 750px;
	text-align: center;
	margin: 0 auto;
`;

function App() {
	return (
		<div className="App">
			<h2>موضوعات</h2>
			<Text>
				فعالیت های فرهنگی ای که امروزه در سطح کشور درحال انجام است دائما در حال
				گسترش در زمینه ها و موضوعات جدید میباشد. این فعالیت ها در سامانه پلتزار
				در بخش های زیر دسته بندی شده است
			</Text>
			<CardsWrapper>
				<Card image={image1} title="انقلاب اسلامی و مقاومت" />
				<Card image={image1} title="انقلاب اسلامی و مقاومت" />
				<Card image={image1} title="انقلاب اسلامی و مقاومت" />
				<Card image={image1} title="انقلاب اسلامی و مقاومت" />
				<Card image={image1} title="انقلاب اسلامی و مقاومت" />
				<Card image={image1} title="انقلاب اسلامی و مقاومت" />
			</CardsWrapper>
		</div>
	);
}

export default App;
