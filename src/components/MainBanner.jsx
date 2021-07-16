import { memo } from "react";
import Button from "./common/Button";
import ContainerItem from "./common/ContainerItem";
import "./css/MainBanner.css";
const MainBanner = () => {
  return (
    <section id="mainBanner" className="main-banner">
      <div className="container-01">
        <ContainerItem value="Having an issue ?" />
        <div className="item item--2">
          <p>Last ticket raised</p>
          <div className="row">
            <div className="icon-calendar"></div>
            <div className="content">
              <h3>Ticket 001</h3>
              <p>03 Jan 2021, 7:10 AM</p>
            </div>
            <div className="view-details">
              <p>View details &gt;</p>
            </div>
          </div>
        </div>
        <div className="item item--3">
          <Button class="button" value="View Tickets" />
          <Button class="button button-2" value="Raise new ticket" />
        </div>
      </div>
      <div className="container-02">
        <ContainerItem value="FAQs" />
      </div>
    </section>
  );
};

export default memo(MainBanner);
