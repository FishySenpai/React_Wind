import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Anime from "./Anime";

const Reviews = () => {
  const [revList, setRevList] = useState();
  const [revToggle, setRevToggle]= useState(false);
  const { mal_id } = useParams();
  const navigate = useNavigate();
  console.log(revList);
  const handleClick = () => {
    setRevToggle(!revToggle);
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
  }, [mal_id]);

  if (revList) {
    return (
      <div>
        <div className="px-6 items-center mx-auto container justify-between">
          <div className="p-6 pt-12 items-center container justify-between">
            <div className="text-2xl py-5">Reviews</div>
            <ul className="flex flex-wrap">
              {revList.slice(0, 3).map((rev, index) => (
                <li className="mr-8 pb-6" key={rev.mal_id}>
                  <div className="text-gray-600 text-md">
                    <div className="flex flex-row">
                      <a href={rev.user.url}>
                        {console.log(revList.user)}
                        <img
                          className="w-16 h-16 rounded-full"
                          src={rev.user.images?.jpg.image_url}
                          alt="img"
                        />
                      </a>
                      <div className="text-[16px] space-x-24 p-4 text-gray-800 font-medium">
                        {rev.tags.slice(0, 1)}
                      </div>
                    </div>
                    <button onClick={handleClick}>
                      <div className={`${revToggle ? "flex" : "text"}`}>
                        {rev.review}
                      </div>
                    </button>
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
