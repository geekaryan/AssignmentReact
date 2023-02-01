import { useState } from "react";
import styles from "./Main.module.css";

const Main = ({ data }) => {
  const [toggle, setToggle] = useState(true);

  const showHandler = () => {
    setToggle(false);
  };

  const hideHandler = () => {
    setToggle(true);
  };
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.name}>
          <p>{data.name}</p>
        </div>
        <div>
          <div>
            <h3>Contact</h3>
          </div>
          <div>
            <p>{data.username}</p>
          </div>
        </div>
        <div>
          <div>
            <h3>City</h3>
          </div>
          <div>
            <p>{data.address.city}</p>
          </div>
        </div>
        <div>
          <div>
            <h3>State</h3>
          </div>
          <div>{data.address.street}</div>
        </div>
        <div className={styles.btnDiv}>
          {toggle && (
            <button onClick={showHandler} className={styles.btn}>
              View Details
            </button>
          )}
          {!toggle && (
            <button onClick={hideHandler} className={styles.btn}>
              Hide Details
            </button>
          )}
        </div>
      </div>
      {!toggle && (
        <div className={styles.newContainer}>
          <div>
            <div>
              <h3>Description</h3>
            </div>
            <div>
              <span>{data.company.catchPhrase}</span>
            </div>
          </div>
          <div className={styles.flex}>
            <div>
              <div>
                <h3>Contact Person</h3>
              </div>
              <div>
                <span>{data.username}</span>
              </div>
            </div>
            <div>
              <div>
                <h3>Address</h3>
              </div>
              <div>
                <span>
                  <span>{data.address.suite} </span>
                  <span> {data.address.street}</span>
                  <span> {data.address.zipcode}</span>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.flex}>
            <div>
              <div>
                <h3>Designation</h3>
              </div>
              <div>
                <span>{data.company.name}</span>
              </div>
            </div>
            <div>
              <div>
                <h3>State</h3>
              </div>
              <div>
                <span>{data.address.city}</span>
              </div>
            </div>
          </div>
          <div className={styles.flex}>
            <div>
              <div>
                <h3>Email</h3>
              </div>
              <div>
                <span>{data.email}</span>
              </div>
            </div>
            <div>
              <div>
                <h3>Telephone</h3>
              </div>
              <div>
                <span>{data.phone}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
