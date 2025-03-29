// import "./markdown.css";

interface PreviewProps {
	content: string | Promise<string>;
}

export default function Preview({ content }: PreviewProps) {
	return (
		<div className="p-3 overflow-hidden d-flex flex-column h-100">
			<div className="text-primary border-bottom">
				<h1 className="fs-2">Preview</h1>
			</div>
			<div className="pt-3 overflow-y-auto" id="preview" dangerouslySetInnerHTML={{ __html: content }}></div>
		</div>
	);
}
