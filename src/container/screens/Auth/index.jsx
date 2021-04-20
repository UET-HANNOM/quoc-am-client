import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components/macro"; //eslint-disable-line
import githubIcon from "./github.svg";
import { useDispatch } from "react-redux";
import { validateValue } from "container/common/utils";
import { loginService, signUpService } from "redux/services";
import Alert from "@material-ui/lab/Alert";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";

const AuthScreen = () => {
  const [userInfo, setUserInfo] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
  });
  const [verify, setVerify] = useState({
    email: false,
    password: false,
  });
  const [errMess, setErrMess] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const { type, from } = useParams();
  const handleChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
    checkVerify(event);
  };
  const submitAuth = (e) => {
    e.preventDefault();
    let body = {
      email: userInfo.email,
      password: userInfo.password,
      callback: (success) => {
        if (success === true) {
          if (from) {
            history.push(`/forum/${from}`);
          } else {
            history.push("/welcome");
          }
        } else {
          setErrMess(success);
        }
      },
    };
    if (type === "sign-in") {
      dispatch(loginService(body));
    } else if (type === "sign-up") {
      body.lastname = userInfo.lastname;
      body.firstname = userInfo.firstname;
      dispatch(signUpService(body));
    }
  };
  const checkVerify = (event) => {
    let test = validateValue(event.target.value, event.target.name);
    setVerify({
      ...verify,
      [event.target.name]: test,
    });
  };
  return (
    <Container className="cs-auth">
      <div className="cs-auth-contain">
        <div className="cs-auth-main">
          <h1> {type === "sign-in" ? "Đăng Nhập" : "Đăng Ký"} UET Hán - Nôm</h1>
          <div>
            <div className="cs-auth-social" hidden={type === "sign-up"}>
              {socialButtons.map((socialButton, index) => (
                <SocialButton key={index} href={socialButton.url}>
                  <div>
                    <img
                      src={socialButton.iconImageSrc}
                      style={{ width: 24, height: 24 }}
                      alt=""
                    />
                  </div>
                  <span className="text">{socialButton.text}</span>
                </SocialButton>
              ))}
            </div>
            <p
              style={{ margin: "2em", textAlign: "center", fontSize: "80%" }}
              hidden={type === "sign-up"}
            >
              Hoặc tiếp tục bằng e-mail
            </p>
            <form onSubmit={submitAuth}>
              {type === "sign-up" && (
                <>
                  <input
                    type="text"
                    placeholder="Họ"
                    name="firstname"
                    value={userInfo.firstname}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="Tên"
                    name="lastname"
                    value={userInfo.lastname}
                    onChange={handleChange}
                  />
                </>
              )}

              <input
                type="email"
                placeholder="E-mail"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Mật khẩu"
                name="password"
                value={userInfo.password}
                onChange={handleChange}
              />
              {errMess && (
                <Alert severity="error" style={{ marginTop: 16 }}>
                  {errMess}
                </Alert>
              )}
              <SubmitButton
                type="submit"
                disabled={!verify.email || !verify.password}
              >
                <i className="fi-rr-sign-in"></i>
                <span className="text">
                  {type === "sign-in" ? "Đăng nhập" : "Đăng ký"}
                </span>
              </SubmitButton>
            </form>
            <p tw="mt-6 text-xs text-gray-600 text-center">
              <a href="/" hidden={type === "sign-up"}>
                Quên mật khẩu ?
              </a>
            </p>
            <p tw="mt-8 text-sm text-gray-600 text-center">
              {type === "sign-in" ? (
                <>
                  Bạn chưa có tài khoản? <Link to="/auth/sign-up">Đăng ký</Link>
                </>
              ) : (
                <>
                  Bạn đã có tài khoản? <Link to="/auth/sign-in">Đăng nhập</Link>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AuthScreen;
const Container = tw.div`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const socialButtons = [
  {
    iconImageSrc: githubIcon,
    text: "Sign In With Github",
    url: "https://github.com",
  },
];
