import React from "react";
import { Input } from "reactstrap";
import "./search.css";

const Search = () => {
  return (
    <div className="search py-8 px-5 mb-9 mx--7">
      <h2 className="text-light mb-4 text-center">
        First Haitian assets library
      </h2>
      <div class="row mx-9">
        <div class="col-md-3">
          <div class="search-1">
            {" "}
            <i class="bx bx-search-alt"></i>{" "}
            <Input
              className="input"
              type="select"
              placeholder="All Resssources"
            >
              <option>Assets</option>
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
              <button onSubmit={() => {}}>
                <i
                  className="fa fa-search fa-5x ml-4 text-center mt-1"
                  aria-hidden="true"
                ></i>
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <h6 className="text-light ml-5 mt-4 fs-3 fs-bold mx-auto">
          Popular now: YouTube , Facebook , app , instagram , whatsapp , twitter
          , phone
        </h6>
      </div>
    </div>
  );
};

export default Search;
