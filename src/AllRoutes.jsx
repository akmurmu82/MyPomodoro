import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import FocusPeriod from "./components/FocusPeriod";
import Alarm from "./components/Alarm";
import StopWatch from "./components/StopWatch";
import Timer from "./components/Timer";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<FocusPeriod />} />
      <Route path="/" element={<Alarm />} />
      <Route path="/" element={<StopWatch />} />
      <Route path="/" element={<Timer />} />
    </Routes>
  );
}

AllRoutes.propTypes = {
  props: PropTypes.any,
};

export default AllRoutes;
