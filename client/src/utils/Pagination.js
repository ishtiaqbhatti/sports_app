import React from "react";
import { Link } from "react-router-dom";
import isEmpty from "./is-empty";

const Pagination = ({ pager, s }) => {
  let newUrl = s.substring(0, s.indexOf("&"));
  let pageNo = !isEmpty(newUrl) ? newUrl : "";
  return (
    <div className="text-center mt-50">
      <nav aria-label="Page  navigation example">
        <ul className="pagination">
          <li
            className={`page-item first-item ${
              pager.currentPage === 1 ? "disabled" : ""
            }`}
          >
            <Link
              to={{
                search:
                  !isEmpty(s) && !isEmpty(pageNo)
                    ? s.replace(pageNo, `?pageNo=${1}`)
                    : `?pageNo=${1}`
              }}
              className="page-link"
            >
              First
            </Link>
          </li>
          <li
            className={`page-item previous-item ${
              pager.currentPage === 1 ? "disabled" : ""
            }`}
          >
            <Link
              to={{
                search:
                  !isEmpty(s) && !isEmpty(pageNo)
                    ? s.replace(pageNo, `?pageNo=${pager.currentPage - 1}`)
                    : `?pageNo=${pager.currentPage - 1}`
              }}
              className="page-link"
            >
              Previous
            </Link>
          </li>
          {pager.pages.map(page => (
            <li
              key={page}
              className={`page-item number-item ${
                pager.currentPage === page ? "active" : ""
              }`}
            >
              <Link
                to={{
                  search:
                    !isEmpty(s) && !isEmpty(pageNo)
                      ? s.replace(pageNo, `?pageNo=${page}`)
                      : `?pageNo=${page}`
                }}
                className="page-link"
              >
                {page}
              </Link>
            </li>
          ))}
          <li
            className={`page-item next-item ${
              pager.currentPage === pager.totalPages ? "disabled" : ""
            }`}
          >
            <Link
              to={{
                search:
                  !isEmpty(s) && !isEmpty(pageNo)
                    ? s.replace(pageNo, `?pageNo=${pager.currentPage + 1}`)
                    : `?pageNo=${pager.currentPage - 1}`
              }}
              className="page-link"
            >
              Next
            </Link>
          </li>
          <li
            className={`page-item last-item ${
              pager.currentPage === pager.totalPages ? "disabled" : ""
            }`}
          >
            <Link
              to={{
                search:
                  !isEmpty(s) && !isEmpty(pageNo)
                    ? s.replace(pageNo, `?pageNo=${pager.totalPages}`)
                    : `?pageNo=${pager.totalPages}`
              }}
              className="page-link"
            >
              Last
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
