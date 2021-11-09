import axios from "axios";
import React, { useState, useEffect } from "react";
import MaterialTable, { MTableToolbar } from "material-table";

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
              style={{ width: 40, borderRadius: "50%" }}
              alt="img"
            />
          ),
        },
        { title: "Name", field: "name" },
        { title: "Tagline", field: "tagline" },
        { title: "First Brewed", field: "first_brewed" },
        { title: "Description", field: "description" },
      ]}
      data={posts}
    />
  );
};

export default BeerList;
