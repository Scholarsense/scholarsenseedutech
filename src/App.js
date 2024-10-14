
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./Components/Menu/Home";
import Faculty from "./Components/Menu/Faculty";
import Contact from "./Components/Menu/Contact";
import Blog from "./Components/Menu/Blog/Blog";
import Plan from "./Components/Menu/Plan/Plan";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import SignUp from "./Components/Login/SignUp";
import SubAnatomy from "./Components/SubAnatomy";
import Profile from "./Components/Dasboard_Side_Menu/Profile /Profile";
import TrialEndBanner from "./Components/TrialEndBanner";
import RefundPolicy from "./Components/Policy/RefundPolicy";
import AboutUs from "./Components/Menu/AboutUs";
import Registration from "./Components/Registration";
import Login from "./Components/Login/Login";
import Settings from "./Components/Dasboard_Side_Menu/Settings/Settings";
import SettingHome from "./Components/Dasboard_Side_Menu/Settings/SettingHome";
import Video from "./Components/Dasboard_Side_Menu/Settings/Video";
import QBank from "./Components/Dasboard_Side_Menu/Settings/QBank";
import Tests from "./Components/Dasboard_Side_Menu/Settings/Tests";
import MyAccount from "./Components/Dasboard_Side_Menu/Settings/MyAccount";
import Bookmarks from "./Components/Dasboard_Side_Menu/Settings/Bookmarks";
import ViewPlan from "./Components/Menu/Plan/ViewPlan";
import Doubt from "./Components/Doubt";
import FeedbackPopup from "./Components/FeedbackPopup";
import Coupon from "./Components/Coupon";
import CustomModule from "./Components/CustomModule";
import PlanDetails from "./Components/Menu/Plan/PlanDetails";
import Faq from "./Components/Faq";
import GrievanceSection from "./Components/Policy/GrievanceSection";
import CookiesPolicy from "./Components/Policy/CookiesPolicy;";
import PrivacyPolicy from "./Components/Policy/PrivacyPolicy";
import TermsConditions from "./Components/Policy/TermsConditions";
import Career from "./Components/Career";
import StudentAmbassador from "./Components/StudentAmbassador";
import Anatomy from "./Components/Study_Material/Anatomy";
import ExamPattern from "./Components/Exam_Guide/ExamPattern";
import ExamEligibilty from "./Components/Exam_Guide/ExamEligibilty";
import Notification from "./Components/Exam_Guide/Notification";
import PreparationStrategy from "./Components/Exam_Guide/PreparationStrategy";
import PreviousYearsQA from "./Components/Exam_Guide/PreviousYearsQA";
import HelpMyAccount from "./Components/Help_Center/HelpMyAccount";
import HowDoiLogOut from "./Components/Help_Center/HowDoiLogOut";
import Treasures from "./Components/Treasures";
import TreasuresTopics from "./Components/TreasuresTopics";
import TopicsWiseDetails from "./Components/TopicsWiseDetails";
import BlogDetails from "./Components/Menu/Blog/BlogDetails";
import OTPVerification from "./Components/Login/OTPVerification";
import SubjectChapterWise from "./Components/Study_Material/SubjectChapterWise";
import SubjectHandler from './Components/Study_Material/SubjectHandler'; // Import the new component
import ExploreSubjects from "./Components/Study_Material/ExploreSubjects";
import SubjectTopics from "./Components/Study_Material/SubjectTopics";
import Edit_Pdetails from "./Components/Dasboard_Side_Menu/Profile /Edit_Pdetails";
import SlideDetails from "./Components/Study_Material/SlideDetails";




function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);

    // Redirect to login page if not logged in and trying to access a protected route
    if (!loggedIn && location.pathname !== '/signup' && location.pathname !== '/') {
      // navigate('/profile');
    }
  }, [location.pathname, navigate]);

  const isSignUpOrProfile =
    location.pathname === "/signup" ||
    location.pathname === "/profile" ||
    location.pathname === "/settings" ||
    location.pathname === "/settingHome" ||
    location.pathname === "/video" ||
    location.pathname === "/QBank" ||
    location.pathname === "/Tests" ||
    location.pathname === "/MyAccount" ||
    location.pathname === "/Bookmarks" ||
    location.pathname === "/ViewPlan" ||
    location.pathname === "/Doubt" ||
    location.pathname === "/FeedbackPopup" ||
    location.pathname === "/Coupon" ||
    location.pathname === "/CustomModule" ||
    location.pathname === "/PlanDetails" ||
    location.pathname === "/Treasures" ||
    location.pathname === "/TreasuresTopics" ||
    location.pathname === "/TopicsWiseDetails" ||
    location.pathname === "/Login";

  return (
    <div>
      {/* Conditionally render the header */}
      {!isSignUpOrProfile && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/subAnatomy" element={<SubAnatomy />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/refundPolicy" element={<RefundPolicy />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/trialEndBanner" element={<TrialEndBanner />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/OTPVerification" element={<OTPVerification />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settingHome" element={<SettingHome />} />
        <Route path="/video" element={<Video />} />
        <Route path="/QBank" element={<QBank />} />
        <Route path="/Tests" element={<Tests />} />
        <Route path="/MyAccount" element={<MyAccount />} />
        <Route path="/Bookmarks" element={<Bookmarks />} />
        <Route path="/ViewPlan" element={<ViewPlan />} />
        <Route path="/Doubt" element={<Doubt />} />
        <Route path="/FeedbackPopup" element={<FeedbackPopup />} />
        <Route path="/Coupon" element={<Coupon />} />
        <Route path="/CustomModule" element={<CustomModule />} />
        <Route path="/PlanDetails" element={<PlanDetails />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/grievanceSection" element={<GrievanceSection />} />
        <Route path="/cookiesPolicy" element={<CookiesPolicy />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/termsConditions" element={<TermsConditions />} />
        <Route path="/career" element={<Career />} />
        <Route path="/studentAmbassador" element={<StudentAmbassador />} />
        <Route path="/anatomy" element={<Anatomy />} />
        <Route path="/examPattern" element={<ExamPattern />} />
        <Route path="/examEligibilty" element={<ExamEligibilty />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/preparationStrategy" element={<PreparationStrategy />} />
        <Route path="/previousYearsQA" element={<PreviousYearsQA />} />
        <Route path="/helpMyAccount" element={<HelpMyAccount />} />
        <Route path="/howDoiLogOut" element={<HowDoiLogOut />} />
        <Route path="/treasures" element={<Treasures />} />
        <Route path="/TreasuresTopics" element={<TreasuresTopics />} />
        <Route path="/TopicsWiseDetails" element={<TopicsWiseDetails />} />
        <Route path="/BlogDetails/:blogId" element={<BlogDetails />} />
        <Route path="/subject-handler/:classId/:subjectId" element={<SubjectHandler />} /> {/* New route */}
        <Route path="/SubjectChapterWise" element={<SubjectChapterWise />} />
        <Route path="/ExploreSubjects" element={<ExploreSubjects />} />
        <Route path="/SubjectTopics/:classId/:subjectId" element={<SubjectTopics />} />
        <Route path="/slide/:slideId" element={<SlideDetails />} />
        {/* <Route path="/edit-pdetails" element={<Edit_Pdetails />} /> */}
      </Routes>

      {/* Conditionally render the footer */}
      {!isSignUpOrProfile && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;