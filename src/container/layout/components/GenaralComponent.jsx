import { Button, Paper, Tab } from "@material-ui/core";
import { Alert, AlertTitle, TabContext, TabList, TabPanel } from "@material-ui/lab";
import tw from "twin.macro";
export const ContentWithPaddingXl = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
export const ErrorAlert = ({ err }) => {
  return (
    <Alert severity="error" style={{ margin: "3em", width: "80%" }}>
      <AlertTitle>Error</AlertTitle>
      {err}
    </Alert>
  );
};
export const ResultAfterScan = ({ data, value, handleChange, image, csclass = "" }) => {
  return (
    <Paper square className={csclass} >
      <TabContext value={value}>
        <TabList
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Văn bản dịch" value="1" />
          <Tab label="Văn bản gốc" value="2" />
          <Tab label="Ảnh gốc" value="3" />
        </TabList>
        <TabPanel value="1">{data.text1}</TabPanel>
        <TabPanel value="2">
          {String(data.text2)
            .replaceAll(" ", "")
            .split("")
            .map((i) => (
              <Button>{i}</Button>
            ))}
        </TabPanel>
        <TabPanel value="3">
          <div className="">
            <img src={image} alt="" />
          </div>
        </TabPanel>
      </TabContext>
    </Paper>
  );
};