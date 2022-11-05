
import React, { useState, useRef } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBCard,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const Login = ({ close }) => {
  const [basicModal, setBasicModal] = useState(false);
  const [isotpOpen, setisOtpOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const form = useRef();
  const [justifyActive, setJustifyActive] = useState("tab1");
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [generateOtp, setgenerateOtp] = useState();
  let templateParams = {
    user_email: email,
    to_name: name,
    message: generateOtp,
  };

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <div>
      <MDBCard
        className="my-5 mx-auto"
        style={{
            zIndex:"1000",
          borderRadius: "1rem",
          maxWidth: "800px",
          position: "absolute",
          justifyContent: "center",
          textAlign: "center",
          display: "block",
          lineHeight: "20px",
          right: "450px",
          // top: "100px",
          width: "600px",
          // background: "black"
        }}
      >
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <MDBTabs
            pills
            justify
            className="mb-3 d-flex flex-row justify-content-between"
          >
            <MDBTabsItem>
              <MDBTabsLink
                style={{ backgroundColor: "#8490ff", color: "#fff" }}
                onClick={() => handleJustifyClick("tab1")}
                active={justifyActive === "tab1"}
              >
                Login
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                style={{ backgroundColor: "#8490ff", color: "#fff" }}
                onClick={() => handleJustifyClick("tab2")}
                active={justifyActive === "tab2"}
              >
                Register
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent>
            <MDBTabsPane show={justifyActive === "tab1"}>
              <div className="text-center mb-3">
                <p>Sign in with:</p>

                <div
                  className="d-flex justify-content-between mx-auto"
                  style={{ width: "40%" }}
                >
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <i class="fab fa-linkedin"> </i>
                    <MDBIcon fab icon="twitter" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>

                <p className="text-center mt-3">or:</p>
              </div>

              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="form1"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                type="password"
              />

              <div
                className="d-flex justify-content-between"
                style={{ paddingTop: "5px", paddingBottom: "5px" }}
              >
                <MDBCheckbox
                  style={{ color: "#8490ff" }}
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />
                <a href="!#" style={{ color: "#8490ff" }}>
                  Forgot password?
                </a>
              </div>

              <MDBBtn
                className="mb-4 w-100"
                style={{ backgroundColor: "tomato", color: "#fff" }}
              >
                Sign in
              </MDBBtn>
              <p
                className="text-center"
                onClick={() => handleJustifyClick("tab2")}
                active={justifyActive === "tab2"}
              >
                Not a member? <a href="#!">Register</a>
              </p>
            </MDBTabsPane>

            <MDBTabsPane show={justifyActive === "tab2"}>
              <div className="text-center mb-3">
                <p>Sign up with:</p>

                <div
                  className="d-flex justify-content-between mx-auto"
                  style={{ width: "40%" }}
                >
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="twitter" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>

                <p className="text-center mt-3">or:</p>
              </div>
              <form ref={form}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Name"
                  id="form1"
                  type="text"
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Username"
                  id="form1"
                  type="text"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form1"
                  type="email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form1"
                  type="password"
                  name="message"
                />

                <div className="d-flex justify-content-center mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    id="flexCheckDefault"
                    label="I have read and agree to the terms"
                  />
                </div>

                <MDBBtn
                  className="mb-4 w-100"
                  style={{ backgroundColor: "tomato", color: "#fff" }}
                >
                  Sign up
                </MDBBtn>
                {/* {isOpen && (
                  <>
                    <Otp />
                  </>
                )} */}
              </form>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBContainer>
      </MDBCard>
    </div>
  );
};

export default Login;
