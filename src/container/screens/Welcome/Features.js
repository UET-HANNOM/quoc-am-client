import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

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

const FeatureComponent = () => {
  const cards = [
    {
      icons: "fi-rr-book",
      title: "Thư viện",
      description:
        "Tra cứu các tài liệu Hán - Nôm trong kho tàng được chúng tôi lưu trữ",
    },
    {
      icons: "fi-rr-cursor",
      title: "Tham gia dán nhãn",
      description:
        "Tra cứu tài liệu Hán - Nôm dạng ảnh bằng cách sử dụng công cụ AI của chúng tôi",
    },
    
    {
      icons: "fi-rr-mode-landscape",
      title: "Tra cứu nhanh",
      description:
        "Sử dụng công cự AI để quét nhanh tài liệu Hán - Nôm của bạn và chuyển thành văn bản chữ quốc ngữ",
    },
    {
      icons: "fi-rr-edit",
      title: "Đóng góp",
      description:
        "Đóng góp vào thư viện bằng cách đăng và viết bài về những tài liệu bạn sưu tập được",
    },
    {
      icons: "fi-rr-comment",
      title: "Diễn đàn",
      description:
        "Tra cứu tài liệu Hán - Nôm dạng ảnh bằng cách sử dụng công cụ AI của chúng tôi",
    },
    {
      icons: "fi-rr-mode-landscape",
      title: "Tra cứu nhanh",
      description:
        "Tra cứu tài liệu Hán - Nôm dạng ảnh bằng cách sử dụng công cụ AI của chúng tôi",
    },
  ];

  return (
    <div>
      <div className="cs-welcome">
        <h2>Our Professional Services</h2>
        <div className="cs-welcome-features">
          {cards.map((card, i) => (
            <div key={i}>
              <Card>
                <i className={`${card.icons} cs-welcome-icon`}></i>
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
