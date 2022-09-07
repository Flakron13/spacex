import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./Home.css";
import Card from "../../Components/Card";

const GET_SPACE_MISSION = gql`
  query Missions($limit: Int) {
    launches(limit: $limit) {
      id
      details
      mission_name
      ships {
        image
      }
    }
  }
`;

export default function Queries() {
  const { data } = useQuery(GET_SPACE_MISSION, {
    variables: {
      limit: 30,
    },
  });

  return (
    <div className="container">
      {data?.launches
        .filter((e) => e.details !== null && e.ships.length !== 0)
        .map((item) => {
          return <Card key={item.id} item={item} />;
        })}
    </div>
  );
}
