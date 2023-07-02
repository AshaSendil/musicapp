import React from "react";
import "../assets/scss/MusicCardContainer.scss";
import MusicCard from "./MusicCard";
import Container from "./Container";
import Recommended from "./Recommended";
import { useSelector } from "react-redux";

function MusicCardContainer() {
  const { playlists } = useSelector((state) => state.musicReducer);
  return (
    <div className="col-md-12">
      <Container>
        <div className={"music-card-container"}>
          {playlists.map((item) => (
            <MusicCard key={item.id} music={item} />
          ))}
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ padding: "36px" }} className="col-md-6">
            <h1>Popular</h1>
            {playlists.map((item) => (
              <Recommended key={item?.id} music={item} />
            ))}
          </div>
          <div className="col-md-6">
              <h1>Recommended</h1>
            <div className={"music-card-container"}>
              {playlists.map((item) => (
                <MusicCard key={item.id} music={item} />
              ))}{" "}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MusicCardContainer;
