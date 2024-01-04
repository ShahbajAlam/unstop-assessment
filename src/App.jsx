import { useMediaQuery } from "@react-hookz/web";
import MobileSidebar from "./components/mobileComponents/MobileSidebar";
import MobileStatusbar from "./components/mobileComponents/MobileStatusbar";
import MobileAssessment from "./components/mobileComponents/MobileAssessment";
import MobileAssessmentTab from "./components/mobileComponents/MobileAssessmentTab";
import AssessmentLists from "./components/mobileComponents/AssessmentLists";
import { Fragment, useState } from "react";
import Form from "./components/mobileComponents/form/Form";
import Backdrop from "./components/commonComponents/Backdrop";
import Sidebar from "./components/desktopComponents/Sidebar";
import Header from "./components/desktopComponents/Header";
import AssessmentOverview from "./components/desktopComponents/AssessmentOverview";
import MyAssessment from "./components/desktopComponents/MyAssessment";
import BackdropDesktop from "./components/desktopComponents/BackdropDesktop";
import FormDesktop from "./components/desktopComponents/form/FormDesktop";

const App = () => {
    const [showForm, setShowForm] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [showBackdrop, setShowBackdrop] = useState(false);
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

    if (isSmallDevice) {
        return (
            <Fragment>
                {showBackdrop && (
                    <Backdrop
                        setShowBackdrop={setShowBackdrop}
                        setShowSidebar={setShowSidebar}
                        setShowForm={setShowForm}
                    />
                )}
                <MobileSidebar
                    showSidebar={showSidebar}
                    setShowSidebar={setShowSidebar}
                    setShowBackdrop={setShowBackdrop}
                />
                <div className="navbar">
                    <MobileStatusbar />
                    <MobileAssessment
                        setShowSidebar={setShowSidebar}
                        setShowBackdrop={setShowBackdrop}
                    />
                    <MobileAssessmentTab />
                </div>
                <AssessmentLists
                    setShowBackdrop={setShowBackdrop}
                    setShowForm={setShowForm}
                />
                <Form
                    showForm={showForm}
                    setShowForm={setShowForm}
                    setShowBackdrop={setShowBackdrop}
                />
            </Fragment>
        );
    }

    return (
        <div className="desktopContainer">
            {showBackdrop && (
                <BackdropDesktop
                    setShowBackdrop={setShowBackdrop}
                    setShowForm={setShowForm}
                />
            )}
            <Sidebar />
            <main className="main">
                <Header />
                <div className="assessmentContainer">
                    <AssessmentOverview />
                    <MyAssessment
                        setShowBackdrop={setShowBackdrop}
                        setShowForm={setShowForm}
                    />
                </div>
            </main>
            <FormDesktop
                showForm={showForm}
                setShowForm={setShowForm}
                setShowBackdrop={setShowBackdrop}
            />
        </div>
    );
};

export default App;
