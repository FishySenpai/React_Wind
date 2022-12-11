import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Anime from "./Anime";

const Reviews = () => {
  const [revList, setRevList] = useState();
  const { mal_id } = useParams();
  const navigate = useNavigate();
  console.log(revList);
  const handleClick = () => {
    navigate(0);
  };

const Review = async (query) => {
  const temp = await fetch(
    `https://api.jikan.moe/v4/anime/${mal_id}/reviews`
  ).then((res) => res.json());
  setRevList(temp.data);
  console.log(temp.data);
};

  useEffect(() => {
      Review();
  }, []);

  if (revList) {
    return (
      <div>
        <div className="px-6 items-center mx-auto container justify-between">
          <div className="p-6 pt-12 items-center container justify-between">
            <ul className="flex flex-wrap">
              {revList.slice(0, 1).map((rev, index) => (
                <li className="mr-8 pb-6" key={rev.mal_id}>
                  <div className="text-gray-600 text-md">
                    <a href="/">
                      {console.log(revList.user)}
                      <img
                        className="w-16 h-16 rounded-full"
                        src={rev.user.images?.jpg.image_url}
                        alt="img"
                      />
                    </a>
                    
                      {rev.review}
                      {rev.tags}
                    
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    <div>Loading...</div>;
  }
};

export default Reviews;
