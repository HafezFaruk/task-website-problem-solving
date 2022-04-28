import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BookStore from './components/BookStore/BookStore';
import Home from './components/Home/Home';
import HomeTwo from './components/HomeTwo/HomeTwo';
import Footer from './components/Shared/Footer';
import SingleCourse from './components/SingleCourse/SingleCourse';
import NavBar from './components/Shared/NavBar';
import Bcs from './components/Courses/BCS/Bcs';
import PrimaryTeac from './components/Courses/PrimaryCourses/PrimaryTeac';
import Ntrca from './components/Courses/NTRCA/Ntrca';
import CardDetails from './components/CardDetails/CardDetails';
import PurchaseCourse from './components/PurchaseCourse/PurchaseCourse';
import BookDetails from './components/BookStore/BookDetails';
import ThiredFourthLavel from './components/Courses/ThiredFourthLavel/ThiredFourthLavel';
import LoginModal from './components/Modals/LoginModal';
import SignUpModal from './components/Modals/SignUpModal';
import Notice from './components/Notice/Notice';
import AllCourses from './components/AllCourses/AllCourses.js';

function App() {
  return (
    <div style={{ fontFamily: "Montserrat" }} className="App">
      {/* font-family: 'Montserrat', sans-serif; */}

      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* All Courses */}

          <Route path="/allCourses" element={<AllCourses />} />
          <Route path="/bcs" element={<Bcs />} />

          <Route path="/primTeac" element={<PrimaryTeac />} />
          <Route path="/ntrca" element={<Ntrca />} />
          <Route path="/noticeBoard" element={<Notice />} />
          {/* <Route path="/jobPre" element={<Bcs />} /> */}
          <Route path="/thiredFourthLavel" element={<ThiredFourthLavel />} />
          <Route path="/singleCourse" element={<SingleCourse />} />
          <Route path="/homeTwo" element={<HomeTwo />} />
          {/* courses details and purchase page  */}
          <Route path="/:course/det/:objectId" element={<CardDetails />} />
          {/* <Route path='/det/:objectId' element={ <CardDetails/> } /> */}
          <Route path="/det/:objectId/purchase" element={<PurchaseCourse />} />
          <Route
            path="/:course/det/:objectId/purchase"
            element={<PurchaseCourse />}
          />
          {/* book details and purchase  */}
          <Route path="/bookStore" element={<BookStore />} />
          <Route path="/bookStore/det/:bookId" element={<BookDetails />} />
          <Route
            path="/bookStore/det/:bookId/purc"
            element={<PurchaseCourse />}
          />
          {/* Login and Sign */}
          <Route path="/login" element={<LoginModal />} />
          <Route path="/signUp" element={<SignUpModal />} />
          <Route path="*" element={<p>404, Page not found</p>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
