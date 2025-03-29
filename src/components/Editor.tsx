import { Form } from "react-bootstrap";
interface EditorProps {
	onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	valueOfInput: string;
}
export default function Editor({ onInputChange, valueOfInput }: EditorProps) {
	return (
		<div className="d-flex flex-column h-100 p-3 overflow-hidden" style={{ minHeight: "60vh" }}>
			<div className="text-primary border-bottom">
				<h1 className="fs-2">Editor</h1>
			</div>
			<Form.Control
				as="textarea"
				aria-label="textarea"
				id="editor"
				className="bg-light-subtle flex-grow-1 mt-2 p-2"
				style={{ resize: "none" }}
				onChange={onInputChange}
				value={valueOfInput}
				spellCheck="false"
			/>
		</div>
	);
}
