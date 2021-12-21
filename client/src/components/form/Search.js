import React from "react";
import { Input } from "reactstrap";
import "./search.css";

const Search = () => {
  return (
    <div class="search py-6 px-4">
      <div class="row">
        <div class="col-md-3">
          <div class="search-1">
            {" "}
            <i class="bx bx-search-alt"></i>{" "}
            <Input
              className="input"
              type="select"
              placeholder="All Resssources"
            >
              <option>All Resssources</option>
              <option>Images</option>
              <option>Vectors</option>
              <option>Illustrations</option>
              <option>Photography</option>
            </Input>
          </div>
        </div>
        <div class="col-md-9">
          <div>
            <div class="search-2">
              {" "}
              <i class="bx bxs-map"></i>{" "}
              <Input type="text" placeholder="Search all ressources" />{" "}
              <button>Search</button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
