import PublicXProject from "../../components/pages/Home/PublicXProject";
import ExtText from "../../components/pages/Home/ExtText";
import StoriesNews from "../../components/pages/Home/StoriesNews";
import XTimeline from "../../components/pages/Home/XTimeline";

const Home = () => {
    return (
        <div className="w-full">
            <ExtText/>
            <PublicXProject/>
            <StoriesNews/>
            <XTimeline/>
        </div>
    );
};

export default Home;