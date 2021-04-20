import React from "react";
import tw from "twin.macro";
import styled from "styled-components/macro";

export const BookInfo = ({viewAll, viewOne}) => {
  const defaultStatistics = [
    {
      key: "Trang",
      value: "228",
    },
  ];
  return (
    <div>
      <TwoColumn css={tw`md:items-center`}>
        <ImageColumn>
          <img src="https://source.unsplash.com/random" alt="" />
        </ImageColumn>
        <TextColumn>
          <TextContent>
            <Subheading>Tác giả: Nguyễn Trãi</Subheading>
            <Heading>
              Bình Ngô Đại Cáo
            </Heading>
            <Description>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
            </Description>
            {/* <h4>Bản dịch: Nguyễn Trãi</h4> */}
            <div></div>
            <Statistics>
              {defaultStatistics.map((statistic, index) => (
                <Statistic key={index}>
                  <Value>{statistic.value}</Value>
                  <Key>{statistic.key}</Key>
                </Statistic>
              ))}
            </Statistics>
            <div className="cs-eb-btn">
              <button className="cs-btn" onClick={viewAll}>Xem toàn bộ</button>
              <button className="cs-btn" onClick={viewOne}>Xem từng trang</button>
            </div>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </div>
  );
};
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-1 md:py-1`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw.h1`text-center md:text-left`;
const Heading = tw.h1`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Statistics = tw.div`flex flex-col items-center sm:block text-center md:text-left mt-4`;
const Statistic = tw.div`text-left sm:inline-block sm:mr-12 last:mr-0 mt-4`;
const Value = tw.div`font-bold text-lg sm:text-xl lg:text-2xl text-secondary-500 tracking-wide`;
const Key = tw.div`font-medium text-primary-700`;
