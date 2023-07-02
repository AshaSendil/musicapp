import React, {useContext} from "react";
import "../assets/scss/SideBar.scss";
import SideBarOptions from "./SideBarOptions";
import {ThemeContext} from "../../api/Theme";
import Profile from "../assets/img/profile.png"
import {ExploreOutlined, HomeOutlined, PlaylistPlay, SearchOutlined,AlbumIcon,EmojiPeopleIcon} from "@material-ui/icons";
function SideBar() {
    const useStyle = useContext(ThemeContext);
    return (
        <aside style={useStyle.component} className={"aside-bar"}>
            <div className="profile-image">
            <img src={Profile} width={"75px"} height={"75px"} alt=""/>
                </div>
                {/* <div className="profile_details"> */}
                <span style={{fontWeight:"bold"}}>Asha Sendil</span>
                <span style={{color:"#646fc1"}}>aashasendil@gmail.com</span>
                {/* </div> */}
            <div className="aside-bar-container">
                <p className={"p1"}>
                    <span>Browser</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={HomeOutlined} href={"/home"} title={"Home"} />
                <SideBarOptions className={"lib-sub"} Icon={ExploreOutlined} href={"/home/playlist"}  title={"Playlist"}/>
                <SideBarOptions className={"lib-sub"} Icon={HomeOutlined} href={"/home/album"}  title={"Album"}/>
                <SideBarOptions className={"lib-sub"} Icon={HomeOutlined} href={"/home/artist"}  title={"Artist"}/>
            </div>
            <div className="aside-bar-container playlist">
                <p className={"p1"}>
                    <span>Discover</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/radio"}  title={"Radio"}/>
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/event"}  title={"Event"}/>
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/postcast"}  title={"Postcast"}/>
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/foryou"}  title={"For you"}/>

            </div>
        </aside>
    );
}

/*
*
* */
export default SideBar;