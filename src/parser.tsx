import Heading from "./components/Heading";
import type { ReactElement } from "react";
import {renderToString} from "react-dom/server"

export const parseWPContent = (content: string) => {
	let buffer:ReactElement[] = []
	content
		.split("\n")
		.filter((s) => {
			return s.length > 0;
		})
		.map((s) => {
			return s.substring(s.indexOf(">") + 1, s.lastIndexOf("<"));
		})
		.map((s) => {
			if (s.substring(0, s.indexOf(" ")) === "Heading")
				return buffer.push(<Heading text={s.substring(s.indexOf("{") + 1, s.lastIndexOf("}"))}/>)
			buffer.push(<div>{s.substring(s.indexOf("{") + 1, s.lastIndexOf("}"))}</div>)
		})

		return renderToString(buffer)
};
