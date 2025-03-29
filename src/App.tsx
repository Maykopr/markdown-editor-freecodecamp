import "./custom.scss";
import React, { JSX, useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import ButtonTheme from "./components/ButtonTheme";
import { Container, Row, Col } from "react-bootstrap";
import { marked } from "marked";

export default function App(): JSX.Element {
	const [input, setInput] = useState<string>(
		"# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)![Minion](https://octodex.github.com/images/minion.png)![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg 'The Stormtroopocat') ![id](https://octodex.github.com/images/dojocat.jpg)\n"
	);

	const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInput(event.target.value);
	};

	return (
		<Container fluid="xxl">
			<Row className="d-flex flex-column flex-md-row min-vh-100">
				<Col md={5} className="p-0">
					<Editor onInputChange={handleInputChange} valueOfInput={input} />
				</Col>
				<Col md={7} className="p-0">
					<ButtonTheme />
					<Preview content={marked.parse(input)} />
				</Col>
			</Row>
		</Container>
	);
}
