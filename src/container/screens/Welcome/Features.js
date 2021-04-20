import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import translateIcon from "./language.svg";
const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const FeatureComponent = ({ goto }) => {
  const cards = [
    {
      icons: "fi-rr-mode-landscape",
      title: "Tra cứu nhanh",
      link: "/quickscan",
      description:
        "Sử dụng công cự AI để quét nhanh tài liệu Hán - Nôm của bạn và chuyển thành văn bản chữ quốc ngữ",
    },

    {
      iconSvg: translateIcon,
      title: "Từ điển",
      link: "/dictionary",
      description:
        "Tra cứu các tài liệu Hán - Nôm trong kho tàng được chúng tôi lưu trữ",
    },
    {
      icons: "fi-rr-book",
      title: "Thư viện",
      link: "/library",
      description:
        "Tra cứu các tài liệu Hán - Nôm trong kho tàng được chúng tôi lưu trữ",
    },

    {
      icons: "fi-rr-cursor",
      title: "Tham gia dán nhãn",
      link: "/labling",
      description:
        "Tra cứu tài liệu Hán - Nôm dạng ảnh bằng cách sử dụng công cụ AI của chúng tôi",
    },
    {
      icons: "fi-rr-comment",
      title: "Diễn đàn",
      link: "/forum",
      description:
        "Tra cứu tài liệu Hán - Nôm dạng ảnh bằng cách sử dụng công cụ AI của chúng tôi",
    },
    {
      icons: "fi-rr-edit",
      title: "Công cụ đa nền tảng",
      link: "/react",
      description:
        "Chúng tôi xây dựng những công cụ đa nền tảng, giúp bạn có thể quét những ký tự Hán Nôm ở mọi nơi, trên mọi thiết bị",
    },
  ];

  return (
    <div>
      <div className="cs-welcome">
        <h2>Những thứ chúng tôi có: </h2>
        <div className="cs-welcome-features">
          {cards.map((card, i) => (
            <div key={i} onClick={() => goto(card.link)}>
              <Card className="cs-welcome-features-card">
                {card.iconSvg ? (
                  <img src={card.iconSvg} alt="anh" />
                ) : (
                  <i className={`${card.icons} cs-welcome-icon`}></i>
                )}
                <span className="textContainer">
                  <span className="title">{card.title || "Fully Secure"}</span>
                  <p className="description">
                    {card.description ||
                      "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                  </p>
                </span>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FeatureComponent;
