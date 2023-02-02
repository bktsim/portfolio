import { Routes, Route } from "react-router-dom";
import Content from "./index/Index";

interface MainProps {
  lang: string;
}

const RouteManager = ({ lang }: MainProps) => {
  return (
    <Routes>
      <Route path="/" element={<Content lang={lang} />}></Route>
    </Routes>
  );
};

export default RouteManager;
