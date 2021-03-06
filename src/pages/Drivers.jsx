import React, { useContext, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
import omitBy from "lodash/omitBy";
import startCase from "lodash/startCase";
import Dashboard from "../components/Dashboard";
import DataTable from "../components/DataTable";
import InfoBox from "../components/InfoBox";
import Spinner from "../components/uiComponents/Spinner";
import NoDataBox from "../components/uiComponents/NoDataBox";
import ErrorBox from "../components/uiComponents/ErrorBox";
import DriversTableHeader from "../components/DriversTableHeader";
import { Context as DriverContext } from "../context/DriverContext";
import { driverStatusFilters } from "../utils/constants";
import Checkbox from "../components/uiComponents/Checkbox";
import Pagination from "../components/uiComponents/Pagination";
import { usePagination } from "../hooks/pagination";
import { formatNum } from "../utils/numFormatter";
import { useQueryParamWithDefaultValue } from "../hooks/useQueryParam";

const tableHeaders = [
  "",
  "Driver",
  "Status",
  "Location",
  "Total Trips",
  "Total Earnings",
  "Pending Payout",
];

const DEFAULT_FILTERS = { status: "all" };

const Drivers = () => {
  const [checkedDrivers, setCheckedDrivers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [shownRows, setShownRows] = useState(5);

  const [driverStatus, setDriverStatus] = useQueryParamWithDefaultValue(
    "status",
    DEFAULT_FILTERS.status
  );

  const filterValues = useMemo(
    () => ({ status: driverStatus }),
    [driverStatus]
  );

  const paginationOptions = useMemo(
    () => ({
      limit: shownRows,
      skip: (currentPage - 1) * shownRows,
    }),
    [shownRows, currentPage]
  );

  const {
    state: { fetchingDrivers, drivers, fetchDriversError, driverListSize },
    fetchDrivers,
  } = useContext(DriverContext);

  useEffect(() => {
    const sanitizedFilterValues = omitBy(
      filterValues,
      (item) => item && item === "all"
    );
    fetchDrivers({ ...sanitizedFilterValues, ...paginationOptions });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterValues, paginationOptions]);

  console.log(drivers);

  const { indexOfFirstItem, indexOfLastItem, pages } = usePagination(
    currentPage,
    shownRows,
    drivers,
    driverListSize
  );

  const toggleDriversCheck = (idx) => {
    if (checkedDrivers.includes(idx)) {
      const index = checkedDrivers.indexOf(idx);
      const newCheckedDrivers = [...checkedDrivers];
      newCheckedDrivers.splice(index, 1);
      setCheckedDrivers(newCheckedDrivers);
    } else {
      setCheckedDrivers([...checkedDrivers, idx]);
    }
  };

  const history = useHistory();

  return (
    <>
      <Dashboard pageTitle="Drivers">
        <div className="grid grid-cols-3 gap-6 mt-16">
          <InfoBox
            bgColor="bg-blue-gradient"
            infoTitle="Total No. of Drivers"
            infoValue={formatNum(800, false, true)}
          />
          <InfoBox
            bgColor="bg-green-gradient"
            infoTitle="Settled Payout"
            infoValue={formatNum(820557.45, true, true)}
          />
          <InfoBox
            bgColor="bg-yellow-gradient"
            infoTitle="Pending Payout"
            infoValue={formatNum(123760.87, true, true)}
          />
        </div>
        <div className="mt-10 bg-247-secondary rounded-md border-2 border-247-dark-text mb-10">
          <DriversTableHeader
            defaultFilters={DEFAULT_FILTERS}
            selectedStatusFilter={driverStatus}
            setSelectedStatusFilter={setDriverStatus}
            statusFilters={driverStatusFilters}
            navigateToPayoutRequests={() => history.push("/pending-payouts")}
          />
          <DataTable headers={tableHeaders} loadingData={fetchingDrivers}>
            {fetchingDrivers && (
              <div className="flex items-center justify-center w-full absolute py-14">
                <Spinner size="large" />
              </div>
            )}
            {!fetchingDrivers &&
              drivers.length > 0 &&
              drivers.map((driver, idx) => (
                <tr
                  onClick={(ev) => {
                    if (!ev.target.closest(".toggle-check")) {
                      history.push({
                        pathname: `/driver/${driver.id.toLowerCase()}`,
                      });
                    }
                  }}
                  className={
                    checkedDrivers.includes(idx)
                      ? "text-lg bg-gray-700 border border-247-dark-text cursor-pointer hover:bg-gray-700"
                      : "text-lg border border-247-dark-text odd:bg-247-dark-accent3 cursor-pointer hover:bg-gray-700"
                  }
                  key={`driver_${driver.id}`}
                >
                  <td className="px-3 py-5 toggle-check">
                    <Checkbox
                      checked={checkedDrivers.includes(idx) ? true : false}
                      iconColor="#CACACA"
                      name={driver.id.toLowerCase()}
                      handleChange={() => toggleDriversCheck(idx)}
                    />
                  </td>
                  <td className="px-6 py-5">
                    <div>
                      {driver.name}
                      <span className="block text-sm font-light">
                        {driver.email}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={classNames(
                          "rounded-full",
                          "w-4",
                          "h-4",
                          {
                            "bg-active-gradient": driver.status === "approved",
                          },
                          {
                            "bg-closed-gradient": driver.status === "suspended",
                          },
                          { "bg-paused-gradient": driver.status === "pending" }
                        )}
                      ></div>
                      {startCase(
                        driver.status === "approved" ? "active" : driver.status
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-5">{driver.city}</td>
                  <td className="px-6 py-5">{formatNum(276, false, true)}</td>
                  <td className="px-6 py-5">{formatNum(76560, true, true)}</td>
                  <td className="px-6 py-5">{formatNum(0, true, true)}</td>
                </tr>
              ))}
          </DataTable>
          {!fetchingDrivers && !fetchDriversError && drivers.length === 0 && (
            <div className="w-full py-9">
              <NoDataBox
                title="No Campaign Found"
                subtitle="We cannot find any campaign that fits your criteria."
              />
            </div>
          )}
          {!fetchingDrivers && fetchDriversError && (
            <div className="w-full py-9">
              <ErrorBox
                title="Error Retrieving Campaigns"
                subtitle={fetchDriversError}
              />
            </div>
          )}
        </div>
        <div className="flex items-center justify-end mb-20">
          {drivers && drivers.length > 0 && (
            <Pagination
              activePage={currentPage}
              dataLength={driverListSize}
              firstItem={indexOfFirstItem + 1}
              lastItem={indexOfLastItem}
              pages={pages}
              setActivePage={setCurrentPage}
              setVisibleRows={setShownRows}
              visibleRows={shownRows}
            />
          )}
        </div>
      </Dashboard>
    </>
  );
};

export default Drivers;
