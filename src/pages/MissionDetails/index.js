import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import CommentSection from "../../Components/Card/CommentSection";

const GET_DETAILS = gql`
  query Launch($launchId: ID!) {
    launch(id: $launchId) {
      mission_name
      details
      launch_year
      ships {
        image
      }
      rocket {
        rocket_name
        rocket_type
      }
    }
  }
`;

function MissionDetails() {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_DETAILS, {
    variables: {
      launchId: id,
    },
  });

  return (
    !loading && (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: 20,
            flex: 0.7,
          }}
        >
          <img width={500} src={data?.launch.ships[0].image} />
          <h2 style={{ color: "white" }}>{data?.launch.mission_name}</h2>
          <span style={{ color: "white" }}>{data?.launch.details}</span>
          <p style={{ color: "white" }}>
            Launch Year: {data?.launch.launch_year}
          </p>
          <p style={{ color: "white" }}>
            Rocket Name: {data?.launch.rocket.rocket_name}
          </p>
          <p style={{ color: "white" }}>
            Rocket Type: {data?.launch.rocket.rocket_type}
          </p>
        </div>
        <CommentSection id={id} />
      </div>
    )
  );
}

export default MissionDetails;
