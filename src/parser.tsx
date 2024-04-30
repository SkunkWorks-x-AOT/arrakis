import Heading from "./components/Heading";
import Paragraph from './components/Paragraph'
import SideBar from './components/Sidebar'
import {renderToString} from "react-dom/server"

export const parseWPContent = (content: string) => {
	return content
		.split("\n")
		.filter((s) => {
			return s.length > 0;
		})
		.map((s) => {
			return s.substring(s.indexOf(">") + 1, s.lastIndexOf("<"));
		})
		.map((s) => {
			if (s.substring(0, s.indexOf(" ")) === "Heading" || s.substring(0, s.indexOf("{")) === "Heading" )
				return renderToString(<Heading text={s.substring(s.indexOf("{") + 1, s.lastIndexOf("}"))}/>)	
			if (s.substring(0, s.indexOf(" ")) === "Paragraph" || s.substring(0, s.indexOf("{")) === "Paragraph" )
				return renderToString(<Paragraph text={s.substring(s.indexOf("{") + 1, s.lastIndexOf("}"))}/>)
			if(s.includes("Sidebar"))				
				return renderToString(<SideBar/>)
			return renderToString(<div dangerouslySetInnerHTML={{__html: s}}/>)
		})
};
