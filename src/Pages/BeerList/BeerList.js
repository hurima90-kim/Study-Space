import axios from "axios";
import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { tableIcons } from "./tableIcons";

const BeerList = () => {
  const [posts, setPosts] = useState([]);
  //   try {
  //     const response = await axios.get("https://api.punkapi.com/v2/beers");
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://api.punkapi.com/v2/beers");
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <MaterialTable
      title="Beer List"
      columns={[
        {
          title: "Thumbnail",
          field: "image_Url",
          render: (rowData) => (
            <img
              src={rowData.image_url}
              style={{ width: 40, height: 100, borderRadius: "50%" }}
              alt="img"
            />
          ),
        },
        { title: "Name", field: "name" },
        { title: "Tagline", field: "tagline" },
        { title: "First Brewed", field: "first_brewed" },
        { title: "Description", field: "description" },
        { title: "Abv", field: "abv" },
      ]}
      data={posts}
      icons={tableIcons}
      options={{
        selection: true,
      }}
    />
  );
};

export default BeerList;
