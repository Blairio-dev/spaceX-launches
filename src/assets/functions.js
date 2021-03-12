import moment from "moment";

const sortByDate = (launchData, isAscending) =>
  [...launchData].sort(function (a, b) {
    return isAscending
      ? moment(a.launch_date_utc) - moment(b.launch_date_utc)
      : moment(b.launch_date_utc) - moment(a.launch_date_utc);
  });

export const sortLaunches = (launchData, launchYear, isAscending) =>
  launchYear === ""
    ? sortByDate(launchData, isAscending)
    : sortByDate(
        launchData.filter((launch) => launch.launch_year === launchYear),
        isAscending
      );
