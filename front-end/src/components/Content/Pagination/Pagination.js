import React from "react";
import "./style.scss";

export default function Pagination(props) {
  const { pages, onChange } = props;

  function onPageChange(p) {
    onChange(p);
  }

  return (
    <div className="pager">
      <ul className="pagination">
        <li className="pre">
          <a onClick={() => onPageChange(1)}>
            <span>≪</span>
          </a>
        </li>
        <li>
          <a onClick={() => onPageChange(1)}>
            <span>1</span>
          </a>
        </li>
        <li>
          <a onClick={() => onPageChange(2)}>
            <span>2</span>
          </a>
        </li>
        <li>
          <a onClick={() => onPageChange(3)}>
            <span>3</span>
          </a>
        </li>
        <li>
          <a onClick={() => onPageChange(4)}>
            <span>4</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
