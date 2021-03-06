import React, { useEffect } from "react";
import { MdOutlineCalendarToday } from "react-icons/md";
import SelectInput from "./uiComponents/SelectInput";
import TabFilters from "./uiComponents/TabFilters";
import $ from "jquery";
import moment from "moment";
import find from "lodash/find";

const TableHeader = ({
  defaultFilters,
  statusFilters,
  typeFilters,
  selectedStatusFilter,
  setSelectedStatusFilter,
  selectedTypeFilter,
  setSelectedTypeFilter,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) => {
  useEffect(() => {
    $('button[name="campaign-daterange"]').daterangepicker(
      {
        opens: "left",
        ranges: {
          "Last 7 Days": [moment().subtract(6, "days"), moment()],
          "Last 14 Days": [moment().subtract(13, "days"), moment()],
          "Last 30 Days": [moment().subtract(29, "days"), moment()],
          "Last 3 months": [moment().subtract(3, "M"), moment()],
          "Last 12 months": [moment().subtract(12, "M"), moment()],
          "Month to date": [moment().startOf("month"), moment()],
          "All time": [moment().subtract(2, "Y"), moment()],
        },
        startDate: startDate,
        endDate: endDate,
        alwaysShowCalendars: true,
        applyButtonClasses: "range-apply-btn",
      },
      (start, end, _label) => {
        setStartDate(start)
        setEndDate(end)
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex pt-3 px-8 mb-3 items-stretch justify-between">
      <TabFilters
        defaultFilters={defaultFilters}
        filterList={statusFilters}
        activeFilter={selectedStatusFilter}
        setActiveFilter={setSelectedStatusFilter}
      />
      <div className="w-40 flex items-center bg-247-tab-bg justify-center rounded-lg">
        <div className="w-full">
          <SelectInput
            standAlone
            options={typeFilters}
            value={find(typeFilters, { value: selectedTypeFilter })}
            handleChange={(item) =>
              item.value === defaultFilters.type
                ? setSelectedTypeFilter(undefined)
                : setSelectedTypeFilter(item.value)
            }
            bgColor="#222"
            borderColor="#222"
          />
        </div>
      </div>
      <button
        name="campaign-daterange"
        className="flex items-center bg-247-tab-bg p-4 rounded-lg text-white text-base font-semibold"
      >
        <MdOutlineCalendarToday size={20} className="mr-3" />
        Set Date Filter
      </button>
    </div>
  );
};

export default TableHeader;
